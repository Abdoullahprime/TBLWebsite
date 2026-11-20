"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const news = [
  {
    tag: "Events",
    date: "9 Nov 2026",
    title: "Trust Bank MD Named West African Banker of the Year 2025",
    excerpt: "Trust Bank Managing Director has been honoured with the prestigious West African Banker of the Year award, recognising outstanding leadership in the region's banking sector.",
    imgSrc: "/news/news-1.jpg",
  },
  {
    tag: "News",
    date: "28 Oct 2026",
    title: "Interim Dividends for 2026 Announced",
    excerpt: "Trust Bank PLC has announced the payment of interim dividends for the financial year 2026. Shareholders are advised to review the closure of register dates.",
    imgSrc: "/news/news-2.jpg",
  },
  {
    tag: "News",
    date: "26 Oct 2026",
    title: "Blood Donation Campaign at Westfield Branch",
    excerpt: "Trust Bank Gambia partnered with the National Blood Transfusion Service to hold a successful blood donation drive at our Westfield branch, supporting national healthcare.",
    imgSrc: "/news/news-3.jpeg",
  },
  {
    tag: "News",
    date: "15 Oct 2026",
    title: "Trust Bank ATM Services Now on GamSwitch National Network",
    excerpt: "Trust Bank has integrated its ATM infrastructure with the GamSwitch national interbank network, enabling customers to access cash at any ATM across The Gambia.",
    imgSrc: "/news/news-4.jpg",
  },
  {
    tag: "News",
    date: "26 Sep 2026",
    title: "Delisting of Trust Bank PLC from the Ghana Stock Exchange",
    excerpt: "Trust Bank PLC has completed the process of delisting from the Ghana Stock Exchange following a formal tender offer to shareholders. Trading on GSE has officially ceased.",
    imgSrc: "/news/news-5.jpeg",
  },
  {
    tag: "News",
    date: "22 Sep 2026",
    title: "Paying Your UTG Tuition Just Got Easier",
    excerpt: "Students at the University of The Gambia can now pay tuition fees directly through Trust Bank's branch network and mobile banking platform, making fee payment faster and more convenient.",
    imgSrc: "/news/news-6.jpg",
  },
];

const tagColors: Record<string, string> = {
  Events:    "bg-[#E8A820]/15 text-[#8a5e00]",
  News:      "bg-[#0A1F5C]/10 text-[#0A1F5C]",
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
              <div className="h-56 relative overflow-hidden bg-gray-100">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
