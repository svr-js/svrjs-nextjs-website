import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Download } from "lucide-react";
import Link from "next/link";
import clientPromise from "@/lib/db";

interface Download {
  _id: string;
  date: string;
  fileName: string;
  version: string;
  fileSize: string;
  downloadLink?: string; // Optional
}

export const dynamic = "force-static";

const DownloadPage = async () => {
  let error: Error | null = null;
  let downloads: Download[] = [];

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    downloads = (await db
      .collection("downloads")
      .find()
      .toArray()) as unknown as Download[];
  } catch (err) {
    error = err as Error;
  }

  return (
    <section
      id="download"
      className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Downloads
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Get all the latest versions of SVR.JS here! Other SVR.JS downloads can
        be found in{" "}
        <Link
          href="https://downloads.svrjs.org"
          className="text-black dark:text-white underline"
        >
          SVR.JS downloads server
        </Link>
        .
      </p>
      {error && <p className="text-red-500">{error.message}</p>}
      <Table>
        <TableCaption>A list of all available downloads.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead>File Name</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>File Size</TableHead>
            <TableHead className="text-right">Download Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {downloads
            .slice(downloads.length - 10 < 0 ? 0 : downloads.length - 10)
            .reverse()
            .map((download) => (
              <TableRow key={download._id}>
                <TableCell className="font-medium">{download.date}</TableCell>
                <TableCell>{download.fileName}</TableCell>
                <TableCell>{download.version}</TableCell>
                <TableCell className="text-left">{download.fileSize}</TableCell>
                <TableCell className="flex items-center justify-end">
                  {download.downloadLink ? (
                    <Link
                      href={download.downloadLink}
                      download={true}
                      className={`${buttonVariants({ variant: "ghost" })}`}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Link>
                  ) : (
                    <Button variant={"ghost"} disabled>
                      <Download className="w-4 h-4 mr-2" />
                      Unavailable
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default DownloadPage;
