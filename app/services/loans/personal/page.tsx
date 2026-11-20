function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const features = [
  "Repayment by fixed periodic instalments over an agreed period",
  "Highly competitive interest rates",
  "Refinancing available prior to loan maturity",
  "Part payments and full settlement accepted before maturity",
  "Quick turnaround on approved applications",
  "Flexible repayment tenors to suit your income",
];

const requirements = [
  "Completed loan application form",
  "TIN Certificate",
  "Valid government-issued ID or passport",
  "Recent payslips (last 3 months) or proof of income",
  "Bank statements (last 6 months)",
  "Purpose of the facility",
  "Collateral documentation (where applicable)",
];

export default function PersonalLoanPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <a href="/services/loans/personal" className="hover:text-[#0A1F5C]">Loans</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Personal Loans</span>
      </nav>

      {/* Header */}
      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Loans &amp; Advances
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Personal Loans</h2>
          <p className="text-white/70 leading-relaxed">
            Whether it&apos;s an unexpected expense or a big purchase, Trust Bank offers personal loans with competitive rates and flexible repayment terms tailored to your needs.
          </p>
        </div>
      </div>

      {/* Loan types */}
      <div className="grid md:grid-cols-2 gap-5">
        {[
          {
            title: "Fixed Term Loan",
            tag: "Personal",
            desc: "Borrow a lump sum and repay in equal monthly instalments over a fixed period. Ideal for large one-off expenses like home improvements or education.",
            highlight: "Fixed monthly repayments",
          },
          {
            title: "Car Loan",
            tag: "Vehicle Finance",
            desc: "Finance your next vehicle purchase with a Trust Bank car loan. Competitive rates and terms structured around your budget.",
            highlight: "Flexible tenor available",
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
              <CheckIcon />{a.highlight}
            </div>
          </div>
        ))}
      </div>

      {/* Overdraft */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#E8A820]/15 flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg">Overdraft Facility</h3>
            <p className="text-sm text-gray-500 mt-1">Withdraw beyond your balance when you need it most, within a pre-approved limit.</p>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Withdrawals beyond credit balance within approved limit",
            "Facility period not exceeding twelve months",
            "Flexibility in repayment",
            "Interest charged only on overdrawn amount",
          ].map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{f}
            </li>
          ))}
        </ul>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Loan Features</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{f}
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Requirements</h3>
        <ul className="space-y-3">
          {requirements.map((r, i) => (
            <li key={r} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-6 h-6 rounded-full bg-[#E8A820]/15 text-[#E8A820] flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Ready to apply?</h3>
          <p className="text-sm text-gray-500">Visit any branch or contact us and a relationship manager will guide you through.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="mailto:info@tblgambia.com?subject=Personal Loan Application"
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
