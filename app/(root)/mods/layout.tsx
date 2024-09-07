import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "Mods - SVR.JS",
  description:
    "Expand the functionality of SVR.JS with our collection of mods! Visit the mod downloads page to explore, download, and install a wide range of mods tailored to enhance your web server experience.",
  openGraph: {
    title: "Mods - SVR.JS",
    description:
      "Expand the functionality of SVR.JS with our collection of mods! Visit the mod downloads page to explore, download, and install a wide range of mods tailored to enhance your web server experience.",
    url: "https://svrjs.org/mods",
    type: "website",
    images: [
      {
        url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
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
    images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
    creator: "@SVR_JS"
  }
};
const ModLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ModLayout;
