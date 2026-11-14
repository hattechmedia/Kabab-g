import React from 'react';

export default function FoodDoodleSides() {
  return (
    <>
      {/* ================= LEFT SIDE FOOD ELEMENTS ================= */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-44 lg:w-56 xl:w-64 pointer-events-none select-none z-0 overflow-hidden flex flex-col justify-around py-8 text-white"
        aria-hidden="true"
      >
        {/* Item 1 (Top): Lemon Wedge & Herb (Exact match to reference image) */}
        <div className="transform -translate-x-3 sm:-translate-x-1 rotate-[-12deg] w-32 sm:w-44 lg:w-52 opacity-35">
          <svg viewBox="0 0 200 200" fill="none" stroke="#FFFFFF" strokeWidth="1.6" className="w-full h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            {/* Outer Rind Arc */}
            <path d="M 25 160 A 130 130 0 0 1 165 20" strokeWidth="2.4" />
            <path d="M 35 152 A 120 120 0 0 1 157 30" strokeWidth="1.2" strokeDasharray="3 2" />
            <path d="M 42 145 A 110 110 0 0 1 150 37" strokeWidth="1.5" />
            <path d="M 25 160 Q 35 165 42 145" />
            <path d="M 165 20 Q 170 30 150 37" />
            <circle cx="42" cy="145" r="4" fill="#FFFFFF" fillOpacity="0.2" />
            {/* Pulp Wedges */}
            <path d="M 48 138 L 52 90 A 100 100 0 0 1 82 72 L 56 132 Z" strokeWidth="1.3" />
            <path d="M 58 105 L 70 85 M 65 115 L 74 95" strokeWidth="0.8" opacity="0.6" />
            <path d="M 62 130 L 90 68 A 100 100 0 0 1 122 55 L 68 124 Z" strokeWidth="1.3" />
            <path d="M 85 85 L 105 70 M 90 98 L 110 82" strokeWidth="0.8" opacity="0.6" />
            <path d="M 72 120 L 130 52 A 100 100 0 0 1 146 42 L 76 116 Z" strokeWidth="1.3" />
            {/* Seeds & Pepper Flakes */}
            <ellipse cx="65" cy="115" rx="3" ry="6" transform="rotate(-35 65 115)" strokeWidth="1" fill="#FFFFFF" fillOpacity="0.1" />
            <ellipse cx="95" cy="90" rx="3" ry="5.5" transform="rotate(-40 95 90)" strokeWidth="1" fill="#FFFFFF" fillOpacity="0.1" />
            <circle cx="170" cy="80" r="2" fill="#FFFFFF" />
            <circle cx="180" cy="95" r="1.5" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Item 2: Wavy Grilled Bacon / Meat Strips (Exact match to reference image) */}
        <div className="transform -translate-x-2 sm:translate-x-1 rotate-[14deg] w-36 sm:w-48 lg:w-56 opacity-35">
          <svg viewBox="0 0 220 180" fill="none" stroke="#FFFFFF" strokeWidth="1.6" className="w-full h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <path d="M 20 45 C 50 15, 75 75, 110 40 C 145 10, 170 70, 205 35" strokeWidth="2.2" />
            <path d="M 15 65 C 45 35, 70 95, 105 60 C 140 30, 165 90, 200 55" strokeWidth="2.2" />
            <path d="M 20 45 L 15 65" strokeWidth="2" />
            <path d="M 205 35 L 200 55" strokeWidth="2" />
            <path d="M 22 52 C 52 22, 72 82, 107 47 C 142 17, 167 77, 202 42" strokeWidth="1" strokeDasharray="5 3" />
            <path d="M 18 58 C 48 28, 71 88, 106 53 C 141 23, 166 83, 201 48" strokeWidth="1" />
            {/* Grill Marks */}
            <line x1="50" y1="30" x2="60" y2="55" strokeWidth="1.8" />
            <line x1="85" y1="55" x2="95" y2="80" strokeWidth="1.8" />
            <line x1="130" y1="28" x2="140" y2="52" strokeWidth="1.8" />
            <line x1="165" y1="52" x2="175" y2="76" strokeWidth="1.8" />
            {/* Strip 2 */}
            <path d="M 30 100 C 60 70, 85 130, 120 95 C 155 65, 180 125, 215 90" strokeWidth="2" />
            <path d="M 25 120 C 55 90, 80 150, 115 115 C 150 85, 175 145, 210 110" strokeWidth="2" />
            <path d="M 30 100 L 25 120" strokeWidth="1.8" />
            <path d="M 215 90 L 210 110" strokeWidth="1.8" />
            <line x1="60" y1="85" x2="70" y2="110" strokeWidth="1.8" />
            <line x1="100" y1="110" x2="110" y2="135" strokeWidth="1.8" />
            <line x1="145" y1="82" x2="155" y2="108" strokeWidth="1.8" />
          </svg>
        </div>

        {/* Item 3: Basil / Mint Leaf (Exact match to reference image) */}
        <div className="transform -translate-x-3 rotate-[-10deg] w-28 sm:w-36 lg:w-44 opacity-35">
          <svg viewBox="0 0 160 160" fill="none" stroke="#FFFFFF" strokeWidth="1.5" className="w-full h-auto">
            <path d="M 25 135 C 30 90, 60 50, 125 35 C 110 95, 75 130, 25 135 Z" strokeWidth="2" />
            <path d="M 25 135 Q 70 85 125 35" strokeWidth="1.8" />
            <path d="M 50 115 Q 65 105 85 112" strokeWidth="1.1" />
            <path d="M 65 100 Q 80 88 105 92" strokeWidth="1.1" />
            <path d="M 85 80 Q 98 70 118 72" strokeWidth="1.1" />
            <path d="M 45 120 Q 40 100 48 85" strokeWidth="1.1" />
            <path d="M 62 103 Q 58 82 70 70" strokeWidth="1.1" />
            {/* Small leaf */}
            <path d="M 105 130 C 110 105, 125 90, 150 85 C 145 110, 130 125, 105 130 Z" strokeWidth="1.6" />
            <path d="M 105 130 Q 128 108 150 85" strokeWidth="1.2" />
            {/* Pepper dots */}
            <circle cx="15" cy="65" r="1.5" fill="#FFFFFF" />
            <circle cx="28" cy="45" r="2" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Item 4: Charcoal Seekh Kebab Skewer */}
        <div className="transform -translate-x-2 sm:translate-x-1 rotate-[32deg] w-36 sm:w-48 lg:w-56 opacity-35">
          <svg viewBox="0 0 200 120" fill="none" stroke="#FFFFFF" strokeWidth="1.6" className="w-full h-auto">
            <line x1="10" y1="60" x2="190" y2="60" strokeWidth="2.4" />
            <polygon points="190,57 200,60 190,63" fill="#FFFFFF" />
            <rect x="35" y="44" width="30" height="32" rx="7" strokeWidth="1.8" />
            <line x1="42" y1="46" x2="48" y2="74" strokeWidth="1.4" />
            <line x1="52" y1="46" x2="58" y2="74" strokeWidth="1.4" />
            <rect x="73" y="43" width="32" height="34" rx="7" strokeWidth="1.8" />
            <line x1="81" y1="45" x2="87" y2="75" strokeWidth="1.4" />
            <line x1="91" y1="45" x2="97" y2="75" strokeWidth="1.4" />
            <rect x="113" y="44" width="30" height="32" rx="7" strokeWidth="1.8" />
            <line x1="120" y1="46" x2="126" y2="74" strokeWidth="1.4" />
            <line x1="130" y1="46" x2="136" y2="74" strokeWidth="1.4" />
          </svg>
        </div>

        {/* Item 5: Red Chili Pepper with Stem */}
        <div className="transform -translate-x-3 rotate-[-20deg] w-32 sm:w-40 lg:w-48 opacity-35">
          <svg viewBox="0 0 160 160" fill="none" stroke="#FFFFFF" strokeWidth="1.6" className="w-full h-auto">
            <path d="M 35 35 C 65 30, 95 65, 115 110 C 120 120, 115 130, 105 130 C 85 125, 70 85, 45 55 Z" strokeWidth="2.2" />
            <path d="M 35 35 Q 38 25 45 22 Q 40 12 32 10 Q 30 18 35 35" strokeWidth="1.8" />
            <path d="M 33 37 Q 42 42 45 55" strokeWidth="1.6" />
            <path d="M 52 48 Q 78 72 95 112" strokeWidth="1.2" strokeDasharray="5 3" />
            <circle cx="125" cy="45" r="3" strokeWidth="1.5" />
            <circle cx="138" cy="55" r="2" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Item 6: Garlic Bulb & Cloves */}
        <div className="transform -translate-x-2 rotate-[12deg] w-28 sm:w-36 lg:w-44 opacity-35">
          <svg viewBox="0 0 140 140" fill="none" stroke="#FFFFFF" strokeWidth="1.5" className="w-full h-auto">
            <path d="M 70 25 C 60 45, 25 60, 25 90 C 25 115, 55 125, 70 125 C 85 125, 115 115, 115 90 C 115 60, 80 45, 70 25 Z" strokeWidth="2.2" />
            <path d="M 70 25 Q 52 65 50 122" strokeWidth="1.5" />
            <path d="M 70 25 Q 88 65 90 122" strokeWidth="1.5" />
            <path d="M 68 25 L 66 12 M 72 25 L 75 14" strokeWidth="1.8" />
            <path d="M 60 125 L 56 135 M 65 125 L 65 138 M 75 125 L 77 137" strokeWidth="1.4" />
          </svg>
        </div>
      </div>

      {/* ================= RIGHT SIDE FOOD ELEMENTS ================= */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-44 lg:w-56 xl:w-64 pointer-events-none select-none z-0 overflow-hidden flex flex-col justify-around py-8 text-white"
        aria-hidden="true"
      >
        {/* Item 1 (Top): Sizzling Meat Strips (Exact match to reference image) */}
        <div className="transform translate-x-3 sm:translate-x-1 rotate-[-12deg] w-36 sm:w-48 lg:w-56 opacity-35">
          <svg viewBox="0 0 220 180" fill="none" stroke="#FFFFFF" strokeWidth="1.6" className="w-full h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <path d="M 15 40 C 45 75, 70 15, 105 50 C 140 85, 165 25, 195 60" strokeWidth="2.2" />
            <path d="M 20 60 C 50 95, 75 35, 110 70 C 145 105, 170 45, 200 80" strokeWidth="2.2" />
            <path d="M 15 40 L 20 60" strokeWidth="2" />
            <path d="M 195 60 L 200 80" strokeWidth="2" />
            <path d="M 17 48 C 47 83, 72 23, 107 58 C 142 93, 167 33, 197 68" strokeWidth="1" strokeDasharray="5 3" />
            <path d="M 19 54 C 49 89, 74 29, 109 64 C 144 99, 169 39, 199 74" strokeWidth="1" />
            <line x1="50" y1="58" x2="60" y2="82" strokeWidth="1.8" />
            <line x1="90" y1="35" x2="100" y2="60" strokeWidth="1.8" />
            <line x1="140" y1="70" x2="150" y2="94" strokeWidth="1.8" />
            {/* Strip 2 */}
            <path d="M 30 110 C 60 140, 85 90, 120 120 C 155 150, 180 100, 210 130" strokeWidth="2" />
            <path d="M 35 128 C 65 158, 90 108, 125 138 C 160 168, 185 118, 215 148" strokeWidth="2" />
            <path d="M 30 110 L 35 128" strokeWidth="1.8" />
            <path d="M 210 130 L 215 148" strokeWidth="1.8" />
          </svg>
        </div>

        {/* Item 2: Round Cut Lemon Wheel Slice */}
        <div className="transform translate-x-3 sm:translate-x-1 rotate-[22deg] w-32 sm:w-44 lg:w-52 opacity-35">
          <svg viewBox="0 0 180 180" fill="none" stroke="#FFFFFF" strokeWidth="1.6" className="w-full h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <circle cx="90" cy="90" r="78" strokeWidth="2.4" />
            <circle cx="90" cy="90" r="72" strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="90" cy="90" r="66" strokeWidth="1.6" />
            <circle cx="90" cy="90" r="9" strokeWidth="1.8" fill="#FFFFFF" fillOpacity="0.15" />
            {/* 8 Radial Segments */}
            <path d="M 85 78 L 82 32 Q 90 30 98 32 L 95 78 Z" strokeWidth="1.3" />
            <path d="M 98 82 L 132 48 Q 138 55 140 64 L 102 88 Z" strokeWidth="1.3" />
            <path d="M 102 86 L 148 83 Q 150 91 148 99 L 102 94 Z" strokeWidth="1.3" />
            <path d="M 98 98 L 132 132 Q 125 138 116 140 L 92 102 Z" strokeWidth="1.3" />
            <path d="M 85 102 L 82 148 Q 90 150 98 148 L 95 102 Z" strokeWidth="1.3" />
            <path d="M 82 98 L 48 132 Q 42 125 40 116 L 78 92 Z" strokeWidth="1.3" />
            <path d="M 78 94 L 32 97 Q 30 89 32 81 L 78 86 Z" strokeWidth="1.3" />
            <path d="M 82 82 L 48 48 Q 55 42 64 40 L 88 78 Z" strokeWidth="1.3" />
          </svg>
        </div>

        {/* Item 3: Basil Leaf Sprig with Pepper Flakes */}
        <div className="transform translate-x-2 rotate-[-15deg] w-28 sm:w-36 lg:w-44 opacity-35">
          <svg viewBox="0 0 160 160" fill="none" stroke="#FFFFFF" strokeWidth="1.5" className="w-full h-auto">
            <path d="M 80 145 Q 85 85 75 15" strokeWidth="2.2" />
            <path d="M 75 15 C 65 30, 65 50, 78 60 C 90 50, 90 30, 75 15 Z" strokeWidth="1.8" />
            <path d="M 80 75 C 50 65, 30 75, 20 95 C 40 110, 65 100, 80 75 Z" strokeWidth="1.8" />
            <path d="M 80 75 Q 45 88 20 95" strokeWidth="1.2" />
            <path d="M 80 75 C 110 65, 130 75, 140 95 C 120 110, 95 100, 80 75 Z" strokeWidth="1.8" />
            <path d="M 80 75 Q 115 88 140 95" strokeWidth="1.2" />
            <circle cx="15" cy="50" r="2" fill="#FFFFFF" />
            <circle cx="28" cy="38" r="1.5" fill="#FFFFFF" />
            <circle cx="145" cy="40" r="2" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Item 4: Traditional Desi Karahi Wok with Handles & Steam */}
        <div className="transform translate-x-2 sm:translate-x-0 rotate-[12deg] w-36 sm:w-48 lg:w-56 opacity-35">
          <svg viewBox="0 0 180 150" fill="none" stroke="#FFFFFF" strokeWidth="1.6" className="w-full h-auto">
            <path d="M 30 70 C 30 112, 60 128, 90 128 C 120 128, 150 112, 150 70 Z" strokeWidth="2.2" />
            <line x1="20" y1="70" x2="160" y2="70" strokeWidth="3" />
            <path d="M 24 70 C 14 70, 10 58, 18 52 C 26 46, 30 60, 26 70" strokeWidth="2.2" />
            <path d="M 156 70 C 166 70, 170 58, 162 52 C 154 46, 150 60, 154 70" strokeWidth="2.2" />
            {/* Live Dum Steam */}
            <path d="M 65 55 Q 60 38 72 25 T 65 8" strokeWidth="1.8" />
            <path d="M 90 52 Q 95 35 85 22 T 95 6" strokeWidth="2" />
            <path d="M 115 55 Q 120 38 108 25 T 115 8" strokeWidth="1.8" />
          </svg>
        </div>

        {/* Item 5: Rosemary Sprig */}
        <div className="transform translate-x-3 rotate-[-10deg] w-28 sm:w-36 lg:w-44 opacity-35">
          <svg viewBox="0 0 140 180" fill="none" stroke="#FFFFFF" strokeWidth="1.5" className="w-full h-auto">
            <path d="M 70 170 C 65 115, 80 65, 70 15" strokeWidth="2.4" />
            <path d="M 68 140 L 45 130 M 70 140 L 95 132" strokeWidth="1.6" />
            <path d="M 67 115 L 42 102 M 71 115 L 98 105" strokeWidth="1.6" />
            <path d="M 68 90 L 40 75 M 72 90 L 100 80" strokeWidth="1.6" />
            <path d="M 70 65 L 45 48 M 73 65 L 98 52" strokeWidth="1.6" />
            <path d="M 70 40 L 52 25 M 72 40 L 92 28" strokeWidth="1.6" />
          </svg>
        </div>

        {/* Item 6: Crispy Chicken Drumstick with Char Scoring */}
        <div className="transform translate-x-2 rotate-[18deg] w-32 sm:w-40 lg:w-48 opacity-35">
          <svg viewBox="0 0 160 140" fill="none" stroke="#FFFFFF" strokeWidth="1.6" className="w-full h-auto">
            <path d="M 65 40 C 45 25, 20 40, 20 70 C 20 100, 50 115, 85 95 C 105 82, 115 65, 110 50 C 105 35, 85 45, 65 40 Z" strokeWidth="2.2" />
            <path d="M 98 75 L 135 105" strokeWidth="3" />
            <circle cx="138" cy="102" r="5" strokeWidth="1.8" />
            <circle cx="145" cy="112" r="5" strokeWidth="1.8" />
            <line x1="45" y1="55" x2="55" y2="80" strokeWidth="1.5" />
            <line x1="65" y1="55" x2="75" y2="80" strokeWidth="1.5" />
            <circle cx="45" cy="90" r="1.5" fill="#FFFFFF" />
            <circle cx="65" cy="98" r="2" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
    </>
  );
}
