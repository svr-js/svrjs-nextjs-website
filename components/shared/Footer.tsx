import Image from "next/image";
import Link from "next/link";
import React from "react";
import Iconss from "../ui/icons";
import { FOOTERLINKS } from "@/constants";
import Logo from "./Logo";

const Footer = () => {
	return (
		<>
			<footer className="flex flex-col w-full transition-all bg-zinc-100 text-black dark:bg-[#0308033b] border-t dark:text-white">
				<div className="px-6 md:px-16 lg:px-32 py-10 w-full mx-auto max-w-screen-2xl">
					<div className="flex flex-col lg:flex-row justify-between max-lg:items-start max-md:items-center items-center mb-6 ">
						<div className="flex items-center mb-6 lg:mb-0">
							<Logo width={200} height={80} />
						</div>
						<div className="flex flex-col items-center md:items-start md:flex-row justify-between w-full lg:w-auto space-y-6 md:space-y-0 md:space-x-8 xl:space-x-16">
							<div className="flex flex-col items-center md:items-start">
								<div className="text-2xl font-light text-primary">
									Other Pages
								</div>
								{FOOTERLINKS.otherPages.map((link) => (
									<span key={link.href}>
										<Link
											href={link.href}
											className="text-base font-light dark:hover:text-green-100/70 hover:text-green-500 hover:underline"
										>
											{link.label}
										</Link>
									</span>
								))}
							</div>
							<div className="flex flex-col items-center md:items-start">
								<h1 className="text-2xl font-light text-primary">Resources</h1>
								{FOOTERLINKS.plans.map((link) => (
									<span key={link.href}>
										<Link
											href={link.href}
											className="text-base font-light dark:hover:text-green-100/70 hover:text-green-500 hover:underline"
										>
											{link.label}
										</Link>
									</span>
								))}
							</div>
							<div className="flex flex-col items-center md:items-start">
								<div className="text-2xl font-light text-primary">Social</div>
								<p className="text-base font-light">
									{FOOTERLINKS.social.supportText}
								</p>
								<div className="flex space-x-1 py-3">
									<Iconss />
								</div>
							</div>
						</div>
					</div>
					<div className="border-t mb-6 border-gray-300 dark:border-white/30"></div>
					<div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 px-4">
						<span className="text-sm font-light">
							All Rights Reserved{" "}
							<Link
								href={FOOTERLINKS.footerBottom.rightsReserved.href}
								className="text-primary font-semibold"
							>
								{FOOTERLINKS.footerBottom.rightsReserved.label}
							</Link>
						</span>
						<span className="text-sm font-light">
							<Link
								href={FOOTERLINKS.footerBottom.termsofService.href}
								className="text-primary font-medium transition-all underline-offset-4 hover:underline"
							>
								{FOOTERLINKS.footerBottom.termsofService.label}{" "}
							</Link>
							and{" "}
							<Link
								href={FOOTERLINKS.footerBottom.privacyPolicy.href}
								className="text-primary font-medium transition-all underline-offset-4 hover:underline"
							>
								{FOOTERLINKS.footerBottom.privacyPolicy.label}
							</Link>
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
