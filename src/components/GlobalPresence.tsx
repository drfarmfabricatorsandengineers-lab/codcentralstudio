import React from 'react';

const countries = [
  {
    name: 'Kenya',
    city: 'Nairobi',
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-full h-full">
        {/* Kenya flag: black, red, green horizontal stripes + white edges + Maasai shield */}
        <rect width="60" height="40" fill="#006600" />
        <rect width="60" height="13.33" fill="#000000" />
        <rect y="13.33" width="60" height="13.34" fill="#BB0000" />
        {/* White thin stripes */}
        <rect y="11.5" width="60" height="2.5" fill="#FFFFFF" />
        <rect y="26" width="60" height="2.5" fill="#FFFFFF" />
        {/* Maasai shield — simplified oval */}
        <ellipse cx="30" cy="20" rx="5" ry="8" fill="#FFFFFF" />
        <ellipse cx="30" cy="20" rx="3.5" ry="6.5" fill="#BB0000" />
        <rect x="28.5" y="12" width="3" height="16" fill="#000000" />
        <rect x="26" y="18.5" width="8" height="3" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'Australia',
    city: 'Melbourne',
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-full h-full">
        {/* Australia flag: blue ensign */}
        <rect width="60" height="40" fill="#00008B" />
        {/* Union Jack canton — top left quadrant */}
        {/* Red cross */}
        <rect x="0" y="17" width="30" height="6" fill="#FFFFFF" />
        <rect x="12" y="0" width="6" height="20" fill="#FFFFFF" />
        <rect x="0" y="18.5" width="30" height="3" fill="#CC0000" />
        <rect x="13.5" y="0" width="3" height="20" fill="#CC0000" />
        {/* Diagonal white */}
        <line x1="0" y1="0" x2="30" y2="20" stroke="#FFFFFF" strokeWidth="4" />
        <line x1="30" y1="0" x2="0" y2="20" stroke="#FFFFFF" strokeWidth="4" />
        {/* Diagonal red (thinner, on top) */}
        <line x1="0" y1="0" x2="30" y2="20" stroke="#CC0000" strokeWidth="2" />
        <line x1="30" y1="0" x2="0" y2="20" stroke="#CC0000" strokeWidth="2" />
        {/* Cover the cross back on top */}
        <rect x="0" y="17" width="30" height="6" fill="#FFFFFF" />
        <rect x="12" y="0" width="6" height="20" fill="#FFFFFF" />
        <rect x="0" y="18.5" width="30" height="3" fill="#CC0000" />
        <rect x="13.5" y="0" width="3" height="20" fill="#CC0000" />
        {/* Commonwealth Star — bottom left */}
        <polygon points="10,28 11.5,33 16,33 12.5,36 14,41 10,38 6,41 7.5,36 4,33 8.5,33" fill="#FFFFFF" />
        {/* Southern Cross — right side (simplified 4 stars) */}
        <polygon points="44,10 45,13 48,13 45.5,15 46.5,18 44,16 41.5,18 42.5,15 40,13 43,13" fill="#FFFFFF" />
        <polygon points="52,18 52.8,21 56,21 53.5,22.8 54.3,26 52,24.2 49.7,26 50.5,22.8 48,21 51.2,21" fill="#FFFFFF" />
        <polygon points="48,28 48.7,30.5 51.5,30.5 49.2,32 50,34.5 48,33 46,34.5 46.8,32 44.5,30.5 47.3,30.5" fill="#FFFFFF" />
        <polygon points="40,24 40.6,26 42.5,26 41,27.2 41.6,29 40,28 38.4,29 39,27.2 37.5,26 39.4,26" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Pakistan',
    city: 'Karachi',
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-full h-full">
        {/* Pakistan flag: white stripe left, green right with crescent and star */}
        <rect width="60" height="40" fill="#01411C" />
        <rect width="15" height="40" fill="#FFFFFF" />
        {/* Crescent */}
        <circle cx="35" cy="20" r="9" fill="#FFFFFF" />
        <circle cx="38" cy="17.5" r="7.5" fill="#01411C" />
        {/* Star */}
        <polygon
          points="44,14 44.8,16.5 47.5,16.5 45.3,18 46.1,20.5 44,19 41.9,20.5 42.7,18 40.5,16.5 43.2,16.5"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];

export default function GlobalPresence() {
  return (
    <section className="bg-white py-20 px-6" id="about">
      <div className="flex flex-col items-start text-left gap-12 max-w-5xl mx-auto">

        {/* Text block */}
        <div className="flex flex-col items-start gap-5 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
            Global Reach
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight tracking-tight">
            Your Multi-National Digital Marketing Partner
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal">
            Our marketing services are delivered across multiple locations through a globally
            connected team — ensuring consistent standards, reliable communication, and
            effective delivery wherever your brand needs to grow.
          </p>
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-gray-200" aria-hidden="true" />

        {/* Flags row */}
        <div className="flex flex-col sm:flex-row items-start justify-start gap-10 sm:gap-16">
          {countries.map((country) => (
            <div key={country.name} className="flex flex-col items-center gap-3">
              {/* Flag */}
              <div className="w-16 h-[42px] rounded-sm overflow-hidden shadow-sm ring-1 ring-black/10">
                {country.flag}
              </div>
              {/* Country name */}
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-sm font-semibold text-primary tracking-wide">
                  {country.name}
                </span>
                <span className="text-xs text-gray-400 font-normal">{country.city}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
