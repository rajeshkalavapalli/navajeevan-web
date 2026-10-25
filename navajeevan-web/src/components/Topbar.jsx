import React from "react";
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/sahadevaiah.kalavapalli.9', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/navajeevanorganization?utm_source=qr&igsh=ZjcxZ25veWJnOGF1', icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/navajeevan-organization-6ba424105', icon: FaLinkedinIn },
];

// Slim utility strip shown above the main navigation on larger screens.
function Topbar() {
  return (
    <div className="hidden border-b border-white/10 text-white/70 md:block">
      <div className="container-x flex h-10 items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-6">
          <a href="mailto:navajeevannlr@gmail.com" className="flex items-center gap-2 transition hover:text-white">
            <FiMail /> navajeevannlr@gmail.com
          </a>
          <a href="tel:+919440430178" className="flex items-center gap-2 transition hover:text-white">
            <FiPhone /> +91 94404 30178
          </a>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden text-white/50 lg:inline">Registered under 12A · 80G · FCRA</span>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition hover:text-marigold-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
