import React from 'react';

const featured = [
  {
    slug: 'local-seo-guide-kenya-2025',
    category: 'SEO', type: 'Guide', readTime: '8 min read',
    title: 'The Complete Local SEO Guide for Kenyan Businesses in 2025',
    excerpt: 'How to rank #1 on Google Maps, optimise your Google Business Profile and dominate local search in Nairobi, Mombasa and beyond.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&fit=crop',
  },
  {
    slug: 'google-ads-beginners-guide-kenya',
    category: 'Google Ads', type: 'Guide', readTime: '9 min read',
    title: 'Google Ads for Beginners: How to Run Profitable Campaigns in Kenya',
    excerpt: 'Step-by-step walkthrough of setting up your first Google Ads campaign — from keyword research to conversion tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop',
  },
  {
    slug: 'instagram-growth-playbook-african-brands',
    category: 'Social Media', type: 'Guide', readTime: '7 min read',
    title: 'Instagram Growth Playbook for African Brands',
    excerpt: 'The exact content framework we use to grow our clients from zero to 10,000+ engaged followers without buying fake followers.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&fit=crop',
  },
];

const typeColors: Record<string, string> = {
  Guide: 'bg-blue-50 text-blue-600',
  Checklist: 'bg-green-50 text-green-600',
  Template: 'bg-purple-50 text-purple-600',
  Framework: 'bg-orange-50 text-orange-600',
};

export default function ResourcesPreview() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
              Resources
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight tracking-tight">
              Free Guides to{' '}
              <span className="text-secondary">Grow Your Business</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              Practical, no-fluff guides on SEO, ads, social media and web technology — written by our specialists.
            </p>
          </div>
          <a
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary text-sm font-bold tracking-wide transition-all duration-200 hover:bg-primary hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary flex-shrink-0"
          >
            View All Resources
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* 3 preview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((r) => (
            <a
              key={r.title}
              href={`/resources/${r.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${typeColors[r.type] ?? 'bg-gray-100 text-gray-600'}`}>
                  {r.type}
                </span>
                <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                  {r.category}
                </span>
              </div>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {r.readTime}
                </div>
                <h3 className="text-base font-bold text-primary leading-snug group-hover:text-secondary transition-colors duration-200">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{r.excerpt}</p>
                <div className="pt-2 border-t border-gray-100 mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-secondary transition-colors duration-200">
                    Read Article
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <a
            href="/resources"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white text-sm font-bold tracking-wide transition-all duration-200 hover:bg-secondary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            See All 12 Free Resources
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
