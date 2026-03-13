import Container from "@/components/Container";
import Image from "next/image";

const topics = [
  {
    title: "Personal growth & discipline",
    desc: "Habits, mindset shifts, self-reflection, and the quiet work of becoming better.",
  },
  {
    title: "Building income & financial literacy",
    desc: "Learning how to create stability, independence, and long-term freedom.",
  },
  {
    title: "Entrepreneurship & projects",
    desc: "Ideas in motion — building, refining, experimenting.",
  },
  {
    title: "Lessons from books",
    desc: "Reflections, thoughts, and insights from what I’m reading.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="pt-16 md:pt-24 pb-24 md:pb-32">
        <Container>
          <article className="mx-auto max-w-3xl">

            <h1 className="mt-6">About</h1>

            <div className="mt-8 article">
              <p>I’ve always loved reading.</p>

              <p>
                Books shaped the way I think, question, and grow. Over time,
                I realized that consuming ideas wasn’t enough — I wanted to
                build something of my own.
              </p>

              <p>
                This space exists for that shift — from consuming to creating.
              </p>

              <p>
                If you’re here, you’re probably building too.
                A project. A business. A new skill. A different version of yourself.
              </p>

              <p>
                You know what it feels like to doubt, to overthink, to start again.
                To want something more intentional.
              </p>
            </div>

            {/* Coast Image */}
            <div className="mt-16 mb-16 overflow-hidden rounded-xl border border-charcoal/10 bg-white/35">
              <div className="relative aspect-video w-full">
                <Image
                  src="/coastline.jpeg"
                  alt="Coast of Newfoundland"
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="article">
              <p>
                This blog is a place for people who care about building something meaningful — 
                slowly, deliberately, imperfectly.
              </p>

              <p>
                Ideas deserve to be turned into something real.
              </p>
            </div>

            <h2 className="mt-16 text-[14px] tracking-[0.22em] uppercase text-secondary">
              What You Can Find in the Blog
            </h2>

            <div className="mt-8 space-y-10">
              {topics.map((t) => (
                <section key={t.title}>
                  <h3 className="text-[18px] md:text-[19px] leading-snug">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-secondary">
                    {t.desc}
                  </p>
                </section>
              ))}
            </div>

            <p className="mt-20 text-sm text-secondary">
              Writing from the coast of Newfoundland, Canada. 🌊
            </p>

          </article>
        </Container>
      </section>
    </main>
  );
}