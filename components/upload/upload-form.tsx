"use client"

import UploadFormInput from "@/components/upload/upload-form-input"
import { useUploadThing } from "@/utils/uploadthing"
import { z } from "zod"
import { toast } from "sonner"
import {
  generatePdfSummary,
  storePdfSummaryAction,
} from "@/actions/upload-actions"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
})

export default function UploadForm() {
  let currentToastId: string | number | undefined
  const formRef = useRef<HTMLFormElement | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      if (currentToastId) {
        toast.success("PDF Uploaded Successfully!", {
          id: currentToastId,
          description: "Starting AI processing...",
        })
      }
    },
    onUploadError: (err) => {
      if (currentToastId) {
        toast.error("Upload Failed", {
          id: currentToastId,
          description:
            err.message || "An unknown error occurred during upload.",
          icon: "❌",
        })
      } else {
        toast.error("Error occurred while uploading", {
          description: err.message || "Invalid file",
          icon: "❌",
        })
      }
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      const formData = new FormData(e.currentTarget)
      const file = formData.get("file") as File

      const validatedFields = schema.safeParse({ file })

      if (!validatedFields.success) {
        toast.error("Validation Error", {
          id: currentToastId,
          description:
            validatedFields.error.flatten().fieldErrors.file?.[0] ??
            "Invalid file format or size.",
          icon: "❌",
        })
        throw new Error(
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
            "Invalid file format or size."
        )
      }

      currentToastId = toast.loading("⬆️ Uploading PDF", {
        description: "Your PDF is being uploaded. Please wait...",
      })

      // Upload the pdf to uploadthing
      const resp = await startUpload([file])

      if (!resp || resp.length === 0) throw new Error("Response is invalid")

      toast.loading("🧠 Processing PDF", {
        id: currentToastId,
        description: "Hang tight! Our AI is reading through your document! ⏳",
      })

      // Parse the pdf using langchain
      const result = await generatePdfSummary(resp)
      console.log("🚀 ~ handleSubmit ~ summary:", result)

      const { data = null, message = null } = result || {}

      if (data) {
        toast.loading("💾 Saving PDF...", {
          id: currentToastId,
          description: "Hang tight! We are saving your summary! ✨",
        })

        let storeResult

        if (data.summary) {
          storeResult = await storePdfSummaryAction({
            summary: data.summary,
            fileUrl: resp[0].serverData.url,
            title: data.title,
            fileName: file.name,
          })
        }

        toast.success("💾 Saved PDF in the DB...", {
          id: currentToastId,
          description:
            "Hooray! Your PDF has been successfully summarized and saved",
        })

        formRef.current?.reset()
        router.push(`summaries/${storeResult?.data?.id}`)
      } else {
        toast.error("AI couldn't summarize", {
          id: currentToastId,
          description: "AI Model Error",
          icon: "❌",
        })
      }
    } catch (error) {
      if (currentToastId) {
        toast.error("An unexpected error occurred", {
          id: currentToastId,
          description: "Please check your network or try again.",
          icon: "❌",
        })
      }
    } finally {
      currentToastId = undefined
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
