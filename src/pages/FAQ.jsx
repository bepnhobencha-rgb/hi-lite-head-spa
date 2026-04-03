import React from "react";
import { IMAGES, BOOKING_URL } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

export default function FAQ() {
  const { lang } = useLang();
  const tx = t[lang].faq;
  const cta = t[lang].cta;

  return (
    <div>
      <section className="relative h-80 md:h-[520px] flex items-end overflow-hidden">
        <img src="https://media.base44.com/images/public/69ca33f058b56f86689a61f3/71cf17578_Unknown-63.jpg" alt="Head spa treatment" className="absolute inset-0 w-full h-full object-cover object-center" style={{ filter: "brightness(0.92) contrast(1.12) saturate(1.18) sepia(0.14) hue-rotate(-4deg)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">{tx.heroTitle}</h1>
        </div>
      </section>

      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow={tx.sectionEyebrow} title={tx.sectionTitle} />
          <Accordion type="single" collapsible className="space-y-3">
            {tx.questions.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-sm px-7">
                <AccordionTrigger className="font-body text-sm text-foreground py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <BookingCTA headline={cta.questionsHeadline} subtext={cta.questionsSubtext} buttonText={cta.questionsButton} />
    </div>
  );
}