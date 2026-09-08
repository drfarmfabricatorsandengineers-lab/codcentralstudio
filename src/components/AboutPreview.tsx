import React from 'react';
import { base } from '../utils/base';

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
            Our Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight tracking-tight">
            Started in a Bedsitter.{' '}
            <span className="text-secondary">Built for Kenya.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            CodCentral started in <span className="font-semibold text-primary">2025</span> inside
            a bedsitter with one conviction — to fight and{' '}
            <span className="font-semibold text-secondary">stop random marketing</span>. One year
            later we are a team of{' '}
            <span className="font-semibold text-primary">11+ specialists</span> serving{' '}
            <span className="font-semibold text-primary">39+ brands</span> across{' '}
            <span className="font-semibold text-primary">3 countries</span>. We are the{' '}
            <span className="font-semibold text-secondary">
              first fully online agency in Kenya
            </span>.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 py-4 border-y border-gray-100">
            {[
              { value: '2025', label: 'Founded' },
              { value: '11+', label: 'Specialists' },
              { value: '39+', label: 'Brands Served' },
              { value: '3', label: 'Countries' },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-primary leading-none">{s.value}</span>
                  <span className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px h-8 bg-gray-200" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <a
            href={base('/about-us')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-bold tracking-wide transition-all duration-200 hover:bg-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary self-start"
          >
            Meet the Full Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right — image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src={base('/codcentral team.jpg')}
              alt="CodCentral team"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-secondary rounded-2xl shadow-xl px-5 py-4 z-10">
            <span className="text-3xl font-black text-white leading-none">3</span>
            <p className="text-xs text-white/70 font-medium mt-0.5">Countries</p>
          </div>
          <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 z-10">
            <span className="text-3xl font-black text-primary leading-none">39+</span>
            <p className="text-xs text-gray-400 font-medium mt-0.5">Brands Served</p>
          </div>
        </div>

      </div>
    </section>
  );
}
