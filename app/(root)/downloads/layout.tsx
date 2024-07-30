import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Downloads - SVRJS",
};

export default function DownloadLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main>{children}</main>;
}
