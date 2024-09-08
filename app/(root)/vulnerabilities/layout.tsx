import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Vulnerabilities - SVR.JS",
  description:
    "Learn about potential security risks associated with outdated SVR.JS web server versions. Stay informed and safeguard your web applications from potential threats with timely updates.",
  openGraph: {
    title: "Vulnerabilities - SVR.JS",
    description:
      "Learn about potential security risks associated with outdated SVR.JS web server versions. Stay informed and safeguard your web applications from potential threats with timely updates.",
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
      "Learn about potential security risks associated with outdated SVR.JS web server versions. Stay informed and safeguard your web applications from potential threats with timely updates.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};
const ModLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ModLayout;
