import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

export default function VisitKababGSection() {
  const branches = [
    {
      id: 'nagana-chowk',
      tag: 'MAIN BRANCH',
      name: 'Nagana Chowk',
      address: 'Main Nagana Chowk, Multan',
      phone: '03159610004',
      mapsUrl: 'https://maps.google.com/?q=Kabab+G+Nagana+Chowk+Multan',
    },
    {
      id: 'gulshan-market',
      tag: '1ST BRANCH',
      name: 'Gulshan Market',
      address: 'Gulshan Market, New Multan',
      phone: '03159610004',
      mapsUrl: 'https://maps.google.com/?q=Kabab+G+Gulshan+Market+New+Multan',
    },
  ];

  return (
    <section id="locations" className="relative bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Ambience Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F5B800]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          
          {/* Pre-heading */}
          <div className="inline-flex items-center justify-center gap-3 mb-2 sm:mb-2.5">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
            <span className="font-poppins text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase text-[#F5B800]">
              COME SAY HELLO
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
          </div>

          {/* Main Title: Playfair Display */}
          <h2 className="font-playfair text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-white tracking-tight leading-tight">
            Visit Kabab G
          </h2>

          {/* Small Decorative Diamond Divider */}
          <div className="flex items-center justify-center gap-2 my-2.5 text-[#F5B800]">
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
            <span className="text-[10px]">✦</span>
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
          </div>

          {/* Subtitle */}
          <p className="font-poppins text-neutral-300 text-[13.5px] sm:text-[15px] mt-2 leading-relaxed max-w-xl mx-auto">
            Two branches in Multan, serving the same authentic flavours. Dine in, take away or call for home delivery.
          </p>

        </div>

        {/* ================= 2 BRANCH CARDS (MATCHING REFERENCE IMAGE) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 max-w-4xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="group bg-[#FDE68A] rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-[#E6B93F] hover:border-[#F5B800] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(245,184,0,0.22)] flex flex-col justify-between"
            >
              {/* Top Row: Icon + Branch Info */}
              <div className="flex items-start gap-4 sm:gap-4.5 mb-6">
                
                {/* Black Rounded Squircle Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-black border border-neutral-800 flex items-center justify-center shrink-0 shadow-md text-[#F5B800] group-hover:scale-105 group-hover:border-[#F5B800] transition-all duration-300">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Branch Details */}
                <div>
                  <span className="font-poppins text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#8B1A1A] block mb-0.5">
                    {branch.tag}
                  </span>
                  <h3 className="font-playfair text-[20px] sm:text-[23px] font-bold text-neutral-900 leading-tight">
                    {branch.name}
                  </h3>
                  <p className="font-poppins text-xs sm:text-[13px] text-neutral-800 font-medium mt-1 leading-snug">
                    {branch.address}
                  </p>
                </div>

              </div>

              {/* Bottom Actions Row */}
              <div className="pt-4 border-t border-[#E6B93F]/70 flex items-center justify-between gap-3">
                
                {/* GET DIRECTIONS Link */}
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-poppins text-xs sm:text-[12.5px] font-bold text-neutral-800 hover:text-black uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 stroke-[2.2]" />
                  <span>GET DIRECTIONS</span>
                </a>

                {/* CALL NOW Button */}
                <a
                  href={`tel:${branch.phone}`}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#F5B800] to-[#E0A700] hover:from-[#E0A700] hover:to-[#C69200] text-black font-poppins text-xs sm:text-[12.5px] font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>CALL NOW</span>
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
