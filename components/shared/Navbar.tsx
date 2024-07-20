"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";
import { NAVBAR } from "@/constants";
import { buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Navbar = () => {
	const pathname = usePathname();
	return (
		<header className="sticky border-b top-0 z-40 w-full shadow-md bg-white dark:border-b-slate-800 dark:bg-background">
			{/* LOGO LEFT NAVBAR */}
			<NavigationMenu className="mx-auto">
				<NavigationMenuList className="container h-16 px-4 w-screen flex justify-between items-center">
					<NavigationMenuItem className="font-bold flex items-center">
						<Link href="/#" className="inline-flex items-center gap-2">
							<Logo width={120} height={40} />
						</Link>
					</NavigationMenuItem>

					{/* Mobile view */}
					<MobileNav />

					{/* Desktop Menu */}
					<nav className="hidden md:flex gap-4">
						{NAVBAR.centerLinks?.map(({ href, label, target }) => (
							<Link
								key={label}
								href={href}
								target={target}
								className={`text-[17px] tracking-tight ${
									pathname == href ? "bg-accent/40" : ""
								} ${buttonVariants({
									variant: "ghost",
								})}`}
							>
								{label}
							</Link>
						))}
					</nav>

					<div className="hidden md:flex gap-2 items-center">
						{NAVBAR.rightLinks?.map(({ href = "", label, target }) => (
							<Link
								key={label}
								href={href}
								target={target}
								className={`border ${buttonVariants({
									variant: "ghost",
									size: "icon",
								})}`}
							>
								<span className="sr-only">Git</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={25}
									height={25}
									viewBox="0 0 123 123"
									fill="none"
								>
									<path
										fill="currentColor"
										d="M120.208 55.953 66.715 2.463a7.885 7.885 0 0 0-11.158 0l-11.109 11.11 14.088 14.088a9.373 9.373 0 0 1 11.87 11.948l13.578 13.579a9.368 9.368 0 0 1 9.704 2.23 9.386 9.386 0 0 1-6.64 16.025 9.393 9.393 0 0 1-9.21-7.547 9.384 9.384 0 0 1 .526-5.416L65.697 45.817v33.33a9.385 9.385 0 0 1 2.48 15.053 9.386 9.386 0 0 1-15.311-3.046A9.388 9.388 0 0 1 54.9 80.923a9.378 9.378 0 0 1 3.078-2.052V45.235a9.336 9.336 0 0 1-3.078-2.047A9.4 9.4 0 0 1 52.88 32.92l-13.89-13.89L2.311 55.703a7.89 7.89 0 0 0 0 11.16l53.495 53.497a7.895 7.895 0 0 0 11.157 0l53.244-53.245a7.9 7.9 0 0 0 0-11.162Z"
									/>
								</svg>
							</Link>
						))}
						<ThemeToggle />
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};

export default Navbar;
