import React from 'react';
import { Sparkles, ShieldCheck, Flame, Heart } from 'lucide-react';

export default function AuthenticStorySection() {
  const features = [
    {
      id: 'traditional-taste',
      icon: <Sparkles className="w-5 h-5 text-[#F5B800] stroke-[2]" />,
      title: 'Traditional Taste',
      desc: 'Recipes rooted in authentic desi cooking.',
    },
    {
      id: 'fresh-ingredients',
      icon: <ShieldCheck className="w-5 h-5 text-[#F5B800] stroke-[2]" />,
      title: 'Fresh Ingredients',
      desc: 'Quality produce and meat, prepared daily.',
    },
    {
      id: 'real-flavours',
      icon: <Flame className="w-5 h-5 text-[#F5B800] stroke-[2]" />,
      title: 'Real Flavours',
      desc: 'Bold spice and genuine charcoal smoke.',
    },
    {
      id: 'made-to-share',
      icon: <Heart className="w-5 h-5 text-[#F5B800] stroke-[2]" />,
      title: 'Made to Share',
      desc: 'Good food brings people together.',
    },
  ];

  return (
    <section id="our-story" className="relative bg-[#0d0d0d] py-18 sm:py-24 lg:py-28 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Ambience Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#F5B800]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#F5B800]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT: DUAL OVERLAPPING FULL-IMAGE CARDS (ZERO EMPTY SPACE) ================= */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[500px] sm:max-w-[540px] pb-10 sm:pb-12">
              
              {/* Back Card: Smoky BBQ Chicken Piece (Full Photo, 100% Cover, No Empty Space) */}
              <div className="relative w-[72%] sm:w-[68%] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-neutral-800/90 ml-auto z-10 group bg-neutral-900 select-none">
                <img
                  src="/BBQ.jpg"
                  alt="Kabab G Smoky BBQ Chicken"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = '/bbq.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Front Card: Sizzling Desi Karahi (Full Photo, 100% Cover, No Empty Space) */}
              <div className="relative w-[75%] sm:w-[70%] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border-4 border-[#0d0d0d] -mt-20 sm:-mt-24 z-20 group bg-neutral-900 select-none">
                <img
                  src="/desi.jpg"
                  alt="Kabab G Authentic Desi Karahi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = '/Desi krahi.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Pill Badge: Good Food BRINGS PEOPLE TOGETHER */}
              <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-30 bg-[#141414] border border-[#F5B800]/50 rounded-2xl py-3 px-6 sm:px-7 shadow-2xl text-center whitespace-nowrap backdrop-blur-md">
                <span className="font-playfair italic text-[#F5B800] text-[18px] sm:text-[21px] font-semibold block leading-tight">
                  Good Food
                </span>
                <span className="font-poppins text-[9px] sm:text-[10px] font-bold tracking-[0.28em] uppercase text-neutral-300 block mt-0.5">
                  BRINGS PEOPLE TOGETHER
                </span>
              </div>

            </div>
          </div>

          {/* ================= RIGHT: OUR STORY CONTENT ================= */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pre-heading: — OUR STORY */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#F5B800]" />
              <span className="font-poppins text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase text-[#F5B800]">
                OUR STORY
              </span>
            </div>

            {/* Main Title: Authentic Pakistani Food, Done Right. */}
            <h2 className="font-playfair text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white tracking-tight leading-[1.15]">
              Authentic Pakistani Food,{' '}
              <span className="italic text-[#F5B800]">Done Right.</span>
            </h2>

            {/* Paragraph Description */}
            <p className="font-poppins text-neutral-300 text-[14px] sm:text-[15.5px] leading-relaxed max-w-xl">
              At Kabab G, every plate carries the spirit of traditional Pakistani cooking: smoky charcoal BBQ, slow-cooked karahi, creamy handi and more. We believe in traditional taste, fresh ingredients and real flavours, served in generous portions worth gathering around.
            </p>

            {/* 4 Feature Points (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-4">
              {features.map((item) => (
                <div key={item.id} className="flex items-start gap-3.5">
                  {/* Icon Squircle */}
                  <div className="w-10 h-10 rounded-xl bg-[#161616] border border-neutral-800 flex items-center justify-center shrink-0 shadow-sm mt-0.5 group-hover:border-[#F5B800] transition-colors">
                    {item.icon}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h4 className="font-poppins text-[15px] sm:text-[16px] font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-poppins text-xs sm:text-[13px] text-neutral-400 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
