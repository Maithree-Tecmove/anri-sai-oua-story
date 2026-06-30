import type { ImageRef } from "@/lib/content";

/* ──────────────────────────────────────────────────────────────────────────
 * PASS-1 WIREFRAME PRIMITIVES — grayscale only. No brand color, no photography.
 * Boxes + placeholder labels + real copy hierarchy.
 * ────────────────────────────────────────────────────────────────────────── */

/** Image placeholder: a hatched gray box that names the intended shot. */
export function ImageBox({
  image,
  ratio = "aspect-[4/3]",
  className = "",
  tall = false,
}: {
  image: ImageRef;
  ratio?: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm border border-wire-line bg-wire-box ${
        tall ? "h-full min-h-[220px]" : ratio
      } ${className}`}
      role="img"
      aria-label={image.alt}
    >
      {/* diagonal hatch to read clearly as "image goes here" */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 11px, rgba(113,113,122,0.22) 11px, rgba(113,113,122,0.22) 12px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="max-w-[34ch] text-center">
          <span className="mb-2 inline-block rounded border border-wire-line bg-wire-bg/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-wire-muted">
            Image
          </span>
          <p className="text-xs leading-snug text-wire-text">{image.placeholder}</p>
        </div>
      </div>
    </div>
  );
}

/** Eyebrow / kicker label. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-wire-muted">
      {children}
    </span>
  );
}

/** Skeleton body lines — communicates paragraph mass without faking real prose.
 *  We DO render the real copy (so hierarchy is honest) but in muted gray. */
export function BodyCopy({
  children,
  thai = false,
  className = "",
}: {
  children: React.ReactNode;
  thai?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`max-w-prose text-fluid-base leading-relaxed text-wire-text ${
        thai ? "font-body" : "font-body"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** A small annotation tag used to label regions in the wireframe. */
export function WireTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-wire-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-wire-muted">
      {children}
    </span>
  );
}

/** Generic button placeholder (outlined, grayscale). */
export function WireButton({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <span
      className={`inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-sm px-6 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 ${
        primary
          ? "bg-wire-ink text-white hover:bg-wire-text"
          : "border border-wire-line text-wire-ink hover:bg-wire-panel"
      }`}
    >
      {children}
    </span>
  );
}

/** Section shell: max-width container + vertical rhythm. */
export function Shell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
