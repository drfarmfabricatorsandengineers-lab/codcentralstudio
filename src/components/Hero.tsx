import React, { useState, useEffect, useCallback } from 'react';
import { base } from '../utils/base';

const stats = [
  { value: '39+', label: 'Happy Clients' },
  { value: '3', label: 'Countries' },
  { value: 'Sh190M+', label: 'Client Revenue' },
  { value: '117k', label: 'Leads Generated' },
  { value: '8.3M', label: 'Traffic Driven' },
  { value: '8+', label: 'Experts on Staff' },
  { value: '100%', label: 'Results-Driven' },
];

const slides = [
  {
    image: null,
    overlay: null,
    content: 'main',
  },
  {
    // Photo by Campaign Creators on Unsplash
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1800&q=80&fit=crop',
    overlay: 'bg-primary/80',
    content: 'mission',
  },
  {
    // Photo by Austin Distel on Unsplash
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=80&fit=crop',
    overlay: 'bg-primary/75',
    content: 'positioning',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 400);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[130vh] flex flex-col overflow-hidden bg-primary pt-24"
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
    >
      {/* ── Slide backgrounds ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {s.image && (
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          )}
          {s.overlay && (
            <div className={`absolute inset-0 ${s.overlay}`} />
          )}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      ))}

      {/* ── Decorative blobs (slide 1 only) ── */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          current === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* ── Upper zone: carousel content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <div
          className={`max-w-4xl mx-auto flex flex-col items-center gap-8 transition-all duration-500 ${
            isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
          }`}
        >
          {slide.content === 'main' ? (
            <>
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
              >
                Kenya's Premier{' '}
                <span className="relative inline-block">
                  <span className="text-secondary">Digital Marketing</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C60 3 120 1 150 1C180 1 240 3 298 9"
                      stroke="#FF272A"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                Agency
              </h1>

              <p className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed font-medium">
                We position your brand for{' '}
                <span className="text-white font-semibold">credibility</span>,{' '}
                <span className="text-white font-semibold">trust</span> and{' '}
                <span className="text-secondary font-semibold">sales</span> that grow
                your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a
                  href={base('/works')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-white text-base font-bold tracking-wide transition-all duration-200 hover:bg-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary shadow-lg shadow-secondary/30"
                >
                  See Our Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href={base('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white text-base font-bold tracking-wide transition-all duration-200 hover:border-white hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  Book a Free Session
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </a>
              </div>
            </>
          ) : slide.content === 'mission' ? (
            <div className="flex flex-col items-center gap-6 max-w-3xl">
              <div className="w-12 h-1 bg-secondary rounded-full" aria-hidden="true" />
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-secondary">
                Our Mission
              </p>
              <h2
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight"
              >
                Our Mission to stop{' '}
                <span className="text-secondary">Random Marketing</span>{' '}
                is not ending soon!
              </h2>
              <div className="w-12 h-1 bg-secondary rounded-full" aria-hidden="true" />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 max-w-3xl">
              <div className="w-12 h-1 bg-secondary rounded-full" aria-hidden="true" />
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-secondary">
                Brand Positioning
              </p>
              <h2
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight"
              >
                Let's Help You{' '}
                <span className="text-secondary">Position Your Brand</span>{' '}
                today to the right audience, who you turn to your customers and grow your business.
              </h2>
              <div className="w-12 h-1 bg-secondary rounded-full" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Dot indicators — centred below content */}
        <div
          className="relative z-20 flex items-center gap-3 mt-12"
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
                i === current
                  ? 'w-8 h-2.5 bg-secondary'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Lower zone: stats grid ── */}
      <div className="relative z-10 w-full">
        <div className="border-t border-white/15" />

        <div className="flex flex-wrap lg:flex-nowrap">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 w-1/2 sm:w-1/4 lg:w-auto lg:flex-1 ${
                i !== 0 ? 'border-l border-white/15' : ''
              }`}
            >
              <p className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-normal leading-snug" style={{ color: '#A1A1AA' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Carousel arrow controls ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-[40%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-[40%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
