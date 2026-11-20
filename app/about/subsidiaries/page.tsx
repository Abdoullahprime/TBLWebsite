import Image from "next/image";

export default function SubsidiariesPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="bg-[#0A1F5C] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            About Us
          </div>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-3">Our Subsidiaries</h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Trust Bank&apos;s subsidiaries extend the Group&apos;s reach in financial services across The Gambia.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[#0A1F5C] rounded-2xl p-8 max-w-md hover:shadow-xl transition-all border-l-[3px] border-[#E8A820] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-5">
              <Image src="/bayba-logo.png" alt="Bayba Financial Services" width={48} height={48} className="w-12 h-12 object-contain" />
            </div>
            <h2 className="font-[family-name:var(--font-sora)] text-xl font-bold text-white mb-2">Bayba Financial Services</h2>
            <p className="text-xs text-[#E8A820] font-semibold uppercase tracking-wider mb-4">Money Transfer Organisation</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Bayba Financial Services is a Money Transfer Organisation providing reliable and fast remittance services across The Gambia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
