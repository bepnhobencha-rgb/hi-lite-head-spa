import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getLang, t } from "@/lib/i18n";
import { SALON } from "@/config/salon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit Hi-Lite Head Spa at 9832 Katella Ave, Anaheim, CA. Open daily 9am–7pm. Call 714-537-1075.",
};

export default async function ContactPage() {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <div className="bg-hl-cream min-h-screen">
      <div className="bg-hl-black px-4 pb-20 pt-32 text-center">
        <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          {tr.contact.title}
        </h1>
        <p className="mt-4 text-sm text-white/50">{tr.contact.sub}</p>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-5">
            <div className="rounded-2xl bg-white p-7 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hl-cream">
                  <MapPin size={18} className="text-hl-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-hl-muted">
                    {tr.contact.address}
                  </p>
                  <p className="mt-1 text-sm text-hl-black">{SALON.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(SALON.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs text-hl-gold hover:underline"
                  >
                    {tr.contact.getDirections} →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hl-cream">
                  <Clock size={18} className="text-hl-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-hl-muted">
                    {tr.contact.hours}
                  </p>
                  <p className="mt-1 text-sm text-hl-black">{SALON.hours}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hl-cream">
                  <Phone size={18} className="text-hl-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-hl-muted">
                    {tr.contact.phone}
                  </p>
                  <a
                    href={SALON.phoneHref}
                    className="mt-1 block text-sm text-hl-black hover:text-hl-gold"
                  >
                    {SALON.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hl-cream">
                  <Mail size={18} className="text-hl-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-hl-muted">
                    {tr.contact.email}
                  </p>
                  <a
                    href={`mailto:${SALON.email}`}
                    className="mt-1 block text-sm text-hl-black hover:text-hl-gold break-all"
                  >
                    {SALON.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={SALON.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex w-full items-center justify-center py-4"
            >
              {tr.contact.bookVisit}
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-sm h-[450px] md:h-auto">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(SALON.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hi-Lite Head Spa location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
