import nextra from "nextra";

/** @type {import('next').NextConfig} */
const NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	poweredByHeader: false
};

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
});

export default withNextra(NextConfig);
