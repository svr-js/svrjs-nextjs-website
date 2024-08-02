import { Metadata } from "next";

// baseURL [ENV]
export const metadata: Metadata = {
	title: "ChangeLogs - SVRJS",
	description:
		"Stay up-to-date with the latest improvements and updates to SVR.JS web server. Our change log page provides a comprehensive list of new features, bug fixes, and enhancements for each release.",
	openGraph: {
		title: "ChangeLogs - SVRJS",
		description:
			"Stay up-to-date with the latest improvements and updates to SVR.JS web server. Our change log page provides a comprehensive list of new features, bug fixes, and enhancements for each release.",
		url: "https://svrjs.org/changelogs",
		type: "website",
		images: [
			{
				url: "https://svrjs.vercel.app/metadata/svrjs-cover.png",
				width: 800,
				height: 600,
				alt: "ChangeLogs - SVRJS",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@SVR_JS",
		title: "ChangeLogs - SVRJS",
		description:
			"Stay up-to-date with the latest improvements and updates to SVR.JS web server. Our change log page provides a comprehensive list of new features, bug fixes, and enhancements for each release.",
		images: ["https://svrjs.vercel.app/metadata/svrjs-cover.png"],
		creator: "@SVR_JS",
	},
};
const ContactLayout = ({ children }: { children: React.ReactNode }) => {
	return <main>{children}</main>;
};

export default ContactLayout;
