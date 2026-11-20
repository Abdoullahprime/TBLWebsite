const items = [
  {
    num: "01",
    title: "Experience",
    desc: "With more than 27 years of experience in the banking industry, we bring extensive expertise to our services.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    accent: "gold",   // gold text/icon
    size: "tall",     // spans 2 rows
  },
  {
    num: "02",
    title: "Speed",
    desc: "We take pride in our ability to provide fast and efficient services to our customers.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><path d="M20 2l-5 5"/><path d="M22 4l-5 5"/>
      </svg>
    ),
    accent: "white",
    size: "normal",
  },
  {
    num: "03",
    title: "Efficiency",
    desc: "Our business processes are expertly streamlined to deliver a distinctive banking experience.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    accent: "white",
    size: "normal",
  },
  {
    num: "04",
    title: "Services",
    desc: "We offer a wide range of services and account options tailored to meet all your needs.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    accent: "gold",
    size: "wide",     // spans 2 columns
  },
  {
    num: "05",
    title: "Customer Support",
    desc: "Get dedicated support to assist you with your banking and financial service needs.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    accent: "white",
    size: "normal",
  },
  {
    num: "06",
    title: "Security",
    desc: "We prioritize your data and funds by employing top-level security standards and chip & PIN technology.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    accent: "white",
    size: "normal",
  },
];

type AccentColor = "gold" | "white";

function Card({ item, className = "" }: { item: typeof items[0]; className?: string }) {
  const isGold = item.accent === "gold" as AccentColor;
  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/10 group hover:border-[#E8A820]/40 transition-all duration-300 ${className}`}
      style={{ background: isGold ? "rgba(232,168,32,0.08)" : "rgba(255,255,255,0.04)" }}
    >
      {/* Large bg number */}
      <span
        className="absolute -top-4 -right-2 font-[family-name:var(--font-sora)] font-black text-[7rem] leading-none select-none pointer-events-none transition-opacity duration-300"
        style={{ color: isGold ? "rgba(232,168,32,0.12)" : "rgba(255,255,255,0.06)" }}
      >
        {item.num}
      </span>

      {/* Icon */}
      <div
        className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: isGold ? "rgba(232,168,32,0.15)" : "rgba(255,255,255,0.08)", color: isGold ? "#E8A820" : "rgba(255,255,255,0.9)" }}
      >
        {item.icon}
      </div>

      {/* Text */}
      <div>
        <div
          className="font-[family-name:var(--font-sora)] text-xl font-bold mb-2"
          style={{ color: isGold ? "#E8A820" : "#ffffff" }}
        >
          {item.title}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          {item.desc}
        </p>
      </div>

      {/* Bottom gold line on hover */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-[#E8A820] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

export default function WhyBankWithUs() {
  const [experience, speed, efficiency, services, support, security] = items;

  return (
    <section className="bg-[#0A1F5C] pt-4 pb-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-3">Why choose us</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-white">
              Why bank with us
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-xs md:text-right">
            Six reasons thousands of Gambians trust us with their finances.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Row 1: Experience (tall, spans 2 rows) + Speed + Efficiency */}
          <div className="md:row-span-2 flex flex-col">
            <Card item={experience} className="flex-1" />
          </div>
          <Card item={speed} />
          <Card item={efficiency} />

          {/* Row 2: Services (wide, 2 cols) + Support */}
          <Card item={services} className="md:col-span-2" />
          {/* Row 3: Support + Security */}

        </div>

        {/* Second bento row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card item={support} />
          <Card item={security} />
        </div>
      </div>
    </section>
  );
}
