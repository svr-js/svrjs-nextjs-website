import { client } from "./sanity";

export const getAllBlogPostSlugs = async () => {
  const query = `*[_type == 'blog'] { "slug": slug.current }`;
  const slugs: { slug: string }[] = await client.fetch(query);

  return slugs;
};
