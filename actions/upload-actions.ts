"use server"

import { fetchAndExtractPdfText } from "@/lib/langchain"
import { generateSummaryFromOpenAI } from "@/lib/openai"
import { generateSummaryFromGeminiAI } from "@/lib/geminiai"
import { getDbConnection } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

type PdfSummaryType = {
  userId?: string
  fileUrl: string
  summary: any
  title: string
  fileName: string
}

export async function generatePdfText({ fileUrl }: { fileUrl: string }) {
  if (!fileUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    }
  }

  try {
    const pdfText = await fetchAndExtractPdfText(fileUrl)
    console.log({ pdfText })

    if (!pdfText) {
      return {
        success: false,
        message: "Failed to fetch and extract PDF text",
        data: null,
      }
    }
    return {
      success: true,
      message: "Summary generated successfully",
      data: {
        pdfText,
      },
    }
  } catch (err) {
    return {
      success: false,
      message: "Failed to fetch and extract PDF text",
      data: null,
    }
  }
}

export async function generatePdfSummary({
  pdfText,
  fileName,
}: {
  pdfText: string
  fileName: string
}) {
  let summary
  try {
    summary = await generateSummaryFromOpenAI(pdfText)
    console.log("Summary", { summary })
  } catch (error) {
    console.log(error)
    //call gemini
    if (error instanceof Error && error.message === "RATE_LIMIT_EXCEEDED") {
      try {
        summary = await generateSummaryFromGeminiAI(pdfText)
      } catch (geminiError) {
        console.error(
          "Gemini API failed after OpenAI quote exceeded",
          geminiError
        )
        return {
          success: false,
          message: "File upload failed",
          data: null,
        }
      }
    }
  }

  if (!summary) {
    return {
      success: false,
      message: "Failed to generate summary",
      data: null,
    }
  }

  return {
    success: true,
    message: "Failed to generate summary",
    data: {
      title: fileName,
      summary,
    },
  }
}

async function savePdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  //sql inserting pdf summary
  try {
    const sql = await getDbConnection()
    const [savedSummary] = await sql`INSERT INTO pdf_summaries (
      user_id,
      original_file_url,
      summary_text,
      title,
      file_name
    ) VALUES (
      ${userId},
      ${fileUrl},
      ${summary},
      ${title},
      ${fileName}
    ) RETURNING id, summary_text;`

    return savedSummary
  } catch (error) {
    console.error("Error saving PDF summary", error)
    throw error
  }
}

export async function storePdfSummaryAction({
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  //user is logged in and has a userId
  // savePdfSummary
  //savePdfSummary()

  let savedSummary: any
  try {
    const { userId } = await auth()
    if (!userId) {
      return {
        success: false,
        message: "User not found",
      }
    }

    savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    })

    if (!savedSummary) {
      return {
        success: false,
        message: "Failed to save PDF summary, please try again...",
      }
    }
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error saving PDF summary",
    }
  }

  // Revalidate the cache
  revalidatePath(`summaries/${savedSummary.id}`)

  return {
    success: true,
    message: "PDF summary saved successfully",
    data: {
      id: savedSummary.id,
    },
  }
}
