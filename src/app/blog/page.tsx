import { sanityClient } from "@/lib/sanity.client";
import { allPostsQuery } from "@/lib/sanity.queries";
import type { SanityPost } from "@/types/post";
import BlogIndex from "@/components/BlogIndex";


export default async function BlogPage() {
  const posts: SanityPost[] = await sanityClient.fetch(allPostsQuery);
  return <BlogIndex posts={posts} />;
}