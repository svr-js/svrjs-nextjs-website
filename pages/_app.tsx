import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${poppins.style.fontFamily};
				}
			`}</style>
			<div className={`antialiased ${poppins.className}`}>
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
