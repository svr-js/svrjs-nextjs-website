import React from "react";
import { client } from "@/lib/sanity";
import { Metadata } from "next";
import BlogCards from "@/components/cards/BlogCards";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog - SVR.JS",
  description:
    "Welcome to the SVR.JS Blog! Explore our latest blog posts featuring web development, web application security, and web server administration tips. Stay tuned for the latest SVR.JS updates.",
  openGraph: {
    title: "Blog - SVR.JS",
    description:
      "Welcome to the SVR.JS Blog! Explore our latest blog posts featuring web development, web application security, and web server administration tips. Stay tuned for the latest SVR.JS updates.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "Blog - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Blog - SVR.JS",
    description:
      "Welcome to the SVR.JS Blog! Explore our latest blog posts featuring web development, web application security, and web server administration tips. Stay tuned for the latest SVR.JS updates.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};

const BlogPage = async ({ params }: { params: { id: string } }) => {
  // Optionally, you can fetch some initial data here if needed.
  let id = parseInt(params.id);
  if (isNaN(id)) id = 1;

  return (
    <section
      id="blog"
      className="wrapper container py-24 md:py-28 gap-2 flex-center flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        SVR.JS Blog
      </h1>
      <p className="text-muted-foreground flex-center mb-2">
        Our blog has web development, web server administration, and web
        application security tips.
        <Link href="/rss.xml" rel="alternate" type="application/rss+xml">
          <Button variant={"link"} className="mx-0 px-2">
            <Rss className="w-5 h-5 mr-1" /> RSS feed
          </Button>
        </Link>
      </p>
      <BlogCards page={id} />
    </section>
  );
};

export async function generateStaticParams() {
  // Change in BlogCards component and in /api/revalidate route too!
  const cardsPerPage = 6;

  const totalPostsQuery = `count(*[_type == 'blog'])`;
  const totalPosts: number = await client.fetch(
    totalPostsQuery,
    {},
    { cache: "no-store" }
  );

  const totalPages = Math.ceil(totalPosts / cardsPerPage);

  let ids: any[] = [];
  for (let i = 1; i <= totalPages; i++) {
    ids.push({ id: i.toString() });
  }

  return ids;
}

export default BlogPage;
