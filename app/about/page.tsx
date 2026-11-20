import Navbar from "@/components/Navbar";
import Image from "next/image";

const board = [
  { name: "Mr. Franklin Hayford",     role: "Chairman",                  img: "/about/franklin.jpg" },
  { name: "Ms. Njilan Senghore",       role: "Managing Director",         img: "/about/md.jpg" },
  { name: "Omar Mboob",               role: "Deputy Managing Director",   img: "/about/DMD.jpg" },
  { name: "Mrs. Angela Andrews-Njie", role: "Director",                  img: "/about/angala.jpg" },
  { name: "Mr. Saloum Malang",        role: "Director",                  img: "/about/saloum.jpg" },
  { name: "Mr. Ansumana L.N. Touray", role: "Director",                  img: "/about/ansumana.jpg" },
  { name: "Mrs. Haddy Sallah",        role: "Director",                  img: "/about/haddy-sallah.jpg" },
  { name: "Mr. Abdoulie Jallow",      role: "Director",                  img: "/about/abdoulie.jpg" },
];

const management = [
  { name: "Njilan Senghore",    role: "Managing Director",                     img: "/about/md.jpg" },
  { name: "Omar Mboob",        role: "Deputy Managing Director",               img: "/about/DMD.jpg" },
  { name: "Muhammed M. Sisay", role: "Head of Treasury",                       img: "/about/MUHAMMED-M.-CEESAY-HOD-Treasury-.jpg" },
  { name: "Yahya Corr",        role: "Head of Internal Audit",                 img: "/about/YAHYA-CORR-HOD-Internal-Audit-.jpg" },
  { name: "Fatou Lili Drammeh",role: "Head of Legal & Compliance",             img: "/about/Fatou-Lili-main.jpg" },
  { name: "Modou Lowe",        role: "Head of Retail Banking",                 img: "/about/lowe.jpg" },
  { name: "Momodou Trawally",  role: "Head of Finance, Admin & HR",            img: "/about/tra.jpg" },
  { name: "Amadou O. Jallow",  role: "Head of Information Technology",         img: "/about/mis.png" },
  { name: "Kebba Joof",        role: "Head of Risk Management",                img: "/about/kebba-1.jpg" },
  { name: "Tumani Dembajang",  role: "Head of Corporate Banking",              img: "/about/tumani.jpg" },
];

const awards = [
  { org: "The Banker Magazine", award: "Bank of the Year", years: "2003, 2004, 2005 · 2010, 2011, 2016" },
  { org: "Global Finance",      award: "Best Emerging Market Bank", years: "2003 – 2008 (6 consecutive years)" },
  { org: "GCCI",                award: "Bank of the Year", years: "2002, 2004, 2005, 2009, 2010" },
];

const stats = [
  { num: "1997", label: "Established" },
  { num: "400+", label: "Staff Nationwide" },
  { num: "18",   label: "Locations" },
  { num: "27+",  label: "Years of Banking" },
];

function PersonCard({ person }: { person: { name: string; role: string; img: string } }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300">
      <Image
        src={person.img}
        alt={person.name}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Always-visible name strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1F5C]/90 via-[#0A1F5C]/60 to-transparent pt-10 pb-4 px-4">
        <p className="font-[family-name:var(--font-sora)] text-white font-bold text-sm leading-tight">{person.name}</p>
        <p className="text-[#E8A820] text-xs font-semibold mt-0.5">{person.role}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0A1F5C] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #E8A820 0%, transparent 60%)" }} />
        <div className="max-w-6xl mx-auto px-5 py-24 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A820] animate-pulse" />
              Trusted Since 1997
            </div>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              About<br />
              <span className="text-[#E8A820]">Trust Bank</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              A leading commercial bank in The Gambia — serving individuals, businesses, and institutions with integrity since 1997.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#E8A820]">
        <div className="max-w-6xl mx-auto px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className={`${i < stats.length - 1 ? "md:border-r md:border-[#c88b0e]" : ""}`}>
              <div className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-white">{s.num}</div>
              <div className="text-xs font-bold text-white/80 uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Who We Are */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Our Story</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">Who We Are</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-[#0A1F5C]">Trust Bank</strong> was incorporated on <strong className="text-[#0A1F5C]">July 3rd, 1997</strong> to take over the business of Meridien Biao Bank Gambia and began operations on <strong className="text-[#0A1F5C]">October 1st</strong> the same year. The bank is engaged in Commercial, Corporate &amp; International banking.
              </p>
              <p>
                The ownership structure is quite diverse. The major shareholders are Social Security &amp; Housing Finance Corporation, DataBank of Ghana, and other prominent Gambian institutions and individuals.
              </p>
              <p>
                The bank was listed on the Ghana Stock Exchange in <strong className="text-[#0A1F5C]">November 2002</strong> — the first cross-border listing in the sub-region.
              </p>
              <p>
                Since incorporation, Trust Bank has opened branches across the entire country — spanning Banjul and Kanifing municipalities and all major regions: West Coast, Lower River, North Bank, Central River, and Upper River Regions.
              </p>
              <p>
                Today, our team of over <strong className="text-[#0A1F5C]">400 highly skilled staff</strong> serves customers across <strong className="text-[#0A1F5C]">18 locations</strong> nationwide. Leveraging cutting-edge IT infrastructure, Trust Bank provides innovative Digital Banking solutions including Internet Banking, Mobile Banking, Bill Payments, and ATM services.
              </p>
              <p>
                Through our strong commitment to <strong className="text-[#0A1F5C]">Corporate Social Responsibility</strong>, Trust Bank supports national development in Education, Health, Sports, and Disaster Relief — including sponsoring top GABECE students and adopting key medical facilities across the country.
              </p>
            </div>
            {/* Awards */}
            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#0A1F5C] mb-4">Recognition &amp; Awards</h3>
              {awards.map((a) => (
                <div key={a.award + a.org} className="border border-gray-100 rounded-2xl p-5 hover:border-[#E8A820] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E8A820]/15 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#0A1F5C] text-sm">{a.award}</p>
                      <p className="text-xs text-gray-500">{a.org}</p>
                      <p className="text-xs text-[#E8A820] font-semibold mt-1">{a.years}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">What Drives Us</div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C] mb-8">Our Mission</h2>
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-[#E8A820]/15 flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Our mission is to be the <strong className="text-[#0A1F5C]">leading bank in The Gambia</strong> by operating a profitable banking institution which meets the needs of all local, international, corporate, and individual clients, while delivering excellent returns to our shareholders.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              To achieve this, we strive to set new standards by providing quality services and innovative products, powered by an inspired team committed to serving our customers, our environment, and the wider community with dedication and care.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Leadership</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">Board of Directors</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {board.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Our Team</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">Management Team</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {management.map((p) => <PersonCard key={p.name} person={p} />)}
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
