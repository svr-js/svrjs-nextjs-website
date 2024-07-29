import ReactMarkdown from "react-markdown";
import { TERMS_AND_CONDITIONS } from "@/constants/guidelines";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms Of Service - SVRJS",
};

const TermsOfService = () => {
	return (
		<section
			id="tos"
			className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
		>
			<h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				Terms and Conditions
			</h1>
			<p className="md:text-lg text-muted-foreground text-start mb-4">
				Last updated: 24.04.2024
			</p>
			<div className="prose max-w-full md:prose-lg dark:prose-invert">
				<ReactMarkdown>{TERMS_AND_CONDITIONS}</ReactMarkdown>
			</div>
		</section>
	);
};

export default TermsOfService;
