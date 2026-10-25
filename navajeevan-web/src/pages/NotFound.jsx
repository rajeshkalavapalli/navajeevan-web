import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => (
  <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink-900 text-white grain">
    <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand-500/25 blur-3xl" />
    <div className="container-x relative pt-24">
      <span className="eyebrow eyebrow-light">Error 404</span>
      <h1 className="display-xl mt-6 max-w-3xl">This path hasn't been walked yet.</h1>
      <p className="mt-6 max-w-lg text-white/70">The page you're looking for may have moved. Let's take you somewhere meaningful.</p>
      <Link to="/" className="btn-primary mt-10"><FiArrowLeft /> Back to home</Link>
    </div>
  </section>
);

export default NotFound;
