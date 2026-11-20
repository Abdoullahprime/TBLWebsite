function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const sections = [
  {
    title: "Foreign Currency Services",
    items: [
      "Purchase and sale of foreign currency notes and foreign bank drafts",
      "Very attractive rates on purchase and sale of foreign currencies",
      "Foreign currency swap services",
    ],
  },
  {
    title: "Documentary Letters of Credit & Collections",
    items: [
      "Issue and process Documentary Letters of Credit and Collections",
      "Timely receipt and dispatch of documents, ensuring compliance with terms and conditions",
      "Process both inward and outward collections efficiently",
    ],
  },
  {
    title: "SWIFT Transfers",
    items: [
      "Funds transfers via SWIFT to destinations worldwide",
      "Process both inward and outward SWIFT transfers to all banks globally",
    ],
  },
  {
    title: "Extra Services",
    items: [
      "Transaction alerts to keep you informed",
      "Mobile and Online banking access",
      "No withdrawal limits on foreign transactions",
    ],
  },
];

export default function InternationalBankingPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">International Banking</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            International Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">International Banking</h2>
          <p className="text-white/70 leading-relaxed">
            Our expertise and experience in international banking are both legendary and the envy of the market. With a strong understanding of both local and international markets, our staff will advise and help carry out your transactions as you wish.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {sections.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-7">
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-4">{s.title}</h3>
            <ul className="space-y-3">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Currency notes shipment */}
      <div className="bg-[#0A1F5C] rounded-2xl p-7 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 10% 50%, #E8A820 0%, transparent 50%)" }} />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-white text-lg mb-2">Currency Notes Shipments</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We ship all convertible currency notes for settlements of trade transactions through bank accounts around the world at very competitive rates and value dates.
            </p>
          </div>
          <a href="mailto:info@tblgambia.com?subject=International Banking Enquiry"
            className="flex-shrink-0 bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all">
            Contact Treasury
          </a>
        </div>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">View our Correspondent Banks</h3>
          <p className="text-sm text-gray-500">See our international partners that enable smooth cross-border transactions.</p>
        </div>
        <a href="/services/international/correspondent-banking" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)] whitespace-nowrap">
          Correspondent Banks
        </a>
      </div>
    </div>
  );
}
