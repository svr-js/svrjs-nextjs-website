"use client";

import React from "react";
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
import { Input } from "@/components/ui/input";
import { logsSchema } from "@/lib/validations/validation";
import { z } from "zod";

type LogsFormValues = z.infer<typeof logsSchema>;

const AdminLogPage = () => {
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

	const onSubmit: SubmitHandler<LogsFormValues> = async (data) => {
		const response = await fetch("/api/uploadlogs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			form.reset();
			console.log("Upload successful");
			alert("Uploaded");
		} else {
			console.error("Upload failed");
			alert("Upload Failed");
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
										variant={"destructive"}
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
						size={"lg"}
					>
						Submit
					</Button>
				</form>
			</Form>
		</section>
	);
};

export default AdminLogPage;
