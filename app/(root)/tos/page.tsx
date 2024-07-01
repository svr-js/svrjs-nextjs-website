import ReactMarkdown from "react-markdown";
import { TERMS_AND_CONDITIONS } from "@/constants/guidelines";

const TermsOfService = () => {
	return (
		<section
			id="tos"
			className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
		>
			<div className="prose max-w-full prose-lg dark:prose-invert">
				<ReactMarkdown>{TERMS_AND_CONDITIONS}</ReactMarkdown>
			</div>
		</section>
	);
};

export default TermsOfService;
