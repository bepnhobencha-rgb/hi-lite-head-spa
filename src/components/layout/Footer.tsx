import Link from "next/link";
import { SALON } from "@/config/salon";
import type { Lang, Translations } from "@/lib/i18n";

const NAV_LINKS = (tr: Translations["nav"]) => [
  { href: "/services", label: tr.services },
  { href: "/promotions", label: tr.promotions },
  { href: "/gallery", label: tr.gallery },
  { href: "/about", label: tr.about },
  { href: "/reviews", label: tr.reviews },
  { href: "/faq", label: tr.faq },
  { href: "/contact", label: tr.contact },
  { href: "/gift-cards", label: tr.giftCards },
];

export function Footer({ lang, tr }: { lang: Lang; tr: Translations }) {
  return (
    <footer className="bg-hl-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-serif text-2xl font-semibold tracking-wider text-white">
                HI-LITE
              </p>
              <p className="text-xs font-light tracking-[0.3em] text-hl-gold uppercase">
                Head Spa
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              {SALON.tagline}. A luxury sanctuary for scalp health and deep relaxation in Anaheim, CA.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={SALON.social.instagram} target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-white/50 transition-colors hover:border-hl-gold/50 hover:text-hl-gold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={SALON.social.facebook} target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-white/50 transition-colors hover:border-hl-gold/50 hover:text-hl-gold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={SALON.social.tiktok} target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-white/50 transition-colors hover:border-hl-gold/50 hover:text-hl-gold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.02-8.36a8.2 8.2 0 0 0 4.79 1.52V5.03a4.85 4.85 0 0 1-1-.34z"/></svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-hl-gold">
              Explore
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS(tr.nav).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-hl-gold">
              {tr.contact.address}
            </p>
            <address className="not-italic space-y-2 text-sm text-white/50">
              <p>{SALON.address}</p>
              <p>{SALON.hoursShort}</p>
              <a href={SALON.phoneHref} className="block transition-colors hover:text-white">
                {SALON.phone}
              </a>
              <a href={`mailto:${SALON.email}`} className="block transition-colors hover:text-white">
                {SALON.email}
              </a>
            </address>
            <a
              href={SALON.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-hl-gold px-5 py-2.5 text-xs font-semibold text-hl-black transition-all hover:bg-hl-gold-light"
            >
              {tr.nav.bookNow}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-center text-xs text-white/30 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {SALON.name}. All rights reserved.</p>
          <p>
            Follow us{" "}
            <a
              href={SALON.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-hl-gold/60 hover:text-hl-gold"
            >
              {SALON.social.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
