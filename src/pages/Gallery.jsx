import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const galleryImages = [
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/e4325b2c5_Unknown-37.jpg", alt: "Hi-Lite Head Spa treatment room", category: "interior" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/6be749dae_Unknown-48.jpg", alt: "Hi-Lite Head Spa lobby", category: "interior" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/10d135a57_Unknown-52.jpg", alt: "Hi-Lite Head Spa reception", category: "interior" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/c3abb9392_Unknown-60.jpg", alt: "Hi-Lite Head Spa waiting area", category: "interior" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/b2e81a3ca_Unknown-49.jpg", alt: "Hi-Lite Head Spa reception desk", category: "interior" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/cdf1d7461_Unknown-61.jpg", alt: "Hi-Lite Head Spa logo sign", category: "interior" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/922f18a09_Unknown-46.jpg", alt: "Head spa scalp treatment", category: "treatment" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/1a0637449_Unknown-63.jpg", alt: "Head spa wash treatment", category: "treatment" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/962e5e8ef_Unknown-64.jpg", alt: "Relaxing massage treatment", category: "treatment" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/d1e0457e5_Unknown-38.jpg", alt: "Men head spa treatment", category: "treatment" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/95c23eefd_Unknown-39.jpg", alt: "Hi-Lite Head Spa clients", category: "treatment" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/2f666c9d2_Unknown-56.jpg", alt: "Beautiful hair result", category: "results" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/6fdd3ceca_Unknown-31.jpg", alt: "Hi-Lite spa treatment room", category: "interior" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/f5c13294c_Unknown-32.jpg", alt: "Hi-Lite hair salon area", category: "interior" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/2e7ba2778_Unknown-29.jpg", alt: "Hi-Lite team anniversary", category: "team" },
  { src: "https://media.base44.com/images/public/69ca33f058b56f86689a61f3/69d7f95f7_Unknown-30.jpg", alt: "Hi-Lite team photo", category: "team" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const { lang } = useLang();
  const tx = t[lang].gallery;

  const selectedIndex = selected !== null ? galleryImages.findIndex(img => img.src === selected.src) : -1;

  const goNext = (e) => {
    e.stopPropagation();
    const next = (selectedIndex + 1) % galleryImages.length;
    setSelected(galleryImages[next]);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    const prev = (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelected(galleryImages[prev]);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[420px] flex items-end overflow-hidden">
        <img
          src={IMAGES.interior}
          alt="HI-LITE HEAD SPA gallery"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.75) saturate(0.9)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">{tx.eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">{tx.heroTitle}</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={tx.eyebrow} title={tx.heroTitle} subtitle={tx.heroSubtitle} />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-sm group"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: "brightness(0.92) saturate(0.85) contrast(1.05)" }}
                  loading="lazy"
                />
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
            className="fixed inset-0 z-[60] bg-black/92 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={30} />
            </button>
            <button
              onClick={goPrev}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <motion.img
              key={selected.src}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[88vh] object-contain rounded-sm shadow-2xl"
              style={{ filter: "brightness(0.95) saturate(0.85) contrast(1.05)" }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={goNext}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-body text-xs text-white/40 tracking-widest">
              {selectedIndex + 1} / {galleryImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingCTA />
    </div>
  );
}