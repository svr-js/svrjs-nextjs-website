import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Downloads - SVRJS",
  description:
    "Ready to get started with SVR.JS? Visit our downloads page to access the latest stable releases, nightly builds, and archived versions. Find the right fit for your needs today!",
  openGraph: {
    title: "Downloads - SVRJS",
    description:
      "Ready to get started with SVR.JS? Visit our downloads page to access the latest stable releases, nightly builds, and archived versions. Find the right fit for your needs today!",
    url: "https://svrjs.org/downloads",
    type: "website",
    images: [
      {
        url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
        width: 800,
        height: 600,
        alt: "Downloads - SVRJS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Downloads - SVRJS",
    description:
      "Ready to get started with SVR.JS? Visit our downloads page to access the latest stable releases, nightly builds, and archived versions. Find the right fit for your needs today!",
    images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
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
