function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const atmLocations = [
  "Bakau Branch", "Bakoteh Branch", "Banjul Branch", "Barra Branch",
  "Brikama Branch", "Brusubi Branch", "Bundung Branch", "Basse Branch",
  "Edward Francis Small Teaching Hospital", "Farafenni Branch",
  "Kairaba Avenue (Police Station)", "Kololi Branch", "Lamin Branch",
  "Latrikunda Branch", "MDI Road", "SahoKunda Branch",
  "Serrekunda Market Branch", "Westfield Branch", "Sinchu Branch",
  "Soma Branch", "Yundum Branch", "Bansang ATM (Hospital)",
  "Bwiam ATM (Hospital)",
];

const features = [
  "Cash Withdrawal",
  "Print Mini Statement",
  "Balance Enquiry",
  "Change PIN",
  "Supports Visa withdrawals",
  "Available 24/7",
];

const pinSteps = [
  "Insert your ATM card into the machine.",
  "Select English as your preferred language.",
  "A 6-digit OTP will be sent to your registered mobile number.",
  "Enter the OTP on the screen and tap Proceed.",
  "You will be prompted to create a 4-digit PIN of your choice.",
  "Re-enter the same PIN to confirm.",
  "Your ATM PIN setup is now successfully completed.",
];

export default function ATMPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">ATM Services</span>
      </nav>

      {/* Header */}
      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Digital Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">ATM Services</h2>
          <p className="text-white/70 leading-relaxed">
            Trust Bank&apos;s nationwide ATM network gives you 24/7 access to your money. With 23 ATM locations across The Gambia, your bank is always close.
          </p>
        </div>
      </div>

      {/* Features + How to apply */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 p-7">
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">ATM Features</h3>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                <span className="flex-shrink-0"><CheckIcon /></span>{f}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-7">
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-3">How to Apply</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Complete the ATM card application form and submit it to your nearest branch. Once processed, you will receive your card along with instructions to generate your PIN.
          </p>
          <a href="mailto:info@tblgambia.com?subject=ATM Card Application"
            className="inline-block bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">
            Request a Card
          </a>
        </div>
      </div>

      {/* PIN Setup */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">ATM PIN Setup Instructions</h3>
        <ol className="space-y-3">
          {pinSteps.map((s, i) => (
            <li key={s} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-7 h-7 rounded-full bg-[#0A1F5C] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>

      {/* ATM Locator */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">ATM Locator <span className="text-sm font-normal text-gray-400 ml-2">— {atmLocations.length} locations</span></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {atmLocations.map((loc) => (
            <div key={loc} className="flex items-center gap-3 bg-[#F7F8FC] rounded-xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#0A1F5C]">{loc}</p>
                <p className="text-xs text-green-600 font-medium">In Service</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
