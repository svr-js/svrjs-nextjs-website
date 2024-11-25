import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Logo from "./components/shared/Logo";

export default {
  head: function Head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${asPath}`;

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="SVR.JS documentation offers essential information and guidance for using and configuring the SVR.JS web server, serving as a valuable resource for developers."
        />
        <link rel="canonical" href={url} />
        <meta
          property="og:title"
          content={(frontMatter.title || "Documentation") + " - SVR.JS"}
        />
        <meta
          property="og:description"
          content="SVR.JS documentation offers essential information and guidance for using and configuring the SVR.JS web server, serving as a valuable resource for developers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`}
        />
        <title>{(frontMatter.title || "Documentation") + " - SVR.JS"}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={(frontMatter.title || "Documentation") + " - SVR.JS"}
        />
        <meta
          name="twitter:description"
          content="SVR.JS documentation offers essential information and guidance for using and configuring the SVR.JS web server, serving as a valuable resource for developers."
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`}
        />
      </>
    );
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  logo: <Logo width={120} height={40} />,
  project: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 123 123"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M120.208 55.953 66.715 2.463a7.885 7.885 0 0 0-11.158 0l-11.109 11.11 14.088 14.088a9.373 9.373 0 0 1 11.87 11.948l13.578 13.579a9.368 9.368 0 0 1 9.704 2.23 9.386 9.386 0 0 1-6.64 16.025 9.393 9.393 0 0 1-9.21-7.547 9.384 9.384 0 0 1 .526-5.416L65.697 45.817v33.33a9.385 9.385 0 0 1 2.48 15.053 9.386 9.386 0 0 1-15.311-3.046A9.388 9.388 0 0 1 54.9 80.923a9.378 9.378 0 0 1 3.078-2.052V45.235a9.336 9.336 0 0 1-3.078-2.047A9.4 9.4 0 0 1 52.88 32.92l-13.89-13.89L2.311 55.703a7.89 7.89 0 0 0 0 11.16l53.495 53.497a7.895 7.895 0 0 0 11.157 0l53.244-53.245a7.9 7.9 0 0 0 0-11.162Z"
        />
      </svg>
    ),
    link: "https://git.svrjs.org"
  },
  footer: {
    component: null
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – SVR.JS"
      };
    }
  },
  primaryHue: 136,
  primarySaturation: 75
};
