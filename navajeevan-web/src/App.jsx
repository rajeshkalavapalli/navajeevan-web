import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// Import common layout components
import Navibar from './components/Navibar';
import Headerimage from './components/Headimages';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import PartnersSection from './components/PartnersSection';
import LogoSlider from './components/LogoSlider';
import ScrollToTop from './components/ScrollToTop';

// Main page sections
import Whoweare from './components/Whoweare';
import Ourwork from './components/Ourwork';
import Media from './components/Media';
import Contact from './components/Contact';
import Ensure from './components/ensure';
import Impact from './components/Impact';
import Awards from './components/Awards';
import HomeCta from './components/HomeCta';
import VolunteerForm from './components/VolunteerForm';

// "Who We Are" sub-pages
import AboutUsPage from './pages/AboutUsPage';
import AnnualReports from './pages/AnnualReports';
import StrategicPriorities from './pages/StrategicPriorities';
import LegalStatutoryDocuments from './pages/LegalStatutoryDocuments';
import NotFound from './pages/NotFound';

function AppShell() {
  const navigate = useNavigate();

  // Donation Modal visibility
  const [showDonateModal, setShowDonateModal] = useState(false);
  const handleDonateClick = () => setShowDonateModal(true);
  const handleCloseModal = () => setShowDonateModal(false);

  // Volunteer form lives on the home page; jump to it from anywhere
  const handleJoinClick = () => navigate('/#volunteer-form');

  return (
    <>
      <ScrollToTop />
      <Navibar onDonateClick={handleDonateClick} />
      <DonateModal isOpen={showDonateModal} onClose={handleCloseModal} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Headerimage onDonateClick={handleDonateClick} />
                <Whoweare onDonateClick={handleDonateClick} onJoinClick={handleJoinClick} />
                <Ensure />
                <Impact />
                <Awards />
                <HomeCta onDonateClick={handleDonateClick} onJoinClick={handleJoinClick} />
                <LogoSlider />
                <div id="volunteer-form" className="scroll-mt-16">
                  <VolunteerForm />
                </div>
              </>
            }
          />

          <Route path="/who-we-are" element={<Navigate to="/who-we-are/about-us" replace />} />
          <Route path="/our-work" element={<Ourwork onDonateClick={handleDonateClick} />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/our-partners" element={<PartnersSection />} />

          {/* WHO WE ARE SUB-PAGES */}
          <Route path="/who-we-are/about-us" element={<AboutUsPage onDonateClick={handleDonateClick} />} />
          <Route path="/who-we-are/strategic-priorities" element={<StrategicPriorities />} />
          <Route path="/who-we-are/annual-reports" element={<AnnualReports />} />
          <Route path="/who-we-are/legal-documents" element={<LegalStatutoryDocuments />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer onDonateClick={handleDonateClick} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
