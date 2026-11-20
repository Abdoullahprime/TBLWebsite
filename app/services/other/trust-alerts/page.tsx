function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const alertTypes = [
  { title: "Account Debit", desc: "Get notified every time money leaves your account." },
  { title: "Account Credit", desc: "Instant alert when funds are received." },
  { title: "Low Balance", desc: "Alert when your balance falls below a set threshold." },
  { title: "Card Transactions", desc: "Real-time SMS for every card payment." },
  { title: "Cheque Clearance", desc: "Know when a cheque clears or bounces." },
  { title: "E-Statement", desc: "Monthly account statements delivered to your inbox." },
];

export default function TrustAlertsPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Trust Alerts</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Other Services
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Trust Alerts</h2>
          <p className="text-white/70 leading-relaxed">
            Stay in control of your finances with real-time SMS and email alerts on every activity in your account — 24 hours a day, 7 days a week.
          </p>
        </div>
      </div>

      {/* Channels */}
      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { channel: "SMS Alerts", icon: "💬", desc: "Instant text messages sent directly to your registered mobile number for every transaction and account event." },
          { channel: "Email Alerts", icon: "📧", desc: "Detailed email notifications and monthly e-statements sent to your registered email address." },
        ].map((c) => (
          <div key={c.channel} className="bg-white rounded-2xl border border-gray-100 p-7 flex gap-4">
            <div className="text-3xl">{c.icon}</div>
            <div>
              <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-2">{c.channel}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Alert types */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Alert Types</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {alertTypes.map((a) => (
            <div key={a.title} className="bg-[#F7F8FC] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckIcon />
                <p className="text-sm font-bold text-[#0A1F5C]">{a.title}</p>
              </div>
              <p className="text-xs text-gray-500">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Subscribe to Trust Alerts</h3>
          <p className="text-sm text-gray-500">Visit any branch or submit a written request to activate SMS and email alerts on your account.</p>
        </div>
        <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all whitespace-nowrap">
          Find a Branch
        </a>
      </div>
    </div>
  );
}
