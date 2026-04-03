import React from "react";
import { motion } from "framer-motion";
import { BOOKING_URL, IMAGES, BUSINESS } from "@/lib/constants";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Booking() {
  const { lang } = useLang();
  const tx = t[lang].booking;

  const steps = [
    { num: "01", title: tx.step1Title, desc: tx.step1Desc },
    { num: "02", title: tx.step2Title, desc: tx.step2Desc },
    { num: "03", title: tx.step3Title, desc: tx.step3Desc },
  ];

  return (
    <div>
      <section className="relative h-80 md:h-[520px] flex items-end overflow-hidden">
        <img src="https://media.base44.com/images/public/69ca33f058b56f86689a61f3/2e7ba2778_Unknown-29.jpg" alt="Book your head spa" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">{tx.heroTitle}</h1>
        </div>
      </section>

      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {steps.map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                className="p-10 bg-card border border-border rounded-sm">
                <span className="font-heading text-4xl font-light text-gold/40">{step.num}</span>
                <h3 className="font-heading text-xl font-medium text-foreground mt-5 mb-3">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block px-16 py-4 bg-foreground text-background text-sm font-body font-medium tracking-widest rounded-full hover:shadow-[0_0_22px_rgba(0,0,0,0.2)] hover:opacity-85 transition-all duration-300">
              {tx.bookOnline}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground tracking-wide mb-5">
              {tx.assuranceTitle}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              {tx.assuranceText} <a href={`tel:${BUSINESS.phone}`} className="underline">{BUSINESS.phone}</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}