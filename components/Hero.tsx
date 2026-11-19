export default function Hero() {
  return (
    <section className="bg-white overflow-hidden relative py-20 border-b border-gray-100">
      {/* Subtle background tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 70% at 85% 50%, rgba(232,168,32,0.07) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8A820]/10 border border-[#E8A820]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#8a5e00] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A820] animate-pulse" />
              Trusted Since 1997 · Central Bank Licensed
            </div>

            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-[#0A1F5C] leading-[1.12] mb-5">
              Banking that moves<br />
              with <span className="text-[#E8A820]">your ambitions</span>
            </h1>

            <p className="text-lg text-gray-500 max-w-md mb-9">
              Retail, corporate and digital banking solutions built for Gambians at home
              and abroad — secure, simple, and always accessible.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="bg-[#E8A820] text-[#0A1F5C] font-bold px-7 py-3.5 rounded-xl hover:bg-[#F5C842] transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(232,168,32,0.35)]"
              >
                Open an Account
              </a>
              <a
                href="#"
                className="border border-gray-200 text-[#0A1F5C] font-semibold px-7 py-3.5 rounded-xl hover:border-[#0A1F5C] hover:bg-gray-50 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Visual — card stack */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-72 h-96">
              {/* Back card */}
              <div className="absolute bottom-14 left-10 w-64 rounded-2xl p-6 bg-gradient-to-br from-[#1a3178] to-[#0A1F5C] border border-white/10 shadow-2xl opacity-70 rotate-[-6deg]">
                <div className="w-9 h-7 rounded bg-white/20 mb-9" />
                <div className="text-[11px] text-white/50 font-bold tracking-widest uppercase mb-1">Trust Bank</div>
                <div className="text-sm font-bold text-white/70">A. Jallow</div>
                <div className="text-xs tracking-[.18em] text-white/40 mt-1 tabular-nums">•••• •••• •••• 4821</div>
              </div>
              {/* Front gold card */}
              <div className="absolute bottom-0 left-0 w-64 rounded-2xl p-6 bg-gradient-to-br from-[#E8A820] to-[#c88b0e] shadow-[0_24px_60px_rgba(232,168,32,0.3)]">
                <div className="w-9 h-7 rounded bg-[#0A1F5C]/20 mb-9" />
                <div className="text-[11px] text-[#0A1F5C]/50 font-bold tracking-widest uppercase mb-1">Trust Bank Gambia</div>
                <div className="text-sm font-bold text-[#0A1F5C]">F. Ceesay</div>
                <div className="text-xs tracking-[.18em] text-[#0A1F5C]/60 mt-1 tabular-nums">•••• •••• •••• 2024</div>
              </div>
              {/* Notification */}
              <div className="absolute top-8 -right-4 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl min-w-[180px]">
                <div className="w-9 h-9 rounded-full bg-[#0A1F5C]/10 flex items-center justify-center text-base flex-shrink-0">💸</div>
                <div>
                  <div className="text-[11px] text-gray-400">Transfer received</div>
                  <div className="text-sm font-bold text-[#0A1F5C] tabular-nums">+ GMD 12,500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
