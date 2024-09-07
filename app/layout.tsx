import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/providers/themeprovider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "SVRJS - A Web Server running on Node.js",
  description:
    "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
  openGraph: {
    title: "SVRJS - A Web Server running on Node.js",
    description:
      "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
    url: "https://svrjs.org",
    type: "website",
    images: [
      {
        url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
        width: 800,
        height: 600,
        alt: "SVRJS - A Web Server running on Node.js"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "SVRJS - A Web Server running on Node.js",
    description:
      "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.js. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
    images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
    creator: "@SVR_JS"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
