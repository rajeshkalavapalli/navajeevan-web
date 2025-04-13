import React from "react";
import { FaEnvelope, FaPhoneSquareAlt , FaFacebook, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

function Topbar() {
    return (
        <div className="top-container bg-blue-900 text-white px-4 py-2  text-base">
            <div className="top-subcontainer flex flex-col md:flex-row justify-between items-center w-full gap-4">
                
                {/* Left - Email & Phone */}
                <div className="flex flex-col md:flex-row items-center gap-3 text-base">
                    <div className="flex items-center gap-1">
                        <FaEnvelope />
                        <span>navajeevannlr@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaPhoneSquareAlt />
                        <span>+91-9440430178</span>
                    </div>
                </div>

                {/* Middle - Social Media Icons */}
                <div className="flex items-center gap-4 text-xl">
                    <FaFacebook className="hover:text-blue-400 cursor-pointer" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                    <FaInstagramSquare className="hover:text-pink-400 cursor-pointer" />
                </div>

                {/* Right - Donate Button */}
                <div>
                    <button className="bg-white text-blue-900 px-4 py-1 rounded hover:bg-gray-200 transition">
                        Donate Now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Topbar;
