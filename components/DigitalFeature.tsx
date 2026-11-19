const bullets = [
  "Instant GMD transfers to any Trust Bank account or other Gambian banks",
  "Pay NAWEC, GAMTEL, and other utilities without visiting a branch",
  "Real-time SMS and push notifications for every transaction",
  "Secure with biometric login and two-factor authentication",
];

const transactions = [
  { icon: "🛒", name: "Serrekunda Market", date: "Today, 10:14", amount: "-GMD 340", neg: true },
  { icon: "💼", name: "Salary — Nov", date: "1 Nov, 08:00", amount: "+GMD 12,500", neg: false },
  { icon: "⚡", name: "NAWEC Utilities", date: "31 Oct, 15:22", amount: "-GMD 850", neg: true },
];

export default function DigitalFeature() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden flex items-center justify-center min-h-80"
            style={{ background: "linear-gradient(135deg, #0A1F5C, #1a3178)" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(232,168,32,0.12), transparent 65%)" }}
            />
            <div className="relative z-10 w-48 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
              {/* Status bar */}
              <div className="bg-[#0A1F5C] px-4 py-2 flex justify-between text-[10px] text-white/60">
                <span>9:41</span>
                <span>Trust Bank</span>
                <span>◼◼◼</span>
              </div>
              {/* Header */}
              <div className="px-4 py-5 text-white" style={{ background: "linear-gradient(135deg, #0A1F5C, #1a3178)" }}>
                <div className="text-[11px] opacity-60 mb-1 font-[family-name:var(--font-inter)]">Total Balance</div>
                <div className="font-[family-name:var(--font-sora)] text-2xl font-bold tabular-nums">GMD 24,805</div>
                <div className="flex gap-2 mt-4">
                  {["📤 Send", "📥 Receive", "💳 Pay"].map((a) => (
                    <div key={a} className="flex-1 bg-white/10 rounded-lg py-2 text-center text-[9px] text-white/80 font-[family-name:var(--font-inter)]">
                      {a}
                    </div>
                  ))}
                </div>
              </div>
              {/* Transactions */}
              <div className="px-4 py-3">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Recent</div>
                {transactions.map((t) => (
                  <div key={t.name} className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs flex-shrink-0">{t.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-gray-800 truncate">{t.name}</div>
                      <div className="text-[9px] text-gray-400">{t.date}</div>
                    </div>
                    <div className={`text-[11px] font-bold tabular-nums ${t.neg ? "text-red-500" : "text-green-600"}`}>{t.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-3">Digital Banking</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C] mb-4">
              Your bank, always in your pocket
            </h2>
            <p className="text-gray-500 mb-8">
              The Trust Bank mobile app brings your full account to your fingertips — available on Android and iOS, free for all customers.
            </p>
            <ul className="space-y-4 mb-9">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#0A1F5C]/08 flex items-center justify-center text-[11px] text-[#0A1F5C] flex-shrink-0 mt-0.5 font-bold bg-gray-100">✓</span>
                  <span className="text-[15px] text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block bg-[#E8A820] text-[#0A1F5C] font-bold px-7 py-3.5 rounded-xl hover:bg-[#F5C842] transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(232,168,32,0.35)]"
            >
              Download the App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
