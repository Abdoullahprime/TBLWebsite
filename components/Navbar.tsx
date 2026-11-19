"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = ["Home", "About", "Services", "Loans", "News", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center no-underline">
          <Image src="/logo.jpg" alt="Trust Bank Gambia" width={180} height={52} className="h-12 w-auto object-contain" priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-[#0A1F5C] hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="ml-2 bg-[#E8A820] text-[#0A1F5C] font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#F5C842] transition-colors"
          >
            Online Banking →
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-5 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 pb-4">
          {links.map((link) => (
            <a key={link} href="#" className="block py-2 text-sm text-gray-700 hover:text-[#0A1F5C]">
              {link}
            </a>
          ))}
          <a href="#" className="block mt-3 bg-[#E8A820] text-[#0A1F5C] font-bold text-sm px-5 py-2.5 rounded-lg text-center">
            Online Banking →
          </a>
        </div>
      )}
    </header>
  );
}
