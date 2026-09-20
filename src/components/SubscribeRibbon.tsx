"use client";
import { useEffect, useState } from "react";

export default function SubscribeRibbon() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("ribbon-dismissed") === "1") setVisible(false);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("ribbon-dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-50 bg-accent text-offwhite">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 sm:py-4">
        {/* Text — stacks on mobile, inline on larger screens */}
        <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-3">
          <span className="font-script text-accent-light text-xl sm:text-3xl leading-none">
            One honest essay a week.
          </span>
          <span className="font-heading text-sm sm:text-xl text-offwhite/90">
            No fluff. Just the real thing.
          </span>
        </div>

        {/* Subscribe */}
        <a
          href="https://substack.com/@unboundbyv"
          className="shrink-0 rounded-sm bg-offwhite px-4 py-2 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-accent hover:opacity-90 transition"
        >
          Subscribe <span aria-hidden>→</span>
        </a>

        {/* Close */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 p-1 text-offwhite/50 hover:text-offwhite transition"
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>
      </div>
    </div>
  );
}
