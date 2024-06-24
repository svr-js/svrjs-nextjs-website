import { useRouter } from "next/router";

export default {
	editLink: {
		component: null,
	},
	feedback: {
		content: null,
	},
	logo: (
		<>
			<img
				src="/plainlogo.svg"
				alt={`logo`}
				width={25}
				height={25}
				className="dark:block hidden"
			/>
			<h1
				style={{
					fontWeight: 700,
					fontSize: "30px",
					marginLeft: "8px",
				}}
			>
				SVRJS
			</h1>
		</>
	),
	project: {
		title: "SVRJS",
		link: "https://svrjs.org",
	},
	footer: {
		component: null,
	},
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s – SVRJS",
			};
		}
	},
	primaryHue: 136,
	primarySaturation: 75,
	// banner: {
	// 	key: "svrjs",
	// 	text: <a href="https://svrjs.org">🎉 Check out SVRJS Now. Read more →</a>,
	// },
};
