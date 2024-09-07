import About from "@/components/shared/About";
import DataTable from "@/components/shared/DataTable";
import Faq from "@/components/shared/FAQ";
import Hero from "@/components/shared/Hero";
import Features from "@/components/shared/Features";
import Newsletter from "@/components/shared/Newsletter";
import DemoVideo from "@/components/shared/DemoVideo";
import Testimonials from "@/components/shared/Testimonials";

const RootPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <DemoVideo />
      <About />
      <Faq />
      <Newsletter />
    </>
  );
};

export default RootPage;
