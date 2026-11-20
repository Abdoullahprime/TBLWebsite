function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const services = [
  {
    title: "Cheque Discounting",
    tag: "Short-Term Finance",
    desc: "Get immediate cash against post-dated or future-dated cheques from creditworthy drawers. Ideal for businesses that need to bridge the gap between issuing and clearing.",
    items: ["Instant liquidity on future-dated cheques", "Competitive discounting rates", "Available for business current account holders"],
    icon: "🧾",
  },
  {
    title: "Banker's Indemnity",
    tag: "Guarantee",
    desc: "A bank-issued indemnity letter guaranteeing payment to a third party in the event a specified condition is met. Widely used for lost instruments, cargo releases, and legal undertakings.",
    items: ["Legally binding bank guarantee", "Available for personal and corporate clients", "Fast processing with documentation"],
    icon: "📜",
  },
  {
    title: "Bank Guarantees",
    tag: "Corporate",
    desc: "Trust Bank issues performance, payment, tender, and advance payment guarantees on behalf of clients — giving your counterparties confidence while your capital stays in your business.",
    items: ["Performance and payment guarantees", "Tender / bid bonds", "Advance payment guarantees", "Counter-guarantees available"],
    icon: "🏦",
  },
];

export default function MoreServicesPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">More Services</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Other Services
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">More Services</h2>
          <p className="text-white/70 leading-relaxed">
            Beyond everyday banking, Trust Bank offers a range of specialised financial instruments for individuals and businesses with specific needs.
          </p>
        </div>
      </div>

      <div className="grid gap-5">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#E8A820] hover:shadow-sm transition-all">
            <div className="flex items-start gap-5">
              <div className="text-3xl w-12 h-12 bg-[#F7F8FC] rounded-xl flex items-center justify-center flex-shrink-0">{s.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C]">{s.title}</h3>
                  <span className="bg-[#E8A820]/15 text-[#8a5e00] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">{s.tag}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Enquire about any of these services</h3>
          <p className="text-sm text-gray-500">Contact our Corporate Banking team or visit any branch to discuss your requirements.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="mailto:info@tblgambia.com?subject=Service Enquiry" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">Contact Us</a>
          <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all">Find a Branch</a>
        </div>
      </div>
    </div>
  );
}
