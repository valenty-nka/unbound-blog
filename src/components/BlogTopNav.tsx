"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function BlogTopNav({ categories }: { categories: string[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = searchParams.get("category") ?? "";

  const onPostPage = pathname.startsWith("/blog/") && pathname !== "/blog";

  return (
   <div className="pt-16 md:pt-20 text-center">
  
  {/* Categories */}
  <div className="max-w-md mx-auto flex flex-wrap justify-center gap-x-5 gap-y-3 text-[13px] tracking-widest text-secondary">
    
    <Link
      href="/blog"
      className={`whitespace-nowrap transition ${
        !selected ? "text-charcoal" : "hover:text-charcoal"
      }`}
    >
      All Posts
    </Link>

    {categories.map((cat) => (
      <Link
        key={cat}
        href={`/blog?category=${encodeURIComponent(cat)}`}
        className={`whitespace-nowrap transition ${
          selected === cat ? "text-charcoal" : "hover:text-charcoal"
        }`}
      >
        {cat}
      </Link>
    ))}
  </div>

  {/* Back button BELOW */}
  {onPostPage && (
    <div className="mt-6 flex justify-start">
      <Link
        href={selected ? `/blog?category=${encodeURIComponent(selected)}` : "/blog"}
        className="inline-flex items-start gap-2 text-[12px] text-secondary hover:text-charcoal transition"
      >
        <span aria-hidden>←</span> Back
      </Link>
    </div>
  )}

</div>
  );
}