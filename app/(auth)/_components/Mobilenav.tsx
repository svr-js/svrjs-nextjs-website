"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { AdminLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Logo from "@/components/shared/Logo";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Logo width={120} height={40} />
      </Link>

      <nav className="flex gap-2">
        <Sheet>
          <SheetTrigger>
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Logo width={155} height={53} />
              <ul className="header-nav_elements">
                {AdminLinks.slice(0, 6).map((link) => {
                  const isActive = link.url === pathname;

                  return (
                    <li
                      key={link.url}
                      className={`${
                        isActive && "gradient-text"
                      } p-18 flex whitespace-nowrap text-dark-700`}
                    >
                      <Link
                        className="sidebar-link cursor-pointer"
                        href={link.url}
                      >
                        <link.icon />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
