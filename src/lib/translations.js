const t = {
  en: {
    // Navbar
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

    // Home
    home: {
      tagline: "Your Sanctuary for Relaxation",
      heroTitle1: "Reset Your Mind.",
      heroTitle2: "Revive Your Scalp.",
      heroSubtitle: "A luxury head spa experience designed to melt stress away, detox your scalp, and restore your energy.",
      bookExperience: "Book Your Experience",
      viewServices: "View Services",
      disneylandNote: "Conveniently located just 10 minutes from Disneyland, Hi-Lite Head Spa Anaheim offers a peaceful place to relax and recharge after a long day of walking, crowds, and excitement.",
      problemEyebrow: "Sound Familiar?",
      problemTitle: "When Life Weighs You Down",
      problemSubtitle: "Modern life takes a toll on your mind and scalp. Recognize any of these?",
      problems: ["Stress and fatigue", "Head and neck tension", "Oily scalp or buildup", "Hair feeling dull or heavy"],
      benefitsEyebrow: "The Ritual",
      benefitsTitle1: "What a Head Spa",
      benefitsTitle2: "Restores",
      benefits: ["Immediate stress relief", "Scalp detox", "Better circulation", "Healthier hair", "Mental reset"],
      servicesEyebrow: "Our Rituals",
      servicesTitle: "Signature Experiences",
      servicesSubtitle: "Each session is a carefully crafted journey for your mind and scalp.",
      viewAll: "View All Services",
      bookNow: "Book Now",
    },

    // Services page
    services: {
      eyebrow: "Our Menu",
      heroTitle: "Services",
      sectionEyebrow: "Signature Rituals",
      sectionTitle: "Our Head Spa Experiences",
      sectionSubtitle: "From deep scalp detox to full relaxation rituals, every session is designed to restore balance.",
      duration: "mins",
      bookNow: "Book This Service",
      addonsEyebrow: "Enhance Your Session",
      addonsTitle: "Add-On Treatments",
      addonsSubtitle: "Customize your experience with any of our optional enhancements.",
    },

    // About page
    about: {
      eyebrow: "Our Story",
      heroTitle: "About",
      philosophyEyebrow: "Our Philosophy",
      philosophyTitle1: "More Than a Salon.",
      philosophyTitle2: "A Sanctuary.",
      p1: "HI-LITE HEAD SPA was created with a singular vision: to provide a space where you can truly let go. This is not a regular salon — it is a luxury experience focused on stress relief, scalp detox, mental reset, and deep relaxation.",
      p2: "Every ritual we offer is carefully designed to calm the mind and restore the body. From the moment you walk through our doors, you are enveloped in warmth, comfort, and care.",
      p3: "Located in the heart of Anaheim, our spa blends modern techniques with time-honored traditions to deliver an experience unlike any other. We use premium products, personalized care, and a gentle, unhurried approach that honors your need for rest.",
      p4: "Conveniently located just 10 minutes from Disneyland, Hi-Lite Head Spa Anaheim offers a peaceful place to relax and recharge after a long day of walking, crowds, and excitement.",
      valuesEyebrow: "What We Believe",
      valuesTitle: "Our Guiding Values",
      values: [
        { title: "Calm", text: "We create an environment of total serenity, where every detail supports your relaxation." },
        { title: "Care", text: "Every treatment is personalized. We listen to your needs and tailor each session just for you." },
        { title: "Quality", text: "We use only premium products and proven techniques to deliver exceptional results." },
      ],
    },

    // Reviews
    reviews: {
      eyebrow: "Kind Words",
      heroTitle: "Client Reviews",
      sectionEyebrow: "What Our Guests Say",
      sectionTitle: "Real Experiences",
      sectionSubtitle: "We are honored to be part of our guests' self-care rituals.",
      items: [
        { name: "Jessica M.", rating: 5, text: "Absolutely incredible experience! From the moment I walked in, I felt so relaxed. The scalp massage was heavenly, and my hair feels amazing. I will definitely be coming back." },
        { name: "Sarah L.", rating: 5, text: "This is not your average salon. It is truly a luxury experience. The hot stone therapy combined with the herbal treatment was life-changing. My stress just melted away." },
        { name: "Emily T.", rating: 5, text: "I got the Royal package and it was worth every penny. The staff was so attentive and professional. I left feeling like a completely new person. Highly recommend!" },
        { name: "Amanda R.", rating: 5, text: "I brought my mom here for her birthday and she absolutely loved it. The atmosphere is so calming and beautiful. The VVIP treatment is beyond amazing." },
        { name: "Michelle K.", rating: 5, text: "Best head spa in Anaheim, hands down! The Deluxe package with the foot massage add-on was the perfect way to unwind after a stressful week." },
        { name: "Tina W.", rating: 5, text: "I have been searching for a proper head spa experience and finally found it here. The Gua Sha treatment was incredibly soothing. My scalp has never felt this clean and healthy." },
      ],
    },

    // Promotions
    promotions: {
      eyebrow: "Special Offers",
      heroTitle: "Promotions",
      sectionEyebrow: "Limited Time",
      sectionTitle: "Exclusive Offers",
      sectionSubtitle: "Take advantage of our special promotions and discover the luxury of HI-LITE HEAD SPA.",
      bookNow: "Book Now",
      items: [
        { title: "First Visit Special", description: "Enjoy your first head spa experience at a special introductory rate.", detail: "$105 → $90" },
        { title: "Check-In Reward", description: "Check in on your visit and receive an exclusive reward.", detail: "10% off" },
        { title: "Group Royal Package", description: "Bring your friends for the Royal experience and save together.", detail: "$20 off per person" },
        { title: "Group VVIP Package", description: "Elevate your group experience with the VVIP ritual.", detail: "$25 off per person" },
      ],
    },

    // Gallery
    gallery: {
      eyebrow: "Our Space",
      heroTitle: "Gallery",
      heroSubtitle: "A glimpse into the serene world of HI-LITE HEAD SPA.",
    },

    // FAQ
    faq: {
      eyebrow: "Questions & Answers",
      heroTitle: "Frequently Asked Questions",
      sectionEyebrow: "We Are Here to Help",
      sectionTitle: "Common Questions",
      questions: [
        { q: "What is a head spa?", a: "A head spa is a luxury scalp and hair treatment that combines deep cleansing, massage, and nourishing therapies. It promotes relaxation, relieves stress, improves scalp health, and leaves your hair feeling revitalized." },
        { q: "How long does each session last?", a: "Our sessions range from 60 minutes (Hi Lite Classic) to 110 minutes (Hi Lite VVIP). Each service is designed to provide a thorough, unhurried experience." },
        { q: "Do I need to make a reservation?", a: "Yes, we recommend booking in advance to secure your preferred time. You can easily book through our online booking system at www.hiliteheadspa.com." },
        { q: "What should I expect during my first visit?", a: "Upon arrival, you will be welcomed into our serene space. Your specialist will discuss your needs and customize the treatment accordingly. Simply relax and enjoy the experience." },
        { q: "Is the head spa suitable for all hair types?", a: "Absolutely. Our treatments are designed for all hair types and textures. Our specialists will adjust products and techniques to best suit your individual needs." },
        { q: "What are the benefits of regular head spa visits?", a: "Regular visits promote ongoing scalp health, reduce stress, improve blood circulation, strengthen hair, and provide a consistent mental reset that supports overall well-being." },
        { q: "Do you offer group bookings?", a: "Yes! We offer special group rates for both our Royal and VVIP packages. It is a wonderful experience to share with friends, family, or coworkers." },
        { q: "What products do you use?", a: "We use premium, carefully selected products that are gentle on the scalp and effective in delivering results. Our specialists choose products based on your unique needs." },
        { q: "Do you offer gift cards?", a: "Yes, we offer gift cards for all our services. Contact us directly or purchase through our booking system. A head spa experience makes a truly special gift." },
        { q: "Where are you located?", a: "We are located at 9832 Katella Ave, Anaheim, CA 92804. We are open Monday through Sunday, 9:00 AM to 7:00 PM." },
      ],
    },

    // Contact
    contact: {
      eyebrow: "Get in Touch",
      heroTitle: "Contact Us",
      visitEyebrow: "Visit Us",
      visitTitle1: "We Would Love",
      visitTitle2: "to Hear from You",
      labels: { address: "Address", phone: "Phone", email: "Email", hours: "Hours" },
      bookNow: "Book Now",
    },

    // Booking
    booking: {
      eyebrow: "Reserve Your Spot",
      heroTitle: "Book Your Experience",
      step1Title: "Choose Your Service",
      step1Desc: "Browse our menu and select the ritual that speaks to you.",
      step2Title: "Pick a Date & Time",
      step2Desc: "Choose a day and time that works for your schedule.",
      step3Title: "Confirm & Relax",
      step3Desc: "Complete your booking and get ready to be pampered.",
      bookOnline: "Book Online Now",
      assuranceTitle: "Your Comfort is Our Priority",
      assuranceText: "If you have any questions before booking, feel free to reach us at",
    },

    // Gift Cards
    giftCards: {
      eyebrow: "Give the Gift of Relaxation",
      heroTitle: "Gift Cards",
      onlineTitle: "Purchase Online",
      onlineText: "Visit our booking page to purchase a gift card for any of our services. The perfect way to share the luxury of HI-LITE HEAD SPA with someone you love.",
      phoneTitle: "Purchase by Phone",
      phoneText: "Prefer to order by phone? Call us directly and we will help you select the perfect gift card.",
      occasionsTitle: "Perfect for Every Occasion",
      occasions: ["Birthdays", "Mother's Day", "Valentine's Day", "Anniversaries", "Corporate Gifts", "Just Because"],
      buyNow: "Buy a Gift Card",
    },

    // Booking Modal
    bookingModal: {
      title: "Before You Book",
      subtitle: "A few things to know before your visit.",
      hoursLabel: "Business Hours",
      afterHoursLabel: "Booking Outside Business Hours?",
      afterHoursText: "If you'd like to book outside of our regular hours, please call us directly at",
      afterHoursSuffix: "and we'll do our best to accommodate you.",
      proceedButton: "Proceed to Book",
    },

    // Shared CTAs
    cta: {
      readyHeadline: "Ready for Your Reset?",
      readySubtext: "Book your luxury head spa experience and let the stress melt away.",
      buttonText: "Book Your Experience",
      unwinding: "It's Time to Unwind",
      unwindingSubtext: "These offers will not last forever. Treat yourself to the relaxation you deserve.",
      resetHeadline: "Ready to Reset?",
      resetSubtext: "Your sanctuary awaits. Book your experience today.",
      differenceHeadline: "Experience the Difference",
      differenceSubtext: "Step into our sanctuary and discover what true relaxation feels like.",
      questionsHeadline: "Still Have Questions?",
      questionsSubtext: "Feel free to contact us or book a session. We are happy to help.",
      questionsButton: "Contact Us",
    },
  },

  es: {
    // Navbar
    nav: {
      home: "Inicio",
      services: "Servicios",
      promotions: "Promociones",
      gallery: "Galería",
      about: "Nosotros",
      reviews: "Reseñas",
      faq: "Preguntas",
      contact: "Contacto",
      giftCards: "Tarjetas de Regalo",
      bookNow: "Reservar",
    },

    // Home
    home: {
      tagline: "Tu Santuario de Relajación",
      heroTitle1: "Despeja Tu Mente.",
      heroTitle2: "Revitaliza Tu Cuero Cabelludo.",
      heroSubtitle: "Una experiencia de spa capilar de lujo diseñada para eliminar el estrés, desintoxicar tu cuero cabelludo y restaurar tu energía.",
      bookExperience: "Reserva Tu Experiencia",
      viewServices: "Ver Servicios",
      disneylandNote: "Convenientemente ubicados a solo 10 minutos de Disneyland, Hi-Lite Head Spa Anaheim ofrece un lugar tranquilo para relajarse y recargar energías después de un largo día.",
      problemEyebrow: "¿Te Suena Familiar?",
      problemTitle: "Cuando la Vida Te Pesa",
      problemSubtitle: "La vida moderna afecta tu mente y cuero cabelludo. ¿Reconoces alguno de estos?",
      problems: ["Estrés y fatiga", "Tensión en cabeza y cuello", "Cuero cabelludo grasoso", "Cabello apagado o pesado"],
      benefitsEyebrow: "El Ritual",
      benefitsTitle1: "Lo Que un Head Spa",
      benefitsTitle2: "Restaura",
      benefits: ["Alivio inmediato del estrés", "Desintoxicación del cuero cabelludo", "Mejor circulación", "Cabello más saludable", "Reset mental"],
      servicesEyebrow: "Nuestros Rituales",
      servicesTitle: "Experiencias Exclusivas",
      servicesSubtitle: "Cada sesión es un viaje cuidadosamente diseñado para tu mente y cuero cabelludo.",
      viewAll: "Ver Todos los Servicios",
      bookNow: "Reservar",
    },

    // Services
    services: {
      eyebrow: "Nuestro Menú",
      heroTitle: "Servicios",
      sectionEyebrow: "Rituales Exclusivos",
      sectionTitle: "Nuestras Experiencias de Spa Capilar",
      sectionSubtitle: "Desde desintoxicación profunda hasta rituales de relajación total, cada sesión está diseñada para restaurar el equilibrio.",
      duration: "mins",
      bookNow: "Reservar Este Servicio",
      addonsEyebrow: "Mejora Tu Sesión",
      addonsTitle: "Tratamientos Adicionales",
      addonsSubtitle: "Personaliza tu experiencia con nuestras mejoras opcionales.",
    },

    // About
    about: {
      eyebrow: "Nuestra Historia",
      heroTitle: "Nosotros",
      philosophyEyebrow: "Nuestra Filosofía",
      philosophyTitle1: "Más Que un Salón.",
      philosophyTitle2: "Un Santuario.",
      p1: "HI-LITE HEAD SPA fue creado con una visión singular: ofrecer un espacio donde puedas realmente soltarte. No es un salón común — es una experiencia de lujo enfocada en el alivio del estrés, la desintoxicación del cuero cabelludo, el reset mental y la relajación profunda.",
      p2: "Cada ritual que ofrecemos está cuidadosamente diseñado para calmar la mente y restaurar el cuerpo. Desde el momento en que entras por nuestras puertas, te envuelve la calidez, el confort y el cuidado.",
      p3: "Ubicados en el corazón de Anaheim, nuestro spa combina técnicas modernas con tradiciones ancestrales para ofrecer una experiencia sin igual. Usamos productos premium, atención personalizada y un enfoque suave y sin prisas que honra tu necesidad de descanso.",
      p4: "Convenientemente ubicados a solo 10 minutos de Disneyland, Hi-Lite Head Spa Anaheim ofrece un lugar tranquilo para relajarse y recargar energías después de un largo día.",
      valuesEyebrow: "Lo Que Creemos",
      valuesTitle: "Nuestros Valores",
      values: [
        { title: "Calma", text: "Creamos un ambiente de serenidad total, donde cada detalle apoya tu relajación." },
        { title: "Cuidado", text: "Cada tratamiento es personalizado. Escuchamos tus necesidades y adaptamos cada sesión para ti." },
        { title: "Calidad", text: "Usamos solo productos premium y técnicas comprobadas para brindar resultados excepcionales." },
      ],
    },

    // Reviews
    reviews: {
      eyebrow: "Palabras Amables",
      heroTitle: "Reseñas de Clientes",
      sectionEyebrow: "Lo Que Dicen Nuestros Huéspedes",
      sectionTitle: "Experiencias Reales",
      sectionSubtitle: "Nos honra ser parte del ritual de autocuidado de nuestros huéspedes.",
      items: [
        { name: "Jessica M.", rating: 5, text: "¡Una experiencia absolutamente increíble! Desde el momento en que entré, me sentí muy relajada. El masaje de cuero cabelludo fue celestial y mi cabello se siente increíble." },
        { name: "Sarah L.", rating: 5, text: "Esto no es un salón promedio. Es verdaderamente una experiencia de lujo. La terapia de piedras calientes combinada con el tratamiento herbal fue transformadora. Mi estrés simplemente desapareció." },
        { name: "Emily T.", rating: 5, text: "Tomé el paquete Royal y valió cada centavo. El personal fue muy atento y profesional. Salí sintiéndome una persona completamente nueva. ¡Lo recomiendo ampliamente!" },
        { name: "Amanda R.", rating: 5, text: "Traje a mi mamá aquí para su cumpleaños y le encantó absolutamente. El ambiente es muy calmante y hermoso. El tratamiento VVIP es simplemente extraordinario." },
        { name: "Michelle K.", rating: 5, text: "¡El mejor head spa en Anaheim, sin duda! El paquete Deluxe con el masaje de pies fue la forma perfecta de descansar después de una semana estresante." },
        { name: "Tina W.", rating: 5, text: "Estuve buscando una experiencia de head spa de verdad y finalmente la encontré aquí. El tratamiento de Gua Sha fue increíblemente relajante. Mi cuero cabelludo nunca se ha sentido tan limpio." },
      ],
    },

    // Promotions
    promotions: {
      eyebrow: "Ofertas Especiales",
      heroTitle: "Promociones",
      sectionEyebrow: "Tiempo Limitado",
      sectionTitle: "Ofertas Exclusivas",
      sectionSubtitle: "Aprovecha nuestras promociones especiales y descubre el lujo de HI-LITE HEAD SPA.",
      bookNow: "Reservar",
      items: [
        { title: "Especial Primera Visita", description: "Disfruta tu primera experiencia de head spa a una tarifa introductoria especial.", detail: "$105 → $90" },
        { title: "Recompensa de Check-In", description: "Haz check-in en tu visita y recibe una recompensa exclusiva.", detail: "10% de descuento" },
        { title: "Paquete Grupal Royal", description: "Trae a tus amigos para la experiencia Royal y ahorren juntos.", detail: "$20 de descuento por persona" },
        { title: "Paquete Grupal VVIP", description: "Eleva la experiencia grupal con el ritual VVIP.", detail: "$25 de descuento por persona" },
      ],
    },

    // Gallery
    gallery: {
      eyebrow: "Nuestro Espacio",
      heroTitle: "Galería",
      heroSubtitle: "Un vistazo al mundo sereno de HI-LITE HEAD SPA.",
    },

    // FAQ
    faq: {
      eyebrow: "Preguntas y Respuestas",
      heroTitle: "Preguntas Frecuentes",
      sectionEyebrow: "Estamos Aquí para Ayudarte",
      sectionTitle: "Preguntas Comunes",
      questions: [
        { q: "¿Qué es un head spa?", a: "Un head spa es un tratamiento de lujo para el cuero cabelludo y el cabello que combina limpieza profunda, masajes y terapias nutritivas. Promueve la relajación, alivia el estrés, mejora la salud del cuero cabelludo y deja tu cabello revitalizado." },
        { q: "¿Cuánto dura cada sesión?", a: "Nuestras sesiones van desde 60 minutos (Hi Lite Classic) hasta 110 minutos (Hi Lite VVIP). Cada servicio está diseñado para ofrecer una experiencia completa y sin prisas." },
        { q: "¿Necesito hacer una reserva?", a: "Sí, recomendamos reservar con anticipación para asegurar tu horario preferido. Puedes reservar fácilmente en www.hiliteheadspa.com." },
        { q: "¿Qué debo esperar en mi primera visita?", a: "Al llegar, serás bienvenido en nuestro espacio sereno. Tu especialista discutirá tus necesidades y personalizará el tratamiento. Simplemente relájate y disfruta la experiencia." },
        { q: "¿El head spa es adecuado para todos los tipos de cabello?", a: "Absolutamente. Nuestros tratamientos están diseñados para todos los tipos y texturas de cabello. Nuestros especialistas ajustarán los productos y técnicas según tus necesidades." },
        { q: "¿Cuáles son los beneficios de visitas regulares al head spa?", a: "Las visitas regulares promueven la salud del cuero cabelludo, reducen el estrés, mejoran la circulación, fortalecen el cabello y proporcionan un reset mental constante." },
        { q: "¿Ofrecen reservas grupales?", a: "¡Sí! Ofrecemos tarifas especiales para grupos en nuestros paquetes Royal y VVIP. Es una experiencia maravillosa para compartir con amigos, familia o compañeros." },
        { q: "¿Qué productos utilizan?", a: "Usamos productos premium cuidadosamente seleccionados, suaves para el cuero cabelludo y efectivos para dar resultados. Los especialistas eligen los productos según tus necesidades únicas." },
        { q: "¿Ofrecen tarjetas de regalo?", a: "Sí, ofrecemos tarjetas de regalo para todos nuestros servicios. Contáctanos directamente o compra a través de nuestro sistema de reservas. Una experiencia de head spa es un regalo verdaderamente especial." },
        { q: "¿Dónde están ubicados?", a: "Estamos ubicados en 9832 Katella Ave, Anaheim, CA 92804. Abiertos de lunes a domingo, 9:00 AM a 7:00 PM." },
      ],
    },

    // Contact
    contact: {
      eyebrow: "Contáctanos",
      heroTitle: "Contacto",
      visitEyebrow: "Visítanos",
      visitTitle1: "Nos Encantaría",
      visitTitle2: "Saber de Ti",
      labels: { address: "Dirección", phone: "Teléfono", email: "Correo", hours: "Horario" },
      bookNow: "Reservar",
    },

    // Booking
    booking: {
      eyebrow: "Reserva Tu Lugar",
      heroTitle: "Reserva Tu Experiencia",
      step1Title: "Elige Tu Servicio",
      step1Desc: "Navega por nuestro menú y selecciona el ritual que más te convenga.",
      step2Title: "Elige Fecha y Hora",
      step2Desc: "Elige el día y la hora que mejor se adapte a tu horario.",
      step3Title: "Confirma y Relájate",
      step3Desc: "Completa tu reserva y prepárate para ser mimado.",
      bookOnline: "Reservar en Línea",
      assuranceTitle: "Tu Comodidad es Nuestra Prioridad",
      assuranceText: "Si tienes preguntas antes de reservar, comunícate con nosotros al",
    },

    // Gift Cards
    giftCards: {
      eyebrow: "El Regalo de la Relajación",
      heroTitle: "Tarjetas de Regalo",
      onlineTitle: "Compra en Línea",
      onlineText: "Visita nuestra página de reservas para comprar una tarjeta de regalo para cualquiera de nuestros servicios. La forma perfecta de compartir el lujo de HI-LITE HEAD SPA con alguien especial.",
      phoneTitle: "Compra por Teléfono",
      phoneText: "¿Prefieres ordenar por teléfono? Llámanos directamente y te ayudaremos a elegir la tarjeta de regalo perfecta.",
      occasionsTitle: "Perfecta para Toda Ocasión",
      occasions: ["Cumpleaños", "Día de las Madres", "San Valentín", "Aniversarios", "Regalos Corporativos", "Sin Razón Especial"],
      buyNow: "Comprar Tarjeta de Regalo",
    },

    // Booking Modal
    bookingModal: {
      title: "Antes de Reservar",
      subtitle: "Algunas cosas que debes saber antes de tu visita.",
      hoursLabel: "Horario de Atención",
      afterHoursLabel: "¿Reservar Fuera del Horario?",
      afterHoursText: "Si deseas reservar fuera de nuestro horario regular, llámanos directamente al",
      afterHoursSuffix: "y haremos lo posible por atenderte.",
      proceedButton: "Continuar y Reservar",
    },

    // Shared CTAs
    cta: {
      readyHeadline: "¿Listo para Tu Reset?",
      readySubtext: "Reserva tu experiencia de lujo y deja que el estrés desaparezca.",
      buttonText: "Reserva Tu Experiencia",
      unwinding: "Es Hora de Relajarse",
      unwindingSubtext: "Estas ofertas no durarán para siempre. Date el descanso que mereces.",
      resetHeadline: "¿Listo para Reiniciarte?",
      resetSubtext: "Tu santuario te espera. Reserva hoy.",
      differenceHeadline: "Vive la Diferencia",
      differenceSubtext: "Entra a nuestro santuario y descubre lo que es la relajación verdadera.",
      questionsHeadline: "¿Aún Tienes Preguntas?",
      questionsSubtext: "Contáctanos o reserva una sesión. Estamos felices de ayudarte.",
      questionsButton: "Contáctanos",
    },
  },

  vi: {
    // Navbar
    nav: {
      home: "Trang Chủ",
      services: "Dịch Vụ",
      promotions: "Khuyến Mãi",
      gallery: "Hình Ảnh",
      about: "Giới Thiệu",
      reviews: "Đánh Giá",
      faq: "Câu Hỏi",
      contact: "Liên Hệ",
      giftCards: "Thẻ Quà Tặng",
      bookNow: "Đặt Lịch",
    },

    // Home
    home: {
      tagline: "Không Gian Thư Giãn Của Bạn",
      heroTitle1: "Tái Tạo Tinh Thần.",
      heroTitle2: "Phục Hồi Da Đầu.",
      heroSubtitle: "Trải nghiệm spa đầu cao cấp giúp xua tan căng thẳng, thanh lọc da đầu và phục hồi năng lượng cho bạn.",
      bookExperience: "Đặt Lịch Ngay",
      viewServices: "Xem Dịch Vụ",
      disneylandNote: "Tọa lạc chỉ cách Disneyland 10 phút, Hi-Lite Head Spa Anaheim là nơi lý tưởng để thư giãn và nạp lại năng lượng sau một ngày dài đi bộ và vui chơi.",
      problemEyebrow: "Bạn Có Gặp Phải?",
      problemTitle: "Khi Cuộc Sống Khiến Bạn Mệt Mỏi",
      problemSubtitle: "Cuộc sống hiện đại ảnh hưởng đến tâm trí và da đầu của bạn. Bạn có nhận ra điều này?",
      problems: ["Căng thẳng và mệt mỏi", "Đau đầu và cứng cổ vai", "Da đầu nhờn hoặc bết bẩn", "Tóc xỉn màu và nặng nề"],
      benefitsEyebrow: "Liệu Trình",
      benefitsTitle1: "Những Gì Spa Đầu",
      benefitsTitle2: "Mang Lại",
      benefits: ["Giảm căng thẳng tức thì", "Thanh lọc da đầu", "Cải thiện tuần hoàn máu", "Tóc khỏe mạnh hơn", "Tái tạo tinh thần"],
      servicesEyebrow: "Liệu Trình Của Chúng Tôi",
      servicesTitle: "Trải Nghiệm Đặc Trưng",
      servicesSubtitle: "Mỗi buổi trị liệu là một hành trình được thiết kế tỉ mỉ cho tâm trí và da đầu của bạn.",
      viewAll: "Xem Tất Cả Dịch Vụ",
      bookNow: "Đặt Lịch",
    },

    // Services
    services: {
      eyebrow: "Thực Đơn Dịch Vụ",
      heroTitle: "Dịch Vụ",
      sectionEyebrow: "Liệu Trình Đặc Trưng",
      sectionTitle: "Trải Nghiệm Spa Đầu",
      sectionSubtitle: "Từ thanh lọc da đầu chuyên sâu đến các nghi lễ thư giãn toàn diện, mỗi buổi trị liệu đều được thiết kế để khôi phục sự cân bằng.",
      duration: "phút",
      bookNow: "Đặt Lịch Dịch Vụ Này",
      addonsEyebrow: "Nâng Cao Trải Nghiệm",
      addonsTitle: "Dịch Vụ Bổ Sung",
      addonsSubtitle: "Tùy chỉnh trải nghiệm của bạn với các dịch vụ bổ sung tùy chọn của chúng tôi.",
    },

    // About
    about: {
      eyebrow: "Câu Chuyện Của Chúng Tôi",
      heroTitle: "Giới Thiệu",
      philosophyEyebrow: "Triết Lý Của Chúng Tôi",
      philosophyTitle1: "Hơn Cả Một Salon.",
      philosophyTitle2: "Một Thánh Đường.",
      p1: "HI-LITE HEAD SPA được tạo ra với một tầm nhìn duy nhất: cung cấp không gian để bạn thực sự buông bỏ. Đây không phải là một salon thông thường — đây là trải nghiệm cao cấp tập trung vào giảm căng thẳng, thanh lọc da đầu, tái tạo tinh thần và thư giãn sâu.",
      p2: "Mỗi liệu trình chúng tôi cung cấp được thiết kế cẩn thận để xoa dịu tâm trí và phục hồi cơ thể. Ngay từ khoảnh khắc bước vào cửa, bạn sẽ được bao bọc trong hơi ấm, sự thoải mái và quan tâm chăm sóc.",
      p3: "Tọa lạc tại trung tâm Anaheim, spa của chúng tôi kết hợp các kỹ thuật hiện đại với truyền thống lâu đời để mang lại trải nghiệm độc đáo. Chúng tôi sử dụng sản phẩm cao cấp, chăm sóc cá nhân hóa và phương pháp nhẹ nhàng, không vội vã, tôn trọng nhu cầu nghỉ ngơi của bạn.",
      p4: "Tọa lạc chỉ cách Disneyland 10 phút, Hi-Lite Head Spa Anaheim là nơi lý tưởng để thư giãn và nạp lại năng lượng sau một ngày dài.",
      valuesEyebrow: "Điều Chúng Tôi Tin",
      valuesTitle: "Giá Trị Cốt Lõi",
      values: [
        { title: "Bình Yên", text: "Chúng tôi tạo ra môi trường hoàn toàn thanh thản, nơi mọi chi tiết đều hỗ trợ sự thư giãn của bạn." },
        { title: "Quan Tâm", text: "Mỗi liệu trình đều được cá nhân hóa. Chúng tôi lắng nghe nhu cầu của bạn và điều chỉnh từng buổi trị liệu phù hợp với bạn." },
        { title: "Chất Lượng", text: "Chúng tôi chỉ sử dụng sản phẩm cao cấp và kỹ thuật đã được kiểm chứng để mang lại kết quả xuất sắc." },
      ],
    },

    // Reviews
    reviews: {
      eyebrow: "Những Lời Khen Ngợi",
      heroTitle: "Đánh Giá Của Khách Hàng",
      sectionEyebrow: "Khách Hàng Nói Gì",
      sectionTitle: "Trải Nghiệm Thực Tế",
      sectionSubtitle: "Chúng tôi trân trọng được đồng hành cùng nghi lễ chăm sóc bản thân của quý khách.",
      items: [
        { name: "Jessica M.", rating: 5, text: "Trải nghiệm tuyệt vời! Ngay từ khi bước vào, tôi đã cảm thấy rất thư giãn. Massage da đầu thực sự tuyệt vời và tóc tôi cảm thấy đáng kinh ngạc. Chắc chắn sẽ quay lại." },
        { name: "Sarah L.", rating: 5, text: "Đây không phải salon bình thường. Đây thực sự là trải nghiệm cao cấp. Liệu pháp đá nóng kết hợp thảo mộc đã thay đổi cuộc sống của tôi. Căng thẳng tan biến hoàn toàn." },
        { name: "Emily T.", rating: 5, text: "Tôi chọn gói Royal và xứng đáng từng đồng. Nhân viên rất chu đáo và chuyên nghiệp. Tôi ra về như một người hoàn toàn mới. Rất khuyến khích!" },
        { name: "Amanda R.", rating: 5, text: "Tôi đưa mẹ đến đây nhân sinh nhật và bà ấy hoàn toàn thích thú. Không gian rất thư thái và đẹp. Liệu trình VVIP thực sự vượt ngoài sức tưởng tượng." },
        { name: "Michelle K.", rating: 5, text: "Spa đầu tốt nhất Anaheim! Gói Deluxe kèm massage chân là cách hoàn hảo để giải tỏa sau một tuần căng thẳng." },
        { name: "Tina W.", rating: 5, text: "Tôi đã tìm kiếm một trải nghiệm spa đầu thực sự và cuối cùng đã tìm thấy ở đây. Liệu trình Gua Sha cực kỳ dễ chịu. Da đầu của tôi chưa bao giờ sạch và khỏe như vậy." },
      ],
    },

    // Promotions
    promotions: {
      eyebrow: "Ưu Đãi Đặc Biệt",
      heroTitle: "Khuyến Mãi",
      sectionEyebrow: "Thời Gian Có Hạn",
      sectionTitle: "Ưu Đãi Độc Quyền",
      sectionSubtitle: "Tận hưởng các chương trình khuyến mãi đặc biệt và khám phá sự sang trọng của HI-LITE HEAD SPA.",
      bookNow: "Đặt Lịch",
      items: [
        { title: "Ưu Đãi Lần Đầu", description: "Tận hưởng lần đầu trải nghiệm spa đầu với mức giá giới thiệu đặc biệt.", detail: "$105 → $90" },
        { title: "Phần Thưởng Check-In", description: "Check-in trong lần ghé thăm và nhận phần thưởng độc quyền.", detail: "Giảm 10%" },
        { title: "Gói Nhóm Royal", description: "Rủ bạn bè cùng trải nghiệm Royal và tiết kiệm cùng nhau.", detail: "Giảm $20/người" },
        { title: "Gói Nhóm VVIP", description: "Nâng tầm trải nghiệm nhóm với nghi lễ VVIP.", detail: "Giảm $25/người" },
      ],
    },

    // Gallery
    gallery: {
      eyebrow: "Không Gian Của Chúng Tôi",
      heroTitle: "Hình Ảnh",
      heroSubtitle: "Một cái nhìn thoáng qua về thế giới thanh bình của HI-LITE HEAD SPA.",
    },

    // FAQ
    faq: {
      eyebrow: "Hỏi & Đáp",
      heroTitle: "Câu Hỏi Thường Gặp",
      sectionEyebrow: "Chúng Tôi Luôn Sẵn Sàng Giúp Đỡ",
      sectionTitle: "Các Câu Hỏi Phổ Biến",
      questions: [
        { q: "Head spa là gì?", a: "Head spa là liệu trình chăm sóc da đầu và tóc cao cấp kết hợp làm sạch sâu, massage và các liệu pháp dưỡng chất. Thúc đẩy thư giãn, giảm căng thẳng, cải thiện sức khỏe da đầu và để tóc bạn cảm thấy được hồi sinh." },
        { q: "Mỗi buổi kéo dài bao lâu?", a: "Các buổi của chúng tôi từ 60 phút (Hi Lite Classic) đến 110 phút (Hi Lite VVIP). Mỗi dịch vụ được thiết kế để mang lại trải nghiệm đầy đủ, không vội vã." },
        { q: "Tôi có cần đặt lịch trước không?", a: "Có, chúng tôi khuyến khích đặt lịch trước để đảm bảo thời gian bạn muốn. Bạn có thể đặt lịch dễ dàng tại www.hiliteheadspa.com." },
        { q: "Tôi nên mong đợi gì trong lần đầu tiên?", a: "Khi đến, bạn sẽ được chào đón vào không gian thanh bình của chúng tôi. Chuyên viên sẽ trao đổi về nhu cầu của bạn và tùy chỉnh liệu trình phù hợp. Chỉ cần thư giãn và tận hưởng." },
        { q: "Head spa có phù hợp với mọi loại tóc không?", a: "Hoàn toàn có. Các liệu trình của chúng tôi được thiết kế cho mọi loại và kết cấu tóc. Chuyên viên sẽ điều chỉnh sản phẩm và kỹ thuật phù hợp nhất với nhu cầu cá nhân của bạn." },
        { q: "Lợi ích của việc đến head spa thường xuyên?", a: "Ghé thăm thường xuyên giúp duy trì sức khỏe da đầu, giảm căng thẳng, cải thiện tuần hoàn máu, tăng cường tóc và mang lại sự tái tạo tinh thần nhất quán hỗ trợ sức khỏe tổng thể." },
        { q: "Có đặt lịch nhóm không?", a: "Có! Chúng tôi có giá đặc biệt cho nhóm với gói Royal và VVIP. Đây là trải nghiệm tuyệt vời để chia sẻ cùng bạn bè, gia đình hoặc đồng nghiệp." },
        { q: "Bạn dùng sản phẩm gì?", a: "Chúng tôi sử dụng các sản phẩm cao cấp được lựa chọn cẩn thận, nhẹ nhàng với da đầu và hiệu quả trong việc mang lại kết quả. Chuyên viên chọn sản phẩm dựa trên nhu cầu riêng của bạn." },
        { q: "Có thẻ quà tặng không?", a: "Có, chúng tôi cung cấp thẻ quà tặng cho tất cả dịch vụ. Liên hệ trực tiếp hoặc mua qua hệ thống đặt lịch của chúng tôi. Trải nghiệm head spa là món quà thực sự đặc biệt." },
        { q: "Bạn ở đâu?", a: "Chúng tôi tọa lạc tại 9832 Katella Ave, Anaheim, CA 92804. Mở cửa Thứ Hai đến Chủ Nhật, 9:00 SA – 7:00 CH." },
      ],
    },

    // Contact
    contact: {
      eyebrow: "Liên Hệ Với Chúng Tôi",
      heroTitle: "Liên Hệ",
      visitEyebrow: "Ghé Thăm Chúng Tôi",
      visitTitle1: "Chúng Tôi Rất Vui",
      visitTitle2: "Được Nghe Từ Bạn",
      labels: { address: "Địa Chỉ", phone: "Điện Thoại", email: "Email", hours: "Giờ Mở Cửa" },
      bookNow: "Đặt Lịch",
    },

    // Booking
    booking: {
      eyebrow: "Giữ Chỗ Của Bạn",
      heroTitle: "Đặt Lịch Trải Nghiệm",
      step1Title: "Chọn Dịch Vụ",
      step1Desc: "Xem thực đơn của chúng tôi và chọn liệu trình phù hợp với bạn.",
      step2Title: "Chọn Ngày & Giờ",
      step2Desc: "Chọn ngày và giờ phù hợp với lịch trình của bạn.",
      step3Title: "Xác Nhận & Thư Giãn",
      step3Desc: "Hoàn tất đặt lịch và sẵn sàng cho trải nghiệm tuyệt vời.",
      bookOnline: "Đặt Lịch Online",
      assuranceTitle: "Sự Thoải Mái Của Bạn Là Ưu Tiên",
      assuranceText: "Nếu bạn có câu hỏi trước khi đặt lịch, hãy liên hệ chúng tôi tại",
    },

    // Gift Cards
    giftCards: {
      eyebrow: "Tặng Quà Thư Giãn",
      heroTitle: "Thẻ Quà Tặng",
      onlineTitle: "Mua Trực Tuyến",
      onlineText: "Truy cập trang đặt lịch của chúng tôi để mua thẻ quà tặng cho bất kỳ dịch vụ nào. Cách hoàn hảo để chia sẻ sự sang trọng của HI-LITE HEAD SPA với người thân yêu.",
      phoneTitle: "Mua Qua Điện Thoại",
      phoneText: "Thích đặt hàng qua điện thoại? Gọi trực tiếp cho chúng tôi và chúng tôi sẽ giúp bạn chọn thẻ quà tặng hoàn hảo.",
      occasionsTitle: "Hoàn Hảo Cho Mọi Dịp",
      occasions: ["Sinh Nhật", "Ngày của Mẹ", "Valentine", "Kỷ Niệm", "Quà Doanh Nghiệp", "Không Cần Lý Do"],
      buyNow: "Mua Thẻ Quà Tặng",
    },

    // Booking Modal
    bookingModal: {
      title: "Trước Khi Đặt Lịch",
      subtitle: "Một vài điều cần biết trước khi đến thăm chúng tôi.",
      hoursLabel: "Giờ Làm Việc",
      afterHoursLabel: "Đặt Lịch Ngoài Giờ?",
      afterHoursText: "Nếu bạn muốn đặt lịch ngoài giờ làm việc, vui lòng gọi trực tiếp cho chúng tôi tại",
      afterHoursSuffix: "và chúng tôi sẽ cố gắng hết sức để phục vụ bạn.",
      proceedButton: "Tiến Hành Đặt Lịch",
    },

    // Shared CTAs
    cta: {
      readyHeadline: "Sẵn Sàng Tái Tạo?",
      readySubtext: "Đặt lịch trải nghiệm spa cao cấp và để căng thẳng tan biến.",
      buttonText: "Đặt Lịch Ngay",
      unwinding: "Đã Đến Lúc Thư Giãn",
      unwindingSubtext: "Những ưu đãi này sẽ không kéo dài mãi. Hãy tặng bản thân sự thư giãn xứng đáng.",
      resetHeadline: "Sẵn Sàng Làm Mới?",
      resetSubtext: "Thánh đường của bạn đang chờ đợi. Đặt lịch ngay hôm nay.",
      differenceHeadline: "Cảm Nhận Sự Khác Biệt",
      differenceSubtext: "Bước vào thánh đường của chúng tôi và khám phá cảm giác thư giãn thực sự.",
      questionsHeadline: "Còn Câu Hỏi?",
      questionsSubtext: "Liên hệ chúng tôi hoặc đặt một buổi trị liệu. Chúng tôi luôn sẵn lòng giúp đỡ.",
      questionsButton: "Liên Hệ",
    },
  },
};

export default t;