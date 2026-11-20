function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const features = [
  "Competitive interest rates on credit balances",
  "Free cheque book on request",
  "Free monthly e-statement",
  "Debit card with access to all Trust Bank ATMs",
  "Internet & Mobile Banking access",
  "SMS / Email transaction alerts",
  "Standing order and direct debit facilities",
  "Overdraft facility (subject to approval)",
];

const requirements = [
  "Valid national ID or passport",
  "One recent passport-sized photograph",
  "Proof of address (utility bill, tenancy agreement)",
  "Initial deposit of GMD 500",
  "Completed account opening form",
];

export default function CurrentAccountPage() {
  return (
    <div className="space-y-6">

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Current Accounts</span>
      </nav>

      {/* Header card */}
      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Retail Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Current Accounts</h2>
          <p className="text-white/70 leading-relaxed">
            Manage your day-to-day transactions with flexibility and ease. Our Current Account gives you instant access to your funds whenever you need them.
          </p>
        </div>
      </div>

      {/* Account types */}
      <div className="grid md:grid-cols-2 gap-5">
        {[
          {
            title: "Personal Current Account",
            tag: "Individual",
            desc: "Ideal for salaried employees and self-employed individuals. Enjoy unlimited transactions, free cheques, and full digital banking access.",
            highlight: "No monthly maintenance fee",
          },
          {
            title: "Business Current Account",
            tag: "Business",
            desc: "Built for sole traders and small businesses. Manage cash flow, payroll, and payments from a single, easy-to-operate account.",
            highlight: "Free first cheque book",
          },
        ].map((a) => (
          <div key={a.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#E8A820] hover:shadow-md transition-all group">
            <span className="inline-block bg-[#E8A820]/15 text-[#8a5e00] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
              {a.tag}
            </span>
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-2 group-hover:text-[#E8A820] transition-colors">
              {a.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{a.desc}</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#0A1F5C]">
              <CheckIcon />
              {a.highlight}
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Account Features</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Opening Requirements</h3>
        <ul className="space-y-3">
          {requirements.map((r, i) => (
            <li key={r} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-6 h-6 rounded-full bg-[#E8A820]/15 text-[#E8A820] flex items-center justify-center text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Ready to open an account?</h3>
          <p className="text-sm text-gray-500">Visit any branch with your documents or contact us to get started.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="mailto:info@tblgambia.com?subject=Current Account Opening"
            className="bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">
            Apply Now
          </a>
          <a href="/about/branches"
            className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all">
            Find a Branch
          </a>
        </div>
      </div>
    </div>
  );
}
