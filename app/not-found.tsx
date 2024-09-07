import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found - SVR.JS",
  openGraph: {
    title: "404 Not Found - SVR.JS"
  },
  twitter: {
    title: "404 Not Found - SVR.JS"
  }
};

const NotFound = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <section
          id="404error"
          className="flex-center flex-col wrapper container flex-1 flex-grow"
        >
          <h1 className="text-3xl md:text-5xl text-center">
            <span className="text-red-500">404</span> Page not Found
          </h1>
          <p className="text-lg mt-3 text-muted-foreground">
            Please return back to{" "}
            <Link href="/" className="underline font-bold">
              Home
            </Link>
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default NotFound;
