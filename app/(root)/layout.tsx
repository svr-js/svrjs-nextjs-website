import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/widgets/Banner";
import { Home } from "lucide-react";
import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
  title: "SVR.JS - A Web Server running on Node.js",
  description:
    "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
  openGraph: {
    title: "SVR.JS - A Web Server running on Node.js",
    description:
      "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
    url: "https://svrjs.org",
    type: "website",
    images: [
      {
        url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
        width: 800,
        height: 600,
        alt: "SVR.JS - A Web Server running on Node.js"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "SVR.JS - A Web Server running on Node.js",
    description:
      "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
    images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
    creator: "@SVR_JS"
  }
};

export default function PageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const iconClassName = "w-4 h-4 flex-center text-zinc-950 -mr-2";
  return (
    <div className="flex flex-col min-h-screen">
      {/* Comment or edit this whenever required */}
      <Banner
        icon={<Home className={iconClassName} />}
        title="SVR.JS 4.0.0 is now on beta!"
        announcement="The latest beta version is SVR.JS 4.0.0-beta3."
        link="https://blog.svrjs.org/2024/08/30/SVR-JS-4-0-0-beta3-has-been-released/"
        buttonText="Read more"
      />
      <Navbar />
      <div className="flex-grow flex-1 overflow-x-hidden">{children}</div>
      <Footer />
    </div>
  );
}
