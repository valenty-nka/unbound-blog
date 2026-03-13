import Container from "@/components/Container";
import { sanityClient } from "@/lib/sanity.client";
import { allCategoriesQuery } from "@/lib/sanity.queries";
import BlogTopNav from "@/components/BlogTopNav";
import { Suspense } from "react";

export const revalidate = 3600; // cache for 1 hour

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryDocs: { title: string }[] = await sanityClient.fetch(allCategoriesQuery);
  const categories = categoryDocs
    .map((c) => c.title)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  return (
    <main>
      <section className="pb-24 md:pb-32">
        <Container>
          <Suspense fallback={null}>
            <BlogTopNav categories={categories} />
          </Suspense>  
          {children}
        </Container>
      </section>
    </main>
  );
}