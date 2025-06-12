import React, { useState } from 'react';
import { Colors } from '../utils/Colors.js';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState({ type: '', text: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (!/^\+?\d{1,4}?[\s-]?\d{6,14}$/.test(formData.phone)) {
      errors.phone = 'Enter a valid phone number with optional country code.';
    }

    if (!formData.message.trim()) errors.message = 'Message is required.';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setSubmissionMessage({ type: '', text: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setSubmissionMessage({ type: 'error', text: Object.values(validationErrors).join(' ') });
      return;
    }

    console.log('Form data submitted:', formData);
    setSubmissionMessage({ type: 'success', text: 'Thank you for your message! We will get back to you shortly.' });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitted(false);

    setTimeout(() => {
      setSubmissionMessage({ type: '', text: '' });
    }, 5000);
  };

  const officeAddress = {
    name: "Navajeevan Organisation",
    street: "24/36 Ambedkar nagar, venkatagiri,",
    city: "venkatagiri(M.D), Tirupathi,",
    statePin: "Andhra Pradesh - 524132",
    country: "India",
    phone: "+91 9440430178",
    email: "info@navajeevan.org",
    mapEmbedUrl: `https://www.google.com/maps?q=13.9622142,79.5849775&hl=en&z=14&output=embed`
  };

  return (
    <section className={`bg-[${Colors.LightSectionBg}] py-12 px-4 font-inter`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-extrabold text-[${Colors.PrimaryDarkGreen}] text-center mb-3 leading-tight`}
        >
          Connect With Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg text-center mb-8 max-w-2xl mx-auto opacity-90 text-[${Colors.BodyTextDark}]`}
        >
          We'd love to hear from you! Whether you have questions, feedback, or want to collaborate, please reach out through the form or visit our office.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`w-32 h-0.5 bg-[${Colors.AccentOrange}] mx-auto mb-12`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-100"
          >
            <h3 className={`text-2xl md:text-3xl font-bold text-[${Colors.PrimaryDarkGreen}] mb-4 text-center lg:text-left`}>
              Send Us a Message
            </h3>

            {submissionMessage.text && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 mb-5 rounded-lg text-center font-bold
                  ${submissionMessage.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}
              >
                {submissionMessage.text}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-base font-semibold text-[${Colors.BodyTextDark}] mb-1.5`}>
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${Colors.AccentOrange}] outline-none"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-base font-semibold text-[${Colors.BodyTextDark}] mb-1.5`}>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${Colors.AccentOrange}] outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className={`block text-base font-semibold text-[${Colors.BodyTextDark}] mb-1.5`}>
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${Colors.AccentOrange}] outline-none"
                  placeholder="+CountryCode XXXXXXXXXX"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className={`block text-base font-semibold text-[${Colors.BodyTextDark}] mb-1.5`}>
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${Colors.AccentOrange}] outline-none"
                  placeholder="Inquiry about..."
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-base font-semibold text-[${Colors.BodyTextDark}] mb-1.5`}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${Colors.AccentOrange}] outline-none"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full px-7 py-2.5 rounded-xl text-lg font-semibold bg-[${Colors.PrimaryDarkGreen}] text-[${Colors.CreamyWhite}]
                hover:bg-[${Colors.AccentOrange}] transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[${Colors.AccentOrange}] focus:ring-offset-2`}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col h-full"
          >
            <h3 className={`text-2xl md:text-3xl font-bold text-[${Colors.PrimaryDarkGreen}] mb-4`}>
              Find Our Office
            </h3>
            <div className="text-base text-[${Colors.BodyTextDark}] space-y-2 mb-6">
              <p className="font-bold text-lg">{officeAddress.name}</p>
              <p>{officeAddress.street}</p>
              <p>{officeAddress.city}</p>
              <p>{officeAddress.statePin}</p>
              <p>{officeAddress.country}</p>
              <p><strong>Phone:</strong> <a href={`tel:${officeAddress.phone}`} className={`text-[${Colors.AccentOrange}] hover:underline`}>{officeAddress.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${officeAddress.email}`} className={`text-[${Colors.AccentOrange}] hover:underline`}>{officeAddress.email}</a></p>
            </div>

            {/* Embedded Map */}
            <div className="w-full flex-grow rounded-lg overflow-hidden shadow-lg border border-gray-300 min-h-[250px]">
              <iframe
                src={officeAddress.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>

            <div className="text-center mt-5">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${officeAddress.street}, ${officeAddress.city}, ${officeAddress.statePin}, ${officeAddress.country}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-7 py-2.5 rounded-full text-base font-semibold bg-[${Colors.AccentOrange}] text-[${Colors.CreamyWhite}]
                hover:bg-[${Colors.PrimaryDarkGreen}] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
              >
                Get Directions
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
