import Image from "next/image";

const logos = [
  { src: "/diamano.jpg", alt: "Diamano Money Transfer", width: 160, height: 60 },
  { src: "/bayba.jpg",   alt: "BAYBA Financial Services", width: 80,  height: 80 },
];

function LogoItem({ src, alt, width, height }: typeof logos[0]) {
  return (
    <div className="flex-shrink-0 mx-14 flex items-center justify-center group">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        style={{ maxHeight: 64, mixBlendMode: "multiply" }}
      />
    </div>
  );
}

export default function Partners() {
  return (
    <section className="bg-white border-t border-b border-gray-100 py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 mb-5">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 text-center">
          Our Partners
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap items-center animate-partners-ticker">
          {/* repeat several times for a full-width seamless loop */}
          {[...Array(6)].map((_, i) =>
            logos.map((logo) => <LogoItem key={`${i}-${logo.alt}`} {...logo} />)
          )}
        </div>
      </div>

      <style>{`
        @keyframes partners-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partners-ticker {
          animation: partners-ticker 18s linear infinite;
          display: inline-flex;
          align-items: center;
        }
        .animate-partners-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
