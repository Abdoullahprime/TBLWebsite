export default function Topbar() {
  return (
    <div className="bg-[#0A1F5C] text-white/70 text-xs py-2">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-5 items-center flex-wrap">
          <span>🏛 3–4 Ecowas Avenue, Banjul</span>
          <span className="opacity-30">|</span>
          <a href="tel:+2204225777" className="hover:text-[#F5C842] transition-colors">+220 4225777</a>
          <span className="opacity-30">|</span>
          <a href="mailto:info@trustbankgambia.com" className="hover:text-[#F5C842] transition-colors">
            info@trustbankgambia.com
          </a>
        </div>
        <div className="flex gap-5">
          {["Personal", "Business", "Careers", "Downloads"].map((item) => (
            <a key={item} href="#" className="hover:text-[#F5C842] transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
