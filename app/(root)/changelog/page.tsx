import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { CHANGE_LOGS } from "@/constants/guidelines";
import { Skeleton } from "@/components/ui/skeleton";
import clientPromise from "@/lib/db";

interface Bullet {
  point: string;
}

interface LOGS {
  _id: string;
  date: string;
  version: string;
  bullets?: Bullet[]; // Make bullets optional
}

export const dynamic = "force-static";

const LogsPage: React.FC = async () => {
  let error: Error | null = null;
  let downloads: LOGS[] = [];

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    downloads = (await db
      .collection("logs")
      .find()
      .toArray()) as unknown as LOGS[];
  } catch (err) {
    error = err as Error;
  }

  const reversedDownloads = [...downloads].reverse();

  return (
    <section
      id="logs"
      className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        SVR.JS change log
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        See the changes done to SVR.JS web server.
      </p>
      {error && <p className="text-red-500">{error.message}</p>}

      {reversedDownloads.map((download) => (
        <div
          key={download._id}
          className="flex-start prose max-w-full md:prose-lg dark:prose-invert flex-col mb-4"
        >
          <h2 className="font-bold text-3xl">{download.version}</h2>
          <span className="font-medium italic">{download.date}</span>
          <ul className="list-disc pl-5">
            {(download.bullets ?? []).map((bullet, index) => (
              <li key={index}>{bullet.point}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="prose max-w-full md:prose-lg dark:prose-invert">
        <ReactMarkdown>{CHANGE_LOGS}</ReactMarkdown>
      </div>
    </section>
  );
};

export default LogsPage;
