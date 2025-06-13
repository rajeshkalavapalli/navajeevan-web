import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navajeevanlogo from '../assets/images/Navajeevan.png'; // Assuming logo is compatible with earthy tones

function Navibar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhoWeAreDropdownOpen, setIsWhoWeAreDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsWhoWeAreDropdownOpen(false); // Close dropdown if mobile menu is toggled
  };

  // Handlers for desktop dropdown hover
  const handleWhoWeAreMouseEnter = () => {
    if (window.innerWidth >= 640) {
      clearTimeout(dropdownTimeout.current);
      setIsWhoWeAreDropdownOpen(true);
    }
  };

  const handleWhoWeAreMouseLeave = () => {
    if (window.innerWidth >= 640) {
      dropdownTimeout.current = setTimeout(() => {
        setIsWhoWeAreDropdownOpen(false);
      }, 200); // short delay to prevent flickering
    }
  };

  // Handler for mobile dropdown click (to toggle visibility)
  const handleWhoWeAreClick = (e) => {
    if (window.innerWidth < 640) {
      e.preventDefault(); // Prevent default link navigation on mobile click
      setIsWhoWeAreDropdownOpen(!isWhoWeAreDropdownOpen);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => clearTimeout(dropdownTimeout.current);
  }, []);

  const whoWeAreDropdownItems = [
    { to: "/who-we-are/about-us", label: "ABOUT US" },
    // { to: "/who-we-are/our-team-allies", label: "OUR TEAM AND OUR ALLIES" },
    { to: "/who-we-are/strategic-priorities", label: "STRATEGIC PRIORITIES" },
    { to: "/who-we-are/governing-board-members", label: "GOVERNING BOARD MEMBERS" },
    { to: "/who-we-are/annual-reports", label: "ANNUAL REPORTS & AUDITED ACCOUNTS" },
    { to: "/who-we-are/legal-documents", label: "LEGAL/STATUTORY DOCUMENTS" },
  ];

  // Common Tailwind classes for desktop link hover effect
  const desktopLinkHoverClasses = "relative text-gray-800 hover:text-[#214E3F] transition-colors duration-300 group";
  const desktopUnderlineClasses = "absolute bottom-0 left-0 w-full h-[2px] bg-[#C8553D] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out";

  return (
    // Navbar background: Creamy white - #FDFDFD (Neutral from theme)
    <nav className="bg-[#FDFDFD] shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center justify-center w-[70px] h-[60px] sm:w-[100px] sm:h-[80px] transition-transform duration-300 ease-in-out hover:scale-110">
          <Link to="/" aria-label="Home">
            <img
              src={navajeevanlogo}
              alt="Navajeevan Logo"
              className="max-w-full max-h-full object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 font-medium items-center">
          <li className={desktopLinkHoverClasses}>
            <Link to="/">
              Home
              <span className={desktopUnderlineClasses}></span>
            </Link>
          </li>

          {/* Who We Are with Dropdown */}
          <li
            className={`${desktopLinkHoverClasses} relative`} // Crucial for positioning the absolute dropdown
            onMouseEnter={handleWhoWeAreMouseEnter}
            onMouseLeave={handleWhoWeAreMouseLeave}
          >
            <Link
              to="/who-we-are" // Base link for Who We Are (will navigate on click)
              className="flex items-center py-4 px-2"
            >
              Who We Are
              {/* Dropdown arrow icon */}
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${isWhoWeAreDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <span className={desktopUnderlineClasses}></span>
            </Link>

            {/* Dropdown Menu - Conditionally rendered with fade-in/slide-down animation */}
            {isWhoWeAreDropdownOpen && (
              <ul
                // Dropdown background: Primary Base (Forest Green) - #214E3F
                // Added: opacity-0, translate-y-2 and transition classes
                className="
                  absolute left-0
                  top-full
                  pt-0.5
                  pb-2
                  w-60 bg-[#214E3F] shadow-lg rounded-md overflow-hidden z-20
                  opacity-100 transform translate-y-0 transition-all duration-300 ease-out
                "
              >
                {whoWeAreDropdownItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      // Item text: Gray-200, Hover background: Subtle Forest Green, Hover text: White
                      className="block px-4 py-3 text-sm text-gray-200 hover:bg-[#2D6C5A] hover:text-white transition-colors duration-200"
                      onClick={() => setIsWhoWeAreDropdownOpen(false)} // Close dropdown on item click
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className={desktopLinkHoverClasses}>
            <Link to="/our-work">
              Our Work
              <span className={desktopUnderlineClasses}></span>
            </Link>
          </li>
          <li className={desktopLinkHoverClasses}>
            <Link to="/our-partners">
              Our Partners
              <span className={desktopUnderlineClasses}></span>
            </Link>
          </li>
          <li className={desktopLinkHoverClasses}>
            <Link to="/media">
              Media
              <span className={desktopUnderlineClasses}></span>
            </Link>
          </li>
          <li className={desktopLinkHoverClasses}>
            <Link to="/contact-us">
              Contact Us
              <span className={desktopUnderlineClasses}></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          // Mobile button icon color: Secondary Accent (Terracotta/Rust) - #C8553D
          className="sm:hidden text-[#C8553D] focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content (hidden on sm and up) */}
      <div
        // Mobile menu background: Stone Beige - #DCCBA4 (Highlight/Text Accent)
        className={`sm:hidden bg-[#DCCBA4] overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-800 font-medium">
          <li>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#214E3F] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          {/* Mobile "Who We Are" with Dropdown Toggle */}
          <li>
            <div className="relative w-full">
              <button
                onClick={handleWhoWeAreClick}
                className="w-full text-center hover:text-[#214E3F] transition-colors duration-300 py-2 px-4 flex items-center justify-center"
              >
                Who We Are
                {/* Dropdown arrow icon for mobile */}
                <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${isWhoWeAreDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isWhoWeAreDropdownOpen && (
                <ul
                  // Mobile dropdown background: Pure white for sub-dropdown on mobile
                  // Added: opacity-0, translate-y-2 and transition classes
                  className="bg-white mt-2 py-2 rounded-md shadow-inner w-full
                             opacity-100 transform translate-y-0 transition-all duration-300 ease-out"
                >
                  {whoWeAreDropdownItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        onClick={() => {
                          setIsMobileMenuOpen(false); // Close main mobile menu
                          setIsWhoWeAreDropdownOpen(false); // Close dropdown
                        }}
                        // Item text: Gray-800, Hover background: Stone Beige, Hover text: Forest Green
                        className="block px-4 py-2 text-gray-800 hover:bg-[#DCCBA4] hover:text-[#214E3F] transition-colors duration-200 text-center"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
          <li>
            <Link
              to="/our-work"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#214E3F] transition-colors duration-300"
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to="/our-partners"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#214E3F] transition-colors duration-300"
            >
              Our Partners
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#214E3F] transition-colors duration-300"
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#214E3F] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navibar;