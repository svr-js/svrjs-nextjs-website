import React from "react";
import { Metadata } from "next";
import BlogCards from "@/components/cards/BlogCards";

export const metadata: Metadata = {
	title: "Blog - SVRJS",
};
const BlogPage = () => {
	return (
		<section id="blog" className="mb-12 grid gap-6 p-6 md:gap-12">
			<h2 className="text-3xl sm:text-4xl">SVRJS BlogPage</h2>

			<BlogCards />
		</section>
	);
};

export default BlogPage;
