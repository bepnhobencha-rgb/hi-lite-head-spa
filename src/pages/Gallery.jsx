import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const galleryImages = [
  // Interior & Space
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/e4325b2c5_Unknown-37.jpg", alt: "HI-LITE HEAD SPA treatment room", filter: "brightness(1.05) contrast(1.05) saturate(0.85)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/d1e0457e5_Unknown-38.jpg", alt: "HI-LITE HEAD SPA reception area", filter: "brightness(1.08) contrast(1.04) saturate(0.82)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/95c23eefd_Unknown-39.jpg", alt: "HI-LITE HEAD SPA lobby", filter: "brightness(1.06) contrast(1.03) saturate(0.85)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/6be749dae_Unknown-48.jpg", alt: "HI-LITE HEAD SPA entrance", filter: "brightness(1.08) contrast(1.04) saturate(0.80)" },
  // Treatments
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/922f18a09_Unknown-46.jpg", alt: "Scalp spa treatment with ring tool", filter: "brightness(1.12) contrast(1.08) saturate(0.80) sepia(0.08)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/1a0637449_Unknown-63.jpg", alt: "Head spa wash treatment", filter: "brightness(1.06) contrast(1.06) saturate(0.88) sepia(0.05)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/962e5e8ef_Unknown-64.jpg", alt: "Relaxing massage therapy", filter: "brightness(1.05) contrast(1.05) saturate(0.82) sepia(0.08)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/10d135a57_Unknown-52.jpg", alt: "Shiny long hair treatment result", filter: "brightness(1.10) contrast(1.06) saturate(0.78)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/2f666c9d2_Unknown-56.jpg", alt: "Curly hair scalp treatment", filter: "brightness(1.15) contrast(1.10) saturate(0.70) sepia(0.10)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/e692990c5_Unknown-57.jpg", alt: "Men's scalp cleansing treatment", filter: "brightness(1.10) contrast(1.08) saturate(0.80) sepia(0.06)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/f5c13294c_Unknown-32.jpg", alt: "LED scalp treatment session", filter: "brightness(1.12) contrast(1.08) saturate(0.72) sepia(0.10)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/227e6e111_Gemini_Generated_Image_qs7xblqs7xblqs7x.png", alt: "Luxury head spa scalp massage treatment", filter: "brightness(1.08) contrast(1.04) saturate(0.78) sepia(0.12) warmth(1)" },
  // Team
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/2e7ba2778_Unknown-29.jpg", alt: "HI-LITE HEAD SPA team – Anniversary", filter: "brightness(1.06) contrast(1.05) saturate(0.82)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/69d7f95f7_Unknown-30.jpg", alt: "HI-LITE HEAD SPA team portrait", filter: "brightness(1.06) contrast(1.05) saturate(0.82)" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/6fdd3ceca_Unknown-31.jpg", alt: "HI-LITE HEAD SPA staff reception", filter: "brightness(1.08) contrast(1.04) saturate(0.83)" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const { lang } = useLang();
  const tx = t[lang].gallery;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[520px] flex items-end overflow-hidden">
        <img src={IMAGES.interior} alt="HI-LITE HEAD SPA gallery" className="absolute inset-0 w-full h-full object-cover object-center" style={{ filter: "brightness(1.05) contrast(1.04) saturate(0.82) sepia(0.08)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">{tx.heroTitle}</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow={tx.eyebrow}
            title={tx.heroTitle}
            subtitle={tx.heroSubtitle}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="cursor-pointer overflow-hidden rounded-sm aspect-[4/3]"
                onClick={() => setSelected(img)}
              >
                <img src={img.src} alt={img.alt} style={{ filter: img.filter }} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-white/80 hover:text-white">
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src}
              alt={selected.alt}
              style={{ filter: selected.filter }}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <BookingCTA />
    </div>
  );
}