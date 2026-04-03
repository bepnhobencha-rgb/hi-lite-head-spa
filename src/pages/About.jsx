import React from "react";
import { motion } from "framer-motion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function About() {
  const { lang } = useLang();
  const tx = t[lang].about;
  const cta = t[lang].cta;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[520px] flex items-end overflow-hidden">
        <img src="https://media.base44.com/images/public/69ca33f058b56f86689a61f3/e4325b2c5_Unknown-37.jpg" alt="HI-LITE HEAD SPA interior" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">
            {tx.heroTitle} {BUSINESS.name}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">{tx.philosophyEyebrow}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-wide mb-8">
              {tx.philosophyTitle1} <br /><span className="italic">{tx.philosophyTitle2}</span>
            </h2>
            <div className="space-y-5 font-body text-sm text-muted-foreground leading-relaxed">
              <p>{tx.p1}</p>
              <p>{tx.p2}</p>
              <p>{tx.p3}</p>
              <p>{tx.p4}</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <img src={IMAGES.interior} alt="Inside HI-LITE HEAD SPA" className="w-full h-[480px] object-cover rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow={tx.valuesEyebrow} title={tx.valuesTitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tx.values.map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="text-center p-10 border border-border rounded-sm">
                <div className="w-8 h-px bg-gold mx-auto mb-6" />
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4 italic">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA headline={cta.differenceHeadline} subtext={cta.differenceSubtext} buttonText={cta.buttonText} />
    </div>
  );
}