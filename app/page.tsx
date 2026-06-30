import { chef, maker, craft, design } from "@/lib/content";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { SiteNav } from "@/components/sections/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { StoryChapter } from "@/components/sections/StoryChapter";
import { FinalCta } from "@/components/sections/FinalCta";

/* ════════════════════════════════════════════════════════════════════════
   PASS 2 — HIGH-FIDELITY LANDING PAGE
   Full brand system: oxblood / parchment / gold, real type, next/image,
   scroll reveals + parallax. Progressive tonal intensity per the
   Scroll-Triggered Storytelling pattern (UI UX Pro Max).
   ════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="bg-parchment text-ink">
      <ScrollProgress className="bg-gold" />
      <SiteNav />

      <Hero />

      <VideoSection />

      <StoryChapter
        id="chef"
        scene="mountains"
        // index="01"
        eyebrow={chef.eyebrow}
        heading={chef.heading}
        thai={chef.thaiSubhead}
        body={chef.body}
        image={chef.image}
        align="right"
      />

      <StoryChapter
        id="maker"
        scene="maker"
        // index="02"
        heading={maker.heading}
        thai={maker.thaiName}
        thaiInline
        body={maker.body}
        image={maker.image}
        align="left"
      />

      <StoryChapter
        id="craft"
        scene="grill"
        // index="03"
        heading={craft.heading}
        thai={craft.thaiName}
        thaiInline
        body={craft.body}
        image={craft.image}
        align="right"
      />

      <StoryChapter
        id="design"
        scene="packaging"
        // index="04"
        heading={design.heading}
        thai={design.thaiName}
        thaiInline
        body={design.body}
        image={design.image}
        align="left"
      />

      <FinalCta />
    </main>
  );
}
