import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
  imageUploader: f({
    "application/zip": { maxFileSize: "8MB" }
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("file url", file.url);
  })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
