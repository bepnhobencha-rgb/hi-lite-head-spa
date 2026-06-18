import { Star } from "lucide-react";
import { REVIEWS } from "@/config/salon";
import type { Translations } from "@/lib/i18n";

export function ReviewsPreview({ tr }: { tr: Translations["home"] }) {
  const preview = REVIEWS.slice(0, 3);

  return (
    <section className="bg-hl-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="section-title text-center">{tr.reviewsTitle}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {preview.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-white p-7 shadow-sm shadow-hl-gold/5"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-hl-gold text-hl-gold"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-hl-muted">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm font-semibold text-hl-black">{r.name}</p>
                <p className="text-xs text-hl-muted/60">{r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
