import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { getLang, t } from "@/lib/i18n";
import { SALON, SERVICES, ADDONS } from "@/config/salon";

export const metadata: Metadata = {
  title: "Services",
  description: "Hi-Lite Head Spa signature services — from 60-minute Classic to 110-minute VVIP ritual. Scalp detox, deep massage, LED therapy and more.",
};

export default async function ServicesPage() {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <div className="bg-hl-cream min-h-screen">
      {/* Header */}
      <div className="bg-hl-black px-4 pb-20 pt-32 text-center">
        <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
          {tr.services.title}
        </h1>
        <p className="mt-4 text-sm text-white/50 max-w-lg mx-auto">{tr.services.sub}</p>
      </div>

      {/* Services grid */}
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                i === 0
                  ? "bg-hl-black text-white md:col-span-2 lg:col-span-1"
                  : "bg-white"
              }`}
            >
              {svc.badge && (
                <span
                  className={`mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${
                    i === 0
                      ? "bg-hl-gold/20 text-hl-gold"
                      : "bg-hl-cream text-hl-muted"
                  }`}
                >
                  {svc.badge}
                </span>
              )}
              <h2
                className={`font-serif text-xl font-semibold ${
                  i === 0 ? "text-white" : "text-hl-black"
                }`}
              >
                {svc.name}
              </h2>
              <p
                className={`mt-1 text-xs ${
                  i === 0 ? "text-white/40" : "text-hl-muted/60"
                }`}
              >
                {svc.duration}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  i === 0 ? "text-white/60" : "text-hl-muted"
                }`}
              >
                {svc.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span
                  className={`font-serif text-3xl font-semibold ${
                    i === 0 ? "text-hl-gold" : "text-hl-black"
                  }`}
                >
                  ${svc.price}
                </span>
                <a
                  href={SALON.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    i === 0
                      ? "bg-hl-gold text-hl-black hover:bg-hl-gold-light"
                      : "border border-hl-gold/40 text-hl-gold hover:border-hl-gold hover:bg-hl-gold/10"
                  }`}
                >
                  <CalendarDays size={12} />
                  {tr.services.bookService}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl font-semibold text-hl-black">
            {tr.services.addonsTitle}
          </h2>
          <p className="mt-2 text-sm text-hl-muted">{tr.services.addonsSub}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ADDONS.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm"
              >
                <span className="text-sm text-hl-black">{addon.name}</span>
                <span className="font-serif text-lg font-semibold text-hl-gold">
                  +${addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
