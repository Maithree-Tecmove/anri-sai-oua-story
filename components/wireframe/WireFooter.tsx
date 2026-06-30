import { footer } from "@/lib/content";
import { Shell, WireTag } from "./primitives";

/* PASS 1 — Footer. Logo + nav columns + social + contact + copyright.
   Mobile: single column stack → multi-column from sm/lg. */
export function WireFooter() {
  return (
    <footer id="footer" className="bg-wire-panel py-12 sm:py-16">
      <Shell>
        <div className="mb-8">
          <WireTag>Section 9 · Footer</WireTag>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-semibold text-wire-ink">
                {footer.brand}
              </span>
              <span className="text-[9px] tracking-[0.3em] text-wire-muted">
                {footer.brandMark}
              </span>
            </div>
            <p className="mt-3 max-w-[28ch] text-xs text-wire-muted">{footer.tagline}</p>
          </div>

          {/* Nav columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-wire-text">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-flex min-h-[44px] items-center text-xs text-wire-muted hover:text-wire-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social + contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-wire-text">
              Connect
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {footer.social.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    aria-label={s}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-wire-line px-2 text-[10px] text-wire-muted hover:bg-wire-box"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1 text-xs text-wire-muted">
              <p>{footer.contact.email}</p>
              <p>{footer.contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-wire-box pt-6 text-xs text-wire-muted">
          {footer.copyright}
        </div>
      </Shell>
    </footer>
  );
}
