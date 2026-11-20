function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export default function CorporateCurrentPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Corporate Current Account</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            Corporate Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Corporate Current Account</h2>
          <p className="text-white/70 leading-relaxed">
            A dedicated transactional account for companies, NGOs, and institutions. Manage high-volume payments and collections with full banking support.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: "Dedicated Relationship Manager", desc: "A single point of contact for all your banking needs." },
          { title: "Bulk Payment Processing", desc: "Pay salaries, suppliers, and vendors in a single transaction." },
          { title: "RTGS & ACH Transfers", desc: "Same-day and next-day electronic fund transfers." },
          { title: "Cheque Facility", desc: "Unlimited cheque book issuance for business payments." },
          { title: "Internet Banking", desc: "Multi-user corporate internet banking with approval workflows." },
          { title: "Overdraft Facility", desc: "Revolving overdraft subject to credit assessment." },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#E8A820] hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#E8A820]/15 flex items-center justify-center mb-3">
              <CheckIcon />
            </div>
            <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-7">
        <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-lg mb-5">Account Opening Requirements</h3>
        <ul className="space-y-3">
          {[
            "Certificate of Incorporation / Registration",
            "Memorandum & Articles of Association",
            "Board Resolution authorising account opening",
            "Valid IDs of all signatories and directors",
            "Recent passport photographs of signatories",
            "Tax Identification Number (TIN)",
            "Business address / registered office proof",
          ].map((r, i) => (
            <li key={r} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-6 h-6 rounded-full bg-[#E8A820]/15 text-[#E8A820] flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Open a corporate account</h3>
          <p className="text-sm text-gray-500">Contact our Corporate Banking team to get started.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="mailto:info@tblgambia.com?subject=Corporate Account Opening" className="bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)]">Contact Us</a>
          <a href="/about/branches" className="border border-gray-300 text-[#0A1F5C] font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#0A1F5C] transition-all">Find a Branch</a>
        </div>
      </div>
    </div>
  );
}
