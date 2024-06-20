import { z } from "zod";

export const downloadSchema = z.object({
  fileName: z.string().nonempty(),
  version: z.string().nonempty(),
  downloadLink: z.string().url().nonempty(),
  fileSize: z.string().nonempty(),
});
