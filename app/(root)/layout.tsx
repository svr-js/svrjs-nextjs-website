import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/widgets/Banner";
import NoScript from "@/components/shared/NoScript";
import { Rocket } from "lucide-react";

export default function PageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const iconClassName = "w-4 h-4 flex-center text-zinc-950 -mr-2";
  return (
    <div className="flex flex-col min-h-screen">
      {/* Comment or edit this whenever required */}
      {/*<Banner
        icon={<Rocket className={iconClassName} />}
        title="SVR.JS 4.0.0 has been released!"
        announcement="This major release brings many improvements to SVR.JS."
        link="/blog/svr-js-4-0-0-has-been-released"
        buttonText="Read more"
      />*/}
      <Navbar />
      <NoScript />
      <div className="flex-grow flex-1 overflow-x-hidden">{children}</div>
      <Footer />
    </div>
  );
}
