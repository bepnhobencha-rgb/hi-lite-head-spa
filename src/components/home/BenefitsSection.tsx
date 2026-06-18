import type { Translations } from "@/lib/i18n";

const ICONS = ["✦", "◈", "◉", "✧"];

export function BenefitsSection({ tr }: { tr: Translations["home"] }) {
  return (
    <section className="bg-hl-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="section-title">{tr.benefitsTitle}</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tr.benefits.map((b, i) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-hl-cream-dark bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-hl-gold/10"
            >
              <p className="mb-4 font-serif text-2xl text-hl-gold">{ICONS[i]}</p>
              <h3 className="font-serif text-lg font-semibold text-hl-black">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hl-muted">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
