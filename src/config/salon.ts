export const SALON = {
  name: "Hi-Lite Head Spa",
  tagline: "Your Sanctuary for Relaxation",
  address: "9832 Katella Ave, Anaheim, CA 92804",
  phone: "714-537-1075",
  phoneHref: "tel:7145371075",
  email: "thinguyenllc2022@gmail.com",
  hours: "Mon – Sun: 9:00 AM – 7:00 PM",
  hoursShort: "Open daily 9am – 7pm",
  bookingUrl: "https://www.nailiq.ca/hilite-anaheim",
  website: "https://www.hiliteheadspa.com",
  social: {
    instagram: "https://www.instagram.com/scalpmassageoc",
    tiktok: "https://www.tiktok.com/@scalpmassageoc",
    facebook:
      "https://www.facebook.com/HiLiteHairSalon?mibextid=wwXIfr",
    instagramHandle: "@scalpmassageoc",
  },
  geo: { lat: 33.8376, lng: -117.9927 },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.0!2d-117.9927!3d33.8376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUwJzE1LjQiTiAxMTfCsDU5JzMzLjciVw!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
} as const;

export const SERVICES = [
  {
    id: "vvip",
    name: "Hi-Lite VVIP",
    duration: "110 min",
    price: 195,
    badge: "Most Experience",
    badgeColor: "gold",
    description:
      "The ultimate luxury ritual. Full scalp detox, deep tissue massage, premium hot oil treatment, LED therapy, and full-body relaxation.",
  },
  {
    id: "royal",
    name: "Hi-Lite Royal",
    duration: "90 min",
    price: 155,
    badge: "Most Popular",
    badgeColor: "cream",
    description:
      "Our signature experience. Scalp massage, detox treatment, steam therapy, and shoulder decompression. The perfect reset.",
  },
  {
    id: "deluxe",
    name: "Hi-Lite Deluxe",
    duration: "80 min",
    price: 125,
    badge: null,
    badgeColor: null,
    description:
      "A comprehensive session combining scalp treatment, deep massage, and targeted tension relief for lasting results.",
  },
  {
    id: "special",
    name: "Hi-Lite Special",
    duration: "70 min",
    price: 105,
    badge: null,
    badgeColor: null,
    description:
      "Focused scalp care and stress relief. Ideal for regular maintenance and keeping your scalp healthy between deeper sessions.",
  },
  {
    id: "classic",
    name: "Hi-Lite Classic",
    duration: "60 min",
    price: 85,
    badge: null,
    badgeColor: null,
    description:
      "Your introductory head spa experience. Scalp massage, cleanse, and targeted pressure point release.",
  },
];

export const ADDONS = [
  { name: "Eye Mask", price: 5 },
  { name: "Back / Arm / Facial / Foot / Neck Massage", price: 20 },
  { name: "Scalp Exfoliation", price: 20 },
  { name: "Hot Oil Treatment", price: 20 },
  { name: "LED Mask Therapy", price: 20 },
  { name: "Hot Stone Add-on", price: 10 },
  { name: "Premium Upgrade", price: 10 },
];

export const PROMOTIONS = [
  {
    id: "first-visit",
    title: "First Visit Special",
    description: "Try our Hi-Lite Special at a welcome rate.",
    original: 105,
    discounted: 90,
    badge: "New Guests",
  },
  {
    id: "check-in",
    title: "Check-In Reward",
    description: "Check in on social media and receive 10% off your service.",
    discount: "10% off",
    badge: "Social",
  },
  {
    id: "group-royal",
    title: "Group Royal Package",
    description: "Come with friends and each person saves on the Royal experience.",
    discount: "$20 off per person",
    badge: "Groups",
  },
  {
    id: "group-vvip",
    title: "Group VVIP Package",
    description: "Treat your group to the ultimate VVIP experience at a group rate.",
    discount: "$25 off per person",
    badge: "Groups",
  },
];

