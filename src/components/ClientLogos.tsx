import React from 'react';

// Placeholder client logos rendered as SVG wordmarks / icon+text combos.
// Replace each `src` with a real logo image path once available.
const logos = [
  { name: 'Veloura', src: null },
  { name: 'Noxara', src: null },
  { name: 'Stratum', src: null },
  { name: 'Kelvyn & Co.', src: null },
  { name: 'Orivex', src: null },
  { name: 'Lumecta', src: null },
  { name: 'Draven', src: null },
  { name: 'Zephyr & Sons', src: null },
  { name: 'Novaris', src: null },
  { name: 'Crestholm', src: null },
  { name: 'Aethon', src: null },
  { name: 'Quintrel', src: null },
];

// Duplicate for seamless infinite loop
const track = [...logos, ...logos];

function LogoItem({ name, src }: { name: string; src: string | null }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-8 opacity-50 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0">
      {src ? (
        <img src={src} alt={name} className="h-8 w-auto object-contain" loading="lazy" />
      ) : (
        /* Styled text placeholder — swap out once real logos are available */
        <span className="text-primary font-black text-lg tracking-tight whitespace-nowrap select-none">
          {name}
        </span>
      )}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="bg-white py-14 border-y border-gray-100" aria-label="Our clients">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400 text-center">
          Clients
        </p>
      </div>

      {/* Marquee wrapper — overflow hidden + fade edges */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }}
          aria-hidden="true"
        />

        {/* Scrolling track */}
        <div
          className="flex items-center"
          style={{
            animation: 'marquee 30s linear infinite',
            width: 'max-content',
          }}
          aria-hidden="true"
        >
          {track.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>

      {/* Keyframe injected inline so no extra CSS file needed */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex[style*="marquee"] { animation: none; }
        }
      `}</style>
    </section>
  );
}
