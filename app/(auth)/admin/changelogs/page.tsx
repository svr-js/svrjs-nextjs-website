"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { logsSchema } from "@/lib/validations/validation";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import dynamic from "next/dynamic";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
} from "@/components/ui/dialog";

const MarkdownEditor = dynamic(() => import("@uiw/react-md-editor"), {
	ssr: false,
});

interface LogEntry {
	_id: string;
	version: string;
	date: string;
	bullets: { point: string }[];
}

interface PageEntry {
	title: string;
	slug: string;
	content: string; // Add content to the PageEntry interface
}

type LogsFormValues = z.infer<typeof logsSchema>;

const AdminLogPage = () => {
	const [logs, setLogs] = useState<LogEntry[]>([]);
	const [pages, setPages] = useState<PageEntry[]>([]);
	const [error, setError] = useState("");
	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [pageTitle, setPageTitle] = useState("");
	const [selectedPage, setSelectedPage] = useState<PageEntry | null>(null);

	const form = useForm<LogsFormValues>({
		resolver: zodResolver(logsSchema),
		defaultValues: {
			version: "",
			date: "",
			bullets: [{ point: "" }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: "bullets",
	});

	const fetchLogs = async () => {
		try {
			const response = await fetch("/api/logs", { method: "GET" });
			if (response.ok) {
				const data: LogEntry[] = await response.json();
				setLogs(data);
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to fetch logs");
		}
	};

	const fetchPages = async () => {
		try {
			const response = await fetch("/api/mdx/pages", { method: "GET" });
			if (response.ok) {
				const data: PageEntry[] = await response.json();
				setPages(data);
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to fetch pages");
		}
	};

	useEffect(() => {
		fetchLogs();
		fetchPages();
		const interval = setInterval(() => {
			fetchLogs();
			fetchPages();
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	const onSubmit: SubmitHandler<LogsFormValues> = async (data) => {
		setLoading(true);
		const response = await fetch("/api/uploadlogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			form.reset();
			fetchLogs();
			setLoading(false);
			toast({ description: "Logs successfully added" });
		} else {
			setLoading(false);
			toast({ description: "Upload Failed", variant: "destructive" });
		}
	};

	const deleteLog = async (id: string) => {
		try {
			const response = await fetch(`/api/delete/logs/${id}`, {
				method: "DELETE",
			});
			if (response.ok) {
				fetchLogs();
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to delete log");
		}
	};

	const createNewPage = async () => {
		setLoading(true);
		const response = await fetch(`/api/mdx/pages`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: pageTitle }),
		});

		if (response.ok) {
			fetchPages();
			setLoading(false);
			toast({ description: "Page successfully created" });
			setOpen(false);
			setPageTitle("");
		} else {
			setLoading(false);
			toast({ description: "Page creation Failed", variant: "destructive" });
		}
	};

	const handlePageSelect = async (slug: string) => {
		try {
			const response = await fetch(`/api/mdx/pages/${slug}`);
			if (response.ok) {
				const data: PageEntry = await response.json();
				setSelectedPage(data);
			} else {
				toast({
					description: "Failed to fetch page data",
					variant: "destructive",
				});
			}
		} catch (error: any) {
			toast({
				description: error.message || "Failed to fetch page data",
				variant: "destructive",
			});
		}
	};

	return (
		<section id="logs-page" className="wrapper container">
			<h1 className="text-3xl font-bold py-6">Server Logs Form</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="version"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Version Name</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Date</FormLabel>
								<FormControl>
									<Input {...field} placeholder="Released on 24 Nov 2024" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{fields.map((field, index) => (
						<FormField
							key={field.id}
							control={form.control}
							name={`bullets.${index}.point`}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Key Point {index + 1}</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
									<Button
										type="button"
										className="mt-2"
										variant={"secondary"}
										onClick={() => remove(index)}
									>
										Remove
									</Button>
								</FormItem>
							)}
						/>
					))}
					<Button
						type="button"
						className="mb-4"
						size={"icon"}
						variant={"outline"}
						onClick={() => append({ point: "" })}
					>
						+
					</Button>
					<Button
						type="submit"
						className="w-full text-lg rounded-full"
						disabled={loading}
						size={"lg"}
					>
						Submit
					</Button>
				</form>
			</Form>

			{/* Section to create new page */}
			<section id="create-page" className="py-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-2">Multi Log page</h2>
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
							<Button onClick={createNewPage} disabled={loading}>
								Continue
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</section>

			{/* Section to list and delete pages */}
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
											router.push(`/admin/changelogs/${page.slug}`)
										}
									>
										Edit
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</section>

			{/* Section to list and delete logs */}
			<section id="logs-list" className="py-16 md:py-24">
				<h2 className="text-3xl md:text-4xl font-bold">Existing Logs</h2>
				{error && <p className="text-red-500">{error}</p>}
				<Table className="w-full mt-4 border-muted">
					<TableHeader>
						<TableRow>
							<TableHead className="border-b px-4 py-2">Version</TableHead>
							<TableHead className="border-b px-4 py-2">Date</TableHead>
							<TableHead className="border-b px-4 py-2">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{logs
							.slice()
							.reverse()
							.map((log) => (
								<TableRow key={log._id}>
									<TableCell className="border-b px-4 py-2">
										{log.version}
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										{log.date}
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										<Button
											variant={"destructive"}
											onClick={() => deleteLog(log._id)}
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</section>

			{/* Section to edit selected page */}
			{selectedPage && (
				<section id="edit-page" className="py-16 md:py-24">
					<h2 className="text-3xl md:text-4xl font-bold">Edit Page</h2>
					<MarkdownEditor
						value={selectedPage.content}
						onChange={(value) => {
							if (value !== undefined) {
								setSelectedPage((prev) => ({
									...prev!,
									content: value,
								}));
							}
						}}
					/>
					<Button
						className="mt-4"
						onClick={async () => {
							if (selectedPage) {
								const response = await fetch(
									`/api/mdx/pages/${selectedPage.slug}`,
									{
										method: "PUT",
										headers: { "Content-Type": "application/json" },
										body: JSON.stringify({
											...selectedPage,
											content: selectedPage.content,
										}),
									}
								);
								if (response.ok) {
									toast({ description: "Page successfully updated" });
								} else {
									toast({
										description: "Page update failed",
										variant: "destructive",
									});
								}
							}
						}}
					>
						Save Changes
					</Button>
				</section>
			)}
		</section>
	);
};

export default AdminLogPage;
