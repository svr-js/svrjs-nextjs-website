"use client";
import Newsletter from "@/components/shared/Newsletter";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const UnsubscribePage = ({
  searchParams
}: {
  searchParams: { id: string | undefined };
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleCaptchaVerify = async (token: string) => {
    setShowCaptcha(false);
    await submit(token); // Trigger form submission after captcha is verified
  };

  const submit = async (captchaToken: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        body: JSON.stringify({ unsubscribeId: searchParams.id, captchaToken }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });

      if (res.ok) {
        toast({
          description: "Unsubscribed successfully."
        });
      } else {
        toast({
          title: "Uh oh! Something went wrong.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Uh oh! Something went wrong.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
      setShowCaptcha(false); // Hide captcha after submission attempt
    }
  };

  return (
    <section
      id="vulnerabilities"
      className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
    >
      <h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
        Unsubscribe from newsletter
      </h1>
      <p className="md:text-lg text-muted-foreground text-start mb-6">
        Are you sure to unsubscribe from the newsletter? You will no longer
        receive updates from the newsletter.
      </p>
      <form
        className="mx-auto text-center"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          setShowCaptcha(true);
        }}
      >
        <Button
          type="submit"
          variant={"default"}
          className="mt-2"
          disabled={loading}
        >
          <div className="flex items-center justify-center">
            <span className="tracking-tight font-semibold">Unsubscribe</span>
          </div>
        </Button>
        {showCaptcha && (
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
            onVerify={handleCaptchaVerify}
          />
        )}
      </form>
    </section>
  );
};

export default UnsubscribePage;
