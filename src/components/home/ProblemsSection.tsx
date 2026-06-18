import Image from "next/image";
import type { Translations } from "@/lib/i18n";

export function ProblemsSection({ tr }: { tr: Translations["home"] }) {
  return (
    <section className="bg-hl-dark">
      <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2">
        {/* Image side */}
        <div className="relative h-64 md:h-auto min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1590080874088-eec64895b423?w=900&q=80"
            alt="Relaxation and stress relief"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-hl-black/30" />
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            {tr.problemsTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/50 max-w-sm">
            {tr.problemsSub}
          </p>

          <ul className="mt-8 space-y-4">
            {tr.problems.map((problem) => (
              <li key={problem} className="flex items-center gap-3">
                <span className="h-px w-6 bg-hl-gold flex-shrink-0" />
                <span className="text-sm text-white/70">{problem}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-hl-gold">
            We have the remedy →
          </p>
        </div>
      </div>
    </section>
  );
}
