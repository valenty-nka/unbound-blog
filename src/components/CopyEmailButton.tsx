"use client";

export default function CopyEmailButton({ email }: { email: string }) {
  return (
    <button
      type="button"
      className="rounded-full border cursor-pointer border-charcoal/10 bg-white/40 px-4 py-2 text-xs tracking-[0.18em] uppercase text-secondary hover:text-charcoal hover:bg-white/55 transition"
      onClick={() => navigator.clipboard.writeText(email)}
    >
      Copy
    </button>
  );
}