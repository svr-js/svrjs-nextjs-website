import About from "@/components/shared/About";
import Faq from "@/components/shared/FAQ";
import Hero from "@/components/shared/Hero";
import HowItWorks from "@/components/shared/HowItWorks";
import Navbar from "@/components/shared/Navbar";
import Newsletter from "@/components/shared/Newsletter";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <About />
      <Newsletter />
      <Faq />
    </>
  );
};

export default RootPage;
