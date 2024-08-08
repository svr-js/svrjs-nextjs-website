import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

async function getData(slug: string) {
	const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
            title,
            content,
            titleImage
    }[0]`;

	const data = await client.fetch(query);
	return data;
}

interface BlogSlugArticle {
	currentSlug: string;
	title: string;
	content: any;
	titleImage: string;
}

export default async function BlogSlugArticle({
	params,
}: {
	params: { slug: string };
}) {
	const data: BlogSlugArticle = await getData(params.slug);

	return (
		<section className="max-w-5xl container mx-auto py-8 md:py-28 flex flex-col items-center px-4">
			<Link
				href="/blog"
				className="self-start mb-8 text-primary hover:text-green-300 transition-all flex items-center"
			>
				<ArrowLeft className="mr-2" />
				Back to Blog
			</Link>
			<header className="text-start mb-12 w-full">
				{data.titleImage && (
					<div className="mb-8">
						<h1 className="text-3xl md:text-4xl mb-12 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
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
					</div>
				)}
			</header>
			<Separator className="mb-6" />
			<article className="prose max-w-full md:prose-lg dark:prose-invert">
				<PortableText value={data.content} />
			</article>
		</section>
	);
}
