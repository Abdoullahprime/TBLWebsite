"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    headline: (
      <>
        Banking that moves<br />
        with <span className="text-[#E8A820]">your ambitions</span>
      </>
    ),
    sub: "Retail, corporate and digital banking solutions built for Gambians at home and abroad — secure, simple, and always accessible.",
    img: "/hero/hero-1.jpeg",
  },
  {
    headline: (
      <>
        Digital banking<br />
        <span className="text-[#E8A820]">in your pocket</span>
      </>
    ),
    sub: "Manage your accounts, transfer funds, and pay bills 24/7 from the Trust Bank mobile app — available on Android and iOS.",
    img: "/hero/hero-2.jpeg",
  },
  {
    headline: (
      <>
        27 years of trust<br />
        <span className="text-[#E8A820]">serving Gambians</span>
      </>
    ),
    sub: "From our first branch in 1997 to 12 locations across The Gambia — we have grown with the nation, backed by the Central Bank of The Gambia.",
    img: "/hero/hero-3.jpeg",
  },
  {
    headline: (
      <>
        Send money home<br />
        <span className="text-[#E8A820]">fast &amp; safely</span>
      </>
    ),
    sub: "Western Union, SWIFT transfers, forex exchange and diaspora accounts — connecting Gambians at home and abroad with ease.",
    img: "/hero/hero-4.jpeg",
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
              className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-350"
              style={{ opacity: animating ? 0 : 1, transform: animating ? "scale(0.96) translateY(10px)" : "scale(1) translateY(0)" }}
            >
              <Image
                src={slide.img}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, 50vw"
                priority
              />
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
