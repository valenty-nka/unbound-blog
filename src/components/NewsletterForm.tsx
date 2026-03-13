"use client";

import Button from "./Button";

export default function NewsletterForm() {
  return (
    <form
      className="mt-6 flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email"
        className="w-full rounded-full border border-offwhite/30 bg-transparent px-5 py-3 text-offwhite placeholder:text-offwhite/60 outline-none focus:border-offwhite"
      />

      <button
        type="submit"
        className="rounded-full cursor-pointer border border-offwhite/60 px-6 py-3 text-xs uppercase tracking-[0.18em] text-offwhite transition-colors hover:bg-offwhite hover:text-accent"
      >
        Notify me
      </button>
    </form>
  );
}