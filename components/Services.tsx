const services = [
  {
    icon: "🏠",
    title: "Retail Banking",
    desc: "Savings accounts, personal loans, and debit cards designed for individuals and families.",
    bg: "#EBF4FF",
  },
  {
    icon: "🏢",
    title: "Corporate Banking",
    desc: "Trade finance, working capital, and treasury solutions for Gambian businesses of all sizes.",
    bg: "#F0FFF4",
  },
  {
    icon: "📱",
    title: "Digital Banking",
    desc: "24/7 mobile and internet banking with instant transfers, bill payments, and account management.",
    bg: "#FFF7ED",
  },
  {
    icon: "🌍",
    title: "International Services",
    desc: "Western Union remittances, forex, SWIFT transfers, and diaspora accounts for Gambians abroad.",
    bg: "#F5F3FF",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-10">
          <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">What we offer</div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C] mb-2">Banking for every need</h2>
          <p className="text-gray-500 max-w-lg">From everyday savings to international trade finance — full-service banking under one roof.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <a
              key={s.title}
              href="#"
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#0A1F5C]/20 transition-all block no-underline group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: s.bg }}
              >
                {s.icon}
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-base font-bold text-[#0A1F5C] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              <div className="mt-4 text-sm font-semibold text-[#E8A820] flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
