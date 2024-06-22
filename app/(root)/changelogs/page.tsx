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

interface LOGS {
  _id: string;
  date: string;
  fileName: string;
  version: string;
  fileSize: string;
  downloadLink: string;
}

const DownloadPage: React.FC = () => {
  const [downloads, setDownloads] = useState<LOGS[]>([]);
  const [error, setError] = useState("");

  const fetchDownloads = async () => {
    try {
      const response = await fetch("/api/logs", {
        method: "GET",
      });
      if (response.ok) {
        const data: LOGS[] = await response.json();
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
      id="logs"
      className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Server LOGS
      </h1>
      <p className="text-lg text-muted-foreground text-start mb-4">
        Get all the latest version of SVRJS download and compiled Files here!
      </p>
      {error && <p className="text-red-500">{error}</p>}

      {downloads
        .slice(0, 10)
        .reverse()
        .map((download) => (
          <div key={download._id}>
            <span className="font-medium">{download.date}</span>
            <span>{download.fileName}</span>
            <span>{download.version}</span>
            <span className="text-left">{download.fileSize}</span>
            <span className="flex items-center justify-end">
              <Link href={download.downloadLink}>
                <Button variant={"ghost"} className="">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </Link>
            </span>
          </div>
        ))}
    </section>
  );
};

export default DownloadPage;