export const REVIEWS = [
  {
    name: "Jessica M.",
    rating: 5,
    text: "Absolutely incredible experience. The scalp massage alone was worth every penny — I walked out feeling like a new person. The ambiance is so calming and the staff is attentive and professional.",
    date: "March 2024",
  },
  {
    name: "Sarah L.",
    rating: 5,
    text: "I've been to many spas but Hi-Lite is in a class of its own. The head spa ritual completely melted away weeks of tension. My scalp feels healthier and my hair looks amazing.",
    date: "February 2024",
  },
  {
    name: "Emily T.",
    rating: 5,
    text: "Booked the VVIP package for my birthday and it exceeded every expectation. The staff remembered all my preferences, and the hot oil treatment left my hair silky smooth.",
    date: "January 2024",
  },
  {
    name: "Amanda R.",
    rating: 5,
    text: "Perfect place to decompress after a stressful week. The treatment room is beautiful, the products smell divine, and I fell asleep mid-massage (the best kind of compliment).",
    date: "December 2023",
  },
  {
    name: "Michelle K.",
    rating: 5,
    text: "Came in with serious scalp buildup and tension headaches. Left with a clean scalp, zero headache, and the best sleep of my life that night. Already booked my next visit.",
    date: "November 2023",
  },
  {
    name: "Tina W.",
    rating: 5,
    text: "The Royal package is my monthly treat now. The combination of scalp detox and shoulder massage targets exactly where I carry stress. Highly recommend for anyone working long hours.",
    date: "October 2023",
  },
];

export const FAQS = [
  {
    q: "What exactly is a head spa?",
    a: "A head spa is a specialized treatment combining scalp massage, deep cleansing, steam therapy, and targeted pressure-point release. It detoxifies the scalp, relieves tension, improves circulation, and promotes healthier hair growth — all while delivering deep relaxation.",
  },
  {
    q: "How long is a typical session?",
    a: "Sessions range from 60 to 110 minutes depending on the package. We recommend the Royal (90 min) for first-timers who want a complete experience without committing to the full VVIP ritual.",
  },
  {
    q: "Do I need a reservation?",
    a: "Yes, we strongly recommend booking in advance. Walk-ins are welcome based on availability, but reservations guarantee your preferred time slot.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "You'll start with a brief scalp and hair consultation. We'll then guide you through your chosen treatment in a private, serene room. Wear comfortable clothing — we provide everything else.",
  },
  {
    q: "Is head spa suitable for all hair types?",
    a: "Absolutely. Our treatments are customized for your hair type and scalp condition — whether fine or thick, dry or oily, natural or color-treated.",
  },
  {
    q: "How often should I get a head spa?",
    a: "Once a month is ideal for maintenance. If you're dealing with specific concerns like scalp buildup, excessive tension, or hair loss, we may recommend bi-weekly sessions initially.",
  },
  {
    q: "Can I book for a group or special occasion?",
    a: "Yes! We offer group packages with special pricing. Call us or book online and mention your group size — we'll arrange a private, memorable experience for your party.",
  },
  {
    q: "What products do you use?",
    a: "We use premium, salon-grade products selected for scalp health and hair vitality. All products are free from harsh sulfates and parabens. Let us know about any allergies during your consultation.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes! Gift cards are available in any denomination. They make perfect gifts for birthdays, Mother's Day, anniversaries, and corporate wellness. Purchase online or call us directly.",
  },
  {
    q: "Where are you located?",
    a: "We're at 9832 Katella Ave, Anaheim, CA 92804 — just 10 minutes from Disneyland. Free parking is available. Open Monday through Sunday, 9:00 AM to 7:00 PM.",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    alt: "Scalp massage treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
    alt: "Relaxing head spa session",
  },
  {
    src: "https://images.unsplash.com/photo-1559628129-67cf63b72248?w=800&q=80",
    alt: "Oil treatment application",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    alt: "Facial massage at spa",
  },
  {
    src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80",
    alt: "Premium scalp oil treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    alt: "Deep relaxation massage",
  },
  {
    src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
    alt: "Therapist head treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=800&q=80",
    alt: "Client relaxing after treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Luxury spa interior",
  },
  {
    src: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
    alt: "Premium treatment products",
  },
  {
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
    alt: "Serene spa room",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    alt: "Head spa ritual",
  },
];
