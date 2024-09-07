import {
  BarChart4,
  Bird,
  Bug,
  BugIcon,
  Cog,
  File,
  Mail,
  ShieldCheck,
  WebhookIcon
} from "lucide-react";
import { Download, Home, Settings, User } from "lucide-react";

// Navbar

export const NAVBAR = {
  centerLinks: [
    {
      href: "/",
      target: "_self",
      label: "Home"
    },
    {
      href: "/docs",
      target: "_self",
      label: "Docs"
    },
    {
      href: "/blog",
      target: "_self",
      label: "Blog"
    },
    {
      href: "/forum",
      target: "_self",
      label: "Forum"
    }
  ],
  rightLinks: [
    {
      label: "Git",
      target: "_blank",
      href: "https://git.svrjs.org/"
    }
  ]
};

// About section Stats
export const stats = [
  {
    title: "Docker pulls",
    count: 18
  },
  {
    title: "GitHub stars",
    count: 8
  },
  {
    title: "Powered servers",
    count: 1
  },
  {
    title: "Contributors",
    count: 1
  }
];

// Features Section Home Page
export const Features = [
  {
    icon: <Bird className="w-10 h-10 text-primary" />,
    title: "Free as in freedom",
    description:
      "You don't need to worry about proprietary malware, counterfeit software, crashes from non-genuine versions, or Big Tech backdoors. SVR.JS is open-source under the MIT license, running on Node.JS (also MIT). Contribute to SVR.JS via our Git repository!"
  },
  {
    icon: <BarChart4 className="w-10 h-10 text-primary" />,
    title: "Scalable",
    description:
      "SVR.JS runs on Node.JS or Bun, which are JavaScript runtimes utilizing event-driven infrastructure for efficient handling of I/O operations. It also uses clustering by default to withstand high request loads and ensure server stability."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Secure",
    description:
      "We put your website security first. SVR.JS sanitizes URLs, and protects your web application against brute force attacks on HTTP authentication. SVR.JS also has a built-in block list, so you can block malicious actors."
  },
  {
    icon: <Cog className="w-10 h-10 text-primary" />,
    title: "Configurable",
    description:
      "You can configure SVR.JS through config.json file. You can also install mods and use server-side JavaScript! Focus on developing JavaScript web applications with SVR.JS!"
  }
];

// FAQS
export const questions = [
  {
    key: "item-1",
    question: "What is a web server?",
    answer:
      "A web server is computer software that accepts HTTP requests and serves websites. Web servers can also be underlying hardware running web server software."
  },
  {
    key: "item-2",
    question: "What is SVR.JS?",
    answer:
      "SVR.JS is web server software running on Node.JS that can host both static and dynamic content. With additional mods, SVR.JS can be used for different types of dynamic content and can even be used as a forward or reverse proxy. SVR.JS is licensed under a permissive MIT/X11 license"
  },
  {
    key: "item-3",
    question: "How was SVR.JS created?",
    answer:
      "Someone in 2018 wanted to create a website, but he didn't know about setting up popular web server software like Apache httpd, NGINX, or IIS... So he created his own web server in Node.JS to serve his website! And he saved it in a file called svr.js. Since then, this web server has been gradually turned from a web server intended for one website into a general-purpose web server, which is what SVR.JS is today!"
  },
  {
    key: "item-4",
    question: "How did SVR.JS get its name?",
    answer:
      "SVR.JS got its name from the original name of the server script: svr.js, one of many generic file names for a server written in JavaScript."
  },
  {
    key: "item-5",
    question: "What is Node.JS?",
    answer:
      "Node.JS is an asynchronous event-driven JavaScript runtime built on Chromium's V8 engine. Node.JS is designed to build scalable network applications."
  },
  {
    key: "item-6",
    question: "How can I use SVR.JS?",
    answer:
      "You can read the SVR.JS documentation to learn how to use the SVR.JS web server."
  }
];

// Footer

export const FOOTERLINKS = {
  otherPages: [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/forum", label: "Forum" }
  ],
  plans: [
    { href: "/docs", label: "Docs" },
    { href: "/downloads", label: "Downloads" },
    { href: "/mods", label: "SVR.JS Mods" },
    { href: "/changelogs", label: "Change Logs" }
  ],
  additional: [
    { href: "/contribute", label: "Contribute" },
    { href: "/vulnerabilities", label: "Vulnerabilities" },
    { href: "https://git.svrjs.org", label: "Git Server" },
    { href: "http://status.svrjs.org", label: "Server Uptime" }
  ],
  social: {
    supportText: "Support Us on Socials"
  },
  footerBottom: {
    termsofService: {
      href: "/tos",
      label: "Terms of Service"
    },
    privacyPolicy: {
      href: "/privacy",
      label: "Privacy Policy"
    },
    rightsReserved: {
      href: "https://svrjs.org/",
      label: "SVR.JS"
    }
  }
};

// Admin Dashboard
export const AdminLinks = [
  {
    name: "Dashboard",
    url: "/admin",
    icon: Home
  },
  {
    name: "Downloads",
    url: "/admin/downloads",
    icon: Download
  },
  {
    name: "Mods",
    url: "/admin/mods",
    icon: User
  },
  {
    name: "Logs",
    url: "/admin/changelogs",
    icon: Settings
  },
  {
    name: "MultiLogs",
    url: "/admin/multi-logs",
    icon: File
  },
  {
    name: "Vulnerabilities",
    url: "/admin/vulnerabilities",
    icon: BugIcon
  },
  {
    name: "Back Home",
    url: "/",
    icon: Home
  }
];

export const AdminDashboardLINKS = [
  {
    label: "Downloads",
    url: "/admin/downloads"
  },
  {
    label: "SVR.JS Mods",
    url: "/admin/mods"
  },
  {
    label: "Change Logs",
    url: "/admin/changelogs"
  },
  {
    label: "MultiLogs",
    url: "/admin/multi-logs"
  },
  {
    label: "Vulnerabilities",
    url: "/admin/vulnerabilities"
  },
  {
    label: "Emails",
    url: "/admin/email"
  }
];

// contact page emails
export const emails = [
  {
    icon: Mail,
    email: "support@svrjs.org",
    url: "mailto:support@svrjs.org"
  },
  {
    icon: WebhookIcon,
    email: "webmaster@svrjs.org",
    url: "mailto:webmaster@svrjs.org"
  },
  {
    icon: Bug,
    email: "bugreports@svrjs.org",
    url: "mailto:bugreports@svrjs.org"
  },
  {
    icon: ShieldCheck,
    email: "vulnerability-reports@svrjs.org",
    url: "mailto:vulnerability-reports@svrjs.org"
  }
];

export const EXAMPLE_A1 = `
  <div>
    <h1>Test Email Preview</h1>
    <p>This is a simple email preview test.</p>
  </div>
`;
