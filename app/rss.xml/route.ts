import { NextResponse } from "next/server";
import RSS from "rss";
import { client } from "@/lib/sanity";
import { toHTML } from "@portabletext/to-html";

export async function GET() {
	const postsQuery = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    content,
    titleImage,
    _createdAt
  }`;

	const SITE_URL =
		process.env.NODE_ENV === "production"
			? "http://localhost:3000"
			: "https://svrjs.vercel.app";

	const posts = await client.fetch(postsQuery);

	const feed = new RSS({
		title: "SVRJS Blog",
		description: "Explore the latest blog posts from SVRJS",
		feed_url: `${SITE_URL}/rss.xml`,
		site_url: `${SITE_URL}`,
		image_url: `${SITE_URL}/metadata/svrjs-cover.png`,
		language: "en-US",
		pubDate: new Date().toUTCString(),
	});

	posts.forEach((post: any) => {
		feed.item({
			title: post.title,
			description: toHTML(post.content),
			url: `${SITE_URL}/blog/${post.slug}`,
			date: new Date(post._createdAt).toUTCString(),
			// enclosure: { url: urlFor(post.titleImage).url() },
			// author: "SVRJS",
		});
	});

	return NextResponse.json(feed.xml({ indent: true }), {
		headers: { "Content-Type": "application" },
	});
}
