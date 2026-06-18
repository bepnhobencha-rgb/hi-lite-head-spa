import { cookies } from "next/headers";

export type Lang = "en" | "vi";

export async function getLang(): Promise<Lang> {
  const store = await cookies();
  const raw = store.get("hl-lang")?.value;
  return raw === "vi" ? "vi" : "en";
}

export const t = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      promotions: "Promotions",
      gallery: "Gallery",
      about: "About",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      giftCards: "Gift Cards",
      bookNow: "Book Now",
    },
    home: {
      heroTitle: "Reset Your Mind.",
      heroTitleItalic: "Revive Your Scalp.",
      heroSub:
        "A luxury head spa experience designed to melt stress away, detox your scalp, and restore your energy.",
      bookExperience: "Book Your Experience",
      viewServices: "View Services",
      problemsTitle: "When Life Weighs You Down",
      problemsSub:
        "Modern life is relentless. We created a space where you can finally exhale.",
      problems: [
        "Chronic stress & fatigue",
        "Head, neck & shoulder tension",
        "Oily scalp or product buildup",
        "Dull, heavy, lifeless hair",
      ],
      benefitsTitle: "What a Head Spa Restores",
      benefits: [
        { title: "Instant Stress Relief", desc: "Targeted pressure-point release dissolves tension accumulated over days." },
        { title: "Scalp Detox", desc: "Deep cleansing removes buildup and rebalances your scalp's natural ecosystem." },
        { title: "Better Circulation", desc: "Increased blood flow nourishes follicles and promotes healthier hair growth." },
        { title: "Mental Reset", desc: "Leave with a clearer head, lighter shoulders, and a restored sense of calm." },
      ],
      servicesTitle: "Signature Experiences",
      servicesSub: "Every package is a complete ritual, not just a treatment.",
      viewAll: "View All Services",
      reviewsTitle: "What Our Guests Say",
      cta: "Ready for Your Reset?",
      ctaSub:
        "Conveniently located just 10 minutes from Disneyland. Open 7 days a week.",
      ctaBook: "Book Your Visit",
    },
    services: {
      title: "Our Services",
      sub: "From your first visit to your weekly ritual — we have the perfect package.",
      addonsTitle: "Enhance Your Experience",
      addonsSub: "Personalize any service with our à la carte add-ons.",
      bookService: "Book This Service",
    },
    promotions: {
      title: "Special Offers",
      sub: "Exceptional care at exceptional value.",
      bookOffer: "Claim This Offer",
    },
    gallery: {
      title: "Inside Hi-Lite",
      sub: "A glimpse into your sanctuary.",
    },
    about: {
      title: "Our Story",
      sub: "Born from a belief that true wellness starts from the top.",
      story:
        "Hi-Lite Head Spa was founded with a simple conviction: the scalp is the foundation of hair health — and yet it's the most neglected part of any wellness routine. We set out to change that.",
      story2:
        "Located in the heart of Anaheim, our spa is a sanctuary designed to slow you down. Every detail — from our treatment formulas to the ambient lighting — is intentional. We don't just offer services. We restore people.",
      values: [
        {
          title: "Calm",
          desc: "A space deliberately designed to quiet the noise of daily life.",
        },
        {
          title: "Care",
          desc: "Every treatment is personalized to your scalp, hair type, and tension patterns.",
        },
        {
          title: "Quality",
          desc: "We use only premium, clean formulations and continuously train our therapists.",
        },
      ],
    },
    reviews: {
      title: "Guest Reviews",
      sub: "Real experiences from real guests.",
    },
    faq: {
      title: "Frequently Asked Questions",
      sub: "Everything you need to know before your visit.",
    },
    contact: {
      title: "Find Us",
      sub: "We'd love to welcome you.",
      address: "Address",
      hours: "Hours",
      phone: "Phone",
      email: "Email",
      getDirections: "Get Directions",
      bookVisit: "Book a Visit",
    },
    giftCards: {
      title: "Gift the Experience",
      sub: "Give someone the gift of pure relaxation.",
      desc: "Hi-Lite gift cards are available in any denomination and never expire. The perfect gift for anyone who deserves a break.",
      occasions: ["Birthdays", "Mother's Day", "Valentine's Day", "Anniversaries", "Corporate Wellness", "Just Because"],
      howToBuy: "How to Purchase",
      step1: "Book online and select \"Gift Card\" as your service",
      step2: "Or call us at 714-537-1075 to arrange a custom amount",
      step3: "We'll send a digital card instantly, or a physical card by mail",
      buyOnline: "Buy Gift Card Online",
    },
    common: {
      bookNow: "Book Now",
      learnMore: "Learn More",
      minutes: "min",
      from: "from",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      services: "Dịch vụ",
      promotions: "Khuyến mãi",
      gallery: "Thư viện",
      about: "Về chúng tôi",
      reviews: "Đánh giá",
      faq: "Câu hỏi",
      contact: "Liên hệ",
      giftCards: "Thẻ quà",
      bookNow: "Đặt lịch",
    },
    home: {
      heroTitle: "Thả lỏng tâm trí.",
      heroTitleItalic: "Hồi sinh da đầu.",
      heroSub:
        "Trải nghiệm head spa cao cấp giúp tan biến stress, làm sạch da đầu và phục hồi năng lượng cho bạn.",
      bookExperience: "Đặt lịch ngay",
      viewServices: "Xem dịch vụ",
      problemsTitle: "Khi cuộc sống đè nặng lên vai",
      problemsSub:
        "Nhịp sống hiện đại không ngừng. Chúng tôi tạo ra không gian để bạn thở phào.",
      problems: [
        "Stress mãn tính & mệt mỏi",
        "Căng cứng đầu, cổ & vai",
        "Da đầu nhờn hoặc tắc nghẽn",
        "Tóc xỉn màu, nặng nề, thiếu sức sống",
      ],
      benefitsTitle: "Những gì Head Spa phục hồi",
      benefits: [
        { title: "Giải tỏa stress tức thì", desc: "Massage bấm huyệt chuyên sâu tan biến căng thẳng tích tụ trong nhiều ngày." },
        { title: "Thải độc da đầu", desc: "Làm sạch sâu loại bỏ tắc nghẽn và cân bằng lại hệ sinh thái tự nhiên của da đầu." },
        { title: "Cải thiện tuần hoàn", desc: "Tăng lưu thông máu nuôi dưỡng nang tóc và thúc đẩy tóc mọc khỏe mạnh hơn." },
        { title: "Đầu óc sáng suốt", desc: "Ra về với đầu óc minh mẫn hơn, vai nhẹ nhõm hơn và cảm giác bình an được phục hồi." },
      ],
      servicesTitle: "Trải nghiệm đặc trưng",
      servicesSub: "Mỗi gói dịch vụ là một nghi thức hoàn chỉnh, không chỉ là một liệu trình.",
      viewAll: "Xem tất cả dịch vụ",
      reviewsTitle: "Khách hàng nói gì",
      cta: "Sẵn sàng để tái sinh?",
      ctaSub:
        "Chỉ cách Disneyland 10 phút. Mở cửa 7 ngày trong tuần.",
      ctaBook: "Đặt lịch thăm",
    },
    services: {
      title: "Dịch vụ của chúng tôi",
      sub: "Từ lần đầu trải nghiệm đến thói quen hàng tuần — chúng tôi có gói phù hợp cho bạn.",
      addonsTitle: "Nâng cao trải nghiệm",
      addonsSub: "Cá nhân hóa bất kỳ dịch vụ nào với các add-on tùy chọn.",
      bookService: "Đặt dịch vụ này",
    },
    promotions: {
      title: "Ưu đãi đặc biệt",
      sub: "Chăm sóc đẳng cấp với giá trị vượt trội.",
      bookOffer: "Nhận ưu đãi này",
    },
    gallery: {
      title: "Bên trong Hi-Lite",
      sub: "Một thoáng nhìn vào không gian thánh đường của bạn.",
    },
    about: {
      title: "Câu chuyện của chúng tôi",
      sub: "Ra đời từ niềm tin rằng sức khỏe thực sự bắt đầu từ trên đỉnh.",
      story:
        "Hi-Lite Head Spa được thành lập với một niềm tin đơn giản: da đầu là nền tảng của sức khỏe tóc — nhưng lại là phần bị bỏ qua nhất trong mọi quy trình chăm sóc sức khỏe. Chúng tôi quyết định thay đổi điều đó.",
      story2:
        "Tọa lạc tại trung tâm Anaheim, spa của chúng tôi là một thánh đường được thiết kế để làm chậm lại nhịp sống của bạn. Mọi chi tiết — từ công thức liệu trình đến ánh sáng xung quanh — đều có chủ đích. Chúng tôi không chỉ cung cấp dịch vụ. Chúng tôi phục hồi con người.",
      values: [
        {
          title: "Bình tĩnh",
          desc: "Không gian được thiết kế có chủ đích để làm lặng đi tiếng ồn của cuộc sống hàng ngày.",
        },
        {
          title: "Tận tâm",
          desc: "Mọi liệu trình đều được cá nhân hóa theo da đầu, loại tóc và vùng căng cứng của bạn.",
        },
        {
          title: "Chất lượng",
          desc: "Chúng tôi chỉ sử dụng các sản phẩm cao cấp, sạch và liên tục đào tạo đội ngũ trị liệu viên.",
        },
      ],
    },
    reviews: {
      title: "Đánh giá từ khách hàng",
      sub: "Trải nghiệm thực từ những vị khách thực sự.",
    },
    faq: {
      title: "Câu hỏi thường gặp",
      sub: "Mọi thứ bạn cần biết trước khi đến thăm.",
    },
    contact: {
      title: "Tìm chúng tôi",
      sub: "Chúng tôi rất vui được chào đón bạn.",
      address: "Địa chỉ",
      hours: "Giờ mở cửa",
      phone: "Điện thoại",
      email: "Email",
      getDirections: "Xem chỉ đường",
      bookVisit: "Đặt lịch thăm",
    },
    giftCards: {
      title: "Tặng trải nghiệm",
      sub: "Trao tặng món quà thư giãn thuần túy.",
      desc: "Thẻ quà Hi-Lite có giá trị bất kỳ và không bao giờ hết hạn. Món quà hoàn hảo cho bất kỳ ai xứng đáng được nghỉ ngơi.",
      occasions: ["Sinh nhật", "Ngày của Mẹ", "Valentine", "Kỷ niệm ngày cưới", "Phúc lợi doanh nghiệp", "Tặng vì yêu thôi"],
      howToBuy: "Cách mua",
      step1: "Đặt lịch online và chọn \"Thẻ quà\" là dịch vụ",
      step2: "Hoặc gọi cho chúng tôi tại 714-537-1075 để sắp xếp mệnh giá tùy chỉnh",
      step3: "Chúng tôi sẽ gửi thẻ kỹ thuật số ngay lập tức hoặc thẻ vật lý qua đường bưu điện",
      buyOnline: "Mua thẻ quà online",
    },
    common: {
      bookNow: "Đặt lịch",
      learnMore: "Tìm hiểu thêm",
      minutes: "phút",
      from: "từ",
    },
  },
} as const;

