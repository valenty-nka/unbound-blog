import Container from "@/components/Container";
import { sanityClient } from "@/lib/sanity.client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { postBySlugWithRelatedQuery } from "@/lib/sanity.queries";
import type { SanityPost, RelatedPost } from "@/types/post";
import Link from "next/link";


function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: unknown }) => {
      const img = value as { asset?: unknown; alt?: string; caption?: string };
      if (!img?.asset) return null;


      return (
        <figure className="my-10">
          ...
          <Image
            src={urlFor(img).width(1200).quality(80).auto("format").url()}
            alt={img.alt ?? ""}
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl"
          />
          {img.caption ? (
            <figcaption className="mt-3 text-sm text-secondary">
              {img.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post: SanityPost = await sanityClient.fetch(
    postBySlugWithRelatedQuery,
    { slug }
  );

  if (!post) return notFound();

  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "url": `https://unboundbyv.com/blog/${post.slug}`,
      mainEntityOfPage: `https://unboundbyv.com/blog/${post.slug}`,
      headline: post.title,
      description: post.excerpt,
      image: post.mainImage
        ? urlFor(post.mainImage).width(1200).height(630).url()
        : undefined,
      datePublished: post.publishedAt,
      dateModified: post._updatedAt ?? post.publishedAt,
      author: {
        "@type": "Person",
        name: "Valentyna",
      },
      publisher: {
        "@type": "Organization",
        name: "Unbound by V",
        url: "https://unboundbyv.com",
        logo: {
        "@type": "ImageObject",
        url: "https://unboundbyv.com/icon-512.png",
        }
      },
    }),
  }}
/>
      <section className="pt-6 pb-24 ">
        <Container>
          <article className="mx-auto mt-6 max-w-3xl">
            {/* meta */}
            <div>
              <h1 className="mt-5">{post.title}</h1>
              {post.excerpt ? (
                <p className="mt-5 text-secondary text-[17px] leading-8">
                  {post.excerpt}
                </p>
              ) : null}
            </div>

            {/* optional hero image */}
            {post.mainImage ? (
              <div className="mt-12 overflow-hidden rounded-2xl border border-charcoal/10 bg-white/35">
                <div className="relative aspect-video w-full">
                  <Image
                    src={urlFor(post.mainImage).width(1400).quality(80).auto("format").url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-opacity duration-700"
                    priority
                  />
                </div>
              </div>
            ) : null}

            {/* body */}
           <div className="mt-12 article prose max-w-none prose-neutral prose-a:text-charcoal prose-a:underline prose-a:underline-offset-4 prose-a:decoration-accent/40 hover:prose-a:decoration-accent prose-blockquote:border-l-4 prose-blockquote:border-accent/30 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-accent/90">
              <PortableText value={post.body } components={components} />   
            </div>
            {post.related?.length ? (
              <section className="mt-16">
                <div className="h-px w-full bg-charcoal/10" />

                <h3 className="mt-10 text-[16px] font-medium tracking-[-0.01em]">
                  More in {post.category ?? "this category"}
                </h3>
                <div className="mt-6 space-y-4">
                          {post.related.map((p: RelatedPost) => (
                            <Link
                              key={p.slug}
                              href={`/blog/${p.slug}`}
                              className="block group"
                            >
                              <div className="flex items-baseline justify-between gap-6">
                                <span className="text-[15px] text-charcoal/90 group-hover:text-charcoal transition">
                                  {p.title}
                                </span>
                                {p.publishedAt ? (
                                  <span className="text-xs text-secondary shrink-0">
                                    {formatDate(p.publishedAt)}
                                  </span>
                                ) : null}
                              </div>
                            </Link>
                          ))}
                  </div>
               </section>
            ) : null}
          </article>    

        </Container>
      </section>
    </main>
  );
}