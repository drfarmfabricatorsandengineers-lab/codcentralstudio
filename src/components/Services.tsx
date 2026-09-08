import React, { useState } from 'react';
import { base } from '../utils/base';

const services = [
  {
    number: '01',
    title: 'Google Business Optimization',
    description:
      'We fully optimise your Google Business Profile so your brand appears at the top of local search results — driving more calls, visits and trust from customers nearby.',
    tags: ['Local Search', 'Google Maps', 'Reviews'],
    icon: (
      // Google Maps pin logo
      <svg viewBox="0 0 92.3 132.3" className="w-7 h-7" aria-hidden="true">
        <path d="M46.2 0C20.7 0 0 20.7 0 46.2c0 7.5 1.8 14.5 5.1 20.7L43.6 131c.8 1.9 2.8 3.2 5 3.2 2.1-.1 4-1.4 4.8-3.4l37.9-64.7c3-5.9 4.6-12.5 4.6-19.5C96 20.7 71.8 0 46.2 0zm0 64.3c-9.9 0-18-8-18-18s8-18 18-18 18 8 18 18c-.1 9.9-8.1 18-18 18z" fill="#EA4335"/>
        <path d="M46.2 28.3c-9.9 0-18 8-18 18s8 18 18 18 18-8 18-18-8.1-18-18-18z" fill="#fff" opacity=".5"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Website Creation & Optimisation',
    description:
      'High-performance, conversion-focused websites built to rank, load fast and turn visitors into customers. Every pixel is intentional, every word earns its place.',
    tags: ['UI/UX Design', 'Speed', 'Conversion'],
    icon: (
      // Google Chrome logo
      <svg viewBox="0 0 100 100" className="w-7 h-7" aria-hidden="true">
        <circle cx="50" cy="50" r="50" fill="#fff"/>
        <circle cx="50" cy="50" r="32" fill="#fff" stroke="#4285F4" strokeWidth="4"/>
        <path d="M50 18h40.5A50 50 0 0150 0z" fill="#EA4335"/>
        <path d="M9.5 18H50L29.75 52.5A50 50 0 019.5 18z" fill="#FBBC05"/>
        <path d="M29.75 52.5L9.5 18A50 50 0 0050 100z" fill="#34A853"/>
        <path d="M50 82a32 32 0 100-64 32 32 0 000 64z" fill="#4285F4"/>
        <circle cx="50" cy="50" r="19" fill="#fff"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Web Apps',
    description:
      'Custom web applications engineered for scale, speed and simplicity. From dashboards to customer portals, we build tools that make your business run smarter.',
    tags: ['React', 'Full-Stack', 'SaaS'],
    icon: (
      // React logo
      <svg viewBox="0 0 100 100" className="w-7 h-7" aria-hidden="true">
        <g fill="none" stroke="#61DAFB" strokeWidth="4">
          <ellipse rx="44" ry="17" cx="50" cy="50"/>
          <ellipse rx="44" ry="17" cx="50" cy="50" transform="rotate(60 50 50)"/>
          <ellipse rx="44" ry="17" cx="50" cy="50" transform="rotate(120 50 50)"/>
        </g>
        <circle cx="50" cy="50" r="6" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Daraja API M-Pesa Setup',
    description:
      'Seamless M-Pesa payment integration for your website or app using Safaricom\'s Daraja API — STK Push, C2B, B2C and more, fully tested and production-ready.',
    tags: ['M-Pesa', 'Daraja API', 'Payments'],
    icon: (
      // M-Pesa logo mark — green rectangle + M
      <svg viewBox="0 0 80 48" className="w-9 h-7" aria-hidden="true">
        <rect width="80" height="48" rx="6" fill="#00A550"/>
        <text x="40" y="34" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="26" fill="#fff">M-PESA</text>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Social Media Management',
    description:
      'Consistent, on-brand content across all your platforms — crafted to grow your following, spark engagement and keep your audience coming back for more.',
    tags: ['Content', 'Community', 'Growth'],
    icon: (
      // Instagram gradient logo
      <svg viewBox="0 0 100 100" className="w-7 h-7" aria-hidden="true">
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="5%" stopColor="#fdf497"/>
            <stop offset="45%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </radialGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#ig-grad)"/>
        <rect x="25" y="25" width="50" height="50" rx="14" fill="none" stroke="#fff" strokeWidth="5.5"/>
        <circle cx="50" cy="50" r="13.5" fill="none" stroke="#fff" strokeWidth="5.5"/>
        <circle cx="67" cy="33" r="4" fill="#fff"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Meta Ads Setup & Management',
    description:
      'Targeted Facebook and Instagram ad campaigns that reach the exact audience you need — built, tested and optimised for the lowest cost per result.',
    tags: ['Facebook', 'Instagram', 'Paid Social'],
    icon: (
      // Meta wordmark logo (infinity / ∞ symbol)
      <svg viewBox="0 0 200 80" className="w-12 h-7" aria-hidden="true">
        <defs>
          <linearGradient id="meta-grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#0064E0"/>
            <stop offset="40%" stopColor="#0064E0"/>
            <stop offset="70%" stopColor="#0073EE"/>
            <stop offset="100%" stopColor="#0082FB"/>
          </linearGradient>
        </defs>
        {/* Meta ∞ symbol */}
        <path d="M30 40c0-8 5-14 12-14 5 0 9 3 13 9l5 8c4 6 9 10 16 10 9 0 15-7 15-16s-6-16-15-16c-5 0-9 2-13 7" fill="none" stroke="url(#meta-grad)" strokeWidth="10" strokeLinecap="round"/>
        <path d="M106 27c-4 5-7 9-11 13l-5 8c-4 5-9 9-16 9-9 0-15-7-15-17s6-16 15-16c5 0 9 3 13 9" fill="none" stroke="url(#meta-grad)" strokeWidth="10" strokeLinecap="round"/>
        {/* META text */}
        <text x="145" y="52" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="url(#meta-grad)">Meta</text>
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Google Ads Setup & Management',
    description:
      'From keyword research to bid strategy, we manage your Google Ads account end-to-end — maximising clicks, minimising waste and driving measurable revenue.',
    tags: ['Search Ads', 'Display', 'PPC'],
    icon: (
      // Google Ads logo — multicolour megaphone / G colours
      <svg viewBox="0 0 100 100" className="w-7 h-7" aria-hidden="true">
        <circle cx="50" cy="50" r="48" fill="#fff"/>
        {/* G shape in Google colours */}
        <path d="M80 50H50V63h17.3C65 69.5 58.1 74 50 74c-13.2 0-24-10.8-24-24s10.8-24 24-24c6 0 11.5 2.2 15.7 5.8l9.4-9.4C68.9 17.1 59.9 13 50 13c-20.4 0-37 16.6-37 37s16.6 37 37 37c21 0 36-14.7 36-36 0-1.4-.1-2.7-.3-4l-5.7.0z" fill="#4285F4"/>
        <path d="M15.4 32.5l10.9 8c2.7-7.7 9.9-13.3 18.3-13.3 6 0 11.5 2.2 15.7 5.8l9.4-9.4C63.3 17.1 57 14 50 14c-15.1 0-28 8.9-34.6 21.5z" fill="#EA4335" opacity=".9"/>
        <path d="M50 87c9.7 0 18.5-3.6 25.2-9.5l-11.7-9.1C59.7 71.2 55.1 73 50 73c-11.2 0-20.7-7.6-23.5-18L14.7 64.1C21.3 77.3 34.7 87 50 87z" fill="#34A853" opacity=".9"/>
        <path d="M87 50c0-1.4-.1-2.7-.3-4H50v13h17.3c-1 4.3-4.2 7.8-8.2 10l11.7 9.1C79.3 71.8 87 61.7 87 50z" fill="#FBBC05" opacity=".9"/>
      </svg>
    ),
  },
  {
    number: '08',
    title: 'SEO Optimisation — Local SEO Experts',
    description:
      'We make sure your business ranks where it counts. Our local SEO strategies put you on top of Google search in your city, neighbourhood and niche.',
    tags: ['On-Page SEO', 'Local SEO', 'Rankings'],
    icon: (
      // Google Search coloured magnifier
      <svg viewBox="0 0 100 100" className="w-7 h-7" aria-hidden="true">
        <circle cx="42" cy="42" r="26" fill="none" stroke="#4285F4" strokeWidth="10"/>
        <line x1="61" y1="61" x2="85" y2="85" stroke="#34A853" strokeWidth="10" strokeLinecap="round"/>
        <circle cx="42" cy="42" r="14" fill="#FBBC05" opacity=".25"/>
        <circle cx="42" cy="42" r="6" fill="#EA4335" opacity=".6"/>
      </svg>
    ),
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20 px-6" id="services">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight tracking-tight">
              Services Built to{' '}
              <span className="text-secondary">Move the Needle</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              Every service we offer is designed with one goal — measurable growth for your business.
            </p>
          </div>
          <a
            href={base('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary flex-shrink-0"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <div
              key={service.number}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex flex-col gap-5 p-7 transition-colors duration-200 cursor-default ${
                hovered === i ? 'bg-primary' : 'bg-white'
              }`}
            >
              {/* Number */}
              <span
                className={`text-xs font-bold tracking-widest transition-colors duration-200 ${
                  hovered === i ? 'text-white/30' : 'text-gray-300'
                }`}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                  hovered === i ? 'bg-white/10' : 'bg-gray-50'
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-base font-bold leading-snug tracking-tight transition-colors duration-200 ${
                  hovered === i ? 'text-white' : 'text-primary'
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed transition-colors duration-200 ${
                  hovered === i ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full transition-colors duration-200 ${
                      hovered === i
                        ? 'bg-white/10 text-white/70'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div
                className={`absolute top-6 right-6 transition-all duration-200 ${
                  hovered === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                } text-secondary`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
