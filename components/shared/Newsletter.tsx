"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { Happy_Monkey } from "next/font/google";

const happyMonkey = Happy_Monkey({
  preload: true,
  weight: "400",
  subsets: ["latin"],
});

const Newsletter = () => {
  const [submission, setSubmission] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    console.log("Done");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24 md:py-32">
        <h3 className="text-center text-4xl md:text-5xl text-black font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
          Join The Newsletter!
        </h3>
        <p className="text-lg text-muted-foreground text-center mt-4 mb-8">
          Choosing the right website deployment option is important when
          creating a website, because it directly impacts the user experience
          and the resources required to run your website.
        </p>
        <form
          className="relative flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          aria-label="Email Information"
          onSubmit={handleSubmit}
        >
          <Input placeholder="example@subscribe.com"></Input>

          <Button disabled={submission === "loading"}>Subscribe</Button>
          <div className="pointer-events-none dark:invert -scale-x-100 absolute -bottom-14 right-1/2 md:right-14 inline-flex justify-center items-center gap-1">
            <Image
              src="/curly-arrow.png"
              alt="see here"
              width={35}
              height={35}
            />
            <span
              className={`mt-10 font-bold text-black -scale-x-100 text-[15px] ${happyMonkey.className}`}
            >
              {submission === "idle" && "Subscribe Now"}
              {submission === "loading" && (
                <p className="text-sm text-center">Subscribing...</p>
              )}
              {submission === "success" && (
                <p className="dark:invert text-sm text-center text-green-500">
                  🎉 Subscribed successfully...
                </p>
              )}
              {submission === "error" && (
                <p className="dark:invert text-sm text-center text-red-500">
                  😥 Something went wrong...
                </p>
              )}
            </span>
          </div>
        </form>
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

export default Newsletter;
