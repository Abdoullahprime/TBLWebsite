"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Hero */}
      <div className="bg-[#0A1F5C] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-white/60">We&apos;re here to help. Reach out through any of the channels below.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT — info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-5">Get in Touch</h2>
            </div>

            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: "Visit Us",
                lines: ["3-4 Ecowas Avenue, P.O. Box 1018", "Banjul, The Gambia, West Africa"],
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                ),
                label: "Call Us",
                lines: ["+220 4225777 / 4225778 / 4225779", "Hotline: 7474447 · 3644470 · 9033334"],
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: "Email Us",
                lines: ["info@tblgambia.com"],
              },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A1F5C] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {c.icon}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-sm mb-0.5">{c.label}</p>
                  {c.lines.map((l) => <p key={l} className="text-sm text-gray-500">{l}</p>)}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-[#0A1F5C] rounded-2xl h-48 flex items-center justify-center mt-4">
              <p className="text-white/30 text-sm">3-4 Ecowas Avenue, Banjul</p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
            <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
                  <input type="text" placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                <input type="tel" placeholder="+220 ..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Subject</label>
                <input type="text" placeholder="How can we help?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message</label>
                <textarea rows={5} placeholder="Your message..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A1F5C] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-[#E8A820] text-[#0A1F5C] font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">
                Send Message →
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
