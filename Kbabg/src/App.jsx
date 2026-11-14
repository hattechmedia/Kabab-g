import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodCategoriesSection from './components/FoodCategoriesSection';
import SignatureFlavoursSection from './components/SignatureFlavoursSection';
import CompleteMenuOnePageSection from './components/CompleteMenuOnePageSection';
import AuthenticStorySection from './components/AuthenticStorySection';
import TasteInPicturesSection from './components/TasteInPicturesSection';
import VisitKababGSection from './components/VisitKababGSection';
import CravingDeliciousCTASection from './components/CravingDeliciousCTASection';
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

  // Handle branch change: updates branch selection state
  const handleSelectBranch = (branchId) => {
    setSelectedBranch(branchId);
    try {
      localStorage.setItem('kababg_selected_branch', branchId);
    } catch {
      // Ignore if localStorage unavailable
    }
    setIsBranchModalOpen(false);
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

            {/* 3. All 19 Food Categories Grid (Explore Our Food Categories) */}
            <FoodCategoriesSection setActivePage={setActivePage} />

            {/* 4. Discover Our Signature Flavours (Chef's Picks) */}
            <SignatureFlavoursSection setActivePage={setActivePage} />

            {/* 5. Complete Menu on One Page (Search & Category Filter) */}
            <CompleteMenuOnePageSection setActivePage={setActivePage} />

            {/* 6. Our Services (HOW TO ENJOY KABAB G: Dine In, Take Away, Home Delivery) */}
            <CoreValuesBanner setActivePage={setActivePage} />

            {/* 7. Authentic Pakistani Food, Done Right (OUR STORY) */}
            <AuthenticStorySection />

            {/* 8. A Taste in Pictures (STRAIGHT FROM THE KITCHEN) */}
            <TasteInPicturesSection />

            {/* 9. Visit Kabab G (COME SAY HELLO - Two Branches) */}
            <VisitKababGSection />

            {/* 10. Craving Something Delicious? (CTA Call to Order) */}
            <CravingDeliciousCTASection setActivePage={setActivePage} />
          </>
        )}
      </main>

      {/* 17. Premium Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
