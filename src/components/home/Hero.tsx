import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronDown } from "lucide-react";
import { SALON } from "@/config/salon";
import type { Translations } from "@/lib/i18n";

export function Hero({ tr }: { tr: Translations["home"] }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=85"
        alt="Hi-Lite Head Spa luxury treatment"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center text-white">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-hl-gold">
          {SALON.address}
        </p>

        <h1 className="font-serif text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
          {tr.heroTitle}
          <br />
          <em className="font-normal italic text-hl-gold">{tr.heroTitleItalic}</em>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {tr.heroSub}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={SALON.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold gap-2"
          >
            <CalendarDays size={16} />
            {tr.bookExperience}
          </a>
          <Link href="/services" className="btn-outline">
            {tr.viewServices} →
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
