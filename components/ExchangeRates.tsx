const rates = [
  { currency: "US Dollar",          code: "USD",        buy: "72.00",   sell: "74.00"  },
  { currency: "Pound Sterling",      code: "GBP",        buy: "96.00",   sell: "98.00"  },
  { currency: "Euro",                code: "EUR",        buy: "84.50",   sell: "86.25"  },
  { currency: "CFA Franc",           code: "CFA ×5000",  buy: "550.00",  sell: "563.50" },
  { currency: "Swedish Kroner",      code: "SEK ×100",   buy: "633.00",  sell: "820.00" },
  { currency: "Australian Dollar",   code: "AUD",        buy: "43.50",   sell: "44.00"  },
  { currency: "Japanese Yen",        code: "JPY ×100",   buy: "44.87",   sell: "45.40"  },
  { currency: "Saudi Riyal",         code: "SAR",        buy: "17.80",   sell: "18.00"  },
  { currency: "Canadian Dollar",     code: "CAD",        buy: "49.50",   sell: "50.50"  },
  { currency: "Swiss Franc",         code: "CHF",        buy: "76.81",   sell: "77.65"  },
  { currency: "Norwegian Kroner",    code: "NOK ×100",   buy: "628.03",  sell: "640.00" },
  { currency: "Ghanaian Cedi",       code: "GHC",        buy: "10.31",   sell: "10.73"  },
  { currency: "Danish Kroner",       code: "DKK ×100",   buy: "960.00",  sell: "980.00" },
];

export default function ExchangeRates() {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Forex</div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">
              Exchange Rates
            </h2>
            <p className="text-xs text-gray-400">All rates in Gambian Dalasi (GMD) · Indicative only</p>
          </div>
        </div>

        {/* Table card */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_auto_auto_auto] bg-[#0A1F5C] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white/70">
            <span>Currency</span>
            <span className="w-24 text-right text-green-400">Buy (GMD)</span>
            <span className="w-6" />
            <span className="w-24 text-right text-red-400">Sell (GMD)</span>
          </div>

          {/* Rows */}
          {rates.map((r, i) => (
            <div
              key={r.code}
              className={`grid grid-cols-[1fr_auto_auto_auto] items-center px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-[#0A1F5C]/[0.025] transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
              }`}
            >
              {/* Currency name + code badge */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0A1F5C]/8 flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-black text-[#0A1F5C] leading-none text-center">
                    {r.code.replace(/\s×\d+/, "")}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0A1F5C]">{r.currency}</div>
                  <div className="text-[11px] text-gray-400">{r.code}</div>
                </div>
              </div>

              {/* Buy */}
              <div className="w-24 text-right">
                <span className="inline-flex items-center gap-1 text-sm font-bold text-green-600">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <polygon points="5,1 9,9 1,9"/>
                  </svg>
                  {r.buy}
                </span>
              </div>

              {/* Divider pip */}
              <div className="w-6 flex justify-center">
                <div className="w-px h-5 bg-gray-200" />
              </div>

              {/* Sell */}
              <div className="w-24 text-right">
                <span className="inline-flex items-center gap-1 text-sm font-bold text-red-500">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <polygon points="5,9 9,1 1,1"/>
                  </svg>
                  {r.sell}
                </span>
              </div>
            </div>
          ))}

          {/* Footer legend */}
          <div className="bg-[#0A1F5C]/[0.03] px-6 py-3 flex items-center gap-6 text-[11px] text-gray-500">
            <span className="flex items-center gap-1.5 text-green-600 font-semibold">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"><polygon points="5,1 9,9 1,9"/></svg>
              Buy rate
            </span>
            <span className="flex items-center gap-1.5 text-red-500 font-semibold">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"><polygon points="5,9 9,1 1,1"/></svg>
              Sell rate
            </span>
            <span className="ml-auto">Rates subject to change without notice</span>
          </div>
        </div>
      </div>
    </section>
  );
}
