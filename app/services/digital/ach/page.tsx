function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export default function ACHPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">ACP / ACH</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Digital Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Automated Clearing House (ACP/ACH)</h2>
          <p className="text-white/70 leading-relaxed">
            An electronic payment system that processes large volumes of credit and debit transactions in batches — ideal for salaries, pensions, and utility bills.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {[
          { title: "Why Use ACP/ACH?", items: ["Saves time and resources with bulk payments", "Ideal for salaries, pension payments, and bill settlements", "Cost-effective and secure fund transfers"] },
          { title: "Key Features", items: ["Batch processing of multiple transactions", "Nationwide reach — accepted by all commercial banks", "Instant fund availability for direct credit payments", "Next-day availability for other-bank cheques"] },
          { title: "Important Notes", items: ["Submit payment files in standard format", "Ensure accurate account numbers and bank codes", "Cut-off time applies for same-day processing", "Contact operations team for ACP/ACH setup"] },
        ].map((section) => (
          <div key={section.title} className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Set up ACP/ACH payments</h3>
          <p className="text-sm text-gray-500">Contact our operations team at any branch to get started with batch payment processing.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="mailto:info@tblgambia.com?subject=ACP/ACH Setup Enquiry" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">Contact Us</a>
          <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all">Find a Branch</a>
        </div>
      </div>
    </div>
  );
}
