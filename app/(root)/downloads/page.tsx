"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import Link from "next/link";

interface Download {
  _id: string;
  date: string;
  fileName: string;
  version: string;
  fileSize: string;
  downloadLink: string;
}

const DownloadPage: React.FC = () => {
  const [downloads, setDownloads] = useState<Download[]>([]);
  const [error, setError] = useState("");

  const fetchDownloads = async () => {
    try {
      const response = await fetch("/api/downloads", {
        method: "GET",
      });
      if (response.ok) {
        const data: Download[] = await response.json();
        setDownloads(data);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchDownloads();

    const interval = setInterval(() => {
      fetchDownloads();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="download"
      className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Downloads
      </h1>
      <p className="text-lg text-muted-foreground text-start mb-4">
        Get all the latest version of SVRJS download and compiled Files here!
      </p>
      {error && <p className="text-red-500">{error}</p>}
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

export default DownloadPage;
