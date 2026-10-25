// src/pages/AboutUsPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiHeart, FiCheck } from 'react-icons/fi';
import upNskf from '../assets/homeimages/nskf.png';
import image11 from '../assets/images/image11.png';
import presidentImage from '../assets/homeimages/president.png';
import heroImg from '../assets/images/head1.jpeg';
import OurVision from './OurVision';
import { PageHero, Reveal } from '../components/ui';

const journey = [
  'Tribal communities cultivating their own land',
  'Bonded labourers now dignified landowners',
  'Safai Karamcharis becoming entrepreneurs',
  'Sex workers regaining dignity via APDSC',
];

const AboutUsPage = ({ onDonateClick }) => {
  const { ref: counterRef, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Empowering the <em className="italic text-marigold-300">unheard.</em></>}
        intro="For over three decades, Navajeevan has been a voice for the voiceless, transforming forgotten communities across South India."
        image={heroImg}
      />

      {/* Inspirational Quote */}
      <section className="bg-ivory py-20 sm:py-28">
        <Reveal className="container-x text-center">
          <blockquote className="mx-auto max-w-4xl font-display text-3xl font-light italic leading-snug text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            “Hope is not a feeling, it's a choice — one we make for every soul we lift.”
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-muted">Let this be your reason to walk with us.</p>
        </Reveal>
      </section>

      {/* President Section */}
      <section className="bg-ivory pb-20 sm:pb-28">
        <div className="container-x">
          <Reveal className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-ink-900 p-8 text-white sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-16 lg:p-16">
            <div className="mx-auto text-center lg:mx-0">
              <div className="mx-auto h-48 w-48 overflow-hidden rounded-full ring-4 ring-marigold-400/40 ring-offset-4 ring-offset-ink-900 sm:h-56 sm:w-56">
                <img src={presidentImage} alt="K. Sahadevaiah" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-6 font-display text-2xl">K. Sahadevaiah</h3>
              <p className="mt-1 text-sm text-white/60">President, Navajeevan Organisation</p>
            </div>
            <div>
              <span className="eyebrow eyebrow-light">A personal message</span>
              <p className="mt-6 font-display text-2xl font-light leading-snug sm:text-3xl">
                “Every act of kindness weaves into a tapestry of transformed lives. Your partnership creates a legacy
                of dignity that resonates for generations. Join us in this journey of profound impact.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow">Our journey</span>
            <h2 className="display-lg mt-5 text-balance">Over 30 years of transformation.</h2>
            <ul className="mt-10 space-y-4">
              {journey.map((j) => (
                <li key={j} className="flex items-center gap-4 border-b border-line pb-4 text-base font-semibold text-ink-800">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marigold-100 text-marigold-600"><FiCheck /></span>
                  {j}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-marigold-500 pl-5 font-display text-lg italic text-muted">
              We are just getting started. Many more await justice and dignity.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={upNskf} alt="Navajeevan with NSKFDC" className="w-full rounded-[2rem] shadow-lift" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Animated Counter Section */}
      <section ref={counterRef} className="relative overflow-hidden bg-marigold-500 py-20 text-ink-950 sm:py-24">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-marigold-300 blur-3xl" />
        <div className="container-x relative grid items-center gap-8 lg:grid-cols-2">
          <div className="font-display text-7xl font-light tabular-nums sm:text-8xl lg:text-9xl">
            +{inView ? <CountUp end={10000} duration={2.2} separator="," /> : 0}
          </div>
          <div>
            <h2 className="display-md">Families reached during the pandemic</h2>
            <p className="mt-4 max-w-md text-ink-900/75">
              With unwavering commitment, we reached over 10,000 families, delivering essential aid and hope during the pandemic.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="section bg-ivory">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <span className="eyebrow">Today</span>
            <h2 className="display-lg mt-5 text-balance">New challenges, renewed purpose.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Education for children', 'Healthcare services', 'Clean water access'].map((t) => (
                <span key={t} className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink-800 shadow-soft">{t}</span>
              ))}
            </div>
            <p className="lead mt-8">
              Recognised by NSKFDC as the South India support organisation for Safai Karamcharis.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <img src={image11} alt="Our current focus" className="w-full rounded-[2rem] shadow-lift" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Our Vision Section */}
      <div className="border-t border-line">
        <OurVision />
      </div>

      {/* Final CTA Section */}
      <section className="bg-ivory pb-24">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-900 px-8 py-14 text-center text-white sm:px-16 sm:py-20 grain">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-marigold-500/20 blur-3xl" />
            <h2 className="display-lg relative text-balance">Let's build futures together.</h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-white/70">
              Your support brings dignity, education, and livelihood to those who need it most.
            </p>
            <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <button onClick={onDonateClick} className="btn-primary !px-8 !py-4"><FiHeart /> Donate Now</button>
              <Link to="/contact-us" className="btn-ghost-light !px-8 !py-4">Join our mission <FiArrowRight /></Link>
            </div>
            <p className="relative mt-8 font-display text-sm italic text-white/50">— With hope & gratitude, President, Navajeevan</p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
