import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/providers/themeprovider";
import AuthProvider from "@/components/shared/providers/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
	weight: ["400", "600", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SVRJS - A Web Server running on Nodejs",
	description: "Open Source Software Library",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`antialiased ${poppins.className}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<AuthProvider>
						{children}
						<Toaster />
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
