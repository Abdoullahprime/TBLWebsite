export default function AGMPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="bg-[#0A1F5C] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            About Us
          </div>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-3">Annual General Meeting</h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Notice and Agenda for the Twenty-Eighth Annual General Meeting of Trust Bank PLC.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        {/* Notice */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-4">Notice of Annual General Meeting</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Notice is hereby given that the <strong>Twenty-Eighth Annual General Meeting</strong> of Trust Bank will be held on <strong>2nd July 2026 at 3.00 p.m.</strong> at the Ocean Bay Hotel, Cape Point.
          </p>

          <h3 className="font-[family-name:var(--font-sora)] font-semibold text-[#0A1F5C] mb-3">Ordinary Business — Ordinary Resolutions</h3>
          <ol className="space-y-2.5">
            {[
              "To receive and adopt the Annual Report and Consolidated Accounts for the year ended 31st December 2025.",
              "To declare a final dividend of 60 bututs (sixty bututs) per share for the year ended 31st December 2025.",
              "To re-elect Directors: Mr. Saloum Malang, Mr. Angela Andrews, Mrs. Haddy Sallah.",
              "To approve the remuneration of Directors.",
              "To appoint PKF as Auditors of the Bank until the conclusion of the next Annual General Meeting.",
              "To authorise the Board to determine the remuneration of the Auditors.",
              "To transact any other business appropriate to be dealt with at any Annual General Meeting.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-6 h-6 rounded-full bg-[#0A1F5C] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        {/* Proxy */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-3">Proxy</h2>
          <p className="text-gray-600 leading-relaxed">
            A member entitled to attend and vote at the Annual General Meeting is entitled to appoint a proxy to attend and vote instead of them. A proxy need not be a member of the Company. A blank proxy is attached to the Annual Report.
          </p>
          <p className="text-sm text-gray-500 mt-4 font-medium">— Fatou Lili Drammeh, Board Secretary</p>
        </div>

        {/* Dividend */}
        <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-sora)] font-bold text-white text-xl mb-4">Final Dividend &amp; Closure of Register</h2>
            <div className="space-y-3 text-sm text-white/70 leading-relaxed">
              <p>Trust Bank is pleased to announce the payment of final dividends for the year 2025.</p>
              <p>All members in the Register of shareholders as at close of business on <strong className="text-white">Monday 29th June 2026</strong> will qualify for the final dividends.</p>
              <p>The Register of Shareholders will be closed on <strong className="text-white">Tuesday 30th June 2026</strong>.</p>
              <p>Dividend warrants can be collected from the Bank&apos;s Head Office at <strong className="text-white">3-4 Ecowas Avenue, Banjul</strong> effective <strong className="text-white">Friday 3rd July 2026</strong> between 8 a.m. and 1 p.m.</p>
            </div>
            <p className="text-xs text-white/40 mt-5 uppercase tracking-wider font-semibold">By Order of the Board</p>
          </div>
        </div>
      </div>
    </div>
  );
}
