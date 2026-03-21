import Hero from "@/components/Hero";
import EditorialPosts from "@/components/EditorialPosts";
import LatestGrid from "@/components/LatestGrid";
import { sanityClient } from "@/lib/sanity.client";
import { featuredPostsQuery, latestPostsQuery, homePostsQuery } from "@/lib/sanity.queries";

export const dynamic = "force-dynamic";


export default async function Home() {
  const [featuredPosts, latestPosts] = await Promise.all([
  sanityClient.fetch(featuredPostsQuery),
  sanityClient.fetch(latestPostsQuery),
]);

const latestSafe =
  latestPosts.length > 0 ? latestPosts : await sanityClient.fetch(homePostsQuery);

  return (
    <main>
      <Hero />
      <EditorialPosts posts={featuredPosts} />
      <LatestGrid posts={latestSafe.slice(0, 3)} />
    </main>
  );
}