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
  title: "SVR.JS - a web server running on Node.js"
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
