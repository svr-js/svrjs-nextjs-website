import ReactMarkdown from "react-markdown";
import { contribute } from "@/constants/guidelines";
import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
	title: "Contribute - SVRJS",
	description:
		"Contribute to SVR.JS and be part of an exciting open-source project. Follow the step-by-step guidelines to make your code contributions.",
	openGraph: {
		title: "Contribute - SVRJS",
		description:
			"Contribute to SVR.JS and be part of an exciting open-source project. Follow the step-by-step guidelines to make your code contributions.",
		url: "https://svrjs.org/contribute",
		type: "website",
		images: [
			{
				url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
				width: 800,
				height: 600,
				alt: "Contribute - SVRJS",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@SVR_JS",
		title: "Contribute - SVRJS",
		description:
			"Contribute to SVR.JS and be part of an exciting open-source project. Follow the step-by-step guidelines to make your code contributions.",
		images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
		creator: "@SVR_JS",
	},
};
const Contribute = () => {
	return (
		<section
			id="tos"
			className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
		>
			<h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				Contributing to SVR.JS
			</h1>
			<p className="md:text-lg text-muted-foreground text-start mb-6">
				We welcome contributions from the community! Here&apos;s how you can
				help!
			</p>
			<div className="prose max-w-full md:prose-lg dark:prose-invert">
				<ReactMarkdown>{contribute}</ReactMarkdown>
			</div>
		</section>
	);
};

export default Contribute;
