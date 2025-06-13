import React from "react";
import {
  FaEnvelope,
  FaPhoneSquareAlt,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare
} from 'react-icons/fa';

function Topbar({ onDonateClick }) {
  return (
    // Topbar background: Primary Base (Forest Green) with a subtle linear gradient
    // Added: bg-gradient-to-r and custom from/to colors for the gradient
    <div className="bg-gradient-to-r from-[#214E3F] to-[#2D6C5A] text-gray-100 px-4 py-3 text-sm md:text-lg shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left - Email & Phone */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 tracking-wide">
            {/* Email Icon with hover scale animation */}
            {/* Added: hover:scale-110 transition-transform duration-200 */}
            <FaEnvelope className="text-[#DCCBA4] text-xl hover:scale-110 transition-transform duration-200" />
            <a href="mailto:navajeevannlr@gmail.com" className="text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer">
              navajeevannlr@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 tracking-wide">
            {/* Phone Icon with hover scale animation */}
            {/* Added: hover:scale-110 transition-transform duration-200 */}
            <FaPhoneSquareAlt className="text-[#DCCBA4] text-xl hover:scale-110 transition-transform duration-200" />
            <a href="tel:+919440430178" className="text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer">
              +91-9440430178
            </a>
          </div>
        </div>

        {/* Middle - Social Media Icons */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com/sahadevaiah.kalavapalli.9" // Replace with actual Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            // Added: hover:scale-110 transition-transform duration-200
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/your-ngo" // Replace with actual Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            // Added: hover:scale-110 transition-transform duration-200
            className="text-gray-300 hover:text-sky-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/navajeevanorganization?utm_source=qr&igsh=ZjcxZ25veWJnOGF1" // Replace with actual Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            // Added: hover:scale-110 transition-transform duration-200
            className="text-gray-300 hover:text-rose-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <FaInstagramSquare />
          </a>
        </div>

        {/* Right - Donate Button */}
        <div>
          <button
            // Donate button: Secondary Accent (Terracotta/Rust) - #C8553D
            // Enhanced with subtle shadow on hover for a 'lift' effect
            // Added: hover:shadow-lg focus:ring-opacity-90
            className="bg-[#C8553D] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#B34B30] focus:outline-none focus:ring-2 focus:ring-[#C8553D] focus:ring-opacity-90 transition duration-200 shadow-md hover:shadow-lg hover:scale-105 transform"
            onClick={onDonateClick}
          >
            Donate Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Topbar;