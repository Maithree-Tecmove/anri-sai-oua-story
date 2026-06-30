import { footer } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-[#1C0F0C] py-16 text-parchment/70 sm:py-20">
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-3xl font-semibold text-parchment">
                {footer.brand}
              </span>
              <span className="text-[9px] tracking-[0.3em] text-parchment/45">
                {footer.brandMark}
              </span>
            </div>
            <p className="font-thai mt-4 max-w-[30ch] text-sm leading-relaxed text-parchment/55">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-[11px] font-semibold text-gold-soft">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-1">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-flex min-h-[44px] items-center text-sm text-parchment/65 transition-colors hover:text-parchment"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow text-[11px] font-semibold text-gold-soft">Connect</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {footer.social.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    aria-label={s}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-parchment/20 px-3 text-[11px] text-parchment/65 transition-colors hover:border-gold-soft hover:text-parchment"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-1 text-sm text-parchment/55">
              <p>
                <a href={`mailto:${footer.contact.email}`} className="hover:text-parchment">
                  {footer.contact.email}
                </a>
              </p>
              <p>{footer.contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-parchment/15 pt-6 text-xs text-parchment/45">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
