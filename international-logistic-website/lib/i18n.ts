export type Lang = "en" | "ar"

export const LANGS: { code: Lang; label: string; native: string; flag: string }[] = [
  { code: "en", label: "English", native: "English", flag: "EN" },
  { code: "ar", label: "Arabic", native: "العربية", flag: "ع" },
]

export const dictionary = {
  en: {
    dir: "ltr",
    brand: {
      name: "Z International",
      tagline: "International Logistic",
    },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact",
      cta: "Get a Quote",
      track: "Track Shipment",
    },
    home: {
      heroKicker: "Global Freight & Logistics",
      heroTitle: "Moving your cargo across the world, safely and on time",
      heroSubtitle:
        "Z International delivers end-to-end freight forwarding by air, ocean and land — backed by real-time tracking and a global partner network.",
      heroPrimary: "Get a Quote",
      heroSecondary: "Our Services",
      featuresKicker: "Why Z International",
      featuresTitle: "Logistics engineered for reliability",
      features: [
        {
          title: "Worldwide Reach",
          desc: "A network spanning 120+ countries with trusted agents at every major port and hub.",
        },
        {
          title: "Fast Delivery",
          desc: "Optimized routes and priority handling keep your shipments moving without delay.",
        },
        {
          title: "24/7 Tracking",
          desc: "Follow every milestone with live tracking and proactive status notifications.",
        },
        {
          title: "Safe Handling",
          desc: "Fully insured cargo with rigorous handling standards from pickup to delivery.",
        },
      ],
      statsTitle: "Trusted by businesses worldwide",
      stats: [
        { value: 250, suffix: "K+", label: "Shipments Completed" },
        { value: 120, suffix: "+", label: "Countries Served" },
        { value: 850, suffix: "+", label: "Global Partners" },
        { value: 98, suffix: "%", label: "Happy Clients" },
      ],
      ctaTitle: "Ready to ship with confidence?",
      ctaText: "Get a tailored freight quote in minutes and let our team handle the rest.",
      ctaButton: "Request a Quote",
    },
    about: {
      title: "About Z International",
      subtitle: "Delivering trust across borders since day one",
      intro:
        "Z International is a full-service logistics and freight forwarding company connecting businesses to markets around the globe. From a single shipment to complex supply chains, we move goods with precision, care and transparency.",
      missionTitle: "Our Mission",
      mission:
        "To simplify global trade by providing reliable, efficient and transparent logistics solutions that empower our clients to grow without borders.",
      visionTitle: "Our Vision",
      vision:
        "To be the most trusted logistics partner in the region, setting the standard for speed, safety and service in international freight.",
      whyTitle: "Why Choose Us",
      why: [
        { title: "Dedicated Experts", desc: "A specialist team assigned to every account, available around the clock." },
        { title: "Transparent Pricing", desc: "Clear, competitive rates with no hidden fees or surprises." },
        { title: "End-to-End Control", desc: "One partner managing your cargo from origin to final destination." },
        { title: "Compliance First", desc: "Customs and regulatory expertise that keeps your goods moving." },
      ],
      teamTitle: "Leadership Team",
      team: [
        { name: "Ziad Al-Rashid", role: "Chief Executive Officer" },
        { name: "Sara Haddad", role: "Head of Operations" },
        { name: "Omar Khalil", role: "Director of Freight" },
      ],
    },
    services: {
      title: "Our Services",
      subtitle: "Complete logistics solutions under one roof",
      items: [
        { title: "Air Freight", desc: "Fast, reliable air cargo for time-sensitive shipments to any destination." },
        { title: "Ocean Freight", desc: "Cost-effective FCL and LCL sea freight for shipments of every size." },
        { title: "Land Transport", desc: "Road and rail freight with full and part-load options across borders." },
        { title: "Warehousing & Distribution", desc: "Secure storage, inventory management and last-mile distribution." },
        { title: "Customs Clearance", desc: "Expert handling of documentation, duties and regulatory compliance." },
        { title: "Project Cargo", desc: "Specialized handling for oversized, heavy and high-value shipments." },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's get your cargo moving",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone Number",
      formService: "Service Needed",
      formServicePlaceholder: "Select a service",
      formMessage: "Message",
      formSubmit: "Send Message",
      formSuccess: "Thank you! Our team will get back to you shortly.",
      infoTitle: "Get in touch",
      address: "Office Address",
      addressValue: "King Fahd Road, Riyadh, Saudi Arabia",
      email: "Email",
      phone: "Phone",
      hours: "Business Hours",
      hoursValue: "Sun – Thu: 8:00 AM – 6:00 PM",
      mapLabel: "Find us on the map",
    },
    footer: {
      about:
        "Z International is your global partner for freight forwarding, warehousing and end-to-end logistics solutions.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      newsletterTitle: "Newsletter",
      newsletterText: "Subscribe for shipping updates and logistics insights.",
      newsletterPlaceholder: "Your email",
      subscribe: "Subscribe",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contactTitle: "Contact",
    },
  },
  ar: {
    dir: "rtl",
    brand: {
      name: "زد إنترناشونال",
      tagline: "الخدمات اللوجستية الدولية",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "اتصل بنا",
      cta: "احصل على عرض سعر",
      track: "تتبع الشحنة",
    },
    home: {
      heroKicker: "الشحن والخدمات اللوجستية العالمية",
      heroTitle: "ننقل بضائعك حول العالم بأمان وفي الوقت المحدد",
      heroSubtitle:
        "توفر زد إنترناشونال خدمات شحن متكاملة جواً وبحراً وبراً، مدعومة بالتتبع اللحظي وشبكة شركاء عالمية.",
      heroPrimary: "احصل على عرض سعر",
      heroSecondary: "خدماتنا",
      featuresKicker: "لماذا زد إنترناشونال",
      featuresTitle: "خدمات لوجستية مصممة للموثوقية",
      features: [
        {
          title: "تغطية عالمية",
          desc: "شبكة تمتد إلى أكثر من 120 دولة مع وكلاء موثوقين في كل ميناء ومركز رئيسي.",
        },
        {
          title: "توصيل سريع",
          desc: "مسارات محسّنة ومعالجة ذات أولوية تُبقي شحناتك في حركة دائمة دون تأخير.",
        },
        {
          title: "تتبع على مدار الساعة",
          desc: "تابع كل مرحلة من خلال التتبع اللحظي والإشعارات الاستباقية بالحالة.",
        },
        {
          title: "مناولة آمنة",
          desc: "بضائع مؤمّنة بالكامل مع معايير مناولة صارمة من الاستلام حتى التسليم.",
        },
      ],
      statsTitle: "موثوق به من قبل الشركات حول العالم",
      stats: [
        { value: 250, suffix: "ألف+", label: "شحنة مكتملة" },
        { value: 120, suffix: "+", label: "دولة نخدمها" },
        { value: 850, suffix: "+", label: "شريك عالمي" },
        { value: 98, suffix: "%", label: "عملاء سعداء" },
      ],
      ctaTitle: "هل أنت مستعد للشحن بثقة؟",
      ctaText: "احصل على عرض سعر مخصص خلال دقائق ودع فريقنا يتولى الباقي.",
      ctaButton: "اطلب عرض سعر",
    },
    about: {
      title: "عن زد إنترناشونال",
      subtitle: "نقدّم الثقة عبر الحدود منذ اليوم الأول",
      intro:
        "زد إنترناشونال شركة متكاملة للخدمات اللوجستية والشحن تربط الشركات بالأسواق حول العالم. من شحنة واحدة إلى سلاسل إمداد معقدة، ننقل البضائع بدقة وعناية وشفافية.",
      missionTitle: "رسالتنا",
      mission:
        "تبسيط التجارة العالمية من خلال حلول لوجستية موثوقة وفعّالة وشفافة تمكّن عملاءنا من النمو بلا حدود.",
      visionTitle: "رؤيتنا",
      vision:
        "أن نكون الشريك اللوجستي الأكثر ثقة في المنطقة، ونضع معيار السرعة والأمان والخدمة في الشحن الدولي.",
      whyTitle: "لماذا تختارنا",
      why: [
        { title: "خبراء متخصصون", desc: "فريق متخصص مخصص لكل حساب ومتاح على مدار الساعة." },
        { title: "تسعير شفاف", desc: "أسعار واضحة وتنافسية دون رسوم خفية أو مفاجآت." },
        { title: "تحكم شامل", desc: "شريك واحد يدير بضائعك من المصدر إلى الوجهة النهائية." },
        { title: "الامتثال أولاً", desc: "خبرة جمركية وتنظيمية تُبقي بضائعك في حركة مستمرة." },
      ],
      teamTitle: "فريق القيادة",
      team: [
        { name: "زياد الراشد", role: "الرئيس التنفيذي" },
        { name: "سارة حداد", role: "مديرة العمليات" },
        { name: "عمر خليل", role: "مدير الشحن" },
      ],
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول لوجستية متكاملة تحت سقف واحد",
      items: [
        { title: "الشحن الجوي", desc: "شحن جوي سريع وموثوق للشحنات الحساسة زمنياً إلى أي وجهة." },
        { title: "الشحن البحري", desc: "شحن بحري اقتصادي بحاويات كاملة أو جزئية لجميع الأحجام." },
        { title: "النقل البري", desc: "شحن بري وسككي بخيارات الحمولة الكاملة والجزئية عبر الحدود." },
        { title: "التخزين والتوزيع", desc: "تخزين آمن وإدارة مخزون وتوزيع حتى الميل الأخير." },
        { title: "التخليص الجمركي", desc: "معالجة احترافية للوثائق والرسوم والامتثال التنظيمي." },
        { title: "شحن المشاريع", desc: "مناولة متخصصة للشحنات كبيرة الحجم والثقيلة وعالية القيمة." },
      ],
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "لنبدأ بتحريك بضائعك",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الهاتف",
      formService: "الخدمة المطلوبة",
      formServicePlaceholder: "اختر خدمة",
      formMessage: "الرسالة",
      formSubmit: "إرسال الرسالة",
      formSuccess: "شكراً لك! سيتواصل معك فريقنا قريباً.",
      infoTitle: "تواصل معنا",
      address: "عنوان المكتب",
      addressValue: "طريق الملك فهد، الرياض، المملكة العربية السعودية",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      hours: "ساعات العمل",
      hoursValue: "الأحد – الخميس: 8:00 ص – 6:00 م",
      mapLabel: "موقعنا على الخريطة",
    },
    footer: {
      about:
        "زد إنترناشونال هي شريكك العالمي لخدمات الشحن والتخزين والحلول اللوجستية المتكاملة.",
      quickLinks: "روابط سريعة",
      servicesTitle: "الخدمات",
      newsletterTitle: "النشرة البريدية",
      newsletterText: "اشترك للحصول على تحديثات الشحن ورؤى لوجستية.",
      newsletterPlaceholder: "بريدك الإلكتروني",
      subscribe: "اشتراك",
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contactTitle: "اتصل بنا",
    },
  },
} as const

export type Dict = (typeof dictionary)["en"]
