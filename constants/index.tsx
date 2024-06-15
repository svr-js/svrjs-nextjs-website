import { BadgeAlert, BarChart4, Cog, ShieldCheck } from "lucide-react";

export const NAVBAR = {
  centerLinks: [
    {
      href: "/",
      target: "_self",
      label: "Home",
    },
    {
      href: "/docs",
      target: "_self",
      label: "Docs",
    },
    {
      href: "/forum",
      target: "_self",
      label: "Forum",
    },
    {
      href: "/blog",
      target: "_blank",
      label: "Blog",
    },
  ],
  rightLinks: [
    {
      label: "Git",
      target: "_blank",
      href: "https://github.com/",
    },
  ],
};

export const stats = [
  {
    title: "Downloads",
    count: 69,
  },
  {
    title: "Users",
    count: 42,
  },
  {
    title: "Stars",
    count: 6,
  },
  {
    title: "Products",
    count: 2,
  },
];

export const Features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Complete Secured ",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
  },
  {
    icon: <BadgeAlert className="w-10 h-10 text-primary" />,
    title: "Best Support",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
  },
  {
    icon: <BarChart4 className="w-10 h-10 text-primary" />,
    title: "Most Scalable ",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
  },
  {
    icon: <Cog className="w-10 h-10 text-primary" />,
    title: "Fully Configurable ",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor",
  },
];
