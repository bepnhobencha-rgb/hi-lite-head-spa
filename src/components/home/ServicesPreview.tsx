import Link from "next/link";
import { SALON, SERVICES } from "@/config/salon";
import type { Translations } from "@/lib/i18n";

export function ServicesPreview({ tr }: { tr: Translations["home"] }) {
  const preview = SERVICES.slice(0, 3);

  return (
    <section className="bg-hl-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              {tr.servicesTitle}
            </h2>
            <p className="mt-2 text-sm text-white/50">{tr.servicesSub}</p>
          </div>
          <Link
            href="/services"
            className="text-xs font-semibold uppercase tracking-widest text-hl-gold transition-colors hover:text-hl-gold-light"
          >
            {tr.viewAll} →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {preview.map((svc) => (
            <div
              key={svc.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:border-hl-gold/30 hover:bg-white/8"
            >
              {svc.badge && (
                <span className="mb-4 inline-block rounded-full bg-hl-gold/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-hl-gold">
                  {svc.badge}
                </span>
              )}
              <h3 className="font-serif text-xl font-semibold text-white">
                {svc.name}
              </h3>
              <p className="mt-1 text-xs text-white/40">{svc.duration}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {svc.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-serif text-2xl font-semibold text-hl-gold">
                  ${svc.price}
                </span>
                <a
                  href={SALON.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-hl-gold/40 px-4 py-1.5 text-xs font-medium text-hl-gold transition-all hover:border-hl-gold hover:bg-hl-gold/10"
                >
                  Book →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
