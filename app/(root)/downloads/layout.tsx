import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Downloads - SVR.JS",
  description:
    "Get started with SVR.JS! Visit our downloads page for the latest stable releases, nightly builds, and archived versions to find your perfect fit!",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/downloads` },
  openGraph: {
    title: "Downloads - SVR.JS",
    description:
      "Get started with SVR.JS! Visit our downloads page for the latest stable releases, nightly builds, and archived versions to find your perfect fit!",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/downloads`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "Downloads - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Downloads - SVR.JS",
    description:
      "Get started with SVR.JS! Visit our downloads page for the latest stable releases, nightly builds, and archived versions to find your perfect fit!",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};

export default function DownloadLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
