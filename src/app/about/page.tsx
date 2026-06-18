import type { Metadata } from "next";
import Image from "next/image";
import { getLang, t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Hi-Lite Head Spa — born from a belief that true wellness starts from the top.",
};

export default async function AboutPage() {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <div className="bg-hl-cream min-h-screen">
      {/* Hero */}
      <div className="relative h-80 overflow-hidden md:h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80"
          alt="Hi-Lite Head Spa interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hl-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 text-center text-white px-4">
          <h1 className="font-serif text-4xl font-semibold md:text-5xl lg:text-6xl">
            {tr.about.title}
          </h1>
          <p className="mt-3 text-sm text-white/60 max-w-md">{tr.about.sub}</p>
        </div>
      </div>

      {/* Story */}
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-base leading-relaxed text-hl-muted">{tr.about.story}</p>
            <p className="mt-4 text-base leading-relaxed text-hl-muted">{tr.about.story2}</p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=80"
              alt="Hi-Lite therapist"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="grid gap-6 md:grid-cols-3">
            {tr.about.values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl bg-hl-black p-8 text-white"
              >
                <p className="font-serif text-4xl font-semibold text-hl-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
