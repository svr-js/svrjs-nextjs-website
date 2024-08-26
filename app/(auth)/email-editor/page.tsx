"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeEditor from "@/components/cards/MonacoEditor";
import { EXAMPLE_A1 } from "@/constants";
import { useToast } from "@/components/ui/use-toast";

const EmailEditor = () => {
	const { toast } = useToast();
	const [subject, setSubject] = useState("");
	const [previewContent, setPreviewContent] = useState<string>(EXAMPLE_A1);
	const [loading, setLoading] = useState(false);

	const validateInputs = () => {
		if (!subject.trim() || !previewContent.trim()) {
			toast({
				title: "Validation Error",
				description: "Subject and content cannot be empty.",
				variant: "destructive",
			});
			return false;
		}
		return true;
	};

	const handleSendAll = async () => {
		if (!validateInputs()) return;

		setLoading(true);
		try {
			const response = await fetch("/api/newsletter/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					subject: subject,
					html: previewContent,
				}),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const result = await response.json();
			toast({
				title: "Success!",
				description: result.message || "Emails sent successfully",
			});
		} catch (error) {
			console.error("Error:", error);
			toast({
				title: "Uh oh!",
				description: `Failed to send emails: ${error}`,
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	};

	const handleSendTest = async () => {
		if (!validateInputs()) return;

		setLoading(true);
		try {
			const response = await fetch("/api/newsletter/test", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					subject: subject,
					html: previewContent,
				}),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const result = await response.json();
			toast({
				title: "Success!",
				description: result.message || "Test email sent successfully",
			});
		} catch (error) {
			console.error("Error:", error);
			toast({
				title: "Uh oh!",
				description: `Failed to send test email: ${error}`,
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	};

	const handleEditorChange = (value: string) => {
		setPreviewContent(value);
	};

	return (
		<div className="flex flex-col lg:flex-row h-screen">
			<div className="w-full lg:w-1/2 p-4 flex flex-col space-y-4">
				<Link href="/admin/email" className="text-blue-500 underline">
					Back
				</Link>
				<input
					type="text"
					placeholder="Subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					className="border rounded-md p-2"
				/>
				<CodeEditor onChange={handleEditorChange} />
				<div className="flex space-x-2 mt-4">
					<Button
						variant={"secondary"}
						onClick={handleSendTest}
						disabled={loading}
					>
						{loading ? "Sending..." : "Send Test"}
					</Button>
					<Button onClick={handleSendAll} disabled={loading}>
						{loading ? "Sending..." : "Send All"}
					</Button>
				</div>
			</div>

			<div className="w-full lg:w-1/2 p-4 overflow-auto">
				<h2 className="text-2xl font-bold mb-4 text-secondary-foreground">
					Email Preview
				</h2>
				<div
					className="border rounded-md p-4"
					dangerouslySetInnerHTML={{ __html: previewContent }}
				/>
			</div>
		</div>
	);
};

export default EmailEditor;
