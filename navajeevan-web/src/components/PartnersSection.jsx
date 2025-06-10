import React from "react";

import partner1Logo from "../assets/partners/sruti.png";
import partner2Logo from "../assets/partners/partner2.png";
import partner3Logo from "../assets/partners/partner3.png";
import partner4Logo from "../assets/partners/partner4.png";
import partner5Logo from "../assets/partners/partner5.png";

const partners = [
  { name: "Partner One", logo: partner1Logo, url: "https://partner1.com" },
  { name: "Partner Two", logo: partner2Logo, url: "https://partner2.com" },
  { name: "Partner Three", logo: partner3Logo, url: "https://partner3.com" },
  { name: "Partner Four", logo: partner4Logo, url: "https://partner4.com" },
  { name: "Partner Five", logo: partner5Logo, url: "https://partner5.com" },
];

const PartnersSection = () => {
  return (
    <section className="bg-[#0E2148] text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {partners.map(({ name, logo, url }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-[#1f2a4d] rounded-lg p-4 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-20 w-auto mb-3 object-contain"
              loading="lazy"
            />
            <span className="text-sm font-semibold text-center">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
