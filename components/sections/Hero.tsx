import { hero } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { SmartImage } from "@/components/visual/SmartImage";
import { PlaceholderScene } from "@/components/visual/PlaceholderScene";

/* Autumn maple-leaf cluster accent (filled, oxblood) — as in the reference corners. */
function LeafCluster({ className = "" }: { className?: string }) {
  const leaf = (x: number, y: number, r: number, s: number, c: string) => (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} fill={c}>
      <path d="M0 -22 C 7 -14 14 -10 12 2 C 18 -2 22 4 18 10 C 22 12 20 20 12 18 C 14 26 6 26 0 20 C -6 26 -14 26 -12 18 C -20 20 -22 12 -18 10 C -22 4 -18 -2 -12 2 C -14 -10 -7 -14 0 -22 Z" />
      <path d="M0 -18 L0 18" stroke="#4A1414" strokeWidth="1" opacity="0.5" />
    </g>
  );
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden>
      {leaf(60, 60, -20, 1.5, "#7A2424")}
      {leaf(100, 50, 30, 1.2, "#8A2B2B")}
      {leaf(95, 100, 70, 1.35, "#6E1E1E")}
      {leaf(55, 105, 130, 1, "#9A3A2A")}
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="snap-section relative flex min-h-[100svh] items-center overflow-hidden bg-parchment pb-20 pt-28 sm:pt-32"
    >
      {/* Misty mountain backdrop */}
      <Parallax distance={40} className="absolute inset-0">
        <div className="relative h-[110%] w-full">
          <PlaceholderScene scene="mountains" showCaption={false} />
        </div>
      </Parallax>
      {/* Light parchment veil — keeps maroon text readable on the left,
          clears toward the right behind the product. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-parchment/90 via-parchment/55 to-parchment/20"
      />
      <div aria-hidden className="grain absolute inset-0 opacity-[0.04]" />
      {/* fade into the dark canvas below for a continuous scroll */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#1A0F0B]"
      />

      {/* red maple-leaf accents — sit below the nav line, clear of the logo + text */}
      <LeafCluster className="pointer-events-none absolute -left-7 top-[4.5rem] h-20 w-20 opacity-90 sm:h-28 sm:w-28" />
      <LeafCluster className="pointer-events-none absolute -right-6 top-1/4 hidden h-36 w-36 rotate-90 opacity-80 md:block lg:h-44 lg:w-44" />

      <div className="relative mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Text */}
          <div className="order-1 max-w-xl">
            <Reveal>
              <span className="eyebrow block text-xs font-semibold text-gold-deep">
                {hero.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-fluid-display font-medium leading-[0.95] tracking-[-0.01em] text-oxblood-900">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-thai mt-3 text-fluid-xl font-medium text-oxblood">
                {hero.thaiSubhead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-thai mt-6 max-w-prose text-fluid-base leading-relaxed text-ink/80">
                {hero.paragraph}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href="#preorder"
                className="group mt-9 inline-flex min-h-[52px] items-center gap-3 rounded-sm bg-oxblood px-8 text-sm font-semibold uppercase tracking-[0.18em] text-parchment shadow-lg shadow-oxblood/25 transition-colors duration-200 hover:bg-oxblood-600"
              >
                {hero.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          {/* Product */}
          {/* <div className="order-2">
            <Reveal delay={0.1} y={32}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-2xl shadow-oxblood-900/30 sm:aspect-square lg:aspect-[4/3]">
                <SmartImage
                  image={hero.product}
                  scene="product"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority
                  showCaption={false}
                /> */}
                {/* packaging label callout */}
                {/* <div className="absolute right-4 top-4 rounded-sm border border-oxblood/20 bg-parchment/85 px-3 py-2 text-right backdrop-blur-sm">
                  <span className="block font-display text-base font-semibold tracking-wide text-oxblood">
                    {hero.productBoxLabel}
                  </span>
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-ink/55">
                    {hero.productBoxSub}
                  </span>
                </div>
              </div>
            </Reveal>
          </div> */}
        </div>
      </div>
    </section>
  );
}
