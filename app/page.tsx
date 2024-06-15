import About from "@/components/shared/About";
import Hero from "@/components/shared/Hero";
import HowItWorks from "@/components/shared/HowItWorks";
import Navbar from "@/components/shared/Navbar";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
    </>
  );
};

export default RootPage;
