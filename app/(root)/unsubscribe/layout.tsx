import React from "react";
export async function generateMetadata({
  searchParams
}: {
  searchParams: { id: string } | undefined;
}) {
  return {
    title: "Unsubscribe - SVR.JS",
    description: "Unsubscribe from our newsletter.",
    openGraph: {
      title: "Unsubscribe - SVR.JS",
      description: "Unsubscribe from our newsletter.",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/unsubscribe/?id=${encodeURIComponent(searchParams ? searchParams.id : "")}`,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`,
          width: 800,
          height: 600,
          alt: "Unsubscribe - SVR.JS"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@SVR_JS",
      title: "Unsubscribe - SVR.JS",
      description: "Unsubscribe from our newsletter.",
      images: [
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/metadata/svrjs-cover.png`
      ],
      creator: "@SVR_JS"
    }
  };
}
const UnsubscribeLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default UnsubscribeLayout;
