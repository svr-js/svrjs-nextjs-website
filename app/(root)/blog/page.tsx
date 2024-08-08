import React from "react";
import { Metadata } from "next";
import BlogCards from "@/components/cards/BlogCards";

export const metadata: Metadata = {
	title: "Blog - SVRJS",
};

const BlogPage = () => {
	return (
		<section
			id="blog"
			className="wrapper container py-24 md:py-28 gap-2 flex-center flex-col"
		>
			<h1 className="text-3xl md:text-5xl mb-12 pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				SVRJS Blog Post
			</h1>
			<BlogCards />
		</section>
	);
};

export default BlogPage;
