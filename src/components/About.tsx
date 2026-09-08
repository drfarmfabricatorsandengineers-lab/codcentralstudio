import React from 'react';

const milestones = [
  { year: '2025', event: 'Founded inside a bedsitter in Nairobi' },
  { year: 'Year 1', event: '11+ specialists, 39+ brands, 3 countries' },
  { year: 'Today', event: 'Kenya\'s first fully online marketing agency' },
];

const values = [
  {
    title: 'No Random Marketing',
    description: 'Every shilling you spend is intentional, targeted and traceable. We eliminate waste.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Systems That Compound',
    description: 'We build marketing, technology and design systems that grow in value over time.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Results Are Everything',
    description: 'We measure ourselves solely on the results our clients receive from working with us.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '2025', label: 'Founded' },
  { value: '11+', label: 'Specialists' },
  { value: '39+', label: 'Brands Served' },
  { value: '3', label: 'Countries' },
];

export default function About() {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* ── Top: Origin story ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight tracking-tight">
                Started in a Bedsitter.{' '}
                <span className="text-secondary">Built for Kenya.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Codcentral started  in{' '}
              <span className="font-semibold text-primary">2025</span> inside a bedsitter by Emmanuel Madelle with
              one conviction — that a Kenyan agency could fight and{' '}
              <span className="font-semibold text-secondary">stop random marketing</span>.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              One year later we are a team of{' '}
              <span className="font-semibold text-primary">11+ specialists</span> serving{' '}
              <span className="font-semibold text-primary">39+ brands</span> across{' '}
              <span className="font-semibold text-primary">3 countries</span>. We are the{' '}
              <span className="font-semibold text-secondary">first fully online agency in Kenya</span>.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We build marketing, technology and design systems that compound in value. We measure
              ourselves solely on the results our clients receive from working with us.
            </p>

            {/* Timeline */}
            <div className="flex flex-col gap-0 mt-2">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-4">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-1">
                    <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 my-1 h-8" />
                    )}
                  </div>
                  <div className="pb-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary">
                      {m.year}
                    </span>
                    <p className="text-sm font-medium text-primary mt-0.5">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-bold tracking-wide transition-all duration-200 hover:bg-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary self-start"
            >
              Work With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right — visual block */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/codcentral team.jpg"
                alt="CodCentral team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />

              {/* Floating badge — bottom left */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-none">Kenya's First</p>
                    <p className="text-white/60 text-xs mt-1">Fully Online Marketing Agency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card — top right, outside the image */}
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 flex flex-col gap-0.5 z-10">
              <span className="text-3xl font-black text-primary leading-none">39+</span>
              <span className="text-xs text-gray-400 font-medium">Brands Served</span>
            </div>

            {/* Floating stat card — bottom right */}
            <div className="absolute -bottom-5 -right-5 bg-secondary rounded-2xl shadow-xl px-5 py-4 flex flex-col gap-0.5 z-10">
              <span className="text-3xl font-black text-white leading-none">3</span>
              <span className="text-xs text-white/70 font-medium">Countries</span>
            </div>
          </div>
        </div>

        {/* ── Bottom: Stats bar + Values ── */}
        <div className="flex flex-col gap-12">

          {/* Stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-gray-100">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center py-8 px-6 bg-white hover:bg-gray-50 transition-colors ${
                  i !== stats.length - 1 ? 'border-r border-gray-100' : ''
                } ${i >= 2 ? 'border-t border-gray-100 lg:border-t-0' : ''}`}
              >
                <span className="text-4xl sm:text-5xl font-black text-primary leading-none">{s.value}</span>
                <span className="text-sm text-gray-400 font-medium mt-2 tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="group flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:bg-gray-50 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors duration-200">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-primary tracking-tight">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
