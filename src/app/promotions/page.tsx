import type { Metadata } from "next";
import { CalendarDays, Tag } from "lucide-react";
import { getLang, t } from "@/lib/i18n";
import { SALON, PROMOTIONS } from "@/config/salon";

export const metadata: Metadata = {
  title: "Promotions",
  description: "Special offers at Hi-Lite Head Spa — first visit discounts, group packages, and social media rewards.",
};

export default async function PromotionsPage() {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <div className="bg-hl-cream min-h-screen">
      <div className="bg-hl-dark px-4 pb-20 pt-32 text-center">
        <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          {tr.promotions.title}
        </h1>
        <p className="mt-4 text-sm text-white/50">{tr.promotions.sub}</p>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {PROMOTIONS.map((promo, i) => (
            <div
              key={promo.id}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm"
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-hl-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-hl-muted">
                <Tag size={10} />
                {promo.badge}
              </span>

              <h2 className="mt-4 font-serif text-2xl font-semibold text-hl-black">
                {promo.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-hl-muted">
                {promo.description}
              </p>

              {/* Pricing */}
              <div className="mt-6">
                {"original" in promo ? (
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-4xl font-semibold text-hl-black">
                      ${promo.discounted}
                    </span>
                    <span className="text-sm text-hl-muted line-through">
                      ${promo.original}
                    </span>
                  </div>
                ) : (
                  <span className="font-serif text-2xl font-semibold text-hl-gold">
                    {promo.discount}
                  </span>
                )}
              </div>

              <a
                href={SALON.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-hl-gold py-3 text-sm font-semibold text-hl-black transition-all hover:bg-hl-gold-light"
              >
                <CalendarDays size={14} />
                {tr.promotions.bookOffer}
              </a>

              {/* Decorative corner */}
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-hl-cream/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
