'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ui/theme-toggle';
import { NAVBAR } from '@/constants';
import { buttonVariants } from '../ui/button';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="sticky border-b top-0 z-40 w-full shadow-md bg-white dark:border-b-slate-800 dark:bg-background">
      {/* LOGO LEFT NAVBAR */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex items-center">
            <Link href="/#" className="inline-flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt={`logo`}
                width={120}
                height={40}
                className="dark:block hidden"
              />
              <Image
                src="/logodark.svg"
                alt={`logo`}
                width={120}
                height={40}
                className="dark:hidden block"
              />
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
                className={`text-[18px] tracking-tight ${
                  pathname == href ? 'bg-accent/40' : ''
                } ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            {NAVBAR.rightLinks?.map(({ href = '', label, target }) => (
              <Link
                key={label}
                href={href}
                target={target}
                className={`border ${buttonVariants({
                  variant: "ghost",
                })} px-0 w-11`}
              >
                <Image
                  src="/next.svg"
                  alt="git"
                  width={25}
                  height={25}
                  className="hidden dark:block"
                />
                <Image
                  src="/nextdark.svg"
                  alt="git"
                  width={25}
                  height={25}
                  className="block dark:hidden"
                />
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
