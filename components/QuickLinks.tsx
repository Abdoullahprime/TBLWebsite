const links = [
  {
    label: "Retail Banking",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    label: "Corporate Banking",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    label: "Digital Banking",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    label: "International",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: "Personal Loans",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    label: "SME & Business",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export default function QuickLinks() {
  return (
    <div className="bg-white py-6 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="border border-gray-200 rounded-2xl px-6 py-5 shadow-sm">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {links.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex flex-col items-center gap-2 group min-w-[80px] no-underline"
              >
                <div className="w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center group-hover:bg-[#E8A820]/15 group-hover:scale-105 transition-all">
                  {link.icon}
                </div>
                <span className="text-xs font-bold text-[#0A1F5C] text-center leading-tight group-hover:text-[#E8A820] transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
