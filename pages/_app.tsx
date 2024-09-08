import { Poppins } from "next/font/google";
import "./globals.css";
import { AppProps } from "next/app";
import Analytics from "@/components/shared/providers/Analytics";

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"]
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <div className={`antialiased ${poppins.className}`}>
        <Component {...pageProps} />
        <Analytics pagesRouter={true} />
      </div>
    </>
  );
}
export default MyApp;
