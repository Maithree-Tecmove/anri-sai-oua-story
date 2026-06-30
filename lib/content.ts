/**
 * ============================================================================
 *  ANRI · "Sai Oua" Campaign — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Edit ALL copy and image paths here. Both the Pass-1 wireframe and the
 *  Pass-2 high-fidelity page read from this file, so you never touch JSX
 *  to update text or swap a photo.
 *
 *  COPY RULE: Thai is verbatim from story-website-landing-page.png. Do not
 *  auto-correct Thai spelling. The English headline keeps the reference's
 *  spelling "Untranslateble" intentionally.
 *
 *  IMAGE RULE: every visual is a `src` variable below. Drop a real file into
 *  /public/images with the same name (or point the variable elsewhere) and it
 *  appears everywhere. Until then a labeled placeholder block renders — never
 *  a broken <img>.
 *
 *  VIDEO RULE: see `video.src` — set it to an .mp4 path OR a YouTube/Vimeo
 *  embed URL and the player swaps in. Leave it null to keep the poster +
 *  play-button placeholder.
 * ============================================================================
 */

export type ImageRef = {
  /** Real asset path, e.g. "/images/hero-product.jpg". Null → placeholder renders. */
  src: string | null;
  /** Accessible alt text (always meaningful, never decorative-empty for content imgs). */
  alt: string;
  /** Short description of the intended shot — shown inside the placeholder block. */
  placeholder: string;
};

const img = (src: string | null, alt: string, placeholder: string): ImageRef => ({
  src,
  alt,
  placeholder,
});

/* ── Navigation ──────────────────────────────────────────────────────────── */
export const nav = {
  brand: "Anri",
  brandMark: "アンリ", // small mark beneath wordmark in reference
  links: [
    { label: "Anri's Signature", href: "https://anribakery.com/#signature" },
    { label: "Menu", href: "https://anribakery.com/#menu" },
    { label: "Storing Tips", href: "https://anribakery.com/#storing-tips" },
    { label: "Anri's Story", href: "https://anribakery.com/#story" },
    { label: "Our Shops", href: "https://anribakery.com/#shops" },
    { label: "Delivery", href: "https://anribakery.com/#delivery" },
    { label: "Member", href: "https://anribakery.com/member/" },
    { label: "Contact", href: "https://anribakery.com/#contact" },
  ],
} as const;

/* ── Hero ────────────────────────────────────────────────────────────────── */
export const hero = {
  headline: "The Untranslateble Taste",
  thaiSubhead: "รสชาติที่อธิบายไม่ได้",
  eyebrow: "",
  paragraph:
    "100 ปีที่ผ่านมา Anri ได้แปลความเป็นญี่ปุ่น ผ่านแบบ Aomori Apple Pie และอื่นๆ ให้คนไทยมาโดยตลอด ในวินาทีนี้ถึงเวลาแล้ว ที่ Anri จะเสาะหาของดีของไทย เพื่อแปลออกมาเป็นภาษาของ Anri บ้าง",
  cta: "PREORDER NOW",
  product: img(
    null,
    "Signature Anri Sai Oua pastry — woven lattice crust revealing herb sausage filling, beside its ANRI gift box",
    "IMAGE: signature woven-lattice sai-oua pastry on a stone plate, ANRI box behind, soft mountain backdrop — hero, right side"
  ),
  background: img(
    null,
    "Misty Chiang Mai mountains at dawn",
    "BG: soft misty northern-Thailand mountains, warm dawn light, low contrast"
  ),
  productBoxLabel: "ANRI",
  productBoxSub: "THE UNTRANSLATEBLE TASTE",
} as const;

/* ── Video section (immediately after hero) ────────────────────────────────
 *  ► TO ADD THE REAL VIDEO: set `video.src` below.
 *      • Self-hosted file:  "/videos/anri-sai-oua.mp4"  (kind: "file")
 *      • YouTube / Vimeo:   "https://www.youtube.com/embed/XXXX" (kind: "embed")
 *  Leave src: null to keep the poster + play-button placeholder.
 * ------------------------------------------------------------------------- */
export const video = {
  src: "/videos/Anri_OurStoryToThailand.mp4" as string | null,
  kind: "file" as "file" | "embed",
  poster: img(
    null,
    "Sai oua slowly grilling over charcoal, smoke rising",
    "POSTER: cinematic close-up of sai oua coiled on a charcoal grill, smoke, warm embers"
  ),
  caption: "เรื่องราวที่อธิบายไม่ได้", // brand-voice caption; TODO: replace if a final caption is provided
  captionEn: "A taste best understood by tasting",
} as const;

/* ── Chapter 1 — Chef's Journey ────────────────────────────────────────────── */
export const chef = {
  eyebrow: "1st Chapter",
  heading: "Chef's Journey to Chiang Mai",
  thaiSubhead: "เมนูที่อธิบายไม่ได้จากเชียงใหม่",
  body:
    'เมนูแห่งความบังเอิญ ที่เชฟได้รับการแนะนำให้ลองชิมจากเจ้าของที่พัก จนได้มาเจอ "ไส้อั่วคำแปง" รสชาติอันเป็นเอกลักษณ์ ที่แม้แต่เชฟชาวญี่ปุ่นก็ไม่สามารถอธิบายออกมาได้',
  image: img(
    null,
    "A figure standing before northern Thai mountains and a Lanna temple at golden hour",
    "IMAGE: lone figure facing Chiang Mai mountains / Lanna temple silhouette, golden hour, back to camera"
  ),
} as const;

