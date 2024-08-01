import { PRIVACY_POLICY } from "@/constants/guidelines";
import React from "react";
import ReactMarkdown from "react-markdown";

import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
	title: "Privacy Policy - SVRJS",
	description:
		"Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
	openGraph: {
		title: "SVRJS - A Web Server running on Node.js",
		description:
			"Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
		url: "https://svrjs.org",
		type: "website",
		images: [
			{
				url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
				width: 800,
				height: 600,
				alt: "SVRJS - A Web Server running on Node.js",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@SVR_JS",
		title: "SVRJS - A Web Server running on Node.js",
		description:
			"Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
		images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
		creator: "@SVR_JS",
	},
};

const PrivacyPolicy = () => {
	return (
		<section
			id="privacy-policy"
			className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
		>
			<h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				Privacy Policy
			</h1>
			<p className="md:text-lg text-muted-foreground text-start mb-6">
				Effective date: 26.05.2024
			</p>
			<div className="prose max-w-full md:prose-lg dark:prose-invert">
				<ReactMarkdown>{PRIVACY_POLICY}</ReactMarkdown>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
