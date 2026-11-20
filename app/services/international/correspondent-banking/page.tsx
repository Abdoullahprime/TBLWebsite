const banks = [
  {
    name: "Bank of Beirut London",
    address: "17A Curson Street, London",
    zip: "W1J 5HS",
    country: "United Kingdom",
    bic: "BRBAGB2L",
  },
  {
    name: "Ghana INT'L Bank",
    address: "67 Cheapside, Regina House, London",
    zip: "EC2V 6AV",
    country: "United Kingdom",
    bic: "GHIBGB2L",
  },
  {
    name: "Ghana Commercial Bank",
    address: "High Street Accra, P.O. Box 2671",
    zip: "",
    country: "Ghana",
    bic: "GHCBGHAC",
  },
  {
    name: "Unicredit Italiano",
    address: "INT'L Corresponding Banking, Viale Bodio 29, B3 Milan",
    zip: "",
    country: "Italy",
    bic: "UNCRITMM",
  },
  {
    name: "Ecobank Senegal",
    address: "8 Avenue Leopold S. Senghor, B.P 9095, Dakar",
    zip: "",
    country: "Senegal",
    bic: "ECOCSNDA",
  },
  {
    name: "Skandinaviska Enskilda Banken",
    address: "S-106 40, Stockholm",
    zip: "",
    country: "Sweden",
    bic: "ESSESESS",
  },
  {
    name: "AFEXIM BANK",
    address: "72(B) El Maahad El-Eshteraky Street, Heliopoli, P.O. Box 11341 Cairo",
    zip: "",
    country: "Egypt",
    bic: "AFXMEGCA",
  },
  {
    name: "AKTIF BANK",
    address: "Esentepe District Kore, Şehitleri Street No: 8/1, Şişli, P.O. Box 34394",
    zip: "",
    country: "İstanbul, Turkey",
    bic: "CAYTTRIS",
  },
];

export default function CorrespondentBankingPage() {
  return (
    <div className="space-y-6">
      <nav className="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="/services" className="hover:text-[#0A1F5C]">Services</a>
        <span>/</span>
        <a href="/services/international/international-banking" className="hover:text-[#0A1F5C]">International Banking</a>
        <span>/</span>
        <span className="text-[#0A1F5C] font-semibold">Correspondent Banks</span>
      </nav>

      <div className="bg-[#0A1F5C] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #E8A820 0%, transparent 55%)" }} />
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            International Banking
          </div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white mb-3">Correspondent Banks</h2>
          <p className="text-white/70 leading-relaxed">
            Our international partners that enable smooth cross-border transactions — from SWIFT transfers to documentary credits across the globe.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {banks.map((bank) => (
          <div
            key={bank.bic}
            className="bg-[#0A1F5C] rounded-2xl p-6 hover:bg-[#0d2870] hover:shadow-xl transition-all group relative overflow-hidden border-l-[3px] border-[#E8A820]"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle at 90% 10%, #E8A820 0%, transparent 50%)" }} />
            <div className="relative z-10">
              <h3 className="font-[family-name:var(--font-sora)] font-bold text-white mb-1 group-hover:text-[#E8A820] transition-colors">
                {bank.name}
              </h3>
              <p className="text-xs text-[#E8A820] font-semibold mb-3 uppercase tracking-wider">{bank.country}</p>
              <p className="text-sm text-white mb-3">{bank.address}{bank.zip ? `, ${bank.zip}` : ""}</p>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5">
                <span className="text-xs text-white/50">BIC</span>
                <span className="text-xs font-mono font-bold text-[#E8A820] tracking-wider">{bank.bic}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-1">Need help with an international transfer?</h3>
          <p className="text-sm text-gray-500">Contact our treasury team or visit any branch to initiate a SWIFT transfer or documentary credit.</p>
        </div>
        <a href="mailto:info@tblgambia.com?subject=International Transfer Enquiry"
          className="bg-[#E8A820] text-[#0A1F5C] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#F5C842] transition-all shadow-[0_4px_16px_rgba(232,168,32,0.25)] whitespace-nowrap">
          Contact Treasury
        </a>
      </div>
    </div>
  );
}
