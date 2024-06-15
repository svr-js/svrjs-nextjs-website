import Image from "next/image";
import React from "react";
import Iconss from "../ui/icons";

const Footer = () => {
  return (
    <footer className="flex flex-col px-24 md:px-32 py-10 w-full bg-white dark:bg-[#00000738] dark:text-white">
      <div className="footop flex justify-around items-start mb-14">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt={`logo`}
            width={200}
            height={80}
            className="dark:block hidden"
          />
          <Image
            src="/logodark.svg"
            alt={`logo`}
            width={200}
            height={80}
            className="dark:hidden block"
          />
        </div>
        <div className="footcolum1 flex flex-col items-start justify-center ">
          <h1 className="foot-header font-[700] text-primary">Other Pages</h1>
          <h3>
            <a href="/" className="hover:text-primary/70">
              Home
            </a>
          </h3>
          <h3>
            <a href="/testimonial" className="hover:text-primary/70">
              Testimonial
            </a>
          </h3>
          <h3>
            <a href="/contact" className="hover:text-primary/70">
              Contact
            </a>
          </h3>
        </div>
        <div className="footcolum1 flex flex-col items-start justify-center">
          <h1 className="foot-header text-primary">Plans</h1>
          <h3>
            <a href="/blog" className="hover:text-primary/70">
              Blog
            </a>
          </h3>
          <h3>
            <a href="/downloads" className="hover:text-primary/70">
              Downloads
            </a>
          </h3>
          <h3>
            <a href="/forum" className="hover:text-primary/70">
              Forum
            </a>
          </h3>
        </div>
        <div className="footcolum1 flex flex-col items-start justify-center">
          <h1 className="foot-header text-primary">Social</h1>
          <p>Support Us on Socials</p>
          <div className="box-socials-foot flex py-5">
            <Iconss />
          </div>
        </div>
      </div>
      <div className="line mb-6 border-t border-white/30"></div>
      <div className="footbootom flex justify-between items-center">
        <h4 className="text-sm max-md:hidden">
          Designed and Developed by{" "}
          <a href="https://abhijee.com" className="text-primary font-semibold">
            Proxy
          </a>
        </h4>
        <h4 className="text-sm">
          All Rights Reserved{" "}
          <a
            href="https://cyprostudio.com"
            className="text-primary font-semibold"
          >
            Cypro Studio
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
