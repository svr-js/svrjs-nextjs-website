import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";
import { Card, CardContent } from "../ui/card";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { format } from "date-fns";

interface BlogPostcard {
	title: string;
	smallDescription: string;
	currentSlug: string;
	titleImage: string;
	_createdAt: string;
}

interface BlogCardsProps {
	searchParams: { page?: string };
}

const BlogCards: React.FC<BlogCardsProps> = async ({ searchParams }) => {
	const cardsPerPage = 6;
	const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

	const query = `*[_type == 'blog'] | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage,
        _createdAt
    }[${(currentPage - 1) * cardsPerPage}...${currentPage * cardsPerPage}]`;

	const posts: BlogPostcard[] = await client.fetch(query);

	const totalPostsQuery = `count(*[_type == 'blog'])`;
	const totalPosts: number = await client.fetch(totalPostsQuery);

	const totalPages = Math.ceil(totalPosts / cardsPerPage);

	return (
		<>
			<section className="grid max-w-6xl gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
				{posts.map((post, idx) => {
					const formattedDate = format(
						new Date(post._createdAt),
						"MMMM d, yyyy"
					);

					const truncatedDescription =
						post.smallDescription.length > 130
							? post.smallDescription.substring(0, 130) + "..."
							: post.smallDescription;

					return (
						<Card
							className="group h-full w-full rounded-lg border overflow-hidden"
							key={idx}
						>
							<Link href={`/blog/${post.currentSlug}`} className="block">
								<div className="relative overflow-hidden rounded-t-lg">
									<Image
										src={urlFor(post.titleImage).url()}
										alt={post.title}
										width={500}
										height={300}
										priority
										className="w-full object-cover transition-transform duration-200 group-hover:scale-105"
									/>
								</div>
								<CardContent className="p-4">
									<div className="flex-between mb-2 py-2">
										<h3 className="text-xl font-semibold leading-tight">
											{post.title}
										</h3>
										<div className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 duration-300">
											<ExternalLink />
										</div>
									</div>
									<p className="text-sm text-muted-foreground">
										{truncatedDescription}
									</p>
									<p className="text-xs text-muted-foreground mt-2">
										Published on: {formattedDate}
									</p>
								</CardContent>
							</Link>
						</Card>
					);
				})}
			</section>
			<div className="flex-center mt-12">
				{totalPages > 1 && (
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								{currentPage > 1 && (
									<PaginationPrevious href={`?page=${currentPage - 1}`} />
								)}
							</PaginationItem>
							{Array.from({ length: totalPages }).map((_, i) => (
								<PaginationItem key={i}>
									<PaginationLink
										href={`?page=${i + 1}`}
										isActive={currentPage === i + 1}
									>
										{i + 1}
									</PaginationLink>
								</PaginationItem>
							))}
							<PaginationItem>
								{currentPage < totalPages && (
									<PaginationNext href={`?page=${currentPage + 1}`} />
								)}
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				)}
			</div>
		</>
	);
};

export default BlogCards;
