import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

export default function BranchModal({ isOpen, onClose, selectedBranch, onSelectBranch }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Blurred Backdrop - Non-dismissible (Branch selection is mandatory) */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-200 animate-fade-in"
      />

      {/* Compact Modal Box */}
      <div className="relative w-full max-w-md bg-[#161616] border border-[#F5B800]/70 rounded-2xl p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-white z-10 animate-scale-up">

        {/* Title: Welcome to Kabab G & Mandatory Branch Selection */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5B800]/15 border border-[#F5B800]/30 text-[#F5B800] text-[11px] font-semibold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800] animate-pulse"></span>
            Branch Selection Required
          </div>
          <h2 className="font-playfair text-[22px] sm:text-[25px] font-bold text-white tracking-wide">
            Welcome to <span className="text-[#F5B800]">Kabab G</span>
          </h2>
          <p className="font-poppins text-xs sm:text-[13px] text-neutral-300 mt-1.5 max-w-xs mx-auto leading-relaxed">
            Please select your branch to view the relevant menu &amp; pricing
          </p>
        </div>

        {/* 2 Clean Branch Selection Bars */}
        <div className="space-y-3">
          {/* Branch 1 Bar: Gulshan Market */}
          <button
            type="button"
            onClick={() => onSelectBranch('gulshan')}
            className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
              selectedBranch === 'gulshan'
                ? 'bg-[#222222] border-[#F5B800] ring-2 ring-[#F5B800]/50 shadow-[0_0_20px_rgba(245,184,0,0.2)]'
                : 'bg-neutral-900/90 border-neutral-700/80 hover:border-[#F5B800] hover:bg-neutral-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#F5B800]/15 text-[#F5B800] flex items-center justify-center shrink-0 border border-[#F5B800]/30">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="font-poppins">
                <div className="text-[11px] font-semibold text-[#F5B800] uppercase tracking-wider">
                  Branch 1
                </div>
                <div className="text-[14px] sm:text-[15px] font-bold text-white group-hover:text-[#F5B800] transition-colors leading-snug">
                  Gulshan Market, New Multan
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#F5B800] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </button>

          {/* Branch 2 Bar: Main Nagana Chowk */}
          <button
            type="button"
            onClick={() => onSelectBranch('nagana')}
            className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
              selectedBranch === 'nagana'
                ? 'bg-[#222222] border-[#F5B800] ring-2 ring-[#F5B800]/50 shadow-[0_0_20px_rgba(245,184,0,0.2)]'
                : 'bg-neutral-900/90 border-neutral-700/80 hover:border-[#F5B800] hover:bg-neutral-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#F5B800]/15 text-[#F5B800] flex items-center justify-center shrink-0 border border-[#F5B800]/30">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="font-poppins">
                <div className="text-[11px] font-semibold text-[#F5B800] uppercase tracking-wider">
                  Branch 2
                </div>
                <div className="text-[14px] sm:text-[15px] font-bold text-white group-hover:text-[#F5B800] transition-colors leading-snug">
                  Main Nagana Chowk, Multan
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#F5B800] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
}
