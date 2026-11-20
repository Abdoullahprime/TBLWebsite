"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { super: "Welcome To Trust Bank",          gold: "Stay In Control Of",          white: "Your Finances",                img: "/hero/hero-tb2023.jpg" },
  { super: "Explore Our Saving Plans",        gold: "Grow Your",                   white: "Savings Smartly",              img: "/hero/hero-ebanking1.jpg" },
  { super: "Send money locally & globally",   gold: "Business Accounts",           white: "Money Transfers",              img: "/hero/hero-corporate.jpg" },
  { super: "Send money locally & globally",   gold: "International Banking",        white: "Money Transfers",              img: "/hero/hero-international.jpg" },
  { super: "Send money locally & globally",   gold: "International Banking",        white: "Money Transfers",              img: "/hero/hero-retail.jpg" },
  { super: "Send money locally & globally",   gold: "Quick & Easy",                white: "Money Transfers",              img: "/hero/hero-ebanking.jpg" },
  { super: "Boosted Operational Efficiency",  gold: "Strategic Outlook",           white: "Deeper Digital Transformation", img: "/hero/hero-agm1.jpeg" },
  { super: "CSR Support",                     gold: "Impact & Sustainability",      white: "Gender Empowerment",           img: "/hero/hero-agm2.jpeg" },
  { super: "Banking and Cybersecurity",       gold: "Digital Transformation",      white: "Enhanced Digital Systems",     img: "/hero/hero-agm3.jpeg" },
  { super: "Explore Our Saving Plans",        gold: "Grow Your",                   white: "Savings Smartly",              img: "/hero/hero-agm4.jpeg" },
  { super: "Explore Our Saving Plans",        gold: "Grow Your",                   white: "Savings Smartly",              img: "/hero/hero-agm5.jpeg" },
  { super: "Send money locally & globally",   gold: "Business Accounts",           white: "Money Transfers",              img: "/hero/hero-agm6.jpeg" },
  { super: "Send money locally & globally",   gold: "International Banking",        white: "Money Transfers",              img: "/hero/hero-agm7.jpeg" },
  { super: "CSR Support",                     gold: "Impact & Sustainability",      white: "Gender Empowerment",           img: "/hero/hero-agm.jpeg" },
  { super: "Banking and Cybersecurity",       gold: "Digital Transformation",      white: "Enhanced Digital Systems",     img: "/hero/hero-agm8.jpeg" },
  { super: "Send money locally & globally",   gold: "International Banking",        white: "Money Transfers",              img: "/hero/hero-md.jpeg" },
  { super: "Send money locally & globally",   gold: "International Banking",        white: "Money Transfers",              img: "/hero/hero-1.jpeg" },
  { super: "Send money locally & globally",   gold: "International Banking",        white: "Money Transfers",              img: "/hero/hero-2.jpeg" },
  { super: "Explore Our Saving Plans",        gold: "Grow Your",                   white: "Savings Smartly",              img: "/hero/hero-3.jpeg" },
  { super: "Explore Our Saving Plans",        gold: "Grow Your",                   white: "Savings Smartly",              img: "/hero/hero-4.jpeg" },
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
    <section className="bg-[#0A1F5C] overflow-hidden relative border-b border-[#0a1f5c]" style={{ minHeight: "560px" }}>
      {/* Right-half full-bleed image (desktop only) */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
        <div
          className="absolute inset-0 transition-all duration-350"
          style={{ opacity: animating ? 0 : 1 }}
        >
          <Image
            src={slide.img}
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          {/* left-edge fade into navy */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A1F5C] to-transparent" />
        </div>
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20">
        <div className="md:w-1/2 md:pr-10">
          {/* Supertitle */}
          <div
            className="font-semibold text-white text-lg md:text-xl mb-4 transition-all duration-350"
            style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)" }}
          >
            {slide.super}
          </div>

          {/* Gold decorative lines */}
          <div className="mb-4">
            <div className="w-7 h-0.5 bg-[#E8A820]" />
            <div className="w-[17px] h-0.5 mt-2.5 ml-2.5 bg-[#E8A820]" />
          </div>

          {/* Headline */}
          <div
            className="font-[family-name:var(--font-sora)] font-bold text-3xl md:text-5xl mb-10 leading-tight transition-all duration-350"
            style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)" }}
          >
            <span className="text-[#E8A820]">{slide.gold}<br /></span>
            <span className="text-white">{slide.white}</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://ibank.tblgambia.com/#/acceuil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-[185px] h-12 bg-[#E8A820] rounded-[64px] text-[#0A1F5C] font-semibold text-base hover:bg-[#F5C842] transition-colors shadow"
            >
              Online Banking
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full sm:w-[185px] h-12 bg-[#E8A820] rounded-[64px] text-[#0A1F5C] font-semibold text-base hover:bg-[#F5C842] transition-colors shadow"
            >
              Check ATMs
            </a>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-2 flex-wrap">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (i !== current) advance(i - current); }}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-[#E8A820]" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`.duration-350 { transition-duration: 350ms; }`}</style>
    </section>
  );
}
