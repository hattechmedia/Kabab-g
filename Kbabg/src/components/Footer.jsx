import React from 'react';
import { MapPin, Phone, Utensils, Bike, Home } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-4 h-4 stroke-[1.8] fill-none stroke-current" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer({ setActivePage }) {
  const exploreLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'Our Menu', page: 'Menu' },
    { name: 'Signature Dishes', targetId: 'categories' },
    { name: 'About Us', page: 'About us' },
    { name: 'Locations', targetId: 'locations' },
    { name: 'Contact', page: 'Contact' },
  ];

  const menuCategories = [
    'BBQ Smoky Piece',
    'Smpire Kabab',
    'Luxury BBQ Boti',
    'Mutton',
    'Desi Karahi',
    'Beef Karahi',
    'Chicken Karahi',
    'Chowmein',
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    if (item.page && setActivePage) {
      setActivePage(item.page);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else if (item.targetId) {
      if (setActivePage) setActivePage('Home');
      setTimeout(() => {
        const el = document.getElementById(item.targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();
    if (setActivePage) {
      setActivePage('Menu');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <footer className="relative bg-[#0d0d0d] text-white overflow-hidden border-t border-neutral-900">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#F5B800]/[0.025] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">
        
        {/* ================= 4 COLUMNS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left">
          
          {/* ================= COLUMN 1: BRAND LOGO & ABOUT ================= */}
          <div className="space-y-4">
            {/* Kabab G Official Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                if (setActivePage) {
                  setActivePage('Home');
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }
              }}
              className="inline-block cursor-pointer group"
            >
              <img
                src="/logo-rm.png"
                alt="Kabab G Restaurant Logo"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(245,184,0,0.25)]"
              />
            </a>

            {/* Description Paragraph */}
            <p className="font-poppins text-[13px] sm:text-[14px] text-neutral-300 leading-relaxed max-w-xs">
              Authentic Pakistani BBQ, karahi, handi and more. Traditional taste, fresh ingredients and real flavours, served in Multan.
            </p>

            {/* Instagram Link */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/kababg.resturent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] sm:text-[13.5px] font-poppins text-neutral-300 hover:text-[#F5B800] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-neutral-700/80 group-hover:border-[#F5B800] flex items-center justify-center transition-colors">
                  <InstagramIcon />
                </div>
                <span>@kababg.resturent</span>
              </a>
            </div>
          </div>

          {/* ================= COLUMN 2: EXPLORE LINKS ================= */}
          <div>
            <h4 className="font-playfair text-[18px] sm:text-[20px] font-bold text-white mb-4 sm:mb-5 tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2.5 font-poppins text-[13px] sm:text-[14px] text-neutral-300">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.targetId || link.page}`}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="hover:text-[#F5B800] transition-colors block cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: MENU CATEGORIES ================= */}
          <div>
            <h4 className="font-playfair text-[18px] sm:text-[20px] font-bold text-white mb-4 sm:mb-5 tracking-wide">
              Menu Categories
            </h4>
            <ul className="space-y-2.5 font-poppins text-[13px] sm:text-[14px] text-neutral-300">
              {menuCategories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#menu"
                    onClick={handleCategoryClick}
                    className="hover:text-[#F5B800] transition-colors block cursor-pointer"
                  >
                    {cat}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="#menu"
                  onClick={handleCategoryClick}
                  className="font-poppins text-[13px] font-semibold text-[#F5B800] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View all 19 categories →</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 4: VISIT & ORDER ================= */}
          <div className="space-y-4">
            <h4 className="font-playfair text-[18px] sm:text-[20px] font-bold text-white mb-4 sm:mb-5 tracking-wide">
              Visit & Order
            </h4>

            <div className="space-y-3 font-poppins text-[13px] sm:text-[13.5px] text-neutral-300">
              {/* Branch 1 */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5B800] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Kabab+G+Nagana+Chowk+Multan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Main Nagana Chowk, Multan
                </a>
              </div>

              {/* Branch 2 */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5B800] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Kabab+G+Gulshan+Market+New+Multan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Gulshan Market, New Multan
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#F5B800] shrink-0" />
                <a
                  href="tel:03159610004"
                  className="font-poppins font-semibold text-white hover:text-[#F5B800] transition-colors"
                >
                  0315-9610004
                </a>
              </div>

              {/* Service Badges Row */}
              <div className="flex items-center gap-4 pt-2 text-[12px] text-neutral-300 font-poppins">
                <span className="inline-flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>Dine In</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Bike className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>Take Away</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>Delivery</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-neutral-800/80 mt-14 sm:mt-16 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] sm:text-[13px] text-neutral-400 font-poppins">
          
          {/* Copyright & HAT TECH Media attribution with Link */}
          <div className="text-center md:text-left">
            <span>© 2026 Kabab G Restaurant, Multan. All rights reserved. </span>
            <span className="text-neutral-500">| Designed & Developed by </span>
            <a
              href="https://hattechmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5B800] hover:underline font-semibold transition-colors"
            >
              @HAT TECH Media
            </a>
          </div>

          {/* Traditional Values Badges */}
          <div className="text-center md:text-right flex items-center justify-center gap-2 text-neutral-400 text-xs">
            <span>Traditional Taste</span>
            <span className="text-[#F5B800]">✦</span>
            <span>Fresh Ingredients</span>
            <span className="text-[#F5B800]">✦</span>
            <span>Real Flavours</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
