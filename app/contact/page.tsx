"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="bg-[#0A1F5C] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-white/70 leading-relaxed">We&apos;re here to help. Reach out through any of the channels below.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { label: "Visit Us", icon: "📍", lines: ["3-4 Ecowas Avenue", "P.O. Box 1018", "Banjul, The Gambia, West Africa"] },
            { label: "Call Us", icon: "📞", lines: ["+220 4225777 / 4225778 / 4225779", "Hotline: 7474447", "3644470 / 9033334"] },
            { label: "Email Us", icon: "✉️", lines: ["info@tblgambia.com", "trustbankgambia.com"] },
          ].map((c) => (
            <div key={c.label} className="bg-white rounded-2xl border border-gray-100 p-7 text-center">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-3">{c.label}</h3>
              {c.lines.map((line) => (
                <p key={line} className="text-sm text-gray-500">{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-5">Send a Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Subject</label>
              <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message</label>
              <textarea rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors resize-none" placeholder="Your message..." />
            </div>
            <button type="submit" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-8 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-[#0A1F5C] rounded-2xl overflow-hidden h-64 flex items-center justify-center relative">
          <p className="text-white/40 text-sm">3-4 Ecowas Avenue, Banjul, The Gambia</p>
        </div>
      </div>
    </div>
  );
}
