import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

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
