import Navbar from "@/components/Navbar";
import ServicesSidebar from "@/components/ServicesSidebar";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      {/* Page hero strip */}
      <div className="bg-[#0A1F5C]">
        <div className="max-w-7xl mx-auto px-5 py-10 flex items-center gap-3">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8A820] mb-1">Trust Bank</p>
            <h1 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-white">Banking Services</h1>
          </div>
        </div>
      </div>

      {/* Layout: sidebar + content */}
      <div className="bg-[#F7F8FC] min-h-screen">
        <div className="max-w-7xl mx-auto px-5 py-10 flex gap-8 items-start">
          <ServicesSidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>

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
