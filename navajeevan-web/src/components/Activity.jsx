import React from 'react';
import { motion } from 'framer-motion';

function Activity() {
  return (
    <section className="py-16 bg-[#FDFDFD] px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-[#DCCBA4] to-[#FDFDFD] py-10 px-6 sm:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#214E3F] mb-4 leading-tight tracking-tight">
            Empowering Communities: <span className="text-[#C8553D]">Tumkur's Loan Initiative</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            <span className="font-semibold text-[#C8553D]">Tumkur, Karnataka</span> – A key step for community upliftment on <span className="font-medium text-[#214E3F]">January 30, 2023</span>.
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Community Empowerment', color: '#DCCBA4', iconPath: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
              { label: 'Financial Support', color: '#C8553D', textColor: 'white', iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-2m-8 5v-2m0-2v-2m0-2v-2' }
            ].map(({ label, color, textColor = '#214E3F', iconPath }) => (
              <span key={label} className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold`} style={{ backgroundColor: color, color: textColor }}>
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="py-10 px-6 sm:px-12 space-y-10"
        >
          {/* Sections */}
          {[
            {
              title: 'Event Highlights',
              content: `The Tumkur City Corporation and NSKFDC partnered for a successful Loan Mela in Tumkur. This initiative significantly strengthens the region's socio-economic foundation.`
            },
            {
              title: 'Financial Empowerment Through SUY',
              content: `Mr. Sahadeviah effectively presented the NSKFDC's Self-Employment Scheme for Urban Scavengers (SUY). This crucial scheme provides financial aid and guidance, helping aspiring entrepreneurs in these communities achieve sustainable economic independence and build better futures.`
            },
            {
              title: 'Acknowledgements',
              content: `We sincerely thank the NSKFDC team, the Directorate of Municipal Administration (DMA) of Karnataka State, and the Commissioner of Tumkur City Corporation. Their collaboration was vital for this impactful program's success.`
            }
          ].map(({ title, content }) => (
            <div key={title}>
              <h3 className="text-3xl font-bold text-[#214E3F] mb-4 border-b-2 border-[#DCCBA4] pb-2">{title}</h3>
              <p className="text-lg text-gray-800 leading-relaxed">{content}</p>
            </div>
          ))}

          {/* Blockquote */}
          <blockquote className="border-l-4 border-[#C8553D] pl-6 italic text-gray-700 bg-[#DCCBA4]/20 py-6 rounded-lg shadow-inner">
            <p className="text-xl leading-relaxed">
              <span className="font-semibold text-[#214E3F]">"This Loan Mela</span> marks a significant step in empowering Tumkur's communities," stated <span className="font-semibold text-[#C8553D]">K. Sahadevaiah</span>. "We deeply value the partnership with <span className="font-semibold text-[#214E3F]">NSKFDC</span>, <span className="font-semibold text-[#C8553D]">DMA Karnataka</span>, and the <span className="font-semibold text-[#214E3F]">Tumkur City Corporation</span> in making this initiative a reality."
            </p>
          </blockquote>

          {/* About NSKFDC */}
          <div>
            <h3 className="text-2xl font-bold text-[#214E3F] mb-4">About <span className="text-[#C8553D]">NSKFDC</span></h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              The <span className="font-semibold text-[#214E3F]">National Safai Karamcharis Finance and Development Corporation (NSKFDC)</span>, a Government of India undertaking, works to empower <span className="font-semibold text-[#C8553D]">Safai Karamcharis</span>, manual scavengers, and their families nationwide.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Activity;
