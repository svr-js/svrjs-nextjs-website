import About from "@/components/shared/About";
import Faq from "@/components/shared/FAQ";
import Hero from "@/components/shared/Hero";
import Features from "@/components/shared/Features";
import Newsletter from "@/components/shared/Newsletter";
import DemoVideo from "@/components/shared/DemoVideo";
import Testimonials from "@/components/shared/Testimonials";
import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "SVR.JS - a web server running on Node.js",
  description:
    "Host your websites with SVR.JS - a free, open-source, scalable, and secure web server built on Node.js. Supports JavaScript and PHP applications.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}` },
  openGraph: {
    title: "SVR.JS - a web server running on Node.js",
    description:
      "Host your websites with SVR.JS - a free, open-source, scalable, and secure web server built on Node.js. Supports JavaScript and PHP applications.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "SVR.JS - a web server running on Node.js"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "SVR.JS - a web server running on Node.js",
    description:
      "Host your websites with SVR.JS - a free, open-source, scalable, and secure web server built on Node.js. Supports JavaScript and PHP applications.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};

const RootPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <DemoVideo />
      <About />
      <Faq />
      <Newsletter />
    </>
  );
};

export default RootPage;
