const newsItems = [
  {
    date: "November 9, 2026",
    category: "Events",
    author: "Momodou Wakka Jagne",
    title: "Trust Bank PLC Managing Director, Ms. Njilan Senghore, Named West African Banker of the Year 2025",
    summary: "Ms. Njilan Senghore, Managing Director of Trust Bank PLC, has been named West African Banker of the Year 2025 in recognition of her outstanding leadership and contributions to banking in the sub-region.",
  },
  {
    date: "October 28, 2026",
    category: "News",
    author: "Alhagie JB Suno",
    title: "Important Update for Our Shareholders — Interim Dividends 2026",
    summary: "Trust Bank PLC is pleased to announce the payment of interim dividends for 2026. All registered shareholders are requested to note the qualifying dates and collection arrangements.",
  },
  {
    date: "October 26, 2026",
    category: "News",
    author: "Alhagie JB Suno",
    title: "Blood Donation Campaign at Trust Bank Westfield Branch",
    summary: "Trust Bank Westfield Branch, in collaboration with the National Blood Transfusion Service (NBTS), came together for a life-saving blood donation campaign. Every drop counts, every hero matters!",
  },
  {
    date: "October 15, 2026",
    category: "News",
    author: "Kabba Sanneh",
    title: "Trust Bank ATM Services Now Fully Integrated with GamSwitch National Network",
    summary: "Great news — Trust Bank ATM services are now fully integrated with the GamSwitch National Network, giving cardholders wider access across all participating ATMs in The Gambia.",
  },
  {
    date: "September 26, 2026",
    category: "News",
    author: "Alhagie JB Suno",
    title: "Delisting of Trust Bank PLC from the Ghana Stock Exchange",
    summary: "Trust Bank PLC announces its delisting from the Ghana Stock Exchange. The Bank remains fully listed on the Securities Exchange of The Gambia.",
  },
  {
    date: "September 22, 2026",
    category: "News",
    author: "Alhagie JB Suno",
    title: "Paying Your University of The Gambia (UTG) Tuition Just Got Easier",
    summary: "Trust Bank customers can now pay their UTG tuition fees conveniently through our branch network and digital banking channels.",
  },
  {
    date: "September 19, 2026",
    category: "Security Alert",
    author: "Kabba Sanneh",
    title: "Urgent Security Alert: Protect Your Account from Phishing",
    summary: "Trust Bank PLC warns about a fake 'Ramadan Gift' ad spreading on social media and WhatsApp. Do not click suspicious links or share your password or OTP with anyone. Contact us immediately if your account is compromised.",
    isAlert: true,
  },
  {
    date: "July 9, 2026",
    category: "News",
    author: "Momodou Wakka Jagne",
    title: "Trust Bank Reports Higher Profit and Asset Growth at 2025 Annual Meeting",
    summary: "Trust Bank reported stronger earnings, asset growth, and an improved capital position during its 2025 financial year, underscoring the bank's resilience in a challenging operating environment.",
  },
];

const categoryColors: Record<string, string> = {
  "Events": "bg-blue-100 text-blue-800",
  "News": "bg-[#E8A820]/15 text-[#8a5e00]",
  "Security Alert": "bg-red-100 text-red-800",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <div className="bg-[#0A1F5C] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-3">News</h1>
          <p className="text-white/70 leading-relaxed">Latest updates, announcements, and events from Trust Bank.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
        {newsItems.map((item) => (
          <article
            key={item.title}
            className={`bg-white rounded-2xl border p-6 hover:shadow-sm transition-all ${item.isAlert ? "border-red-200 bg-red-50" : "border-gray-100"}`}
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColors[item.category] ?? "bg-gray-100 text-gray-600"}`}>
                {item.category}
              </span>
              <span className="text-xs text-gray-400">{item.date}</span>
              <span className="text-xs text-gray-400">· {item.author}</span>
            </div>
            <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-2 leading-snug">{item.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
