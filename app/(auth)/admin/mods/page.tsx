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
import { modsSchema } from "@/lib/validations/validation";
import { useToast } from "@/components/ui/use-toast";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface ModEntry {
	_id: string;
	fileName: string;
	version: string;
	downloadLink: string;
	fileSize: string;
}

const SvrjsModsAdminPage = () => {
	const { toast } = useToast();
	const [mods, setMods] = useState<ModEntry[]>([]);
	const [editMod, setEditMod] = useState<ModEntry | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	const mainForm = useForm<z.infer<typeof modsSchema>>({
		resolver: zodResolver(modsSchema),
		defaultValues: {
			fileName: "",
			version: "",
			downloadLink: "",
			fileSize: "",
		},
	});

	const dialogForm = useForm<z.infer<typeof modsSchema>>({
		resolver: zodResolver(modsSchema),
		defaultValues: {
			fileName: "",
			version: "",
			downloadLink: "",
			fileSize: "",
		},
	});

	useEffect(() => {
		fetchMods();
		const interval = setInterval(() => {
			fetchMods();
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (editMod) {
			dialogForm.reset({
				fileName: editMod.fileName,
				version: editMod.version,
				downloadLink: editMod.downloadLink,
				fileSize: editMod.fileSize,
			});
			setDialogOpen(true); // Open dialog when a mod is being edited
		}
	}, [editMod]);

	const fetchMods = async () => {
		try {
			const response = await fetch("/api/mods", {
				method: "GET",
			});
			if (response.ok) {
				const data: ModEntry[] = await response.json();
				setMods(data);
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to fetch mods");
		}
	};

	const onSubmit: SubmitHandler<z.infer<typeof modsSchema>> = async (data) => {
		setLoading(true);
		try {
			const response = editMod
				? await fetch(`/api/update/mods/${editMod._id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					})
				: await fetch("/api/uploadmods", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					});

			if (response.ok) {
				mainForm.reset();
				dialogForm.reset();
				fetchMods();
				setLoading(false);
				setEditMod(null);
				setDialogOpen(false); // Close dialog on successful submission
				toast({
					description: "Successfully Saved Changes",
				});
			} else {
				console.error("Save failed");
				setLoading(false);
				toast({
					description: "Save failed",
					variant: "destructive",
				});
			}
		} catch (error) {
			console.error("Save failed", error);
			setLoading(false);
			toast({
				description: "Save failed",
				variant: "destructive",
			});
		}
	};

	const deleteMod = async (id: string) => {
		try {
			const response = await fetch(`/api/delete/mods/${id}`, {
				method: "DELETE",
			});
			if (response.ok) {
				fetchMods();
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to delete mod");
		}
	};

	return (
		<section id="mods-page" className="wrapper container">
			<h1 className="text-3xl font-bold py-6">Mods Form</h1>
			<Form {...mainForm}>
				<form onSubmit={mainForm.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={mainForm.control}
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
						control={mainForm.control}
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
						control={mainForm.control}
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
						control={mainForm.control}
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
						{editMod ? "Save Changes" : "Submit"}
					</Button>
				</form>
			</Form>

			{/* Section to list and delete mods */}
			<section id="mods-list" className="py-16 md:py-24">
				<h2 className="text-3xl md:text-4xl font-bold">Existing Mods</h2>
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
						{mods
							.slice()
							.reverse()
							.map((mod) => (
								<TableRow key={mod._id}>
									<TableCell className="border-b px-4 py-2">
										{mod.fileName}
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										{mod.version}
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										<a
											href={mod.downloadLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											{mod.downloadLink}
										</a>
									</TableCell>
									<TableCell className="border-b px-4 py-2">
										{mod.fileSize}
									</TableCell>
									<TableCell className="border-b px-4 py-2 gap-2 flex-center">
										<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
											<DialogTrigger>
												<Button
													variant="outline"
													onClick={() => setEditMod(mod)}
												>
													Edit
												</Button>
											</DialogTrigger>
											<DialogContent>
												<DialogTitle>Edit Content</DialogTitle>

												<Form {...dialogForm}>
													<form
														onSubmit={dialogForm.handleSubmit(onSubmit)}
														className="space-y-4"
													>
														<FormField
															control={dialogForm.control}
															name="fileName"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>File Name</FormLabel>
																	<FormControl>
																		<Input
																			{...field}
																			defaultValue={editMod?.fileName}
																		/>
																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
														<FormField
															control={dialogForm.control}
															name="version"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>Version</FormLabel>
																	<FormControl>
																		<Input
																			{...field}
																			defaultValue={editMod?.version}
																		/>
																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
														<FormField
															control={dialogForm.control}
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
																		<Input
																			{...field}
																			defaultValue={editMod?.downloadLink}
																		/>
																	</FormControl>
																	<FormMessage />
																</FormItem>
															)}
														/>
														<FormField
															control={dialogForm.control}
															name="fileSize"
															render={({ field }) => (
																<FormItem>
																	<FormLabel>File Size</FormLabel>
																	<FormControl>
																		<Input
																			{...field}
																			defaultValue={editMod?.fileSize}
																		/>
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
															Save Changes
														</Button>
													</form>
												</Form>
											</DialogContent>
										</Dialog>
										<Button
											variant={"destructive"}
											onClick={() => deleteMod(mod._id)}
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

export default SvrjsModsAdminPage;
