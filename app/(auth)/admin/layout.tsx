import MobileNav from "../_components/Mobilenav";
import Sidebar from "../_components/Sidebar";

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex flex-col min-h-screen root">
			<Sidebar />
			<MobileNav />
			<div className="root-container lg:px-24">{children}</div>
		</main>
	);
}
