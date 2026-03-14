import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="relative h-[78vh] md:h-[82vh] min-h-125 w-full mt-2">
        <Image
          src="/hero_img.jpg"
          alt="Editorial interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        {/* Subtle darkening for readability */}
        <div className="absolute inset-0 bg-charcoal/20" />
      </div>

      {/* Center overlay card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl rounded-xl border border-charcoal/10 bg-offwhite/90 p-8 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <p className="text-xs tracking-[0.22em] uppercase text-secondary">
             Start here
            </p>

            <h2 className="mt-4">
              Turning ideas into reality.
            </h2>

            <p className="mt-4 text-secondary">
              On thinking well and living deliberately.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Button href="/blog">
                Read the blog
            </Button>

            </div>
          </div>
        </div>
    </section>
  );
}