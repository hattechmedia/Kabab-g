import React from 'react';
import { Utensils, Bike, Home, Phone } from 'lucide-react';

export default function CoreValuesBanner({ setActivePage }) {
  const services = [
    {
      id: 'dine-in',
      icon: <Utensils className="w-7 h-7 stroke-[2]" />,
      title: 'Dine In',
      desc: 'Enjoy freshly prepared meals in the warm, welcoming setting of Kabab G.',
      cta: 'ORDER NOW',
      phone: '03159610004',
    },
    {
      id: 'take-away',
      icon: <Bike className="w-7 h-7 stroke-[2]" />,
      title: 'Take Away',
      desc: 'Take your favourite Kabab G dishes with you, packed hot and fresh.',
      cta: 'ORDER NOW',
      phone: '03159610004',
    },
    {
      id: 'home-delivery',
      icon: <Home className="w-7 h-7 stroke-[2]" />,
      title: 'Home Delivery',
      desc: 'Enjoy authentic flavours at home. Just give us a call to order.',
      cta: 'ORDER NOW',
      phone: '03159610004',
    },
  ];

  return (
    <section id="services" className="relative bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Ambience Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F5B800]/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#F5B800]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          
          {/* Pre-heading */}
          <div className="inline-flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
            <span className="font-poppins text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase text-[#F5B800]">
              HOW TO ENJOY KABAB G
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
          </div>

          {/* Main Title: Playfair Display */}
          <h2 className="font-playfair text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-white tracking-tight leading-tight">
            Our Services
          </h2>

          {/* Small Decorative Diamond Divider */}
          <div className="flex items-center justify-center gap-2 my-2.5 text-[#F5B800]">
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
            <span className="text-[10px]">✦</span>
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
          </div>

        </div>

        {/* ================= 3 SERVICES CARDS (MATCHING REFERENCE IMAGE) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-6xl mx-auto">
          {services.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FDE68A] rounded-3xl p-7 sm:p-9 text-center shadow-xl border-2 border-[#E6B93F] hover:border-[#F5B800] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(245,184,0,0.22)] flex flex-col justify-between"
            >
              <div>
                {/* Pure Black Rounded Squircle Icon Container */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-black border border-neutral-800 flex items-center justify-center mx-auto mb-6 text-[#F5B800] shadow-md group-hover:scale-110 group-hover:border-[#F5B800] transition-all duration-300">
                  {item.icon}
                </div>

                {/* Service Title */}
                <h3 className="font-playfair text-[22px] sm:text-[25px] font-bold text-neutral-900 mb-3 tracking-wide">
                  {item.title}
                </h3>

                {/* Service Description */}
                <p className="font-poppins text-[13.5px] sm:text-[14.5px] text-neutral-800 leading-relaxed mb-6 font-medium max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>

              {/* Action Button: ORDER NOW with Phone Icon */}
              <div className="pt-4 border-t border-[#E6B93F]/70">
                <a
                  href={`tel:${item.phone}`}
                  className="inline-flex items-center justify-center gap-2 font-poppins text-xs font-bold text-[#8B1A1A] hover:text-neutral-950 uppercase tracking-wider transition-colors group-hover:scale-105 transform duration-200"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{item.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
