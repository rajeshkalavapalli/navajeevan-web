import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiNavigation, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { PageHero, Reveal } from './ui';
import heroImg from '../assets/gallary/WhatsApp Image 2025-06-12 at 10.31.16 AM.jpeg';

const officeAddress = {
  name: 'Navajeevan Organisation',
  street: '24/36 Ambedkar Nagar, Venkatagiri',
  city: 'Venkatagiri (M.D), Tirupati',
  statePin: 'Andhra Pradesh - 524132',
  country: 'India',
  phone: '+91 9440430178',
  email: 'navajeevannlr@gmail.com',
  mapEmbedUrl: `https://www.google.com/maps?q=13.9622142,79.5849775&hl=en&z=14&output=embed`,
};

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${officeAddress.street}, ${officeAddress.city}, ${officeAddress.statePin}, ${officeAddress.country}`
)}`;

const contactCards = [
  { icon: FiPhone, label: 'Call us', value: '+91 94404 30178', href: `tel:${officeAddress.phone.replace(/\s/g, '')}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Message the office', href: 'https://wa.me/919440430178', external: true },
  { icon: FiMail, label: 'Email', value: officeAddress.email, href: `mailto:${officeAddress.email}` },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^\+?\d{1,4}?[\s-]?\d{6,14}$/.test(formData.phone)) {
      errs.phone = 'Enter a valid phone number.';
    }
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    // TODO: send to backend once available
    console.log('Form data submitted:', formData);
    setSent(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const Field = ({ name, label, type = 'text', placeholder, optional, autoComplete }) => (
    <div>
      <label htmlFor={`c-${name}`} className="label">
        {label} {optional && <span className="font-medium normal-case tracking-normal text-muted">(optional)</span>}
      </label>
      <input
        id={`c-${name}`}
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`field ${errors[name] ? '!border-red-400' : ''}`}
        aria-invalid={!!errors[name]}
      />
      {errors[name] && <p className="mt-1.5 text-xs font-medium text-red-600">{errors[name]}</p>}
    </div>
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build change <em className="italic text-marigold-300">together.</em></>}
        intro="Whether you have questions, feedback, or want to collaborate — we'd love to hear from you."
        image={heroImg}
      />

      {/* Quick contact cards */}
      <section className="bg-ivory pt-12 sm:pt-16">
        <div className="container-x grid gap-4 sm:grid-cols-3">
          {contactCards.map(({ icon: Icon, label, value, href, external }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="card card-hover flex items-center gap-4 p-5 sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-marigold-100 text-xl text-marigold-600">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-muted">{label}</span>
                  <span className="mt-0.5 block truncate font-semibold text-ink-900">{value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* Form */}
          <Reveal className="card p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <FiCheckCircle className="text-5xl text-emerald-600" />
                  <h2 className="display-md mt-6">Message received.</h2>
                  <p className="lead mt-3 max-w-sm">Thank you for reaching out. We will get back to you shortly.</p>
                  <button onClick={() => setSent(false)} className="btn-outline mt-8">Send another message</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <span className="eyebrow">Write to us</span>
                    <h2 className="display-md mt-4">Send us a message</h2>
                  </div>
                  {Field({ name: 'name', label: 'Full name', placeholder: 'Your name', autoComplete: 'name' })}
                  {Field({ name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', autoComplete: 'email' })}
                  {Field({ name: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 XXXXX XXXXX', autoComplete: 'tel' })}
                  {Field({ name: 'subject', label: 'Subject', placeholder: 'How can we help?', optional: true })}
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="label">Message</label>
                    <textarea
                      id="c-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here…"
                      rows="5"
                      className={`field resize-none ${errors.message ? '!border-red-400' : ''}`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-dark !py-4 sm:col-span-2">
                    Send message <FiSend />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Office */}
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
              <iframe
                className="h-72 w-full grayscale-[30%] sm:h-80"
                src={officeAddress.mapEmbedUrl}
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
                title="Office Location Map"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600"><FiMapPin /></span>
                  <div>
                    <h3 className="font-display text-xl">{officeAddress.name}</h3>
                    <address className="mt-2 text-sm not-italic leading-relaxed text-muted">
                      {officeAddress.street},<br />
                      {officeAddress.city},<br />
                      {officeAddress.statePin}, {officeAddress.country}
                    </address>
                  </div>
                </div>
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
                  <FiNavigation /> Get directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
