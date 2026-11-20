function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

const pillars = [
  { title: "Health", icon: "🏥", desc: "Supporting healthcare initiatives and medical outreach programmes across The Gambia." },
  { title: "Education", icon: "📚", desc: "Investing in schools, scholarships, and literacy programmes for future generations." },
  { title: "Sports", icon: "⚽", desc: "Sponsoring local sporting events and youth development in athletics and football." },
  { title: "Environment", icon: "🌱", desc: "Promoting green practices, tree planting, and environmental sustainability." },
];

export default function CSRPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="bg-[#0A1F5C] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            About Us
          </div>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-3">Corporate Social Responsibility</h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Trust Bank understands CSR as its responsibility to mitigate the impact of its activities on people, society, and the environment.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:border-[#E8A820] hover:shadow-sm transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-2">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-5">Our CSR Objectives</h2>
          <ul className="space-y-3">
            {[
              "To conduct our business responsibly with people at the centre of our mission",
              "To create sustainable and shared value for shareholders, stakeholders, and the broader society",
              "To prevent and minimise any negative impacts from our operations",
              "To protect and enhance Trust Bank's reputation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-3">Our Commitment</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our CSR policy is a framework that promotes ethical behaviour and value creation for all stakeholders — customers, employees, shareholders, government, and society. We strive to foster a culture of responsible banking throughout our organisation.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-3">Sustainable Business Model</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trust Bank has adopted a business model based on financial inclusion, universal access to financial services, and sustainable profitability. We are committed to adhering to legal requirements, ethical practices, and best banking standards to deliver long-term value for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
