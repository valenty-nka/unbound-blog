"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-offwhite/85 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-[15px] tracking-[0.12em]"
          >
            Unbound
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 text-[13px]">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className={`transition ${
                    active ? "text-charcoal" : "text-secondary hover:text-charcoal"
                  }`}
                >
                  {l.label}
                  <span
                    className={`block h-px mt-1 transition ${
                      active ? "bg-charcoal/60" : "bg-transparent"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden rounded-full border border-charcoal/10 bg-white/35 px-4 py-2 text-xs tracking-[0.18em] uppercase text-secondary hover:text-charcoal transition"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {open ? (
          <nav className="md:hidden pb-6">
            <div className="mt-2 rounded-2xl border border-charcoal/10 bg-white/35 p-4">
              <div className="flex flex-col">
                {links.map((l) => {
                  const active = isActive(pathname, l.href);
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={closeMenu}
                      className={`rounded-xl px-4 py-3 transition ${
                        active
                          ? "bg-white/55 text-charcoal"
                          : "text-secondary hover:bg-white/45 hover:text-charcoal"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}