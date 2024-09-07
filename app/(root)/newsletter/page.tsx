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
    url: "https://svrjs.org/newsletter",
    type: "website",
    images: [
      {
        url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
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
    images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
    creator: "@SVR_JS"
  }
};

const NewsletterPage = () => {
  return <Newsletter />;
};

export default NewsletterPage;
