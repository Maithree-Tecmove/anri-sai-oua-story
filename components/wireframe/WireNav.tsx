"use client";

import { useState } from "react";
import { nav } from "@/lib/content";

/* PASS 1 — Sticky navigation wireframe.
   Desktop: inline links. Mobile (<lg): hamburger → slide-in overlay menu.
   Language toggle + cart stay reachable at both sizes. */
export function WireNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-nav border-b border-wire-box bg-wire-bg/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12"
      >
        {/* Wordmark */}
        <a href="#hero" className="flex min-h-[44px] shrink-0 flex-col justify-center leading-none">
          <span className="font-display text-2xl font-semibold tracking-tight text-wire-ink">
            {nav.brand}
          </span>
          <span className="text-[9px] tracking-[0.3em] text-wire-muted">
            {nav.brandMark}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {nav.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[11px] font-semibold uppercase tracking-widest text-wire-text transition-colors duration-200 hover:text-wire-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 rounded-sm px-2 text-xs font-semibold text-wire-text hover:bg-wire-panel"
            aria-label="Toggle language"
          >
            TH
            <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-wire-text hover:bg-wire-panel"
            aria-label="Cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none">
              <path
                d="M6 7h12l-1 11H7L6 7zm3 0a3 3 0 016 0"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Hamburger (mobile / tablet) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-wire-ink hover:bg-wire-panel lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile slide-in overlay */}
      <div
        className={`fixed inset-0 z-overlay overflow-hidden lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* panel */}
        <div
          id="mobile-menu"
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-wire-bg shadow-xl transition-transform duration-300 ease-reveal ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-wire-box px-5 py-4">
            <span className="font-display text-xl font-semibold text-wire-ink">
              {nav.brand}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm text-wire-ink hover:bg-wire-panel"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-3 py-4">
            {nav.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center rounded-sm px-3 text-sm font-semibold uppercase tracking-widest text-wire-text hover:bg-wire-panel"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
