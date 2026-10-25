import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiHeart, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { IoCallSharp, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import ChatbotModal from "./ChatbotModal";
import { socialLinks } from "./Topbar";
import { whoWeAreDropdownItems } from "./Navibar";
import navajeevanlogo from '../assets/images/Navajeevan.png';

const exploreLinks = [
  { to: '/', label: 'Home' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/our-partners', label: 'Partners' },
  { to: '/media', label: 'Media Gallery' },
  { to: '/contact-us', label: 'Contact Us' },
];

const Footer = ({ onDonateClick }) => {
  const [showChatOptions, setShowChatOptions] = useState(false);
  const [isChatbotModalOpen, setIsChatbotModalOpen] = useState(false);

  const officePhone = "+919440430178";
  const whatsappLink = `https://wa.me/${officePhone.replace(/\D/g, '')}`;
  const callLink = `tel:${officePhone}`;

  return (
    <>
      <footer className="relative overflow-hidden bg-ink-950 text-white/70">
        {/* Donate band */}
        <div className="container-x">
          <div className="relative -mb-px flex flex-col items-start justify-between gap-8 border-b border-white/10 py-16 sm:py-20 lg:flex-row lg:items-center">
            <h2 className="display-lg max-w-2xl text-balance text-white">
              Be the reason someone <em className="italic text-marigold-300">begins again.</em>
            </h2>
            <button onClick={onDonateClick} className="btn-primary shrink-0 !px-9 !py-4 text-base">
              <FiHeart /> Donate Now
            </button>
          </div>
        </div>

        <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* About */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-0.5">
                <img src={navajeevanlogo} alt="Navajeevan Logo" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-2xl text-white">Navajeevan</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              What started as a dream 30 years ago has grown into a mission for justice and dignity. Tribal
              families now own land; bonded labourers live free. Join us in transforming lives.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-marigold-400 hover:bg-marigold-400 hover:text-ink-950"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-eyebrow text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-marigold-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-eyebrow text-white">Who we are</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {whoWeAreDropdownItems.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-marigold-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-eyebrow text-white">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="mailto:navajeevannlr@gmail.com" className="flex items-center gap-3 transition hover:text-white">
                  <FiMail className="shrink-0 text-marigold-400" /> navajeevannlr@gmail.com
                </a>
              </li>
              <li>
                <a href={callLink} className="flex items-center gap-3 transition hover:text-white">
                  <FiPhone className="shrink-0 text-marigold-400" /> +91 94404 30178
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-marigold-400" />
                <span>24/36 Ambedkar Nagar, Venkatagiri, Tirupati District, Andhra Pradesh – 524132</span>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/45 sm:flex-row">
            <p>© {new Date().getFullYear()} Navajeevan Organisation. All rights reserved.</p>
            <p>Registered Society · 12A · 80G · FCRA · CSR-1</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 transition hover:text-white"
            >
              Back to top <FiArrowUp />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button + Options */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {showChatOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="mb-3 flex flex-col items-end gap-2"
            >
              {[
                { href: whatsappLink, label: 'WhatsApp us', icon: <FaWhatsapp size={18} />, color: 'bg-[#25D366]', external: true },
                { href: callLink, label: 'Call the office', icon: <IoCallSharp size={18} />, color: 'bg-brand-500' },
              ].map((o) => (
                <a
                  key={o.label}
                  href={o.href}
                  {...(o.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-sm font-semibold text-ink-900 shadow-lift transition hover:-translate-y-0.5"
                >
                  {o.label}
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full text-white ${o.color}`}>{o.icon}</span>
                </a>
              ))}
              <button
                onClick={() => { setIsChatbotModalOpen(true); setShowChatOptions(false); }}
                className="flex items-center gap-3 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-sm font-semibold text-ink-900 shadow-lift transition hover:-translate-y-0.5"
              >
                Chat with us
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-white"><BsChatDotsFill size={16} /></span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setShowChatOptions((v) => !v)}
          aria-label={showChatOptions ? 'Close contact options' : 'Open contact options'}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-marigold-500 text-ink-950 shadow-glow transition hover:scale-105"
        >
          {showChatOptions ? <IoClose size={24} /> : <BsChatDotsFill size={22} />}
        </button>
      </div>

      <ChatbotModal isOpen={isChatbotModalOpen} onClose={() => setIsChatbotModalOpen(false)} />
    </>
  );
};

export default Footer;
