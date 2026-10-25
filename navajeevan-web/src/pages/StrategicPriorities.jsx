import React from 'react';
import {
  FaBullseye,
  FaChartLine,
  FaUsers,
  FaHandsHelping,
  FaLightbulb,
} from 'react-icons/fa';
import { PageHero, Reveal } from '../components/ui';
import heroImg from '../assets/images/environment.jpeg';

const strategicPrioritiesData = [
  {
    id: 1,
    title: 'Empowering Rural Livelihoods',
    icon: FaHandsHelping,
    description:
      'To foster sustainable economic growth in rural communities through skill development, micro-enterprises, and agricultural advancements, ensuring self-reliance and improved living standards.',
    details: [
      'Promote organic farming practices and modern agricultural techniques.',
      'Establish vocational training centers for local youth and women.',
      'Facilitate market linkages for rural products.',
    ],
  },
  {
    id: 2,
    title: 'Advancing Education & Child Protection',
    icon: FaLightbulb,
    description:
      'To ensure access to quality education for underprivileged children and create safe, nurturing environments free from exploitation and child labor.',
    details: [
      'Provide educational support and scholarships to needy students.',
      'Conduct awareness campaigns against child labor and child marriage.',
      'Establish safe spaces and rehabilitation centers for vulnerable children.',
    ],
  },
  {
    id: 3,
    title: 'Enhancing Community Health & Well-being',
    icon: FaUsers,
    description:
      'To improve health outcomes by increasing access to healthcare services, promoting hygiene, and addressing malnutrition, particularly among women and children.',
    details: [
      'Organize health camps and medical awareness programs.',
      'Promote maternal and child health through specialized initiatives.',
      'Support sanitation and clean drinking water projects.',
    ],
  },
  {
    id: 4,
    title: 'Promoting Environmental Sustainability',
    icon: FaChartLine,
    description:
      'To advocate for and implement practices that protect natural resources, promote biodiversity, and build community resilience to climate change.',
    details: [
      'Initiate tree plantation drives and forest conservation efforts.',
      'Encourage adoption of renewable energy sources.',
      'Conduct climate change adaptation workshops for farmers.',
    ],
  },
  {
    id: 5,
    title: 'Strengthening Governance & Advocacy',
    icon: FaBullseye,
    description:
      'To build strong, transparent, and accountable community institutions and advocate for policy changes that benefit marginalized populations.',
    details: [
      'Capacity building for local self-governance bodies.',
      'Legal literacy and rights awareness programs.',
      'Advocate for pro-poor policies at local and state levels.',
    ],
  },
];

const StrategicPriorities = () => (
  <>
    <PageHero
      eyebrow="Strategic priorities"
      title={<>Clear priorities. <em className="italic text-marigold-300">Lasting change.</em></>}
      intro="Navajeevan Organisation's efforts are guided by a clear set of strategic priorities designed to achieve maximum impact and sustainable change in the communities we serve."
      image={heroImg}
    />

    <section className="section bg-ivory">
      <div className="container-x space-y-5">
        {strategicPrioritiesData.map((priority, i) => {
          const Icon = priority.icon;
          return (
            <Reveal
              key={priority.id}
              className="card group grid gap-8 p-7 transition-shadow duration-500 hover:shadow-lift sm:p-10 lg:grid-cols-[auto_1.2fr_1fr] lg:gap-12"
            >
              <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                <span className="font-display text-5xl font-light text-ink-900/15 transition group-hover:text-marigold-500 lg:text-6xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl text-brand-600">
                  <Icon />
                </span>
              </div>
              <div>
                <h2 className="display-md text-balance">{priority.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{priority.description}</p>
              </div>
              <div className="rounded-2xl bg-sand p-6">
                <h3 className="font-sans text-[11px] font-bold uppercase tracking-eyebrow text-marigold-600">Key focus areas</h3>
                <ul className="mt-4 space-y-3">
                  {priority.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-relaxed text-ink-800">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  </>
);

export default StrategicPriorities;