// Use a mapped type so both en and vi are assignable
export type Translations = {
  nav: { home: string; services: string; promotions: string; gallery: string; about: string; reviews: string; faq: string; contact: string; giftCards: string; bookNow: string };
  home: { heroTitle: string; heroTitleItalic: string; heroSub: string; bookExperience: string; viewServices: string; problemsTitle: string; problemsSub: string; problems: readonly string[]; benefitsTitle: string; benefits: readonly { title: string; desc: string }[]; servicesTitle: string; servicesSub: string; viewAll: string; reviewsTitle: string; cta: string; ctaSub: string; ctaBook: string };
  services: { title: string; sub: string; addonsTitle: string; addonsSub: string; bookService: string };
  promotions: { title: string; sub: string; bookOffer: string };
  gallery: { title: string; sub: string };
  about: { title: string; sub: string; story: string; story2: string; values: readonly { title: string; desc: string }[] };
  reviews: { title: string; sub: string };
  faq: { title: string; sub: string };
  contact: { title: string; sub: string; address: string; hours: string; phone: string; email: string; getDirections: string; bookVisit: string };
  giftCards: { title: string; sub: string; desc: string; occasions: readonly string[]; howToBuy: string; step1: string; step2: string; step3: string; buyOnline: string };
  common: { bookNow: string; learnMore: string; minutes: string; from: string };
};
