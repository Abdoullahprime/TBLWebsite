import Navbar from "@/components/Navbar";

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <footer className="bg-[#06143A] text-white/60 py-8">
        <div className="max-w-6xl mx-auto px-5 text-center text-sm">
          <p>3-4 Ecowas Avenue, Banjul · info@tblgambia.com · Hotline: 7474447 / 3644470 / 9033334</p>
          <p className="mt-2 text-white/30">© 2026 Trust Bank PLC. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
