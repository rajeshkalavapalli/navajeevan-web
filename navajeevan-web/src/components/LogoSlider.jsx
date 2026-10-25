import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { partners } from "../data/partners";

const LogoRow = ({ items, reverse = false }) => (
  <div className="group flex overflow-hidden mask-fade-x">
    <div
      className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
      style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
    >
      {[...items, ...items].map((partner, idx) => (
        <div
          key={idx}
          className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-6 sm:h-28 sm:w-52"
          title={partner.name}
        >
          <img
            src={partner.logo}
            alt={idx < items.length ? `${partner.name} logo` : ''}
            className="max-h-14 max-w-full object-contain grayscale transition duration-500 hover:grayscale-0 sm:max-h-16"
            style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

const LogoSlider = () => {
  const half = Math.ceil(partners.length / 2);
  return (
    <section className="section overflow-hidden bg-ivory">
      <div className="container-x mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">In good company</span>
          <h2 className="display-md mt-4 max-w-xl text-balance">
            Trusted by {partners.length}+ government, institutional and global partners.
          </h2>
        </div>
        <Link to="/our-partners" className="btn-outline shrink-0 self-start sm:self-auto">
          All partners <FiArrowUpRight />
        </Link>
      </div>
      <div className="space-y-6">
        <LogoRow items={partners.slice(0, half)} />
        <LogoRow items={partners.slice(half)} reverse />
      </div>
    </section>
  );
};

export default LogoSlider;
