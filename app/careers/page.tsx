import Navbar from "@/components/Navbar";

const openings = [
  {
    title: "Teller",
    department: "Finance",
    location: "Banjul, Gambia",
    type: "Full-time",
    description:
      "Serve customers at the counter with accuracy and professionalism, handling deposits, withdrawals, and other transactions in line with Trust Bank standards.",
  },
];

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Health & Wellness",
    desc: "Comprehensive health insurance and wellness programmes for you and your family.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Professional Development",
    desc: "Continuous learning, mentorship, and clear career growth pathways within the bank.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Work-Life Balance",
    desc: "Full-time roles with standard working hours so you can thrive inside and outside of work.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Financial Benefits",
    desc: "Competitive salary, performance bonuses, and staff banking privileges.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Collaborative Culture",
    desc: "Work alongside dedicated colleagues shaping the future of banking in The Gambia.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Recognition & Rewards",
    desc: "Regular performance reviews and staff recognition programmes that celebrate your achievements.",
  },
];

const values = [
  { label: "Integrity", color: "bg-[#0A1F5C]" },
  { label: "Excellence", color: "bg-[#E8A820]" },
  { label: "Innovation", color: "bg-[#0A1F5C]" },
  { label: "Customer Focus", color: "bg-[#E8A820]" },
  { label: "Teamwork", color: "bg-[#0A1F5C]" },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0A1F5C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #E8A820 0%, transparent 60%)" }} />
        <div className="max-w-6xl mx-auto px-5 py-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A820] animate-pulse" />
              We&apos;re Hiring
            </div>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              Careers at<br />
              <span className="text-[#E8A820]">Trust Bank</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              At Trust Bank, we&apos;re always looking for talented individuals who share our values and passion for
              excellence in banking. Join us and be part of a team that&apos;s shaping the future of banking in Gambia.
            </p>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <div className="bg-[#E8A820]">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap items-center gap-3">
          <span className="text-[#0A1F5C] font-bold text-sm mr-2">Our Values:</span>
          {values.map(v => (
            <span key={v.label} className={`${v.color} text-white text-xs font-bold px-4 py-1.5 rounded-full`}>
              {v.label}
            </span>
          ))}
        </div>
      </div>

      {/* Current Openings */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Opportunities</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">Current Openings</h2>
          </div>

          <div className="space-y-5">
            {openings.map((job) => (
              <div
                key={job.title}
                className="border border-gray-200 rounded-2xl p-6 hover:border-[#E8A820] hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-[#0A1F5C]/10 text-[#0A1F5C] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="bg-[#E8A820]/15 text-[#8a5e00] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0A1F5C] mb-1 group-hover:text-[#E8A820] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-3">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {job.location}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{job.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="mailto:info@tblgambia.com?subject=Application: Teller"
                      className="inline-block bg-[#E8A820] text-[#0A1F5C] font-bold px-7 py-3 rounded-xl hover:bg-[#F5C842] transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(232,168,32,0.3)] whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No openings fallback (hidden when there are openings) */}
          {openings.length === 0 && (
            <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl">
              <p className="text-gray-400 text-lg font-medium">No openings right now — check back soon.</p>
              <p className="text-gray-400 text-sm mt-1">You can also send a speculative CV to <a href="mailto:info@tblgambia.com" className="text-[#0A1F5C] underline">info@tblgambia.com</a></p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-12 text-center">
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Why Join Us</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">Benefits &amp; Perks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#0A1F5C] mb-5 group-hover:bg-[#E8A820]/15 transition-colors">
                  {b.icon}
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-base font-bold text-[#0A1F5C] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1F5C] py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-4">
            Don&apos;t see the right role?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Send us your CV and we&apos;ll keep it on file. When a role that matches your skills opens up, you&apos;ll be the first to know.
          </p>
          <a
            href="mailto:info@tblgambia.com?subject=Speculative Application"
            className="inline-block bg-[#E8A820] text-[#0A1F5C] font-bold px-9 py-4 rounded-xl hover:bg-[#F5C842] transition-all hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(232,168,32,0.4)]"
          >
            Send Your CV →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#06143A] text-white/60 py-8">
        <div className="max-w-6xl mx-auto px-5 text-center text-sm">
          <p>3-4 Ecowas Avenue, Banjul · info@tblgambia.com · Hotline: 7474447 / 3644470 / 9033334</p>
          <p className="mt-2 text-white/30">© 2026 Trust Bank PLC. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
