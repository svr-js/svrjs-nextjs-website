import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - SVRJS',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex-1">{children}</div>
      <Footer />
    </main>
  );
}
