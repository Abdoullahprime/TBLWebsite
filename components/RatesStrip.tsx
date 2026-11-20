const stats = [
  { num: "27+", label: "Years of Service" },
  { num: "GMD 5B+", label: "Total Assets" },
  { num: "12", label: "Branch Network" },
];

export default function RatesStrip() {
  return (
    <div className="bg-[#E8A820] pt-12 pb-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className={`${i < stats.length - 1 ? "md:border-r border-[#c88b0e]" : ""}`}>
              <div className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-white tabular-nums mb-2">
                {s.num}
              </div>
              <div className="text-sm font-bold text-white/80 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
