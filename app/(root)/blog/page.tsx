import React from "react";
import { Metadata } from "next";
import BlogCards from "@/components/cards/BlogCards";

export const metadata: Metadata = {
	title: "Blog - SVRJS",
	description:
		"Welcome to the SVR.JS Blog! Explore our latest blog posts featuring web development, web application security, and web server administration tips. Stay tuned for the latest SVR.JS updates.",
	openGraph: {
		title: "Blog - SVRJS",
		description:
			"Welcome to the SVR.JS Blog! Explore our latest blog posts featuring web development, web application security, and web server administration tips. Stay tuned for the latest SVR.JS updates.",
		url: "https://svrjs.org/blog",
		type: "website",
		images: [
			{
				url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
				width: 800,
				height: 600,
				alt: "Blog - SVRJS",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@SVR_JS",
		title: "Blog - SVRJS",
		description:
			"Welcome to the SVR.JS Blog! Explore our latest blog posts featuring web development, web application security, and web server administration tips. Stay tuned for the latest SVR.JS updates.",
		images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
		creator: "@SVR_JS",
	},
};

const BlogPage = async ({
	searchParams,
}: {
	searchParams: { page?: string };
}) => {
	// Optionally, you can fetch some initial data here if needed.

	return (
		<section
			id="blog"
			className="wrapper container py-24 md:py-28 gap-2 flex-center flex-col"
		>
			<h1 className="text-3xl md:text-5xl mb-12 pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				SVRJS Blog Post
			</h1>
			<BlogCards searchParams={searchParams} />
		</section>
	);
};

export default BlogPage;
