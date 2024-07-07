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
			<div className="prose max-w-full prose-lg dark:prose-invert">
				<ReactMarkdown>{vulnerabilities}</ReactMarkdown>
			</div>
		</section>
	);
};

export default Vulnerabilities;
