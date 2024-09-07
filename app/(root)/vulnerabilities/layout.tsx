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
    url: "https://svrjs.org/vulnerabilities",
    type: "website",
    images: [
      {
        url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
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
    images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
    creator: "@SVR_JS"
  }
};
const ModLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ModLayout;
