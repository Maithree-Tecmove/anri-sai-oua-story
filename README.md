# Anri · "Sai Oua" Campaign — Landing Page

Cinematic, editorial, bilingual (Thai + English) brand-story landing page for
Anri Bakery's **Sai Oua (ไส้อั่ว)** "Early Access Batch" pre-order campaign.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

---

## Status — delivered in two passes

| Pass | Route | What it is |
|------|-------|------------|
| **Pass 1 — Low-fidelity wireframe** ✅ | **`/wireframe`** | Grayscale, no photography, no brand color. Locked layout, section order, spacing rhythm, and responsive behavior with the **real copy hierarchy**. |
| **Pass 2 — High-fidelity prototype** ✅ *(current — the real landing page)* | **`/`** | Full visual system: oxblood / parchment / gold palette, Playfair + Noto Serif Thai + Sarabun type, `next/image`, scroll reveals + parallax, progressive tonal intensity. |

> `/wireframe` is kept for reference. The live landing page is the root route `/`.

---

## Run it

```bash
npm install
npm run dev          # http://localhost:3000  → open /wireframe
# production
npm run build && npm start
```

Requires Node 18.18+.

---

## Where to edit things

### ✍️ All copy + image paths — `lib/content.ts`
**Single source of truth.** Every headline, paragraph, label, nav link, and
image path lives here. Both passes read from it, so you never edit JSX to change
text or swap a photo.

- Thai copy is **verbatim** from `story-website-landing-page.png` (not
  auto-corrected). The English hero headline keeps the reference spelling
  *"Untranslateble"* intentionally.

### 🎞 Drop in the real video — `lib/content.ts → video`
```ts
export const video = {
  src: "/videos/anri-sai-oua.mp4",  // ← set this (was null)
  kind: "file",                      // "file" for .mp4  |  "embed" for YouTube/Vimeo URL
  ...
}
```
- **Self-hosted:** put the file in `/public/videos/`, set `src: "/videos/…​.mp4"`, `kind: "file"`.
- **YouTube/Vimeo:** set `src` to the embed URL, `kind: "embed"`.
- Leave `src: null` to keep the poster + play-button placeholder.
- The block stays a fluid **16:9** (`aspect-video`) at every width.

### 🖼 Replace placeholder images — `lib/content.ts` (each `ImageRef.src`)
Every image is a variable. While `src` is `null`, an on-brand **cinematic
placeholder scene** renders (warm oxblood/parchment SVG art with a caption
describing the intended shot) — never a broken `<img>`. To use a real photo:

1. Save it to `public/images/` (suggested names in `public/images/README.txt`).
2. Set the matching `src`, e.g. `hero.product.src = "/images/hero-product.jpg"`.

| Variable | Intended shot |
|----------|---------------|
| `hero.product` | Signature woven-lattice sai-oua pastry + ANRI box (hero, right) |
| `hero.background` | Misty Chiang Mai mountains at dawn |
| `video.poster` | Sai oua on charcoal, smoke (video poster) |
| `chef.image` | Figure facing northern mountains / Lanna temple |
| `maker.image` | Mae Kham Paeng hand-making sai oua |
| `craft.image` | Sai oua grilling over charcoal |
| `design.image` | Woven bamboo Lanna lantern + packaging detail |
| `finalCta.background` | Atmospheric Chiang Mai dusk, red leaves (full-bleed) |

In Pass 2 these render through `next/image` (`fill` + `sizes`); the `alt` text
is already written on each `ImageRef`.

---

## Section order (top → bottom)

1. Sticky Navigation · 2. Hero · 3. **Cinematic Video** · 4. Chef's Journey ·
5. The Maker · 6. The Craft · 7. The Design · 8. Final CTA · 9. Footer.

---

## Project structure

