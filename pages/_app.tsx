import "@/app/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<main style={{ fontFamily: "Poppins" }}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
