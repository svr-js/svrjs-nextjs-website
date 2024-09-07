import ReactMarkdown from "react-markdown";
import { VULNERABILITY } from "@/constants/guidelines";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import clientPromise from "@/lib/db";
import Link from "next/link";

interface Bullet {
  point: string;
  securityAdvisoryUrl: string;
}

interface Vulnerabilities {
  _id: string;
  version: string;
  bullets?: Bullet[]; // Make bullets optional
}

interface ModsVulnerability {
  _id: string;
  title: string;
  slug: string;
  content: string;
  vulnerabilities: string;
}

const Vulnerabilities = async () => {
  let downloads: Vulnerabilities[] = [];
  let mods: ModsVulnerability[] = [];
  let error: Error | null = null;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    downloads = (await db
      .collection("vulnerabilities")
      .find()
      .toArray()) as unknown as Vulnerabilities[];
  } catch (err) {
    error = err as Error;
  }

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const pages = (await db
      .collection("pages")
      .find()
      .toArray()) as unknown as ModsVulnerability[];
    mods = pages.filter(
      (mod: ModsVulnerability) =>
        mod.vulnerabilities && mod.vulnerabilities.trim() !== ""
    );
  } catch (err) {}

  const reversedDownloads = [...downloads].reverse();
  const reversedMods = [...mods].reverse();

  return (
    <section
      id="vulnerabilities"
      className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        SVR.JS Vulnerabilities
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Some older versions of SVR.JS are vulnerable to cyberattacks. It&apos;s
        recommended to update your SVR.JS version to the newest one. If you find
        a security issue with SVR.JS, report it as soon as possible to
        vulnerability-reports@svrjs.org. We&apos;ll mitigate that vulnerability
        if it is possible.
      </p>
      {error && <p className="text-red-500">{error.message}</p>}

      {reversedDownloads.map((download) => (
        <div
          key={download._id}
          className="flex-start flex-col prose dark:prose-invert gap-4"
        >
          <h2 className="font-semibold text-3xl -mb-2">{download.version}</h2>
          <ul className="list-disc pl-5">
            {(download.bullets ?? []).map((bullet, index) => (
              <li key={index}>
                {bullet.point}
                {bullet.securityAdvisoryUrl ? (
                  <>
                    {" "}
                    <Link href={bullet.securityAdvisoryUrl}>
                      View security advisory
                    </Link>
                  </>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="prose max-w-full md:prose-lg dark:prose-invert mb-6 md:mb-9">
        <ReactMarkdown>{VULNERABILITY}</ReactMarkdown>
      </div>

      {/* Section with MODS content */}
      {reversedMods.map((mod) => (
        <div
          key={mod._id}
          className="flex-start flex-col my-6 md:my-9 gap-4 w-full"
        >
          <h2 className="text-2xl md:text-3xl py-1 md:py-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 -mb-1">
            {mod.title}
          </h2>
          {mod.vulnerabilities && (
            <div className="prose max-w-full md:prose-lg dark:prose-invert ">
              <ReactMarkdown>{mod.vulnerabilities}</ReactMarkdown>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export const dynamic = "force-static";

export default Vulnerabilities;
