import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/shared/providers/themeprovider';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SVRJS - A Web Server running on Nodejs',
  description: 'Open Source Software Library',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
