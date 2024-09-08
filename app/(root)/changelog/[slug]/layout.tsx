import { Metadata } from "next";
import clientPromise from "@/lib/db";

interface Page {
  title: string;
  content: string;
}

// baseURL [ENV]
export async function generateMetadata({
  params
}: {
  params: { slug: "string" };
}) {
  let page: Page = {
    title: "unknown mod",
    content: "unknown mod"
  };
  let notFound = false;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const fetchedPage = (await db
      .collection("pages")
      .findOne({ slug: params.slug })) as unknown as Page;
    if (fetchedPage) {
      page = fetchedPage;
    } else {
      notFound = true;
    }
  } catch (err) {}

  if (notFound) {
    return {
      title: "404 Not Found - SVR.JS",
      openGraph: {
        title: "404 Not Found - SVR.JS"
      },
      twitter: {
        title: "404 Not Found - SVR.JS"
      }
    };
  }

  return {
    title: `${page.title} change log - SVR.JS`,
    description: `Keep track of the latest updates and improvements for ${page.title} with our comprehensive change log. Discover new features, bug fixes, and enhancements for each release of this SVR.JS mod.`,
    openGraph: {
      title: `${page.title} change log - SVR.JS`,
      description: `Keep track of the latest updates and improvements for ${page.title} with our comprehensive change log. Discover new features, bug fixes, and enhancements for each release of this SVR.JS mod.`,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/changelog/${params.slug}`,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
          width: 800,
          height: 600,
          alt: `${page.title} change log - SVR.JS`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@SVR_JS",
      title: `${page.title} change log - SVR.JS`,
      description: `Keep track of the latest updates and improvements for ${page.title} with our comprehensive change log. Discover new features, bug fixes, and enhancements for each release of this SVR.JS mod.`,
      images: [
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`
      ],
      creator: "@SVR_JS"
    }
  };
}
const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ContactLayout;
