import { Button } from "@/components/ui/button";
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

interface Mods {
  _id: string;
  date: string;
  fileName: string;
  version: string;
  fileSize: string;
  downloadLink: string;
}

export const dynamic = "force-static";

const ModsPage: React.FC = async () => {
  let error: Error | null = null;
  let downloads: Mods[] = [];

  try {
    const client = await clientPromise;
    const db = client.db("downloadsDatabase");
    downloads = (await db
      .collection("mods")
      .find()
      .toArray()) as unknown as Mods[];
  } catch (err) {
    error = err as Error;
  }

  return (
    <section
      id="mods"
      className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        SVR.JS mods
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Get all the latest version of SVR.JS mods here! Notes can be found at{" "}
        <Link
          href="/docs/mod-notes"
          className="font-light text-white hover:underline"
        >
          &ldquo;SVR.JS mod notes&rdquo; section in SVR.JS documentation
        </Link>
        . Other SVR.JS mods downloads can be found in{" "}
        <Link
          href="https://downloads.svrjs.org/mods"
          className="font-light text-white hover:underline"
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
            .slice(0, 10)
            .reverse()
            .map((download) => (
              <TableRow key={download._id}>
                <TableCell className="font-medium">{download.date}</TableCell>
                <TableCell>{download.fileName}</TableCell>
                <TableCell>{download.version}</TableCell>
                <TableCell className="text-left">{download.fileSize}</TableCell>
                <TableCell className="flex items-center justify-end">
                  <Link href={download.downloadLink}>
                    <Button variant={"ghost"} className="">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default ModsPage;
