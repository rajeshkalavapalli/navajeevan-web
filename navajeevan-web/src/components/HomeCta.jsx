import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiArrowRight } from 'react-icons/fi';
import presidentImage from '../assets/homeimages/president.png';
import bg from '../assets/gallary/13.jpeg';
import { Reveal } from './ui';

// President's message + closing call to action on the home page.
const HomeCta = ({ onDonateClick, onJoinClick }) => (
  <section className="relative isolate overflow-hidden bg-ink-950 text-white grain">
    <img src={bg} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" loading="lazy" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950/95 via-ink-950/75 to-ink-950/40" />

    <div className="container-x section grid items-center gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
      <Reveal className="mx-auto lg:mx-0">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full border border-marigold-400/40" />
          <div className="h-44 w-44 overflow-hidden rounded-full ring-4 ring-white/10 sm:h-56 sm:w-56">
            <img src={presidentImage} alt="K. Sahadevaiah, President" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="text-center lg:text-left">
        <span className="font-display text-7xl leading-none text-marigold-400">“</span>
        <blockquote className="-mt-6 font-display text-2xl font-light leading-snug text-balance sm:text-3xl lg:text-4xl">
          Every act of kindness weaves into a tapestry of transformed lives. Your partnership creates a legacy
          of dignity that resonates for generations.
        </blockquote>
        <p className="mt-6 text-sm font-semibold text-white/60">
          <span className="text-white">K. Sahadevaiah</span> · Founder & President, Navajeevan Organisation
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <button onClick={onDonateClick} className="btn-primary !px-8 !py-4">
            <FiHeart /> Make a donation
          </button>
          <button onClick={onJoinClick} className="btn-ghost-light !px-8 !py-4">
            Become a volunteer
          </button>
          <Link to="/who-we-are/about-us" className="btn !px-4 text-white/70 hover:text-white">
            Our story <FiArrowRight />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default HomeCta;
