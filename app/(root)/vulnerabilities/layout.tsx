import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Vulnerabilities - SVR.JS",
  description:
    "Discover security risks of outdated SVR.JS versions. Stay informed and protect your web applications with timely updates against potential threats.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/vulnerabilities`
  },
  openGraph: {
    title: "Vulnerabilities - SVR.JS",
    description:
      "Discover security risks of outdated SVR.JS versions. Stay informed and protect your web applications with timely updates against potential threats.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/vulnerabilities`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "Vulnerabilities - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Vulnerabilities - SVR.JS",
    description:
      "Discover security risks of outdated SVR.JS versions. Stay informed and protect your web applications with timely updates against potential threats.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};
const ModLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ModLayout;
