import React from 'react';
import { Phone, Tag, Check } from 'lucide-react';

export default function FishSpecialDealsSection() {
  const deals = [
    {
      id: 'fried-fish-deal',
      title: 'Special Fried Fish (2 KG)',
      urdu: 'اسپیشل فرائی فش',
      image: '/fish.jpg',
      fallback: '/fish.jpeg',
      singleKg: 'PKR 1,800',
      regular2Kg: 'PKR 3,600',
      dealPrice: 'PKR 3,199',
      savings: 'SAVE PKR 400',
      perk: 'Free Tartar Dip & Salad included',
    },
    {
      id: 'grilled-fish-deal',
      title: 'Red Grill Fish (2 KG)',
      urdu: 'ریڈ گرل فش',
      image: '/fish.jpeg',
      fallback: '/fish.jpg',
      singleKg: 'PKR 1,400',
      regular2Kg: 'PKR 2,800',
      dealPrice: 'PKR 2,399',
      savings: 'SAVE PKR 400',
      perk: 'Free 2 Naan & Mint Raita included',
    },
  ];

  return (
    <section className="relative bg-[#0d0d0d] py-8 sm:py-10 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#F5B800]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= COMPACT HEADER ================= */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="w-6 h-[1.5px] bg-[#F5B800]" />
            <span className="font-poppins text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#F5B800]">
              LIMITED TIME OFFER
            </span>
            <span className="w-6 h-[1.5px] bg-[#F5B800]" />
          </div>
          <h2 className="font-playfair text-[22px] sm:text-[26px] font-bold text-white tracking-tight">
            Special 2 KG Fish Deals
          </h2>
          <p className="font-poppins text-neutral-400 text-xs sm:text-[13px] mt-0.5">
            2 Kilo par instant PKR 400 ki bachat
          </p>
        </div>

        {/* ================= 2 COMPACT DEAL CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-[#FDE68A] text-[#111111] rounded-2xl p-4 sm:p-5 border-2 border-[#E6B93F] shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                
                {/* Top Row: Thumbnail + Title + Savings Badge */}
                <div className="flex items-start gap-3.5 mb-3">
                  {/* Thumbnail Image */}
                  <img
                    src={deal.image}
                    alt={deal.title}
                    onError={(e) => {
                      if (deal.fallback) e.currentTarget.src = deal.fallback;
                    }}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover shrink-0 border border-[#E6B93F] shadow-sm bg-neutral-900"
                  />

                  {/* Title & Urdu */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-poppins text-[10px] font-extrabold uppercase tracking-wider text-[#8B1A1A] bg-white/70 px-2 py-0.5 rounded border border-[#E6B93F]">
                        2 KG DEAL
                      </span>
                      <span className="inline-flex items-center gap-1 font-poppins text-[10px] font-black uppercase text-white bg-[#8B1A1A] px-2 py-0.5 rounded-full shadow-xs">
                        <Tag className="w-2.5 h-2.5 text-[#F5B800] fill-current" />
                        {deal.savings}
                      </span>
                    </div>

                    <h3 className="font-playfair text-[17px] sm:text-[19px] font-bold text-neutral-950 leading-tight truncate">
                      {deal.title}
                    </h3>
                    <span className="font-playfair text-xs text-[#8B1A1A] font-bold" dir="rtl">
                      {deal.urdu}
                    </span>
                  </div>
                </div>

                {/* Pricing Breakdown: Clean & Punchy */}
                <div className="bg-white/80 rounded-xl px-3.5 py-2.5 border border-[#E6B93F]/70 mb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-poppins font-medium text-neutral-500 uppercase block leading-none mb-0.5">
                      1 KG: {deal.singleKg}
                    </span>
                    <span className="text-xs font-poppins text-neutral-400 line-through">
                      Reg: {deal.regular2Kg}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-poppins font-extrabold text-[#8B1A1A] uppercase block leading-none mb-0.5">
                      Deal Price
                    </span>
                    <span className="text-[18px] sm:text-[20px] font-poppins font-extrabold text-[#8B1A1A] leading-tight">
                      {deal.dealPrice}
                    </span>
                  </div>
                </div>

                {/* Perk highlight */}
                <div className="flex items-center gap-1.5 text-neutral-800 text-xs font-poppins font-medium mb-3">
                  <Check className="w-3.5 h-3.5 text-[#0B6623] stroke-[3]" />
                  <span>{deal.perk}</span>
                </div>

              </div>

              {/* Bottom Call to Order Button */}
              <div className="pt-2.5 border-t border-[#E6B93F]/60">
                <a
                  href="tel:03159610004"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 sm:py-2.5 rounded-xl bg-[#8B1A1A] hover:bg-[#a01f1f] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 fill-current text-[#F5B800]" />
                  <span>ORDER DEAL (0315-9610004)</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
