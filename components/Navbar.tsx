"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Branches", href: "/about/branches" },
      { label: "Compliance Policies", href: "/about/compliance" },
      { label: "Corporate Social Responsibility", href: "/about/social" },
      { label: "Subsidiaries", href: "/about/subsidiaries" },
      { label: "Recognition and Awards", href: "/about/awards" },
      { label: "AGM", href: "/about/agm" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Accounts", href: "/services/accounts" },
      { label: "Loans", href: "/services/loans/personal" },
      { label: "Digital Banking", href: "/services/digital/online-banking" },
      { label: "International Banking", href: "/services/international/international-banking" },
      { label: "Exchange Rates", href: "/services/other/exchange-rates" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Fraud", href: "#" },
  { label: "Downloads", href: "#" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

type NavItem = typeof navItems[0];

function DropdownItem({
  item,
  activeMenu,
  setActiveMenu,
}: {
  item: NavItem;
  activeMenu: string | null;
  setActiveMenu: (label: string | null) => void;
}) {
  const open = activeMenu === item.label;

  if (!item.children) {
    return (
      <a
        href={item.href}
        onMouseEnter={() => setActiveMenu(null)}
        className="text-sm font-medium text-gray-700 hover:text-[#0A1F5C] hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveMenu(item.label)}
    >
      <button
        onClick={() => setActiveMenu(open ? null : item.label)}
        className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap ${
          open ? "text-[#0A1F5C] bg-gray-100" : "text-gray-700 hover:text-[#0A1F5C] hover:bg-gray-100"
        }`}
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12" fill="none"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50 min-w-[220px]">
          {item.children.map(child => (
            <a
              key={child.label}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0A1F5C] hover:text-white transition-colors"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 border-t-[3px] border-t-[#E8A820] transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between py-3">
        {/* Logo */}
        <a href="/" className="flex items-center no-underline flex-shrink-0">
          <Image src="/logo.jpg" alt="Trust Bank Gambia" width={180} height={52} className="h-11 w-auto object-contain" priority />
        </a>

        {/* Desktop nav — mouseLeave on the whole nav closes all dropdowns */}
        <nav
          className="hidden lg:flex items-center gap-0.5"
          onMouseLeave={() => setActiveMenu(null)}
        >
          {navItems.map(item => (
            <DropdownItem
              key={item.label}
              item={item}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          ))}
          <a
            href="https://ibank.tblgambia.com/#/acceuil"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActiveMenu(null)}
            className="ml-3 bg-[#E8A820] text-[#0A1F5C] font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#F5C842] transition-colors whitespace-nowrap"
          >
            Online Banking →
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-5 pb-4 max-h-[80vh] overflow-y-auto">
          {navItems.map(item => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full text-left flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 border-b border-gray-100"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg className={`w-3 h-3 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 py-1">
                      {item.children.map(child => (
                        <a key={child.label} href={child.href} className="block py-2 text-sm text-gray-600 hover:text-[#0A1F5C]">
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href ?? "#"} className="block py-2.5 text-sm text-gray-700 hover:text-[#0A1F5C] border-b border-gray-100">
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <a
            href="https://ibank.tblgambia.com/#/acceuil"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 bg-[#E8A820] text-[#0A1F5C] font-bold text-sm px-5 py-2.5 rounded-lg text-center"
          >
            Online Banking →
          </a>
        </div>
      )}
    </header>
  );
}
