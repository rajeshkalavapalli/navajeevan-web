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
    <div className="bg-teal-900 text-gray-100 px-4 py-3 text-sm md:text-lg shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left - Email & Phone */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 tracking-wide">
            <FaEnvelope className="text-cyan-300 text-xl" />
            <span className="text-cyan-200 hover:text-white transition-colors duration-200 cursor-pointer">
              navajeevannlr@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2 tracking-wide">
            <FaPhoneSquareAlt className="text-green-400 text-xl" />
            <span className="text-green-300 hover:text-white transition-colors duration-200 cursor-pointer">
              +91-9440430178
            </span>
          </div>
        </div>

        {/* Middle - Social Media Icons */}
        <div className="flex items-center gap-6 text-2xl">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-300 hover:text-sky-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
          >
            <FaInstagramSquare />
          </a>
        </div>

        {/* Right - Donate Button */}
        <div>
          <button
            className="bg-rose-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-75 transition duration-200 shadow-lg hover:scale-105 transform"
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
