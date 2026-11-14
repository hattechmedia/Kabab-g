import React from 'react';
import { MapPin, Phone, ArrowRight, Sparkles, Clock } from 'lucide-react';
import FoodDoodleSides from './FoodDoodleSides';

export default function GulshanMenuSection({ onSwitchToNagana }) {
  const bbqItems = [
    { name: 'Chicken Tikka (Leg)', price: '420', urdu: 'چکن تکہ لیگ' },
    { name: 'Chicken Tikka (Chest)', price: '450', urdu: 'چکن تکہ چیسٹ' },
    { name: 'Chicken Malai Boti', price: '680', urdu: 'چکن ملائی بوٹی' },
    { name: 'Beef Seekh Kabab (4 Pcs)', price: '750', urdu: 'بیف سیخ کباب' },
    { name: 'Chicken Reshmi Kabab', price: '690', urdu: 'چکن ریشمی کباب' },
    { name: 'Balochi Sajji (Full)', price: '1,650', urdu: 'بلوچی سجی فل' },
  ];

  const karahiItems = [
    { name: 'Desi Ghee Chicken Karahi (Full)', price: '1,650', urdu: 'دیسی گھی چکن کڑاہی' },
    { name: 'Special Mutton Karahi (Full)', price: '2,650', urdu: 'اسپیشل مٹن کڑاہی' },
    { name: 'Makhni Chicken Handi', price: '1,450', urdu: 'مکھنی چکن ہانڈی' },
    { name: 'White Chicken Karahi', price: '1,550', urdu: 'وائٹ چکن کڑاہی' },
    { name: 'Shinwari Dumba Karahi (KG)', price: '2,800', urdu: 'شنواری دنبہ کڑاہی' },
    { name: 'Chicken Achari Karahi', price: '1,480', urdu: 'چکن اچاری کڑاہی' },
  ];

  const fastFoodItems = [
    { name: 'Crispy Zinger Burger', price: '420', urdu: 'کرسپی زنگر برگر' },
    { name: 'Royal Beef Burger', price: '550', urdu: 'رائل بیف برگر' },
    { name: 'Kabab G Club Sandwich', price: '480', urdu: 'کباب جی کلب سینڈوچ' },
    { name: 'Crispy Strips Wrap', price: '450', urdu: 'کرسپی اسٹرپس ریپ' },
    { name: 'Loaded Cheesy Fries', price: '380', urdu: 'لوڈڈ چیز فرائز' },
    { name: 'Hot Honey Wings (6 Pcs)', price: '420', urdu: 'ہاٹ ہنی ونگز' },
  ];

  const tandoorBeveragesItems = [
    { name: 'Roghni Naan', price: '80', urdu: 'روغنی نان' },
    { name: 'Garlic Butter Naan', price: '120', urdu: 'گارلک نان' },
    { name: 'Kalwanji Naan', price: '90', urdu: 'کلونجی نان' },
    { name: 'Mint Margarita', price: '350', urdu: 'منٹ مارگریٹا' },
    { name: 'Fresh Lime 7up', price: '160', urdu: 'فریش لائم' },
    { name: 'Kabab G Doodh Patti', price: '180', urdu: 'دودھ پتی' },
  ];

  return (
    <section className="relative bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 text-white overflow-hidden min-h-screen">
      {/* Background sketches on sides */}
      <FoodDoodleSides />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-14">
        
        {/* Branch 1 Banner & Notice */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.25em] uppercase text-[#F5B800]">
              BRANCH 1: GULSHAN MARKET, NEW MULTAN
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h2 className="font-playfair text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            Gulshan Market <span className="text-[#F5B800]">Menu</span>
          </h2>

          {/* Notice Card */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#1c1810] via-[#221c12] to-[#1c1810] border border-[#F5B800]/40 text-neutral-200 text-[13px] sm:text-[14px] font-poppins shadow-xl text-center">
            <div className="flex items-center justify-center gap-2 text-[#F5B800] font-bold mb-1.5 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 text-[#F5B800]" />
              <span>Branch 1 Digital Menu In Progress</span>
              <Sparkles className="w-4 h-4 text-[#F5B800]" />
            </div>
            <p className="text-neutral-300 max-w-xl mx-auto leading-relaxed">
              Gulshan Market branch ka mukammal printed menu digitize ho raha hai. Neeche popular items ka sample preview hai.
              Agar aap mukammal 17+ sections wala detailed menu dekhna chahte hain toh <strong className="text-[#F5B800]">Nagana Chowk branch</strong> par switch karein.
            </p>
            {onSwitchToNagana && (
              <div className="mt-4 flex items-center justify-center">
                <button
                  type="button"
                  onClick={onSwitchToNagana}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5B800] hover:bg-[#d9a300] text-black font-bold text-xs sm:text-sm font-poppins shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Switch to Nagana Chowk Full Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ================= PAIR 1: BBQ & KARAHI ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: BBQ & CHARCOAL GRILL */}
          <div className="relative bg-[#FDE68A] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#E6B93F] overflow-hidden flex flex-col justify-between">
            {/* Half-cut Circular Plate Image on Right Edge */}
            <div className="absolute -right-20 sm:-right-24 md:-right-28 top-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/BBQ.jpg"
                alt="BBQ Charcoal Grill"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#8B1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FDE68A]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    BBQ &amp; Charcoal Grill
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FDE68A]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-5 sm:col-span-6 text-left">Item</div>
                <div className="col-span-3 sm:col-span-2 text-center uppercase">Price</div>
                <div className="col-span-4 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {bbqItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-2 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-5 sm:col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-3 sm:col-span-2 text-center font-extrabold text-[15px] sm:text-[17px] text-[#8B1A1A]">
                      {item.price}
                    </div>
                    <div className="col-span-4 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: SPECIAL KARAHI & HANDI */}
          <div className="relative bg-[#FDE68A] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#E6B93F] overflow-hidden flex flex-col justify-between">
            {/* Half-cut Circular Plate Image on Right Edge */}
            <div className="absolute -right-20 sm:-right-24 md:-right-28 top-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/desi.jpg"
                alt="Special Karahi"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#8B1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FDE68A]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Special Karahi &amp; Handi
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FDE68A]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-5 sm:col-span-6 text-left">Item</div>
                <div className="col-span-3 sm:col-span-2 text-center uppercase">Price</div>
                <div className="col-span-4 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {karahiItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-2 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-5 sm:col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-3 sm:col-span-2 text-center font-extrabold text-[15px] sm:text-[17px] text-[#8B1A1A]">
                      {item.price}
                    </div>
                    <div className="col-span-4 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= PAIR 2: FAST FOOD & TANDOOR/BEVERAGES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 3: FAST FOOD & BURGERS */}
          <div className="relative bg-[#FDE68A] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#E6B93F] overflow-hidden flex flex-col justify-between">
            {/* Half-cut Circular Plate Image on Right Edge */}
            <div className="absolute -right-20 sm:-right-24 md:-right-28 top-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/burger.jpg"
                alt="Fast Food & Burgers"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#8B1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FDE68A]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Fast Food &amp; Burgers
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FDE68A]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-5 sm:col-span-6 text-left">Item</div>
                <div className="col-span-3 sm:col-span-2 text-center uppercase">Price</div>
                <div className="col-span-4 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {fastFoodItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-2 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-5 sm:col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-3 sm:col-span-2 text-center font-extrabold text-[15px] sm:text-[17px] text-[#8B1A1A]">
                      {item.price}
                    </div>
                    <div className="col-span-4 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: TANDOOR & BEVERAGES */}
          <div className="relative bg-[#FDE68A] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#E6B93F] overflow-hidden flex flex-col justify-between">
            {/* Half-cut Circular Plate Image on Right Edge */}
            <div className="absolute -right-20 sm:-right-24 md:-right-28 top-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/Mint.jpg"
                alt="Beverages"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#0B6623] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FDE68A]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Tandoor &amp; Beverages
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FDE68A]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-5 sm:col-span-6 text-left">Item</div>
                <div className="col-span-3 sm:col-span-2 text-center uppercase">Price</div>
                <div className="col-span-4 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {tandoorBeveragesItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-2 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-5 sm:col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-3 sm:col-span-2 text-center font-extrabold text-[15px] sm:text-[17px] text-[#8B1A1A]">
                      {item.price}
                    </div>
                    <div className="col-span-4 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BRANCH CONTACT & SWITCH CALLOUT ================= */}
        <div className="bg-[#161616] border border-[#F5B800]/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#F5B800] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#F5B800]" />
              <span>Branch 1: Gulshan Market, New Multan</span>
            </div>
            <h4 className="font-playfair text-xl sm:text-2xl font-bold text-white">
              Direct Order &amp; Delivery from Branch 1
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm font-poppins max-w-lg">
              For home delivery, dine-in inquiries, or special catering from our Gulshan Market branch, call us directly.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-sm font-semibold text-[#F5B800]">
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#F5B800]" />
                <span>061-6772299</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F5B800]" />
                <span className="text-neutral-300">Open Daily: 05:00 PM - 02:00 AM</span>
              </div>
            </div>
          </div>

          {onSwitchToNagana && (
            <button
              type="button"
              onClick={onSwitchToNagana}
              className="px-6 py-3.5 rounded-xl bg-[#F5B800] hover:bg-[#d9a300] text-black font-bold font-poppins text-sm shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>View Nagana Chowk Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}

