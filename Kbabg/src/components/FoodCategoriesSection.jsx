import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FoodCategoriesSection({ setActivePage }) {
  const categories = [
    {
      id: 'bbq-smoky',
      name: 'BBQ Smoky Piece',
      count: '5 Items',
      desc: 'Tender chicken leg & chest pieces flame-grilled over live acacia charcoal.',
      image: '/BBQ.jpg',
      fallback: '/bbq.webp',
    },
    {
      id: 'seekh-kabab',
      name: 'Smpire Kabab',
      count: '6 Items',
      desc: 'Royal minced skewers seasoned with traditional herbs and freshly ground spices.',
      image: '/seekh-kbab.jpg',
      fallback: '/hero.png',
    },
    {
      id: 'luxury-bbq',
      name: 'Luxury BBQ Boti',
      count: '10 Items',
      desc: 'Melt-in-mouth boneless chicken boti marinated in saffron & cream.',
      image: '/luxury.jpg',
      fallback: '/luxury-1.jpeg',
    },
    {
      id: 'mutton',
      name: 'Mutton',
      count: '7 Items',
      desc: 'Prime tender baby mutton cuts simmered in authentic Pakistani style.',
      image: '/mutton.jpeg',
      fallback: '/muton.jpg',
    },
    {
      id: 'desi-karahi',
      name: 'Desi Karahi',
      count: '4 Items',
      desc: 'Simmered slow in pure organic desi ghee with country tomatoes & ginger.',
      image: '/desi.jpg',
      fallback: '/Desi krahi.webp',
    },
    {
      id: 'beef-karahi',
      name: 'Beef Karahi',
      count: '4 Items',
      desc: 'Succulent lean beef wok-tossed over blazing coals with roasted spices.',
      image: '/beef.jpg',
      fallback: '/krahi-1.png',
    },
    {
      id: 'chicken-karahi',
      name: 'Chicken Karahi',
      count: '5 Items',
      desc: 'Farm-fresh chicken prepared in signature rich tomato gravy in iron woks.',
      image: '/chkn.jpg',
      fallback: '/chkn.jpeg',
    },
    {
      id: 'chowmein',
      name: 'Chowmein',
      count: '4 Items',
      desc: 'Stir-fried noodles loaded with shredded chicken & garden-fresh vegetables.',
      image: '/chowmin.jpg',
      fallback: '/fried.jpg',
    },
    {
      id: 'burgers',
      name: 'Burgers',
      count: '7 Items',
      desc: 'Handcrafted crispy zinger & royal beef patties with melted cheddar.',
      image: '/burger.jpg',
      fallback: '/burger.jpeg',
    },
    {
      id: 'strips-rolls',
      name: 'Strips & Rolls',
      count: '4 Items',
      desc: 'Crispy fried chicken strips & savory wraps rolled in toasted parathas.',
      image: '/wrap.jpg',
      fallback: '/burger.jpg',
    },
    {
      id: 'wings',
      name: 'Wings',
      count: '3 Items',
      desc: 'Golden crispy chicken wings tossed in fiery hot honey and BBQ glaze.',
      image: '/wings.jpg',
      fallback: '/BBQ.jpg',
    },
    {
      id: 'fish',
      name: 'Fish',
      count: '4 Items',
      desc: 'Fresh river fish coated in aromatic Lahori batter, fried to golden crisp.',
      image: '/fish.jpg',
      fallback: '/chkn.jpg',
    },
    {
      id: 'soups',
      name: 'Soups',
      count: '5 Items',
      desc: 'Steaming hot chicken corn & hot & sour broths simmered fresh daily.',
      image: '/soup.jpg',
      fallback: '/chicken-handi.jpg',
    },
    {
      id: 'chinese',
      name: 'Chinese Cuisines',
      count: '11 Items',
      desc: 'Classic sweet & sour Manchurian, spicy Shashlik, and Szechuan dishes.',
      image: '/chineese-1.jpg',
      fallback: '/chineese-2.jpg',
    },
    {
      id: 'fried-rice',
      name: 'Fried Rice',
      count: '3 Items',
      desc: 'Aged basmati rice wok-tossed with egg ribbons, scallions & chicken.',
      image: '/fried.jpg',
      fallback: '/Pulao.jpg',
    },
    {
      id: 'chicken-handi',
      name: 'Chicken Handi',
      count: '7 Items',
      desc: 'Silky boneless chicken cooked in traditional clay pots with dairy cream.',
      image: '/chicken-handi.jpg',
      fallback: '/chicken-handi.jpeg',
    },
    {
      id: 'bar-menu',
      name: 'Bar Menu',
      count: '2 Items',
      desc: 'Chilled mint margarita and tangy fresh lime soda made to order.',
      image: '/Mint.jpg',
      fallback: '/salad.webp',
    },
    {
      id: 'hot-sip',
      name: 'Hot Sip',
      count: '1 Item',
      desc: 'Rich aromatic special doodh patti tea brewed with whole cardamom.',
      image: '/tea.jpg',
      fallback: '/tea.jpeg',
    },
    {
      id: 'raita-salad',
      name: 'Raita & Salad',
      count: '5 Items',
      desc: 'Kachumber, crisp green salad, rich Russian salad & refreshing mint raita.',
      image: '/salad.webp',
      fallback: '/salad.wbep',
    },
  ];

  const handleCategoryClick = () => {
    if (setActivePage) {
      setActivePage('Menu');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <section id="categories" className="relative bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F5B800]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Pre-heading */}
          <div className="inline-flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
            <span className="font-poppins text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase text-[#F5B800]">
              BROWSE BY CRAVING
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
          </div>

          {/* Main Title: Playfair Display */}
          <h2 className="font-playfair text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white tracking-tight leading-tight">
            Explore Our Food Categories
          </h2>

          {/* Small Decorative Diamond */}
          <div className="flex items-center justify-center gap-2 my-2.5 text-[#F5B800]">
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
            <span className="text-[10px]">✦</span>
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
          </div>

          {/* Subtitle */}
          <p className="font-poppins text-neutral-300 text-[13px] sm:text-[15px] mt-2 leading-relaxed max-w-2xl mx-auto">
            All 19 menu groups, from smoky BBQ to rich karahi and handi. Tap any category to jump straight to it.
          </p>

        </div>

        {/* ================= 19 CATEGORIES GRID (4 COLUMNS ON DESKTOP) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={handleCategoryClick}
              className="group relative bg-[#141414] hover:bg-[#1a1a1a] border border-neutral-800/90 hover:border-[#F5B800] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(245,184,0,0.18)] flex flex-row items-stretch cursor-pointer min-h-[145px] sm:min-h-[155px]"
            >
              
              {/* Left Side: Just the Image */}
              <div className="w-[110px] sm:w-[120px] md:w-[125px] shrink-0 relative overflow-hidden bg-neutral-900 select-none">
                <img
                  src={cat.image}
                  alt={cat.name}
                  onError={(e) => {
                    if (cat.fallback) e.currentTarget.src = cat.fallback;
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Right Side: Name, Description & Items Count */}
              <div className="flex-1 p-3.5 sm:p-4 flex flex-col justify-between text-left min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-1.5 mb-1">
                    <h3 className="font-playfair text-[16px] font-bold text-white group-hover:text-[#F5B800] transition-colors leading-snug">
                      {cat.name}
                    </h3>
                  </div>
                  
                  <span className="inline-block text-[11px] font-poppins font-semibold text-[#F5B800] bg-[#F5B800]/10 border border-[#F5B800]/30 px-2.5 py-0.5 rounded-full mb-1.5">
                    {cat.count}
                  </span>

                  <p className="font-poppins text-[14px] text-neutral-300 line-clamp-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[12px] sm:text-[13px] font-poppins text-neutral-400 group-hover:text-[#F5B800] transition-colors">
                  <span className="font-medium">View Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#F5B800]" />
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
