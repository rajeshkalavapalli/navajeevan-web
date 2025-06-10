// src/pages/AboutUsPage.jsx
import React from 'react';
import OurVision from './OurVision';
import { Link } from 'react-router-dom';
import image11 from '../assets/images/image11.png';
// import bgImage from '../assets/images/earth-bg.jpg'; // Optional earthy background image

const AboutUsPage = () => {
  return (
    <div className="bg-fixed bg-cover bg-center min-h-screen">
      <div className="backdrop-blur-sm bg-white/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <header className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-extrabold text-green-800 leading-tight mb-4">
              A Lifelong Journey of Uplifting the Unheard
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              More than 30 years ago, Navajeevan began as a vision — a vision to reach those who were unheard, unseen, and underserved. What started as a dream has now become a mission that touches thousands of lives across South India.
            </p>
            <div className="w-28 h-1.5 bg-green-600 rounded-full mx-auto mt-6"></div>
          </header>

          {/* Our Journey Section */}
          <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-xl animate-fade-in">
            <div className="md:order-2">
              {/* Optional image placement */}
            </div>
            <div className="md:order-1 text-gray-800">
              <h2 className="text-3xl font-bold text-green-700 mb-6">Over These Three Decades, We’ve Witnessed Inspiring Change:</h2>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">🍃</span>
                  <span>Tribal communities once without homes now cultivate their own land.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">🌾</span>
                  <span>Bonded laborers have been freed and now live with dignity as landowners.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">🛠️</span>
                  <span>Safai Karamcharis are becoming entrepreneurs through our partnership with NSKFDC.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">💫</span>
                  <span>Commercial sex workers are finding respect and opportunity through our work with APDSC.</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed mt-8 border-l-4 border-green-400 pl-4 italic text-gray-700">
                Every success story reminds us: we are just getting started. For every individual we uplift, many more still await justice, dignity, and access to a better life.
              </p>
            </div>
          </section>

          {/* Pandemic Response Section */}
          <section className="mb-20 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
            <div className="text-gray-800">
              <h2 className="text-3xl font-bold text-teal-700 mb-6">Standing Strong During the Pandemic</h2>
              <p className="text-lg leading-relaxed mb-4">
                During the unprecedented challenges of the pandemic, our dedicated team stood strong, demonstrating unwavering commitment to the communities we serve.
              </p>
              <p className="text-lg leading-relaxed">
                Together, we reached over <span className="font-semibold text-teal-900">10,000 families</span>, delivering essential supplies, vital information, and hope when it was needed most.
              </p>
            </div>
            <div>{/* Optional image */}</div>
          </section>

          {/* Challenges & Recognition Section */}
          <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-green-50 p-8 rounded-xl shadow-xl animate-fade-in">
            <div className="md:order-2">
              <img
                src={image11}
                alt="Current Focus and Recognition"
                className="rounded-lg shadow-md w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:order-1 text-gray-800">
              <h2 className="text-3xl font-bold text-emerald-700 mb-6">New Challenges, Renewed Purpose</h2>
              <p className="text-lg leading-relaxed mb-4">
                Today, we focus on improving the lives of waste picker families in Nellore:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li><span className="font-semibold text-emerald-900">Education</span> for their children</li>
                <li><span className="font-semibold text-emerald-900">Healthcare</span> services</li>
                <li><span className="font-semibold text-emerald-900">Clean water</span> access</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Navajeevan is now recognized as the <span className="font-semibold text-emerald-900">South India support organization for Safai Karamcharis by NSKFDC</span> — a proud milestone.
              </p>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center mt-16 p-10 bg-gradient-to-r from-green-700 to-teal-600 rounded-lg shadow-xl text-white animate-fade-in-up">
            <h2 className="text-4xl font-extrabold mb-6">🌿 Let’s Create Change — Together</h2>
            <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
              Join our transformative journey. Your support can bring education, dignity, and livelihoods to those most in need.
            </p>
            <p className="text-2xl font-semibold mb-10">
              Let’s build a future where no one is left behind.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center px-10 py-5 border border-transparent text-xl font-bold rounded-full shadow-lg text-green-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 transform hover:scale-105"
            >
              Join Our Mission
              <svg className="ml-4 -mr-1 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <p className="text-sm italic mt-12">With hope and gratitude, <br />President, Navajeevan</p>
          </section>

          <div className="mt-24">
            <OurVision />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;