import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/providers/themeprovider";
import { Toaster } from "@/components/ui/toaster";
import Analytics from "@/components/shared/providers/Analytics";

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "SVR.JS - a web server running on Node.JS",
  description:
    "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.JS. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
  openGraph: {
    title: "SVR.JS - a web server running on Node.JS",
    description:
      "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.JS. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
        width: 800,
        height: 600,
        alt: "SVR.JS - a web server running on Node.JS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SVR_JS",
    title: "SVR.JS - a web server running on Node.JS",
    description:
      "Experience unparalleled flexibility with SVR.JS - the ultimate web server for Node.JS. Host web pages, run server-side JavaScript, utilize mods for extended functionality, and more. Integrated log viewer and user management tools included. Also supports Bun (experimental).",
    images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`],
    creator: "@SVR_JS"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body className={`antialiased ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics pagesRouter={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
