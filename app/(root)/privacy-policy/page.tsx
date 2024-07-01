import { PRIVACY_POLICY } from "@/constants/guidelines";
import React from "react";
import ReactMarkdown from "react-markdown";

const PrivacyPolicy = () => {
	return (
		<section
			id="privacy-policy"
			className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
		>
			<div className="prose prose-lg dark:prose-invert">
				<ReactMarkdown>{PRIVACY_POLICY}</ReactMarkdown>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
