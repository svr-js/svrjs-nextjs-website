import ReactMarkdown from "react-markdown";
import { TERMS_AND_CONDITIONS } from "@/constants/guidelines";
import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Terms of Service - SVR.JS",
  description:
    "Understand your rights and responsibilities when using SVR.JS. Our Terms of Service page outlines the conditions for visiting our website, ensuring a transparent and fair experience for all users.",
  openGraph: {
    title: "Terms of Service - SVR.JS",
    description:
      "Understand your rights and responsibilities when using SVR.JS. Our Terms of Service page outlines the conditions for visiting our website, ensuring a transparent and fair experience for all users.",
    url: "https://svrjs.org/tos",
    type: "website",
    images: [
      {
        url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
        width: 800,
        height: 600,
        alt: "Terms of Service - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Terms of Service - SVR.JS",
    description:
      "Understand your rights and responsibilities when using SVR.JS. Our Terms of Service page outlines the conditions for visiting our website, ensuring a transparent and fair experience for all users.",
    images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
    creator: "@SVR_JS"
  }
};

const TermsOfService = () => {
  return (
    <section
      id="tos"
      className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Terms Of Service
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Effective date: April 24, 2024
      </p>
      <div className="prose max-w-full md:prose-lg dark:prose-invert">
        <ReactMarkdown>{TERMS_AND_CONDITIONS}</ReactMarkdown>
      </div>
    </section>
  );
};

export default TermsOfService;
