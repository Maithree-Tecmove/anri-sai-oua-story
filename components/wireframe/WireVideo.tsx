import { video } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { Shell, WireTag } from "./primitives";

/* PASS 1 — Video section (immediately after hero).
   Fluid 16:9 (aspect-video) at all widths. Poster placeholder + centered
   play button + overlaid caption. Real <video>/embed swaps in via content.ts. */
export function WireVideo() {
  return (
    <section id="video" className="border-b border-wire-box bg-wire-panel py-12 sm:py-16">
      <Shell>
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <WireTag>Section 3 · Cinematic Film</WireTag>
          <WireTag>16:9 responsive</WireTag>
        </div>

        <Reveal>
          <div
            className="relative aspect-video w-full overflow-hidden rounded-sm border border-wire-line bg-wire-boxalt"
            role="img"
            aria-label={video.poster.alt}
          >
            {/* hatch */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 13px, rgba(113,113,122,0.2) 13px, rgba(113,113,122,0.2) 14px)",
              }}
            />
            {/* poster label */}
            <div className="absolute left-4 top-4 max-w-[40ch]">
              <span className="mb-1 inline-block rounded border border-wire-line bg-wire-bg/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-wire-muted">
                Poster / Video
              </span>
              <p className="text-xs leading-snug text-wire-text">{video.poster.placeholder}</p>
            </div>

            {/* centered play button */}
            <button
              type="button"
              aria-label="Play film"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-wire-ink bg-wire-bg/80 text-wire-ink transition-transform duration-200 hover:scale-105 sm:h-20 sm:w-20"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </button>

            {/* overlaid caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/15 to-transparent p-4 sm:p-6">
              <p className="font-thai text-fluid-lg font-medium text-wire-ink">
                {video.caption}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-wire-muted">
                {video.captionEn}
              </p>
            </div>
          </div>
        </Reveal>

        <p className="mt-3 text-[11px] text-wire-muted">
          ► Real source goes in <code className="font-mono">lib/content.ts → video.src</code>{" "}
          (file path or YouTube/Vimeo embed URL).
        </p>
      </Shell>
    </section>
  );
}
