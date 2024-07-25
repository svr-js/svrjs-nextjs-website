import { BadgeAlert, BarChart4, Cog, File, ShieldCheck } from "lucide-react";
import { Download, Home, Settings, User } from "lucide-react";

export const NAVBAR = {
	centerLinks: [
		{
			href: "/",
			target: "_self",
			label: "Home",
		},
		{
			href: "/docs",
			target: "_self",
			label: "Docs",
		},
		{
			href: "/blog",
			target: "_self",
			label: "Blog",
		},
		{
			href: "/contact",
			target: "_self",
			label: "Contact",
		},
	],
	rightLinks: [
		{
			label: "Git",
			target: "_blank",
			href: "https://git.svrjs.org/",
		},
	],
};

export const stats = [
	{
		title: "Downloads",
		count: 69,
	},
	{
		title: "Users",
		count: 42,
	},
	{
		title: "Stars",
		count: 6,
	},
	{
		title: "Products",
		count: 2,
	},
];

export const Features = [
	{
		icon: <ShieldCheck className="w-10 h-10 text-primary" />,
		title: "Complete Secured ",
		description:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
	},
	{
		icon: <BadgeAlert className="w-10 h-10 text-primary" />,
		title: "Best Support",
		description:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
	},
	{
		icon: <BarChart4 className="w-10 h-10 text-primary" />,
		title: "Most Scalable ",
		description:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
	},
	{
		icon: <Cog className="w-10 h-10 text-primary" />,
		title: "Fully Configurable ",
		description:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
	},
];

export const questions = [
	{
		key: "item-1",
		question: "What is a web server?",
		answer:
			"A web server is computer software that accepts HTTP requests and serves websites. Web servers can also be underlying hardware running web server software.",
	},
	{
		key: "item-2",
		question: "What is SVR.JS?",
		answer:
			"SVR.JS is web server software running on Node.JS that can host both static and dynamic content. With additional mods, SVR.JS can be used for different types of dynamic content and can even be used as a forward or reverse proxy. SVR.JS is licensed under a permissive MIT/X11 license",
	},
	{
		key: "item-3",
		question: "How was SVR.JS created?",
		answer:
			"Someone in 2018 wanted to create a website, but he didnt know about setting up popular web server software like Apache httpd, NGINX, or IIS... So he created his own web server in Node.JS to serve his website! And he saved it in a file called svr.js. Since then, this web server has been gradually turned from a web server intended for one website into a general-purpose web server, which is what SVR.JS is today!",
	},
	{
		key: "item-4",
		question: "How did SVR.JS get its name?",
		answer:
			"SVR.JS got its name from the original name of the server script: svr.js, one of many generic file names for a server written in JavaScript.",
	},
	{
		key: "item-5",
		question: "What is Node.JS?",
		answer:
			"Node.JS is an asynchronous event-driven JavaScript runtime built on Chromiums V8 engine. Node.JS is designed to build scalable network applications.",
	},
	{
		key: "item-6",
		question: "How can I use SVR.JS?",
		answer:
			"You can read the documents to learn how to use the SVR.JS web server.",
	},
];

export const FOOTERLINKS = {
	otherPages: [
		{ href: "/", label: "Home" },
		{ href: "/contact", label: "Contact" },
		{ href: "/blog", label: "Blog" },
		{ href: "/forum", label: "Forum" },
		{ href: "/changelogs", label: "Change Logs" },
	],
	plans: [
		{ href: "/docs", label: "Docs" },
		{ href: "/downloads", label: "Downloads" },
		{ href: "/mods", label: "Svrjs Mods" },
		{ href: "/tos", label: "Terms of Serivce" },
		{ href: "/privacy-policy", label: "Privacy Policy" },
	],
	social: {
		supportText: "Support Us on Socials",
	},
	footerBottom: {
		designedBy: {
			href: "https://abhijee.com",
			label: "Proxy",
		},
		rightsReserved: {
			href: "https://cyprostudio.com",
			label: "SVRJS",
		},
	},
};

export const AdminLinks = [
	{
		name: "Dashboard",
		url: "/admin",
		icon: Home,
	},
	{
		name: "Downloads",
		url: "/admin/downloads",
		icon: Download,
	},
	{
		name: "Mods",
		url: "/admin/mods",
		icon: User,
	},
	{
		name: "Logs",
		url: "/admin/changelogs",
		icon: Settings,
	},
	{
		name: "MultiLogs",
		url: "/admin/multi-logs",
		icon: File,
	},
	{
		name: "Back Home",
		url: "/",
		icon: Home,
	},
];
