import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import type { SanityPost } from "@/types/post";
import { urlFor } from "@/lib/sanity.image";
import Link from "next/link";

export default function LatestGrid({ posts }: { posts: SanityPost[] }) {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="flex items-end justify-between">
          <h2>Latest</h2>
          <Button href="/blog" className="hidden md:inline-flex">
            View all
          </Button>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article
            key={post.slug}
            className="group overflow-hidden rounded-xl border border-charcoal/10 transition bg-white/40 hover:bg-white/55"
            >
                <Link href={`/blog/${post.slug}`} className="block">
                    
                    {/* IMAGE FULL WIDTH */}
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-xl">
                      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-95">
                        <Image
                          src={urlFor(post.mainImage)
                            .width(800)
                            .quality(75)
                            .auto("format")
                            .url()}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition-all duration-500 ease-out scale-[1.025] group-hover:scale-[1] group-hover:brightness-[0.98]"
                        />
                      </div>
                    </div>

                    {/* TEXT AREA */}
                    <div className="px-6 pb-7 pt-8 md:px-7 md:pt-9 md:pb-8">
                    <h3 className="text-[22px] leading-[1.35] tracking-[-0.01em]">
                        {post.title}
                    </h3>
                    </div>

                </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Button href="/blog" className="w-full inline-block text-center">
            View all
          </Button>
        </div>
      </Container>
    </section>
  );
}