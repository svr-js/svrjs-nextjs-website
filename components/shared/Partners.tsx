import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Partners = () => {
  return (
    <section
      id="partners"
      className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        SVRJS in action
      </h2>
      <div className="w-full flex-start flex-row">
        <div className="flex max-md:flex-col items-center justify-start gap-4">
          <h2 className="text-xl font-semibold bg-accent/60 px-2 py-2 rounded-md">
            Process of setting up a WordPress website running on SVR.JS.
          </h2>
          <Button className="flex-center font-bold max-md:w-full max-w-xl">
            Docs <ArrowUpRight />
          </Button>
        </div>
      </div>

      <video
        src="/svgaction.mp4"
        className="rounded-xl aspect-video bg-[#09090b]"
        controls
        poster="/poster.svg"
      ></video>
      <hr className="w-full h-1" />
    </section>
  );
};

export default Partners;
