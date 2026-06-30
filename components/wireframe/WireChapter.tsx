import type { ImageRef } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { BodyCopy, Eyebrow, ImageBox, Shell, WireTag } from "./primitives";

type WireChapterProps = {
  id: string;
  tag: string;
  eyebrow?: string;
  heading: string;
  /** Thai line under the English heading. */
  thai: string;
  /** When true, the Thai line is a quoted name appended inline to the heading. */
  thaiInline?: boolean;
  body: string;
  image: ImageRef;
  /** Image on the right (false) or left (true) at lg. Mobile always image-first. */
  reverse?: boolean;
};

/* PASS 1 — Generic story chapter. lg: 2-col text/image with alternating sides.
   Mobile: stacks image-first → text (image anchors each chapter visually). */
export function WireChapter({
  id,
  tag,
  eyebrow,
  heading,
  thai,
  thaiInline = false,
  body,
  image,
  reverse = false,
}: WireChapterProps) {
  return (
    <section id={id} className="border-b border-wire-box bg-wire-bg py-14 sm:py-20">
      <Shell>
        <div className="mb-6">
          <WireTag>{tag}</WireTag>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Image — order-1 on mobile (image-first); side chosen by `reverse` on lg */}
          <div className={`order-1 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <Reveal>
              <ImageBox image={image} ratio="aspect-[4/3]" />
            </Reveal>
          </div>

          {/* Text */}
          <div className={`order-2 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            {eyebrow && (
              <Reveal>
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-fluid-2xl font-semibold leading-tight text-wire-ink">
                {heading}
                {thaiInline && (
                  <span className="font-thai font-medium text-wire-text">
                    {" "}
                    – “{thai}”
                  </span>
                )}
              </h2>
            </Reveal>
            {!thaiInline && (
              <Reveal delay={0.1}>
                <p className="font-thai mt-2 text-fluid-lg font-medium text-wire-text">
                  {thai}
                </p>
              </Reveal>
            )}
            <Reveal delay={0.15}>
              <BodyCopy thai className="mt-5">
                {body}
              </BodyCopy>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}
