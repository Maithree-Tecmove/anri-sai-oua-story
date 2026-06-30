import type { Metadata } from "next";
import { chef, maker, craft, design } from "@/lib/content";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { WireNav } from "@/components/wireframe/WireNav";
import { WireHero } from "@/components/wireframe/WireHero";
import { WireVideo } from "@/components/wireframe/WireVideo";
import { WireChapter } from "@/components/wireframe/WireChapter";
import { WireFinalCta } from "@/components/wireframe/WireFinalCta";
import { WireFooter } from "@/components/wireframe/WireFooter";

export const metadata: Metadata = {
  title: "Anri · Sai Oua — Pass 1 Wireframe",
  robots: { index: false, follow: false },
};

/* ════════════════════════════════════════════════════════════════════════
   PASS 1 — LOW-FIDELITY WIREFRAME
   Grayscale · no photography · no brand color. Locks layout, section order,
   spacing rhythm, and responsive behavior. Real copy hierarchy from content.ts.
   ════════════════════════════════════════════════════════════════════════ */
export default function WireframePage() {
  return (
    <main className="min-h-screen bg-wire-bg text-wire-text">
      <ScrollProgress />

      {/* Pass-1 banner */}
      <div className="bg-wire-ink px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
        Pass 1 · Low-Fidelity Wireframe — layout &amp; responsive review
      </div>

      <WireNav />

      <WireHero />

      <WireVideo />

      <WireChapter
        id="chef"
        tag="Section 4 · Chapter 1"
        eyebrow={chef.eyebrow}
        heading={chef.heading}
        thai={chef.thaiSubhead}
        body={chef.body}
        image={chef.image}
        reverse={false}
      />

      <WireChapter
        id="maker"
        tag="Section 5 · The Maker"
        heading={maker.heading}
        thai={maker.thaiName}
        thaiInline
        body={maker.body}
        image={maker.image}
        reverse
      />

      <WireChapter
        id="craft"
        tag="Section 6 · The Craft"
        heading={craft.heading}
        thai={craft.thaiName}
        thaiInline
        body={craft.body}
        image={craft.image}
        reverse={false}
      />

      <WireChapter
        id="design"
        tag="Section 7 · The Design"
        heading={design.heading}
        thai={design.thaiName}
        thaiInline
        body={design.body}
        image={design.image}
        reverse
      />

      <WireFinalCta />

      <WireFooter />
    </main>
  );
}
