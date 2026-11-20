import Image from "next/image";

const newsItems = [
  {
    date: "Nov 9, 2026",
    category: "Events",
    author: "Momodou Wakka Jagne",
    title: "Trust Bank MD, Ms. Njilan Senghore, Named West African Banker of the Year 2025",
    summary: "Ms. Njilan Senghore, Managing Director of Trust Bank PLC, has been named West African Banker of the Year 2025 in recognition of her outstanding leadership across the sub-region.",
    img: "/awards/award-md1.jpg",
  },
  {
    date: "Oct 28, 2026",
    category: "News",
    author: "Alhagie JB Suno",
    title: "Important Update for Our Shareholders — Interim Dividends 2026",
    summary: "Trust Bank PLC is pleased to announce the payment of interim dividends for 2026. All registered shareholders are requested to note the qualifying dates and collection arrangements.",
    img: "/awards/award.jpg",
  },
  {
    date: "Oct 26, 2026",
    category: "News",
    author: "Alhagie JB Suno",
    title: "Blood Donation Campaign at Trust Bank Westfield Branch",
    summary: "Trust Bank Westfield Branch, in collaboration with the National Blood Transfusion Service (NBTS), came together for a life-saving blood donation campaign.",
    img: "/awards/award-3.jpg",
  },
  {
    date: "Oct 15, 2026",
    category: "News",
    author: "Kabba Sanneh",
    title: "Trust Bank ATM Services Now Fully Integrated with GamSwitch National Network",
    summary: "Trust Bank has integrated its ATM infrastructure with the GamSwitch national interbank network, enabling customers to access cash at any ATM across The Gambia.",
    img: null,
    bgColor: "#0A1F5C",
  },
  {
    date: "Sep 26, 2026",
    category: "News",
    author: "Alhagie JB Suno",
    title: "Delisting of Trust Bank PLC from the Ghana Stock Exchange",
    summary: "Trust Bank PLC announces the completion of its delisting from the Ghana Stock Exchange following a formal tender offer to shareholders.",
    img: null,
    bgColor: "#0A1F5C",
  },
  {
    date: "Sep 22, 2026",
    category: "News",
    author: "Alhagie JB Suno",
    title: "Paying Your UTG Tuition Just Got Easier",
    summary: "Students at the University of The Gambia can now pay tuition fees directly through Trust Bank's branch network and mobile banking platform.",
    img: null,
    bgColor: "#0A1F5C",
  },
  {
    date: "Sep 19, 2026",
    category: "Security Alert",
    author: "Kabba Sanneh",
    title: "Urgent Security Alert: Protect Your Account from Phishing",
    summary: "Trust Bank warns about a fake 'Ramadan Gift' ad on social media. Do not click suspicious links or share your password or OTP with anyone.",
    img: null,
    bgColor: "#7f1d1d",
    isAlert: true,
  },
  {
    date: "Jul 9, 2026",
    category: "News",
    author: "Momodou Wakka Jagne",
    title: "Trust Bank Reports Higher Profit and Asset Growth at 2025 Annual Meeting",
    summary: "Trust Bank reported stronger earnings, asset growth, and an improved capital position during its 2025 financial year.",
    img: null,
    bgColor: "#0A1F5C",
  },
];

const catColor: Record<string, string> = {
  "Events": "bg-blue-100 text-blue-800",
  "News": "bg-[#E8A820]/15 text-[#8a5e00]",
  "Security Alert": "bg-red-100 text-red-800",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Hero */}
      <div className="bg-[#0A1F5C] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-2">Latest Updates</p>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-2">News &amp; Announcements</h1>
          <p className="text-white/60 text-sm">Stay up to date with the latest from Trust Bank.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
            >
              {/* Image / colored banner */}
              <div className={`relative h-44 flex-shrink-0 ${!item.img ? "flex items-center justify-center" : ""}`}
                style={{ backgroundColor: item.bgColor ?? "#F7F8FC" }}>
                {item.img ? (
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-top" />
                ) : (
                  <div className="p-6 w-full">
                    <p className="text-white/20 text-5xl font-bold font-[family-name:var(--font-sora)] leading-none uppercase tracking-tight line-clamp-3">
                      {item.title.split(" ").slice(0, 4).join(" ")}
                    </p>
                  </div>
                )}
                {/* Category badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${catColor[item.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-2">{item.date} · {item.author}</p>
                <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-sm leading-snug mb-2 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">{item.summary}</p>
                <a href="#" className="mt-4 text-xs font-bold text-[#0A1F5C] hover:text-[#E8A820] transition-colors inline-flex items-center gap-1">
                  Read more <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
