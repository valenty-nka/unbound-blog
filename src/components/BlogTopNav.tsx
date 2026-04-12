"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function BlogTopNav({ categories }: { categories: string[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = searchParams.get("category") ?? "";

  const onPostPage = pathname.startsWith("/blog/") && pathname !== "/blog";

  return (
    <div className="pt-16 md:pt-20">
      <div className="grid grid-cols-4 md:grid-cols-3 items-center">
        {/* Back only on post pages */}
        <div className="justify-self-start">
          {onPostPage ? (
            <Link
              href={selected ? `/blog?category=${encodeURIComponent(selected)}` : "/blog"}
              className="inline-flex items-center gap-2 text-[12px] text-secondary hover:text-charcoal transition"
            >
              <span aria-hidden>←</span> Back
            </Link>
          ) : null}
        </div>

        {/* Categories centered */}
        <div className="justify-self-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] tracking-widest text-secondary">
            <Link
              href="/blog"
              className={`transition ${!selected ? "text-charcoal" : "hover:text-charcoal"}`}
            >
              All Posts
            </Link>

            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`transition ${
                  selected === cat ? "text-charcoal" : "hover:text-charcoal"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="justify-self-end" />
      </div>
    </div>
  );
}