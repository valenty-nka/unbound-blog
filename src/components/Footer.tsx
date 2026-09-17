import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28 bg-accent text-offwhite relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)] pointer-events-none" />
      <Container className="py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <p
              className="text-5xl leading-tight tracking-wide"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Unbound by V
            </p>
            <p className="mt-2 text-xs tracking-[0.3em] uppercase text-offwhite/60">
              Thinking • Building • Becoming
            </p>

            <p className="mt-4 max-w-md text-offwhite/80">
              One honest essay about money, discipline, and the unglamorous work
              of becoming. No fluff. Just the real thing.
            </p>

            <div className="mt-8 flex gap-5 text-offwhite/80">
              {/* Placeholder socials (swap to real links later) */}
              <a
                href="https://ca.pinterest.com/unbound_by_v/"
                className="hover:text-offwhite transition underline-offset-6 underline underline-white"
              >
                Pinterest
              </a>
              <a
                href="https://www.linkedin.com/in/valentyna-nechyporenko/"
                className="hover:text-offwhite transition underline-offset-6 underline underline-white"
              >
                LinkedIn
              </a>
              <a
                href="https://substack.com/@unboundbyv"
                className="hover:text-offwhite transition underline-offset-6 underline underline-white"
              >
                Substack
              </a>
            </div>
          </div>

          {/* Right (Newsletter placeholder) */}
          <div className="md:justify-self-end w-full max-w-md">
            <p className="text-xs tracking-[0.3em] uppercase text-offwhite/60">
              Join the circle
            </p>

            <h3 className="mt-3 text-[22px] leading-[1.35] tracking-[-0.01em]">
              Get new posts in your inbox.
            </h3>

            <p className="mt-4 text-offwhite/80">
              <a
                target="_blanck"
                href="https://substack.com/@unboundbyv"
                className=" px-6 py-3 capitalize text-lg border text-white hover:text-accent-very-light border-white hover:border-accent-light transition-colors ease-in rounded-3xl"
              >
                Subscribe on substack
              </a>
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col gap-6 border-t border-offwhite/15 pt-8 text-sm text-offwhite/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Unbound by V. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
