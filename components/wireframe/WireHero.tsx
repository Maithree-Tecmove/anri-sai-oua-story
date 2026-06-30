import { hero } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { BodyCopy, Eyebrow, ImageBox, Shell, WireButton, WireTag } from "./primitives";

/* PASS 1 — Hero. Full-viewport. lg: text left / product image right.
   Mobile: stacks text-first → product image. Botanical accents = labeled boxes. */
export function WireHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-60px)] items-center overflow-x-clip border-b border-wire-box bg-wire-bg py-12 sm:py-16"
    >
      {/* Botanical accent placeholders (decorative) — kept in the right-edge
          gutter so they never collide with the text column. */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-2 top-28 hidden h-28 w-14 rotate-12 items-center justify-center rounded-sm border border-dashed border-wire-line text-[9px] text-wire-muted xl:flex"
      >
        leaf
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 bottom-12 hidden h-24 w-14 -rotate-12 items-center justify-center rounded-sm border border-dashed border-wire-line text-[9px] text-wire-muted xl:flex"
      >
        leaf
      </div>

      <Shell>
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <WireTag>Section 2 · Hero</WireTag>
          <WireTag>full viewport</WireTag>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text column (first on mobile) */}
          <div className="order-1 max-w-xl">
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-fluid-display font-semibold leading-[0.98] tracking-tight text-wire-ink">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-thai mt-3 text-fluid-xl font-medium text-wire-text">
                {hero.thaiSubhead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <BodyCopy thai className="mt-6">
                {hero.paragraph}
              </BodyCopy>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <WireButton primary>{hero.cta} →</WireButton>
              </div>
            </Reveal>
          </div>

          {/* Product image (second on mobile) */}
          <div className="order-2">
            <Reveal delay={0.1}>
              <div className="relative">
                <ImageBox image={hero.product} ratio="aspect-[4/3] sm:aspect-square lg:aspect-[4/3]" />
                {/* packaging label callout */}
                <div className="absolute right-3 top-3 rounded-sm border border-wire-line bg-wire-bg/90 px-3 py-1.5 text-right">
                  <span className="block font-display text-sm font-semibold text-wire-ink">
                    {hero.productBoxLabel}
                  </span>
                  <span className="block text-[8px] uppercase tracking-widest text-wire-muted">
                    {hero.productBoxSub}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}
