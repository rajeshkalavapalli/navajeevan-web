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
  FaWhatsapp, // Import WhatsApp icon
} from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs"; // For the chat icon
import { IoCallSharp } from "react-icons/io5"; // For the call icon
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import DonateModal from "./DonateModal"; // Adjust path if needed
import { Colors } from '../utils/Colors.js'; // Import your Colors utility

// Counter component for animating numbers
const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // Animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / end)); // Time per step
    const increment = Math.ceil(end / 100); // Increment value
    const timer = setInterval(() => {
      start += increment;
      setCount(start > end ? end : start); // Stop at 'end' value
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [end]); // Re-run if 'end' prop changes

  return (
    <div className="text-center text-white">
      <div className="text-3xl md:text-4xl font-bold font-inter">{count}</div>
      <div className={`text-sm md:text-base text-[${Colors.StoneBeige}] font-inter`}>{label}</div>
    </div>
  );
};

const Footer = () => {
  const [showDonate, setShowDonate] = useState(false);
  const [showChatOptions, setShowChatOptions] = useState(false); // State for FAB options

  const onDonateClick = () => {
    setShowDonate(true);
  };

  const handleChatToggle = () => {
    setShowChatOptions(!showChatOptions);
  };

  const officePhone = "+919440430178";
  const whatsappLink = `https://wa.me/${officePhone.replace(/\D/g, '')}`; // Remove non-digits for WhatsApp link
  const callLink = `tel:${officePhone}`;

  return (
    <>
      <footer className={`bg-[${Colors.ForestGreen}] text-white py-16 px-6 md:px-12 font-inter`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About Us Section */}
          <div>
            <h4 className={`text-lg md:text-xl font-semibold mb-5 text-[${Colors.AccentOrange}]`}>About Us</h4>
            <p className={`text-sm text-[${Colors.StoneBeige}] leading-relaxed`}>
              What started as a dream 30 years ago has grown into a mission for justice and dignity.
              Tribal families now own land; bonded laborers live free, thanks to Navajeevan’s efforts.
              We focus on empowering marginalized communities.
              From relief to education, our work continues with purpose.
              Join us in transforming lives.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className={`text-lg md:text-xl font-semibold mb-5 text-[${Colors.AccentOrange}]`}>Quick Links</h4>
            <ul className={`space-y-2.5 text-sm text-[${Colors.StoneBeige}]`}>
              <li className={`hover:text-[${Colors.CreamyWhite}] cursor-pointer transition-colors duration-200`}>Home</li>
              <li className={`hover:text-[${Colors.CreamyWhite}] cursor-pointer transition-colors duration-200`}>Our Impact</li>
              <li className={`hover:text-[${Colors.CreamyWhite}] cursor-pointer transition-colors duration-200`}>Gallery</li>
              <li className={`hover:text-[${Colors.CreamyWhite}] cursor-pointer transition-colors duration-200`}>News & Updates</li>
              <li className={`hover:text-[${Colors.CreamyWhite}] cursor-pointer transition-colors duration-200`}>Contact Us</li>
            </ul>
          </div>

          {/* Our Work Section */}
          <div>
            <h4 className={`text-lg md:text-xl font-semibold mb-5 text-[${Colors.AccentOrange}]`}>Our Work</h4>
            <ul className={`space-y-2.5 text-sm text-[${Colors.StoneBeige}]`}>
              <li>Education & Livelihoods</li>
              <li>Health & Well-being</li>
              <li>Rights & Justice</li>
              <li>Community Empowerment</li>
              <li>Environmental Sustainability</li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className={`text-lg md:text-xl font-semibold mb-5 text-[${Colors.AccentOrange}]`}>Contact Info</h4>
            <div className={`space-y-3 text-sm text-[${Colors.StoneBeige}]`}>
              <div className="flex items-start gap-2">
                <FaEnvelope className={`mt-1 text-[${Colors.CreamyWhite}]`} />
                <a href="mailto:navajeevannlr@gmail.com" className={`hover:text-[${Colors.CreamyWhite}] transition-colors duration-200`}>navajeevannlr@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <FaPhoneAlt className={`mt-1 text-[${Colors.CreamyWhite}]`} />
                <a href="tel:+919440430178" className={`hover:text-[${Colors.CreamyWhite}] transition-colors duration-200`}>+91 9440430178</a>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className={`mt-1 text-[${Colors.CreamyWhite}]`} />
                <span>
                  Ambedkar Nagar, Venkatagiri Town,<br />
                  SPSR Nellore District, Andhra Pradesh
                </span>
              </div>
            </div>
          </div>

          {/* Support Us Section - Refined based on image_95e49e.png */}
          <div className="flex flex-col items-center lg:items-start"> {/* Align to start on large screens */}
            <h4 className={`text-lg md:text-xl font-semibold mb-5 text-[${Colors.AccentOrange}]`}>Support Us</h4>
            <div className="flex items-center space-x-4"> {/* Use space-x for horizontal gap */}
              <button
                onClick={onDonateClick}
                className={`bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white font-bold px-5 py-3 rounded-full text-sm shadow-md transition-all duration-300 transform hover:scale-105`}
              >
                DONATE NOW
              </button>
              {/* Heart icon with rounded background from previous design */}
              <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 animate-pulse shadow-md flex-shrink-0">
                <FaHeart className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Counters Section */}
        <div className="mt-16 mb-12 flex flex-wrap justify-center gap-y-8 gap-x-12">
          <Counter end={30} label="Years of Impact" />
          <Counter end={29} label="Projects Completed" />
          <Counter end={300000} label="Lives Transformed" />
        </div>

        {/* Bottom Bar: Copyright and Social Links */}
        <div className={`border-t border-[${Colors.CardBgGreen}] mr-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[${Colors.StoneBeige}]`}>
          <p className="text-center md:text-left mb-3 md:mb-0">
            © Copyright 2025 by Navajeevan Organisation. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`hover:text-[${Colors.CreamyWhite}] transition-colors duration-200`}><FaTwitter size={20} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`hover:text-[${Colors.CreamyWhite}] transition-colors duration-200`}><FaFacebookF size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`hover:text-[${Colors.CreamyWhite}] transition-colors duration-200`}><FaInstagram size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`hover:text-[${Colors.CreamyWhite}] transition-colors duration-200`}><FaLinkedinIn size={20} /></a>
            <a href="mailto:navajeevannlr@gmail.com" className={`hover:text-[${Colors.CreamyWhite}] transition-colors duration-200`}><FaGoogle size={20} /></a>
          </div>
        </div>

        {/* Floating Chat Button and Options */}
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {showChatOptions && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3, staggerChildren: 0.1 }}
                className="flex flex-col items-center space-y-3 mb-3" // Space above main FAB
              >
                {/* WhatsApp Option */}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white bg-green-500 hover:bg-green-600 transition-colors duration-200`}
                >
                  <FaWhatsapp size={24} />
                </motion.a>
                {/* Phone Call Option */}
                <motion.a
                  href={callLink}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200`}
                >
                  <IoCallSharp size={24} />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Chat Toggle Button */}
          <button
            onClick={handleChatToggle}
            className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white text-3xl
                       bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                       transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2`}
          >
            <BsChatDotsFill /> {/* Chat icon */}
          </button>
        </div>
      </footer>

      {/* Donate Modal */}
      <DonateModal show={showDonate} onClose={() => setShowDonate(false)} />
    </>
  );
};

export default Footer;
