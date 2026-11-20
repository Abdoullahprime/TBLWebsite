const links = [
  {
    label: "Retail Banking",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    label: "Corporate Banking",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A1F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/><path d="M9 21V9"/>
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
];

export default function QuickLinks() {
  return (
    /* Split background: top half gold, bottom half navy — card sits centered on boundary */
    <div className="relative py-6">
      <div className="absolute inset-0 flex flex-col pointer-events-none" aria-hidden="true">
        <div className="flex-1 bg-[#E8A820]" />
        <div className="flex-1 bg-[#0A1F5C]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-around divide-x divide-gray-200">
            {links.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex flex-col items-center gap-1.5 group no-underline flex-1 px-2 sm:px-4"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center group-hover:bg-[#E8A820]/15 group-hover:scale-105 transition-all">
                  {link.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#0A1F5C] text-center leading-tight group-hover:text-[#E8A820] transition-colors">
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
