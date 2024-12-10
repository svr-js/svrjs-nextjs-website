import React from "react";
import { Metadata } from "next";
import BlogCards from "@/components/cards/BlogCards";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog - SVR.JS",
  description:
    "Welcome to the SVR.JS Blog! Discover web development, security tips, and server admin insights. Stay updated with the latest SVR.JS news!",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog` },
  openGraph: {
    title: "Blog - SVR.JS",
    description:
      "Welcome to the SVR.JS Blog! Discover web development, security tips, and server admin insights. Stay updated with the latest SVR.JS news!",
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
      "Welcome to the SVR.JS Blog! Discover web development, security tips, and server admin insights. Stay updated with the latest SVR.JS news!",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};

const BlogPage = async () => {
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
      {/* @ts-expect-error Async Server Component */}
      <BlogCards page={1} />
    </section>
  );
};

export default BlogPage;
