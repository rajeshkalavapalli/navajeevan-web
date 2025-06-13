// src/pages/StrategicPriorities.jsx

import React from 'react';
import { Colors } from '../utils/Colors.js';
import { FaBullseye, FaChartLine, FaUsers, FaHandsHelping, FaLightbulb } from 'react-icons/fa'; // Icons for priorities

// Placeholder data for Strategic Priorities
const strategicPrioritiesData = [
  {
    id: 1,
    title: "Empowering Rural Livelihoods",
    icon: FaHandsHelping,
    description: "To foster sustainable economic growth in rural communities through skill development, micro-enterprises, and agricultural advancements, ensuring self-reliance and improved living standards.",
    details: [
      "Promote organic farming practices and modern agricultural techniques.",
      "Establish vocational training centers for local youth and women.",
      "Facilitate market linkages for rural products.",
    ]
  },
  {
    id: 2,
    title: "Advancing Education & Child Protection",
    icon: FaLightbulb,
    description: "To ensure access to quality education for underprivileged children and create safe, nurturing environments free from exploitation and child labor.",
    details: [
      "Provide educational support and scholarships to needy students.",
      "Conduct awareness campaigns against child labor and child marriage.",
      "Establish safe spaces and rehabilitation centers for vulnerable children.",
    ]
  },
  {
    id: 3,
    title: "Enhancing Community Health & Well-being",
    icon: FaUsers,
    description: "To improve health outcomes by increasing access to healthcare services, promoting hygiene, and addressing malnutrition, particularly among women and children.",
    details: [
      "Organize health camps and medical awareness programs.",
      "Promote maternal and child health through specialized initiatives.",
      "Support sanitation and clean drinking water projects.",
    ]
  },
  {
    id: 4,
    title: "Promoting Environmental Sustainability",
    icon: FaChartLine, // Changed icon for broader environment context
    description: "To advocate for and implement practices that protect natural resources, promote biodiversity, and build community resilience to climate change.",
    details: [
      "Initiate tree plantation drives and forest conservation efforts.",
      "Encourage adoption of renewable energy sources.",
      "Conduct climate change adaptation workshops for farmers.",
    ]
  },
  {
    id: 5,
    title: "Strengthening Governance & Advocacy",
    icon: FaBullseye,
    description: "To build strong, transparent, and accountable community institutions and advocate for policy changes that benefit marginalized populations.",
    details: [
      "Capacity building for local self-governance bodies.",
      "Legal literacy and rights awareness programs.",
      "Advocate for pro-poor policies at local and state levels.",
    ]
  },
];

const StrategicPriorities = () => {
  return (
    <section className={`bg-[${Colors.LightSectionBg}] py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* --- Main Page Header --- */}
        <h2 className={`text-4xl md:text-5xl font-extrabold text-[${Colors.PrimaryDarkGreen}] text-center mb-4 leading-tight`}>
          Our Strategic Priorities
        </h2>
        <p className={`text-lg text-center mb-12 max-w-2xl mx-auto opacity-90 text-[${Colors.BodyTextDark}]`}>
          Navajeevan Organisation's efforts are guided by a clear set of strategic priorities designed to achieve maximum impact and sustainable change in the communities we serve.
        </p>
        <div className={`w-32 h-0.5 bg-[${Colors.AccentOrange}] mx-auto mb-16`}></div>

        {/* --- Priorities Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategicPrioritiesData.length === 0 ? (
            <p className={`text-center text-xl opacity-70 col-span-full text-[${Colors.BodyTextDark}]`}>
              No strategic priorities defined yet.
            </p>
          ) : (
            strategicPrioritiesData.map((priority, index) => {
              const IconComponent = priority.icon;
              return (
                <div 
                  key={priority.id} 
                  className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-start
                             transform hover:scale-105 transition-all duration-300 ease-in-out`}
                >
                  <div className="flex items-center mb-4">
                    {IconComponent && <IconComponent className={`text-5xl text-[${Colors.Terracotta}] mr-4 flex-shrink-0`} />}
                    <h3 className={`text-2xl font-bold text-[${Colors.PrimaryDarkGreen}] leading-tight`}>{priority.title}</h3>
                  </div>
                  <p className={`text-base text-[${Colors.BodyTextDark}] leading-relaxed flex-grow mb-4`}>
                    {priority.description}
                  </p>
                  {priority.details && priority.details.length > 0 && (
                    <div className="mt-2">
                      <h4 className={`text-md font-semibold text-[${Colors.PrimaryDarkGreen}] mb-2`}>Key Focus Areas:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {priority.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default StrategicPriorities;
