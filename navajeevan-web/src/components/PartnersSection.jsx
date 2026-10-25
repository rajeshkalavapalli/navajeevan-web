import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PageHero, SectionHeading, Reveal } from "./ui";
import { partners } from "../data/partners";
import heroImg from "../assets/images/agriculture.jpeg";

const PartnersSection = () => {
  const [filter, setFilter] = useState('All');
  const types = useMemo(() => ['All', ...new Set(partners.map((p) => p.type))], []);
  const visible = filter === 'All' ? partners : partners.filter((p) => p.type === filter);

  return (
    <>
      <PageHero
        eyebrow="Our partners"
        title={<>Change is a <em className="italic text-marigold-300">collective</em> act.</>}
        intro="Trusted organisations collaborating with us to create lasting impact — from government departments and national institutions to global foundations."
        image={heroImg}
      />

      <section className="section bg-ivory">
        <div className="container-x">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={`${partners.length} partners`} title="Our valued partners" />
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
                    filter === t ? 'border-ink-900 bg-ink-900 text-white' : 'border-line bg-white text-ink-800 hover:border-ink-900/40'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.div
                  layout
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group card flex flex-col p-5 transition-shadow duration-500 hover:shadow-lift sm:p-6"
                >
                  <div className="flex h-24 items-center justify-center sm:h-28">
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="max-h-full max-w-[80%] object-contain grayscale transition duration-500 group-hover:grayscale-0"
                      style={p.scale ? { transform: `scale(${p.scale})` } : undefined}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 border-t border-line pt-4">
                    <p className="text-sm font-bold leading-snug text-ink-900">{p.name}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-muted">{p.type}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="display-md max-w-xl text-balance">Partner with Navajeevan</h2>
              <p className="lead mt-3 max-w-xl">CSR, institutional and programme partnerships — let's design impact together.</p>
            </div>
            <Link to="/contact-us" className="btn-dark shrink-0 !px-8 !py-4">Start a conversation <FiArrowRight /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
