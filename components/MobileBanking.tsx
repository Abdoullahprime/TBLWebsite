import Image from "next/image";

export default function MobileBanking() {
  return (
    <section className="bg-[#F5F5F5] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── Left: stacked phone mockups ── */}
          <div className="flex justify-center items-end relative" style={{ minHeight: 520 }}>

            {/* Back phone — slightly offset, showing top half */}
            <div
              className="absolute"
              style={{ bottom: 0, left: "50%", transform: "translateX(-75%) translateY(-40px) rotate(-6deg)", zIndex: 1 }}
            >
              <div className="relative w-[200px] h-[380px] rounded-[2.8rem] bg-[#0A1F5C] shadow-2xl overflow-hidden border-[6px] border-[#1a3178]">
                {/* Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0A1F5C] rounded-full z-10" />
                {/* Screen — crop bottom 12% to hide Android nav */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/app-screen-2.png"
                    alt="Trust Bank App Banking Screen"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: "top", height: "112%" }}
                  />
                </div>
              </div>
            </div>

            {/* Front phone */}
            <div
              className="relative"
              style={{ zIndex: 2, marginLeft: 60 }}
            >
              <div className="relative w-[220px] h-[440px] rounded-[3rem] bg-[#0A1F5C] shadow-[0_32px_80px_rgba(10,31,92,0.35)] overflow-hidden border-[6px] border-[#1a3178]">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0A1F5C] rounded-full z-10" />
                {/* Screen — crop bottom 12% to hide Android nav */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/app-screen-1.png"
                    alt="Trust Bank App Accounts Screen"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: "top", height: "112%" }}
                  />
                </div>
                {/* Home bar (iPhone style) */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/40 z-10" />
              </div>
            </div>
          </div>

          {/* ── Right: copy + QR + store buttons ── */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-3">Mobile Banking</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-[#0A1F5C] leading-tight mb-5">
              Bank on the go,<br />
              <span className="text-[#E8A820]">anytime, anywhere</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              Trust Bank welcomes you to our <strong className="text-[#0A1F5C]">Mobile Banking Service</strong> — a simple and easy-to-use system that offers round-the-clock, stress-free banking for our valued customers.
            </p>

            {/* Features */}
            <ul className="space-y-2.5 mb-10">
              {[
                "Instant GMD transfers to any Gambian bank",
                "Pay NAWEC, Airtime and other utilities",
                "Real-time SMS & push notifications",
                "Biometric login and two-factor authentication",
              ].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#E8A820]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#E8A820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* QR + store buttons */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-center gap-6 flex-wrap">
              <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                <Image src="/qr-code.png" alt="QR Code" width={140} height={140} className="rounded-lg" />
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Scan to download</span>
              </div>
              <div className="w-px h-20 bg-gray-200 hidden sm:block" />
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold text-[#0A1F5C] mb-1">Get Our App Now</p>
                <a href="#" className="block hover:opacity-85 transition-opacity">
                  <Image src="/appstore.png" alt="Download on the App Store" width={140} height={42} className="object-contain" />
                </a>
                <a href="#" className="block hover:opacity-85 transition-opacity">
                  <Image src="/googleplay.png" alt="Android App on Google Play" width={140} height={42} className="object-contain" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
