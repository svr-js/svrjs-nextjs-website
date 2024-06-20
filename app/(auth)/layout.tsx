export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex flex-col min-h-screen">
			<div className="flex-grow flex-1">{children}</div>
		</main>
	);
}
