import Image from "next/image";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const features = [
  "Account balance enquiry",
  "Mini statement / transaction history",
  "Funds transfer to Trust Bank accounts",
  "Inter-bank funds transfer",
  "Mobile top-up for all networks",
  "Bill payment",
  "Account management",
  "Debit card management",
  "Loan application and tracking",
  "Cheque book request",
  "Personalised notifications and alerts",
];

export default function MobileBankingPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Mobile Banking</span>
      </nav>

      {/* Header */}
      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Digital Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Mobile Banking</h2>
          <p className="text-white/70 leading-relaxed">
            Bank on the go with the Trust Bank mobile app. Transfers, payments, and account management — all from your smartphone, 24/7.
          </p>
        </div>
      </div>

      {/* App showcase */}
      <div className="bg-[#0A1F5C] rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left — text + download */}
          <div className="p-8 flex flex-col justify-center">
            <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-white mb-4">Download the App</h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Available on iOS and Android. Scan the QR code or tap your store button to download Trust Bank Mobile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="#" className="inline-block">
                <Image src="/appstore.png" alt="Download on the App Store" width={140} height={42} className="h-10 w-auto" />
              </a>
              <a href="#" className="inline-block">
                <Image src="/googleplay.png" alt="Get it on Google Play" width={140} height={42} className="h-10 w-auto" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-xl p-2 inline-block">
                <Image src="/qr-code.png" alt="QR code to download the app" width={80} height={80} className="w-20 h-20" />
              </div>
              <p className="text-white/40 text-xs">Scan to download</p>
            </div>
          </div>
          {/* Right — phone mockups */}
          <div className="relative min-h-[300px] flex items-end justify-center gap-4 px-6 pb-0 overflow-hidden">
            {/* Phone 1 */}
            <div className="relative flex-shrink-0 self-end" style={{ width: 120, height: 240 }}>
              {/* Screen content clipped to phone screen area — positioned inside the bezel */}
              <div className="absolute rounded-[12px] overflow-hidden" style={{ top: "5%", left: "12%", right: "12%", bottom: "5%", zIndex: 1 }}>
                <Image src="/app-screen-1.png" alt="Trust Bank app — Accounts" fill sizes="120px" className="object-cover object-top" />
              </div>
              {/* Phone frame on top — its bezel covers the edges of the screen div */}
              <div className="absolute inset-0" style={{ zIndex: 2 }}>
                <Image src="/phone-mockup.png" alt="" fill sizes="120px" className="object-contain" />
              </div>
            </div>
            {/* Phone 2 — taller */}
            <div className="relative flex-shrink-0 self-end mb-3" style={{ width: 130, height: 268 }}>
              <div className="absolute rounded-[12px] overflow-hidden" style={{ top: "5%", left: "12%", right: "12%", bottom: "5%", zIndex: 1 }}>
                <Image src="/app-screen-2.png" alt="Trust Bank app — Banking" fill sizes="130px" className="object-cover object-top" />
              </div>
              <div className="absolute inset-0" style={{ zIndex: 2 }}>
                <Image src="/phone-mockup.png" alt="" fill sizes="130px" className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">What You Can Do</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{f}
            </li>
          ))}
        </ul>
      </div>

      {/* How to register */}
      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">First time?</h3>
          <p className="text-sm text-gray-500">Visit any Trust Bank branch to register for mobile banking. You&apos;ll need your account number and a valid ID.</p>
        </div>
        <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all whitespace-nowrap">
          Find a Branch
        </a>
      </div>
    </div>
  );
}
