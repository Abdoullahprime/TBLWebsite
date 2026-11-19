"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    headline: (
      <>
        Banking that moves<br />
        with <span className="text-[#E8A820]">your ambitions</span>
      </>
    ),
    sub: "Retail, corporate and digital banking solutions built for Gambians at home and abroad — secure, simple, and always accessible.",
    visual: (
      /* Card stack */
      <div className="relative w-72 h-96">
        <div className="absolute bottom-14 left-10 w-64 rounded-2xl p-6 bg-gradient-to-br from-[#1a3178] to-[#0A1F5C] border border-white/10 shadow-2xl opacity-70 rotate-[-6deg]">
          <div className="w-9 h-7 rounded bg-white/20 mb-9" />
          <div className="text-[11px] text-white/50 font-bold tracking-widest uppercase mb-1">Trust Bank</div>
          <div className="text-sm font-bold text-white/70">A. Jallow</div>
          <div className="text-xs tracking-[.18em] text-white/40 mt-1 tabular-nums">•••• •••• •••• 4821</div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 rounded-2xl p-6 bg-gradient-to-br from-[#E8A820] to-[#c88b0e] shadow-[0_24px_60px_rgba(232,168,32,0.3)]">
          <div className="w-9 h-7 rounded bg-[#0A1F5C]/20 mb-9" />
          <div className="text-[11px] text-[#0A1F5C]/50 font-bold tracking-widest uppercase mb-1">Trust Bank Gambia</div>
          <div className="text-sm font-bold text-[#0A1F5C]">F. Ceesay</div>
          <div className="text-xs tracking-[.18em] text-[#0A1F5C]/60 mt-1 tabular-nums">•••• •••• •••• 2024</div>
        </div>
        <div className="absolute top-8 -right-4 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl min-w-[180px]">
          <div className="w-9 h-9 rounded-full bg-[#0A1F5C]/10 flex items-center justify-center text-base flex-shrink-0">💸</div>
          <div>
            <div className="text-[11px] text-gray-400">Transfer received</div>
            <div className="text-sm font-bold text-[#0A1F5C] tabular-nums">+ GMD 12,500</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    headline: (
      <>
        Digital banking<br />
        <span className="text-[#E8A820]">in your pocket</span>
      </>
    ),
    sub: "Manage your accounts, transfer funds, and pay bills 24/7 from the Trust Bank mobile app — available on Android and iOS.",
    visual: (
      /* Phone mockup */
      <div className="relative w-64 h-96">
        <div className="w-56 h-[380px] rounded-[2.5rem] bg-gradient-to-b from-[#0A1F5C] to-[#1a3178] shadow-2xl border-4 border-[#0A1F5C] flex flex-col overflow-hidden">
          <div className="bg-[#0A1F5C] text-white text-center pt-5 pb-4 px-4">
            <div className="text-[11px] text-white/50 mb-1">9:41 · Trust Bank</div>
            <div className="text-xs text-white/60 mb-1">Total Balance</div>
            <div className="text-2xl font-bold text-white tabular-nums">GMD 24,805</div>
            <div className="flex justify-around mt-4 mb-1">
              {["Send","Receive","Pay"].map(a => (
                <div key={a} className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm">
                    {a === "Send" ? "📤" : a === "Receive" ? "📥" : "💳"}
                  </div>
                  <span className="text-[10px] text-white/60">{a}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white flex-1 rounded-t-3xl px-4 pt-4 space-y-2.5">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Recent</div>
            {[
              { icon: "🛒", name: "Serrekunda Market", date: "Today", amt: "-GMD 340", neg: true },
              { icon: "💼", name: "Salary — Nov", date: "1 Nov", amt: "+GMD 12,500", neg: false },
              { icon: "⚡", name: "NAWEC Utilities", date: "31 Oct", amt: "-GMD 850", neg: true },
            ].map(tx => (
              <div key={tx.name} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm flex-shrink-0">{tx.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold text-gray-700 truncate">{tx.name}</div>
                  <div className="text-[10px] text-gray-400">{tx.date}</div>
                </div>
                <div className={`text-[11px] font-bold ${tx.neg ? "text-red-500" : "text-green-600"}`}>{tx.amt}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -top-3 -right-6 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-xs">✓</div>
          <div>
            <div className="text-[10px] text-gray-400">Transfer sent</div>
            <div className="text-xs font-bold text-[#0A1F5C]">GMD 2,000</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    headline: (
      <>
        27 years of trust<br />
        <span className="text-[#E8A820]">serving Gambians</span>
      </>
    ),
    sub: "From our first branch in 1997 to 12 locations across The Gambia — we have grown with the nation, backed by the Central Bank of The Gambia.",
    visual: (
      /* Stats visual */
      <div className="relative w-72 h-80 flex flex-col justify-center gap-5">
        {[
          { num: "27+", label: "Years of Service", icon: "🏛️" },
          { num: "GMD 5B+", label: "Total Assets", icon: "💰" },
          { num: "12", label: "Branch Network", icon: "📍" },
        ].map((s, i) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 flex items-center gap-4"
            style={{ transform: `translateX(${i % 2 === 0 ? "0px" : "24px"})` }}
          >
            <div className="text-2xl">{s.icon}</div>
            <div>
              <div className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#0A1F5C]">{s.num}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    headline: (
      <>
        Send money home<br />
        <span className="text-[#E8A820]">fast &amp; safely</span>
      </>
    ),
    sub: "Western Union, SWIFT transfers, forex exchange and diaspora accounts — connecting Gambians at home and abroad with ease.",
    visual: (
      /* Remittance visual */
      <div className="relative w-72 h-80 flex flex-col items-center justify-center gap-4">
        <div className="bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 w-full">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">You send</div>
          <div className="text-3xl font-bold text-[#0A1F5C] tabular-nums mb-4">USD 500</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200" />
            <div className="w-8 h-8 rounded-full bg-[#E8A820] flex items-center justify-center text-sm shadow">→</div>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">They receive</div>
          <div className="text-3xl font-bold text-green-600 tabular-nums">GMD 34,750</div>
          <div className="text-[11px] text-gray-400 mt-3">via Trust Bank · Western Union</div>
        </div>
        <div className="bg-[#0A1F5C] text-white rounded-xl px-5 py-2.5 text-sm font-bold shadow-lg w-full text-center">
          Transfer in minutes
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => advance(1), 5000);
    return () => clearInterval(timer);
  }, [current]);

  function advance(dir: number) {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => (c + dir + slides.length) % slides.length);
      setAnimating(false);
    }, 350);
  }

  const slide = slides[current];

  return (
    <section className="bg-white overflow-hidden relative py-20 border-b border-gray-100">
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{ background: "radial-gradient(ellipse 50% 70% at 85% 50%, rgba(232,168,32,0.07) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            {/* Static pill */}
            <div className="inline-flex items-center gap-2 bg-[#E8A820]/10 border border-[#E8A820]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#8a5e00] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A820] animate-pulse" />
              Trusted Since 1997 · Central Bank Licensed
            </div>

            {/* Animated headline */}
            <div
              className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-[#0A1F5C] leading-[1.12] mb-5 transition-all duration-350"
              style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)" }}
            >
              {slide.headline}
            </div>

            {/* Animated sub */}
            <p
              className="text-lg text-gray-500 max-w-md mb-9 transition-all duration-350"
              style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)" }}
            >
              {slide.sub}
            </p>

            {/* Static buttons */}
            <div className="flex gap-3 flex-wrap mb-8">
              <a href="#" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-7 py-3.5 rounded-xl hover:bg-[#F5C842] transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(232,168,32,0.35)]">
                Open an Account
              </a>
              <a href="#" className="border border-gray-200 text-[#0A1F5C] font-semibold px-7 py-3.5 rounded-xl hover:border-[#0A1F5C] hover:bg-gray-50 transition-all">
                Explore Services
              </a>
            </div>

            {/* Slide dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (i !== current) advance(i - current); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-[#E8A820]" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

          {/* Animated visual */}
          <div className="hidden md:flex items-center justify-center min-h-[380px]">
            <div
              className="transition-all duration-350"
              style={{ opacity: animating ? 0 : 1, transform: animating ? "scale(0.96) translateY(10px)" : "scale(1) translateY(0)" }}
            >
              {slide.visual}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .duration-350 { transition-duration: 350ms; }
      `}</style>
    </section>
  );
}
