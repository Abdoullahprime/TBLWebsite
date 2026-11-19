const cols = [
  {
    heading: "Personal",
    links: ["Savings Accounts", "Current Accounts", "Personal Loans", "Mortgage", "Debit Cards"],
  },
  {
    heading: "Business",
    links: ["Business Accounts", "Trade Finance", "SME Loans", "Payroll Services", "FX & Remittances"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "News & Media", "Fraud Alerts", "Contact Us"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060f2a] text-white/60 text-sm pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-3 no-underline mb-4">
              <div className="w-10 h-10 bg-[#0A1F5C] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="10" width="18" height="11" rx="2"/>
                  <path d="M12 3l9 7H3l9-7z"/>
                  <line x1="12" y1="14" x2="12" y2="17"/>
                </svg>
              </div>
              <div>
                <div className="font-[family-name:var(--font-sora)] font-bold text-[17px] text-white leading-tight">Trust Bank</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">The Gambia</div>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              A fully licensed commercial bank serving individuals and businesses across The Gambia since 1997.
            </p>
            <div className="space-y-1.5 text-sm text-white/50">
              <div><span className="text-white/80">Head Office:</span> 3–4 Ecowas Avenue, Banjul</div>
              <div><span className="text-white/80">Phone:</span> +220 4225777 / 4225778</div>
              <div><span className="text-white/80">Email:</span> info@trustbankgambia.com</div>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="font-[family-name:var(--font-sora)] text-xs font-bold text-white/90 uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#F5C842] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-3">
          <span className="text-white/30 text-xs">
            © 2026 <span className="text-white/50">Trust Bank Gambia Ltd.</span> All rights reserved. · Regulated by the Central Bank of The Gambia.
          </span>
          <div className="flex gap-2">
            {["CBG Licensed", "GDIC Insured", "ISO 27001"].map((b) => (
              <span key={b} className="border border-white/10 bg-white/5 text-white/40 text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wide">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
