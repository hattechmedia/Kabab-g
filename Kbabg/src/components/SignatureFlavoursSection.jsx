import React from 'react';
import { Phone, ArrowRight, Star } from 'lucide-react';

export default function SignatureFlavoursSection({ setActivePage }) {
  const dishes = [
    {
      id: 1,
      name: 'Angara Piece',
      category: 'BBQ SMOKY PIECE',
      desc: 'Char-grilled chicken piece lacquered in our smoky angara spice.',
      image: '/BBQ.jpg',
      fallback: '/bbq.webp',
      prices: [
        { label: 'LEG', price: 'PKR 450' },
        { label: 'CHEST', price: 'PKR 500' },
      ],
    },
    {
      id: 2,
      name: 'Chicken Kabab',
      category: 'SMPIRE KABAB',
      desc: 'Soft, flame-grilled minced chicken kababs, juicy and spiced just right.',
      image: '/seekh-kbab.jpg',
      fallback: '/hero.png',
      prices: [
        { label: 'HALF', price: 'PKR 400' },
        { label: 'FULL', price: 'PKR 800' },
      ],
    },
    {
      id: 3,
      name: 'Red Grill Fish',
      category: 'FISH',
      desc: 'Whole fish bathed in red masala and grilled to a crisp, golden finish.',
      image: '/fish.jpg',
      fallback: '/chkn.jpg',
      prices: [
        { label: '', price: 'PKR 1,400' },
      ],
    },
    {
      id: 4,
      name: 'Mutton Afghani Karahi',
      category: 'MUTTON',
      desc: 'Tender mutton cuts tossed in a rich, creamy Afghani gravy.',
      image: '/mutton.jpeg',
      fallback: '/muton.jpg',
      prices: [
        { label: 'HALF', price: 'PKR 2,400' },
        { label: 'FULL', price: 'PKR 4,600' },
      ],
    },
    {
      id: 5,
      name: 'Chicken White Handi',
      category: 'CHICKEN HANDI',
      desc: 'Chicken simmered in a velvety, mild white cream handi.',
      image: '/chicken-handi.jpg',
      fallback: '/chicken-handi.jpeg',
      prices: [
        { label: '', price: 'PKR 1,300' },
      ],
    },
    {
      id: 6,
      name: 'Matka Biryani',
      category: 'RICE SPECIALITY',
      desc: 'Fragrant basmati rice served in a traditional clay matka pot.',
      image: '/fried.jpg',
      fallback: '/Pulao.jpg',
      prices: [
        { label: '', price: 'PKR 990' },
      ],
    },
  ];

  return (
    <section className="relative bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#F5B800]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Pre-heading */}
          <div className="inline-flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
            <span className="font-poppins text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase text-[#F5B800]">
              CHEF'S PICKS
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
          </div>

          {/* Main Title: Playfair Display */}
          <h2 className="font-playfair text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white tracking-tight leading-tight">
            Discover Our Signature Flavours
          </h2>

          {/* Small Decorative Diamond Divider */}
          <div className="flex items-center justify-center gap-2 my-2.5 text-[#F5B800]">
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
            <span className="text-[10px]">✦</span>
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
          </div>

          {/* Subtitle */}
          <p className="font-poppins text-neutral-300 text-[13px] sm:text-[15px] mt-2 leading-relaxed max-w-2xl mx-auto">
            A handful of standout dishes from our menu, grilled, simmered and served the Kabab G way.
          </p>

        </div>

        {/* ================= 6 SIGNATURE DISH CARDS (FULL WIDTH IMAGE TOP + YELLOW CONTENT) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-[#FDE68A] rounded-2xl overflow-hidden shadow-xl border-2 border-[#E6B93F] hover:border-[#F5B800] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(245,184,0,0.22)] flex flex-col justify-between"
            >
              
              {/* 1. TOP: FULL-WIDTH FOOD IMAGE (Zero empty space) */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-neutral-900 select-none">
                <img
                  src={dish.image}
                  alt={dish.name}
                  onError={(e) => {
                    if (dish.fallback) e.currentTarget.src = dish.fallback;
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                
                {/* Category Pill Over Image (Top-Left) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block text-[9.5px] sm:text-[10.5px] font-poppins font-bold text-white bg-[#0B6623]/95 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-md">
                    {dish.category}
                  </span>
                </div>

                {/* Gold Star Badge (Top-Right) */}
                <div className="absolute top-3 right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5B800] text-black flex items-center justify-center shadow-lg">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black fill-current" />
                </div>

                {/* Subtle dark vignette at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
              </div>

              {/* 2. BOTTOM: WARM YELLOW CONTENT BOX (Dish Name, Description, Pricing, Order Button) */}
              <div className="p-5 sm:p-6 bg-[#FDE68A] text-[#111111] flex-1 flex flex-col justify-between">
                <div>
                  {/* Dish Name */}
                  <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold text-neutral-900 group-hover:text-[#8B1A1A] transition-colors leading-tight mb-2 text-left">
                    {dish.name}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-[12.5px] sm:text-[13px] text-neutral-800 leading-relaxed text-left min-h-[38px] mb-4">
                    {dish.desc}
                  </p>
                </div>

                {/* Divider Line & Pricing + Order Button */}
                <div className="pt-3.5 border-t border-[#E6B93F]/70 flex items-center justify-between gap-2">
                  
                  {/* Prices on Left */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {dish.prices.map((p, idx) => (
                      p.label ? (
                        <div 
                          key={idx}
                          className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/75 border border-[#E6B93F] text-center shadow-xs"
                        >
                          <div className="text-[9px] sm:text-[10px] font-poppins font-bold text-neutral-600 uppercase tracking-wider leading-none mb-0.5">
                            {p.label}
                          </div>
                          <div className="text-[12px] sm:text-[13px] font-poppins font-extrabold text-[#8B1A1A] leading-tight">
                            {p.price}
                          </div>
                        </div>
                      ) : (
                        <div key={idx} className="text-[17px] sm:text-[19px] font-poppins font-extrabold text-[#8B1A1A] tracking-tight">
                          {p.price}
                        </div>
                      )
                    ))}
                  </div>

                  {/* Order Button on Right */}
                  <a
                    href="tel:03159610004"
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#F5B800] to-[#E0A700] hover:from-[#E0A700] hover:to-[#C69200] text-black font-poppins font-bold text-[11px] sm:text-[12px] shadow-md hover:shadow-lg transition-all transform hover:scale-105 shrink-0 uppercase tracking-wider cursor-pointer"
                    title="Call to Order"
                  >
                    <Phone className="w-3.5 h-3.5 text-black stroke-[2.2]" />
                    <span>ORDER</span>
                  </a>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA: VIEW THE FULL MENU ================= */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={() => {
              if (setActivePage) {
                setActivePage('Menu');
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }
            }}
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 rounded-full border-2 border-[#F5B800] text-[#F5B800] hover:bg-[#F5B800] hover:text-black font-poppins font-bold text-xs sm:text-[13px] tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F5B800]/10 cursor-pointer"
          >
            <span>VIEW THE FULL MENU</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

      </div>
    </section>
  );
}
