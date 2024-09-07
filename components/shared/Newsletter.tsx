"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { Happy_Monkey } from "next/font/google";
import { Mail } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const happyMonkey = Happy_Monkey({
  preload: true,
  weight: "400",
  subsets: ["latin"]
});

const Newsletter = () => {
  const [submission, setSubmission] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [input, setInput] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Added this line
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

  const handleCaptcha = async (token: string) => {
    setCaptchaToken(token);
    setShowCaptcha(false);
    await handleSubmit(token);
  };

  const handleSubmit = async (token: string | null) => {
    if (!input || !token || isSubmitting) return;

    setIsSubmitting(true);
    setSubmission("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: input, captchaToken: token })
      });

      if (response.ok) {
        setSubmission("success");
        setInput("");
      } else {
        setSubmission("error");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubmission("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribeClick = () => {
    if (!input) return;
    setShowCaptcha(true);
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24 md:py-32">
        <h3 className="text-center text-4xl md:text-5xl md:pb-2 text-black font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
          Join The Newsletter!
        </h3>
        <p className="text-lg text-muted-foreground text-center mt-4 md:mt-2 mb-8">
          Subscribe to our newsletter for updates. We promise no spam emails
          will be sent
        </p>
        <form
          className="relative flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          aria-label="Email Information"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="group flex items-center gap-x-4 pl-4 pr-1 rounded-[9px] bg-accent/80 hover:bg-accent shadow-outline-gray hover:shadow-transparent focus-within:bg-accent focus-within:!shadow-outline-gray-focus transition-all duration-300">
            <Mail className="hidden sm:inline w-6 h-6 text-[#4B4C52] group-focus-within:text-secondary-foreground group-hover:text-secondary-foreground transition-colors duration-300" />
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Email address"
              required
              type="email"
              className="flex-1 text-secondary-foreground text-sm sm:text-base outline-none placeholder-[#4B4C52] group-focus-within:placeholder-muted bg-transparent placeholder:transition-colors placeholder:duration-300 border-none"
            />
          </div>
          <Button
            ref={buttonRef}
            onClick={handleSubscribeClick}
            disabled={submission === "loading" || !input || isSubmitting}
          >
            Subscribe
          </Button>

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
        {showCaptcha && (
          <div className="flex-center relative">
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
              onVerify={handleCaptcha}
              ref={hcaptchaRef}
            />
          </div>
        )}
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

export default Newsletter;
