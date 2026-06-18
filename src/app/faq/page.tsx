import type { Metadata } from "next";
import { getLang, t } from "@/lib/i18n";
import { FAQS } from "@/config/salon";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Hi-Lite Head Spa — what to expect, booking, treatments, and more.",
};

export default async function FaqPage() {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <div className="bg-hl-cream min-h-screen">
      <div className="bg-hl-dark px-4 pb-20 pt-32 text-center">
        <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          {tr.faq.title}
        </h1>
        <p className="mt-4 text-sm text-white/50 max-w-md mx-auto">{tr.faq.sub}</p>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <FaqAccordion items={FAQS} />
      </div>
    </div>
  );
}
