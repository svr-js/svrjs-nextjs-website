import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SVRJS - A Web Server running on Node.js",
	description:
		"Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
	openGraph: {
		title: "SVRJS - A Web Server running on Node.js",
		description:
			"Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
		url: "https://yourwebsite.com",
		type: "website",
		images: [
			{
				url: "https://yourwebsite.com/og-image.jpg",
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
		images: "/logo.svg",
	},
};
export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex-grow flex-1">{children}</div>
			<Footer />
		</main>
	);
}
