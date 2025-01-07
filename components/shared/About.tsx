import Image from "next/image";
import React from "react";
import Statistics from "./Statistics";

const About = () => {
  return (
    <section id="about" className="container py-2 sm:py-9">
      <div className="bg-accent/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src="/logo.svg"
            alt="SVR.JS logo"
            width={172}
            height={172}
            className="w-[172px] object-contain rounded-lg flex-shrink-0 mx-auto md:pl-6"
          />

          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                About{" "}
                <span className="bg-gradient-to-b from-green-300 to-primary text-transparent bg-clip-text">
                  SVR.JS
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                SVR.JS is a web server that runs on top of Node.js, enabling
                server-side JavaScript on webpages. SVR.JS also has an
                integrated log viewer, log highlighter, and user management
                tool. You can host a webpage using SVR.JS, run server-side
                JavaScript, use mods to expand server functionality, or use it
                as a forward or reverse proxy.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
