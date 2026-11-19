const stats = [
  { num: "27+", label: "Years of Service" },
  { num: "GMD 5B+", label: "Total Assets" },
  { num: "150K+", label: "Active Customers" },
  { num: "12", label: "Branch Network" },
];

export default function RatesStrip() {
  return (
    <div className="bg-white border-y border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className={`${i < stats.length - 1 ? "md:border-r border-gray-100" : ""}`}>
              <div className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-[#0A1F5C] tabular-nums mb-2">
                {s.num}
              </div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
