import { Poppins } from "next/font/google";
import "./globals.css";
import { AppProps } from "next/app";
import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
	title: "Documentation - SVRJS",
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

const poppins = Poppins({
	weight: ["400", "600", "700", "900"],
	subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${poppins.style.fontFamily};
				}
			`}</style>
			<div className={`antialiased ${poppins.className}`}>
				<Component {...pageProps} />
			</div>
		</>
	);
}
export default MyApp;
