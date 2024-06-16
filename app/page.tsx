import About from "@/components/shared/About";
import Faq from "@/components/shared/FAQ";
import Hero from "@/components/shared/Hero";
import HowItWorks from "@/components/shared/HowItWorks";
import Newsletter from "@/components/shared/Newsletter";
import Partners from "@/components/shared/Partners";

const RootPage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Partners />
      <About />
      <Newsletter />
      <Faq />
    </>
  );
};

export default RootPage;
