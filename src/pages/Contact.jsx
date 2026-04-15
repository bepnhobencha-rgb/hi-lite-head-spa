import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, BOOKING_URL, IMAGES } from "@/lib/constants";
import BookingCTA from "@/components/shared/BookingCTA";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";
import { useBookingModal } from "@/lib/BookingModalContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Contact() {
  const { lang } = useLang();
  const tx = t[lang].contact;
  const cta = t[lang].cta;
  const { openBookingModal } = useBookingModal();

  const contactInfo = [
    { icon: MapPin, label: tx.labels.address, value: BUSINESS.address, href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}` },
    { icon: Phone, label: tx.labels.phone, value: BUSINESS.phone, href: `tel:${BUSINESS.phone}` },
    { icon: Mail, label: tx.labels.email, value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
    { icon: Clock, label: tx.labels.hours, value: BUSINESS.hours, href: null },
  ];

  return (
    <div>
      <section className="relative h-80 md:h-[520px] flex items-end overflow-hidden">
        <img src="https://media.base44.com/images/public/69ca33f058b56f86689a61f3/18007a3c3_Gemini_Generated_Image_529tot529tot529t.png" alt="HI-LITE HEAD SPA contact" className="absolute inset-0 w-full h-full object-cover object-center" style={{ filter: "brightness(1.05) contrast(1.04) saturate(0.82) sepia(0.08)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">{tx.heroTitle}</h1>
        </div>
      </section>

      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div {...fadeUp}>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">{tx.visitEyebrow}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-wide mb-10">
              {tx.visitTitle1} <br /><span className="italic">{tx.visitTitle2}</span>
            </h2>
            <div className="space-y-7">
              {contactInfo.map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="flex items-start gap-5 pb-7 border-b border-border">
                  <div className="p-3 bg-card rounded-sm">
                    <item.icon size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.label === tx.labels.address ? "_blank" : undefined}
                        rel={item.label === tx.labels.address ? "noopener noreferrer" : undefined}
                        className="font-body text-foreground hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} className="mt-12">
              <button onClick={openBookingModal}
                className="inline-block px-12 py-4 bg-foreground text-background text-sm font-body font-medium tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:opacity-85 transition-all duration-300">
                {tx.bookNow}
              </button>
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="rounded-sm overflow-hidden h-[420px] lg:h-full min-h-[420px]">
            <iframe title="HI-LITE HEAD SPA Location"
              src="https://maps.google.com/maps?q=9832+Katella+Ave,+Anaheim,+CA+92804&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" className="grayscale opacity-80" />
          </motion.div>
        </div>
      </section>

      <BookingCTA headline={cta.resetHeadline} subtext={cta.resetSubtext} buttonText={cta.buttonText} />
    </div>
  );
}