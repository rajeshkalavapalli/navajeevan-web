import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navajeevanlogo from '../assets/images/Navajeevan.png';

function Navibar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhoWeAreDropdownOpen, setIsWhoWeAreDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsWhoWeAreDropdownOpen(false); // Close dropdown if mobile menu is toggled
  };

  // Handlers for desktop dropdown hover
  const handleWhoWeAreMouseEnter = () => {
    setIsWhoWeAreDropdownOpen(true);
  };

  const handleWhoWeAreMouseLeave = () => {
    setIsWhoWeAreDropdownOpen(false);
  };

  // Handler for mobile dropdown click (to toggle visibility)
  const handleWhoWeAreClick = (e) => {
    // Check if it's a mobile viewport (e.g., less than 'sm' breakpoint defined by Tailwind's default 640px)
    if (window.innerWidth < 640) {
      e.preventDefault(); // Prevent default link navigation on mobile click
      setIsWhoWeAreDropdownOpen(!isWhoWeAreDropdownOpen);
    }
    // On desktop, the Link will navigate normally on click if hover isn't active
  };

  const whoWeAreDropdownItems = [
    { to: "/who-we-are/about-us", label: "ABOUT US" },
    { to: "/who-we-are/our-team-allies", label: "OUR TEAM AND OUR ALLIES" },
    { to: "/who-we-are/strategic-priorities", label: "STRATEGIC PRIORITIES" },
    { to: "/who-we-are/governing-board-members", label: "GOVERNING BOARD MEMBERS" },
    { to: "/who-we-are/annual-reports", label: "ANNUAL REPORTS & AUDITED ACCOUNTS" },
    { to: "/who-we-are/legal-documents", label: "LEGAL/STATUTORY DOCUMENTS" },
  ];

  return (
    <nav className="bg-[#F0F8FF] shadow-md">
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
        <ul className="hidden sm:flex gap-8 text-[#333333] font-medium items-center">
          <li>
            <Link
              to="/"
              className="hover:text-[#87CEEB] transition-colors duration-300"
            >
              Home
            </Link>
          </li>

          {/* Who We Are with Dropdown */}
          {/* Apply onMouseEnter/Leave to the li, and ensure no gap */}
          <li
            className="relative" // Crucial for positioning the absolute dropdown
            onMouseEnter={handleWhoWeAreMouseEnter}
            onMouseLeave={handleWhoWeAreMouseLeave}
          >
            {/* The Link itself. Added py-4 to make its hover area taller, connecting better to the dropdown. */}
            <Link
              to="/who-we-are" // Base link for Who We Are (will navigate on click)
              className="hover:text-[#87CEEB] transition-colors duration-300 flex items-center py-4 px-2"
              // Removed onClick={handleWhoWeAreClick} for desktop, rely on hover
            >
              Who We Are
              {/* Dropdown arrow icon */}
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${isWhoWeAreDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>

            {/* Dropdown Menu - Conditionally rendered */}
            {isWhoWeAreDropdownOpen && (
              <ul
                className="
                  absolute left-0
                  top-full           // Position right below the parent li
                  // REMOVED mt-2 from here, as it creates a gap
                  pt-0.5             // Small top padding to bridge any tiny visual gap
                  pb-2               // Enough bottom padding for content
                  w-60 bg-gray-800 shadow-lg rounded-md overflow-hidden z-20
                "
              >
                {whoWeAreDropdownItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="block px-4 py-3 text-sm text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                      onClick={() => setIsWhoWeAreDropdownOpen(false)} // Close dropdown on item click
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/our-work"
              className="hover:text-[#87CEEB] transition-colors duration-300"
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to="/our-partners"
              className="hover:text-[#87CEEB] transition-colors duration-300"
            >
              Our Partners
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              className="hover:text-[#87CEEB] transition-colors duration-300"
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:text-[#87CEEB] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden text-[#6495ED] focus:outline-none"
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

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-[#ADD8E6] overflow-hidden transition-max-height duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 text-[#333333] font-medium">
          <li>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#6495ED] transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          {/* Mobile "Who We Are" with Dropdown Toggle */}
          <li>
            <div className="relative w-full">
              <button
                onClick={handleWhoWeAreClick} // Use onClick for mobile dropdown toggle
                className="w-full text-center hover:text-[#6495ED] transition-colors duration-300 py-2 px-4 flex items-center justify-center"
              >
                Who We Are
                {/* Dropdown arrow icon for mobile */}
                <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${isWhoWeAreDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isWhoWeAreDropdownOpen && (
                <ul className="bg-[#ADD8E6] mt-2 py-2 rounded-md shadow-inner w-full">
                  {whoWeAreDropdownItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        onClick={() => {
                          setIsMobileMenuOpen(false); // Close main mobile menu
                          setIsWhoWeAreDropdownOpen(false); // Close dropdown
                        }}
                        className="block px-4 py-2 text-[#333333] hover:bg-[#87CEEB] transition-colors duration-200 text-center"
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
              className="hover:text-[#6495ED] transition-colors duration-300"
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to="/our-partners"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#6495ED] transition-colors duration-300"
            >
              Our Partners
            </Link>
          </li>
          <li>
            <Link
              to="/media"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#6495ED] transition-colors duration-300"
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#6495ED] transition-colors duration-300"
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