"use client";

import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="border-b border-accent-very-light bg-offwhite shadow-[0_4px_20px_rgba(0,0,0,0.025)]">
      <Container className="py-10 md:py-14">
        {/* Title */}
        <div className="text-center">
          <Link href="/" className="block" onClick={closeMenu}>
            <h1 className="text-5xl md:text-6xl leading-tight font-heading font-medium tracking-[-0.01em]">
              Unbound{" "}
              <span className="font-script text-accent-light text-4xl align-middle">
                by V
              </span>
            </h1>
          </Link>

          <p className="mt-4 text-sm tracking-wide text-secondary">
            Turning ideas into reality.
          </p>
        </div>

        {/* Mobile Toggle */}
        <div className="mt-8 md:hidden text-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-charcoal/10 bg-white/35 px-5 py-2 text-xs tracking-[0.18em] uppercase text-secondary hover:text-accent hover:bg-white/55 transition"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="mt-8 hidden md:block">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative text-sm tracking-[0.22em] uppercase transition",
                      active
                        ? "text-accent"
                        : "text-secondary hover:text-accent",
                      // underline for active
                      active
                        ? "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-accent/70"
                        : "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-transparent hover:after:bg-accent/40",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Nav (smooth) */}
        <div
          className={[
            "md:hidden mt-6 grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            open ? "pointer-events-auto" : "pointer-events-none",
          ].join(" ")}
        >
          <div className="overflow-hidden">
            <nav className="mx-auto max-w-sm rounded-2xl border border-charcoal/10 bg-white/35 p-3">
              <ul className="flex flex-col">
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={[
                          "block rounded-xl px-4 py-3 text-sm tracking-[0.18em] uppercase transition",
                          active
                            ? "bg-white/60 text-accent"
                            : "text-secondary hover:bg-white/50 hover:text-accent",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}