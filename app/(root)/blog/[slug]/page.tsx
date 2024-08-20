import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { format } from "date-fns";

async function getData(slug: string) {
	const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage,
        _createdAt
    }[0]`;

	const data = await client.fetch(query);
	return data;
}

interface BlogSlugArticle {
	currentSlug: string;
	title: string;
	content: any;
	titleImage: string;
	_createdAt: string;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const data = await getData(params.slug);

	if (!data) {
		return {
			title: "Not Found",
			description: "Blog post not found",
		};
	}

	return {
		title: data.title,
		description: data.smallDescription,
		openGraph: {
			title: data.title,
			description: data.smallDescription,
			url: `https://svrjs.org/blog/${data.currentSlug}`,
			type: "website",
			images: [
				{
					url: urlFor(data.titleImage).url(),
					width: 800,
					height: 600,
					alt: data.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			site: "@SVR_JS",
			title: data.title,
			description: data.smallDescription,
			images: [urlFor(data.titleImage).url()],
			creator: "@SVR_JS",
		},
	};
}

export default async function BlogSlugArticle({
	params,
}: {
	params: { slug: string };
}) {
	const data: BlogSlugArticle = await getData(params.slug);

	if (!data) {
		notFound();
	}

	const formattedDate = format(new Date(data._createdAt), "MMMM d, yyyy");

	return (
		<>
			<section className="max-w-5xl container mx-auto py-8 md:py-28 flex flex-col items-center px-4">
				<Link
					href="/blog?page=1"
					className="self-start mb-8 text-primary hover:text-green-300 transition-all flex items-center"
				>
					<ArrowLeft className="mr-2" />
					Back to Blog
				</Link>
				<header className="text-start mb-8 w-full">
					{data.titleImage && (
						<div className="mb-2">
							<h1 className="text-3xl md:text-5xl mb-12 py-4 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
								{data.title}
							</h1>
							<Image
								src={urlFor(data.titleImage).url()}
								alt={data.title}
								width={1200}
								height={800}
								priority
								className="w-full h-auto object-cover rounded-md"
							/>
							<p className="mt-4 text-xl text-muted-foreground">
								Uploaded at {formattedDate}
							</p>{" "}
						</div>
					)}
				</header>
				<Separator className="mb-6" />
				<article className="prose max-w-full md:prose-lg dark:prose-invert">
					<PortableText value={data.content} />
				</article>
			</section>
		</>
	);
}
