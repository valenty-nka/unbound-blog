import Image from "next/image";
import Link from "next/link";
import type { SanityPost } from "@/types/post";
import { urlFor } from "@/lib/sanity.image";


function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogGrid({ posts }: { posts: SanityPost[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 ">
      {posts.map((post) => (
        <article
            key={post.slug}
            className="group overflow-hidden rounded-xl border border-charcoal/10 bg-white/35 hover:bg-white/50 transition"
            >
            <Link href={`/blog/${post.slug}`} className="block">
                {/* Image */}
                <div className="relative w-full aspect-4/5 bg-white/20 overflow-hidden">
                {post.mainImage ? (
                    <Image
                    src={urlFor(post.mainImage).width(1400).height(1800).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out scale-[1.025] group-hover:scale-[1.0]"
                    />
                ) : null}
                </div>

                {/* Text */}
                <div className="px-7 pt-7 pb-8 md:px-9 md:pt-8 md:pb-9">
                {/* Caption meta */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] tracking-[0.22em] uppercase text-secondary">
                    {post.category ? <span>{post.category}</span> : null}
                    {post.publishedAt ? (
                    <>
                        <span className="opacity-40">•</span>
                        <span>{formatDate(post.publishedAt)}</span>
                    </>
                    ) : null}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[20px] md:text-[22px] leading-snug tracking-[-0.01em]">
                    {post.title}
                </h3>

                {/* Excerpt */}
                {post.excerpt ? (
                    <p className="mt-4 text-[15px] leading-relaxed text-charcoal/80 line-clamp-4">
                    {post.excerpt}
                    </p>
                ) : null}

                {/* Divider */}
                <div className="mt-7 h-px w-full bg-charcoal/10" />

                {/* Footer cue (subtle “continue reading”) */}
                <div className="mt-4 flex items-center justify-between text-xs text-secondary">
                    <span className="tracking-wide">Read</span>
                    <span className="opacity-60 group-hover:opacity-100 transition">→</span>
                </div>
                </div>
            </Link>
        </article>
      ))}
    </div>
  );
}