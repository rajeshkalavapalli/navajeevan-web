import navajeevanlogo from '../assets/images/logo.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState for mobile menu toggle

function Navibar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#3674B5] py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[60px] h-[50px] sm:w-[85px] sm:h-[70px] transition-transform duration-300 ease-in-out hover:scale-110">
          <Link to="/"> {/* Added Link to make the logo clickable */}
            <img src={navajeevanlogo} alt="Navajeevan Logo" className="max-w-full h-auto" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="sm:hidden text-[#FDFAF6] focus:outline-none" aria-label="Menu">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden sm:block menu">
          <ul className="menu-order flex gap-6 text-[#FDFAF6]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/who-we-are">Who We Are</Link></li>
            <li><Link to="/our-work">Our Work</Link></li>
            <li><Link to="/our-partners">Our Partners</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#3674B5] py-4">
          <nav className="menu-mobile">
            <ul className="menu-order-mobile flex flex-col items-center gap-4 text-[#FDFAF6]">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li> {/* Close menu on click */}
              <li><Link to="/who-we-are" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</Link></li>
              <li><Link to="/our-work" onClick={() => setIsMobileMenuOpen(false)}>Our Work</Link></li>
              <li><Link to="/our-partners" onClick={() => setIsMobileMenuOpen(false)}>Our Partners</Link></li>
              <li><Link to="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</Link></li>
              <li><Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navibar;