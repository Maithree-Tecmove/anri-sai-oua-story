"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav } from "@/lib/content";

/* Sticky navigation: transparent over the hero, solid parchment on scroll.
   Desktop inline links; mobile hamburger → slide-in overlay. */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-nav transition-colors duration-500 ${
          solid
            ? "border-b border-oxblood/10 bg-parchment/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12"
      >
        {/* Brand logo */}
        <a
          href="#hero"
          aria-label={`${nav.brand} — home`}
          className="flex min-h-[44px] shrink-0 items-center"
        >
          <Image
            src="/images/anri_logo_trimmed.png"
            alt="Anri アンリ"
            width={824}
            height={477}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        {/* Desktop: links + language toggle, grouped at the right */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          <ul className="flex items-center gap-6 xl:gap-8">
            {nav.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="link-underline font-display text-[15px] font-medium text-oxblood/90 transition-colors duration-200 hover:text-oxblood"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-oxblood"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-mobile-menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile slide-in overlay — sibling of <header> (NOT a child) so the
          header's backdrop-filter doesn't clamp this fixed overlay's size. */}
      <div
        className={`fixed inset-0 z-[60] overflow-hidden lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          id="site-mobile-menu"
          className={`absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-parchment shadow-2xl transition-transform duration-300 ease-reveal ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-oxblood/15 px-5 py-4">
            <Image
              src="/images/anri_logo_trimmed.png"
              alt="Anri アンリ"
              width={824}
              height={477}
              priority
              className="h-8 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-oxblood hover:bg-oxblood/5"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
          <ul className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
            {nav.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center rounded-sm px-3 font-display text-lg font-medium text-oxblood/90 hover:bg-oxblood/5 hover:text-oxblood"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
