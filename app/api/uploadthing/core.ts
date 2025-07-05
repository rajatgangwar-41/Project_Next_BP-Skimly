import { currentUser } from "@clerk/nextjs/server"
import { UploadThingError } from "uploadthing/server"
import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async ({ req }) => {
      // get user info
      const user = await currentUser()

      if (!user) throw new UploadThingError("Unauthorized")

      return { userID: user.id }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("upload completed for user id", metadata.userID)
      console.log("file url", file.ufsUrl)

      return { userID: metadata.userID, url: file.ufsUrl, name: file.name }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
