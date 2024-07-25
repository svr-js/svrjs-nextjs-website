"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
} from "@/components/ui/dialog";

interface PageEntry {
	title: string;
	slug: string;
	content: string;
}

const MultiLogs = () => {
	const [pages, setPages] = useState<PageEntry[]>([]);
	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [pageTitle, setPageTitle] = useState("");

	useEffect(() => {
		fetch("/api/mdx/pages")
			.then((response) => response.json())
			.then((data) => setPages(data))
			.catch((error) => console.error("Failed to load pages", error));
	}, []);

	const createPage = async () => {
		setLoading(true);
		const slug = pageTitle.toLowerCase().replace(/\s+/g, "-");
		const response = await fetch("/api/mdx/pages", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: pageTitle, slug, content: "" }),
		});

		if (response.ok) {
			const newPage = await response.json();
			setPages([...pages, newPage]);
			setPageTitle("");
			setOpen(false);
			toast({ description: "Page created successfully" });
		} else {
			const errorData = await response.json();
			console.error("Failed to create page:", errorData);
			toast({ description: `Error: ${errorData.message}` });
		}
		setLoading(false);
	};

	const deletePage = async (slug: string) => {
		setLoading(true);
		const response = await fetch(`/api/mdx/pages/${slug}`, {
			method: "DELETE",
		});

		if (response.ok) {
			setPages(pages.filter((page) => page.slug !== slug));
			toast({ description: "Page deleted successfully" });
		} else {
			const errorData = await response.json();
			console.error("Failed to delete page:", errorData);
			toast({ description: `Error: ${errorData.message}` });
		}
		setLoading(false);
	};

	return (
		<section id="logs-page" className="wrapper container">
			<section id="create-page" className="py-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-2">Create New Page</h2>
				<Button variant={"secondary"} onClick={() => setOpen(true)}>
					Create New Page
				</Button>
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Enter Page Title</DialogTitle>
						</DialogHeader>
						<Input
							value={pageTitle}
							onChange={(e) => setPageTitle(e.target.value)}
							placeholder="Page Title"
						/>
						<DialogFooter>
							<Button disabled={loading} onClick={createPage}>
								Continue
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</section>
			<section id="pages-list" className="pb-16">
				<h2 className="text-3xl md:text-4xl font-bold">Existing Pages</h2>
				<p className="mb-4">Total Pages: {pages.length}</p>
				<Table className="w-full mt-4 border-muted">
					<TableHeader>
						<TableRow>
							<TableHead className="border-b px-4 py-2">Slug</TableHead>
							<TableHead className="border-b px-4 py-2">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{pages.map((page) => (
							<TableRow key={page.slug}>
								<TableCell className="border-b px-4 py-2">
									<a
										href={`/changelogs/${page.slug}`}
										className="text-blue-500 underline"
									>
										{page.slug}
									</a>
								</TableCell>
								<TableCell className="border-b px-4 py-2">
									<Button
										variant={"outline"}
										onClick={() =>
											router.push(`/admin/multi-logs/${page.slug}`)
										}
									>
										Edit
									</Button>
									<Button
										variant={"destructive"}
										onClick={() => deletePage(page.slug)}
										className="ml-2"
										disabled={loading}
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</section>
		</section>
	);
};

export default MultiLogs;
