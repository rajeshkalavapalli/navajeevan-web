import React from 'react';
import Vision from '../assets/images/head4.jpeg';
import Ourcommunity from '../assets/images/head7.jpeg';
import Mission from '../assets/images/head8.jpeg';
import { FaLeaf, FaHandHoldingHeart, FaPeopleCarry } from 'react-icons/fa';
import { Reveal, SectionHeading } from '../components/ui';

const blocks = [
  {
    icon: FaLeaf,
    kicker: 'Our genesis',
    title: 'Born in 1996 from a simple, stubborn belief.',
    image: Vision,
    body: (
      <>
        <p>
          Born in 1996 from the passion of seasoned development practitioners and human rights advocates,
          Navajeevan was formed under the leadership of Mr. K. Sahadevaiah. It started with one goal: transform
          lives through access, rights, and dignity.
        </p>
        <p>Our journey has always centred around justice, land rights, and sustainable community development.</p>
      </>
    ),
  },
  {
    icon: FaHandHoldingHeart,
    kicker: 'Our mission',
    title: 'Communities leading their own transformation.',
    image: Mission,
    body: (
      <>
        <p>
          We empower the marginalised through inclusive participation, education, and livelihood opportunities.
          We aim to facilitate lasting change by enabling communities to lead their own transformation journeys.
        </p>
        <p>At every step, we promote rights-based advocacy, dignity, and sustainability.</p>
      </>
    ),
  },
  {
    icon: FaPeopleCarry,
    kicker: 'Our community',
    title: 'We stand beside the most vulnerable.',
    image: Ourcommunity,
    body: (
      <>
        <ul className="grid gap-2 sm:grid-cols-2">
          {['Dalits and Adivasis', 'Fisherfolk and Rural Artisans', 'Waste Pickers, Safai Karamcharis & Sanitation Workers', 'Minorities and the Urban Poor'].map((c) => (
            <li key={c} className="flex gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink-800 shadow-soft">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold-500" /> {c}
            </li>
          ))}
        </ul>
        <p>
          At the centre of our work are <strong className="font-semibold text-ink-900">women and children</strong> — the
          foundation of long-term transformation.
        </p>
      </>
    ),
  },
];

const OurVision = () => (
  <section className="section bg-ivory">
    <div className="container-x">
      <SectionHeading
        align="center"
        eyebrow="Our vision"
        title={<>A world rooted in <em className="italic text-muted">dignity and equity.</em></>}
        intro="Where every individual, regardless of background, has a voice and fair access to resources. A society where inclusion is a right, not a privilege."
      />

      <div className="mt-20 space-y-24 lg:space-y-32">
        {blocks.map(({ icon: Icon, kicker, title, image, body }, i) => (
          <div key={kicker} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className={i % 2 ? 'lg:order-2' : ''}>
              <div className="relative">
                <div className={`absolute -inset-3 rounded-[2.25rem] bg-sand ${i % 2 ? '-rotate-2' : 'rotate-2'}`} />
                <img src={image} alt={kicker} loading="lazy" className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-eyebrow text-marigold-600">
                <Icon className="text-base" /> {kicker}
              </span>
              <h3 className="display-md mt-4 text-balance">{title}</h3>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">{body}</div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurVision;
