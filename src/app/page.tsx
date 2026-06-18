import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { getLang, t } from "@/lib/i18n";
import { SALON } from "@/config/salon";
import { Hero } from "@/components/home/Hero";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";

export default async function HomePage() {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <>
      <Hero tr={tr.home} />
      <ProblemsSection tr={tr.home} />
      <BenefitsSection tr={tr.home} />
      <ServicesPreview tr={tr.home} />
      <ReviewsPreview tr={tr.home} />

      {/* CTA section */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80"
          alt="Hi-Lite Head Spa ambiance"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hl-black/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">
            {tr.home.cta}
          </h2>
          <p className="mt-4 text-base text-white/60">{tr.home.ctaSub}</p>
          <a
            href={SALON.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-flex gap-2"
          >
            <CalendarDays size={16} />
            {tr.home.ctaBook}
          </a>
        </div>
      </section>
    </>
  );
}
