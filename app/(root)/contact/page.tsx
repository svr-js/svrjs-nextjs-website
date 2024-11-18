"use client";
import Iconss from "@/components/ui/icons";
import { Mail, Send, WebhookIcon, Bug, Shield } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "@/lib/validations/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { emails } from "@/constants";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const ContactUs = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    if (!captchaToken) {
      setShowCaptcha(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...values, captchaToken }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });

      if (res.ok) {
        form.reset();
        setCaptchaToken(null); // Reset captcha token after successful submission
        toast({
          description: "Your message has been sent."
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
  }

  function handleCaptchaVerify(token: string) {
    setCaptchaToken(token);
    onSubmit(form.getValues()); // Trigger form submission after captcha is verified
  }

  return (
    <>
      <div className="flex items-center justify-center py-12 md:py-16 w-full transition-all duration-300">
        <h1 className="text-4xl md:text-6xl tracking-tight font-bold uppercase text-center text-gray-900 dark:text-white">
          Contact Us
        </h1>
      </div>

      <section id="contact" className="w-full">
        <div className="flex-center flex-col md:flex-row justify-between mx-auto p-6 max-w-5xl">
          {/* Left contact page */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 pb-8 mb-8 max-w-lg w-full bg-accent border p-6 rounded-lg shadow-md"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-44"
                        placeholder="Your Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {showCaptcha && (
                <HCaptcha
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                  onVerify={handleCaptchaVerify}
                />
              )}

              <Button
                type="submit"
                variant={"default"}
                className="w-full mt-2"
                disabled={loading}
              >
                <div className="flex items-center justify-center">
                  <span className="tracking-tight font-semibold">SEND</span>
                  <Send className="ml-2 w-5 h-5" />
                </div>
              </Button>
            </form>
          </Form>

          {/* Right contact page */}
          <div className="max-w-lg mt-8 md:mt-0 md:ml-8 p-12 border rounded-lg">
            <ul className="space-y-4 mb-6">
              {emails.map((email, index) => (
                <li
                  key={index}
                  className="text-gray-600 dark:text-gray-300 flex items-center"
                >
                  <email.icon className="mr-2" size={24} />
                  <span>
                    <a
                      href={email.url}
                      title={`Send an email to ${email.email}`}
                      className="text-muted-foreground hover:text-accent-foreground transition duration-200"
                    >
                      {email.email}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
            <Separator />
            <ul className="flex justify-center my-6">
              <Iconss />
            </ul>
            <Separator />
            <div className="text-center text-gray-500 mt-2 text-sm font-light"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
