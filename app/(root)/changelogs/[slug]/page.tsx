"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const Page = ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const [page, setPage] = useState<{ title: string; content: string } | null>(
		null
	);

	useEffect(() => {
		fetch(`/api/mdx/pages/${slug}`)
			.then((response) => response.json())
			.then((data) => setPage(data))
			.catch((error) => console.error("Failed to load page", error));
	}, [slug]);

	if (!page) {
		return (
			<section id="404error" className="flex-center flex-col wrapper container">
				<h1 className="text-3xl md:text-5xl text-center">
					<span className="text-red-500">404</span> Page not Found
				</h1>
				<p className="text-lg mt-3 text-muted-foreground">
					Please return back to Home
				</p>
			</section>
		);
	}

	return (
		<section className="container mx-auto p-4">
			<h1 className="text-3xl font-bold py-6">{page.title}</h1>
			<ReactMarkdown>{page.content}</ReactMarkdown>
		</section>
	);
};

export default Page;
