"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UploadButton } from "@/lib/uploadthing";
import { downloadSchema } from "@/lib/validations/validation";
import { useToast } from "@/components/ui/use-toast";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface DownloadEntry {
	_id: string;
	fileName: string;
	version: string;
	downloadLink: string;
	fileSize: string;
}

const DownloadsPage = () => {
	const { toast } = useToast();
	const [downloads, setDownloads] = useState<DownloadEntry[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const form = useForm<z.infer<typeof downloadSchema>>({
		resolver: zodResolver(downloadSchema),
		defaultValues: {
			fileName: "",
			version: "",
			downloadLink: "",
			fileSize: "",
		},
	});

	const fetchDownloads = async () => {
		try {
			const response = await fetch("/api/downloads", {
				method: "GET",
			});
			if (response.ok) {
				const data: DownloadEntry[] = await response.json();
				setDownloads(data);
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to fetch downloads");
		}
	};

	useEffect(() => {
		fetchDownloads();
		const interval = setInterval(() => {
			fetchDownloads();
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	const onSubmit: SubmitHandler<z.infer<typeof downloadSchema>> = async (
		data
	) => {
		setLoading(true);
		const response = await fetch("/api/upload", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			form.reset();
			fetchDownloads();
			setLoading(false);
			toast({ description: "Download Successfully Updated" });
		} else {
			console.error("Upload failed");
			setLoading(false);
			toast({ description: "Uploading Failed", variant: "destructive" });
		}
	};

	const deleteDownload = async (id: string) => {
		try {
			const response = await fetch(`/api/delete/downloads/${id}`, {
				method: "DELETE",
			});
			if (response.ok) {
				fetchDownloads();
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to delete download");
		}
	};

	return (
		<section id="downloads-page" className="wrapper container">
			<h1 className="text-3xl font-bold py-6">Downloads Form</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="fileName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>File Name</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="version"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Version</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="downloadLink"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Download Link</FormLabel>
								<UploadButton
									endpoint="imageUploader"
									onClientUploadComplete={(res) => {
										field.onChange(res[0].url);
									}}
									onUploadError={(error: Error) => {
										alert(`ERROR! ${error.message}`);
									}}
								/>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="fileSize"
						render={({ field }) => (
							<FormItem>
								<FormLabel>File Size</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="w-full text-lg rounded-full"
						size={"lg"}
						disabled={loading}
					>
						Submit
					</Button>
				</form>
			</Form>

			{/* Section to list and delete downloads */}
			<section id="downloads-list" className="py-16 md:py-24">
				<h2 className="text-3xl md:text-4xl font-bold">Existing Downloads</h2>
				{error && <p className="text-red-500">{error}</p>}
				<Table className="w-full mt-4 border-muted">
					<TableHeader>
						<TableRow>
							<TableHead className="border-b px-4 py-2">File Name</TableHead>
							<TableHead className="border-b px-4 py-2">Version</TableHead>
							<TableHead className="border-b px-4 py-2">
								Download Link
							</TableHead>
							<TableHead className="border-b px-4 py-2">File Size</TableHead>
							<TableHead className="border-b px-4 py-2">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{downloads
							.slice()
							.reverse()
							.map((download) => (
								<TableRow key={download._id}>
									<TableCell className="border-b px-4 py-2">
										{download.fileName}
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										{download.version}
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										<a
											href={download.downloadLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											{download.downloadLink}
										</a>
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										{download.fileSize}
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										<Button
											variant={"destructive"}
											onClick={() => deleteDownload(download._id)}
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

export default DownloadsPage;
