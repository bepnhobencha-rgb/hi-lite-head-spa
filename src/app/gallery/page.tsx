import type { Metadata } from "next";
import Image from "next/image";
import { getLang, t } from "@/lib/i18n";
import { GALLERY_IMAGES } from "@/config/salon";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look inside Hi-Lite Head Spa — our treatment rooms, ambiance, and signature services.",
};

export default async function GalleryPage() {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <div className="bg-hl-black min-h-screen">
      <div className="px-4 pb-12 pt-32 text-center">
        <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          {tr.gallery.title}
        </h1>
        <p className="mt-4 text-sm text-white/50">{tr.gallery.sub}</p>
      </div>

      {/* Masonry-style grid */}
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="mb-4 overflow-hidden rounded-xl break-inside-avoid"
            >
              <div className={`relative w-full ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
