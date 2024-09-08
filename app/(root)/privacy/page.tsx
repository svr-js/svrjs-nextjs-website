import { PRIVACY_POLICY } from "@/constants/guidelines";
import React from "react";
import ReactMarkdown from "react-markdown";

import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Privacy Policy - SVR.JS",
  description:
    "Learn how we collect, use, and protect your data. Our Privacy Policy outlines our commitment to your privacy and the measures we take to safeguard your information when visiting our website.",
  openGraph: {
    title: "Privacy Policy - SVR.JS",
    description:
      "Learn how we collect, use, and protect your data. Our Privacy Policy outlines our commitment to your privacy and the measures we take to safeguard your information when visiting our website.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/privacy`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "Privacy Policy - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Privacy Policy - SVR.JS",
    description:
      "Learn how we collect, use, and protect your data. Our Privacy Policy outlines our commitment to your privacy and the measures we take to safeguard your information when visiting our website.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};

const PrivacyPolicy = () => {
  return (
    <section
      id="privacy-policy"
      className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Privacy Policy
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Effective date: September 7, 2024
      </p>
      <div className="prose max-w-full md:prose-lg dark:prose-invert">
        <ReactMarkdown>{PRIVACY_POLICY}</ReactMarkdown>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
