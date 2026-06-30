import { finalCta } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { Shell, WireButton, WireTag } from "./primitives";

/* PASS 1 — Final CTA. Full-bleed atmospheric background (placeholder),
   centered emotional close → big Thai statement → label → preorder button. */
export function WireFinalCta() {
  return (
    <section
      id="preorder"
      className="relative overflow-hidden border-b border-wire-box bg-wire-boxalt py-20 sm:py-28"
      role="img"
      aria-label={finalCta.background.alt}
    >
      {/* full-bleed bg placeholder hatch */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(113,113,122,0.18) 15px, rgba(113,113,122,0.18) 16px)",
        }}
      />
      <div className="absolute left-4 top-4">
        <span className="rounded border border-wire-line bg-wire-bg/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-wire-muted">
          Full-bleed BG
        </span>
      </div>

      <Shell className="relative text-center">
        <div className="mb-6 flex justify-center">
          <WireTag>Section 8 · Final CTA</WireTag>
        </div>

        <Reveal>
          <p className="font-thai mx-auto max-w-xl text-fluid-lg text-wire-text">
            {finalCta.leadIn}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-thai mt-4 text-fluid-display font-semibold leading-tight text-wire-ink">
            “{finalCta.bigStatement}”
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-wire-muted">
            {finalCta.label}
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-8 flex justify-center">
            <WireButton primary>{finalCta.button} →</WireButton>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
