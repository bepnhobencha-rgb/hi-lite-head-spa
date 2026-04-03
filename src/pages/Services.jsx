import React from "react";
import { motion } from "framer-motion";
import { SERVICES, ADDONS, BOOKING_URL, IMAGES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Services() {
  const { lang } = useLang();
  const tx = t[lang].services;
  const cta = t[lang].cta;

  return (
    <div>
      <section className="relative h-80 md:h-[520px] flex items-end overflow-hidden">
        <img src="https://media.base44.com/images/public/69ca33f058b56f86689a61f3/9778e65c0_Gemini_Generated_Image_7d7pew7d7pew7d7p.png" alt="Head spa treatment" className="absolute inset-0 w-full h-full object-cover object-center" style={{ filter: "brightness(1.05) contrast(1.04) saturate(0.82) sepia(0.08)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">{tx.heroTitle}</h1>
        </div>
      </section>

      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow={tx.sectionEyebrow} title={tx.sectionTitle} subtitle={tx.sectionSubtitle} />
          <div className="space-y-8">
            {SERVICES.map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className={`relative bg-card border rounded-sm p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-8 ${s.badge ? "border-gold/40" : "border-border"}`}>
                {s.badge && (
                  <span className="absolute top-0 right-0 bg-gold text-gold-foreground text-xs font-body tracking-wider px-5 py-1.5 rounded-bl-sm rounded-tr-sm">
                    {s.badge}
                  </span>
                )}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">{s.name}</h3>
                    <span className="font-body text-xs text-muted-foreground tracking-wide">{s.duration}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-5">
                    {s.features.map((f, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4 md:min-w-[160px]">
                  <p className="font-heading text-4xl font-light text-foreground">${s.price}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                    className="px-10 py-3 bg-foreground text-background text-sm font-body tracking-wider rounded-full hover:shadow-[0_0_18px_rgba(0,0,0,0.2)] hover:opacity-85 transition-all duration-300">
                    {tx.bookNow}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow={tx.addonsEyebrow} title={tx.addonsTitle} subtitle={tx.addonsSubtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADDONS.map((addon, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="flex items-center justify-between py-5 px-7 bg-background border border-border rounded-sm">
                <span className="font-body text-sm text-foreground">{addon.name}</span>
                <span className="font-heading text-xl font-medium text-gold">${addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA headline={cta.readyHeadline} subtext={cta.readySubtext} buttonText={cta.buttonText} />
    </div>
  );
}