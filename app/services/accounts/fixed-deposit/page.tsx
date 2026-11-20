function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const tenors = [
  { period: "1 month", rate: "Negotiable" },
  { period: "3 months", rate: "Negotiable" },
  { period: "6 months", rate: "Negotiable" },
  { period: "12 months", rate: "Negotiable" },
];

export default function FixedDepositPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Time / Fixed Deposit</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Retail Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Time / Fixed Deposit</h2>
          <p className="text-white/70 leading-relaxed">
            Maximise your returns by locking your money for a fixed period. Enjoy guaranteed interest rates negotiated at the time of placement.
          </p>
        </div>
      </div>

      {/* Tenor table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-7 py-5 border-b border-gray-100">
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg">Available Tenors</h3>
          <p className="text-sm text-gray-500 mt-1">Interest rates are competitive and negotiated at the time of placement. Contact us for current rates.</p>
        </div>
        <div className="divide-y divide-gray-100">
          {tenors.map((t) => (
            <div key={t.period} className="flex items-center justify-between px-7 py-4 hover:bg-gray-50 transition-colors">
              <span className="font-semibold text-[#0A1F5C] text-sm">{t.period}</span>
              <span className="text-sm text-[#E8A820] font-bold">{t.rate}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Key Features</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Guaranteed return at a fixed interest rate",
            "Flexible tenors from 1 to 12 months",
            "Interest can be paid monthly or at maturity",
            "Automatic rollover option at maturity",
            "Can be used as collateral for loans",
            "Available in GMD and foreign currencies",
            "Minimum deposit of GMD 10,000",
            "Certificate of deposit issued",
          ].map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{f}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Invest your savings</h3>
          <p className="text-sm text-gray-500">Speak to any of our relationship managers for current rates and terms.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="mailto:info@tblgambia.com?subject=Fixed Deposit Enquiry" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">Enquire Now</a>
          <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all">Find a Branch</a>
        </div>
      </div>
    </div>
  );
}
