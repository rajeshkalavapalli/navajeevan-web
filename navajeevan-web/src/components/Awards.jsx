import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui';

import achievementImg1 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.10 PM.jpeg';
import achievementImg2 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.03 PM.jpeg';
import achievementImg3 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.06 PM.jpeg';
import achievementImg4 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.11 PM.jpeg';
import achievementImg6 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.36.06 PM.jpeg';

const achievementsData = [
  {
    id: 1,
    title: "Relief & Rehabilitation Excellence Award",
    text: "Awarded by NTR Trust for exceptional and swift efforts during the devastating Kurnool Floods.",
    image: achievementImg1,
    by: "NTR Trust",
    date: null,
    tag: "Disaster Relief"
  },
  {
    id: 2,
    title: "State Level Best Organization Award",
    text: "Received the State Level Best Organization Award for transformative services under HIV/AIDS programs.",
    image: achievementImg2,
    by: "Govt of Andhra Pradesh",
    date: "December 1, 2017",
    tag: "Public Health"
  },
  {
    id: 3,
    title: "District Level Best NGO Award",
    text: "Honored with the District Level Best NGO Award on Independence Day for outstanding community service.",
    image: achievementImg3,
    by: "Minister of Municipal Administration",
    date: "August 15, 2015",
    tag: "Community Service"
  },
  {
    id: 4,
    title: "Indian Social Impact Awards: Top 20",
    text: "Recognized by Brand Honchos as among the 'Top 20' organizations making significant social impact.",
    image: achievementImg4,
    by: "Brand Honchos",
    date: "March 10, 2023",
    tag: "Social Impact"
  },
  {
    id: 6,
    title: "Citation from Delhi District Magistrate Office",
    text: "Received a Citation from Delhi District Magistrate Office for dedicated efforts in various programs.",
    image: achievementImg6,
    by: "Delhi District Magistrate",
    date: "October 11, 2021",
    tag: "Public Service"
  }
];

const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = achievementsData.length;
  const current = achievementsData[currentIndex];

  const go = (dir) => setCurrentIndex((prev) => (prev + dir + total) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, currentIndex]);

  return (
    <section
      className="section overflow-hidden bg-white"
      aria-label="Recognitions and achievements"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Recognition"
          title={<>Honoured for the work, <em className="italic text-muted">humbled by the people.</em></>}
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Image */}
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand shadow-lift"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-900 backdrop-blur">
              {current.tag}
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 font-display text-ink-900">
                <span className="text-6xl font-light">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-lg text-muted">/ {String(total).padStart(2, '0')}</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                  className="mt-8"
                >
                  <h3 className="display-md text-balance">{current.title}</h3>
                  <p className="lead mt-5">{current.text}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
                    <div>
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">Conferred by</dt>
                      <dd className="mt-1 font-semibold text-ink-900">{current.by}</dd>
                    </div>
                    {current.date && (
                      <div>
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">Date</dt>
                        <dd className="mt-1 font-semibold text-ink-900">{current.date}</dd>
                      </div>
                    )}
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between gap-6">
              <div className="flex flex-1 gap-2">
                {achievementsData.map((a, index) => (
                  <button
                    key={a.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative h-14 flex-1 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-16 ${
                      index === currentIndex ? 'border-marigold-500' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                    aria-label={`Show ${a.title}`}
                  >
                    <img src={a.image} alt="" className="h-full w-full object-cover" />
                    {index === currentIndex && (
                      <motion.span
                        key={`${currentIndex}-${paused}`}
                        initial={{ width: paused ? '100%' : '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: paused ? 0 : 7, ease: 'linear' }}
                        className="absolute bottom-0 left-0 h-1 bg-marigold-500"
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => go(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-900/15 transition hover:bg-ink-900 hover:text-white" aria-label="Previous">
                  <FiArrowLeft />
                </button>
                <button onClick={() => go(1)} className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white transition hover:bg-ink-700" aria-label="Next">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementCarousel;
