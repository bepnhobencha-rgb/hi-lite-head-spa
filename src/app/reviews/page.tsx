import type { Metadata } from "next";
import { Star } from "lucide-react";
import { getLang, t } from "@/lib/i18n";
import { REVIEWS, SALON } from "@/config/salon";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What guests say about Hi-Lite Head Spa — 5-star luxury head spa experiences in Anaheim, CA.",
};

export default async function ReviewsPage() {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <div className="bg-hl-cream min-h-screen">
      <div className="bg-hl-black px-4 pb-20 pt-32 text-center">
        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className="fill-hl-gold text-hl-gold" />
          ))}
        </div>
        <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          {tr.reviews.title}
        </h1>
        <p className="mt-4 text-sm text-white/50">{tr.reviews.sub}</p>
        <p className="mt-2 text-xs text-hl-gold/60 uppercase tracking-widest">
          5.0 · {REVIEWS.length} reviews
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-hl-gold text-hl-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-hl-muted">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-hl-cream-dark pt-4">
                <p className="text-sm font-semibold text-hl-black">{r.name}</p>
                <p className="text-xs text-hl-muted/60">{r.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-hl-black p-10 text-center text-white">
          <h2 className="font-serif text-2xl font-semibold">
            Experience it yourself
          </h2>
          <p className="mt-2 text-sm text-white/50">
            Join hundreds of guests who have found their reset at Hi-Lite.
          </p>
          <a
            href={SALON.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-6 inline-flex"
          >
            {tr.nav.bookNow}
          </a>
        </div>
      </div>
    </div>
  );
}
