import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";
import { NAVBAR } from "@/constants";
import { buttonVariants } from "../ui/button";

const MobileNav = () => {
  return (
    <div className="flex md:hidden">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger>
          <Menu className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
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
            </SheetTitle>
          </SheetHeader>
          <nav
            id="mobile-menu"
            className="flex flex-col justify-center items-center gap-2 mt-4"
          >
            {NAVBAR.centerLinks?.map(({ href = "", label, target }) => (
              <Link
                key={label}
                href={href}
                target={target}
                className={buttonVariants({ variant: "ghost" })}
              >
                {label}
              </Link>
            ))}
            {NAVBAR.rightLinks?.map(({ href, label, target }) => (
              <Link
                key={label}
                href={href}
                target={target}
                className={`w-[110px] gap-2 ${buttonVariants({
                  variant: "secondary",
                })}`}
              >
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
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
