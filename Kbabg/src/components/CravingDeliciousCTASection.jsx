import React, { useState } from 'react';
import { Phone, Utensils, Copy, Check, Star } from 'lucide-react';

export default function CravingDeliciousCTASection({ setActivePage }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('03159610004');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-[#0d0d0d] py-18 sm:py-24 lg:py-28 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Ambience Subtle Glow (Dark Emerald & Gold Lighting) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-[#091b13]/50 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5B800]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 5 Golden Stars Ornament */}
        <div className="flex items-center justify-center gap-1.5 mb-3 sm:mb-4 text-[#F5B800]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F5B800] stroke-none" />
          ))}
        </div>

        {/* Main Title: Playfair Display */}
        <h2 className="font-playfair text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-white tracking-tight leading-tight">
          Craving Something{' '}
          <span className="italic text-[#F5B800]">Delicious?</span>
        </h2>

        {/* Subtitle */}
        <p className="font-poppins text-neutral-300 text-[14px] sm:text-[16px] mt-2.5 max-w-lg mx-auto leading-relaxed font-normal">
          Your favourite flavours are just a call away.
        </p>

        {/* Big Signature Phone Number */}
        <div className="mt-4 sm:mt-5 mb-2">
          <a
            href="tel:03159610004"
            className="font-poppins text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#F5B800] hover:text-[#ffd147] tracking-normal sm:tracking-wide inline-block transition-colors leading-none drop-shadow-[0_4px_16px_rgba(245,184,0,0.2)]"
          >
            0315-9610004
          </a>

          {/* Interactive Copy Button */}
          <div className="mt-2 flex items-center justify-center">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-poppins text-neutral-400 hover:text-white transition-colors cursor-pointer bg-neutral-900/80 border border-neutral-800 hover:border-[#F5B800] px-3 py-1 rounded-full"
              title="Copy phone number"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#F5B800] stroke-[2.5]" />
                  <span className="text-[#F5B800] font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 stroke-[2]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons: CALL TO ORDER & EXPLORE MENU */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          
          {/* CALL TO ORDER (Yellow Pill Button) */}
          <a
            href="tel:03159610004"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 rounded-full bg-[#F5B800] hover:bg-[#e0a800] text-black font-poppins font-bold text-xs sm:text-[13px] tracking-wider uppercase shadow-lg shadow-[#F5B800]/25 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>CALL TO ORDER</span>
          </a>

          {/* EXPLORE MENU (Outlined Yellow Pill Button) */}
          <button
            type="button"
            onClick={() => {
              if (setActivePage) {
                setActivePage('Menu');
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 rounded-full border-2 border-[#F5B800] text-[#F5B800] hover:bg-[#F5B800] hover:text-black font-poppins font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md shadow-[#F5B800]/10 cursor-pointer"
          >
            <Utensils className="w-4 h-4 stroke-[2.2]" />
            <span>EXPLORE MENU</span>
          </button>

        </div>

      </div>
    </section>
  );
}
