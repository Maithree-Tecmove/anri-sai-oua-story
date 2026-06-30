"use client";

import { QRCodeSVG } from "qrcode.react";
import { finalCta } from "@/lib/content";

/* Preorder CTA that adapts to the viewport:
   – Desktop (lg+): a brand-styled QR card the visitor scans with their phone.
   – Mobile (<lg): the original tappable PREORDER NOW button.
   Toggle is pure CSS (Tailwind) so both render server-side with no layout flash. */
export function PreorderCta() {
  return (
    <>
      {/* Mobile / tablet — tappable button */}
      <a
        href={finalCta.preorderUrl}
        className="group inline-flex min-h-[56px] items-center gap-3 rounded-sm bg-parchment px-10 text-sm font-semibold uppercase tracking-[0.2em] text-oxblood shadow-2xl shadow-black/30 transition-colors duration-200 hover:bg-gold-soft lg:hidden"
      >
        {finalCta.button}
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </a>

      {/* Desktop — QR code card */}
      <div className="hidden flex-col items-center gap-4 lg:flex">
        <div className="rounded-lg bg-parchment p-5 shadow-2xl shadow-black/30">
          <QRCodeSVG
            value={finalCta.preorderUrl}
            size={168}
            level="M"
            marginSize={0}
            bgColor="#F3EBDD"
            fgColor="#6E1E1E"
            aria-label={`QR code — ${finalCta.button}`}
          />
        </div>
        <p className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-parchment">
          {finalCta.button}
        </p>
      </div>
    </>
  );
}
