"use client";
import React, { useState } from "react";
import HeroCards from "./HeroCards";
import { Button } from "../ui/button";
import Link from "next/link";
import { Check, Clipboard } from "lucide-react";
import GridPattern from "../ui/grid-pattern";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { Happy_Monkey } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const happyMonkey = Happy_Monkey({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
});

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [command, setCommand] = useState(
    "curl -fsSL https://downloads.svrjs.org/installer/svr.js.installer.linux.20240509.sh > /tmp/installer.sh && sudo bash /tmp/installer.sh"
  );
  const [selectedButton, setSelectedButton] = useState<"linux" | "docker">(
    "linux"
  );

  const commands = {
    linux:
      "curl -fsSL https://downloads.svrjs.org/installer/svr.js.installer.linux.20240509.sh > /tmp/installer.sh && sudo bash /tmp/installer.sh",
    docker:
      "docker pull svrjs/svrjs && docker run --name mysvrjs -d -p 80:80 --restart=always svrjs/svrjs",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleButtonClick = (type: "linux" | "docker") => {
    setCommand(commands[type]);
    setSelectedButton(type);
  };

  return (
    <section className="relative container grid lg:grid-cols-2 place-items-center py-20 md:py-24 gap-10">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [6, 6],
          [10, 5],
          [13, 3],
        ]}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] opacity-30"
        )}
      />
      <div className="text-center lg:text-start space-y-6">
        <AnimatedGradientText className="mx-auto lg:mx-0">
          🎉{" "}
          <hr className="mx-2 h-4 w-[1px] shrink-0 bg-black dark:bg-gray-300" />
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#235b1a] to-[#315620] dark:bg-gradient-to-r dark:from-[#6df458] dark:to-[#4c932a] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Expanding server functionality
          </span>
        </AnimatedGradientText>
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline custom-title">
            <span className="bg-gradient-to-r from-[#84F472] to-[#34a102] bg-clip-text text-transparent">
              Simplify
            </span>{" "}
            your server logic performance
          </h1>
        </main>
        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          SVR.JS is a web server that runs on top of Node.JS, thus enabling
          server-side JavaScript on webpages. SVR.JS also has an integrated log
          viewer and more...
        </p>
        <div className="relative mx-auto lg:mx-0 flex gap-2 flex-col-reverse lg:flex-row justify-start items-center w-fit">
          <Button
            className="w-fit"
            onClick={copyToClipboard}
            variant={!isCopied ? "secondary" : "secondary"}
          >
            {!isCopied ? (
              <Clipboard className="w-4 h-4 mr-2" />
            ) : (
              <Check className="w-4 h-4 mr-2" />
            )}
            {command.slice(0, 39)}...
          </Button>
          <p className="hidden lg:block">|</p>
          <p className="block lg:hidden">or</p>
          <Link className="w-full" href="/dashboard">
            <Button className="w-full">Download</Button>
          </Link>
          <div className="pointer-events-none dark:invert -scale-x-100 absolute -bottom-14 max-lg:left-0 lg:right-20 inline-flex justify-center items-center gap-1">
            <Image
              src="/curly-arrow.png"
              width={35}
              height={35}
              alt="Curly arrow"
            />
            <span
              className={cn(
                `mt-10 font-bold text-black -scale-x-100 text-sm ${happyMonkey.className}`
              )}
            >
              Try Now!
            </span>
          </div>
        </div>
        <div className="flex items-center lg:justify-start justify-center gap-3 w-full">
          <Button
            className={`rounded-full w-12 h-12 lg:w-16 lg:h-16 ${
              selectedButton === "linux"
                ? "bg-accent"
                : "bg-primary-foreground/20"
            }`}
            variant={"ghost"}
            onClick={() => handleButtonClick("linux")}
          >
            <Image
              src="/linux.svg"
              alt="linux"
              width={200}
              height={200}
              className="block dark:hidden"
            />
            <Image
              src="/linuxdark.svg"
              alt="linux"
              width={200}
              height={200}
              className="dark:block hidden"
            />
          </Button>
          <Button
            className={`rounded-full w-12 h-12 lg:w-16 lg:h-16 ${
              selectedButton === "docker"
                ? "bg-accent"
                : "bg-primary-foreground/20"
            }`}
            variant={"ghost"}
            onClick={() => handleButtonClick("docker")}
          >
            <Image
              src="/docker.svg"
              alt="docker"
              width={200}
              height={200}
              className="block dark:hidden"
            />
            <Image
              src="/dockerdark.svg"
              alt="docker"
              width={200}
              height={200}
              className="dark:block hidden"
            />
          </Button>
        </div>
      </div>
      <div className="z-10">
        <HeroCards />
      </div>
      <div className="shadow"></div>
    </section>
  );
};

export default Hero;
