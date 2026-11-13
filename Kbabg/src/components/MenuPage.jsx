import React from 'react';
import ParallelMenuSection from './ParallelMenuSection';
import GulshanMenuSection from './GulshanMenuSection';

export default function MenuPage({ setActivePage, selectedBranch = 'nagana', onSelectBranch, onOpenBranchModal }) {
  return (
    <div className="bg-[#111111] text-[#FFFFFF] flex-grow flex flex-col">
      {/* 1. Menu Hero Section with Menu-hero.jpg background */}
      <section className="relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center justify-center overflow-hidden border-b border-neutral-800">
        
        {/* Background Image: Menu-hero.jpg from public folder */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Menu-hero.jpg"
            alt="Kabab G Authentic Menu Hero"
            className="w-full h-full object-cover object-center transform scale-102"
          />
          {/* Balanced Dark Overlay so image is clear and vibrant while text stays readable */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/55" />
        </div>

        {/* Hero Content & Breadcrumb */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-14 sm:pt-36 sm:pb-20">
          
          {/* Tagline with Gold Lines */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.25em] uppercase text-[#F5B800] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              AUTHENTIC FLAVOURS
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          {/* Heading - Tasteful size (not overly large), matching font style */}
          <h1 className="font-playfair text-[32px] sm:text-[42px] md:text-[48px] font-bold text-[#FFFFFF] tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]">
            Our Menu
          </h1>

          {/* Subtitle */}
          <p className="font-poppins text-[14px] sm:text-[16px] text-neutral-200 max-w-xl mx-auto mt-2 sm:mt-3 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Charcoal barbecues, desi koyla karahis, and authentic Pakistani delicacies prepared fresh daily.
          </p>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[14px] font-poppins text-neutral-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <button
              type="button"
              onClick={() => {
                if (setActivePage) setActivePage('Home');
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#F5B800] transition-colors focus:outline-none cursor-pointer font-medium"
            >
              Home
            </button>
            <span className="text-[#F5B800] font-bold">/</span>
            <span className="text-[#F5B800] font-semibold">Our Menu</span>
          </div>

        </div>
      </section>

      {/* 2. Branch Specific Menu: Nagana Chowk (Full Authenticated Menu) vs Gulshan Market (Branch 1 Menu) */}
      {selectedBranch === 'gulshan' ? (
        <GulshanMenuSection 
          onSwitchToNagana={() => onSelectBranch && onSelectBranch('nagana')} 
        />
      ) : (
        <ParallelMenuSection />
      )}

    </div>
  );
}
