import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";
import { Card, CardContent } from "../ui/card";

interface BlogPostcard {
	title: string;
	smallDescription: string;
	currentSlug: string;
	titleImage: string;
}

async function getData() {
	const query = `*[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

	const data = await client.fetch(query);

	return data;
}

const BlogCards = async () => {
	const data: BlogPostcard[] = await getData();
	console.log(data);

	return (
		<section className="grid max-w-6xl gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
			{data.map((post, idx) => (
				<Card
					className="group h-full w-full rounded-lg border overflow-hidden"
					key={idx}
				>
					<Link href={`/blog/${post.currentSlug}`} className="block">
						<div className="relative overflow-hidden rounded-t-lg">
							<Image
								src={urlFor(post.titleImage).url()}
								alt="SVRJS Blog Cover"
								width={500}
								height={300}
								className="w-full object-cover transition-transform duration-200 group-hover:scale-105"
							/>
						</div>
						<CardContent className="p-4">
							<div className="flex-between mb-2 py-2 ">
								<h3 className="text-xl font-semibold leading-tight">
									{post.title}
								</h3>
								<div className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 duration-300">
									<ExternalLink />
								</div>
							</div>
							<p className="text-sm text-muted-foreground">
								{post.smallDescription}
							</p>
						</CardContent>
					</Link>
				</Card>
			))}
		</section>
	);
};

export default BlogCards;
