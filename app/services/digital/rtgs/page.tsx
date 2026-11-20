function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export default function RTGSPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">RTGS</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Digital Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Real Time Gross Settlement (RTGS)</h2>
          <p className="text-white/70 leading-relaxed">
            RTGS is a large-value interbank funds transfer system that electronically moves money from one bank to another — instantly, with immediate and final settlement.
          </p>
        </div>
      </div>

      {/* Why RTGS + Things to know */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 p-7">
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Why RTGS?</h3>
          <ul className="space-y-3">
            {[
              "Reduces systemic risk in high-value payments",
              "Each transaction is processed separately and settled immediately",
              "Final and irrevocable payment processing",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{f}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-7">
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Things to Know</h3>
          <ul className="space-y-3">
            {[
              "Instant validation of fund settlements",
              "Trust Bank cheques above D50,000 are processed via ACH/ACP and RTGS",
              "Personalised RTGS forms available at all branches",
              "RTGS inflows from other banks are instantly credited to your account",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mandatory info */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Mandatory Information for RTGS Transfer</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: "Beneficiary Bank Name", icon: "🏦" },
            { label: "Amount to be Remitted", icon: "💰" },
            { label: "Beneficiary Account Number or BBAN", icon: "🔢" },
          ].map((item) => (
            <div key={item.label} className="bg-[#F7F8FC] rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold text-[#0A1F5C]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Make an RTGS transfer</h3>
          <p className="text-sm text-gray-500">Fill in the Trust Bank RTGS form at any branch or submit a written instruction.</p>
        </div>
        <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all whitespace-nowrap">
          Find a Branch
        </a>
      </div>
    </div>
  );
}
