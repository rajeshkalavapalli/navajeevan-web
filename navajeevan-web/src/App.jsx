import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import common layout components
import Topbar from './components/Topbar';
import Navibar from './components/Navibar';
import Headerimage from './components/Headimages';
import Footer from './components/footer';
import DonateModal from './components/DonateModal';

// Import your specific page components
import Whoweare from './components/Whoweare';
import Ourwork from './components/Ourwork';
import Media from './components/Media';
import Contact from './components/Contact';
import Ensure from './components/Ensure';
import Impact from './components/impact';
import Ourpartner from './components/Ourpartner';
import Activity from './components/Activity';

// Corrected import path for AboutUsPage.jsx (assuming App.jsx is in 'src/')
import AboutUsPage from './pages/AboutUsPage'; // <--- THIS IS THE CORRECTED PATH

function App() {
  const [showDonateModal, setShowDonateModal] = useState(false);

  const handleDonateClick = () => setShowDonateModal(true);
  const handleCloseModal = () => setShowDonateModal(false);

  return (
    <BrowserRouter>
      {/* Components that appear on ALL pages */}
      <Topbar onDonateClick={handleDonateClick} />
      <Navibar />
      {/* Headerimage is currently rendered globally. If it's only for the homepage,
          it should be moved inside the "/" route's element. */}
      {/* <Headerimage /> */} {/* Uncomment this line if you want Headerimage on all pages */}

      {/* The Donate Modal is rendered once and its visibility controlled by state */}
      <DonateModal show={showDonateModal} onClose={handleCloseModal} />

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              {/* If Headerimage is only for the home page, put it here: */}
              <Headerimage /> {/* Moved Headerimage here for typical homepage usage */}
              <Whoweare />
              <Ensure />
              <Activity />
              <Impact />
            </>
          }
        />

        {/* === FIX: ROUTE PATH MATCHES NAVBAR LINK FOR "ABOUT US" === */}
        <Route path="/who-we-are/about-us" element={<AboutUsPage />} />

        {/* Routes for other main navigation items.
            Ensure your Navbar links match these paths exactly. */}
        {/* If "/who-we-are" is a parent page, ensure its content is correct.
            If "Whoweare" component *is* the "Who We Are" page, then this is fine. */}
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/our-partner" element={<Ourpartner />} />
        <Route path="/our-work" element={<Ourwork />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />

        {/* Add routes for other sub-pages in "Who We Are" dropdown if you create them later: */}
        {/* Example:
        <Route path="/who-we-are/our-team-allies" element={<OurTeamAndAlliesPage />} />
        */}
      </Routes>

      {/* Footer appears on ALL pages */}
      <Footer onDonateClick={handleDonateClick} />
    </BrowserRouter>
  );
}

export default App;