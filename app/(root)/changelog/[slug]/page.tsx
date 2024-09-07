import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import clientPromise from "@/lib/db";
import { notFound } from "next/navigation";

interface Page {
  title: string;
  content: string;
}

export const dynamic = "force-static";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  let page: Page | null = null;
  let isNotFound = false;

  try {
    const client = await clientPromise;
    const db = client.db();

    const fetchedPage = (await db
      .collection("pages")
      .findOne({ slug })) as unknown as Page;
    if (fetchedPage) {
      page = fetchedPage;
    } else {
      isNotFound = true;
    }
  } catch (err) {}

  if (isNotFound) {
    notFound();
  }

  if (!page) {
    return null;
  }

  return (
    <>
      <section className="wrapper container py-24 md:py-28 gap-2 flex flex-col">
        <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
          {page.title} Change Log
        </h1>
        <ReactMarkdown className="prose max-w-full md:prose-lg dark:prose-invert">
          {page.content}
        </ReactMarkdown>
      </section>
    </>
  );
};

export async function generateStaticParams() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const slugs = await db.collection("pages").find().toArray();
    return slugs.map((element) => {
      return { slug: element.slug };
    });
  } catch (err) {
    return [];
  }
}

export default Page;
