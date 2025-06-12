// src/components/PartnersSection.jsx

import React from "react";

// Import all partner logos
import srutiLogo from "../assets/partners/sruti.png"; // Renamed partner1Logo for clarity
import apforestLogo from "../assets/partners/apforest.png";
import apLogo from "../assets/partners/ap.png";
import apsacsLogo from "../assets/partners/apsacs.png";
import azimLogo from "../assets/partners/azim.png";
import creLogo from "../assets/partners/cre.png";
import goiLogo from "../assets/partners/goi.png";
import goonjLogo from "../assets/partners/goonj.png";
import grengrantLogo from "../assets/partners/grengrant.png";
import heiferLogo from "../assets/partners/heifer.png";
import icrisatLogo from "../assets/partners/icrisat.png";
import irdwsiLogo from "../assets/partners/irdwsi.png";
import irrigationLogo from "../assets/partners/irrigation.png";
import knhLogo from "../assets/partners/knh.png";
import nabardLogo from "../assets/partners/nabard.png";
import nabinLogo from "../assets/partners/nabin.png";
import nationalhealthLogo from "../assets/partners/nhealth.png";
import nskLogo from "../assets/partners/nsk.png";
import tataprojectLogo from "../assets/partners/tataproject.png";
import tatatrustLogo from "../assets/partners/tatatrust.png";
import waterLogo from "../assets/partners/water.png";


// --- GLOBAL COLORS DEFINED FROM ALL PAGES ---
const Colors = {
  LightSectionBg: '#FDFDFD',
  LightGrayBg: '#F5F5F5',
  PrimaryDarkGreen: '#214E3F',
  CardBgGreen: '#2B6A56',
  AccentOrange: '#C8553D',
  BodyTextDark: '#333333',
  Gray700: '#4A5568',
  Gray500: '#A0AEC0',
  LightText: '#FDFDFD',
};

const partners = [
  {
    name: "Sruti Organisation",
    logo: srutiLogo,
    url: "https://sruti.org",
    description: "A non-profit dedicated to supporting grassroots initiatives in health, education, and sustainable livelihoods.",
  },
  {
    name: "Andhra Pradesh Forest Department",
    logo: apforestLogo,
    url: "https://forest.ap.gov.in",
    description: "Committed to the conservation, protection, and management of forest resources across Andhra Pradesh.",
  },
  {
    name: "Andhra Pradesh Government",
    logo: apLogo,
    url: "https://ap.gov.in",
    description: "The official government body of Andhra Pradesh, involved in various state-level development programs.",
  },
  {
    name: "A.P. State AIDS Control Society",
    logo: apsacsLogo,
    url: "http://apsacs.ap.gov.in",
    description: "Works towards controlling and preventing the spread of HIV/AIDS in Andhra Pradesh.",
  },
  {
    name: "Azim Premji Philanthropic Initiatives",
    logo: azimLogo,
    url: "https://azimpremjiphilanthropicinitiatives.org",
    description: "Supports initiatives aimed at improving the lives of the most disadvantaged sections of society.",
  },
  {
    name: "Centre for Rural Education (CRE)",
    logo: creLogo,
    url: "http://www.creindia.org", // Placeholder URL
    description: "Focuses on educational development and empowerment in rural communities.",
  },
  {
    name: "Government of India",
    logo: goiLogo,
    url: "https://www.india.gov.in",
    description: "The central governing authority of the Republic of India.",
  },
  {
    name: "Goonj",
    logo: goonjLogo,
    url: "https://goonj.org",
    description: "A non-profit organization that undertakes disaster relief, humanitarian aid, and community development in parts of India.",
  },
  {
    name: "Green Grant",
    logo: grengrantLogo,
    url: "#", // Placeholder URL
    description: "Supports environmental sustainability projects and green initiatives.",
  },
  {
    name: "Heifer International",
    logo: heiferLogo,
    url: "https://www.heifer.org",
    description: "Works to end hunger and poverty in partnership with communities.",
  },
  {
    name: "ICRISAT",
    logo: icrisatLogo,
    url: "https://www.icrisat.org",
    description: "International Crops Research Institute for the Semi-Arid Tropics, conducting agricultural research for development.",
  },
  {
    name: "Integrated Rural Development & Water Supply Institute (IRDWS)",
    logo: irdwsiLogo,
    url: "#", // Placeholder URL
    description: "Dedicated to integrated rural development and ensuring access to clean water supplies.",
  },
  {
    name: "Department of Irrigation",
    logo: irrigationLogo,
    url: "#", // Placeholder URL
    description: "Focuses on water management and irrigation infrastructure for agricultural development.",
  },
  {
    name: "Kindernothilfe (KNH)",
    logo: knhLogo,
    url: "https://www.kindernothilfe.org",
    description: "A German non-governmental organization that supports children in need worldwide.",
  },
  {
    name: "NABARD",
    logo: nabardLogo,
    url: "https://www.nabard.org",
    description: "National Bank for Agriculture and Rural Development in India, providing financial and non-financial support for rural development.",
  },
  {
    name: "NABIN", // Assuming full name from context or common abbreviation
    logo: nabinLogo,
    url: "#", // Placeholder URL
    description: "Working towards promoting basic income security for vulnerable populations.",
  },
  {
    name: "National Health Mission",
    logo: nationalhealthLogo,
    url: "https://nhm.gov.in",
    description: "A flagship program of the Government of India for public health improvement.",
  },
  {
    name: "NSK", // Assuming Nippon Steel & Sumitomo Metal Corporation or similar
    logo: nskLogo,
    url: "#", // Placeholder URL
    description: "An industrial partner supporting community development and infrastructure projects.",
  },
  {
    name: "Tata Project",
    logo: tataprojectLogo,
    url: "https://www.tataprojects.com",
    description: "A leading Indian infrastructure company engaged in large-scale development projects.",
  },
  {
    name: "Tata Trust",
    logo: tatatrustLogo,
    url: "https://www.tatatrusts.org",
    description: "Philanthropic organization promoting various social development initiatives across India.",
  },
  {
    name: "Department of Water Resources",
    logo: waterLogo,
    url: "#", // Placeholder URL
    description: "Manages water resources for sustainable use and development.",
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
              <div
                key={idx}
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
                    // Removed grayscale filter. Logos will now be in their original color by default.
                    // The parent div's hover:scale-105 will provide the desired hover effect.
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
