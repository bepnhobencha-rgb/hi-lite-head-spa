import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { IMAGES } from "@/lib/constants";
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

export default function Reviews() {
  const { lang } = useLang();
  const tx = t[lang].reviews;
  const cta = t[lang].cta;

  return (
    <div>
      <section className="relative h-80 md:h-[520px] flex items-end overflow-hidden">
        <img src="https://media.base44.com/images/public/69ca33f058b56f86689a61f3/ecf253af2_Unknown-37.jpg" alt="HI-LITE HEAD SPA reception" className="absolute inset-0 w-full h-full object-cover object-center" style={{ filter: "brightness(0.88) contrast(1.06) saturate(0.72) sepia(0.14)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">{tx.heroTitle}</h1>
        </div>
      </section>

      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow={tx.sectionEyebrow} title={tx.sectionTitle} subtitle={tx.sectionSubtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tx.items.map((r, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="bg-card border border-border rounded-sm p-10 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 italic">"{r.text}"</p>
                <p className="font-body text-sm font-medium text-foreground mt-8">— {r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA headline={cta.readyHeadline} subtext={cta.readySubtext} buttonText={cta.buttonText} />
    </div>
  );
}