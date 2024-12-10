import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";
import { Card, CardContent } from "../ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { format } from "date-fns";

interface BlogPostcard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: string;
  _createdAt: string;
}

interface BlogCardInterface {
  page: number;
}

const BlogCards = async (props: BlogCardInterface) => {
  "use server";

  // Change in /blog/page/[id] route and in /api/revalidate route too!
  const cardsPerPage = 6;
  const currentPage = props.page;

  const query = `*[_type == 'blog'] | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage,
        _createdAt
    }[${(currentPage - 1) * cardsPerPage}...${currentPage * cardsPerPage}]`;

  const posts: BlogPostcard[] = await client.fetch(
    query,
    {},
    { cache: "no-store" }
  );

  const totalPostsQuery = `count(*[_type == 'blog'])`;
  const totalPosts: number = await client.fetch(
    totalPostsQuery,
    {},
    { cache: "no-store" }
  );

  const totalPages = Math.ceil(totalPosts / cardsPerPage);

  let begPage = currentPage - 2;
  let endPage = currentPage + 2;
  if (endPage > totalPages) {
    begPage -= endPage - totalPages;
    endPage = totalPages;
  }
  if (begPage < 1) {
    endPage += 1 - begPage;
    begPage = 1;
  }

  return (
    <>
      <section className="grid max-w-6xl gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => {
          const formattedDate = format(
            new Date(post._createdAt),
            "MMMM d, yyyy"
          );

          const truncatedDescription =
            post.smallDescription.length > 130
              ? post.smallDescription.substring(0, 130) + "..."
              : post.smallDescription;

          return (
            <Card
              className="group h-full w-full rounded-lg border overflow-hidden"
              key={idx}
            >
              <Link href={`/blog/${post.currentSlug}`} className="block">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={
                      post.titleImage
                        ? urlFor(post.titleImage).url()
                        : "/blog-missing.png"
                    }
                    alt={post.title}
                    width={500}
                    height={300}
                    priority
                    className="w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex-between mb-2 py-2">
                    <h2 className="text-xl font-semibold leading-tight">
                      {post.title}
                    </h2>
                    <div className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 duration-300">
                      <ExternalLink />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {truncatedDescription}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Published on: {formattedDate}
                  </p>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </section>
      <div className="flex-center mt-12">
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                {currentPage > 1 && (
                  <PaginationPrevious href={`/blog/page/${currentPage - 1}`} />
                )}
              </PaginationItem>
              {Array.from({ length: totalPages > 5 ? 5 : totalPages }).map(
                (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`/blog/page/${begPage + i}`}
                      isActive={currentPage === begPage + i}
                    >
                      {begPage + i}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                {currentPage < totalPages && (
                  <PaginationNext href={`/blog/page/${currentPage + 1}`} />
                )}
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </>
  );
};

export default BlogCards;
