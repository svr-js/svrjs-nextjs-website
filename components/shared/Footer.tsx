import Image from "next/image";
import Link from "next/link";
import React from "react";
import Iconss from "../ui/icons";
import { FOOTERLINKS } from "@/constants";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="flex flex-col px-6 md:px-16 lg:px-32 py-10 w-full max-w-screen-2xl mx-auto bg-zinc-100 text-black dark:bg-[#0308033b] dark:text-white transition-all">
        <div className="flex flex-col lg:flex-row justify-between max-lg:items-start max-md:items-center items-center mb-14 ">
          <div className="flex items-center mb-6 lg:mb-0">
            <Image
              src="/logo.svg"
              alt="logo"
              width={200}
              height={80}
              className="dark:block hidden"
            />
            <Image
              src="/logodark.svg"
              alt="logo"
              width={200}
              height={80}
              className="dark:hidden block"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row justify-between w-full lg:w-auto lg:space-y-0 space-x-8 xl:space-x-16">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl font-light text-primary">Other Pages</h1>
              {FOOTERLINKS.otherPages.map((link) => (
                <h3 key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-light dark:hover:text-green-100/70 hover:text-green-500"
                  >
                    {link.label}
                  </Link>
                </h3>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl font-light text-primary">Resources</h1>
              {FOOTERLINKS.plans.map((link) => (
                <h3 key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-light dark:hover:text-green-100/70 hover:text-green-500"
                  >
                    {link.label}
                  </Link>
                </h3>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl font-light text-primary">Social</h1>
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
          <h4 className="text-sm font-light">
            Designed and Developed by{" "}
            <Link
              href={FOOTERLINKS.footerBottom.designedBy.href}
              className="text-primary font-semibold"
            >
              {FOOTERLINKS.footerBottom.designedBy.label}
            </Link>
          </h4>
          <h4 className="text-sm font-light">
            All Rights Reserved{" "}
            <Link
              href={FOOTERLINKS.footerBottom.rightsReserved.href}
              className="text-primary font-semibold"
            >
              {FOOTERLINKS.footerBottom.rightsReserved.label}
            </Link>
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
