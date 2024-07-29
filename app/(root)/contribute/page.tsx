import ReactMarkdown from "react-markdown";
import { contribute } from "@/constants/guidelines";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contribute - SVRJS",
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
			<p className="md:text-lg text-muted-foreground text-start mb-4">
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
