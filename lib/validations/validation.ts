import { z } from "zod";

export const downloadSchema = z.object({
	fileName: z.string().nonempty(),
	version: z.string().nonempty(),
	downloadLink: z.string().url().nonempty(),
	fileSize: z.string().nonempty(),
});

export const modsSchema = z.object({
	fileName: z.string().nonempty(),
	version: z.string().nonempty(),
	downloadLink: z.string().url().nonempty(),
	fileSize: z.string().nonempty(),
});

export const logsSchema = z.object({
	version: z.string(),
	date: z.string(),
	bullets: z.array(
		z.object({
			point: z.string(),
		})
	),
});

export const vulnerabilitiesSchema = z.object({
	version: z.string(),
	bullets: z.array(
		z.object({
			point: z.string(),
		})
	),
});

export const ModsVulnerabilities = z.object({
	title: z.string(),
	category: z.string(),
	bullets: z.array(
		z.object({
			point: z.string(),
		})
	),
});

export type LogsFormValues = z.infer<typeof logsSchema>;
export type VulnerabiltiesForm = z.infer<typeof vulnerabilitiesSchema>;
export type ModsVulnerability = z.infer<typeof ModsVulnerabilities>;

// Contact Page

export const contactFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Invalid email address.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});
