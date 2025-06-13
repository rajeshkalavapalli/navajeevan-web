import React, { useEffect } from 'react';
import Vision from '../assets/images/vision1.jpg'
import Ourcommunity from '../assets/images/ourcommunity1.jpg'
import Mission from '../assets/images/mission1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLeaf, FaHandHoldingHeart, FaPeopleCarry } from 'react-icons/fa';
import { Colors } from '../utils/Colors.js';

const OurVision = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  return (
    <div className={`bg-gradient-to-b from-[${Colors.LightSectionBg}] via-[${Colors.LightGray}] to-[${Colors.CreamyWhite}] min-h-screen py-20 font-inter`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-down">
          <h1 className={`text-5xl font-extrabold text-[${Colors.PrimaryDarkGreen}] mb-6`}>Our Vision</h1>
          <p className={`text-xl text-[${Colors.BodyTextDark}] max-w-4xl mx-auto leading-relaxed`}>
            We envision a world rooted in dignity and equity — where every individual, regardless of background, has a voice and fair access to resources. A society where inclusion is a right, not a privilege.
          </p>
          <div className={`mt-6 w-24 h-1 bg-[${Colors.AccentOrange}] rounded-full mx-auto`}></div>
        </div>

        {/* Genesis Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-right">
          <div className="flex justify-center items-center"> {/* Added flex for centering */}
            <img
              src={Vision}
              alt="Our Vision"
              // ADDED: w-full h-72 (or h-80, h-96) and object-cover
              // Responsive heights: h-64 on small, h-72 on medium, h-80 on large screens
              className={`w-full h-64 sm:h-72 lg:h-80 rounded-xl shadow-xl border border-[${Colors.StoneBeige}] object-cover`}
            />
          </div>
          <div>
            <h2 className={`text-3xl font-bold text-[${Colors.PrimaryDarkGreen}] flex items-center mb-4`}>
              <FaLeaf className={`mr-2 text-[${Colors.Terracotta}]`} /> Our Genesis
            </h2>
            <p className={`text-lg text-[${Colors.BodyTextDark}] mb-3 leading-relaxed`}>
              Born in 1996 from the passion of seasoned development practitioners and human rights advocates, Navajeevan was formed under the leadership of Mr. K. Sahadevaiah. It started with one goal: transform lives through access, rights, and dignity.
            </p>
            <p className={`text-lg text-[${Colors.BodyTextDark}] leading-relaxed`}>
              Our journey has always centered around justice, land rights, and sustainable community development.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-left">
          <div className="order-2 md:order-1">
            <h2 className={`text-3xl font-bold text-[${Colors.PrimaryDarkGreen}] flex items-center mb-4`}>
              <FaHandHoldingHeart className={`mr-2 text-[${Colors.Terracotta}]`} /> Our Mission
            </h2>
            <p className={`text-lg text-[${Colors.BodyTextDark}] mb-3 leading-relaxed`}>
              We empower the marginalized through inclusive participation, education, and livelihood opportunities. We aim to facilitate lasting change by enabling communities to lead their own transformation journeys.
            </p>
            <p className={`text-lg text-[${Colors.BodyTextDark}] leading-relaxed`}>
              At every step, we promote rights-based advocacy, dignity, and sustainability.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center"> {/* Added flex for centering */}
            <img
              src={Mission}
              alt="Our Mission"
              // ADDED: w-full h-72 (or h-80, h-96) and object-cover
              className={`w-full h-64 sm:h-72 lg:h-80 rounded-xl shadow-xl border border-[${Colors.StoneBeige}] object-cover`}
            />
          </div>
        </div>

        {/* Community Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div className="flex justify-center items-center"> {/* Added flex for centering */}
            <img
              src={Ourcommunity}
              alt="Our Community"
              // ADDED: w-full h-72 (or h-80, h-96) and object-cover
              className={`w-full h-64 sm:h-72 lg:h-80 rounded-xl shadow-xl border border-[${Colors.StoneBeige}] object-cover`}
            />
          </div>
          <div>
            <h2 className={`text-3xl font-bold text-[${Colors.PrimaryDarkGreen}] flex items-center mb-4`}>
              <FaPeopleCarry className={`mr-2 text-[${Colors.Terracotta}]`} /> Our Community
            </h2>
            <p className={`text-lg text-[${Colors.BodyTextDark}] mb-3 leading-relaxed`}>
              We stand beside the most vulnerable communities:
            </p>
            <ul className={`list-disc list-inside text-lg text-[${Colors.BodyTextDark}] space-y-1 mb-3`}>
              <li>Dalits and Adivasis</li>
              <li>Fisherfolk and Rural Artisans</li>
              <li>Waste Pickers, Safai Karamcharis, and Sanitation Workers</li>
              <li>Minorities and the Urban Poor</li>
            </ul>
            <p className={`text-lg text-[${Colors.BodyTextDark}] leading-relaxed`}>
              At the center of our work are <strong>women and children</strong> — the foundation of long-term transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
