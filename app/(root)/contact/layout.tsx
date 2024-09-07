import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Contact Us - SVR.JS",
  description:
    "Have questions about SVR.JS? Need technical support? Visit our Contact Us page to find various ways to get in touch with our team, including email, forums, and our official support channel.",
  openGraph: {
    title: "Contact Us - SVR.JS",
    description:
      "Have questions about SVR.JS? Need technical support? Visit our Contact Us page to find various ways to get in touch with our team, including email, forums, and our official support channel.",
    url: "https://svrjs.org/contact",
    type: "website",
    images: [
      {
        url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
        width: 800,
        height: 600,
        alt: "Contact Us - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Contact Us - SVR.JS",
    description:
      "Have questions about SVR.JS? Need technical support? Visit our Contact Us page to find various ways to get in touch with our team, including email, forums, and our official support channel.",
    images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
    creator: "@SVR_JS"
  }
};
const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ContactLayout;
