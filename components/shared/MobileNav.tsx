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
                <Image
                  src="/next.svg"
                  alt="git"
                  width={23}
                  height={23}
                  className="hidden dark:block"
                />
                <Image
                  src="/nextdark.svg"
                  alt="git"
                  width={23}
                  height={23}
                  className="block dark:hidden"
                />
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
