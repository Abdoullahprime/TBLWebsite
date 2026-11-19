const rates = [
  { pair: "USD / GMD", val: "68.40" },
  { pair: "GBP / GMD", val: "87.15" },
  { pair: "EUR / GMD", val: "74.60" },
  { pair: "XOF / GMD", val: "0.112" },
];

export default function RatesStrip() {
  return (
    <div className="bg-[#E8A820] py-4">
      <div className="max-w-6xl mx-auto px-5 flex items-center gap-6 flex-wrap justify-between">
        <span className="font-[family-name:var(--font-sora)] text-xs font-bold text-[#0A1F5C] uppercase tracking-widest">
          Live Exchange Rates
        </span>
        <div className="flex gap-8 flex-wrap">
          {rates.map((r) => (
            <div key={r.pair} className="flex flex-col">
              <span className="text-[11px] text-[#0A1F5C]/60 font-medium">{r.pair}</span>
              <span className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#0A1F5C] tabular-nums">{r.val}</span>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="bg-[#0A1F5C] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1a3178] transition-colors"
        >
          Check ATMs
        </a>
      </div>
    </div>
  );
}
