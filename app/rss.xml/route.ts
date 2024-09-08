import { NextResponse } from "next/server";
import RSS from "rss";
import { client } from "@/lib/sanity";
import { toHTML } from "@portabletext/to-html";

export const dynamic = "force-static";

export async function GET() {
  // Define the site URL based on the environment
  const SITE_URL =
    process.env.NODE_ENV === "production"
      ? "https://svrjs.vercel.app"
      : "http://localhost:3000";

  const postsQuery = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    content,
    titleImage,
    _createdAt
  }`;

  const posts = await client.fetch(postsQuery);

  const feed = new RSS({
    title: "SVR.JS Blog",
    description: "Explore the latest blog posts from SVR.JS",
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: `${SITE_URL}`,
    image_url: `${SITE_URL}/metadata/svrjs-cover.png`,
    language: "en-US",
    pubDate: new Date().toUTCString()
  });

  posts.forEach((post: any) => {
    feed.item({
      title: post.title,
      description: toHTML(post.content),
      url: `${SITE_URL}/blog/${post.slug}`,
      date: new Date(post._createdAt).toUTCString()
      // uncomment this if u want to
      // enclosure: { url: urlFor(post.titleImage).url() },
      // author: "SVR.JS",
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
