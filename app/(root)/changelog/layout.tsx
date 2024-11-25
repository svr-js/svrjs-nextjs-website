import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "SVR.JS change log - SVR.JS",
  description:
    "Stay up-to-date with the latest improvements and updates to SVR.JS web server. Our change log page provides a comprehensive list of new features, bug fixes, and enhancements for each release.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/changelog` },
  openGraph: {
    title: "SVR.JS change log - SVR.JS",
    description:
      "Stay up-to-date with the latest improvements and updates to SVR.JS web server. Our change log page provides a comprehensive list of new features, bug fixes, and enhancements for each release.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/changelog`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "SVR.JS change log - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "SVR.JS change log - SVR.JS",
    description:
      "Stay up-to-date with the latest improvements and updates to SVR.JS web server. Our change log page provides a comprehensive list of new features, bug fixes, and enhancements for each release.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};
const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ContactLayout;
