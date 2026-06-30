import type { ImageRef } from "@/lib/content";
import type { SceneKind } from "@/components/visual/PlaceholderScene";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { SmartImage } from "@/components/visual/SmartImage";

export type StoryChapterProps = {
  id: string;
  scene: SceneKind;
  /** Big faint chapter numeral behind the heading, e.g. "01". */
  index?: string;
  eyebrow?: string;
  heading: string;
  thai: string;
  /** Thai rendered inline as a quoted name after the heading. */
  thaiInline?: boolean;
  body: string;
  image: ImageRef;
  /** Which side the text column sits on at lg (image fills the rest). */
  align?: "left" | "right";
};

/* PASS 2 (reference-matched) — full-bleed cinematic chapter.
   The scene image fills the entire section; a directional dark gradient keeps
   cream serif text legible on one side while the imagery breathes on the other.
   One continuous warm canvas, like the reference. */
export function StoryChapter({
  id,
  scene,
  index,
  eyebrow,
  heading,
  thai,
  thaiInline = false,
  body,
  image,
  align = "right",
}: StoryChapterProps) {
  const textRight = align === "right";

  return (
    <section
      id={id}
      className="snap-section relative flex min-h-[calc(100svh-var(--nav-h))] items-center overflow-hidden bg-[#1A0F0B]"
    >
      {/* Full-bleed background image (gentle parallax) */}
      <Parallax distance={60} className="absolute inset-0">
        <div className="relative h-[112%] w-full">
          <SmartImage
            image={image}
            scene={scene}
            sizes="100vw"
            showCaption={false}
          />
        </div>
      </Parallax>

      {/* Darkening: strong veil on mobile (text reads over any part of the
          image) → lighter base + directional pool behind the text at lg. */}
      <div aria-hidden className="absolute inset-0 bg-black/55 lg:bg-black/30" />
      <div
        aria-hidden
        className={`absolute inset-0 hidden lg:block ${
          textRight
            ? "bg-gradient-to-l from-[#150B08]/92 via-[#150B08]/45 to-transparent"
            : "bg-gradient-to-r from-[#150B08]/92 via-[#150B08]/45 to-transparent"
        }`}
      />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <div className={`max-w-xl ${textRight ? "lg:ml-auto" : "lg:mr-auto"}`}>
          <div className="relative">
            {index && (
              <span
                aria-hidden
                className="pointer-events-none absolute -top-14 -left-2 font-display text-[6.5rem] font-bold leading-none text-parchment/10 sm:text-[8rem]"
              >
                {index}
              </span>
            )}
            <div className="relative">
              {/* {eyebrow && (
                <Reveal>
                  <span className="eyebrow block text-xs font-semibold text-gold-soft">
                    {eyebrow}
                  </span>
                </Reveal>
              )} */}
              <Reveal delay={0.05} y={56}>
                <h2 className="mt-3 font-display text-fluid-2xl font-semibold leading-tight text-parchment drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
                  {heading}
                  {thaiInline && (
                    <span className="font-thai font-medium text-parchment/85"> – “{thai}”</span>
                  )}
                </h2>
              </Reveal>
              {!thaiInline && (
                <Reveal delay={0.1}>
                  <p className="font-thai mt-2 text-fluid-lg font-medium text-parchment/85">
                    {thai}
                  </p>
                </Reveal>
              )}
              <Reveal delay={0.12}>
                <span className="mt-6 block h-px w-16 bg-gold-soft/70" />
              </Reveal>
              <Reveal delay={0.16}>
                <p className="font-thai mt-6 max-w-prose text-fluid-base leading-relaxed text-parchment/80 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
                  {body}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
