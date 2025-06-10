import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLeaf, FaHandHoldingHeart, FaPeopleCarry } from 'react-icons/fa';

const OurVision = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-amber-100 via-lime-100 to-emerald-50 min-h-screen py-20 font-serif">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-down">
          <h1 className="text-5xl font-extrabold text-emerald-800 mb-6">Our Vision</h1>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            We envision a world rooted in dignity and equity — where every individual, regardless of background, has a voice and fair access to resources. A society where inclusion is a right, not a privilege.
          </p>
          <div className="mt-6 w-24 h-1 bg-emerald-600 rounded-full mx-auto"></div>
        </div>

        {/* Genesis Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-right">
          <div>
            <img
              src="https://source.unsplash.com/600x400/?village,earth"
              alt="Genesis"
              className="rounded-xl shadow-xl border border-amber-300"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-900 flex items-center mb-4">
              <FaLeaf className="mr-2" /> Our Genesis
            </h2>
            <p className="text-lg text-gray-800 mb-3 leading-relaxed">
              Born in 1996 from the passion of seasoned development practitioners and human rights advocates, Navajeevan was formed under the leadership of Mr. K. Sahadevaiah. It started with one goal: transform lives through access, rights, and dignity.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our journey has always centered around justice, land rights, and sustainable community development.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-left">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-lime-800 flex items-center mb-4">
              <FaHandHoldingHeart className="mr-2" /> Our Mission
            </h2>
            <p className="text-lg text-gray-800 mb-3 leading-relaxed">
              We empower the marginalized through inclusive participation, education, and livelihood opportunities. We aim to facilitate lasting change by enabling communities to lead their own transformation journeys.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              At every step, we promote rights-based advocacy, dignity, and sustainability.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://source.unsplash.com/600x400/?farmer,rural"
              alt="Mission"
              className="rounded-xl shadow-xl border border-lime-300"
            />
          </div>
        </div>

        {/* Community Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div>
            <img
              src="https://source.unsplash.com/600x400/?community,india"
              alt="Community"
              className="rounded-xl shadow-xl border border-green-300"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-800 flex items-center mb-4">
              <FaPeopleCarry className="mr-2" /> Our Community
            </h2>
            <p className="text-lg text-gray-800 mb-3 leading-relaxed">
              We stand beside the most vulnerable communities:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-800 space-y-1 mb-3">
              <li>Dalits and Adivasis</li>
              <li>Fisherfolk and Rural Artisans</li>
              <li>Waste Pickers, Safai Karamcharis, and Sanitation Workers</li>
              <li>Minorities and the Urban Poor</li>
            </ul>
            <p className="text-lg text-gray-800 leading-relaxed">
              At the center of our work are <strong>women and children</strong> — the foundation of long-term transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;