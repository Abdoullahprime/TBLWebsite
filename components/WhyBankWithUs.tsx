const cards = [
  {
    title: "Experience",
    desc: "With more than 27 years of experience in the banking industry, we bring extensive expertise to our services.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    dark: false,
  },
  {
    title: "Speed",
    desc: "We take pride in our ability to provide fast and efficient services to our customers.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 6v6l4 2"/>
        <path d="M20 2l-5 5"/>
        <path d="M22 4l-5 5"/>
      </svg>
    ),
    dark: true,
  },
  {
    title: "Efficiency",
    desc: "Our business processes are expertly streamlined to deliver a distinctive banking experience.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    dark: true,
  },
  {
    title: "Services",
    desc: "We offer a wide range of services and account options tailored to meet all your needs.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    dark: false,
  },
  {
    title: "Customer Support",
    desc: "Get dedicated support to assist you with your banking and financial service needs.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    dark: false,
  },
  {
    title: "Security",
    desc: "We prioritize your data and funds by employing top-level security standards and chip & PIN technology.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    dark: true,
  },
];

export default function WhyBankWithUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Why choose us</div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">Why bank with us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 ${
                card.dark
                  ? "bg-[#0A1F5C] text-white"
                  : "bg-white border border-gray-200 shadow-sm text-[#0A1F5C]"
              }`}
            >
              <div className={`mb-5 ${card.dark ? "text-[#E8A820]" : "text-[#0A1F5C]"}`}>
                {card.icon}
              </div>
              <h3 className={`font-[family-name:var(--font-sora)] text-lg font-bold mb-3 ${card.dark ? "text-white" : "text-[#0A1F5C]"}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed ${card.dark ? "text-white/70" : "text-gray-500"}`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
