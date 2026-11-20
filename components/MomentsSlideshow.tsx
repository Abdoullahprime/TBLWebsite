"use client";
import { useState, useEffect } from "react";

const moments = [
  {
    category: "Impact & Sustainability",
    headline: "Gender Empowerment",
    highlights: ["8 Female Heads", "+ 3 Board Members"],
    extra: ["CSR Support: D6.2M", "Best CSR Award (West Africa 2023)"],
  },
  {
    category: "Digital Transformation",
    headline: "Core Banking Upgrade",
    highlights: ["Flexcube 12.2 to 14.6"],
    extra: ["Focus: Enhanced Digital Banking & Cybersecurity"],
  },
  {
    category: "Robust Growth & Stability",
    headline: "Total Assets D12.8BN",
    highlights: ["↑ 11.12%"],
    extra: ["Customer Deposits D10.7BN", "↑ 7.0%"],
  },
  {
    category: "Awards & Recognition",
    headline: "Best Bank in Gambia",
    highlights: ["EMEA Finance 2023"],
    extra: ["27 consecutive years of trust", "Ranked #1 in customer satisfaction"],
  },
  {
    category: "Financial Inclusion",
    headline: "Mobile Money Integration",
    highlights: ["AfriMoney & QMoney"],
    extra: ["Over 150,000 mobile wallet users", "Free inter-bank transfers"],
  },
  {
    category: "Community Investment",
    headline: "Education & Health",
    highlights: ["D6.2M CSR spend"],
    extra: ["School builds in rural Gambia", "Healthcare sponsorships"],
  },
];

// 6 items, 3 per page → 2 pages
const PAGES = 2;

export default function MomentsSlideshow() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"left" | "right">("left");

  useEffect(() => {
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [page]);

  function go(d: 1 | -1) {
    setDir(d === 1 ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setPage(p => (p + d + PAGES) % PAGES);
      setAnimating(false);
    }, 350);
  }

  const cards = moments.slice(page * 3, page * 3 + 3);

  return (
    <section className="bg-[#E8A820] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-[#0A1F5C] mb-2">
            Moments with Trust Bank
          </h2>
          <p className="text-[#0A1F5C]/70 text-sm">
            A look at some of our most memorable moments, awards, and customer experiences.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative">
          <button
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-[#0A1F5C] text-white flex items-center justify-center shadow-lg hover:bg-[#1a3178] transition-colors text-xl"
          >
            ‹
          </button>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${dir === "left" ? "-20px" : "20px"})`
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {cards.map((m, i) => (
              <div
                key={i}
                className="bg-[#0A1F5C] rounded-2xl overflow-hidden shadow-xl border border-white/10 flex flex-col"
              >
                {/* Card header */}
                <div className="bg-white/10 px-5 pt-5 pb-3">
                  <div className="bg-white rounded-xl px-4 py-2 text-center">
                    <span className="font-[family-name:var(--font-sora)] text-[#0A1F5C] font-bold text-sm uppercase tracking-wide leading-snug">
                      {m.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex-1 px-5 py-4 flex flex-col gap-3">
                  <div className="font-[family-name:var(--font-sora)] text-white font-bold text-lg leading-snug">
                    {m.headline}
                  </div>
                  <div className="flex flex-col gap-1">
                    {m.highlights.map((h, j) => (
                      <span key={j} className="text-[#E8A820] font-bold text-base">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-1 pt-3 border-t border-white/10">
                    {m.extra.map((e, j) => (
                      <span key={j} className="text-white/75 text-sm">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 py-3 bg-[#E8A820]/10 flex items-center gap-2 border-t border-white/10">
                  <div className="w-6 h-6 rounded-full bg-[#E8A820]/30 flex items-center justify-center">
                    <span className="text-[#E8A820] text-xs font-black">T</span>
                  </div>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Trust Bank</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-[#0A1F5C] text-white flex items-center justify-center shadow-lg hover:bg-[#1a3178] transition-colors text-xl"
          >
            ›
          </button>
        </div>

        {/* Dot pager */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > page ? "left" : "right"); setAnimating(true); setTimeout(() => { setPage(i); setAnimating(false); }, 350); }}
              className={`rounded-full transition-all duration-300 ${i === page ? "w-8 h-3 bg-[#0A1F5C]" : "w-3 h-3 bg-[#0A1F5C]/30 hover:bg-[#0A1F5C]/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
