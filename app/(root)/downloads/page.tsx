import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import Link from "next/link";

const downloads = [
  {
    date: "2024-06-01",
    fileName: "SVRJS_v1.0.0.zip",
    version: "1.0.0",
    fileSize: "15MB",
    downloadLink: "/downloads/SVRJS_v1.0.0.zip",
  },
  {
    date: "2024-06-10",
    fileName: "SVRJS_v1.1.0.zip",
    version: "1.1.0",
    fileSize: "18MB",
    downloadLink: "/downloads/SVRJS_v1.1.0.zip",
  },
  {
    date: "2024-06-15",
    fileName: "SVRJS_v1.2.0.zip",
    version: "1.2.0",
    fileSize: "20MB",
    downloadLink: "/downloads/SVRJS_v1.2.0.zip",
  },
  {
    date: "2024-06-20",
    fileName: "SVRJS_v1.3.0.zip",
    version: "1.3.0",
    fileSize: "22MB",
    downloadLink: "/downloads/SVRJS_v1.3.0.zip",
  },
];

const DownloadPage = () => {
  return (
    <section
      id="download"
      className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Downloads
      </h1>
      <p className="text-lg text-muted-foreground text-start mb-4">
        Get all the latest version of SVRJS download and compiled Files here!
      </p>
      <Table>
        <TableCaption>A list of all available downloads.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead>File Name</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Download Link</TableHead>
            <TableHead className="text-right">File Size</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {downloads.map((download) => (
            <TableRow key={download.fileName}>
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

export default DownloadPage;
