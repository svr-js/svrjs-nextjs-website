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
			className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
		>
			<h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				SVR.JS Vulnerabilities
			</h1>
			<p className="md:text-lg text-muted-foreground text-start mb-6">
				Some older versions of SVR.JS are vulnerable to cyberattacks. It&apos;s
				recommended to update your SVR.JS version to the newest one. If you find
				a security issue with SVR.JS, report it as soon as possible to
				vulnerability-reports[at]svrjs[dot]org. We&apos;ll mitigate that
				vulnerability if it is possible.
			</p>
			<div className="prose max-w-full md:prose-lg dark:prose-invert">
				<ReactMarkdown>{vulnerabilities}</ReactMarkdown>
			</div>
		</section>
	);
};

export default Vulnerabilities;
