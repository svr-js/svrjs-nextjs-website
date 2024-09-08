import Newsletter from "@/components/shared/Newsletter";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter - SVR.JS",
  description:
    "Subscribe to our newsletter for updates. We promise no spam emails will be sent.",
  openGraph: {
    title: "Newsletter - SVR.JS",
    description:
      "Subscribe to our newsletter for updates. We promise no spam emails will be sent.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/newsletter`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "Newsletter - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Newsletter - SVR.JS",
    description:
      "Subscribe to our newsletter for updates. We promise no spam emails will be sent.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};

const NewsletterPage = () => {
  return <Newsletter />;
};

export default NewsletterPage;
