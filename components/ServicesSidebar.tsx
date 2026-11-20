"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    section: "Retail Banking",
    items: [
      { label: "Current Accounts", href: "/services/accounts/current" },
      { label: "Savings Accounts", href: "/services/accounts/savings" },
      { label: "Student Current Accounts", href: "/services/accounts/student-current" },
      { label: "Student Savings Accounts", href: "/services/accounts/student-savings" },
      { label: "Time / Fixed Deposit", href: "/services/accounts/fixed-deposit" },
    ],
  },
  {
    section: "Corporate Banking",
    items: [
      { label: "Corporate Current", href: "/services/accounts/corporate-current" },
      { label: "Foreign Currency", href: "/services/accounts/foreign-currency" },
    ],
  },
  {
    section: "Loans & Advances",
    items: [
      { label: "Personal Loans", href: "/services/loans/personal" },
      { label: "Mortgage / Home Loans", href: "/services/loans/mortgage" },
      { label: "Business Loans", href: "/services/loans/business" },
    ],
  },
  {
    section: "Digital Banking",
    items: [
      { label: "Online Banking", href: "/services/digital/online-banking" },
      { label: "Mobile Banking", href: "/services/digital/mobile-banking" },
      { label: "ATM Services", href: "/services/digital/atm" },
      { label: "RTGS", href: "/services/digital/rtgs" },
      { label: "ACP / ACH", href: "/services/digital/ach" },
    ],
  },
  {
    section: "International Banking",
    items: [
      { label: "International Banking", href: "/services/international/international-banking" },
      { label: "Correspondent Banks", href: "/services/international/correspondent-banking" },
    ],
  },
  {
    section: "Other Services",
    items: [
      { label: "Trust Alerts", href: "/services/other/trust-alerts" },
      { label: "Exchange Rates", href: "/services/other/exchange-rates" },
      { label: "More Services", href: "/services/other/more-services" },
    ],
  },
];

export default function ServicesSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<string[]>([]);

  const toggle = (section: string) =>
    setCollapsed((c) =>
      c.includes(section) ? c.filter((s) => s !== section) : [...c, section]
    );

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-20 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* header */}
        <div className="bg-[#0A1F5C] px-5 py-4">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E8A820]">Services</p>
          <p className="text-white font-bold mt-0.5 text-sm">What we offer</p>
        </div>

        <nav className="py-2">
          {nav.map((group) => {
            const open = !collapsed.includes(group.section);
            const hasActive = group.items.some((i) => pathname.startsWith(i.href));

            return (
              <div key={group.section}>
                <button
                  onClick={() => toggle(group.section)}
                  className={`w-full flex items-center justify-between px-5 py-2.5 text-left transition-colors ${
                    hasActive ? "text-[#E8A820]" : "text-[#0A1F5C]"
                  } hover:bg-gray-50`}
                >
                  <span className="text-xs font-bold tracking-wider uppercase">{group.section}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 12 12" fill="none"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {open && (
                  <ul className="mb-1">
                    {group.items.map((item) => {
                      const active = pathname === item.href || pathname.startsWith(item.href + "/");
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex items-center gap-2.5 px-5 py-2 text-sm transition-all ${
                              active
                                ? "bg-[#E8A820]/10 text-[#0A1F5C] font-semibold border-r-2 border-[#E8A820]"
                                : "text-gray-500 hover:text-[#0A1F5C] hover:bg-gray-50"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? "bg-[#E8A820]" : "bg-gray-300"}`} />
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="border-t border-gray-100 p-4">
          <a
            href="https://ibank.tblgambia.com/#/acceuil"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#E8A820] text-[#0A1F5C] font-bold text-sm text-center py-2.5 rounded-xl hover:bg-[#F5C842] transition-colors"
          >
            Online Banking →
          </a>
        </div>
      </div>
    </aside>
  );
}
