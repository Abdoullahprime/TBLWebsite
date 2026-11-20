function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const features = [
  "Account balance and transaction history",
  "Funds transfer — internal and to other banks",
  "Bill payments and utilities",
  "Account statement requests",
  "Cheque book requests",
  "Stop cheque payments",
  "Multi-user access with approval workflows",
  "Secure login with two-factor authentication",
];

export default function OnlineBankingPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Online Banking</span>
      </nav>

      {/* Header */}
      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Digital Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Online Banking</h2>
          <p className="text-white/70 leading-relaxed">
            Bank from anywhere, at any time. Trust Bank&apos;s Internet Banking platform gives you secure, full-featured access to your accounts — no branch visit needed.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">What You Can Do</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{f}
            </li>
          ))}
        </ul>
      </div>

      {/* Big CTA */}
      <div className="bg-[#0A1F5C] rounded-2xl p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 100%, #E8A820 0%, transparent 60%)" }} />
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#E8A820]/15 flex items-center justify-center mx-auto mb-5">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-white mb-2">Ready to bank online?</h3>
          <p className="text-white/60 max-w-md mx-auto mb-7 text-sm leading-relaxed">
            Log in to your Trust Bank internet banking account to manage your finances securely from any device — anytime, anywhere.
          </p>
          <a
            href="https://ibank.tblgambia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8A820] text-[#0A1F5C] font-bold px-9 py-4 rounded-xl text-base hover:bg-[#F5C842] transition-all hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(232,168,32,0.4)]"
          >
            Go to Internet Banking
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <p className="text-white/40 text-xs mt-4">First time? Visit any branch to register for internet banking.</p>
        </div>
      </div>

      {/* Security note */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-amber-900 mb-1">Security Reminder</p>
          <p className="text-xs text-amber-700 leading-relaxed">
            Trust Bank will never ask for your password or OTP via phone, email, or SMS. Never share your credentials with anyone. If you suspect fraud, contact us immediately on <strong>7474447 / 3644470 / 9033334</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
