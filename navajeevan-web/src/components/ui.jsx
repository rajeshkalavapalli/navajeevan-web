import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const ease = [0.22, 1, 0.36, 1];

// Fades + lifts its children into view once, when scrolled to.
export const Reveal = ({ children, delay = 0, y = 28, className = '', as = 'div' }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Tag>
  );
};

export const SectionHeading = ({ eyebrow, title, intro, align = 'left', light = false, className = '' }) => (
  <Reveal className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
    {eyebrow && (
      <span className={`eyebrow ${light ? 'eyebrow-light' : ''} ${align === 'center' ? 'justify-center' : ''}`}>
        {eyebrow}
      </span>
    )}
    <h2 className={`display-lg mt-5 text-balance ${light ? 'text-white' : 'text-ink-900'}`}>{title}</h2>
    {intro && <p className={`lead mt-6 ${light ? '!text-white/70' : ''}`}>{intro}</p>}
  </Reveal>
);

// Full-screen hero banner for inner pages, matching the home page hero.
export const PageHero = ({ eyebrow, title, intro, image }) => (
  <>
  <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink-900 text-white grain">
    {image && (
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
    )}
    {/* Same treatment as the home hero: photo across the full width, shaded just enough for the text */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/80 via-ink-950/45 to-ink-950/10" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/50" />
    <div className="container-x pb-24 pt-36 sm:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
        className="max-w-3xl"
      >
        {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
        <h1 className="display-xl mt-6 text-balance">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{intro}</p>}
      </motion.div>
    </div>
    <a
      href="#page-content"
      aria-label="Scroll to content"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-eyebrow text-white/60 transition hover:text-white"
    >
      Scroll
      <FiChevronDown className="animate-bounce text-lg" />
    </a>
  </section>
  <div id="page-content" className="scroll-mt-20" />
  </>
);
