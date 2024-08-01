"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

const Page = ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const [page, setPage] = useState<{ title: string; content: string } | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		const fetchPage = async () => {
			try {
				const response = await fetch(`/api/mdx/pages/${slug}`);
				if (response.ok) {
					const data = await response.json();
					setPage(data);
					return (document.title = `${data.title} Change Log | SVRJS`);
				} else {
					if (response.status === 404) {
						setNotFound(true);
						return (document.title = "404 Not Found");
					}
				}
			} catch (error) {
				console.error("Failed to load page", error);
				setNotFound(true);
			} finally {
				setLoading(false);
			}
		};

		fetchPage();
	}, [slug]);

	if (loading) {
		return (
			<section className="wrapper container py-24 md:py-28 gap-4 flex flex-col">
				<div className="mb-3">
					<Skeleton className="w-[400px] h-[50px] rounded-md" />
				</div>
				<div className="flex flex-col gap-4">
					<Skeleton className="w-[300px] h-[30px] rounded-md" />
					<Skeleton className="w-[200px] h-[20px] rounded-md" />
					<Skeleton className="w-[200px] h-[20px] rounded-md" />
					<Skeleton className="w-[200px] h-[20px] rounded-md" />
				</div>
			</section>
		);
	}

	if (notFound) {
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

export default Page;
