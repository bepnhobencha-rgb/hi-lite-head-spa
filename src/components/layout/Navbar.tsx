"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SALON } from "@/config/salon";
import type { Lang, Translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV_LINKS = (tr: Translations["nav"]) => [
  { href: "/", label: tr.home },
  { href: "/services", label: tr.services },
  { href: "/promotions", label: tr.promotions },
  { href: "/gallery", label: tr.gallery },
  { href: "/about", label: tr.about },
  { href: "/reviews", label: tr.reviews },
  { href: "/faq", label: tr.faq },
  { href: "/contact", label: tr.contact },
  { href: "/gift-cards", label: tr.giftCards },
];

export function Navbar({ lang, tr }: { lang: Lang; tr: Translations["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function toggleLang() {
    const next = lang === "en" ? "vi" : "en";
    document.cookie = `hl-lang=${next};path=/;max-age=31536000`;
    window.location.reload();
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-hl-black/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/60 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-semibold text-white tracking-wider">
            HI-LITE
          </span>
          <span className="text-[10px] font-light tracking-[0.25em] text-hl-gold uppercase">
            Head Spa
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS(tr).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-hl-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="hidden text-xs font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-white md:block"
          >
            {lang === "en" ? "VI" : "EN"}
          </button>
          <a
            href={SALON.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-hl-gold px-5 py-2 text-xs font-semibold tracking-wide text-hl-black transition-all hover:bg-hl-gold-light md:block"
          >
            {tr.bookNow}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-1 text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-hl-black/98 px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS(tr).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-hl-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={SALON.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-hl-gold px-5 py-3 text-center text-sm font-semibold text-hl-black"
            >
              {tr.bookNow}
            </a>
            <button
              onClick={toggleLang}
              className="rounded-full border border-white/20 px-4 py-3 text-xs font-medium uppercase tracking-widest text-white/60"
            >
              {lang === "en" ? "VI" : "EN"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
