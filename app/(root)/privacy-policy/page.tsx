import { PRIVACY_POLICY } from "@/constants/guidelines";
import React from "react";
import ReactMarkdown from "react-markdown";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - SVRJS",
};

const PrivacyPolicy = () => {
	return (
		<section
			id="privacy-policy"
			className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
		>
			<div className="prose max-w-full prose-lg dark:prose-invert">
				<ReactMarkdown>{PRIVACY_POLICY}</ReactMarkdown>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
