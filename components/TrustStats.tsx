const stats = [
  { num: "150K+", label: "Active customers" },
  { num: "99.9%", label: "Uptime, digital banking" },
  { num: "12", label: "Branch locations" },
  { num: "GMD 5B+", label: "Assets under management" },
];

export default function TrustStats() {
  return (
    <section className="bg-[#0A1F5C] py-20 text-center">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-bold tracking-widest uppercase text-[#F5C842] mb-3">Why Trust Bank</div>
        <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">
          Gambia&apos;s bank of choice
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-14">
          Regulated by the Central Bank of The Gambia, insured by GDIC, and committed to your financial growth for over two decades.
        </p>
        <div className="flex justify-center flex-wrap gap-14">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#E8A820] tabular-nums">{s.num}</div>
              <div className="text-sm text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
