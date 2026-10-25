import head1 from '../assets/images/nsk.jpeg';
import head4 from '../assets/gallary/8.jpeg';
import head3 from '../assets/gallary/16.jpeg';
import head2 from '../assets/images/11.jpeg';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiHeart } from 'react-icons/fi';

const slides = [
  { src: head1, caption: 'Waste-picker children, Nellore — the families at the heart of our current focus' },
  { src: head2, caption: 'Community collectives building rights and livelihoods' },
  { src: head3, caption: 'COVID-19 relief reaching 10,000+ families' },
  // { src: head4, caption: 'Thirty years walking beside excluded communities' },
];

const heroStats = [
  { value: '30+', label: 'Years of service' },
  { value: '6,318', label: 'Villages & localities' },
  { value: '3.2 L+', label: 'People benefitted' },
  { value: '270', label: 'Districts reached' },
];

const ease = [0.22, 1, 0.36, 1];

function Headimages({ onDonateClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrentImageIndex((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, [paused, currentImageIndex]);

  return (
    <section
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Introduction"
    >
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 -z-20"
        >
          <img
            src={slides[currentImageIndex].src}
            alt={slides[currentImageIndex].caption}
            className="h-full w-full animate-kenburns object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/90 via-ink-950/55 to-ink-950/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/50" />

      <div className="container-x flex flex-1 flex-col justify-center pb-10 pt-36 sm:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="eyebrow eyebrow-light"
        >
          Navajeevan Organisation · Since 1996
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="display-xl mt-6 max-w-4xl text-balance"
        >
          Every life deserves <em className="font-normal italic text-marigold-300">dignity</em> — and a new beginning.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          For three decades we have stood with tribal families, bonded labourers, Safai Karamcharis,
          sex workers and waste pickers — turning exclusion into rights, livelihoods and hope.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <button onClick={onDonateClick} className="btn-primary !px-8 !py-4 text-base">
            <FiHeart /> Donate Now
          </button>
          <Link to="/our-work" className="btn-ghost-light !px-8 !py-4 text-base">
            See our work <FiArrowRight />
          </Link>
        </motion.div>
      </div>

      {/* Bottom bar: stats + slide controls */}
      <div className="relative border-t border-white/10 bg-ink-950/40 backdrop-blur-md">
        <div className="container-x grid grid-cols-2 gap-y-6 py-6 sm:py-8 lg:grid-cols-[repeat(4,1fr)_auto] lg:items-center">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + i * 0.1, ease }}
              className={`${i % 2 ? 'pl-6' : ''} lg:pl-0 ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''}`}
            >
              <div className="font-display text-3xl font-light sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/55">{s.label}</div>
            </motion.div>
          ))}

          <div className="col-span-2 flex items-center gap-4 lg:col-span-1 lg:justify-end">
            <p className="line-clamp-1 flex-1 text-xs text-white/50 lg:hidden">{slides[currentImageIndex].caption}</p>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className="group relative h-1 w-8 overflow-hidden rounded-full bg-white/20 sm:w-10"
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === currentImageIndex ? 'true' : 'false'}
                >
                  {index === currentImageIndex && (
                    <motion.span
                      key={`${currentImageIndex}-${paused}`}
                      initial={{ width: paused ? '100%' : '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: paused ? 0 : 7, ease: 'linear' }}
                      className="absolute inset-y-0 left-0 bg-marigold-400"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headimages;
