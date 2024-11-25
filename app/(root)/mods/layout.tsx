import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Mods - SVR.JS",
  description:
    "Expand the functionality of SVR.JS with our collection of mods! Visit the mod downloads page to explore, download, and install a wide range of mods tailored to enhance your web server experience.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/mods` },
  openGraph: {
    title: "Mods - SVR.JS",
    description:
      "Expand the functionality of SVR.JS with our collection of mods! Visit the mod downloads page to explore, download, and install a wide range of mods tailored to enhance your web server experience.",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/mods`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "Mods - SVR.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "Mods - SVR.JS",
    description:
      "Expand the functionality of SVR.JS with our collection of mods! Visit the mod downloads page to explore, download, and install a wide range of mods tailored to enhance your web server experience.",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};
const ModLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ModLayout;
