"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const MarkdownEditor = dynamic(() => import("@uiw/react-md-editor"), {
	ssr: false,
});

const EditPage = ({ params }: { params: { slug: string } }) => {
	const router = useRouter();
	const { slug } = params;
	const { toast } = useToast();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (slug) {
			fetch(`/api/mdx/pages/${slug}`)
				.then((response) => response.json())
				.then((data) => {
					setTitle(data.title);
					setContent(data.content);
				})
				.catch((error) => console.error("Failed to load page", error));
		}
	}, [slug]);

	const savePage = async () => {
		setLoading(true);
		const response = await fetch(`/api/mdx/pages/${slug}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title, content }),
		});

		if (response.ok) {
			setLoading(false);
			toast({ description: "Page successfully updated" });
			router.push(`/admin/multi-logs/`);
		} else {
			setLoading(false);
			// TEMPERARORY ERROR
			router.push(`/admin/multi-logs/`);
			toast({ description: "Updated but cant return data" });
		}
	};

	const handleEditorChange = (value?: string) => {
		if (value !== undefined) {
			setContent(value);
		}
	};

	return (
		<section id="edit-page" className="wrapper container">
			<h1 className="text-3xl font-bold py-6">Edit Page: {slug}</h1>
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Page Title"
			/>
			<MarkdownEditor
				value={content}
				onChange={handleEditorChange}
				height={560}
			/>
			<Button onClick={savePage} disabled={loading} className="mt-4">
				Save
			</Button>
		</section>
	);
};

export default EditPage;
