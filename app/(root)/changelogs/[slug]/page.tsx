import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote/rsc";
import ReactMarkdown from "react-markdown";
import { ChangelogLayout } from "@/components/shared/providers/changelogLayout";
import { getBlogPosts } from "@/lib/log";

const changelogsDir = path.resolve(process.cwd(), "data", "pages");

export default async function ChangelogPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	let posts = await getBlogPosts();
	let post = posts.find((post) => post.slug === params.slug);

	try {
		return (
			<ChangelogLayout>
				<ReactMarkdown>{post?.content}</ReactMarkdown>
			</ChangelogLayout>
		);
	} catch (error) {
		console.error("Error loading changelog page:", error);
		return <div>Error loading the page.</div>;
	}
}
