import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import common layout components
import Topbar from './components/Topbar';
import Navibar from './components/Navibar';
import Headerimage from './components/Headimages';
import Footer from './components/footer';
import DonateModal from './components/DonateModal';
import PartnersSection from './components/PartnersSection';
import LogoSlider from './components/LogoSlider';

// Import your specific page components
// Main sections
import Whoweare from './components/Whoweare'; // This might be a parent or a general 'Who We Are' landing
import Ourwork from './components/Ourwork';
import Media from './components/Media';
import Contact from './components/Contact';
// Homepage specific sections
import Ensure from './components/Ensure';
import Impact from './components/impact';
import Awards from './components/Awards';

// === NEW/UPDATED PAGE IMPORTS FOR 'WHO WE ARE' SUB-PAGES ===
import AboutUsPage from './pages/AboutUsPage';
import AnnualReports from './pages/AnnualReports';
import StrategicPriorities from './pages/StrategicPriorities';
import LegalStatutoryDocuments from './pages/LegalStatutoryDocuments';

// (Optional: Uncomment these if you have these components created)
// import OurTeamAndAllies from './pages/OurTeamAndAllies';
// import GoverningBoardMembers from './pages/GoverningBoardMembers';


function App() {
  // State to control the visibility of the Donate Modal
  const [showDonateModal, setShowDonateModal] = useState(false);

  // Handlers to open and close the modal
  const handleDonateClick = () => setShowDonateModal(true);
  const handleCloseModal = () => setShowDonateModal(false);

  return (
    <BrowserRouter>
      {/* Components that appear on ALL pages */}
      {/* Passing the handleDonateClick function down to Topbar and Footer */}
      <Topbar onDonateClick={handleDonateClick} />
      <Navibar />

      {/* The Donate Modal is rendered once and its visibility controlled by state */}
      {/* IMPORTANT: Changed 'show' prop to 'isOpen' to match DonateModal component */}
      <DonateModal isOpen={showDonateModal} onClose={handleCloseModal} />

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              {/* Headerimage is typically the main hero section on a homepage */}
              <Headerimage />
              {/* These components are typically sections of your homepage */}
              {/* FIX: Pass onDonateClick prop to Whoweare component */}
              <Whoweare onDonateClick={handleDonateClick} />
              <Ensure />
              <Awards/> {/* Your Awards carousel */}
              <Impact />
              <LogoSlider/> {/* Your logo slider */}
            </>
          }
        />

        {/* --- ROUTES FOR MAIN NAVIGATION ITEMS --- */}
        {/* FIX: Pass onDonateClick prop to Whoweare component for its direct route as well */}
        <Route path="/who-we-are" element={<Whoweare onDonateClick={handleDonateClick} />} />
        <Route path="/our-work" element={<Ourwork />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-partners" element={<PartnersSection />} />

        {/* --- ROUTES FOR "WHO WE ARE" DROPDOWN SUB-PAGES --- */}
        <Route path="/who-we-are/about-us" element={<AboutUsPage />} />
        {/* Uncomment these lines when you have the corresponding components */}
        {/* <Route path="/who-we-are/our-team-allies" element={<OurTeamAndAllies />} /> */}
        <Route path="/who-we-are/strategic-priorities" element={<StrategicPriorities />} />
        {/* <Route path="/who-we-are/governing-board-members" element={<GoverningBoardMembers />} /> */}
        <Route path="/who-we-are/annual-reports" element={<AnnualReports />} />
        <Route path="/who-we-are/legal-documents" element={<LegalStatutoryDocuments />} />

      </Routes>

      {/* Footer appears on ALL pages */}
      {/* Passing the handleDonateClick function to Footer as well */}
      <Footer onDonateClick={handleDonateClick} />
    </BrowserRouter>
  );
}

export default App;
