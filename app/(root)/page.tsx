import About from "@/components/shared/About";
import DataTable from "@/components/shared/DataTable";
import Faq from "@/components/shared/FAQ";
import Hero from "@/components/shared/Hero";
import HowItWorks from "@/components/shared/HowItWorks";
import Newsletter from "@/components/shared/Newsletter";
import Partners from "@/components/shared/Partners";
import Testimonials from "@/components/shared/Testimonials";

const RootPage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <About />
      {/* <DataTable /> */}
      <Faq />
      <Newsletter />
    </>
  );
};

export default RootPage;
