"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroVideoDialog from "../ui/heroVideoAction";

const DemoVideo = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/docs");
  };
  return (
    <section
      id="partners"
      className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-start">
        <span className="bg-gradient-to-b from-green-300 to-primary text-transparent bg-clip-text">
          SVR.JS
        </span>{" "}
        in action
      </h2>
      <div className="w-full flex-start flex-row">
        <div className="flex max-md:flex-col items-center justify-start gap-4">
          <p className="text-md font-medium bg-accent/60 px-2 py-2 rounded-md">
            Process of setting up a WordPress website running on SVR.JS.
          </p>
          <Button
            onClick={handleClick}
            className="flex-center font-bold max-md:w-full max-w-xl"
          >
            Docs <ArrowUpRight />
          </Button>
        </div>
      </div>

      <HeroVideoDialog
        animationStyle="top-in-bottom-out"
        videoSrc="https://odysee.com/$/embed/@SVRJS:5/svrjs-in-action-2:c?r=2aYLMLSbhkVf7tPGk6UCnUH2Gewrp26w"
        thumbnailSrc="/svrjs-in-action.png"
        thumbnailAlt="SVR.JS in action!"
      />
      <hr className="w-full h-1" />
    </section>
  );
};

export default DemoVideo;
