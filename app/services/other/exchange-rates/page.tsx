const rates = [
  { currency: "USD", buy: "72.50", sell: "73.00" },
  { currency: "GBP", buy: "90.50", sell: "91.50" },
  { currency: "EUR", buy: "78.50", sell: "79.50" },
  { currency: "CHF", buy: "79.00", sell: "80.00" },
  { currency: "SEK", buy: "6.80", sell: "7.00" },
  { currency: "NOK", buy: "6.60", sell: "6.90" },
  { currency: "DKK", buy: "10.50", sell: "10.80" },
  { currency: "CFA", buy: "0.12", sell: "0.13" },
  { currency: "JPY", buy: "0.49", sell: "0.51" },
  { currency: "CAD", buy: "53.00", sell: "54.00" },
  { currency: "AUD", buy: "46.00", sell: "47.00" },
  { currency: "SAR", buy: "19.30", sell: "19.80" },
  { currency: "MRO", buy: "2.00", sell: "2.10" },
];

export default function ExchangeRatesPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Exchange Rates</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Other Services
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Exchange Rates</h2>
          <p className="text-white/70 leading-relaxed">
            Today&apos;s indicative exchange rates for Trust Bank Gambia. All rates are quoted in Gambian Dalasi (GMD). Rates are subject to change.
          </p>
        </div>
      </div>

      {/* Rates table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* Header row */}
        <div className="grid grid-cols-3 bg-[#0A1F5C] text-white text-xs font-bold uppercase tracking-wider px-6 py-3">
          <span>Currency</span>
          <span className="text-center">Buy (GMD)</span>
          <span className="text-right">Sell (GMD)</span>
        </div>
        {/* Rate rows */}
        <div className="divide-y divide-gray-50">
          {rates.map((r, i) => (
            <div key={r.currency} className={`grid grid-cols-3 px-6 py-3.5 items-center ${i % 2 === 0 ? "bg-white" : "bg-[#F7F8FC]"}`}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-7 rounded-md bg-[#0A1F5C] text-white text-[11px] font-bold flex items-center justify-center tracking-wide">
                  {r.currency}
                </span>
              </div>
              <span className="text-center text-sm font-semibold text-gray-700">{r.buy}</span>
              <span className="text-right text-sm font-semibold text-[#E8A820]">{r.sell}</span>
            </div>
          ))}
        </div>
        <div className="px-6 py-3 bg-gray-50 text-xs text-gray-400">
          * Rates are indicative and subject to change without notice. Contact your nearest branch for the latest rates.
        </div>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Need to exchange currency?</h3>
          <p className="text-sm text-gray-500">Visit any Trust Bank branch or contact our treasury team for large-value foreign exchange transactions.</p>
        </div>
        <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all whitespace-nowrap">
          Find a Branch
        </a>
      </div>
    </div>
  );
}
