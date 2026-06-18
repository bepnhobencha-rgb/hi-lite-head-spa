import type { Metadata } from "next";
import { Gift, CheckCircle } from "lucide-react";
import { getLang, t } from "@/lib/i18n";
import { SALON } from "@/config/salon";

export const metadata: Metadata = {
  title: "Gift Cards",
  description: "Give the gift of Hi-Lite Head Spa — gift cards available in any denomination, perfect for any occasion.",
};

export default async function GiftCardsPage() {
  const lang = await getLang();
  const tr = t[lang];
  const gc = tr.giftCards;

  return (
    <div className="bg-hl-cream min-h-screen">
      {/* Header */}
      <div className="bg-hl-dark px-4 pb-20 pt-32 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hl-gold/20">
            <Gift size={28} className="text-hl-gold" />
          </div>
        </div>
        <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          {gc.title}
        </h1>
        <p className="mt-4 text-sm text-white/50 max-w-lg mx-auto">{gc.sub}</p>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Description */}
          <div>
            <div className="rounded-2xl bg-hl-black p-8 text-white">
              <p className="font-serif text-4xl font-semibold text-hl-gold">♦</p>
              <h2 className="mt-4 font-serif text-2xl font-semibold">
                {gc.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{gc.desc}</p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-hl-gold mb-3">
                  Perfect for
                </p>
                <div className="flex flex-wrap gap-2">
                  {gc.occasions.map((o) => (
                    <span
                      key={o}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How to buy */}
          <div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold text-hl-black">
                {gc.howToBuy}
              </h2>

              <ol className="mt-6 space-y-4">
                {[gc.step1, gc.step2, gc.step3].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle size={18} className="flex-shrink-0 text-hl-gold mt-0.5" />
                    <p className="text-sm leading-relaxed text-hl-muted">{step}</p>
                  </li>
                ))}
              </ol>

              <a
                href={SALON.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-8 flex w-full items-center justify-center gap-2 py-3.5"
              >
                <Gift size={16} />
                {gc.buyOnline}
              </a>

              <p className="mt-3 text-center text-xs text-hl-muted/60">
                Or call us: <a href={SALON.phoneHref} className="text-hl-gold hover:underline">{SALON.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
