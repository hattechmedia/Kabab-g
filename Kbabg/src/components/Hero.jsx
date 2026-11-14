import React, { useState, useEffect } from 'react';
import { Utensils, Phone, Crown, Flame, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero({ setActivePage }) {
  // Food image slider state
  const heroImages = [
    {
      src: '/hero.png',
      alt: 'Kabab G Authentic Charcoal BBQ Seekh Kebabs',
      badgeTitle: 'Fresh off the Grill',
      badgeSubtitle: 'Traditional charcoal BBQ',
    },
    {
      src: '/hero-2.jpg',
      alt: 'Kabab G Sizzling Tandoor & Grill',
      badgeTitle: 'Sizzling Live',
      badgeSubtitle: 'Acacia wood charcoal embers',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const stats = [
    { value: '98+', label: 'DISHES ON MENU' },
    { value: '19+', label: 'MENU CATEGORIES' },
    { value: '2+', label: 'BRANCHES IN MULTAN' },
  ];

  const marqueeItems = [
    'Real Flavours',
    'Authentic Pakistani BBQ',
    'Good Food Brings People Together',
    'Traditional Taste',
    'Fresh Ingredients',
    'Real Flavours',
    'Authentic Pakistani BBQ',
    'Good Food Brings People Together',
  ];

  const handleScrollToContent = () => {
    const nextSection = document.getElementById('categories') || document.querySelector('main > section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative bg-[#0d0d0d] text-white overflow-hidden">
      
      {/* ================= BACKGROUND DECORATIONS ================= */}
      {/* 1. Subtle Circular Vector Rings (Top-Left) */}
      <div className="absolute -top-32 -left-32 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-white/[0.03] pointer-events-none" />
      
      {/* 2. Subtle Circular Vector Rings (Bottom-Right) */}
      <div className="absolute -bottom-40 -right-28 w-[500px] sm:w-[620px] h-[500px] sm:h-[620px] rounded-full border border-white/[0.03] pointer-events-none" />
      <div className="absolute -bottom-20 -right-12 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-white/[0.02] pointer-events-none" />

      {/* 3. Ambient Golden Glow behind Right Image Card */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[400px] bg-[#F5B800]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* ================= HERO MAIN CONTENT ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* ---------------- LEFT COLUMN: HEADINGS, CTA, STATS ---------------- */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            
            {/* Tagline with dash */}
            <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-8 h-[2px] bg-[#F5B800]" />
              <span className="font-poppins text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase text-[#F5B800]">
                AUTHENTIC PAKISTANI BBQ
              </span>
            </div>

            {/* Main Heading: "The Art of Authentic Flavour." */}
            <h1 className="font-playfair text-[38px] sm:text-[50px] md:text-[58px] lg:text-[62px] xl:text-[66px] font-bold text-white tracking-tight leading-[1.08] mb-5">
              The Art of <br />
              <span className="italic text-[#F5B800] font-normal">Authentic Flavour.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="font-poppins text-[14px] sm:text-[15px] md:text-[16px] text-neutral-300 max-w-xl leading-relaxed mb-8 sm:mb-9 font-normal">
              From sizzling BBQ to rich traditional karahi, discover the unforgettable taste of Kabab G, crafted with traditional spice, fresh ingredients and real flavour.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12">
              {/* Button 1: EXPLORE OUR MENU (Gold filled) */}
              <button
                type="button"
                onClick={() => {
                  if (setActivePage) {
                    setActivePage('Menu');
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  }
                }}
                className="btn-custom bg-[#F5B800] hover:bg-[#e0a700] text-black font-poppins font-bold text-[12px] sm:text-[13px] px-6 sm:px-7 py-3.5 rounded-full shadow-lg shadow-[#F5B800]/20 flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105 uppercase tracking-wider"
              >
                <Utensils className="w-4 h-4 text-black stroke-[2.2]" />
                <span>EXPLORE OUR MENU</span>
              </button>

              {/* Button 2: CALL TO ORDER (Dark outline) */}
              <a
                href="tel:03159610004"
                className="btn-custom bg-transparent hover:bg-white/[0.08] text-white border border-[#F5B800]/60 hover:border-[#F5B800] font-poppins font-semibold text-[12px] sm:text-[13px] px-6 sm:px-7 py-3.5 rounded-full flex items-center gap-2 cursor-pointer transition-all duration-200 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#F5B800] stroke-[2.2]" />
                <span>CALL TO ORDER</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mb-6">
              {stats.map((stat, idx) => (
                <div 
                  key={stat.label} 
                  className={`pr-2 sm:pr-4 ${idx !== stats.length - 1 ? 'border-r border-neutral-800' : ''}`}
                >
                  <div className="font-poppins text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#F5B800] leading-none mb-1.5 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-poppins text-[9px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll to Explore Link */}
            <div>
              <button
                type="button"
                onClick={handleScrollToContent}
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#F5B800] font-poppins text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer group"
              >
                <span>SCROLL TO EXPLORE</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5 text-[#F5B800]" />
              </button>
            </div>

          </div>

          {/* ---------------- RIGHT COLUMN: FEATURED FOOD CARD WITH BADGES ---------------- */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Card Frame with Gold Border & Rounded Corners */}
              <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden border-2 border-[#F5B800] shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-[#141414] aspect-[4/3] sm:aspect-[14/10] lg:aspect-[4/3] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(245,184,0,0.2)]">
                
                {/* Images with smooth fade transition */}
                {heroImages.map((img, idx) => (
                  <div
                    key={img.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentImageIndex === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-center transform transition-transform duration-[6000ms] hover:scale-105"
                    />
                    {/* Subtle warm vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
                  </div>
                ))}

              </div>

              {/* Floating Badge 1 (Top-Right): Dark Circle with Gold Crown */}
              <div className="absolute -top-3.5 -right-3.5 sm:-top-5 sm:-right-5 z-20">
                <div className="w-13 sm:w-16 h-13 sm:h-16 rounded-full bg-[#161616] border-2 border-[#F5B800] shadow-2xl flex flex-col items-center justify-center text-center p-1 group hover:scale-110 transition-transform">
                  <Crown className="w-4 sm:w-5 h-4 sm:h-5 text-[#F5B800] stroke-[2.2] mb-0.5" />
                  <span className="font-poppins text-[8px] sm:text-[9px] font-bold text-[#F5B800] uppercase tracking-wider leading-none">
                    Kabab G
                  </span>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom-Left): Black Card with Sizzling Live / Fresh off the Grill */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 z-20 max-w-[240px] sm:max-w-[270px]">
                <div className="bg-[#141414]/95 backdrop-blur-md text-white rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-neutral-800 hover:border-[#F5B800] transition-colors flex items-center gap-3">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black text-[#F5B800] flex items-center justify-center shrink-0 border border-[#F5B800]/40 shadow-sm">
                    <Flame className="w-4 sm:w-4.5 h-4 sm:h-4.5 fill-[#F5B800] text-[#F5B800]" />
                  </div>
                  <div className="font-poppins text-left">
                    <div className="text-[11px] sm:text-[12px] font-extrabold text-white leading-tight">
                      {heroImages[currentImageIndex].badgeTitle}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-neutral-400 font-medium leading-tight mt-0.5">
                      {heroImages[currentImageIndex].badgeSubtitle}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImageIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentImageIndex === idx ? 'w-5 bg-[#F5B800]' : 'w-1.5 bg-white/40 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= BOTTOM MARQUEE / TICKER STRIP ================= */}
      <div className="relative z-10 bg-[#090909] border-t border-b border-neutral-800/90 py-3 sm:py-3.5 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 text-neutral-300 font-playfair text-[12px] sm:text-[14px] font-medium tracking-wider uppercase">
          {marqueeItems.concat(marqueeItems).map((text, index) => (
            <React.Fragment key={index}>
              <span className="hover:text-[#F5B800] transition-colors whitespace-nowrap">
                {text}
              </span>
              <Sparkles className="w-3 h-3 text-[#F5B800] shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
}
