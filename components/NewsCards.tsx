"use client";
import { useState, useEffect } from "react";

const news = [
  {
    tag: "Corporate",
    date: "12 Nov 2024",
    title: "Trust Bank records GMD 5 billion in total assets for 2024",
    excerpt: "Trust Bank Gambia has surpassed the GMD 5 billion mark in total assets, marking a significant milestone in the bank's 27-year history.",
    img: { bg: "from-[#0A1F5C] to-[#1a3178]", icon: "🏦" },
  },
  {
    tag: "Digital",
    date: "5 Nov 2024",
    title: "New mobile app update brings instant inter-bank transfers",
    excerpt: "The latest Trust Bank mobile app release introduces real-time transfers to all Gambian commercial banks, available free for all customers.",
    img: { bg: "from-[#1a3178] to-[#0A1F5C]", icon: "📱" },
  },
  {
    tag: "Community",
    date: "28 Oct 2024",
    title: "Trust Bank supports Gambian farmers through NFSPMC partnership",
    excerpt: "Trust Bank has partnered with the National Food Security Processing and Marketing Corporation to provide affordable financing for smallholder farmers.",
    img: { bg: "from-green-700 to-green-900", icon: "🌾" },
  },
  {
    tag: "Notice",
    date: "15 Jul 2024",
    title: "CBG lowers ACP/ACH cheque threshold to GMD 50,000",
    excerpt: "Following a Central Bank directive, Trust Bank has updated its cheque clearing process for all payments via ACP/ACH effective 15th July 2024.",
    img: { bg: "from-[#E8A820] to-[#c88b0e]", icon: "📋" },
  },
  {
    tag: "Services",
    date: "10 Oct 2024",
    title: "Western Union remittances now available at all 12 branches",
    excerpt: "Trust Bank customers across The Gambia can now send and receive Western Union transfers from any of our 12 branch locations nationwide.",
    img: { bg: "from-purple-700 to-purple-900", icon: "🌍" },
  },
  {
    tag: "Security",
    date: "1 Sep 2024",
    title: "Chip & PIN ATM card rollout completed across all branches",
    excerpt: "The migration from magnetic strip to chip and PIN technology is complete. Customers are urged to collect their new cards from their nearest branch.",
    img: { bg: "from-slate-700 to-slate-900", icon: "🔒" },
  },
];

const tagColors: Record<string, string> = {
  Corporate: "bg-[#0A1F5C]/10 text-[#0A1F5C]",
  Digital:   "bg-[#E8A820]/15 text-[#8a5e00]",
  Community: "bg-green-100 text-green-700",
  Notice:    "bg-red-100 text-red-700",
  Services:  "bg-purple-100 text-purple-700",
  Security:  "bg-gray-100 text-gray-600",
};

export default function NewsCards() {
  const [page, setPage] = useState(0); // 0 or 1
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [page]);

  function go(dir: 1 | -1) {
    setDirection(dir === 1 ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setPage(p => (p + dir + 2) % 2);
      setAnimating(false);
    }, 400);
  }

  const visible = news.slice(page * 3, page * 3 + 3);

  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Latest Updates</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">News &amp; Announcements</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#0A1F5C] hover:text-[#0A1F5C] transition-all"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#0A1F5C] hover:text-[#0A1F5C] transition-all"
            >
              →
            </button>
            <div className="flex gap-1.5 ml-2">
              {[0, 1].map(i => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > page ? "left" : "right"); setAnimating(true); setTimeout(() => { setPage(i); setAnimating(false); }, 400); }}
                  className={`rounded-full transition-all duration-300 ${i === page ? "w-6 h-2.5 bg-[#E8A820]" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-400"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${direction === "left" ? "-24px" : "24px"})`
              : "translateX(0)",
          }}
        >
          {visible.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200 group"
            >
              {/* Image banner */}
              <div className={`h-44 bg-gradient-to-br ${item.img.bg} flex items-center justify-center relative overflow-hidden`}>
                {/* subtle pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <span className="text-6xl relative z-10 drop-shadow-lg select-none">{item.img.icon}</span>
                {/* gold accent bar bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8A820]" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[item.tag] ?? "bg-gray-100 text-gray-600"}`}>
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-base font-bold text-[#0A1F5C] leading-snug mb-3 group-hover:text-[#E8A820] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.excerpt}</p>
                <a href="#" className="mt-5 text-sm font-bold text-[#0A1F5C] hover:text-[#E8A820] transition-colors">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`.duration-400 { transition-duration: 400ms; }`}</style>
    </section>
  );
}
