// src/components/LogoSlider.jsx

import React from "react";
import { Colors } from '../utils/Colors.js';

// Import all partner logos
import srutiLogo from "../assets/partners/sruti.png";
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


// Define the full list of partners directly within this component for self-containment
const partners = [
  { name: "Sruti Organisation", logo: srutiLogo },
  { name: "Andhra Pradesh Forest Department", logo: apforestLogo },
  { name: "Andhra Pradesh Government", logo: apLogo },
  { name: "A.P. State AIDS Control Society", logo: apsacsLogo },
  { name: "Azim Premji Philanthropic Initiatives", logo: azimLogo },
  { name: "Centre for Rural Education (CRE)", logo: creLogo },
  { name: "Government of India", logo: goiLogo },
  { name: "Goonj", logo: goonjLogo },
  { name: "Green Grant", logo: grengrantLogo },
  { name: "Heifer International", logo: heiferLogo },
  { name: "ICRISAT", logo: icrisatLogo },
  { name: "Integrated Rural Development & Water Supply Institute (IRDWS)", logo: irdwsiLogo },
  { name: "Department of Irrigation", logo: irrigationLogo },
  { name: "Kindernothilfe (KNH)", logo: knhLogo },
  { name: "NABARD", logo: nabardLogo },
  { name: "NABIN", logo: nabinLogo },
  { name: "National Health Mission", logo: nationalhealthLogo },
  { name: "NSK", logo: nskLogo },
  { name: "Tata Project", logo: tataprojectLogo },
  { name: "Tata Trust", logo: tatatrustLogo },
  { name: "Department of Water Resources", logo: waterLogo },
];

const LogoSlider = () => {
  // To create a seamless loop, duplicate the partners array
  // This ensures there's enough content to scroll without a break before resetting
  const duplicatedPartners = [...partners, ...partners];

  // Calculate animation duration based on number of logos for consistent speed
  const animationDuration = partners.length * 2.5; // 2.5 seconds per logo (adjust as needed)

  return (
    <section className={`bg-[${Colors.LightGrayBg}] py-8 px-4 overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-8 leading-tight text-[${Colors.PrimaryDarkGreen}]`}>
          Our Collaborators
        </h2>
      </div>
      
      {/* Slider Container */}
      <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
        {/* Logos Track - applying custom animation via Tailwind config */}
        {/* The 'logo-slide' animation will be defined in tailwind.config.js */}
        <div 
          className="inline-block animate-logo-slide" 
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {duplicatedPartners.map((partner, idx) => (
            <div key={idx} className="inline-flex items-center justify-center h-24 mx-8"> {/* Adjusted margin for spacing */}
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
