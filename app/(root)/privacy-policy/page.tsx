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
			<h1 className="text-3xl md:text-5xl font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				Privacy Policy
			</h1>
			<p className="text-lg text-muted-foreground text-start mb-4">
				Some older versions of SVR.JS are vulnerable to cyberattacks. It&apos;s
				recommended to update your SVR.JS version to the newest one. If you find
				a security issue with SVR.JS, report it as soon as possible to
				vulnerability-reports[at]svrjs[dot]org. We&apos;ll mitigate that
				vulnerability if it is possible.
			</p>
			<div className="prose max-w-full prose-lg dark:prose-invert">
				<ReactMarkdown>{PRIVACY_POLICY}</ReactMarkdown>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
