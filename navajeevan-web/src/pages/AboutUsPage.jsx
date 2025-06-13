// src/pages/AboutUsPage.jsx
import React, { useEffect } from 'react';
import Responce from '../assets/gallary/13.jpeg'; // Ensure this path is correct and the file exists
import upNskf from '../assets/homeimages/Nskf.png'; // Ensure this path is correct and the file exists
import image11 from '../assets/images/image11.png'; // Ensure this path is correct and the file exists
import presidentImage from '../assets/homeimages/president.png'; // Ensure this path is correct and the file exists (e.g., your actual president's photo)
import OurVision from './OurVision';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Colors } from '../utils/Colors.js'; // Still import Colors for JS logic if needed, but primarily use Tailwind classes


const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  return (
    // Uses standard Tailwind color class
    <div className="bg-gradient-to-br from-light-section-bg to-gray-100 min-h-screen py-16 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <header className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl md:text-6xl font-extrabold text-forest-green leading-tight mb-6 animate-fade-in">
            Empowering the Unheard
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto opacity-90">
            For over three decades, Navajeevan has been a voice for the voiceless, building bridges of hope and transforming forgotten communities across South India.
          </p>
          <div className="w-28 h-1.5 bg-accent-orange rounded-full mx-auto mt-6"></div>
        </header>

        {/* Inspirational Quote - Separated for better visual flow */}
        <section className="mb-20 text-center px-6 md:px-12" data-aos="fade-up">
          <blockquote className="text-3xl md:text-4xl font-semibold italic text-primary-dark-green max-w-4xl mx-auto leading-relaxed">
            “Hope is not a feeling, it’s a choice — one we make for every soul we lift.”
          </blockquote>
          <p className="mt-6 text-lg text-gray-600">Let this be your reason to walk with us.</p>
        </section>

        {/* President's Note Section - Re-designed for ultimate impact */}
        <section className="mb-20 bg-creamy-white p-6 md:p-10 rounded-2xl shadow-xl border border-stone-beige/50 relative overflow-hidden" data-aos="fade-up">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-12">
                {/* President's Image */}
                <div className="md:col-span-1 flex flex-col items-center text-center">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-primary-dark-green p-1.5 shadow-2xl ring-4 ring-terracotta ring-opacity-50 transition-all duration-300 transform hover:scale-105">
                        <img
                            src={presidentImage}
                            alt="K. Sahadevaiah, President"
                            className="w-full h-full rounded-full object-cover object-center"
                        />
                        {/* Optional: A small badge or icon overlay can be added here if needed */}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark-green mt-4">K. Sahadevaiah</h3>
                    <p className="text-md text-gray-700">President, Navajeevan Organisation</p>
                </div>

                {/* President's Message */}
                <div className="md:col-span-2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark-green mb-6 leading-tight">
                        A Personal Message from Our President
                    </h2>
                    <blockquote className="relative text-xl md:text-2xl italic font-medium leading-relaxed text-body-text-dark mb-6 pl-8 md:pl-10">
                        {/* More subtle and elegant SVG quote mark */}
                        <svg className="absolute -top-2 left-0 w-8 h-8 text-accent-orange opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17c0 2.21 1.79 4 4 4s4-1.79 4-4H8c0-1.1.9-2 2-2s2 .9 2 2h2c0-3.31-2.69-6-6-6S4 13.69 4 17h2zm6-12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM10 2c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4v2c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/></svg>
                        "Every act of kindness, every contribution, weaves into a tapestry of transformed lives. At Navajeevan, we don't just build programs; we cultivate hope, nurture dreams, and empower communities to build their own sustainable future. Your partnership is the very heart of this change, creating a legacy of dignity that resonates for generations. Join us, and together, let's write the next chapter of profound impact."
                        {/* Closing quote mark, flipped horizontally */}
                        <svg className="absolute bottom-0 right-0 w-8 h-8 text-accent-orange opacity-40 transform scale-x-[-1]" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17c0 2.21 1.79 4 4 4s4-1.79 4-4H8c0-1.1.9-2 2-2s2 .9 2 2h2c0-3.31-2.69-6-6-6S4 13.69 4 17h2zm6-12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM10 2c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4v2c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/></svg>
                    </blockquote>
                </div>
            </div>
        </section>

        {/* Our Journey Section */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg" data-aos="fade-right">
          <div className="md:order-2 flex justify-center items-center">
            <img
              src={upNskf}
              alt="Uplifting Safai Karamcharis"
              className="rounded-xl shadow-md max-w-full h-auto object-cover"
            />
          </div>
          <div className="md:order-1 text-body-text-dark">
            <h2 className="text-3xl font-bold text-primary-dark-green mb-6">Over These Three Decades, We’ve Witnessed Inspiring Change:</h2>
            <ul className="space-y-4 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-accent-orange mr-3 text-2xl">🍃</span>
                <span>Tribal communities once without homes now cultivate their own land.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange mr-3 text-2xl">🌾</span>
                <span>Bonded laborers have been freed and now live with dignity as landowners.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange mr-3 text-2xl">🛠️</span>
                <span>Safai Karamcharis are becoming entrepreneurs through our partnership with NSKFDC.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-orange mr-3 text-2xl">💫</span>
                <span>Commercial sex workers are finding respect and opportunity through our work with APDSC.</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-8 border-l-4 border-stone-beige pl-4 italic text-gray-700">
              Every success story reminds us: we are just getting started. For every individual we uplift, many more still await justice, dignity, and access to a better life.
            </p>
          </div>
        </section>

        {/* Pandemic Response Section */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center" data-aos="fade-left">
          <div className="text-body-text-dark bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-primary-dark-green mb-6">Standing Strong During the Pandemic</h2>
            <p className="text-lg leading-relaxed mb-4">
              During the unprecedented challenges of the pandemic, our dedicated team stood strong, demonstrating unwavering commitment to the communities we serve.
            </p>
            <p className="text-lg leading-relaxed">
              Together, we reached over <span className="font-semibold text-terracotta">10,000 families</span>, delivering essential supplies, vital information, and hope when it was needed most.
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* Correctly rendering the Responce image */}
            <img
              src={Responce}
              alt="Pandemic Response"
              className="rounded-xl shadow-md max-w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Challenges & Recognition Section */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-xl" data-aos="fade-right">
          <div className="md:order-2 flex justify-center items-center">
            <img
              src={image11}
              alt="Current Focus and Recognition"
              className="rounded-lg shadow-md w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:order-1 text-body-text-dark">
            <h2 className="text-3xl font-bold text-primary-dark-green mb-6">New Challenges, Renewed Purpose</h2>
            <p className="text-lg leading-relaxed mb-4">
              Today, we focus on improving the lives of waste picker families in Nellore:
            </p>
            <ul className="list-disc list-inside text-lg text-body-text-dark space-y-2 mb-6">
              <li><span className="font-semibold text-terracotta">Education</span> for their children</li>
              <li><span className="font-semibold text-terracotta">Healthcare</span> services</li>
              <li><span className="font-semibold text-terracotta">Clean water</span> access</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Navajeevan is now recognized as the <span className="font-semibold text-primary-dark-green">South India support organization for Safai Karamcharis by NSKFDC</span> — a proud milestone.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16 p-10 bg-gradient-to-r from-primary-dark-green to-forest-green rounded-lg shadow-xl text-white" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-6">🌿 Let’s Create Change — Together</h2>
          <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto opacity-90">
            Join our transformative journey. Your support can bring education, dignity, and livelihoods to those most in need.
          </p>
          <p className="text-2xl font-semibold mb-10">
            Let’s build a future where no one is left behind.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center px-10 py-5 border border-transparent text-xl font-bold rounded-full shadow-lg text-primary-dark-green bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 transform hover:scale-105"
          >
            Join Our Mission
            <svg className="ml-4 -mr-1 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <p className="text-sm italic mt-12 opacity-80">With hope and gratitude, <br />President, Navajeevan</p>
        </section>

        {/* Our Vision Section - This will embed the content from OurVision.jsx */}
        <div className="mt-24">
          <OurVision />
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;
