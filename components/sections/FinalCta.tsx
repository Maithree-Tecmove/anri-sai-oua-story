import { finalCta } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { SmartImage } from "@/components/visual/SmartImage";
import { PreorderCta } from "@/components/visual/PreorderCta";

/* Emotional close — full-bleed atmospheric dusk, big Thai statement, preorder. */
export function FinalCta() {
  return (
    <section id="preorder" className="snap-section relative isolate flex min-h-[calc(100svh-var(--nav-h))] items-center justify-center overflow-hidden py-16 sm:py-20">
      {/* full-bleed background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <SmartImage
          image={finalCta.background}
          scene="dusk"
          sizes="100vw"
          showCaption={false}
        />
        <div className="absolute inset-0 bg-oxblood-900/55" />
      </div>
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-thai mx-auto max-w-xl text-fluid-lg leading-relaxed text-parchment/85">
            {finalCta.leadIn}
          </p>
        </Reveal>
        <Reveal delay={0.08} y={32}>
          <p className="font-thai relative left-1/2 mt-5 w-max max-w-none -translate-x-1/2 whitespace-nowrap text-[clamp(1.5rem,7vw,6.5rem)] font-semibold leading-[1.05] text-parchment drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            “{finalCta.bigStatement}”
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="eyebrow mt-8 text-xs font-semibold text-gold-soft">
            {finalCta.label}
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-7 flex justify-center">
            <PreorderCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
