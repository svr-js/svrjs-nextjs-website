import Image from "next/image";
import Link from "next/link";
import React from "react";
import Iconss from "../ui/icons";
import { FOOTERLINKS } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col px-24 md:px-32 py-10 w-full bg-zinc-100 text-black dark:bg-[#00000738] dark:text-white border-t dark:border-none">
      <div className="footop flex justify-around items-start mb-14">
        <div className="flex items-center">
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
        <div className="footcolum1 flex flex-col items-start justify-center ">
          <h1 className="foot-header font-[700] text-primary">Other Pages</h1>
          {FOOTERLINKS.otherPages.map((link) => (
            <h3 key={link.href}>
              <Link href={link.href} className="hover:text-green-100/70">
                {link.label}
              </Link>
            </h3>
          ))}
        </div>
        <div className="footcolum1 flex flex-col items-start justify-center">
          <h1 className="foot-header text-primary">Plans</h1>
          {FOOTERLINKS.plans.map((link) => (
            <h3 key={link.href}>
              <Link href={link.href} className="hover:text-green-100/70">
                {link.label}
              </Link>
            </h3>
          ))}
        </div>
        <div className="footcolum1 flex flex-col items-start justify-center">
          <h1 className="foot-header text-primary">Social</h1>
          <p>{FOOTERLINKS.social.supportText}</p>
          <div className="box-socials-foot flex py-5">
            <Iconss />
          </div>
        </div>
      </div>
      <div className="line mb-6 border-t dark:border-white/30 border-gray-300"></div>
      <div className="footbootom flex justify-between items-center">
        <h4 className="text-sm max-md:hidden">
          Designed and Developed by{" "}
          <Link
            href={FOOTERLINKS.footerBottom.designedBy.href}
            className="text-primary font-semibold"
          >
            {FOOTERLINKS.footerBottom.designedBy.label}
          </Link>
        </h4>
        <h4 className="text-sm">
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
  );
};

export default Footer;
