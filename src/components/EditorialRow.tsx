import Image from "next/image";
import Button from "./Button";
import type { SanityPost } from "@/types/post";
import { urlFor } from "@/lib/sanity.image";

function formatDate(input?: string) {
  if (!input) return "";
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

function Meta({ category, date }: { category?: string; date?: string }) {
  if (!category && !date) return null;

  return (
    <p className="text-xs tracking-[0.22em] uppercase text-secondary">
      {category ?? "Unbound"}
      {date ? (
        <>
          <span className="mx-2 text-secondary/50">|</span>
          <span className="text-accent">{date}</span>
        </>
      ) : null}
    </p>
  );
}

export default function EditorialRow({
  post,
  reverse = false,
}: {
  post: SanityPost;
  reverse?: boolean;
}) 
{
  const dateLabel = formatDate(post.publishedAt);

  const ImageBlock = (
  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
    <Image
      src={urlFor(post.mainImage)
        .width(1000)
        .quality(75)
        .auto("format")
        .url()}
      alt={post.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      className="object-cover"
    />
  </div>
);

  const TextBlock = (
    <div>
      <Meta category={post.category} date={dateLabel} />
      <h2 className="mt-4">{post.title}</h2>
      {post.excerpt ? (
        <p className="mt-4 text-secondary max-w-prose">{post.excerpt}</p>
      ) : null}

      <div className="mt-8">
        <Button href={`/blog/${post.slug}`}>Read More</Button>
      </div>
    </div>
  );

  return (
  <div
    className={`
      flex flex-col
      md:flex-row
      md:items-center
      gap-y-12 md:gap-x-20
      ${reverse ? "md:flex-row-reverse" : ""}
    `}
  >
    <div className="md:w-3/5">
      {ImageBlock}
    </div>

    <div className="md:w-2/5">
      {TextBlock}
    </div>
  </div>
);
}