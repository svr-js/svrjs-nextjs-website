import About from '@/components/shared/About';
import Hero from '@/components/shared/Hero';
import HowItWorks from '@/components/shared/HowItWorks';
import Newsletter from '@/components/shared/Newsletter';

const RootPage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <About />
      <Newsletter />
    </>
  );
};

export default RootPage;
