import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui";

const stats = [
  { value: 6318, label: "Villages & urban localities reached" },
  { value: 270, label: "Districts reached" },
  { value: 60704, label: "Families benefitted" },
  { value: 321083, label: "People benefitted" },
  { value: 1283607, label: "Women benefitted" },
  { value: 130280, label: "Children benefitted" },
  { value: 800458, label: "People in outreach" },
  { value: 358058, label: "Children in outreach" },
];

const ImpactSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section bg-sand" aria-label="Impact statistics">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <SectionHeading
            eyebrow="Our impact"
            title={<>Numbers that carry <em className="italic">names</em>, faces and futures.</>}
          />
          <p className="lead max-w-xl lg:justify-self-end">
            Each figure is a family that found a livelihood, a child who returned to school, or a woman
            whose voice now leads her community.
          </p>
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-2 border-l border-t border-ink-900/10 lg:grid-cols-4">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.07, duration: 0.7 }}
              className="group relative border-b border-r border-ink-900/10 p-5 transition-colors duration-500 hover:bg-white sm:p-8 lg:p-10"
            >
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-marigold-500 transition-all duration-500 group-hover:w-full" />
              <div className="font-display text-3xl font-light tabular-nums text-ink-900 sm:text-5xl">
                {inView ? <CountUp end={item.value} duration={2.4} separator="," /> : 0}
              </div>
              <div className="mt-3 text-xs font-semibold leading-snug text-muted sm:text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
