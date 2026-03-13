"use client";

import { useSearchParams } from "next/navigation";
import BlogGrid from "@/components/BlogGrid";
import type { SanityPost } from "@/types/post";

const normalize = (s: string) => s.trim().toLowerCase();

export default function BlogIndex({ posts }: { posts: SanityPost[] }) {
  const searchParams = useSearchParams();
  const selectedRaw = searchParams.get("category") ?? "";
  const selected = selectedRaw ? normalize(selectedRaw) : "";

  const filteredPosts = selected
  ? posts.filter(
      (p) => p.category && normalize(p.category) === selected
    )
  : posts;

  return (
    <>
      <div className="mt-14">
        <BlogGrid posts={filteredPosts} />
      </div>
    </>
  );
}