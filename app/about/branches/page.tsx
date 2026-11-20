import Navbar from "@/components/Navbar";

const branches = [
  {
    name: "Head Office",
    address: "3/4 Ecowas Avenue",
    region: "Banjul",
    phone: "+220-4225777/8/9",
    fax: "+220-4225781",
    isHQ: true,
  },
  {
    name: "Westfield Branch",
    address: "Westfield Junction, Kanifing",
    region: "Kanifing",
    phone: "+220-4398038/42, +220-4390156",
    fax: "+220-4398039",
  },
  {
    name: "Yundum Branch",
    address: "Banjul International Airport, Yundum",
    region: "West Coast Region",
    phone: "+220-4472914",
    fax: "+220-4472916",
  },
  {
    name: "Lamin Branch",
    address: "Brikama Highway",
    region: "West Coast Region",
    phone: "+220-4474061",
    fax: "+220-4474062",
  },
  {
    name: "Saho Kunda Branch",
    address: "Serrekunda",
    region: "Kanifing",
    phone: "+220-4374076",
    fax: "+220-4374076",
  },
  {
    name: "Farrafenni Branch",
    address: "Farrafenni",
    region: "North Bank Region",
    phone: "+220-5735238",
    fax: "+220-5735007",
  },
  {
    name: "Sinchu Branch",
    address: "Coastal Road Highway",
    region: "West Coast Region",
    phone: "+220-8907060",
  },
  {
    name: "Bakau Branch",
    address: "Sait Matty Road, Bakau",
    region: "Banjul",
    phone: "+220-4495486, +220-4495542",
    fax: "+220-4496229",
  },
  {
    name: "Brikama Branch",
    address: "West Coast Region",
    region: "West Coast Region",
    phone: "+220-4483418, +220-4485265",
    fax: "+220-4483439",
  },
  {
    name: "Kololi Branch",
    address: "Senegambia, Bertil Harding Highway",
    region: "Kanifing",
    phone: "+220-4465303",
    fax: "+220-4465304",
  },
  {
    name: "Latrikunda Sabiji Branch",
    address: "Serrekunda",
    region: "Kanifing",
    phone: "+220-4391780, +220-4398525",
    fax: "+220-4398524",
  },
  {
    name: "Serrekunda Market Branch",
    address: "Mosque Road",
    region: "Kanifing",
    phone: "+220-4399545",
    fax: "+220-4399541",
  },
  {
    name: "Bundung Branch",
    address: "Bundung Highway",
    region: "Kanifing",
    phone: "+220-4379313",
    fax: "+220-4379314",
  },
  {
    name: "Bakoteh Branch",
    address: "Bakoteh",
    region: "Kanifing",
    phone: "+220-4466378",
    fax: "+220-4466373",
  },
  {
    name: "Barra Branch",
    address: "Ferry Terminal",
    region: "North Bank Region",
    phone: "+220-5710408",
    fax: "+220-5710407",
  },
  {
    name: "Basse Branch",
    address: "Basse",
    region: "Upper River Region",
    phone: "+220-5668907",
    fax: "+220-5668318",
  },
  {
    name: "Brusubi Branch",
    address: "Coastal Road, Opposite Africmed Clinic",
    region: "West Coast Region",
    phone: "+220-8807474",
    fax: "+220-8200984",
  },
  {
    name: "Soma Branch",
    address: "Soma",
    region: "Lower River Region",
    phone: "+220-5531631",
    fax: "+220-5531636",
  },
];

const regions = ["All", ...Array.from(new Set(branches.map((b) => b.region)))];

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42C1.6 2.3 2.37 1.37 3.5 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function FaxIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 17 13 17"/><polyline points="22 13 13 13"/><polyline points="22 9 13 9"/><rect x="2" y="3" width="8" height="18" rx="1"/><line x1="6" y1="8" x2="6" y2="8"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export default function BranchesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0A1F5C] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 75% 50%, #E8A820 0%, transparent 60%)" }} />
        <div className="max-w-6xl mx-auto px-5 py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A820] animate-pulse" />
              Nationwide Coverage
            </div>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-4">
              Our <span className="text-[#E8A820]">Branches</span>
            </h1>
            <p className="text-lg text-white/70">
              {branches.length} locations across The Gambia — from Banjul to Basse, we&apos;re close to you.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#E8A820]">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap gap-6 items-center justify-around text-center">
          {[
            { num: "18", label: "Branch Locations" },
            { num: "6", label: "Regions Covered" },
            { num: "27+", label: "Years Serving Gambia" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white">{s.num}</div>
              <div className="text-xs font-bold text-white/80 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Branches grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">

          {/* Head Office featured card */}
          <div className="mb-10 bg-[#0A1F5C] rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#E8A820]/20 flex items-center justify-center flex-shrink-0">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="inline-block bg-[#E8A820] text-[#0A1F5C] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                Head Office
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-white mb-1">3/4 Ecowas Avenue, Banjul</h3>
              <div className="flex flex-wrap gap-4 mt-2 text-white/70 text-sm">
                <span className="flex items-center gap-1.5"><PhoneIcon /> +220-4225777/8/9</span>
                <span className="flex items-center gap-1.5"><FaxIcon /> +220-4225781</span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  info@tblgambia.com
                </span>
              </div>
            </div>
          </div>

          {/* All other branches */}
          <div className="mb-6">
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Branch Network</div>
            <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#0A1F5C]">All Locations</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.filter((b) => !b.isHQ).map((branch) => (
              <div
                key={branch.name}
                className="border border-gray-100 rounded-2xl p-6 hover:border-[#E8A820] hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8A820]/15 transition-colors text-[#0A1F5C]">
                    <PinIcon />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-sm leading-snug group-hover:text-[#E8A820] transition-colors">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-[#E8A820] font-semibold mt-0.5">{branch.region}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3">{branch.address}</p>
                <div className="space-y-1.5 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <PhoneIcon />
                    <span>{branch.phone}</span>
                  </div>
                  {branch.fax && (
                    <div className="flex items-center gap-1.5">
                      <FaxIcon />
                      <span>{branch.fax}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#0A1F5C] mb-1">Need help finding us?</h3>
            <p className="text-gray-500">Call our hotline or send us a message — we&apos;re here to help.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+2204225777" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-7 py-3 rounded-xl hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.3)]">
              Call Us
            </a>
            <a href="mailto:info@tblgambia.com" className="border border-gray-300 text-[#0A1F5C] font-semibold px-7 py-3 rounded-xl hover:border-[#0A1F5C] hover:bg-gray-50 transition-all">
              Email Us
            </a>
          </div>
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
