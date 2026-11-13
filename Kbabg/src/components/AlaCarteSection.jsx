import React from 'react';
import { MapPin, Phone, Clock, ArrowRight, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import FoodDoodleSides from './FoodDoodleSides';

export default function AlaCarteSection({ selectedBranch = 'nagana', onSelectBranch, onOpenBranchModal }) {
  // 2nd Branch: Main Nagana Chowk Menu Data
  const naganaLeftCategories = [
    {
      categoryTitle: 'KARAHI & HANDI',
      items: [
        {
          name: 'DESI GHEE KOYLA KARAHI',
          badge: 'POPULAR',
          price: 'Rs. 1,650',
          desc: 'Fresh farm chicken wok-simmered in pure desi ghee, crushed country tomatoes, sliced ginger, and finished over live charcoal embers.',
          image: '/krahi-1.png',
        },
        {
          name: 'SHAHI DUM PUKHT HANDI',
          badge: 'RECOMMENDED',
          price: 'Rs. 2,450',
          desc: 'Prime baby mutton simmered slow in a sealed earthenware clay handi with cardamom, saffron, and rich caramelized onion gravy.',
          image: '/Mutton.webp',
        },
        {
          name: 'MAKHNI CHICKEN HANDI',
          badge: null,
          price: 'Rs. 1,450',
          desc: 'Tender boneless chicken cubes cooked in silky dairy cream, crushed cashews, and aromatic kasuri methi in traditional copper deg.',
          image: '/krahi.webp',
        },
        {
          name: 'SPECIAL SHINWARI DUM KARAHI',
          badge: "CHEF'S SPECIAL",
          price: 'Rs. 1,750',
          desc: 'Traditional Peshawari Shinwari style chicken prepared exclusively with black pepper, green chillies, and country animal fat.',
          image: '/Desi%20krahi.webp',
        },
      ],
    },
    {
      categoryTitle: 'TRADITIONAL PULAO',
      items: [
        {
          name: 'KABAB G MUTTON YAKHNI PULAO',
          badge: "CHEF'S SPECIAL",
          price: 'Rs. 1,250',
          desc: 'Aged fragrant basmati rice steeped in rich bone marrow broth with succulent mutton cuts, caramelized raisins, and roasted almonds.',
          image: '/Pulao.jpg',
        },
        {
          name: 'BANNU BEEF PULAO',
          badge: 'POPULAR',
          price: 'Rs. 950',
          desc: 'Authentic Khyber Bannu recipe with slow-braised tender beef shanks, bone marrow essence, and spiced long-grain basmati.',
          image: '/Pulao.jpg',
        },
      ],
    },
    {
      categoryTitle: 'SALADS & SIDES',
      items: [
        {
          name: 'FRESH KACHUMBER & ZEERA RAITA',
          badge: null,
          price: 'Rs. 220',
          desc: 'Crisp diced cucumbers, ripe tomatoes, red onions tossed with lemon juice and paired with chilled roasted cumin yogurt.',
          image: '/salad.webp',
        },
        {
          name: 'SPECIAL KABAB G RUSSIAN SALAD',
          badge: null,
          price: 'Rs. 380',
          desc: 'Diced orchard apples, pineapple chunks, sweet garden peas, and sweet corn folded in velvety chilled cream dressing.',
          image: '/salad.webp',
        },
      ],
    },
  ];

  const naganaRightCategories = [
    {
      categoryTitle: 'CHARCOAL BBQ',
      items: [
        {
          name: 'CHICKEN RESHMI SEEKH KEBAB',
          badge: 'RECOMMENDED',
          price: 'Rs. 890',
          desc: 'Finely minced chicken spiced with roasted coriander, white pepper, fresh dairy cream, and roasted over glowing hardwood coals.',
          image: '/hero.png',
        },
        {
          name: 'CHICKEN MALAI BOTI',
          badge: 'POPULAR',
          price: 'Rs. 950',
          desc: 'Melt-in-mouth boneless chicken thighs marinated overnight in thick clotted cream, green chillies, and mild royal spices.',
          image: '/bbq.webp',
        },
        {
          name: 'MUTTON SEEKH KEBAB',
          badge: null,
          price: 'Rs. 1,290',
          desc: 'Coarse-ground prime mutton blended with onions, fresh mint, and pomegranate powder, char-grilled on long steel skewers.',
          image: '/bbq-1.png',
        },
        {
          name: 'KASTOORI CHICKEN BOTI',
          badge: null,
          price: 'Rs. 980',
          desc: 'Succulent chicken cubes coated in a spiced golden egg glaze with cracked black pepper and char-grilled over acacia charcoal.',
          image: '/bbq.webp',
        },
      ],
    },
    {
      categoryTitle: 'BALOCHI SAJJI',
      items: [
        {
          name: 'SPECIAL BALOCHI CHARCOAL SAJJI',
          badge: 'SIGNATURE',
          price: 'Rs. 1,550',
          desc: 'Whole chicken skewered around glowing hardwood embers, slow-roasted with pure rock salt and Kabab G signature Kaala masala.',
          image: '/Sajji-1.png',
        },
        {
          name: 'MUTTON SAJJI (HALF / FULL)',
          badge: null,
          price: 'Rs. 3,200',
          desc: 'Tender prime mutton leg slow-roasted on an open fire pit for 4 hours until exceptionally crisp outside and juicy inside.',
          image: '/sajji-1.jpg',
        },
      ],
    },
    {
      categoryTitle: 'TANDOOR',
      items: [
        {
          name: 'SPECIAL TANDOORI ROGHNI NAAN',
          badge: 'FRESH & HOT',
          price: 'Rs. 90',
          desc: 'Puffy leavened flatbread baked against fiery clay tandoor walls, brushed with pure clarified butter and toasted white sesame seeds.',
          image: '/Tandoor.jpg',
        },
        {
          name: 'GARLIC BUTTER KANDHARI NAAN',
          badge: null,
          price: 'Rs. 120',
          desc: 'Fluffy clay oven flatbread infused with roasted minced garlic, fresh coriander leaves, and topped with rich country butter.',
          image: '/Tandoor.webp',
        },
      ],
    },
  ];

  // 1st Branch: Gulshan Market Preview Specials
  const gulshanPreviewItems = [
    {
      name: 'SPECIAL BALOCHI CHICKEN SAJJI',
      category: 'BALOCHI SAJJI',
      desc: 'Authentic firewood roasted whole chicken with traditional kaala masala.',
      image: '/Sajji.jpg',
    },
    {
      name: 'DESI GHEE KOYLA KARAHI',
      category: 'KARAHI & HANDI',
      desc: 'Wok cooked fresh chicken in pure desi ghee with live charcoal dum.',
      image: '/krahi-1.png',
    },
    {
      name: 'CHICKEN RESHMI SEEKH KEBAB',
      category: 'CHARCOAL BBQ',
      desc: 'Cream-infused chicken mince char-grilled on live coal skewers.',
      image: '/hero.png',
    },
    {
      name: 'KABAB G MUTTON YAKHNI PULAO',
      category: 'TRADITIONAL PULAO',
      desc: 'Steamed basmati infused with slow-simmered bone broth & mutton cuts.',
      image: '/Pulao.jpg',
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu-items" className="relative bg-[#050505] text-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      
      {/* Side by Side Food Elements (Left and Right borders as in attached image) */}
      <FoodDoodleSides />
      
      {/* 1. Subtle Food Doodle Art Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          <path d="M120 180 C 180 120, 260 120, 320 180 C 260 240, 180 240, 120 180 Z" />
          <path d="M320 180 L 360 150 L 360 210 Z" />
          <circle cx="160" cy="175" r="4" fill="#FFFFFF" />
          <path d="M980 140 A 60 60 0 0 1 1060 220 L 980 220 Z" />
          <path d="M990 155 A 45 45 0 0 1 1045 210 L 990 210 Z" strokeDasharray="3 3" />
          <path d="M150 650 L 150 750 M140 650 L 140 680 M160 650 L 160 680" />
          <ellipse cx="1020" cy="650" rx="70" ry="25" />
          <path d="M950 650 C 950 720, 1090 720, 1090 650" />
          <circle cx="600" cy="120" r="40" strokeDasharray="4 4" />
          <circle cx="650" cy="720" r="50" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.25em] uppercase text-[#F5B800]">
              TRADITIONAL PAKISTANI SPREAD
            </span>
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#F5B800]"></span>
          </div>

          <h2 className="font-playfair text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-[#FFFFFF] tracking-tight leading-none uppercase">
            SHAHI <span className="text-[#F5B800]">DASTARKHWAN</span>
          </h2>
          <p className="font-poppins text-neutral-300 text-[14px] sm:text-[15px] mt-3">
            Authentic charcoal-cooked delicacies prepared fresh daily with secret heirloom recipes.
          </p>
        </div>

        {/* ================= BRANCH SELECTOR TABS ================= */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="bg-[#161616] p-2 rounded-2xl border border-neutral-800 shadow-2xl flex flex-col sm:flex-row items-center gap-2">
            
            {/* Tab 1: Gulshan Market */}
            <button
              type="button"
              onClick={() => onSelectBranch && onSelectBranch('gulshan')}
              className={`w-full sm:flex-1 py-3 px-4 rounded-xl font-poppins text-[13px] sm:text-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                selectedBranch === 'gulshan'
                  ? 'bg-[#F5B800] text-black font-bold shadow-lg shadow-[#F5B800]/20'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800/70'
              }`}
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>1st Branch: Gulshan Market</span>
            </button>

            {/* Tab 2: Main Nagana Chowk */}
            <button
              type="button"
              onClick={() => onSelectBranch && onSelectBranch('nagana')}
              className={`w-full sm:flex-1 py-3 px-4 rounded-xl font-poppins text-[13px] sm:text-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative ${
                selectedBranch === 'nagana'
                  ? 'bg-[#F5B800] text-black font-bold shadow-lg shadow-[#F5B800]/20'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800/70'
              }`}
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>2nd Branch: Nagana Chowk</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                selectedBranch === 'nagana' 
                  ? 'bg-black text-[#F5B800]' 
                  : 'bg-[#F5B800] text-black'
              }`}>
                Active Menu
              </span>
            </button>

          </div>

          {/* Active Branch Status Note */}
          <div className="mt-3 flex items-center justify-between px-2 text-xs text-neutral-400 font-poppins">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-pulse" />
              <span>
                Active Branch: <strong className="text-white">
                  {selectedBranch === 'nagana' ? '2nd Branch: Main Nagana Chowk, Multan' : '1st Branch: Gulshan Market, New Multan'}
                </strong>
              </span>
            </div>
            {onOpenBranchModal && (
              <button
                type="button"
                onClick={onOpenBranchModal}
                className="text-[#F5B800] hover:underline cursor-pointer font-medium"
              >
                Change in popup
              </button>
            )}
          </div>
        </div>

        {/* ================= CONDITIONAL MENU CONTENT ================= */}

        {/* CASE 1: 2nd Branch (Main Nagana Chowk) -> FULL ACTIVE MENU */}
        {selectedBranch === 'nagana' ? (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* ---------- LEFT COLUMN (Karahi & Handi, Pulao, Salads) ---------- */}
              <div className="space-y-12">
                {naganaLeftCategories.map((cat) => (
                  <div key={cat.categoryTitle} className="space-y-6">
                    
                    {/* Category Heading with Orange Underline */}
                    <div>
                      <h3 className="font-poppins font-bold text-[18px] sm:text-[20px] tracking-wider text-white uppercase flex items-center justify-between">
                        <span>{cat.categoryTitle}</span>
                        <span className="text-[12px] font-medium text-[#F5B800] tracking-normal">Nagana Chowk</span>
                      </h3>
                      <div className="w-12 h-[2.5px] bg-[#F5B800] mt-2 rounded-full" />
                    </div>

                    {/* Items in this category */}
                    <div className="space-y-6">
                      {cat.items.map((item) => (
                        <div 
                          key={item.name}
                          className="group flex items-start gap-3.5 sm:gap-4 p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.02]"
                        >
                          {/* Circular Dish Image */}
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-neutral-700/80 shadow-md group-hover:border-[#F5B800] group-hover:scale-105 transition-all duration-300 bg-neutral-900">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline justify-between gap-2">
                              {/* Dish Name & Badge */}
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-poppins font-bold text-[13px] sm:text-[14px] md:text-[15px] text-white tracking-wide group-hover:text-[#F5B800] transition-colors">
                                  {item.name}
                                </span>
                                {item.badge && (
                                  <span className="bg-[#F5B800] text-[#111111] text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                                    {item.badge}
                                  </span>
                                )}
                              </div>

                              {/* Dotted Leader Line */}
                              <div className="hidden sm:flex flex-1 border-b border-dotted border-neutral-700 mx-2 mb-1" />

                              {/* Price in PKR */}
                              <span className="font-poppins font-bold text-[#F5B800] text-[14px] sm:text-[16px] shrink-0 whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>

                            {/* Dish Description */}
                            <p className="font-poppins text-[12px] sm:text-[13px] text-neutral-400 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

              {/* ---------- RIGHT COLUMN (Charcoal BBQ, Balochi Sajji, Tandoor) ---------- */}
              <div className="space-y-12">
                {naganaRightCategories.map((cat) => (
                  <div key={cat.categoryTitle} className="space-y-6">
                    
                    {/* Category Heading with Orange Underline */}
                    <div>
                      <h3 className="font-poppins font-bold text-[18px] sm:text-[20px] tracking-wider text-white uppercase flex items-center justify-between">
                        <span>{cat.categoryTitle}</span>
                        <span className="text-[12px] font-medium text-[#F5B800] tracking-normal">Nagana Chowk</span>
                      </h3>
                      <div className="w-12 h-[2.5px] bg-[#F5B800] mt-2 rounded-full" />
                    </div>

                    {/* Items in this category */}
                    <div className="space-y-6">
                      {cat.items.map((item) => (
                        <div 
                          key={item.name}
                          className="group flex items-start gap-3.5 sm:gap-4 p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.02]"
                        >
                          {/* Circular Dish Image */}
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-neutral-700/80 shadow-md group-hover:border-[#F5B800] group-hover:scale-105 transition-all duration-300 bg-neutral-900">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline justify-between gap-2">
                              {/* Dish Name & Badge */}
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-poppins font-bold text-[13px] sm:text-[14px] md:text-[15px] text-white tracking-wide group-hover:text-[#F5B800] transition-colors">
                                  {item.name}
                                </span>
                                {item.badge && (
                                  <span className="bg-[#F5B800] text-[#111111] text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                                    {item.badge}
                                  </span>
                                )}
                              </div>

                              {/* Dotted Leader Line */}
                              <div className="hidden sm:flex flex-1 border-b border-dotted border-neutral-700 mx-2 mb-1" />

                              {/* Price in PKR */}
                              <span className="font-poppins font-bold text-[#F5B800] text-[14px] sm:text-[16px] shrink-0 whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>

                            {/* Dish Description */}
                            <p className="font-poppins text-[12px] sm:text-[13px] text-neutral-400 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Callout for Nagana Chowk */}
            <div className="mt-16 sm:mt-20 text-center">
              <a
                href="tel:+923030173057"
                className="btn-custom text-[14px] sm:text-[15px] font-bold text-[#111111] bg-[#F5B800] hover:bg-[#dfa600] px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-xl hover:shadow-[#F5B800]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase tracking-wider inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>ORDER FROM NAGANA CHOWK (+92 303 017 30 57)</span>
              </a>
            </div>
          </div>
        ) : (
          /* CASE 2: 1st Branch (Gulshan Market, New Multan) -> CLEAR UPDATE NOTICE & ACTION */
          <div className="max-w-4xl mx-auto">
            {/* Branded Notice Box */}
            <div className="bg-[#161616] border border-[#F5B800]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-center mb-12">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#F5B800]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="w-16 h-16 rounded-2xl bg-[#F5B800]/15 border border-[#F5B800]/30 text-[#F5B800] flex items-center justify-center mx-auto mb-5">
                <AlertCircle className="w-8 h-8" />
              </div>

              <span className="inline-block font-poppins text-xs font-bold uppercase tracking-widest text-[#F5B800] bg-[#F5B800]/10 px-3.5 py-1 rounded-full mb-3 border border-[#F5B800]/20">
                1st Branch: Gulshan Market, New Multan
              </span>

              <h3 className="font-playfair text-[26px] sm:text-[34px] font-bold text-white mb-3">
                Gulshan Market Branch Menu Is Being Updated
              </h3>

              <p className="font-poppins text-neutral-300 text-[14px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed mb-6">
                Gulshan Market branch ka digital menu filhal update ho raha hai. Filhal hamara live &amp; active online menu <strong>2nd Branch: Main Nagana Chowk, Multan</strong> ka available hai.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectBranch && onSelectBranch('nagana')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F5B800] hover:bg-[#dfa600] text-black font-poppins font-bold text-[14px] sm:text-[15px] transition-all duration-200 shadow-lg shadow-[#F5B800]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Switch to Nagana Chowk Menu</span>
                </button>

                <a
                  href="tel:+923030173057"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-poppins font-semibold text-[14px] sm:text-[15px] transition-all duration-200 border border-neutral-700 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F5B800]" />
                  <span>Call Gulshan Branch</span>
                </a>
              </div>
            </div>

            {/* Popular Items at Gulshan Market Preview */}
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-playfair text-[22px] sm:text-[26px] font-bold text-white">
                  Signature Dishes Available at Gulshan Market Branch
                </h4>
                <p className="font-poppins text-xs sm:text-sm text-neutral-400 mt-1">
                  Available for Dine-In &amp; Phone Orders:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gulshanPreviewItems.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#141414] border border-neutral-800 rounded-2xl p-4 flex items-center gap-4 hover:border-[#F5B800]/40 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-neutral-700">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-[#F5B800] tracking-wider uppercase block">
                        {item.category}
                      </span>
                      <h5 className="font-poppins font-bold text-[14px] text-white truncate">
                        {item.name}
                      </h5>
                      <p className="font-poppins text-[12px] text-neutral-400 line-clamp-1 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
