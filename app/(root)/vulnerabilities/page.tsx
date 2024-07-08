import ReactMarkdown from "react-markdown";
import { vulnerabilities } from "@/constants/guidelines";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Vulnerabilities - SVRJS",
};

const Vulnerabilities = () => {
	return (
		<section
			id="tos"
			className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
		>
			<h1 className="text-3xl md:text-5xl font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				SVR.JS Vulnerabilities
			</h1>
			<p className="text-lg text-muted-foreground text-start mb-4">
				We welcome contributions from the community! Here&apos;s how you can
				help!
			</p>
			<div className="prose max-w-full prose-lg dark:prose-invert">
				<ReactMarkdown>{vulnerabilities}</ReactMarkdown>
			</div>
		</section>
	);
};

export default Vulnerabilities;
