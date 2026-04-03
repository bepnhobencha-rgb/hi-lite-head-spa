import React from "react";
import { motion } from "framer-motion";
import { Gift, Users, Star, Sparkles } from "lucide-react";
import { PROMOTIONS, IMAGES, BOOKING_URL } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const icons = [Star, Sparkles, Users, Gift];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Promotions() {
  const { lang } = useLang();
  const tx = t[lang].promotions;
  const cta = t[lang].cta;

  return (
    <div>
      <section className="relative h-80 md:h-[520px] flex items-end overflow-hidden">
        <img src="https://media.base44.com/images/public/69ca33f058b56f86689a61f3/10d135a57_Unknown-52.jpg" alt="HI-LITE HEAD SPA promotions" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">{tx.heroTitle}</h1>
        </div>
      </section>

      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow={tx.sectionEyebrow} title={tx.sectionTitle} subtitle={tx.sectionSubtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROMOTIONS.map((promo, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-sm p-10 md:p-12 flex flex-col">
                  <Icon size={26} className="text-gold mb-5" strokeWidth={1.5} />
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-3">{promo.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{promo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-light text-gold">{promo.detail}</span>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                      className="px-8 py-3 bg-foreground text-background text-xs font-body tracking-wider rounded-full hover:shadow-[0_0_16px_rgba(0,0,0,0.2)] hover:opacity-85 transition-all duration-300">
                      {tx.bookNow}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA headline={cta.unwinding} subtext={cta.unwindingSubtext} buttonText={cta.buttonText} />
    </div>
  );
}