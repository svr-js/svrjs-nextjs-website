"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import { Happy_Monkey } from "next/font/google";
import { ArchiveRestore, Headset, Infinity, LightbulbIcon } from "lucide-react";
import Iconss from "../ui/icons";
import { useRouter } from "next/navigation";

const happyMonkey = Happy_Monkey({
  preload: true,
  weight: ["400"],
  subsets: ["latin"]
});

const HeroCards = () => {
  const router = useRouter();
  const cards = {
    aboutCard: {
      description:
        "Discover more about our services and offerings. We aim to provide the best experience for our users.",
      socialLinks: {
        x: "https://x.com/SVR_JS",
        Mastodon: "https://mastodon.social/@svrjs",
        Bluesky: "https://bsky.app/profile/svrjs.org",
        Odysee: "https://odysee.com/@SVRJS"
      }
    },
    pricingCard: {
      planName: "Pro Plan",
      badgeTitle: "Popular",
      pricePerMonth: "$0",
      description:
        "Get the best features and priority support with our Pro Plan.",
      primaryButtonText: "Download SVR Now",
      onPrimaryButtonClick: () => router.push("/downloads"),
      features: [
        {
          title: "Unlimited Projects",
          icons: <Infinity width={25} height={25} />
        },
        {
          title: "Priority Support",
          icons: <ArchiveRestore width={25} height={25} />
        },
        {
          title: "Free Updates",
          icons: <Headset width={25} height={25} />
        }
      ],
      curlyText: "Best Value!"
    },
    serviceCard: {
      title: "Our Services",
      description:
        "We offer a variety of services to cater to your needs, including web development, SEO, and more."
    }
  };

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Twitter First Top left */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt={"twitteravatar"}
              src={"/testimonials/acrosett.webp"}
            />
            <AvatarFallback>acrosett</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">acrosett</CardTitle>
            <CardDescription>@acrosettdev</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          My pleasure, SVR.js is an awesome project! 🔥🚀
        </CardContent>
        <BorderBeam className="-z-10" />
      </Card>

      {/* Socials Second top right */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex justify-center items-center pb-2">
          <CardTitle className="text-center">Socials</CardTitle>
          <CardDescription className="font-medium text-primary"></CardDescription>
        </CardHeader>

        <CardContent className="text-center text-muted-foreground pb-2">
          <p>{cards.aboutCard.description}</p>
        </CardContent>
        <CardFooter>
          <Iconss />
        </CardFooter>
        <BorderBeam className="-z-10" />
      </Card>

      {/* Pricings Bottom left */}
      <Card className="absolute top-[170px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {cards.pricingCard.planName}
            <Badge variant="secondary" className="text-sm text-primary">
              {cards.pricingCard.badgeTitle}
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">
              {cards.pricingCard.pricePerMonth}
            </span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>{cards.pricingCard.description}</CardDescription>
          <Button
            size="sm"
            className="w-full"
            onClick={cards.pricingCard.onPrimaryButtonClick}
          >
            {cards.pricingCard.primaryButtonText}
          </Button>
        </CardHeader>
        <hr className="w-4/5 m-auto -mt-2 mb-4" />
        <CardFooter className="flex">
          <div className="space-y-3">
            {cards.pricingCard.features.map((benefit) => (
              <span
                key={benefit.title}
                className="inline-flex justify-center items-center gap-x-3"
              >
                {benefit.icons}
                <h3>{benefit.title}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
        <BorderBeam className="-z-10" />
        <div className="pointer-events-none dark:invert -scale-x-100 absolute w-36 top-[9.5rem] -left-[7.5rem] inline-flex justify-center items-center gap-1">
          <Image
            src="/curly-arrow.png"
            width={35}
            height={35}
            alt="Curly arrow"
          />
          <span
            style={happyMonkey.style}
            className="mt-10 font-bold text-black -scale-x-100 text-sm"
          >
            {cards.pricingCard.curlyText}
          </span>
        </div>
      </Card>

      {/* Service  */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[75px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightbulbIcon className="fill-black dark:fill-[#F596D3]" />
          </div>
          <div>
            <CardTitle>{cards.serviceCard.title}</CardTitle>
            <CardDescription className="text-md mt-2">
              {cards.serviceCard.description}
            </CardDescription>
          </div>
        </CardHeader>
        <BorderBeam className="-z-10" />
      </Card>
    </div>
  );
};

export default HeroCards;