```
app/
  layout.tsx          # fallback web-fonts, metadata, viewport
  globals.css         # @font-face for the Anri Bakery brand font, base styles, reduced-motion, focus rings
  page.tsx            # placeholder index → Pass 2 home
  wireframe/page.tsx  # PASS 1 — assembles the grayscale wireframe
components/
  motion/             # Reveal (scroll fade-up), Parallax, ScrollProgress — shared, reduced-motion aware
  visual/             # SmartImage (next/image ↔ placeholder), PlaceholderScene (cinematic SVG stand-ins)
  sections/           # PASS 2: SiteNav, Hero, VideoSection, StoryChapter, FinalCta, SiteFooter
  wireframe/          # PASS 1: WireNav, WireHero, WireVideo, WireChapter, WireFinalCta, WireFooter, primitives
lib/content.ts        # ← all copy + image/video paths
public/images/        # drop real photos here
```

---

## Responsive verification (top priority)

Mobile-first; base styles authored for ~375px and scaled up with Tailwind
breakpoints. Verified in-browser at **375 / 414 / 768 / 1024 / 1280 / 1440 px**:

- **No horizontal scroll at any width** — confirmed `documentElement.scrollWidth === clientWidth` at all six widths (a global `overflow-x: clip` guard + section-level clipping for decorative accents).
- **Layout reflow** — Hero and all chapters are single-column on mobile/tablet and switch to a 2-column text/image grid at `lg` (1024px); chapters alternate image side at `lg` and are image-first when stacked.
- **Fluid headlines** — display type uses `clamp()` (`fontSize.fluid-*` in `tailwind.config.ts`) so the large serif scales smoothly without overflow.
- **Navigation** — inline links ≥1024px; hamburger + right-side slide-in overlay below 1024px (verified the panel opens to the correct on-screen position). Language toggle + cart stay reachable at both sizes.
- **Touch targets** — all interactive controls ≥ 44×44px (nav controls, hamburger, footer links, social chips).
- **Video** — fluid 16:9 (`aspect-video`) at every width.

**How it was verified:** ran `npm run dev`, then drove a headless preview —
resized to each breakpoint and used DOM/`getComputedStyle` assertions to check
viewport vs. scroll width, grid column counts, nav display state, computed
element order, and tap-target box sizes. Production `npm run build` passes with
all routes prerendered. (Note: screenshot captures in the headless tool were
flaky for web-font paint and CSS-transition frames; DOM assertions were used as
the source of truth and are reproducible in any real browser.)

---

## Accessibility & motion

- Semantic landmarks (`header`/`nav`/`section`/`footer`), one `h1`, ordered headings.
- Meaningful `alt` on every content image (placeholders use `role="img"` + `aria-label`).
- Visible focus rings; `aria-label` on icon-only buttons; `aria-expanded`/`aria-controls` on the menu.
- `prefers-reduced-motion: reduce` disables scroll-reveal, parallax, and smooth scrolling globally (Framer `useReducedMotion` + a CSS media-query backstop).
- Smooth in-page anchor scrolling via `scroll-behavior: smooth`.

---

## Design system (informed by UI UX Pro Max)

- **Pattern:** Scroll-Triggered Storytelling (chapters → climax CTA, scroll progress indicator, simplified motion on mobile).
- **Type:** the official **Anri Bakery** brand fontset (Fontcraft — covers Thai + Latin, Regular/Bold + italics), self-hosted from `public/font/` and applied across display + body. Falls back to Playfair Display / Noto Serif Thai / Sarabun if it fails to load. To update the brand font, replace the `anri-bakery-*.ttf` files in `public/font/` and the `@font-face` rules in `app/globals.css`.
- **Color (Pass 2):** oxblood/maroon `#6E1E1E–#8A2B2B`, parchment cream `#F3EBDD`, charcoal-brown text, muted gold accents — defined in `tailwind.config.ts`. Pass 1 is intentionally grayscale.
- **Motion:** gentle `ease-out` fade-up reveals, 150–300ms micro-interactions, transform/opacity only.
