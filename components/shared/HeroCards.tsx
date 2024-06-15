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
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Happy_Monkey } from "next/font/google";
import {
  ArchiveRestore,
  Github,
  Headset,
  Infinity,
  LightbulbIcon,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const happyMonkey = Happy_Monkey({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
});

const HeroCards = () => {
  const cards = {
    aboutCard: {
      description:
        "Discover more about our services and offerings. We aim to provide the best experience for our users.",
      socialLinks: {
        x: "https://x.com/SVR_JS",
        Mastodon: "https://mastodon.social/@svrjs",
        Bluesky: "https://bsky.app/profile/svrjs.org",
        Odysee: "https://odysee.com/@SVRJS",
      },
    },
    pricingCard: {
      planName: "Pro Plan",
      badgeTitle: "Popular",
      pricePerMonth: "$0",
      description:
        "Get the best features and priority support with our Pro Plan.",
      primaryButtonText: "Download SVR Now",
      onPrimaryButtonClick: () => alert("Plan chosen"),
      features: [
        {
          title: "Unlimited Projects",
          icons: <Infinity className="rounded-full" width={25} height={25} />,
        },
        {
          title: "Priority Support",
          icons: (
            <ArchiveRestore className="rounded-full" width={25} height={25} />
          ),
        },
        {
          title: "Free Updates",
          icons: <Headset className="rounded-full" width={25} height={25} />,
        },
      ],
      curlyText: "Best Value!",
    },
    serviceCard: {
      title: "Our Services",
      description:
        "We offer a variety of services to cater to your needs, including web development, SEO, and more.",
    },
  };

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Twitter First Top left */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt={""} src={"https://github.com/shadcn.png"} />
            <AvatarFallback>Proxy</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Proxy</CardTitle>
            <CardDescription>@proxyxd_s</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          Svrjs has the best server side rendering{" "}
          <span className="text-sky-400">#SVRJSONTOP</span>
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
          <Link
            href={cards.aboutCard.socialLinks.x}
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">X icon</span>
            <Twitter />
          </Link>
          <Link
            href={cards.aboutCard.socialLinks.Mastodon}
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Mastodon icon</span>
            <div className="hidden dark:block">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.163 8.74512C24.163 3.99903 20.6083 2.60743 20.6083 2.60743C17.1206 1.20606 7.85163 1.22071 4.39739 2.60743C4.39739 2.60743 0.842704 3.99903 0.842704 8.74512C0.842704 14.3945 0.4744 21.4111 6.73556 22.8613C8.99561 23.3838 10.9376 23.4961 12.5001 23.418C15.3349 23.2813 16.9253 22.5342 16.9253 22.5342L16.8304 20.7324C16.8304 20.7324 14.8048 21.2891 12.528 21.2256C10.2735 21.1572 7.89627 21.0107 7.52797 18.5889C7.49366 18.3639 7.47688 18.1371 7.47775 17.9102C12.2545 18.9307 16.3338 18.3545 17.4554 18.2373C20.586 17.9102 23.3148 16.2207 23.6608 14.6777C24.2077 12.2461 24.163 8.74512 24.163 8.74512ZM19.9722 14.8584H17.3717V9.28223C17.3717 6.85548 13.8003 6.7627 13.8003 9.61915V12.6709H11.2166V9.61915C11.2166 6.7627 7.64516 6.85548 7.64516 9.28223V14.8584H5.03355C5.03355 8.89649 4.74337 7.63673 6.06034 6.31348C7.50565 4.90235 10.5135 4.80958 11.8527 6.61134L12.5001 7.56348L13.1474 6.61134C14.4923 4.79981 17.5057 4.91212 18.9398 6.31348C20.2623 7.64649 19.9666 8.90137 19.9666 14.8584H19.9722Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="dark:hidden block">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.163 8.74512C24.163 3.99903 20.6083 2.60743 20.6083 2.60743C17.1206 1.20606 7.85163 1.22071 4.39739 2.60743C4.39739 2.60743 0.842704 3.99903 0.842704 8.74512C0.842704 14.3945 0.4744 21.4111 6.73556 22.8613C8.99561 23.3838 10.9376 23.4961 12.5001 23.418C15.3349 23.2813 16.9253 22.5342 16.9253 22.5342L16.8304 20.7324C16.8304 20.7324 14.8048 21.2891 12.528 21.2256C10.2735 21.1572 7.89627 21.0107 7.52797 18.5889C7.49366 18.3639 7.47688 18.1371 7.47775 17.9102C12.2545 18.9307 16.3338 18.3545 17.4554 18.2373C20.586 17.9102 23.3148 16.2207 23.6608 14.6777C24.2077 12.2461 24.163 8.74512 24.163 8.74512ZM19.9722 14.8584H17.3717V9.28223C17.3717 6.85548 13.8003 6.7627 13.8003 9.61915V12.6709H11.2166V9.61915C11.2166 6.7627 7.64516 6.85548 7.64516 9.28223V14.8584H5.03355C5.03355 8.89649 4.74337 7.63673 6.06034 6.31348C7.50565 4.90235 10.5135 4.80958 11.8527 6.61134L12.5001 7.56348L13.1474 6.61134C14.4923 4.79981 17.5057 4.91212 18.9398 6.31348C20.2623 7.64649 19.9666 8.90137 19.9666 14.8584H19.9722Z"
                  fill="black"
                />
              </svg>
            </div>
          </Link>

          <Link
            href={cards.aboutCard.socialLinks.Bluesky}
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Bluesky icon</span>
            <div className="dark:hidden block">
              <svg
                width="25"
                height="25"
                viewBox="0 0 576 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_47_8)">
                  <path
                    d="M407.8 294.7C404.5 294.3 401.1 293.9 397.8 293.4C401.2 293.8 404.5 294.3 407.8 294.7ZM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6 -9.40003 37.5 -1.70003 21.6 5.49997C3.3 13.8 0 41.9 0 58.4C0 74.9 9.1 194 15 213.9C34.5 279.6 104.1 301.8 168.2 294.6C171.5 294.1 174.8 293.7 178.2 293.2C174.9 293.7 171.6 294.2 168.2 294.6C74.3 308.6 -9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1C310.9 437.8 337.2 583.6 473.6 464.5C576 361.1 501.7 308.5 407.8 294.6C404.5 294.2 401.1 293.8 397.8 293.3C401.2 293.7 404.5 294.2 407.8 294.6C471.9 301.7 541.4 279.5 561 213.9C566.9 194 576 75 576 58.4C576 41.8 572.7 13.7 554.4 5.49997C538.6 -1.60003 514.4 -9.40003 451.2 35.3C385.1 81.9 314.1 176.4 288 227.1Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_47_8">
                    <rect width="576" height="512" fill="black" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="hidden dark:block">
              <svg
                width="25"
                height="25"
                viewBox="0 0 576 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_47_8)">
                  <path
                    d="M407.8 294.7C404.5 294.3 401.1 293.9 397.8 293.4C401.2 293.8 404.5 294.3 407.8 294.7ZM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6 -9.40003 37.5 -1.70003 21.6 5.49997C3.3 13.8 0 41.9 0 58.4C0 74.9 9.1 194 15 213.9C34.5 279.6 104.1 301.8 168.2 294.6C171.5 294.1 174.8 293.7 178.2 293.2C174.9 293.7 171.6 294.2 168.2 294.6C74.3 308.6 -9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1C310.9 437.8 337.2 583.6 473.6 464.5C576 361.1 501.7 308.5 407.8 294.6C404.5 294.2 401.1 293.8 397.8 293.3C401.2 293.7 404.5 294.2 407.8 294.6C471.9 301.7 541.4 279.5 561 213.9C566.9 194 576 75 576 58.4C576 41.8 572.7 13.7 554.4 5.49997C538.6 -1.60003 514.4 -9.40003 451.2 35.3C385.1 81.9 314.1 176.4 288 227.1Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_47_8">
                    <rect width="576" height="512" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          <Link
            href={cards.aboutCard.socialLinks.Odysee}
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Odysee icon</span>
            <div className="hidden dark:block">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_47_10)">
                  <path
                    d="M19.8584 22.6074C17.793 24.1113 15.249 25 12.5 25C7.0752 25 2.45605 21.543 0.727539 16.709C0.844727 16.792 1.01562 16.8848 1.11328 16.9238C1.90918 17.2852 3.07129 16.6602 4.18457 15.5225C4.52148 15.1855 4.8877 14.917 5.29785 14.6777C6.19141 14.0967 7.13379 13.6621 8.14941 13.3496C8.14941 13.3496 9.23828 15.0195 10.2539 17.002C11.2695 18.9844 9.16504 19.6387 8.92578 19.6387C8.91113 19.6387 8.88672 19.6387 8.85254 19.6338C8.31543 19.6094 5.43457 19.4873 6.11816 22.1289C6.8457 24.9316 10.8789 23.916 12.9346 22.5635C14.9902 21.2109 14.4824 16.7871 14.4824 16.7871C16.4893 16.4746 17.1191 18.5986 17.3096 19.6875C17.3486 19.9121 17.3633 20.1709 17.3779 20.4443C17.4316 21.4795 17.4902 22.6709 19.1016 22.71C19.3604 22.71 19.6191 22.6709 19.8584 22.6123V22.6074ZM15.2051 21.4502C15.1074 21.4258 15.0342 21.3281 15.0586 21.2061C15.1074 21.084 15.2051 21.0352 15.3027 21.0596C15.4004 21.084 15.4736 21.2061 15.4492 21.3037C15.4248 21.4014 15.3271 21.4746 15.2051 21.4502ZM5.09766 16.7822C5.1709 16.7578 5.26855 16.8311 5.29297 16.9287C5.29297 17.0264 5.24414 17.124 5.14648 17.124C5.07324 17.1484 4.97559 17.0752 4.95117 16.9775C4.92676 16.9043 5 16.8066 5.09766 16.7822ZM22.0605 20.5566C23.8916 18.3789 25 15.5664 25 12.5C25 9.2041 23.7256 6.20605 21.6406 3.96973C21.6357 5.11719 21.3428 6.32324 20.8203 7.34863C20.2393 8.33984 18.4277 10.2246 17.4121 11.1914C17.3779 11.2061 17.3584 11.2354 17.3389 11.2598C17.3291 11.2695 17.3242 11.2793 17.3145 11.2891C17.0703 11.626 17.1191 12.1094 17.4609 12.3535C18.501 13.125 20.2148 14.5801 20.3613 15.9082C20.5322 17.6123 21.7236 19.5996 22.0313 20.1172C22.0703 20.1807 22.0947 20.2197 22.0996 20.2344C22.0996 20.3418 22.0801 20.4443 22.0605 20.5518V20.5566ZM19.0771 12.2559C19.0527 12.4023 19.126 12.5439 19.2725 12.5684C19.4189 12.5928 19.5605 12.5195 19.585 12.373C19.6094 12.2266 19.5361 12.085 19.3896 12.0605C19.2432 12.0117 19.1016 12.1094 19.0771 12.2559ZM22.0752 9.28223L21.5186 9.5459L21.3721 10.1758L21.1084 9.61914L20.4785 9.47266L21.0352 9.20898L21.1816 8.5791L21.4453 9.13574L22.0752 9.28223ZM19.3115 2.0166C18.5205 2.41699 18.2324 3.61816 17.8955 5.01465C17.8809 5.08301 17.8613 5.15137 17.8467 5.21973C17.3828 7.09961 16.3525 7.05566 15.8105 7.03613C15.7568 7.03613 15.7129 7.03125 15.6689 7.03125C15.4199 7.03125 15.376 6.83594 15.2344 6.19629C15.1074 5.60547 14.8975 4.63379 14.3604 3.09082C13.252 -0.12207 10.3223 0.678711 8.10059 2.00684C5.40039 3.62305 6.4209 6.98242 7.13379 9.30176C7.16797 9.40918 7.20215 9.5166 7.23145 9.62402C7.03613 9.81934 6.55762 9.99023 5.96191 10.2051C5.37109 10.415 4.66309 10.6689 3.99414 11.0303C2.33887 11.9092 0.561523 13.4229 0.0976562 14.0869C0.0341797 13.5645 0 13.0371 0 12.5C0 5.5957 5.5957 0 12.5 0C15.0098 0 17.3535 0.742187 19.3115 2.0166ZM2.87598 9.25781C2.80273 9.16016 2.65625 9.11133 2.56348 9.18457C2.4707 9.25781 2.41699 9.4043 2.49023 9.49707C2.56348 9.58984 2.70996 9.64355 2.80273 9.57031C2.9248 9.49707 2.94922 9.35059 2.87598 9.25781ZM15.9814 3.16895C16.0791 3.0957 16.2256 3.14453 16.2939 3.24219C16.3672 3.36426 16.3428 3.50586 16.2207 3.55469C16.123 3.62793 15.9766 3.5791 15.9082 3.48145C15.8398 3.38379 15.8838 3.2373 15.9814 3.16895ZM4.64355 5.12695C4.61914 5.2002 4.66797 5.27344 4.74121 5.27344C4.81445 5.29785 4.8877 5.24902 4.8877 5.17578C4.91211 5.10254 4.86328 5.0293 4.79004 5.0293C4.7168 5.0293 4.64355 5.05371 4.64355 5.12695ZM8.7793 5.10254C8.6084 2.99805 10.5908 2.46582 10.5908 2.46582C12.7441 1.71387 13.3252 2.75391 13.833 4.30176C14.3408 5.84961 13.9795 6.38184 11.9482 7.17773C9.91699 7.97363 8.92578 6.95801 8.7793 5.09766V5.10254ZM13.1543 5.83008H13.2031C13.3252 5.83008 13.4473 5.73242 13.4473 5.58594C13.5449 5.24902 13.4961 4.88281 13.3496 4.57031C13.2764 4.47266 13.1543 4.39941 13.0371 4.44824C12.8906 4.49707 12.8174 4.64355 12.8662 4.78516C12.9639 5.00488 13.0127 5.26855 12.9395 5.5127C12.915 5.65918 13.0127 5.80078 13.1592 5.8252L13.1543 5.83008ZM12.6709 3.79883C12.5732 3.79883 12.4756 3.75 12.4268 3.65234C12.3779 3.55469 12.3291 3.48145 12.2803 3.4082C12.1826 3.31055 12.1826 3.14453 12.2803 3.04688C12.3779 2.94922 12.5439 2.94922 12.6416 3.04688C12.7393 3.16895 12.8125 3.29102 12.8857 3.4082C12.959 3.52539 12.9102 3.69629 12.7637 3.76953C12.7344 3.76953 12.7148 3.7793 12.7002 3.78418C12.6904 3.78906 12.6807 3.79395 12.6709 3.79395V3.79883Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_47_10">
                    <rect width="25" height="25" fill="black" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="dark:hidden block">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_47_10)">
                  <path
                    d="M19.8584 22.6074C17.793 24.1113 15.249 25 12.5 25C7.0752 25 2.45605 21.543 0.727539 16.709C0.844727 16.792 1.01562 16.8848 1.11328 16.9238C1.90918 17.2852 3.07129 16.6602 4.18457 15.5225C4.52148 15.1855 4.8877 14.917 5.29785 14.6777C6.19141 14.0967 7.13379 13.6621 8.14941 13.3496C8.14941 13.3496 9.23828 15.0195 10.2539 17.002C11.2695 18.9844 9.16504 19.6387 8.92578 19.6387C8.91113 19.6387 8.88672 19.6387 8.85254 19.6338C8.31543 19.6094 5.43457 19.4873 6.11816 22.1289C6.8457 24.9316 10.8789 23.916 12.9346 22.5635C14.9902 21.2109 14.4824 16.7871 14.4824 16.7871C16.4893 16.4746 17.1191 18.5986 17.3096 19.6875C17.3486 19.9121 17.3633 20.1709 17.3779 20.4443C17.4316 21.4795 17.4902 22.6709 19.1016 22.71C19.3604 22.71 19.6191 22.6709 19.8584 22.6123V22.6074ZM15.2051 21.4502C15.1074 21.4258 15.0342 21.3281 15.0586 21.2061C15.1074 21.084 15.2051 21.0352 15.3027 21.0596C15.4004 21.084 15.4736 21.2061 15.4492 21.3037C15.4248 21.4014 15.3271 21.4746 15.2051 21.4502ZM5.09766 16.7822C5.1709 16.7578 5.26855 16.8311 5.29297 16.9287C5.29297 17.0264 5.24414 17.124 5.14648 17.124C5.07324 17.1484 4.97559 17.0752 4.95117 16.9775C4.92676 16.9043 5 16.8066 5.09766 16.7822ZM22.0605 20.5566C23.8916 18.3789 25 15.5664 25 12.5C25 9.2041 23.7256 6.20605 21.6406 3.96973C21.6357 5.11719 21.3428 6.32324 20.8203 7.34863C20.2393 8.33984 18.4277 10.2246 17.4121 11.1914C17.3779 11.2061 17.3584 11.2354 17.3389 11.2598C17.3291 11.2695 17.3242 11.2793 17.3145 11.2891C17.0703 11.626 17.1191 12.1094 17.4609 12.3535C18.501 13.125 20.2148 14.5801 20.3613 15.9082C20.5322 17.6123 21.7236 19.5996 22.0313 20.1172C22.0703 20.1807 22.0947 20.2197 22.0996 20.2344C22.0996 20.3418 22.0801 20.4443 22.0605 20.5518V20.5566ZM19.0771 12.2559C19.0527 12.4023 19.126 12.5439 19.2725 12.5684C19.4189 12.5928 19.5605 12.5195 19.585 12.373C19.6094 12.2266 19.5361 12.085 19.3896 12.0605C19.2432 12.0117 19.1016 12.1094 19.0771 12.2559ZM22.0752 9.28223L21.5186 9.5459L21.3721 10.1758L21.1084 9.61914L20.4785 9.47266L21.0352 9.20898L21.1816 8.5791L21.4453 9.13574L22.0752 9.28223ZM19.3115 2.0166C18.5205 2.41699 18.2324 3.61816 17.8955 5.01465C17.8809 5.08301 17.8613 5.15137 17.8467 5.21973C17.3828 7.09961 16.3525 7.05566 15.8105 7.03613C15.7568 7.03613 15.7129 7.03125 15.6689 7.03125C15.4199 7.03125 15.376 6.83594 15.2344 6.19629C15.1074 5.60547 14.8975 4.63379 14.3604 3.09082C13.252 -0.12207 10.3223 0.678711 8.10059 2.00684C5.40039 3.62305 6.4209 6.98242 7.13379 9.30176C7.16797 9.40918 7.20215 9.5166 7.23145 9.62402C7.03613 9.81934 6.55762 9.99023 5.96191 10.2051C5.37109 10.415 4.66309 10.6689 3.99414 11.0303C2.33887 11.9092 0.561523 13.4229 0.0976562 14.0869C0.0341797 13.5645 0 13.0371 0 12.5C0 5.5957 5.5957 0 12.5 0C15.0098 0 17.3535 0.742187 19.3115 2.0166ZM2.87598 9.25781C2.80273 9.16016 2.65625 9.11133 2.56348 9.18457C2.4707 9.25781 2.41699 9.4043 2.49023 9.49707C2.56348 9.58984 2.70996 9.64355 2.80273 9.57031C2.9248 9.49707 2.94922 9.35059 2.87598 9.25781ZM15.9814 3.16895C16.0791 3.0957 16.2256 3.14453 16.2939 3.24219C16.3672 3.36426 16.3428 3.50586 16.2207 3.55469C16.123 3.62793 15.9766 3.5791 15.9082 3.48145C15.8398 3.38379 15.8838 3.2373 15.9814 3.16895ZM4.64355 5.12695C4.61914 5.2002 4.66797 5.27344 4.74121 5.27344C4.81445 5.29785 4.8877 5.24902 4.8877 5.17578C4.91211 5.10254 4.86328 5.0293 4.79004 5.0293C4.7168 5.0293 4.64355 5.05371 4.64355 5.12695ZM8.7793 5.10254C8.6084 2.99805 10.5908 2.46582 10.5908 2.46582C12.7441 1.71387 13.3252 2.75391 13.833 4.30176C14.3408 5.84961 13.9795 6.38184 11.9482 7.17773C9.91699 7.97363 8.92578 6.95801 8.7793 5.09766V5.10254ZM13.1543 5.83008H13.2031C13.3252 5.83008 13.4473 5.73242 13.4473 5.58594C13.5449 5.24902 13.4961 4.88281 13.3496 4.57031C13.2764 4.47266 13.1543 4.39941 13.0371 4.44824C12.8906 4.49707 12.8174 4.64355 12.8662 4.78516C12.9639 5.00488 13.0127 5.26855 12.9395 5.5127C12.915 5.65918 13.0127 5.80078 13.1592 5.8252L13.1543 5.83008ZM12.6709 3.79883C12.5732 3.79883 12.4756 3.75 12.4268 3.65234C12.3779 3.55469 12.3291 3.48145 12.2803 3.4082C12.1826 3.31055 12.1826 3.14453 12.2803 3.04688C12.3779 2.94922 12.5439 2.94922 12.6416 3.04688C12.7393 3.16895 12.8125 3.29102 12.8857 3.4082C12.959 3.52539 12.9102 3.69629 12.7637 3.76953C12.7344 3.76953 12.7148 3.7793 12.7002 3.78418C12.6904 3.78906 12.6807 3.79395 12.6709 3.79395V3.79883Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_47_10">
                    <rect width="25" height="25" fill="black" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
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
