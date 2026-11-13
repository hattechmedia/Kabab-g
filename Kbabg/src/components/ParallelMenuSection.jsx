import React from 'react';

export default function ParallelMenuSection() {
  // 1. BBQ Smoky Piece Items
  const bbqSmokyItems = [
    {
      name: 'Angara Piece',
      leg: '450',
      chest: '500',
      urdu: 'انگارہ پیس',
    },
    {
      name: 'Malai Piece',
      leg: '550',
      chest: '600',
      urdu: 'ملائی پیس',
    },
    {
      name: 'Green Piece',
      leg: '550',
      chest: '600',
      urdu: 'گرین پیس',
    },
    {
      name: 'Achari Piece',
      leg: '550',
      chest: '600',
      urdu: 'اچاری پیس',
    },
    {
      name: 'Namkeen Piece',
      leg: '450',
      chest: '500',
      urdu: 'نمکین پیس',
    },
  ];

  // 2. Smpire Kabab Items
  const smpireKababItems = [
    {
      name: 'Pizza Kabab',
      half: '699',
      full: '1399',
      urdu: 'پیزا کباب',
    },
    {
      name: 'Gola Kabab',
      half: '660',
      full: '1320',
      urdu: 'گولا کباب',
    },
    {
      name: 'Reshmi Kabab',
      half: '450',
      full: '900',
      urdu: 'ریشمی کباب',
    },
    {
      name: 'Lebanese Kabab',
      half: '680',
      full: '1360',
      urdu: 'لبنیز کباب',
    },
    {
      name: 'Cheese Kabab',
      half: '600',
      full: '1200',
      urdu: 'چیز کباب',
    },
    {
      name: 'Chicken Kabab',
      half: '400',
      full: '800',
      urdu: 'چکن کباب',
    },
    {
      name: 'Green Kabab',
      half: '550',
      full: '1100',
      urdu: 'گرین کباب',
    },
    {
      name: 'Achari Kabab',
      half: '550',
      full: '1100',
      urdu: 'اچاری کباب',
    },
  ];

  // 3. Desi Karahi Items
  const desiKarahiItems = [
    {
      name: 'Kabab G Special Desi Afghani Karahi',
      half: '2300/-',
      full: '4400/-',
      urdu: 'کباب جی اسپیشل دیسی افغانی کڑاہی',
    },
    {
      name: 'Desi White Karahi',
      half: '2300/-',
      full: '4400/-',
      urdu: 'دیسی وائٹ کڑاہی',
    },
    {
      name: 'Desi Achari Karahi',
      half: '2150/-',
      full: '4200/-',
      urdu: 'دیسی اچاری کڑاہی',
    },
    {
      name: 'Deshi Murgh Lahori Karahi',
      half: '2150/-',
      full: '4200/-',
      urdu: 'دیسی مرغ لاہوری کڑاہی',
    },
    {
      name: 'Desi Kujja',
      half: '2400/-',
      full: '4600/-',
      urdu: 'دیسی کجہ',
    },
  ];

  // 4. Mutton Items
  const muttonItems = [
    {
      name: 'Mutton Afghani Karahi',
      half: '2400/-',
      full: '4600/-',
      urdu: 'مٹن افغانی کڑاہی',
    },
    {
      name: 'Mutton Lahori Karahi',
      half: '2300/-',
      full: '4400/-',
      urdu: 'مٹن لاہوری کڑاہی',
    },
    {
      name: 'Mutton Peshawri Karahi',
      half: '2200/-',
      full: '4250/-',
      urdu: 'مٹن پشاوری کڑاہی',
    },
    {
      name: 'Mutton White Karahi',
      half: '2400/-',
      full: '4600/-',
      urdu: 'مٹن وائٹ کڑاہی',
    },
    {
      name: 'Mutton Achari Karahi',
      half: '2300/-',
      full: '4400/-',
      urdu: 'مٹن اچاری کڑاہی',
    },
    {
      name: 'Mutton Kuja',
      half: '2500/-',
      full: '4800/-',
      urdu: 'مٹن کجہ',
    },
    {
      name: 'Mutton Handi',
      half: '2500/-',
      full: '4800/-',
      urdu: 'مٹن ہانڈی',
    },
  ];

  // 5. Beef Karahi Items
  const beefKarahiItems = [
    {
      name: 'Beef Afghani Karahi',
      half: '1350/-',
      full: '2600/-',
      urdu: 'بیف افغانی کڑاہی',
    },
    {
      name: 'Beef Achari Karahi',
      half: '1300/-',
      full: '2600/-',
      urdu: 'بیف اچاری کڑاہی',
    },
    {
      name: 'Beef Lahori Karahi',
      half: '1450/-',
      full: '2800/-',
      urdu: 'بیف لاہوری کڑاہی',
    },
    {
      name: 'Beef Kujja',
      half: '1550/-',
      full: '3000/-',
      urdu: 'بیف کجہ',
    },
  ];

  // 6. Chicken Karahi Items
  const chickenKarahiItems = [
    {
      name: 'Kabab G Special Chicken Afghani Karahi',
      half: '1250/-',
      full: '2400/-',
      urdu: 'کباب جی اسپیشل چکن افغانی کڑاہی',
    },
    {
      name: 'Chicken White Karahi',
      half: '1150/-',
      full: '2200/-',
      urdu: 'چکن وائٹ کڑاہی',
    },
    {
      name: 'Chicken Achari Karahi',
      half: '1050/-',
      full: '2000/-',
      urdu: 'چکن اچاری کڑاہی',
    },
    {
      name: 'Chicken Lahori Karahi',
      half: '1050/-',
      full: '2000/-',
      urdu: 'چکن لاہوری کڑاہی',
    },
    {
      name: 'Chicken Kujja',
      half: '1350/-',
      full: '2600/-',
      urdu: 'چکن کجہ',
    },
  ];

  // 7. Luxury BBQ Boti Items
  const luxuryBotiItems = [
    {
      name: 'Angara Boti',
      half: '420',
      full: '840',
      urdu: 'انگارہ بوٹی',
    },
    {
      name: 'Malai Boti',
      half: '740',
      full: '1480',
      urdu: 'ملائی بوٹی',
    },
    {
      name: 'Mozzarella Boti',
      half: '750',
      full: '1500',
      urdu: 'موزریلا بوٹی',
    },
    {
      name: 'Kastoori Boti',
      half: '780',
      full: '1660',
      urdu: 'کستوری بوٹی',
    },
    {
      name: 'Green Boti',
      half: '660',
      full: '1320',
      urdu: 'گرین بوٹی',
    },
    {
      name: 'Achari Boti',
      half: '680',
      full: '1360',
      urdu: 'اچاری بوٹی',
    },
    {
      name: 'Shish Tawook',
      half: '580',
      full: '1160',
      urdu: 'شیش تاوک',
    },
    {
      name: 'Creamy Candy',
      half: '900',
      full: '1800',
      urdu: 'کریم کینڈی',
    },
    {
      name: 'Special Qalmi Tikka',
      half: '1200',
      full: '2400',
      urdu: 'اسپیشل قلمی تکہ',
    },
    {
      name: 'Mughlai Boti',
      half: '680',
      full: '1360',
      urdu: 'مغلائی بوٹی',
    },
  ];

  // 8. Chowmein Items
  const chowmeinItems = [
    {
      name: 'Special Chowmein',
      half: '700',
      full: '1299',
      urdu: 'اسپشل چومین',
    },
    {
      name: 'Chicken Chowmein',
      half: '670',
      full: '1150',
      urdu: 'چکن چومین',
    },
    {
      name: 'Vegetable Chowmein',
      half: '550',
      full: '1000',
      urdu: 'ویجیٹیبل چومین',
    },
    {
      name: 'Thai Chowmein',
      half: '600',
      full: '1050',
      urdu: 'تھائی چومین',
    },
  ];

  // 9. Burgers Items
  const burgerItems = [
    {
      name: 'Chicken Cheese Burger',
      price: '580',
      urdu: 'چکن چیز برگر',
    },
  ];

  // 10. Strips & Rolls (Wrap) Items
  const wrapItems = [
    {
      name: 'Behari Roll (4 Piece)',
      price: '750',
      urdu: 'بہاری رول',
    },
    {
      name: 'Special Roll (4 Piece)',
      price: '799',
      urdu: 'اسپشل رول',
    },
    {
      name: 'Tortilla Wrap',
      price: '699',
      urdu: 'ٹورٹیلا ریپ',
    },
    {
      name: 'Crispy Wrap',
      price: '549',
      urdu: 'کرسپی ریپ',
    },
  ];

  // 11. Wings Items
  const wingsItems = [
    {
      name: 'Honey Wings',
      price: '750',
      urdu: 'ہنی ونگز',
    },
    {
      name: 'Red Hot Wings',
      price: '850',
      urdu: 'ریڈ ہاٹ ونگز',
    },
  ];

  // 12. Fish Items
  const fishItems = [
    {
      name: 'Finger Fish (6 Piece)',
      price: '1350',
      urdu: 'فنگر فش',
    },
    {
      name: 'Red Grill Fish',
      price: '1400',
      urdu: 'ریڈ گرل فش',
    },
    {
      name: 'White Grill Fish',
      price: '1600',
      urdu: 'وائٹ گرل فش',
    },
    {
      name: 'Green Grill Fish',
      price: '1600',
      urdu: 'گرین گرل فش',
    },
  ];

  // 13. Soups Items
  const soupItems = [
    {
      name: 'Kabab G Sp Soup',
      single: '300',
      half: '580',
      full: '1200',
      urdu: 'کباب جی اسپیشل سوپ',
    },
    {
      name: 'Hot & Sour Soup',
      single: '280',
      half: '560',
      full: '960',
      urdu: 'ہاٹ اینڈ سار سوپ',
    },
    {
      name: 'Chicken Corn Soup',
      single: '260',
      half: '500',
      full: '920',
      urdu: 'چکن کارن سوپ',
    },
    {
      name: 'Vegetable Soup',
      single: '200',
      half: '400',
      full: '860',
      urdu: 'ویجیٹیبل سوپ',
    },
    {
      name: '19B',
      single: '250',
      half: '500',
      full: '960',
      urdu: '19B',
    },
    {
      name: 'Fish Craker',
      single: '—',
      half: '280',
      full: '560',
      urdu: 'فش کریکر',
    },
  ];

  // 14. Chinese Cuisines Items
  const chineseCuisinesItems = [
    {
      name: 'Kung Pao',
      half: '650',
      full: '1050',
      urdu: 'کنگ پاؤ',
    },
    {
      name: 'Szechuan Chicken',
      half: '650',
      full: '1050',
      urdu: 'سزیون چکن',
    },
    {
      name: 'Roasted Almond',
      half: '850',
      full: '1150',
      urdu: 'روسٹڈ آلمنڈ',
    },
    {
      name: 'Chicken Chilly Dry',
      half: '650',
      full: '999',
      urdu: 'چکن چلی ڈرائی',
    },
    {
      name: 'Oyster Sauce',
      half: '650',
      full: '999',
      urdu: 'اوئسٹر ساس',
    },
    {
      name: 'Hot & Spicy',
      half: '799',
      full: '1199',
      urdu: 'ہاٹ اینڈ سپائسی',
    },
    {
      name: 'Thai Spicy',
      half: '800',
      full: '1450',
      urdu: 'تھائی سپائسی',
    },
    {
      name: 'Shashlik Gravy',
      half: '800',
      full: '1450',
      urdu: 'شاشلک گریوی',
    },
    {
      name: 'Manchurian',
      half: '650',
      full: '1200',
      urdu: 'منچورین',
    },
    {
      name: 'Shashlik With Rice',
      half: '—',
      full: '1100',
      urdu: 'شاشلک ود رائس',
    },
    {
      name: 'Manchurian With Rice',
      half: '—',
      full: '980',
      urdu: 'منچورین ود رائس',
    },
  ];

  // 15. Fried Rice Items
  const friedRiceItems = [
    {
      name: 'Special Fried Rice',
      half: '700',
      full: '1300',
      urdu: 'اسپشل فرائیڈ رائس',
    },
    {
      name: 'Chicken Fried Rice',
      half: '600',
      full: '1150',
      urdu: 'چکن فرائیڈ رائس',
    },
    {
      name: 'Egg Fried Rice',
      half: '550',
      full: '999',
      urdu: 'ایگ فرائیڈ رائس',
    },
    {
      name: 'Vegetable Rice',
      half: '530',
      full: '950',
      urdu: 'ویجیٹیبل رائس',
    },
    {
      name: 'Steam Plain Rice',
      half: '499',
      full: '800',
      urdu: 'سٹیم پلین رائس',
    },
    {
      name: 'Masala Rice',
      half: '600',
      full: '999',
      urdu: 'مصالحہ رائس',
    },
    {
      name: 'Matka Biryani',
      half: '—',
      full: '999',
      urdu: 'مٹکا بریانی',
    },
  ];

  // 16. Chicken Handi Items
  const chickenHandiItems = [
    {
      name: 'Chicken White Handi',
      price: '1300',
      urdu: 'چکن وائٹ ہانڈی',
    },
    {
      name: 'Chicken Handi',
      price: '900',
      urdu: 'چکن ہانڈی',
    },
    {
      name: 'Chicken Jinger',
      price: '1250',
      urdu: 'چکن جنجر',
    },
    {
      name: 'Chicken Jalfrezi',
      price: '1250',
      urdu: 'چکن جلفریزی',
    },
    {
      name: 'Chicken Mughlai Handi',
      price: '1500',
      urdu: 'چکن مغلائی ہانڈی',
    },
    {
      name: 'Chicken Makhni Handi',
      price: '1450',
      urdu: 'چکن مکھنی ہانڈی',
    },
    {
      name: 'Chicken Harri Mirch Handi',
      price: '1450',
      urdu: 'چکن ہری مرچ ہانڈی',
    },
  ];

  // 17. Bar Menu Items
  const barMenuSections = [
    {
      title: 'BAR MENU',
      titleColor: 'bg-[#1A1A1A] text-white',
      items: [
        { name: 'Mint Margarita', price: '350', urdu: 'منٹ مارگریٹا' },
        { name: 'Fresh Lime', price: '160', urdu: 'فریش لائم' },
      ],
    },
    {
      title: 'Hot Sip',
      titleColor: 'bg-[#8B1A1A] text-white',
      items: [
        { name: 'Doodh Patti', price: '180', urdu: 'دودھ پتی' },
      ],
    },
    {
      title: 'Raita & Salad',
      titleColor: 'bg-[#0B6623] text-white',
      items: [
        { name: 'Kachumber Salad', price: '180', urdu: 'کچومبر سلاد' },
        { name: 'Green Salad', price: '120', urdu: 'گرین سلاد' },
        { name: 'Russian Salad', price: '380', urdu: 'رشین سلاد' },
        { name: 'Fruit Salad', price: '440', urdu: 'فروٹ سلاد' },
        { name: 'Mint Raita', price: '80', urdu: 'منٹ رائتہ' },
      ],
    },
  ];

  return (
    <section className="relative bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-neutral-800">
      
      {/* Food Sketch Elements on Left & Right Sides */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 opacity-20 pointer-events-none select-none bg-repeat-y bg-left-top z-0"
        style={{
          backgroundImage: `url('/food-elements-bg.png')`,
          backgroundSize: '320px auto',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-28 sm:w-44 md:w-56 lg:w-72 opacity-20 pointer-events-none select-none bg-repeat-y bg-right-top scale-x-[-1] z-0"
        style={{
          backgroundImage: `url('/food-elements-bg.png')`,
          backgroundSize: '320px auto',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
            <span className="font-poppins text-small-custom font-semibold tracking-[0.25em] uppercase text-[#F5B800]">
              AUTHENTIC KABAB G MENU
            </span>
            <span className="w-8 h-[2px] bg-[#F5B800]"></span>
          </div>

          <h2 className="font-playfair text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            Traditional <span className="text-[#F5B800]">Dastarkhwan</span>
          </h2>
          <p className="font-poppins text-neutral-300 text-[14px] sm:text-[15px] mt-2">
            Explore our authentic charcoal grill pieces, royal seekh kebabs, desi karahis, soups &amp; fast food.
          </p>
        </div>

        {/* ================= PAIR 1: BBQ SMOKY PIECE (LEFT) & SMPIRE KABAB (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* 1. BBQ SMOKY PIECE */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Half-cut Circular Plate Image on Right Edge (BBQ.jpg) */}
            <div className="absolute -right-20 sm:-right-24 md:-right-28 top-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/BBQ.jpg"
                alt="BBQ Smoky Piece"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#8B1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    BBQ Smoky Piece
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Leg</div>
                <div className="col-span-2 text-center uppercase">Chest</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {bbqSmokyItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                      {item.leg}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.chest}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. SMPIRE KABAB */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Half-cut Circular Plate Image on Right Edge (seekh-kbab.jpg) */}
            <div className="absolute -right-20 sm:-right-24 md:-right-28 top-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/seekh-kbab.jpg"
                alt="Seekh Kabab"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#1A1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Smpire Kabab
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {smpireKababItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= PAIR 2: DESI KARAHI (LEFT) & MUTTON (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* 3. DESI KARAHI (Image: desi.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            
            {/* Top Half-Cut Image: desi.jpg */}
            <div className="absolute top-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/desi.jpg"
                alt="Desi White Karahi"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Half-Cut Image: desi.jpg */}
            <div className="absolute bottom-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/desi.jpg"
                alt="Desi Karahi"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#1A1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    DESI KARAHI
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {desiKarahiItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. MUTTON (Image: mutton.jpeg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            
            {/* Top Half-Cut Image: mutton.jpeg */}
            <div className="absolute top-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/mutton.jpeg"
                alt="Mutton Karahi"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Half-Cut Image: mutton.jpeg */}
            <div className="absolute bottom-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/mutton.jpeg"
                alt="Mutton Handi"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex flex-col items-center justify-center bg-[#8B1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[18px] sm:text-[22px] font-bold tracking-wide text-white uppercase text-center leading-tight">
                    MUTTON
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-serif italic text-neutral-200 tracking-wider">
                    Rich Taste, Royal Flavour
                  </span>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {muttonItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= PAIR 3: BEEF KARAHI (LEFT) & CHICKEN KARAHI (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* 5. BEEF KARAHI (Image: beef.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            
            {/* Top Half-Cut Image: beef.jpg */}
            <div className="absolute top-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/beef.jpg"
                alt="Beef Afghani Karahi"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Half-Cut Image: beef.jpg */}
            <div className="absolute bottom-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/beef.jpg"
                alt="Beef Lahori Karahi"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Green Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#0B6623] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    BEEF KARAHI
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {beefKarahiItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#0B6623]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. CHICKEN KARAHI (Image: chkn.jpeg with fallback to chkn.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            
            {/* Top Half-Cut Image: chkn.jpeg / chkn.jpg */}
            <div className="absolute top-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/chkn.jpeg"
                alt="Chicken Afghani Karahi"
                onError={(e) => {
                  if (e.currentTarget.src.includes('chkn.jpeg')) {
                    e.currentTarget.src = '/chkn.jpg';
                  } else {
                    e.currentTarget.src = '/chichken.webp';
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Half-Cut Image: chkn.jpeg / chkn.jpg */}
            <div className="absolute bottom-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/chkn.jpeg"
                alt="Chicken Lahori Karahi"
                onError={(e) => {
                  if (e.currentTarget.src.includes('chkn.jpeg')) {
                    e.currentTarget.src = '/chkn.jpg';
                  } else {
                    e.currentTarget.src = '/chichken.webp';
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Black Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#1A1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    CHICKEN KARAHI
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {chickenKarahiItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= PAIR 4: LUXURY BBQ BOTI (LEFT) & CHOWMEIN (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* 7. LUXURY BBQ BOTI (Images: luxury.jpg, luxury-1.jpeg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            
            {/* Top Half-Cut Image: luxury.jpg */}
            <div className="absolute top-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/luxury.jpg"
                alt="Luxury Malai Boti"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Half-Cut Image: luxury-1.jpeg */}
            <div className="absolute bottom-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/luxury-1.jpeg"
                alt="Luxury Angara Boti"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#8B1A1A] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Luxury BBQ Boti
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-2.5 font-poppins">
                {luxuryBotiItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 8. CHOWMEIN (Image: /chowmin.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Circular Plate on Right Edge (/chowmin.jpg) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 sm:-right-20 md:-right-24 w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/chowmin.jpg"
                alt="Chowmein"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Black Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#1A1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    CHOWMEIN
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {chowmeinItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= PAIR 5: BURGERS (LEFT) & STRIPS & ROLLS / WRAP (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* 9. BURGERS (Image: /burger.jpeg / /burger.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Circular Plate on Right Edge (/burger.jpeg or fallback to /burger.jpg) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 sm:-right-20 md:-right-24 w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/burger.jpeg"
                alt="Burgers"
                onError={(e) => { e.currentTarget.src = '/burger.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Red Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#8B1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Burgers
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
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
                {burgerItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-2.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
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

              {/* Extra note badge for burger section */}
              <div className="mt-4 pt-3 border-t border-neutral-300/50 flex items-center gap-2 text-neutral-600 text-[11px] sm:text-[12px] font-poppins">
                <span className="w-2 h-2 rounded-full bg-[#8B1A1A]"></span>
                Freshly grilled patty, melted cheese &amp; signature sauces
              </div>
            </div>
          </div>

          {/* 10. STRIPS & ROLLS / WRAP (Image: /wrap.jpeg / /wrap.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Circular Plate on Right Edge (/wrap.jpeg or fallback to /wrap.jpg) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 sm:-right-20 md:-right-24 w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/wrap.jpeg"
                alt="Strips &amp; Rolls Wrap"
                onError={(e) => { e.currentTarget.src = '/wrap.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Green Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#0B6623] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Strips &amp; Rolls
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FAF2E8]" />
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
                {wrapItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-2 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-5 sm:col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-3 sm:col-span-2 text-center font-extrabold text-[15px] sm:text-[17px] text-[#0B6623]">
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

        {/* ================= PAIR 6: WINGS (LEFT) & FISH (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* 11. WINGS (Image: /wings.jpeg / /wings.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Circular Plate on Right Edge (/wings.jpeg or fallback to /wings.jpg) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 sm:-right-20 md:-right-24 w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/wings.jpeg"
                alt="Wings"
                onError={(e) => { e.currentTarget.src = '/wings.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Black Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#1A1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Wings
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
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
                {wingsItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-2.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
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

              {/* Extra note badge for wings section */}
              <div className="mt-4 pt-3 border-t border-neutral-300/50 flex items-center gap-2 text-neutral-600 text-[11px] sm:text-[12px] font-poppins">
                <span className="w-2 h-2 rounded-full bg-[#8B1A1A]"></span>
                Glazed &amp; crisped to perfection in authentic sauces
              </div>
            </div>
          </div>

          {/* 12. FISH (Image: /fish.jpeg / /fish.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Circular Plate on Right Edge (/fish.jpeg or fallback to /fish.jpg) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 sm:-right-20 md:-right-24 w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/fish.jpeg"
                alt="Fish"
                onError={(e) => { e.currentTarget.src = '/fish.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Red Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#8B1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Fish
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
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
                {fishItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-2.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
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

        {/* ================= PAIR 7: SOUPS (LEFT) & CHINESE CUISINES (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* 13. SOUPS (Image: /soup.jpeg / /soup.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Circular Bowl on Right Edge (/soup.jpeg or fallback to /soup.jpg) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 sm:-right-20 md:-right-24 w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/soup.jpeg"
                alt="Soups"
                onError={(e) => { e.currentTarget.src = '/soup.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Black Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#1A1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    SOUPS
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[11px] sm:text-[12px] font-bold tracking-wider">
                <div className="col-span-4 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Single</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-2 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {soupItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1 items-center py-2 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 font-bold text-[12px] sm:text-[14px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[12px] sm:text-[15px] text-[#8B1A1A]">
                      {item.single}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[12px] sm:text-[15px] text-[#0B6623]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[12px] sm:text-[15px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-2 text-right font-serif text-[12px] sm:text-[14px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 14. CHINESE CUISINES (Images: /chineese-1.jpg, /chineese-2.jpeg / /chineese-2.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Top Half-Cut Image: chineese-1.jpg */}
            <div className="absolute top-6 -right-16 sm:-right-20 md:-right-24 w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/chineese-1.jpg"
                alt="Chinese Cuisine"
                onError={(e) => { e.currentTarget.src = '/chineese-1.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Middle Half-Cut Image: chineese-2.jpeg / chineese-2.jpg */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 sm:-right-20 md:-right-24 w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/chineese-2.jpeg"
                alt="Chinese Manchurian"
                onError={(e) => { e.currentTarget.src = '/chineese-2.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Half-Cut Image: chineese-3.jpeg / chineese-3.jpg */}
            <div className="absolute bottom-6 -right-16 sm:-right-20 md:-right-24 w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/chineese-3.jpeg"
                alt="Chinese Gravy"
                onError={(e) => { e.currentTarget.src = '/chineese-3.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Red Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#8B1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    CHINESE CUISINES
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B1A1A] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-2.5 font-poppins">
                {chineseCuisinesItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-5 font-bold text-[13px] sm:text-[14px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[13px] sm:text-[15px] text-[#0B6623]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[13px] sm:text-[15px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-3 text-right font-serif text-[13px] sm:text-[15px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= PAIR 8: FRIED RICE (LEFT) & CHICKEN HANDI (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* 15. FRIED RICE (Image: /fried.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Top Half-Cut Image: fried.jpg */}
            <div className="absolute top-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/fried.jpg"
                alt="Fried Rice"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Half-Cut Image: fried.jpg */}
            <div className="absolute bottom-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/fried.jpg"
                alt="Matka Biryani Rice"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Green Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#0B6623] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    FRIED RICE
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Table Column Headings */}
              <div className="grid grid-cols-12 gap-1.5 pb-2 mb-2 border-b border-neutral-300 text-neutral-800 font-poppins text-[12px] sm:text-[13px] font-bold tracking-wider">
                <div className="col-span-4 sm:col-span-5 text-left">Item</div>
                <div className="col-span-2 text-center uppercase">Half</div>
                <div className="col-span-2 text-center uppercase">Full</div>
                <div className="col-span-4 sm:col-span-3 text-right">اردو نام</div>
              </div>

              {/* Items List */}
              <div className="space-y-3 font-poppins">
                {friedRiceItems.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                  >
                    <div className="col-span-4 sm:col-span-5 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                      {item.name}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#0B6623]">
                      {item.half}
                    </div>
                    <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#111111]">
                      {item.full}
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-right font-serif text-[14px] sm:text-[16px] font-bold text-neutral-800" dir="rtl">
                      {item.urdu}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 16. CHICKEN HANDI (Images: /chicken-handi.jpeg / /chicken-handi.jpg) */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between">
            {/* Top Half-Cut Image */}
            <div className="absolute top-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/chicken-handi.jpeg"
                alt="Chicken Handi"
                onError={(e) => { e.currentTarget.src = '/chicken-handi.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Half-Cut Image */}
            <div className="absolute bottom-4 -right-16 sm:-right-20 md:-right-24 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/chicken-handi.jpeg"
                alt="Chicken Makhni Handi"
                onError={(e) => { e.currentTarget.src = '/chicken-handi.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 pr-24 sm:pr-32 md:pr-36">
              {/* Black Ribbon Header */}
              <div className="flex items-center justify-start mb-6">
                <div className="relative inline-flex items-center justify-center bg-[#1A1A1A] text-white px-7 sm:px-9 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[17px] sm:text-[20px] font-bold tracking-wide text-white uppercase text-center">
                    Chicken Handi
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#FAF2E8]" />
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
                {chickenHandiItems.map((item) => (
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

        {/* ================= SECTION 9: BAR MENU (FULL WIDTH CARD) ================= */}
        <div className="w-full">

          {/* 17. BAR MENU */}
          <div className="relative bg-[#FAF2E8] text-[#111111] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border-2 border-[#EADAC8] overflow-hidden transition-transform duration-300 hover:shadow-[0_20px_50px_rgba(245,184,0,0.15)] flex flex-col justify-between lg:min-h-[480px]">
            
            {/* Left Edge Image (Desktop): Mint Margarita (Inside card, fully visible, NOT cut off) */}
            <div className="hidden lg:block absolute left-4 xl:left-7 top-1/2 -translate-y-1/2 w-44 xl:w-48 h-44 xl:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl pointer-events-none select-none z-0">
              <img
                src="/Mint.jpg"
                alt="Mint Margarita"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Edge Image 1 (Desktop): Hot Sip / Doodh Patti (Top-right, inside card, fully visible) */}
            <div className="hidden lg:block absolute right-4 xl:right-7 top-6 xl:top-8 w-36 xl:w-40 h-36 xl:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/tea.jpeg"
                alt="Doodh Patti Tea"
                onError={(e) => { e.currentTarget.src = '/tea.jpg'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Edge Image 2 (Desktop): Salad (Bottom-right, inside card, fully visible - NO overlap) */}
            <div className="hidden lg:block absolute right-4 xl:right-7 bottom-6 xl:bottom-8 w-36 xl:w-40 h-36 xl:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl pointer-events-none select-none z-0">
              <img
                src="/salad.webp"
                alt="Fresh Salad"
                onError={(e) => { e.currentTarget.src = '/salad.wbep'; }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content Container (Padded on desktop so text never touches left/right images) */}
            <div className="relative z-10 px-2 sm:px-4 lg:pl-56 xl:pl-64 lg:pr-48 xl:pr-54">
              {/* Main Ribbon Header: Bar Menu (Green - Centered) */}
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="relative inline-flex items-center justify-center bg-[#0B6623] text-white px-8 sm:px-11 py-2 sm:py-2.5 rounded-lg shadow-md">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FAF2E8]" />
                  <h3 className="font-playfair text-[18px] sm:text-[22px] font-bold tracking-wider text-white uppercase text-center">
                    BAR MENU
                  </h3>
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0B6623] border-2 border-[#FAF2E8]" />
                </div>
              </div>

              {/* Mobile / Tablet Image Showcase Row (< lg screens: displays all 3 items cleanly) */}
              <div className="flex lg:hidden items-center justify-center gap-4 sm:gap-6 mb-6">
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-3 border-white shadow-md shrink-0">
                  <img src="/Mint.jpg" alt="Mint Margarita" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-3 border-white shadow-md shrink-0">
                  <img src="/tea.jpeg" onError={(e) => { e.currentTarget.src = '/tea.jpg'; }} alt="Doodh Patti Tea" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-3 border-white shadow-md shrink-0">
                  <img src="/salad.webp" onError={(e) => { e.currentTarget.src = '/salad.wbep'; }} alt="Fresh Salad" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Sub-sections container - Full Width 2-Column Responsive Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                {/* Column 1: BAR MENU & Hot Sip */}
                <div className="space-y-6">
                  {/* 1. BAR MENU */}
                  <div>
                    <div className="inline-block mb-2.5">
                      <div className="bg-[#1A1A1A] text-white px-4 py-1 rounded shadow-sm">
                        <span className="font-playfair text-[13px] sm:text-[14px] font-bold tracking-wider uppercase">
                          BAR MENU
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 font-poppins">
                      <div className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded">
                        <div className="col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                          Mint Margarita
                        </div>
                        <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                          350
                        </div>
                        <div className="col-span-4 text-right font-serif text-[13px] sm:text-[15px] font-bold text-neutral-800" dir="rtl">
                          منٹ مارگریٹا
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded">
                        <div className="col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                          Fresh Lime
                        </div>
                        <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                          160
                        </div>
                        <div className="col-span-4 text-right font-serif text-[13px] sm:text-[15px] font-bold text-neutral-800" dir="rtl">
                          فریش لائم
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. Hot Sip */}
                  <div>
                    <div className="inline-block mb-2.5">
                      <div className="bg-[#8B1A1A] text-white px-4 py-1 rounded shadow-sm">
                        <span className="font-playfair text-[13px] sm:text-[14px] font-bold tracking-wider">
                          Hot Sip
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 font-poppins">
                      <div className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded">
                        <div className="col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                          Doodh Patti
                        </div>
                        <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                          180
                        </div>
                        <div className="col-span-4 text-right font-serif text-[13px] sm:text-[15px] font-bold text-neutral-800" dir="rtl">
                          دودھ پتی
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Raita & Salad */}
                <div>
                  <div className="inline-block mb-2.5">
                    <div className="bg-[#0B6623] text-white px-4 py-1 rounded shadow-sm">
                      <span className="font-playfair text-[13px] sm:text-[14px] font-bold tracking-wider">
                        Raita &amp; Salad
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 font-poppins">
                    {[
                      { name: 'Kachumber Salad', price: '180', urdu: 'کچومبر سلاد' },
                      { name: 'Green Salad', price: '120', urdu: 'گرین سلاد' },
                      { name: 'Russian Salad', price: '380', urdu: 'رشین سلاد' },
                      { name: 'Fruit Salad', price: '440', urdu: 'فروٹ سلاد' },
                      { name: 'Mint Raita', price: '80', urdu: 'منٹ رائتہ' },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-12 gap-1.5 items-center py-1.5 border-b border-neutral-300/60 hover:bg-black/[0.03] transition-colors rounded"
                      >
                        <div className="col-span-6 font-bold text-[13px] sm:text-[15px] text-neutral-900 leading-snug">
                          {item.name}
                        </div>
                        <div className="col-span-2 text-center font-extrabold text-[14px] sm:text-[16px] text-[#8B1A1A]">
                          {item.price}
                        </div>
                        <div className="col-span-4 text-right font-serif text-[13px] sm:text-[15px] font-bold text-neutral-800" dir="rtl">
                          {item.urdu}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
