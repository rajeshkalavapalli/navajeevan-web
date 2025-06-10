import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaHeart,
} from "react-icons/fa";
import DonateModal from "./DonateModal"; // Adjust path if needed

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    const increment = Math.ceil(end / 100);
    const timer = setInterval(() => {
      start += increment;
      setCount(start > end ? end : start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center text-white">
      <div className="text-3xl font-bold">{count}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
};

const Footer = () => {
  const [showDonate, setShowDonate] = useState(false);

  const onDonateClick = () => {
    setShowDonate(true);
  };

  return (
    <>
      <footer className="bg-[#1e2a38] text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">About Us</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              What started as a dream 30 years ago has grown into a mission for justice and dignity.
              Tribal families now own land; bonded laborers live free, thanks to Navajeevan’s efforts.
              We focus on empowering marginalized communities.
              From relief to education, our work continues with purpose.
              Join us in transforming lives.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Our Impact</li>
              <li className="hover:text-white cursor-pointer">Gallery</li>
              <li className="hover:text-white cursor-pointer">News & Updates</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Our Work</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Education & Livelihoods</li>
              <li>Health & Well-being</li>
              <li>Rights & Justice</li>
              <li>Community Empowerment</li>
              <li>Environmental Sustainability</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-yellow-300" />
                <a href="mailto:navajeevannlr@gmail.com" className="hover:text-white">navajeevannlr@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-green-300" />
                <a href="tel:+919440430178" className="hover:text-white">+91 9440430178</a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-300" />
                <span>
                  Ambedkar Nagar, Venkatagiri Town,<br />
                  SPSR Nellore District, Andhra Pradesh
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Support Us</h4>
            <div className="flex items-center gap-3">
              <button
                onClick={onDonateClick}
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white font-bold px-5 py-3 rounded-full text-sm shadow-md"
              >
                DONATE NOW
              </button>
              <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 animate-pulse shadow-sm">
                <FaHeart className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8 flex flex-wrap justify-center gap-8">
          <Counter end={30} label="Years of Impact" />
          <Counter end={100} label="Projects Completed" />
          <Counter end={300000} label="Lives Transformed" />
        </div>

        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p className="text-center md:text-left mb-2 md:mb-0">
            © Copyright 2025 by Navajeevan Organisation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebookF size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn size={18} /></a>
            <a href="mailto:navajeevannlr@gmail.com" className="hover:text-white"><FaGoogle size={18} /></a>
          </div>
        </div>

        {/* Floating Arrow Button */}
        <div className="fixed bottom-8 right-8 z-20">
          <a
            href="#"
            className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            ↑
          </a>
        </div>
      </footer>

      {/* Donate Modal */}
      <DonateModal show={showDonate} onClose={() => setShowDonate(false)} />
    </>
  );
};

export default Footer;
