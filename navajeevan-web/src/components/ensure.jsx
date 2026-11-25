import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SectionHeading } from './ui';

import agriculture from '../assets/images/agriculture.jpeg';
import Education from '../assets/images/education.jpeg';
import capacity from '../assets/images/capacity.jpeg';
import disaster from '../assets/images/disaster.jpeg';
import environment from '../assets/images/environment.jpeg';
import housing from '../assets/images/housing.jpeg';
import health from '../assets/images/health.jpeg';
import livelihood from '../assets/images/livelihood.jpeg';
import humanrights from '../assets/images/humanrights.jpeg';

const enduringCommitments = [
  { src: Education, title: "Education", description: "Empowering minds through accessible and quality education." },
  { src: health, title: "Health", description: "Promoting holistic well-being and access to essential healthcare." },
  { src: housing, title: "Housing", description: "Providing safe, affordable, and dignified housing solutions." },
  { src: environment, title: "Environment", description: "Protecting ecosystems and advocating for sustainable practices." },
  { src: agriculture, title: "Agriculture", description: "Empowering farmers and enhancing rural food security." },
  { src: humanrights, title: "Human Rights", description: "Upholding justice, equality, and fundamental dignities." },
  { src: disaster, title: "Disaster Mitigation", description: "Preparedness and resilience for natural disaster recovery." },
  { src: livelihood, title: "Livelihoods", description: "Enabling economic empowerment and sustainable income." },
  { src: capacity, title: "Capacity Building", description: "Empowering leadership and transparent community governance." },
];

const Ensure = () => {
  const initialDisplayCount = 6;
  const [showAll, setShowAll] = useState(false);
  const displayedCommitments = showAll ? enduringCommitments : enduringCommitments.slice(0, initialDisplayCount);

  return (
    <section className="section relative overflow-hidden bg-ink-900 text-white grain">
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="container-x relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            light
            eyebrow="What we stand for"
            title={<>Our <em className="italic text-marigold-300">enduring</em> commitments</>}
            intro="Dedicated to fostering profound and lasting change across vital areas of community development."
          />
          <Link to="/our-work" className="btn-ghost-light shrink-0 self-start lg:self-auto">
            Explore programmes <FiArrowUpRight />
          </Link>
        </div>

        <motion.div layout className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          <AnimatePresence>
            {displayedCommitments.map((item, index) => (
              <motion.article
                layout
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-800 sm:aspect-[3/4]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent transition-opacity duration-500 group-hover:from-ink-950 group-hover:via-ink-950/70" />
                <span className="absolute left-6 top-6 font-display text-sm text-white/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-normal sm:text-3xl">{item.title}</h3>
                  <div className="grid transition-all duration-500 [grid-template-rows:1fr] lg:[grid-template-rows:0fr] lg:group-hover:[grid-template-rows:1fr]">
                    <p className="overflow-hidden text-sm leading-relaxed text-white/75">
                      <span className="block pt-3">{item.description}</span>
                    </p>
                  </div>
                  <span className="mt-5 block h-px w-12 bg-marigold-400 transition-all duration-500 group-hover:w-24" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {enduringCommitments.length > initialDisplayCount && (
          <div className="mt-14 text-center">
            <button onClick={() => setShowAll(!showAll)} className="btn-primary">
              {showAll ? 'Show fewer' : `View all ${enduringCommitments.length} commitments`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ensure;
