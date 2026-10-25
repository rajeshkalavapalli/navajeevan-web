import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart, FiBookOpen, FiActivity, FiDroplet } from 'react-icons/fi';
import headerBg from '../assets/images/head1.jpeg';
import communityImg from '../assets/images/head2.jpeg';
import { Reveal } from './ui';

const focusAreas = [
  { icon: FiBookOpen, label: 'Education' },
  { icon: FiActivity, label: 'Healthcare' },
  { icon: FiDroplet, label: 'Clean water' },
];

const Whoweare = ({ onDonateClick, onJoinClick }) => {
  return (
    <section aria-label="About Navajeevan Organisation" className="section relative overflow-hidden bg-ivory">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mr-10 aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:mr-20">
            <img src={headerBg} alt="Navajeevan community meeting" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-10 right-0 w-1/2 overflow-hidden rounded-[1.5rem] border-[6px] border-ivory shadow-lift"
          >
            <img src={communityImg} alt="Community members" className="aspect-square w-full object-cover" loading="lazy" />
          </motion.div>
          <div className="absolute -left-3 top-8 animate-float rounded-2xl bg-ink-900 px-6 py-5 text-white shadow-lift sm:-left-6">
            <div className="font-display text-5xl font-light leading-none text-marigold-300">30</div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Years of<br />impact</div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="display-lg mt-5 text-balance">
              30 years of impact. <span className="italic text-muted">Miles to go.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              For over three decades, <strong className="font-semibold text-ink-900">Navajeevan</strong> has been a
              beacon of hope, empowering the most excluded communities — including tribals, bonded labourers,
              Safai Karamcharis, sex workers, and waste pickers.
            </p>
            <p>
              From liberating individuals from the shackles of enslavement to providing education for children
              in underserved urban communities and delivering crucial relief during the COVID-19 pandemic,
              our mission remains rooted in <strong className="font-semibold text-ink-900">impactful inclusion</strong>.
            </p>
          </Reveal>

          {/* Focus Card */}
          <Reveal delay={0.2} className="relative mt-10 overflow-hidden rounded-3xl bg-sand p-7 sm:p-9">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-marigold-300/40 blur-2xl" />
            <span className="relative text-[11px] font-bold uppercase tracking-eyebrow text-marigold-600">Our current focus</span>
            <p className="relative mt-3 font-display text-xl leading-snug text-ink-900 sm:text-2xl">
              Bringing essential education, healthcare and clean water to waste-picker families in Nellore.
            </p>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {focusAreas.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink-800 shadow-soft">
                  <Icon className="text-brand-500" /> {label}
                </span>
              ))}
            </div>
            <p className="relative mt-6 text-sm leading-relaxed text-muted">
              Together, fuelled by compassion and driven by action, we can transform lives and build a brighter future.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={onDonateClick} className="btn-primary !px-7 !py-3.5">
              <FiHeart /> Donate Now
            </button>
            <button onClick={onJoinClick} className="btn-outline !px-7 !py-3.5">
              Be their hope — volunteer <FiArrowRight />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
