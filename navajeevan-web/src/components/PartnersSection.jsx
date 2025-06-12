// src/components/PartnersSection.jsx

import React from "react";

// Ensure these import paths are correct based on your file structure:
import partner1Logo from "../assets/partners/sruti.png";
import apforestLogo from "../assets/partners/apforest.png";

// --- GLOBAL COLORS DEFINED FROM ALL PAGES ---
const Colors = {
  // Main background for light sections (like Whoweare, AchievementCarousel)
  LightSectionBg: '#FDFDFD', // Closest to your Whoweare background
  LightGrayBg: '#F5F5F5', // From AchievementCarousel, subtle variation

  // Primary Dark Green for headings, card backgrounds on light sections
  PrimaryDarkGreen: '#214E3F', // ForestGreen from Achievements, text on Whoweare
  // A slightly lighter green for the partner card background (on light sections)
  CardBgGreen: '#2B6A56', // Derived, stands out nicely on light background

  // Accent Orange (Terracotta)
  AccentOrange: '#C8553D', // Consistent for buttons, highlights, card titles
  
  // Text Colors
  BodyTextDark: '#333333', // Standard body text (from Whoweare)
  Gray700: '#4A5568', // From AchievementCarousel for body text in cards
  Gray500: '#A0AEC0', // From AchievementCarousel for secondary text
  LightText: '#FDFDFD', // Text on dark backgrounds (inside cards)
};

const partners = [
  {
    name: "Sruti Organisation",
    logo: partner1Logo,
    url: "https://sruti.org",
    description: "A non-profit dedicated to supporting grassroots initiatives in health, education, and sustainable livelihoods.",
  },
  {
    name: "Andhra Pradesh Forest Department",
    logo: apforestLogo,
    url: "https://forest.ap.gov.in",
    description: "Committed to the conservation, protection, and management of forest resources across Andhra Pradesh.",
  },
];

const PartnersSection = () => {
  return (
    <section className={`bg-[${Colors.LightSectionBg}] text-[${Colors.BodyTextDark}] py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Section Title */}
        <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-4 leading-tight text-[${Colors.PrimaryDarkGreen}]`}>
          Our Valued Partners
        </h2>
        {/* Subtitle/Description for the overall section */}
        <p className={`text-lg text-center mb-12 max-w-2xl mx-auto opacity-90 text-[${Colors.BodyTextDark}]`}>
          We are proud to collaborate with organizations and institutions that share our vision for a better future. Their support enables us to create lasting change and amplify our impact.
        </p>

        {/* Divider line */}
        <div className="w-32 h-0.5 bg-[${Colors.AccentOrange}] mx-auto mb-10"></div>

        {partners.length === 0 ? (
          <p className="text-center text-xl opacity-70 mt-8 text-[${Colors.BodyTextDark}]">No partners to display at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {partners.map((partner, idx) => (
              <div // Changed from <a> to <div> as it's no longer directly a link
                key={idx}
                // Removed href, target, rel attributes as it's not a link anymore
                className={`flex flex-col items-center justify-start p-6 rounded-lg shadow-lg
                           bg-[${Colors.CardBgGreen}] border border-[${Colors.CardBgGreen}]
                           hover:border-[${Colors.AccentOrange}] hover:shadow-xl
                           transform hover:scale-105 transition-all duration-300
                           text-center max-w-xs md:max-w-sm w-full h-full group`}
              >
                {/* Logo Container */}
                <div className="flex-shrink-0 mb-4 h-24 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-filter duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Partner Name */}
                <h3 className={`text-xl font-bold mb-2 text-[${Colors.LightText}]`}>{partner.name}</h3>

                {/* Partner Description */}
                {partner.description && (
                  <p className={`text-sm opacity-80 leading-relaxed flex-grow mb-4 text-[${Colors.LightText}]`}>
                    {partner.description}
                  </p>
                )}

                {/* Removed the "Visit Website" span and link */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;