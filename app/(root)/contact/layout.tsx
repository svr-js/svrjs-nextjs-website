import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Contact Us - SVR.JS",
  description:
    "Questions about SVR.JS? Visit our Contact Us page for email, forums, and support channel options to reach our team.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact` },
  openGraph: {
    title: "Contact Us - SVR.JS",
    description:
      "Questions about SVR.JS? Visit our Contact Us page for email, forums, and support channel options to reach our team.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
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
      "Questions about SVR.JS? Visit our Contact Us page for email, forums, and support channel options to reach our team.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};
const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ContactLayout;
