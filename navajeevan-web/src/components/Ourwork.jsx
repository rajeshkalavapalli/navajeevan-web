import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiUsers, FiHeart } from 'react-icons/fi';
import {
  thematicProgramsData,
  targetAudiencesData,
  ongoingProjectsData,
  completedProjectsData
} from '../data/ourworkData';
import { PageHero, SectionHeading, Reveal } from './ui';
import heroImg from '../assets/images/livelihood.jpeg';

const ProgramCard = ({ icon: Icon, title, summary, points, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={(index % 3) * 0.08} className="card card-hover flex flex-col p-7 sm:p-8">
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-600">
          <Icon />
        </span>
        <span className="font-display text-sm text-muted">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="mt-6 font-display text-2xl leading-snug">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{summary}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <ul className="mt-5 space-y-3 border-t border-line pt-5">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold-500" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-ink-900 transition hover:text-brand-600"
        aria-expanded={open}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-900/15">
          {open ? <FiMinus /> : <FiPlus />}
        </span>
        {open ? 'Show less' : 'Key achievements'}
      </button>
    </Reveal>
  );
};

const OurWork = ({ onDonateClick }) => {
  const [showAllOngoing, setShowAllOngoing] = useState(false);
  const ongoing = showAllOngoing ? ongoingProjectsData : ongoingProjectsData.slice(0, 8);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={<>From the margins to the <em className="italic text-marigold-300">mainstream.</em></>}
        intro="Rights-based programmes in livelihoods, education, health, water, land and climate resilience — designed with communities, not for them."
        image={heroImg}
      />

      {/* Thematic Programs */}
      <section className="section bg-ivory">
        <div className="container-x">
          <SectionHeading
            eyebrow="Thematic programmes"
            title="Nine programmes. One promise of dignity."
            intro="Each programme is rooted in decades of fieldwork and measured by the change it creates in people's lives."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {thematicProgramsData.map((item, i) => (
              <ProgramCard key={item.id} index={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="section bg-ink-900 text-white grain">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading
            light
            eyebrow="Who we serve"
            title="The people at the centre of everything."
            intro="We work with those most often left behind — and with the women and children who carry long-term change."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {targetAudiencesData.map(({ icon: Icon, name }, i) => (
              <Reveal key={name} delay={i * 0.04} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-marigold-400/50 hover:bg-white/[0.06]">
                <Icon className="text-2xl text-marigold-300" />
                <p className="mt-4 text-sm font-semibold leading-snug">{name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Ongoing projects" title="In the field, right now." />
            <span className="font-display text-6xl font-light text-ink-900/10">{ongoingProjectsData.length}</span>
          </div>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {ongoing.map((p, i) => (
              <Reveal key={p.name} delay={0.02 * (i % 8)} y={12}>
                <div className="group grid gap-3 py-6 transition-colors sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-8 sm:px-4 sm:hover:bg-ivory">
                  <span className="hidden font-display text-sm text-muted sm:block">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-lg leading-snug text-ink-900 sm:text-xl">{p.name}</h3>
                    <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
                      <FiUsers className="shrink-0 text-brand-500" /> {p.beneficiaries}
                    </p>
                  </div>
                  <span className="justify-self-start rounded-full bg-sand px-4 py-1.5 text-xs font-bold text-ink-800 sm:justify-self-end">
                    {p.supportedBy}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          {ongoingProjectsData.length > 8 && (
            <div className="mt-10 text-center">
              <button onClick={() => setShowAllOngoing(!showAllOngoing)} className="btn-outline">
                {showAllOngoing ? 'Show fewer' : `Show all ${ongoingProjectsData.length} projects`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Completed Projects */}
      <section className="section bg-sand">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Completed projects" title="Milestones along the way." />
          <ol className="relative border-l border-ink-900/15 pl-8">
            {completedProjectsData.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 0.08} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-4 border-sand bg-marigold-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-marigold-600">{p.period}</span>
                <h3 className="mt-2 font-display text-2xl leading-snug">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">
                  {p.beneficiaries} · Supported by <span className="font-semibold text-ink-800">{p.supportedBy}</span>
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-20">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-ink-900 p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="display-md max-w-xl text-balance">Help us take this work further.</h2>
              <p className="mt-3 max-w-lg text-white/65">Every contribution directly funds programmes on the ground.</p>
            </div>
            <button onClick={onDonateClick} className="btn-primary shrink-0 !px-8 !py-4"><FiHeart /> Support our work</button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default OurWork;
