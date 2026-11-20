"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Add photos to /public/moments/ and reference them here
// Use any image format: .jpg .png .webp
const moments = [
  { src: "/moments/moment-1.jpeg", alt: "Trust Bank at a Glance" },
  { src: "/moments/moment-2.jpg",  alt: "MD Award Ceremony" },
  { src: "/moments/moment-3.jpg",  alt: "Football Community Outreach" },
  { src: "/moments/moment-4.jpg",  alt: "Military Partnership Event" },
  { src: "/moments/moment-5.jpg",  alt: "CSR Community Support" },
  { src: "/moments/moment-6.jpg",  alt: "GRA Partnership" },
];

const PAGES = 2; // 6 items / 3 per page

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
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
