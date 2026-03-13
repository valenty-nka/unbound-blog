import Container from "./Container";
import EditorialRow from "./EditorialRow";
import type { SanityPost } from "@/types/post";

export default function EditorialPosts({ posts }: { posts: SanityPost[] }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="space-y-20 md:space-y-28">
          {posts.map((post, i) => (
            <EditorialRow key={post.slug} post={post} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}