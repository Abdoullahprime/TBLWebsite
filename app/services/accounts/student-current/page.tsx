function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export default function StudentCurrentPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Student Current Accounts</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Student Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Student Current Account</h2>
          <p className="text-white/70 leading-relaxed">
            Designed for university and tertiary students. Manage your bursary, stipend, or personal funds with zero fuss and no monthly fees.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {[
          { icon: "🎓", title: "No Monthly Fee", desc: "Zero maintenance charges for verified students." },
          { icon: "💳", title: "Free Debit Card", desc: "Instant access to funds at any Trust Bank ATM." },
          { icon: "📱", title: "Mobile Banking", desc: "Check balances, transfer funds, pay bills — anytime." },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:border-[#E8A820] hover:shadow-md transition-all">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">What&apos;s Included</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "No monthly maintenance charges",
            "Free debit card",
            "Internet & Mobile Banking",
            "SMS / Email alerts",
            "Cheque book on request",
            "Unlimited transactions",
            "Upgrade to full account on graduation",
          ].map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{f}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Eligibility & Requirements</h3>
        <ul className="space-y-3">
          {[
            "Must be enrolled in a recognised tertiary institution",
            "Valid student ID and national ID or passport",
            "One recent passport-sized photograph",
            "Letter of enrolment from institution",
            "Minimum initial deposit of GMD 100",
          ].map((r, i) => (
            <li key={r} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-6 h-6 rounded-full bg-[#E8A820]/15 text-[#E8A820] flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Open your student account</h3>
          <p className="text-sm text-gray-500">Bring your student ID to any branch and we&apos;ll get you set up.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="mailto:info@tblgambia.com?subject=Student Current Account" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">Apply Now</a>
          <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all">Find a Branch</a>
        </div>
      </div>
    </div>
  );
}
