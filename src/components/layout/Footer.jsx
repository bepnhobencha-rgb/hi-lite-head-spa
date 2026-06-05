import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, BOOKING_URL, SOCIAL } from "@/lib/constants";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang].nav;
  const cta = t[lang].cta;

  const links = [
    { label: tx.services, path: "/services" },
    { label: tx.promotions, path: "/promotions" },
    { label: tx.gallery, path: "/gallery" },
    { label: tx.about, path: "/about" },
    { label: tx.giftCards, path: "/gift-cards" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold tracking-wider mb-3">{BUSINESS.name}</h3>
            <div className="w-8 h-px bg-gold mb-4" />
            <p className="font-body text-sm text-primary-foreground/70 italic">{BUSINESS.slogan}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-5 tracking-wide">
              {lang === "en" ? "Explore" : "Explorar"}
            </h4>
            <div className="space-y-3 font-body text-sm">
              {links.map((link) => (
                <Link key={link.path} to={link.path}
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-5 tracking-wide">
              {lang === "en" ? "Contact" : "Contacto"}
            </h4>
            <div className="space-y-4 font-body text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-primary-foreground transition-colors">{BUSINESS.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary-foreground transition-colors">{BUSINESS.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-gold" />
                <span>{BUSINESS.hours}</span>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-5 tracking-wide">
              {lang === "en" ? "Follow Us" : "Síguenos"}
            </h4>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="https://www.facebook.com/HiLiteHairSalon?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 border border-primary-foreground/25 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all duration-300 font-body text-xs tracking-widest uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 border border-primary-foreground/25 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all duration-300 font-body text-xs tracking-widest uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 border border-primary-foreground/25 rounded-full text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 transition-all duration-300 font-body text-xs tracking-widest uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
                </svg>
                TikTok
              </a>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-primary-foreground text-primary text-sm font-body font-medium tracking-wider rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:opacity-95 transition-all duration-300">
              {tx.bookNow}
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs text-primary-foreground/50 tracking-wide">
            © {new Date().getFullYear()} {BUSINESS.fullName}. {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}