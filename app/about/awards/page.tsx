import Image from "next/image";

const awards = [
  {
    title: "Most Outstanding Professional in Banking",
    org: "African Business Executives",
    date: "3rd April 2025",
    desc: "Ms. Njilan Senghore, Managing Director of Trust Bank, was recognised and awarded as the most outstanding professional in banking in the sub-region. Ms. Senghore is among the first women to hold a Managing Director position in The Gambia.",
    img: "/awards/award-md1.jpg",
  },
  {
    title: "Best CSR Bank in West Africa",
    org: "West Africa Bankers' Association (WABA) Awards",
    date: "1st February 2025",
    desc: "Trust Bank was honoured with the Best Bank in West Africa for Corporate Social Responsibility at the WABA Annual Awards Night held at the Freetown International Conference Centre. The award was received by Ms. Njilan Senghore.",
    img: "/awards/award.jpg",
  },
];

const galleryImages = [
  { src: "/awards/award mmd.jpg", alt: "Award ceremony" },
  { src: "/awards/award-3.jpg", alt: "Award presentation" },
  { src: "/awards/award-dmd.jpg", alt: "Award ceremony" },
  { src: "/awards/award2.jpg", alt: "Award ceremony" },
  { src: "/awards/awar-md.jpg", alt: "Award ceremony" },
  { src: "/awards/awar4.jpg", alt: "Award ceremony" },
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="bg-[#0A1F5C] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            About Us
          </div>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-3">Awards &amp; Recognition</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            At Trust Bank, excellence is not just a goal — it is a way of doing business. Over the years, the Bank has earned a reputation for integrity, innovation, and outstanding service.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        {/* Recent awards */}
        <section>
          <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-5">Recent Awards</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {awards.map((award) => (
              <div key={award.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <div className="relative h-48 bg-[#0A1F5C]">
                  <Image src={award.img} alt={award.title} fill className="object-cover object-top opacity-90" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="bg-[#E8A820]/15 text-[#8a5e00] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{award.org}</span>
                    <span className="text-xs text-gray-400">{award.date}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-5">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0A1F5C]">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        <p className="text-sm text-gray-500 leading-relaxed text-center max-w-2xl mx-auto">
          These accolades are a testament to the dedication and hard work of our team and the trust our customers place in us. Trust Bank will continue to strive for excellence, uphold the highest standards, and innovate to meet the evolving needs of our clients.
        </p>
      </div>
    </div>
  );
}
