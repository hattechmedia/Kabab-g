import React from 'react';

export default function TasteInPicturesSection() {
  // Exact Heights:
  // Standard card: h-[160px] sm:h-[175px] lg:h-[190px]
  // Tall card: h-[336px] sm:h-[366px] lg:h-[396px] (spans 2 standard cards + 16px gap)
  const standardHeight = 'h-[160px] sm:h-[175px] lg:h-[190px]';
  const tallHeight = 'h-[336px] sm:h-[366px] lg:h-[396px]';

  const column1 = [
    {
      id: 'bbq-platter',
      name: 'BBQ Platter',
      image: '/hero.png',
      fallback: '/platters.webp',
      heightClass: tallHeight,
    },
    {
      id: 'fresh-salad',
      name: 'Fresh Salad',
      image: '/salad.webp',
      fallback: '/salad.webp',
      heightClass: standardHeight,
    },
  ];

  const column2 = [
    {
      id: 'grilled-fish',
      name: 'Grilled Fish',
      image: '/fish.jpg',
      fallback: '/fish.jpg',
      heightClass: standardHeight,
    },
    {
      id: 'chicken-handi',
      name: 'Chicken Handi',
      image: '/chicken-handi.jpg',
      fallback: '/chicken-handi.jpg',
      heightClass: standardHeight,
    },
    {
      id: 'balochi-sajji',
      name: 'Balochi Sajji',
      image: '/Sajji.jpg',
      fallback: '/sajji-1.jpg',
      heightClass: standardHeight,
    },
  ];

  const column3 = [
    {
      id: 'desi-karahi',
      name: 'Desi Karahi',
      image: '/desi.jpg',
      fallback: '/Desi krahi.webp',
      heightClass: standardHeight,
    },
    {
      id: 'fried-rice',
      name: 'Fried Rice',
      image: '/fried.jpg',
      fallback: '/Pulao.jpg',
      heightClass: tallHeight,
    },
  ];

  const column4 = [
    {
      id: 'kababs',
      name: 'Kababs',
      image: '/seekh-kbab.jpg',
      fallback: '/hero.png',
      heightClass: standardHeight,
    },
    {
      id: 'smoky-tikka',
      name: 'Smoky Tikka',
      image: '/BBQ.jpg',
      fallback: '/bbq.webp',
      heightClass: standardHeight,
    },
    {
      id: 'mint-margarita',
      name: 'Mint Margarita',
      image: '/Mint.jpg',
      fallback: '/Mint.jpg',
      heightClass: standardHeight,
    },
  ];

  const renderCard = (item) => (
    <div
      key={item.id}
      className={`group relative ${item.heightClass} w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800/80 hover:border-[#F5B800] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(245,184,0,0.18)] shadow-lg bg-neutral-900 select-none`}
    >
      {/* 100% Full Cover Image (Zero Empty Space) */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        onError={(e) => {
          if (item.fallback) e.currentTarget.src = item.fallback;
        }}
      />

      {/* Subtle Vignette Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

      {/* Dish Name Overlay on Bottom Left */}
      <div className="absolute bottom-3 sm:bottom-4 left-3.5 sm:left-4 z-10 pointer-events-none">
        <span className="font-playfair text-[15px] sm:text-[17px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wide group-hover:text-[#F5B800] transition-colors">
          {item.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Ambience Subtle Gold Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F5B800]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          
          {/* Pre-heading */}
          <div className="inline-flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
            <span className="font-poppins text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase text-[#F5B800]">
              STRAIGHT FROM THE KITCHEN
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
          </div>

          {/* Main Title: Playfair Display */}
          <h2 className="font-playfair text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-white tracking-tight leading-tight">
            A Taste in Pictures
          </h2>

          {/* Small Decorative Diamond Divider */}
          <div className="flex items-center justify-center gap-2 my-2.5 text-[#F5B800]">
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
            <span className="text-[10px]">✦</span>
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
          </div>

        </div>

        {/* ================= 4-COLUMN ASYMMETRIC MASONRY GRID (ZERO BOTTOM EMPTY SPACE) ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1: BBQ Platter (Tall) + Fresh Salad (Standard) */}
          <div className="flex flex-col gap-4">
            {column1.map(renderCard)}
          </div>

          {/* Column 2: Grilled Fish + Chicken Handi + Balochi Sajji (3 Standard Cards, Perfectly Aligned) */}
          <div className="flex flex-col gap-4">
            {column2.map(renderCard)}
          </div>

          {/* Column 3: Desi Karahi (Standard) + Fried Rice (Tall) */}
          <div className="flex flex-col gap-4">
            {column3.map(renderCard)}
          </div>

          {/* Column 4: Kababs + Smoky Tikka + Mint Margarita (3 Standard Cards, Perfectly Aligned) */}
          <div className="flex flex-col gap-4">
            {column4.map(renderCard)}
          </div>
        </div>

      </div>
    </section>
  );
}
