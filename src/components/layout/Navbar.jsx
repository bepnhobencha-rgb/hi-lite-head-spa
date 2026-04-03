import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BOOKING_URL, BUSINESS, SOCIAL } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggle } = useLang();
  const tx = t[lang].nav;

  const NAV_LINKS = [
    { label: tx.home, path: "/" },
    { label: tx.services, path: "/services" },
    { label: tx.promotions, path: "/promotions" },
    { label: tx.gallery, path: "/gallery" },
    { label: tx.about, path: "/about" },
    { label: tx.reviews, path: "/reviews" },
    { label: tx.faq, path: "/faq" },
    { label: tx.contact, path: "/contact" },
    { label: tx.giftCards, path: "/gift-cards" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl lg:text-2xl font-semibold tracking-wider text-foreground">
              {BUSINESS.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-body tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-2 mr-1 border-l border-border pl-4">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
                </svg>
              </a>
            </div>
            {/* Language Toggle */}
            <button
              onClick={toggle}
              className="px-3 py-2 text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full"
              title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
            >
              {lang === "en" ? "🇲🇽 ES" : "🇺🇸 EN"}
            </button>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-7 py-2.5 bg-foreground text-background text-sm font-body font-medium tracking-wider rounded-full hover:shadow-[0_0_16px_rgba(0,0,0,0.2)] hover:opacity-85 transition-all duration-300"
            >
              {tx.bookNow}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              className="px-3 py-1.5 text-xs font-body text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
            >
              {lang === "en" ? "🇲🇽 ES" : "🇺🇸 EN"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 text-base font-body tracking-wide border-b border-border/50 transition-colors ${
                    location.pathname === link.path
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Instagram
                </a>
                <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
                  </svg>
                  TikTok
                </a>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-3.5 bg-foreground text-background text-center text-sm font-body font-medium tracking-wider rounded-full hover:opacity-85 transition-all duration-300"
              >
                {tx.bookNow}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}