/* ── Chapter 2 — The Maker ─────────────────────────────────────────────────── */
export const maker = {
  heading: "The Maker",
  thaiName: "คำแปง",
  body:
    "ไส้อั่วที่อยู่ในครัวซองชิ้นนี้ ถูกสรรค์สร้างขึ้นโดยครอบครัวของคุณแม่คำแปง ผู้ทำไส้อั่วพื้นบ้านจากจังหวัดเชียงใหม่ ที่เครื่องแกงทำเอง เนื้อหมูแน่นมันน้อย ที่มอบความอร่อยจากรสมือคนพื้นที่แท้ๆ",
  image: img(
    null,
    "Mae Kham Paeng hand-making sai oua in a rustic northern Thai kitchen, herbs and ingredients around her",
    "IMAGE: maker (Mae Kham Paeng) at work in a warm rustic kitchen, hands shaping sausage, bowls of curry paste & herbs"
  ),
} as const;

/* ── Chapter 3 — The Craft ─────────────────────────────────────────────────── */
export const craft = {
  heading: "The Craft",
  thaiName: "ไส้อั่ว",
  body:
    "ไส้อั่วที่ผลิตด้วยมือในจำนวนจำกัดต่อวัน ทุกๆ เส้นจะต้องผ่านการปรุง ย่าง และพักอย่างเหมาะสม อีกทั้งยังคงค่อยๆ ย่างบนเตาด้วยมือเหมือนที่คุณแม่คำแปงทำมาตลอด",
  image: img(
    null,
    "Coiled sai oua grilling over glowing charcoal with fragrant smoke",
    "IMAGE: sai oua coil over charcoal, smoke and embers, top-down or close 3/4, warm glow"
  ),
} as const;

/* ── Chapter 4 — The Design ────────────────────────────────────────────────── */
export const design = {
  heading: "The Design",
  thaiName: "โคมลายสานล้านนา",
  body:
    "อีกหนึ่งเอกลักษณ์ของภาคเหนือที่สร้างแรงบันดาลใจให้เชฟของ Anri งานหัตถกรรมพื้นบ้านล้านนาที่ประดับประดาอยู่ทั่วเมือง ถูกนำมาสร้างเป็นแป้งครัวซองที่พันรอบไส้อั่ว เกิดเป็นลายสานเหมือนโคมไม้ไผ่ที่หุ้มของดีจากภาคเหนือไว้ภายใน รอที่จะส่งมอบรสชาติแสนอร่อยที่แม้แต่เชฟก็ไม่สามารถอธิบายได้",
  image: img(
    null,
    "Woven bamboo Lanna lantern next to the lattice-wrapped sai oua pastry on banana leaf",
    "IMAGE: woven bamboo Lanna lantern + banana-leaf / lattice packaging detail, warm low-key light"
  ),
} as const;

/* ── Final CTA ─────────────────────────────────────────────────────────────── */
export const finalCta = {
  leadIn: "และคุณคือกลุ่มแรกที่ได้ลิ้มลองรสที่",
  bigStatement: "ไม่สามารถอธิบายได้นี้",
  label: "Early Access Batch",
  button: "PREORDER NOW",
  /* Destination for the preorder CTA — also the URL encoded in the desktop QR.
     Swap for the real order/LINE link when it's ready. */
  preorderUrl: "https://anri.co.th/preorder",
  // qrCaption: "สแกนเพื่อพรีออเดอร์ด้วยมือถือ",
  background: img(
    null,
    "Atmospheric northern-Thailand landscape with autumnal red leaves at dusk",
    "BG (full-bleed): moody Chiang Mai dusk, red maple-leaf accents, deep warm shadows"
  ),
} as const;

/* ── Footer ────────────────────────────────────────────────────────────────── */
export const footer = {
  brand: "Anri",
  brandMark: "アンリ",
  tagline: "The Untranslateble Taste — Sai Oua Early Access Batch",
  columns: [
    {
      title: "Explore",
      links: ["ANRI'S SIGNATURE", "MENU", "PROMOTION", "ANRI'S STORY"],
    },
    {
      title: "Visit",
      links: ["OUR SHOPS", "DELIVERY", "MEMBER", "CONTACT"],
    },
  ],
  social: ["Instagram", "Facebook", "LINE", "TikTok"],
  contact: {
    email: "hello@anri.co.th",
    phone: "+66 2 000 0000",
  },
  copyright: "© 2026 Anri Bakery. All rights reserved.",
} as const;

/* ── Section registry (drives nav anchors + ordering) ──────────────────────── */
export const sections = [
  { id: "hero", label: "STORY" },
  { id: "video", label: "FILM" },
  { id: "chef", label: "THE JOURNEY" },
  { id: "maker", label: "THE MAKER" },
  { id: "craft", label: "THE CRAFT" },
  { id: "design", label: "THE DESIGN" },
  { id: "preorder", label: "PREORDER" },
] as const;
