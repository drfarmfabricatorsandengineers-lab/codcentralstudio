import React, { useState } from 'react';
import { base } from '../utils/base';

const projects = [
  {
    id: 1,
    client: 'Veloura Fashion',
    category: 'Meta Ads + Social Media',
    headline: 'From 800 to 47,000 Followers in 4 Months',
    summary:
      'A Nairobi-based fashion brand was stuck at under 1,000 Instagram followers with near-zero online sales. We rebuilt their content strategy, launched targeted Meta ad campaigns and managed their full social presence.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85&fit=crop',
    accentColor: '#FF272A',
    stats: [
      { value: '47K', label: 'New Followers' },
      { value: '380%', label: 'Revenue Growth' },
      { value: '4.2×', label: 'ROAS' },
    ],
    tags: ['Meta Ads', 'Instagram', 'Content Strategy'],
    testimonial: {
      quote: 'CodCentral turned our dormant page into our biggest sales channel.',
      author: 'Zara Ahmed, Founder — Veloura Fashion',
      avatar: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=60&h=60&fit=crop&crop=face',
    },
  },
  {
    id: 2,
    client: 'Stratum Properties',
    category: 'SEO + Google Ads + GBP',
    headline: 'Page 1 Google in 6 Weeks. 3× More Leads.',
    summary:
      'A Kenyan real estate firm was invisible on Google despite a large property portfolio. We optimised their Google Business Profile, ran hyper-local SEO and launched precision Google Ads — filling their pipeline with qualified buyers.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85&fit=crop',
    accentColor: '#001854',
    stats: [
      { value: '#1', label: 'Google Ranking' },
      { value: '3×', label: 'Lead Volume' },
      { value: '67%', label: 'Lower CPL' },
    ],
    tags: ['Local SEO', 'Google Ads', 'GBP'],
    testimonial: {
      quote: 'We went from zero online leads to fully booked viewings every weekend.',
      author: 'Daniel Kuria, MD — Stratum Properties',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=60&h=60&fit=crop&crop=face',
    },
  },
  {
    id: 3,
    client: 'Noxara Restaurant Group',
    category: 'Website + Google Business + Social',
    headline: 'A Full Digital Rebrand That Doubled Walk-Ins',
    summary:
      'A multi-location restaurant group had an outdated website, poor Google reviews management and no social presence. We redesigned their site, set up M-Pesa table booking, optimised every GBP listing and launched a content-first social strategy.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=85&fit=crop',
    accentColor: '#D97706',
    stats: [
      { value: '2×', label: 'Walk-In Traffic' },
      { value: '4.9★', label: 'Google Rating' },
      { value: '12K', label: 'Monthly Reach' },
    ],
    tags: ['Web Design', 'M-Pesa', 'GBP', 'Social Media'],
    testimonial: {
      quote: 'Our restaurants are now fully booked on weekends because of the online presence they built us.',
      author: 'Mary Achieng, CEO — Noxara Group',
      avatar: 'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?w=60&h=60&fit=crop&crop=face',
    },
  },
  {
    id: 4,
    client: 'Lumecta Solar',
    category: 'Web App + Google Ads + SEO',
    headline: 'A Custom Web App That Closed Sh12M in Sales',
    summary:
      'A solar energy company needed a way to generate, track and close leads online. We built a custom web app with an instant solar quote calculator, integrated M-Pesa deposits, and ran Google Ads that brought in 800+ qualified leads in 90 days.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85&fit=crop',
    accentColor: '#059669',
    stats: [
      { value: '800+', label: 'Qualified Leads' },
      { value: 'Sh12M', label: 'Revenue Closed' },
      { value: '90', label: 'Days to Results' },
    ],
    tags: ['Web App', 'Google Ads', 'M-Pesa', 'SEO'],
    testimonial: {
      quote: 'The quote calculator alone paid for the entire project in the first month.',
      author: 'Francis Kamweru, Director — Lumecta Solar',
      avatar: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=60&h=60&fit=crop&crop=face',
    },
  },
];

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center px-5 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <span className="text-2xl sm:text-3xl font-black text-white leading-none">{value}</span>
      <span className="text-xs text-white/60 font-medium mt-1 leading-tight">{label}</span>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section className="bg-white py-20 px-6" id="works">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight tracking-tight">
              Real Clients.{' '}
              <span className="text-secondary">Real Results.</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              Every project we take on is built around one metric — measurable growth. Here's proof.
            </p>
          </div>
          <a
            href={base('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary flex-shrink-0"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Project selector tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary ${
                active === i
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {p.client}
            </button>
          ))}
        </div>

        {/* Active project card */}
        <div
          key={project.id}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300"
        >
          {/* Left — visual panel */}
          <div className="relative min-h-[360px] lg:min-h-[520px] overflow-hidden">
            <img
              src={project.image}
              alt={project.client}
              className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-100"
              loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                {project.category}
              </span>
            </div>

            {/* Stats row — overlaid on image bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="grid grid-cols-3 gap-3">
                {project.stats.map((s) => (
                  <StatPill key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>
          </div>

          {/* Right — content panel */}
          <div className="flex flex-col gap-6 p-8 lg:p-10 bg-white">

            {/* Client name */}
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
              {project.client}
            </p>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-black text-primary leading-tight tracking-tight">
              {project.headline}
            </h3>

            {/* Summary */}
            <p className="text-base text-gray-500 leading-relaxed">
              {project.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-gray-100 text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Testimonial */}
            <div className="flex items-start gap-4">
              <img
                src={project.testimonial.avatar}
                alt={project.testimonial.author}
                className="w-11 h-11 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-100"
                loading="lazy"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{project.testimonial.quote}"
                </p>
                <p className="text-xs font-semibold text-gray-400 mt-1">
                  — {project.testimonial.author}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-2">
              <a
                href={base('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-bold tracking-wide transition-all duration-200 hover:bg-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Get Similar Results
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="rounded-2xl bg-primary px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-white font-black text-xl tracking-tight">
              Ready to be our next success story?
            </p>
            <p className="text-white/60 text-sm">
              Book a free strategy session — no commitment, just clarity.
            </p>
          </div>
          <a
            href={base('/contact')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-white font-bold text-sm tracking-wide transition-all duration-200 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary whitespace-nowrap"
          >
            Book a Free Session
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
