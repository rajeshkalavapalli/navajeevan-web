import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiMenu, FiX, FiArrowUpRight, FiHeart } from 'react-icons/fi';
import navajeevanlogo from '../assets/images/Navajeevan.png';
import Topbar, { socialLinks } from './Topbar';

export const whoWeAreDropdownItems = [
  { to: "/who-we-are/about-us", label: "About Us", note: "Our story, vision & mission" },
  { to: "/who-we-are/strategic-priorities", label: "Strategic Priorities", note: "Where we focus next" },
  { to: "/who-we-are/annual-reports", label: "Annual Reports & Audits", note: "Year-by-year accountability" },
  { to: "/who-we-are/legal-documents", label: "Legal & Statutory", note: "12A, 80G, FCRA & more" },
];

const mainLinks = [
  { to: '/our-work', label: 'Our Work' },
  { to: '/our-partners', label: 'Partners' },
  { to: '/media', label: 'Media' },
  { to: '/contact-us', label: 'Contact' },
];

function Navibar({ onDonateClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhoWeAreDropdownOpen, setIsWhoWeAreDropdownOpen] = useState(false);
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsWhoWeAreDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => () => clearTimeout(dropdownTimeout.current), []);

  const openDropdown = () => {
    clearTimeout(dropdownTimeout.current);
    setIsWhoWeAreDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setIsWhoWeAreDropdownOpen(false), 150);
  };

  const solid = scrolled || isMobileMenuOpen;
  const isWhoActive = location.pathname.startsWith('/who-we-are');

  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold transition-colors duration-300 ${
      solid
        ? isActive ? 'text-ink-900' : 'text-ink-700/80 hover:text-ink-900'
        : isActive ? 'text-white' : 'text-white/75 hover:text-white'
    }`;

  const ActiveDot = ({ show }) =>
    show ? <motion.span layoutId="nav-dot" className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-marigold-500" /> : null;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'bg-ivory/90 shadow-[0_1px_0_rgba(11,27,46,0.08)] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className={`overflow-hidden transition-all duration-500 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
          <Topbar />
        </div>

        <nav className="container-x flex h-[72px] items-center justify-between lg:h-20">
          <Link to="/" aria-label="Navajeevan home" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white p-0.5 shadow-soft transition-transform duration-500 group-hover:rotate-[8deg] lg:h-12 lg:w-12">
              <img src={navajeevanlogo} alt="Navajeevan Logo" className="h-full w-full object-contain" />
            </span>
            <span className="leading-none">
              <span className={`block font-display text-lg font-medium tracking-tight transition-colors lg:text-xl ${solid ? 'text-ink-900' : 'text-white'}`}>
                Navajeevan
              </span>
              <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${solid ? 'text-muted' : 'text-white/60'}`}>
                The Hope of New Life
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            <li>
              <NavLink to="/" end className={linkClass}>
                {({ isActive }) => (<>Home<ActiveDot show={isActive} /></>)}
              </NavLink>
            </li>

            <li className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <button
                type="button"
                onClick={() => setIsWhoWeAreDropdownOpen((v) => !v)}
                aria-expanded={isWhoWeAreDropdownOpen}
                className={`${linkClass({ isActive: isWhoActive })} flex items-center gap-1`}
              >
                Who We Are
                <FiChevronDown className={`transition-transform duration-300 ${isWhoWeAreDropdownOpen ? 'rotate-180' : ''}`} />
                <ActiveDot show={isWhoActive} />
              </button>

              <AnimatePresence>
                {isWhoWeAreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4"
                  >
                    <ul className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lift">
                      {whoWeAreDropdownItems.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className="group flex items-start justify-between gap-4 rounded-xl px-4 py-3 transition hover:bg-sand"
                          >
                            <span>
                              <span className="block text-sm font-bold text-ink-900">{item.label}</span>
                              <span className="mt-0.5 block text-xs text-muted">{item.note}</span>
                            </span>
                            <FiArrowUpRight className="mt-1 text-muted opacity-0 transition group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {mainLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={linkClass}>
                  {({ isActive }) => (<>{l.label}<ActiveDot show={isActive} /></>)}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button onClick={onDonateClick} className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              <FiHeart /> Donate
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
                solid ? 'border-ink-900/10 text-ink-900' : 'border-white/30 text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ivory pt-[72px] lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="container-x divide-y divide-line pb-10 pt-6"
            >
              {[{ to: '/', label: 'Home' }, 'who', ...mainLinks].map((l) => (
                <motion.li
                  key={l === 'who' ? 'who' : l.to}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                  {l === 'who' ? (
                    <>
                      <button
                        onClick={() => setMobileWhoOpen((v) => !v)}
                        className="flex w-full items-center justify-between py-5 font-display text-3xl font-light text-ink-900"
                      >
                        Who We Are
                        <FiChevronDown className={`text-xl transition ${mobileWhoOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileWhoOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {whoWeAreDropdownItems.map((item) => (
                              <li key={item.to}>
                                <Link to={item.to} className="block pb-4 pl-1 text-base font-semibold text-muted">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={l.to} className="block py-5 font-display text-3xl font-light text-ink-900">
                      {l.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
            <div className="container-x space-y-6 pb-12">
              <button onClick={() => { setIsMobileMenuOpen(false); onDonateClick(); }} className="btn-primary w-full !py-4">
                <FiHeart /> Donate Now
              </button>
              <div className="flex items-center justify-between text-sm text-muted">
                <a href="tel:+919440430178">+91 94404 30178</a>
                <div className="flex gap-4 text-ink-900">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navibar;
