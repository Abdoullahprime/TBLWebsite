const notices = [
  "Central Bank of The Gambia has decreased the threshold for cheque payments via ACP/ACH to D50,000 and below, effective 15th July 2024.",
  "Receive remittances from any of our 18 branches or our growing network of Agent partners.",
  "Customers are urged to visit their nearest branch to request ATM card replacement — takes no more than 3 working days.",
  "Old magnetic strip ATM cards have been phased out and replaced with chip and PIN technology to protect against fraud.",
  "A monthly E-Banking fee of D15.00 applies to all savings and current accounts effective October 1st, 2021.",
  "Mobile App and Online Banking are available 24 hours a day, 7 days a week.",
  "Visit our homepage under FEES & CHARGES for up-to-date information.",
];

function TickerItems() {
  return (
    <>
      {notices.map((msg, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="text-sm text-white/85 px-8">{msg}</span>
          <span className="inline-block w-1 self-stretch bg-[#E8A820] rounded-full" style={{ minHeight: "1.5em" }} />
        </span>
      ))}
    </>
  );
}

export default function NewsTicker() {
  return (
    <div className="bg-[#0A1F5C] text-white py-2.5 overflow-hidden flex items-center gap-3">
      {/* Label */}
      <div className="flex-shrink-0 bg-[#E8A820] text-[#0A1F5C] text-xs font-bold px-4 py-1 uppercase tracking-widest ml-5 rounded-sm whitespace-nowrap">
        Notice
      </div>

      {/* Scrolling text */}
      <div className="flex-1 overflow-hidden relative">
        <div className="flex whitespace-nowrap items-stretch animate-ticker">
          <TickerItems />
          {/* duplicate for seamless loop */}
          <TickerItems />
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
          display: inline-flex;
          align-items: center;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
