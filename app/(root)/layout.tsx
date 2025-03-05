import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/widgets/Banner";
import NoScript from "@/components/shared/NoScript";
import { AlertTriangle } from "lucide-react";

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
        icon={<AlertTriangle className={iconClassName} />}
        title="SVR.JS development on hold"
        announcement="We're focusing on Ferron, a high-performance, memory-safe web server written in Rust."
        link="/blog/update-on-the-development-of-svr-js"
        buttonText="Read more"
      />
      <Navbar />
      <NoScript />
      <div className="flex-grow flex-1 overflow-x-hidden">{children}</div>
      <Footer />
    </div>
  );
}
