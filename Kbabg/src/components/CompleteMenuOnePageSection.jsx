import React, { useState, useMemo } from 'react';
import { Search, X, Utensils, ArrowRight } from 'lucide-react';

export default function CompleteMenuOnePageSection({ setActivePage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Complete 19 Categories Data with exact dish names, urdu text, portions and prices matching the menu screenshots
  const categoriesData = useMemo(() => [
    {
      id: 'bbq-smoky',
      name: 'BBQ Smoky Piece',
      subtitle: 'LEG / CHEST',
      image: '/BBQ.jpg',
      fallback: '/bbq.webp',
      dishes: [
        { id: 'bbq-1', name: 'Angara Piece', urdu: 'انگارہ پیس', portions: [{ label: 'LEG', price: 'PKR 450' }, { label: 'CHEST', price: 'PKR 500' }] },
        { id: 'bbq-2', name: 'Malai Piece', urdu: 'ملائی پیس', portions: [{ label: 'LEG', price: 'PKR 550' }, { label: 'CHEST', price: 'PKR 600' }] },
        { id: 'bbq-3', name: 'Green Piece', urdu: 'گرین پیس', portions: [{ label: 'LEG', price: 'PKR 550' }, { label: 'CHEST', price: 'PKR 600' }] },
        { id: 'bbq-4', name: 'Achari Piece', urdu: 'اچاری پیس', portions: [{ label: 'LEG', price: 'PKR 550' }, { label: 'CHEST', price: 'PKR 600' }] },
        { id: 'bbq-5', name: 'Namkeen Piece', urdu: 'نمکین پیس', portions: [{ label: 'LEG', price: 'PKR 450' }, { label: 'CHEST', price: 'PKR 500' }] },
      ],
    },
    {
      id: 'smpire-kabab',
      name: 'Smpire Kabab',
      subtitle: 'HALF / FULL',
      image: '/seekh-kbab.jpg',
      fallback: '/hero.png',
      dishes: [
        { id: 'kb-1', name: 'Pizza Kabab', urdu: 'پیزا کباب', portions: [{ label: 'HALF', price: 'PKR 699' }, { label: 'FULL', price: 'PKR 1,399' }] },
        { id: 'kb-2', name: 'Gola Kabab', urdu: 'گولا کباب', portions: [{ label: 'HALF', price: 'PKR 660' }, { label: 'FULL', price: 'PKR 1,320' }] },
        { id: 'kb-3', name: 'Reshmi Kabab', urdu: 'ریشمی کباب', portions: [{ label: 'HALF', price: 'PKR 450' }, { label: 'FULL', price: 'PKR 900' }] },
        { id: 'kb-4', name: 'Lebanese Kabab', urdu: 'لبنانی کباب', portions: [{ label: 'HALF', price: 'PKR 680' }, { label: 'FULL', price: 'PKR 1,360' }] },
        { id: 'kb-5', name: 'Cheese Kabab', urdu: 'چیز کباب', portions: [{ label: 'HALF', price: 'PKR 600' }, { label: 'FULL', price: 'PKR 1,200' }] },
        { id: 'kb-6', name: 'Chicken Kabab', urdu: 'چکن کباب', portions: [{ label: 'HALF', price: 'PKR 400' }, { label: 'FULL', price: 'PKR 800' }] },
        { id: 'kb-7', name: 'Green Kabab', urdu: 'گرین کباب', portions: [{ label: 'HALF', price: 'PKR 550' }, { label: 'FULL', price: 'PKR 1,100' }] },
        { id: 'kb-8', name: 'Achari Kabab', urdu: 'اچاری کباب', portions: [{ label: 'HALF', price: 'PKR 550' }, { label: 'FULL', price: 'PKR 1,100' }] },
      ],
    },
    {
      id: 'luxury-bbq-boti',
      name: 'Luxury BBQ Boti',
      subtitle: 'PORTION',
      image: '/luxury.jpg',
      fallback: '/luxury-1.jpeg',
      dishes: [
        { id: 'bt-1', name: 'Cheese Boti', urdu: 'چیئز بوٹی', portions: [{ label: '', price: 'PKR 750' }] },
        { id: 'bt-2', name: 'Mexican Boti', urdu: 'میکسیکن بوٹی', portions: [{ label: '', price: 'PKR 750' }] },
        { id: 'bt-3', name: 'Malai Boti', urdu: 'ملائی بوٹی', portions: [{ label: '', price: 'PKR 699' }] },
        { id: 'bt-4', name: 'Chatkhara Boti', urdu: 'چٹخارہ بوٹی', portions: [{ label: '', price: 'PKR 650' }] },
        { id: 'bt-5', name: 'Haryali Boti', urdu: 'ہریالی بوٹی', portions: [{ label: '', price: 'PKR 650' }] },
        { id: 'bt-6', name: 'Achari Boti', urdu: 'اچاری بوٹی', portions: [{ label: '', price: 'PKR 650' }] },
        { id: 'bt-7', name: 'Green Boti', urdu: 'گرین بوٹی', portions: [{ label: '', price: 'PKR 650' }] },
        { id: 'bt-8', name: 'Chicken Boti', urdu: 'چکن بوٹی', portions: [{ label: '', price: 'PKR 600' }] },
        { id: 'bt-9', name: 'Chicken Namkeen Boti', urdu: 'چکن نمکین بوٹی', portions: [{ label: '', price: 'PKR 650' }] },
        { id: 'bt-10', name: 'Angara Boti', urdu: 'انگارہ بوٹی', portions: [{ label: '', price: 'PKR 650' }] },
      ],
    },
    {
      id: 'mutton',
      name: 'Mutton',
      subtitle: 'HALF / FULL',
      image: '/mutton.jpeg',
      fallback: '/muton.jpg',
      dishes: [
        { id: 'mt-1', name: 'Mutton Afghani Karahi', urdu: 'مٹن افغانی کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,400' }, { label: 'FULL', price: 'PKR 4,600' }] },
        { id: 'mt-2', name: 'Mutton Lahori Karahi', urdu: 'مٹن لاہوری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,300' }, { label: 'FULL', price: 'PKR 4,400' }] },
        { id: 'mt-3', name: 'Mutton Peshawri Karahi', urdu: 'مٹن پشاوری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,200' }, { label: 'FULL', price: 'PKR 4,250' }] },
        { id: 'mt-4', name: 'Mutton White Karahi', urdu: 'مٹن وائٹ کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,400' }, { label: 'FULL', price: 'PKR 4,600' }] },
        { id: 'mt-5', name: 'Mutton Achari Karahi', urdu: 'مٹن اچاری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,300' }, { label: 'FULL', price: 'PKR 4,400' }] },
        { id: 'mt-6', name: 'Mutton Kuja', urdu: 'مٹن کُجّہ', portions: [{ label: 'HALF', price: 'PKR 2,500' }, { label: 'FULL', price: 'PKR 4,800' }] },
        { id: 'mt-7', name: 'Mutton Handi', urdu: 'مٹن ہانڈی', portions: [{ label: 'HALF', price: 'PKR 2,500' }, { label: 'FULL', price: 'PKR 4,800' }] },
      ],
    },
    {
      id: 'desi-karahi',
      name: 'Desi Karahi',
      subtitle: 'HALF / FULL',
      image: '/desi.jpg',
      fallback: '/Desi krahi.webp',
      dishes: [
        { id: 'dk-1', name: 'Kabab G Special Desi Afghani Karahi', urdu: 'کباب جی اسپیشل دیسی افغانی کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,300' }, { label: 'FULL', price: 'PKR 4,400' }] },
        { id: 'dk-2', name: 'Desi White Karahi', urdu: 'دیسی وائٹ کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,300' }, { label: 'FULL', price: 'PKR 4,400' }] },
        { id: 'dk-3', name: 'Desi Achari Karahi', urdu: 'دیسی اچاری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,150' }, { label: 'FULL', price: 'PKR 4,200' }] },
        { id: 'dk-4', name: 'Deshi Murgh Lahori Karahi', urdu: 'دیسی مرغ لاہوری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 2,150' }, { label: 'FULL', price: 'PKR 4,200' }] },
        { id: 'dk-5', name: 'Desi Kujja', urdu: 'دیسی کُجّہ', portions: [{ label: 'HALF', price: 'PKR 2,400' }, { label: 'FULL', price: 'PKR 4,600' }] },
      ],
    },
    {
      id: 'beef-karahi',
      name: 'Beef Karahi',
      subtitle: 'HALF / FULL',
      image: '/beef.jpg',
      fallback: '/krahi.webp',
      dishes: [
        { id: 'bk-1', name: 'Beef Afghani Karahi', urdu: 'بیف افغانی کڑاہی', portions: [{ label: 'HALF', price: 'PKR 1,350' }, { label: 'FULL', price: 'PKR 2,600' }] },
        { id: 'bk-2', name: 'Beef Achari Karahi', urdu: 'بیف اچاری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 1,300' }, { label: 'FULL', price: 'PKR 2,600' }] },
        { id: 'bk-3', name: 'Beef Lahori Karahi', urdu: 'بیف لاہوری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 1,450' }, { label: 'FULL', price: 'PKR 2,800' }] },
        { id: 'bk-4', name: 'Beef Kujja', urdu: 'بیف کُجّہ', portions: [{ label: 'HALF', price: 'PKR 1,550' }, { label: 'FULL', price: 'PKR 3,000' }] },
      ],
    },
    {
      id: 'chicken-karahi',
      name: 'Chicken Karahi',
      subtitle: 'HALF / FULL',
      image: '/chkn.jpg',
      fallback: '/chichken.webp',
      dishes: [
        { id: 'ck-1', name: 'Kabab G Special Chicken Afghani Karahi', urdu: 'کباب جی اسپیشل چکن افغانی کڑاہی', portions: [{ label: 'HALF', price: 'PKR 1,250' }, { label: 'FULL', price: 'PKR 2,400' }] },
        { id: 'ck-2', name: 'Chicken White Karahi', urdu: 'چکن وائٹ کڑاہی', portions: [{ label: 'HALF', price: 'PKR 1,150' }, { label: 'FULL', price: 'PKR 2,200' }] },
        { id: 'ck-3', name: 'Chicken Achari Karahi', urdu: 'چکن اچاری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 1,050' }, { label: 'FULL', price: 'PKR 2,000' }] },
        { id: 'ck-4', name: 'Chicken Lahori Karahi', urdu: 'چکن لاہوری کڑاہی', portions: [{ label: 'HALF', price: 'PKR 1,050' }, { label: 'FULL', price: 'PKR 2,000' }] },
        { id: 'ck-5', name: 'Chicken Kujja', urdu: 'چکن کُجّہ', portions: [{ label: 'HALF', price: 'PKR 1,350' }, { label: 'FULL', price: 'PKR 2,600' }] },
      ],
    },
    {
      id: 'chowmein',
      name: 'Chowmein',
      subtitle: 'HALF / FULL',
      image: '/chowmin.jpg',
      fallback: '/hero-2.jpg',
      dishes: [
        { id: 'cw-1', name: 'Special Chowmein', urdu: 'اسپیشل چومین', portions: [{ label: 'HALF', price: 'PKR 700' }, { label: 'FULL', price: 'PKR 1,299' }] },
        { id: 'cw-2', name: 'Chicken Chowmein', urdu: 'چکن چومین', portions: [{ label: 'HALF', price: 'PKR 670' }, { label: 'FULL', price: 'PKR 1,150' }] },
        { id: 'cw-3', name: 'Vegetable Chowmein', urdu: 'سبزی چومین', portions: [{ label: 'HALF', price: 'PKR 550' }, { label: 'FULL', price: 'PKR 1,000' }] },
        { id: 'cw-4', name: 'Thai Chowmein', urdu: 'تھائی چومین', portions: [{ label: 'HALF', price: 'PKR 600' }, { label: 'FULL', price: 'PKR 1,050' }] },
      ],
    },
    {
      id: 'burgers',
      name: 'Burgers',
      subtitle: 'SINGLE',
      image: '/burger.jpg',
      fallback: '/burger.jpg',
      dishes: [
        { id: 'bg-1', name: 'Chicken Cheese Burger', urdu: 'چکن چیز برگر', portions: [{ label: '', price: 'PKR 580' }] },
      ],
    },
    {
      id: 'strips-rolls',
      name: 'Strips & Rolls',
      subtitle: 'PORTION',
      image: '/wrap.jpg',
      fallback: '/wrap.jpg',
      dishes: [
        { id: 'sr-1', name: 'Behari Roll (4 Piece)', urdu: 'بہاری رول', portions: [{ label: '', price: 'PKR 750' }] },
        { id: 'sr-2', name: 'Special Roll (4 Piece)', urdu: 'اسپیشل رول', portions: [{ label: '', price: 'PKR 799' }] },
        { id: 'sr-3', name: 'Tortilla Wrap', urdu: 'ٹورٹیلا ریپ', portions: [{ label: '', price: 'PKR 699' }] },
        { id: 'sr-4', name: 'Crispy Wrap', urdu: 'کرسپی ریپ', portions: [{ label: '', price: 'PKR 549' }] },
      ],
    },
    {
      id: 'wings',
      name: 'Wings',
      subtitle: 'PORTION',
      image: '/wings.jpg',
      fallback: '/wings.jpg',
      dishes: [
        { id: 'wg-1', name: 'Honey Wings', urdu: 'ہنی ونگز', portions: [{ label: '', price: 'PKR 750' }] },
        { id: 'wg-2', name: 'Red Hot Wings', urdu: 'ریڈ ہاٹ ونگز', portions: [{ label: '', price: 'PKR 850' }] },
      ],
    },
    {
      id: 'fish',
      name: 'Fish',
      subtitle: 'PORTION',
      image: '/fish.jpg',
      fallback: '/fish.jpg',
      dishes: [
        { id: 'fs-1', name: 'Finger Fish (6 Piece)', urdu: 'فنگر فش', portions: [{ label: '', price: 'PKR 1,350' }] },
        { id: 'fs-2', name: 'Red Grill Fish', urdu: 'ریڈ گرل فش', portions: [{ label: '', price: 'PKR 1,400' }] },
        { id: 'fs-3', name: 'White Grill Fish', urdu: 'وائٹ گرل فش', portions: [{ label: '', price: 'PKR 1,600' }] },
        { id: 'fs-4', name: 'Green Grill Fish', urdu: 'گرین گرل فش', portions: [{ label: '', price: 'PKR 1,600' }] },
      ],
    },
    {
      id: 'soups',
      name: 'Soups',
      subtitle: 'SINGLE / HALF / FULL',
      image: '/soup.jpg',
      fallback: '/soup.jpg',
      dishes: [
        { id: 'sp-1', name: 'Kabab G Sp Soup', urdu: 'کباب جی اسپیشل سوپ', portions: [{ label: 'SINGLE', price: 'PKR 300' }, { label: 'HALF', price: 'PKR 580' }, { label: 'FULL', price: 'PKR 1,200' }] },
        { id: 'sp-2', name: 'Hot & Sour Soup', urdu: 'ہاٹ اینڈ سور سوپ', portions: [{ label: 'SINGLE', price: 'PKR 280' }, { label: 'HALF', price: 'PKR 560' }, { label: 'FULL', price: 'PKR 960' }] },
        { id: 'sp-3', name: 'Chicken Corn Soup', urdu: 'چکن کارن سوپ', portions: [{ label: 'SINGLE', price: 'PKR 260' }, { label: 'HALF', price: 'PKR 500' }, { label: 'FULL', price: 'PKR 920' }] },
        { id: 'sp-4', name: 'Vegetable Soup', urdu: 'ویجیٹیبل سوپ', portions: [{ label: 'SINGLE', price: 'PKR 200' }, { label: 'HALF', price: 'PKR 400' }, { label: 'FULL', price: 'PKR 860' }] },
        { id: 'sp-5', name: '19B', urdu: '19 بی سوپ', portions: [{ label: 'SINGLE', price: 'PKR 250' }, { label: 'HALF', price: 'PKR 500' }, { label: 'FULL', price: 'PKR 960' }] },
        { id: 'sp-6', name: 'Fish Craker', urdu: 'فش کریکر', portions: [{ label: 'HALF', price: 'PKR 280' }, { label: 'FULL', price: 'PKR 560' }] },
      ],
    },
    {
      id: 'chinese-cuisines',
      name: 'Chinese Cuisines',
      subtitle: 'HALF / FULL',
      image: '/chineese-1.jpg',
      fallback: '/chineese-2.jpg',
      dishes: [
        { id: 'ch-1', name: 'Kung Pao', urdu: 'کنگ پاؤ', portions: [{ label: 'HALF', price: 'PKR 650' }, { label: 'FULL', price: 'PKR 1,050' }] },
        { id: 'ch-2', name: 'Szechuan Chicken', urdu: 'سچوان چکن', portions: [{ label: 'HALF', price: 'PKR 650' }, { label: 'FULL', price: 'PKR 1,050' }] },
        { id: 'ch-3', name: 'Roasted Almond', urdu: 'روسٹڈ المنڈ', portions: [{ label: 'HALF', price: 'PKR 850' }, { label: 'FULL', price: 'PKR 1,150' }] },
        { id: 'ch-4', name: 'Chicken Chilly Dry', urdu: 'چکن چلی ڈرائی', portions: [{ label: 'HALF', price: 'PKR 650' }, { label: 'FULL', price: 'PKR 999' }] },
        { id: 'ch-5', name: 'Oyster Sauce', urdu: 'اوئسٹر ساس چکن', portions: [{ label: 'HALF', price: 'PKR 650' }, { label: 'FULL', price: 'PKR 999' }] },
        { id: 'ch-6', name: 'Hot & Spicy', urdu: 'ہاٹ اینڈ اسپائسی چکن', portions: [{ label: 'HALF', price: 'PKR 799' }, { label: 'FULL', price: 'PKR 1,199' }] },
        { id: 'ch-7', name: 'Thai Spicy', urdu: 'تھائی اسپائسی چکن', portions: [{ label: 'HALF', price: 'PKR 800' }, { label: 'FULL', price: 'PKR 1,450' }] },
        { id: 'ch-8', name: 'Shashlik Gravy', urdu: 'شاشلک گریوی', portions: [{ label: 'HALF', price: 'PKR 800' }, { label: 'FULL', price: 'PKR 1,450' }] },
        { id: 'ch-9', name: 'Manchurian', urdu: 'منچورین گریوی', portions: [{ label: 'HALF', price: 'PKR 650' }, { label: 'FULL', price: 'PKR 1,200' }] },
        { id: 'ch-10', name: 'Shashlik With Rice', urdu: 'شاشلک ود رائس', portions: [{ label: '', price: 'PKR 1,100' }] },
        { id: 'ch-11', name: 'Manchurian With Rice', urdu: 'منچورین ود رائس', portions: [{ label: '', price: 'PKR 980' }] },
      ],
    },
    {
      id: 'fried-rice',
      name: 'Fried Rice',
      subtitle: 'HALF / FULL',
      image: '/fried.jpg',
      fallback: '/Pulao.jpg',
      dishes: [
        { id: 'fr-1', name: 'Special Fried Rice', urdu: 'اسپیشل فرائیڈ رائس', portions: [{ label: 'HALF', price: 'PKR 700' }, { label: 'FULL', price: 'PKR 1,300' }] },
        { id: 'fr-2', name: 'Chicken Fried Rice', urdu: 'چکن فرائیڈ رائس', portions: [{ label: 'HALF', price: 'PKR 600' }, { label: 'FULL', price: 'PKR 1,150' }] },
        { id: 'fr-3', name: 'Egg Fried Rice', urdu: 'ایگ فرائیڈ رائس', portions: [{ label: 'HALF', price: 'PKR 550' }, { label: 'FULL', price: 'PKR 999' }] },
        { id: 'fr-4', name: 'Vegetable Rice', urdu: 'سبزی فرائیڈ رائس', portions: [{ label: 'HALF', price: 'PKR 530' }, { label: 'FULL', price: 'PKR 950' }] },
        { id: 'fr-5', name: 'Steam Plain Rice', urdu: 'اسٹیم پلین رائس', portions: [{ label: 'HALF', price: 'PKR 499' }, { label: 'FULL', price: 'PKR 800' }] },
        { id: 'fr-6', name: 'Masala Rice', urdu: 'مصالحہ رائس', portions: [{ label: 'HALF', price: 'PKR 600' }, { label: 'FULL', price: 'PKR 999' }] },
        { id: 'fr-7', name: 'Matka Biryani', urdu: 'مٹکہ بریانی', portions: [{ label: '', price: 'PKR 999' }] },
      ],
    },
    {
      id: 'chicken-handi',
      name: 'Chicken Handi',
      subtitle: 'PORTION',
      image: '/chicken-handi.jpg',
      fallback: '/chicken-handi.jpg',
      dishes: [
        { id: 'hd-1', name: 'Chicken White Handi', urdu: 'چکن وائٹ ہانڈی', portions: [{ label: '', price: 'PKR 1,300' }] },
        { id: 'hd-2', name: 'Chicken Handi', urdu: 'چکن ہانڈی', portions: [{ label: '', price: 'PKR 900' }] },
        { id: 'hd-3', name: 'Chicken Jinger', urdu: 'چکن جنجر', portions: [{ label: '', price: 'PKR 1,250' }] },
        { id: 'hd-4', name: 'Chicken Jalfrezi', urdu: 'چکن جلفریزی', portions: [{ label: '', price: 'PKR 1,250' }] },
        { id: 'hd-5', name: 'Chicken Mughlai Handi', urdu: 'چکن مغلئی ہانڈی', portions: [{ label: '', price: 'PKR 1,500' }] },
        { id: 'hd-6', name: 'Chicken Makhni Handi', urdu: 'چکن مکھنی ہانڈی', portions: [{ label: '', price: 'PKR 1,450' }] },
        { id: 'hd-7', name: 'Chicken Harri Mirch Handi', urdu: 'چکن ہری مرچ ہانڈی', portions: [{ label: '', price: 'PKR 1,450' }] },
      ],
    },
    {
      id: 'bar-menu',
      name: 'Bar Menu',
      subtitle: 'DRINKS',
      image: '/Mint.jpg',
      fallback: '/Mint.jpg',
      dishes: [
        { id: 'bm-1', name: 'Mint Margarita', urdu: 'منٹ مارگریٹا', portions: [{ label: '', price: 'PKR 350' }] },
        { id: 'bm-2', name: 'Fresh Lime', urdu: 'فریش لائم', portions: [{ label: '', price: 'PKR 160' }] },
      ],
    },
    {
      id: 'hot-sip',
      name: 'Hot Sip',
      subtitle: 'CHAI',
      image: '/tea.jpg',
      fallback: '/tea.jpg',
      dishes: [
        { id: 'hs-1', name: 'Doodh Patti', urdu: 'دودھ پتی چائے', portions: [{ label: '', price: 'PKR 180' }] },
      ],
    },
    {
      id: 'raita-salad',
      name: 'Raita & Salad',
      subtitle: 'SIDES',
      image: '/salad.webp',
      fallback: '/salad.webp',
      dishes: [
        { id: 'rs-1', name: 'Kachumber Salad', urdu: 'کچومبر سلاد', portions: [{ label: '', price: 'PKR 180' }] },
        { id: 'rs-2', name: 'Green Salad', urdu: 'گرین سلاد', portions: [{ label: '', price: 'PKR 120' }] },
        { id: 'rs-3', name: 'Russian Salad', urdu: 'رشین سلاد', portions: [{ label: '', price: 'PKR 380' }] },
        { id: 'rs-4', name: 'Fruit Salad', urdu: 'فروٹ سلاد', portions: [{ label: '', price: 'PKR 440' }] },
        { id: 'rs-5', name: 'Mint Raita', urdu: 'منٹ رائتہ', portions: [{ label: '', price: 'PKR 80' }] },
      ],
    },
  ], []);

  // Compute category pills with exact counts
  const categoryPills = useMemo(() => {
    const totalCount = categoriesData.reduce((acc, cat) => acc + cat.dishes.length, 0);
    return [
      { name: 'All', count: totalCount },
      ...categoriesData.map((cat) => ({
        name: cat.name,
        count: cat.dishes.length,
      })),
    ];
  }, [categoriesData]);

  // Dynamic filtering based on search query AND category selection
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return categoriesData
      .filter((cat) => {
        // If a specific category is chosen, only match that category
        if (selectedCategory !== 'All' && cat.name.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
        return true;
      })
      .map((cat) => {
        if (!q) return cat;

        // If category itself matches search query, keep all its dishes
        if (cat.name.toLowerCase().includes(q)) {
          return cat;
        }

        // Otherwise filter dishes matching dish name, urdu name, or portion price
        const matchingDishes = cat.dishes.filter((d) => {
          const matchName = d.name.toLowerCase().includes(q);
          const matchUrdu = d.urdu && d.urdu.includes(q);
          const matchPortions = d.portions.some(
            (p) => (p.label && p.label.toLowerCase().includes(q)) || p.price.toLowerCase().includes(q)
          );
          return matchName || matchUrdu || matchPortions;
        });

        return { ...cat, dishes: matchingDishes };
      })
      .filter((cat) => cat.dishes.length > 0);
  }, [categoriesData, selectedCategory, searchQuery]);

  // Total visible dishes count
  const totalVisibleDishes = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.dishes.length, 0);
  }, [filteredCategories]);

  return (
    <section className="relative bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-neutral-900">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F5B800]/[0.035] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          
          {/* Pre-heading */}
          <div className="inline-flex items-center justify-center gap-3 mb-2.5 sm:mb-3">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
            <span className="font-poppins text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase text-[#F5B800]">
              THE COMPLETE MENU
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
          </div>

          {/* Main Title: Playfair Display */}
          <h2 className="font-playfair text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white tracking-tight leading-tight">
            Everything on One Page
          </h2>

          {/* Small Decorative Diamond */}
          <div className="flex items-center justify-center gap-2 my-2.5 text-[#F5B800]">
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
            <span className="text-[10px]">✦</span>
            <span className="w-4 h-[1px] bg-[#F5B800]/40" />
          </div>

          {/* Subtitle */}
          <p className="font-poppins text-neutral-300 text-[13px] sm:text-[15px] mt-2 leading-relaxed max-w-xl mx-auto">
            All 98 dishes across 19 categories, with every price and portion exactly as on our menu. Search a dish or filter by category.
          </p>

        </div>

        {/* ================= SEARCH INPUT BAR (WORKING REAL-TIME FILTER) ================= */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4.5 w-5 h-5 text-[#F5B800] pointer-events-none stroke-[2.2]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, e.g. karahi, kabab, biryani, angara, soup..."
              className="w-full bg-[#151515] hover:bg-[#181818] border border-neutral-700/80 hover:border-[#F5B800] focus:border-[#F5B800] text-white rounded-full py-3.5 pl-12 pr-11 text-[13.5px] sm:text-[15px] font-poppins shadow-xl focus:outline-none focus:ring-1 focus:ring-[#F5B800]/40 transition-all placeholder:text-neutral-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 w-6 h-6 rounded-full bg-neutral-800 hover:bg-[#F5B800] text-neutral-400 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            )}
          </div>
        </div>

        {/* ================= FILTER PILLS (BLACK & YELLOW THEME) ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-10 sm:mb-12">
          {categoryPills.map((pill) => {
            const isActive = selectedCategory === pill.name;

            return (
              <button
                key={pill.name}
                type="button"
                onClick={() => {
                  setSelectedCategory(pill.name);
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-poppins text-xs sm:text-[12.5px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#F5B800] text-black font-bold shadow-lg shadow-[#F5B800]/25 border border-[#F5B800] scale-105'
                    : 'bg-[#151515] hover:bg-neutral-800 border border-neutral-800 hover:border-[#F5B800] text-neutral-300 hover:text-white font-medium'
                }`}
              >
                <span>{pill.name}</span>
                <span className={`text-[10.5px] ${isActive ? 'text-black/80 font-extrabold' : 'text-[#F5B800] font-semibold'}`}>
                  ({pill.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= RESULTS STATUS BAR ================= */}
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-8 text-xs sm:text-sm font-poppins text-neutral-400">
          <div>
            Showing <strong className="text-[#F5B800]">{totalVisibleDishes}</strong> {totalVisibleDishes === 1 ? 'dish' : 'dishes'}
            {selectedCategory !== 'All' && <span> in <strong className="text-white">{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong className="text-white">{searchQuery}</strong>"</span>}
          </div>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-[#F5B800] hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* ================= CATEGORY GROUPS WITH CARDS (EXACT MATCH TO REFERENCE SCREENSHOTS) ================= */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-10 sm:space-y-12">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="relative">
                
                {/* 1. Category Header with Perfect Circle Icon (Zero Empty Space) */}
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    {/* Circle Image Icon: 100% full circle, object-cover, zero empty space */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#F5B800] shrink-0 shadow-md bg-neutral-900 select-none">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          if (cat.fallback) e.currentTarget.src = cat.fallback;
                        }}
                      />
                    </div>

                    {/* Category Title & Subtitle */}
                    <div>
                      <h3 className="font-playfair text-[19px] sm:text-[22px] lg:text-[24px] font-bold text-white tracking-wide leading-tight">
                        {cat.name}
                      </h3>
                      {cat.subtitle && (
                        <p className="font-poppins text-[10px] sm:text-[11px] font-semibold text-neutral-400 tracking-[0.2em] uppercase mt-0.5">
                          {cat.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dishes Count */}
                  <div className="font-poppins text-[11px] sm:text-xs font-bold tracking-widest text-[#F5B800] uppercase">
                    {cat.dishes.length} {cat.dishes.length === 1 ? 'DISH' : 'DISHES'}
                  </div>
                </div>

                {/* Subtle Divider Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-[#F5B800]/40 via-neutral-800 to-transparent mb-4 sm:mb-5" />

                {/* 2. Dishes Grid: 2 Columns Matching Attached Screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {cat.dishes.map((dish) => (
                    <div
                      key={dish.id}
                      className="group bg-[#151515] hover:bg-[#1a1a1a] border border-neutral-800/80 hover:border-[#F5B800] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-[0_4px_20px_rgba(245,184,0,0.12)] transition-all duration-200 flex items-center justify-between gap-3 text-left"
                    >
                      {/* Left: Dish Name & Urdu */}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-playfair text-[15px] sm:text-[16px] font-bold text-white group-hover:text-[#F5B800] transition-colors leading-snug">
                          {dish.name}
                        </h4>
                        {dish.urdu && (
                          <div className="font-serif text-[12px] text-neutral-400 mt-0.5" dir="rtl">
                            {dish.urdu}
                          </div>
                        )}
                      </div>

                      {/* Right: Portion & Price Badges */}
                      <div className="shrink-0 flex items-center gap-1.5 sm:gap-2">
                        {dish.portions.map((portion, idx) => (
                          <div
                            key={idx}
                            className={`rounded-lg px-2 sm:px-2.5 py-1 text-center flex items-center gap-1.5 transition-colors ${
                              portion.label
                                ? 'bg-[#222222] border border-neutral-700/70 group-hover:border-[#F5B800]/50'
                                : ''
                            }`}
                          >
                            {portion.label && (
                              <span className="text-[9.5px] uppercase font-poppins font-semibold text-neutral-400">
                                {portion.label}
                              </span>
                            )}
                            <span className="text-xs sm:text-[13.5px] font-bold font-poppins text-[#F5B800]">
                              {portion.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* ================= NO RESULTS STATE ================= */
          <div className="py-16 text-center text-neutral-400 font-poppins">
            <Utensils className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No dishes found</h4>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto mb-4">
              We couldn't find any dish matching "{searchQuery}". Try searching for karahi, kabab, boti, or soup.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F5B800] text-black font-poppins text-xs font-bold hover:scale-105 transition-transform cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 sm:mt-18 text-center">
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
            <span>EXPLORE FULL INTERACTIVE MENU</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

      </div>
    </section>
  );
}
