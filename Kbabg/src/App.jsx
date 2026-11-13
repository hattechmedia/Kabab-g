import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCircles from './components/CategoryCircles';
import StoryMilestoneSection from './components/StoryMilestoneSection';
import BestsellersSection from './components/BestsellersSection';
import CoreValuesBanner from './components/CoreValuesBanner';
import PromoDealBanner from './components/PromoDealBanner';
import SajjiSpecialSection from './components/SajjiSpecialSection';
import BbqSpecialSection from './components/BbqSpecialSection';
import SpecialPlatter from './components/SpecialPlatter';
import AlaCarteSection from './components/AlaCarteSection';
import LiveCraftVideoSection from './components/LiveCraftVideoSection';
import QualityFoodStorySection from './components/QualityFoodStorySection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import Footer from './components/Footer';
import BranchModal from './components/BranchModal';

function App() {
  const [activePage, setActivePage] = useState('Home');

  // Branch Selection State: 'nagana' (Main Nagana Chowk) by default or from storage
  const [selectedBranch, setSelectedBranch] = useState(() => {
    return localStorage.getItem('kababg_selected_branch') || 'nagana';
  });

  // Popup opens automatically when the website is loaded
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(true);

  // Automatically scroll to the exact start of the page whenever activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activePage]);

  // Handle branch change: selects branch and navigates directly to that branch's menu page
  const handleSelectBranch = (branchId) => {
    setSelectedBranch(branchId);
    try {
      localStorage.setItem('kababg_selected_branch', branchId);
    } catch {
      // Ignore if localStorage unavailable
    }
    setIsBranchModalOpen(false);
    setActivePage('Menu');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#111111] flex flex-col font-poppins selection:bg-[#F5B800] selection:text-[#111111]">
      {/* 0. Branch Selector Popup Modal (Opens on page load & accessible anytime) */}
      <BranchModal
        isOpen={isBranchModalOpen}
        onClose={() => setIsBranchModalOpen(false)}
        selectedBranch={selectedBranch}
        onSelectBranch={handleSelectBranch}
      />

      {/* 1. Header Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        selectedBranch={selectedBranch}
        onOpenBranchModal={() => setIsBranchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'Contact' ? (
          <ContactPage setActivePage={setActivePage} />
        ) : activePage === 'About us' ? (
          <AboutPage setActivePage={setActivePage} />
        ) : activePage === 'Menu' ? (
          <MenuPage 
            setActivePage={setActivePage} 
            selectedBranch={selectedBranch}
            onSelectBranch={handleSelectBranch}
            onOpenBranchModal={() => setIsBranchModalOpen(true)}
          />
        ) : (
          <>
            {/* 2. Hero Section */}
            <Hero setActivePage={setActivePage} />

            {/* 3. Circular Food Categories (EXPLORE OUR FLAVOURS) */}
            <CategoryCircles />

            {/* 4. Our Story Section (CELEBRATING 25 YEARS) */}
            <StoryMilestoneSection />

            {/* 5. Special Koyla Karahi Banner (CHEF'S SIGNATURE SPECIALITY) */}
            <PromoDealBanner />

            {/* 6. Special Balochi Sajji Banner (TRADITIONAL BALOCHI HERITAGE) */}
            <SajjiSpecialSection />

            {/* 7. Special Charcoal BBQ Platter Banner (PITMASTER'S CHARCOAL GRILL) */}
            <BbqSpecialSection />

            {/* 8. Traditional À La Carte Menu with Branch Switching (Karahi, Handi, Pulao, BBQ, Sajji, Salad) */}
            <AlaCarteSection 
              selectedBranch={selectedBranch}
              onSelectBranch={handleSelectBranch}
              onOpenBranchModal={() => setIsBranchModalOpen(true)}
            />

            {/* 10. Live Craft Video Section (Live Fire & Charcoal Craft) */}
            <LiveCraftVideoSection />

            {/* 11. Quality & Authentic Food Story (Overlapping Images Layout) */}
            <QualityFoodStorySection setActivePage={setActivePage} />

            {/* 12. Bestsellers Showcase (OUR BESTSELLERS) */}
            <BestsellersSection />

            {/* 13. Core Values Banner (ORIGINAL RECIPES / 100% QUALITY FOODS / FASTEST DELIVERY) */}
            <CoreValuesBanner />

            {/* 14. The Grand Kabab G Royal Sizzler Platter */}
            <SpecialPlatter />

            {/* 15. Customer Reviews & Testimonials */}
            <Testimonials />

            {/* 16. Table Reservation & Contact Us */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 17. Premium Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
