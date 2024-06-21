import About from '@/components/shared/About';
import DataTable from '@/components/shared/DataTable';
import Faq from '@/components/shared/FAQ';
import Hero from '@/components/shared/Hero';
import HowItWorks from '@/components/shared/HowItWorks';
import Newsletter from '@/components/shared/Newsletter';
import Partners from '@/components/shared/Partners';

const RootPage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Partners />
      <About />
      {/* <DataTable /> */}
      <Newsletter />
      <Faq />
    </>
  );
};

export default RootPage;
