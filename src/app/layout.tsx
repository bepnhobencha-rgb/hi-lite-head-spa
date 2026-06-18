import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookBar } from "@/components/layout/MobileBookBar";
import { getLang, t } from "@/lib/i18n";
import { SALON } from "@/config/salon";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const tr = t[lang];
  const description =
    lang === "vi"
      ? "Head spa cao cấp tại Anaheim, CA. Thải độc da đầu, giảm căng thẳng và thư giãn sâu. Đặt lịch ngay hôm nay."
      : "A luxury head spa experience in Anaheim, CA. Scalp detox, stress relief, and deep relaxation. Book your ritual today.";

  return {
    title: {
      default: `${SALON.name} | ${SALON.tagline}`,
      template: `%s | ${SALON.name}`,
    },
    description,
    metadataBase: new URL(SALON.website),
    openGraph: {
      type: "website",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      url: SALON.website,
      siteName: SALON.name,
      title: `${SALON.name} | ${SALON.tagline}`,
      description,
      images: [
        {
          url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80",
          width: 1200,
          height: 630,
          alt: SALON.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SALON.name} | ${SALON.tagline}`,
      description,
      images: ["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80"],
    },
    alternates: {
      canonical: SALON.website,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SALON.name,
  description:
    "Luxury head spa in Anaheim, CA offering scalp detox, deep massage, and relaxation treatments.",
  url: SALON.website,
  telephone: SALON.phone,
  email: SALON.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "9832 Katella Ave",
    addressLocality: "Anaheim",
    addressRegion: "CA",
    postalCode: "92804",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SALON.geo.lat,
    longitude: SALON.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80",
  sameAs: [SALON.social.instagram, SALON.social.facebook, SALON.social.tiktok],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLang();
  const tr = t[lang];

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar lang={lang} tr={tr.nav} />
        <main>{children}</main>
        <Footer lang={lang} tr={tr} />
        <MobileBookBar label={tr.common.bookNow} bookingUrl={SALON.bookingUrl} />
      </body>
    </html>
  );
}
