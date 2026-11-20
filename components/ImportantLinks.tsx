const links = [
  { title: "Interim Dividend and Closure of Register",           url: "https://trustbankgambia.com/api/get-pdf/INTERIM_DIVIDEND_PAYMENT.pdf",                                                                       tag: "Investor" },
  { title: "Trust Bank Delisting Announcement",                  url: "https://trustbankgambia.com/api/get-pdf/Trust_Bank_Delisting_announcement_1.pdf",                                                             tag: "Investor" },
  { title: "Form of Acceptance — Non-CSD Account Holders",      url: "https://trustbankgambia.com/api/get-pdf/Trust_Bank__NON_CSD_Acct_Holders.pdf",                                                                tag: "Investor" },
  { title: "Trust Bank PLC Tender Offer Circular",               url: "https://trustbankgambia.com/api/get-pdf/Trust_Bank_PLC_Tender_Offer_Circular_12082026.pdf",                                                   tag: "Investor" },
  { title: "Notice & Agenda of 28th AGM — 2nd July 2026",       url: "https://trustbankgambia.com/api/get-pdf/NOTICE__AGENDA_OF_28TH_AGM_2nd_JULY_2026.pdf",                                                        tag: "Corporate" },
  { title: "Rate Change",                                        url: "https://trustbankgambia.com/api/get-pdf/RATE_CHANGE_01042026.pdf",                                                                             tag: "Notice" },
  { title: "Fees & Charges",                                     url: "https://trustbankgambia.com/api/get-pdf/Fees-charges-2023.pdf",                                                                                tag: "Notice" },
  { title: "Reduction in Threshold for Cheque Payments",        url: "https://trustbankgambia.com/api/get-pdf/Thresthole.pdf",                                                                                       tag: "Notice" },
  { title: "Intention to Delist from Ghana Stock Exchange",      url: "https://trustbankgambia.com/api/get-pdf/TBPLC-PRESS-RELEASE-IRO-INTENTION-TO-DELIST-FROM-GSE-GAM-ALEXUS.pdf",                                 tag: "Investor" },
  { title: "Risk Appetite Statement",                            url: "https://trustbankgambia.com/api/get-pdf/RISK-APPETITE-STATEMENT-ACCOUNT-OPERATION-approved-19th-December-2024-1.pdf",                         tag: "Corporate" },
  { title: "Upgraded Mobile App and Online Banking Platforms",   url: "https://trustbankgambia.com/api/get-pdf/MOBILE-APP-MESSAGE.pdf",                                                                               tag: "Digital" },
];

const tagStyle: Record<string, string> = {
  Investor:  "bg-[#0A1F5C]/10 text-[#0A1F5C]",
  Corporate: "bg-[#E8A820]/15 text-[#8a5e00]",
  Notice:    "bg-red-100 text-red-700",
  Digital:   "bg-purple-100 text-purple-700",
};

function PdfIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
      <line x1="9" y1="17" x2="13" y2="17"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

export default function ImportantLinks() {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Documents</div>
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0A1F5C]">Important Links</h2>
          </div>
          <p className="text-xs text-gray-400">Click any document to open the PDF in a new tab.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-200 px-5 py-5 flex items-start gap-4 hover:border-[#E8A820] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* PDF icon bubble */}
              <div className="w-10 h-10 rounded-xl bg-[#0A1F5C]/8 flex items-center justify-center flex-shrink-0 text-[#0A1F5C] group-hover:bg-[#E8A820]/15 group-hover:text-[#E8A820] transition-colors">
                <PdfIcon />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 inline-block ${tagStyle[link.tag] ?? "bg-gray-100 text-gray-500"}`}>
                  {link.tag}
                </span>
                <p className="text-sm font-semibold text-[#0A1F5C] leading-snug group-hover:text-[#E8A820] transition-colors line-clamp-2">
                  {link.title}
                </p>
              </div>

              {/* Download arrow */}
              <div className="flex-shrink-0 text-gray-300 group-hover:text-[#E8A820] transition-colors mt-1">
                <DownloadIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
