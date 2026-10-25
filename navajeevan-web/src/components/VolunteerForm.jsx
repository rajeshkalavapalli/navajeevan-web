import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiBookOpen, FiHeart } from 'react-icons/fi';
import { Reveal } from './ui';

const statesInIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir",
  "Ladakh", "Puducherry", "Chandigarh", "Andaman and Nicobar Islands", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep"
];

const perks = [
  { icon: FiBookOpen, text: 'Teach at learning centres for waste-picker children' },
  { icon: FiHeart, text: 'Support health camps and relief drives' },
  { icon: FiUsers, text: 'Mentor youth and women entrepreneurs' },
];

const fields = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
  { name: 'contact', label: 'Mobile number', type: 'tel', placeholder: '+91 XXXXX XXXXX', autoComplete: 'tel' },
  { name: 'district', label: 'District', type: 'text', placeholder: 'Your district' },
  { name: 'area', label: 'Area / Locality', type: 'text', placeholder: 'Your area or locality' },
];

const VolunteerForm = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', state: '', district: '', area: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contact, state, district, area } = formData;
    if (!name || !contact || !state || !district || !area) {
      setError('Please fill in all required fields.');
      return;
    }
    // TODO: send to backend once available
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', contact: '', state: '', district: '', area: '' });
  };

  return (
    <section className="section scroll-mt-20 bg-sand">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">Volunteer with us</span>
          <h2 className="display-lg mt-5 text-balance">Lend your hands. <em className="italic text-muted">Change a story.</em></h2>
          <p className="lead mt-6 max-w-md">
            Join a growing community of changemakers walking beside the families we serve. Tell us where you
            are and our team will reach out with opportunities near you.
          </p>
          <ul className="mt-10 space-y-4">
            {perks.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 text-sm font-semibold text-ink-800">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-500 shadow-soft"><Icon /></span>
                {text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="card p-6 sm:p-10">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex h-full flex-col items-center justify-center py-10 text-center">
              <FiCheckCircle className="text-5xl text-emerald-600" />
              <h3 className="display-md mt-6">Thank you for stepping forward.</h3>
              <p className="lead mt-3 max-w-sm">Our volunteer coordinator will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="btn-outline mt-8">Register someone else</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <h3 className="font-display text-2xl sm:col-span-2">Volunteer registration</h3>
              {fields.slice(0, 2).map((f) => (
                <div key={f.name}>
                  <label htmlFor={`v-${f.name}`} className="label">{f.label} <span className="text-marigold-600">*</span></label>
                  <input id={`v-${f.name}`} {...f} label={undefined} value={formData[f.name]} onChange={handleChange} className="field" required />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="v-state" className="label">State <span className="text-marigold-600">*</span></label>
                <select id="v-state" name="state" value={formData.state} onChange={handleChange} className="field" required>
                  <option value="">Select your state</option>
                  {statesInIndia.map((state) => <option key={state} value={state}>{state}</option>)}
                </select>
              </div>
              {fields.slice(2).map((f) => (
                <div key={f.name}>
                  <label htmlFor={`v-${f.name}`} className="label">{f.label} <span className="text-marigold-600">*</span></label>
                  <input id={`v-${f.name}`} {...f} label={undefined} value={formData[f.name]} onChange={handleChange} className="field" required />
                </div>
              ))}
              {error && <p className="text-sm font-medium text-red-600 sm:col-span-2">{error}</p>}
              <button type="submit" className="btn-dark !py-4 sm:col-span-2">Register as a volunteer</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default VolunteerForm;
