import { sanityClient } from "@/lib/sanity.client";
import { allPostsQuery } from "@/lib/sanity.queries";

export default async function sitemap() {
  const posts = await sanityClient.fetch(allPostsQuery);

  const postUrls = posts.map((post: any) => ({
    url: `https://unboundbyv.com/blog/${post.slug}`,
    lastModified: post._updatedAt || post.publishedAt,
  }));

  return [
    {
      url: "https://unboundbyv.com",
      lastModified: new Date(),
    },
    {
      url: "https://unboundbyv.com/blog",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}