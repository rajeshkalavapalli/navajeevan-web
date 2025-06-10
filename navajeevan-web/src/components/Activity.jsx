import React from 'react';

function Activity() {
  return (
    <div className="py-16 bg-[#FDFDFD] px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Top Section with Modern Thematic Styling */}
        <div className="bg-gradient-to-br from-[#DCCBA4] to-[#FDFDFD] py-10 px-8 sm:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#214E3F] mb-4 leading-tight tracking-tight">
            Empowering Communities: <span className="text-[#C8553D]">Tumkur's Loan Initiative</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-3">
            <span className="font-semibold text-[#C8553D]">Tumkur, Karnataka</span> – A key step for community upliftment on <span className="font-medium text-[#214E3F]">January 30, 2023</span>.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center rounded-full bg-[#DCCBA4] px-4 py-1.5 text-sm font-semibold text-[#214E3F]">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Community Empowerment
            </span>
            <span className="inline-flex items-center rounded-full bg-[#C8553D] px-4 py-1.5 text-sm font-semibold text-white">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-2m-8 5v-2m0-2v-2m0-2v-2" />
              </svg>
              Financial Support
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="py-10 px-8 sm:px-12">
          <h3 className="text-3xl font-bold text-[#214E3F] mb-6 border-b-2 border-[#DCCBA4] pb-2">Event Highlights</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            The <span className="font-semibold text-[#C8553D]">Tumkur City Corporation</span> and <span className="font-semibold text-[#C8553D]">NSKFDC</span>
            partnered for a successful Loan Mela in Tumkur. This initiative significantly strengthens the region's
            socio-economic foundation.
          </p>

          <h3 className="text-3xl font-bold text-[#214E3F] mb-6 border-b-2 border-[#DCCBA4] pb-2">Financial Empowerment Through SUY</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            <span className="font-semibold text-[#214E3F]">Mr. Sahadeviah</span> effectively presented the <span className="font-semibold text-[#C8553D]">NSKFDC's Self-Employment Scheme for Urban Scavengers (SUY)</span>.
            This crucial scheme provides financial aid and guidance, helping aspiring entrepreneurs in these communities
            achieve sustainable economic independence and build better futures.
          </p>

          <h3 className="text-3xl font-bold text-[#214E3F] mb-6 border-b-2 border-[#DCCBA4] pb-2">Acknowledgements</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            We sincerely thank the <span className="font-semibold text-[#C8553D]">NSKFDC team</span>, the <span className="font-semibold text-[#214E3F]">Directorate of Municipal
            Administration (DMA) of Karnataka State</span>, and the <span className="font-semibold text-[#C8553D]">Commissioner of Tumkur City Corporation</span>.
            Their collaboration was vital for this impactful program's success.
          </p>

          {/* Modernized Blockquote */}
          <blockquote className="border-l-4 border-[#C8553D] pl-6 italic text-gray-700 my-10 bg-[#DCCBA4]/20 py-6 rounded-lg shadow-inner">
            <p className="text-xl leading-relaxed">
              <span className="font-semibold text-[#214E3F] pr-1">"This Loan Mela</span> marks a significant step in empowering
              Tumkur's communities," stated <span className="font-semibold text-[#C8553D]">K. Sahadevaiah</span>. "We deeply value
              the partnership with <span className="font-semibold text-[#214E3F]">NSKFDC</span>, <span className="font-semibold text-[#C8553D]">DMA Karnataka</span>, and
              the <span className="font-semibold text-[#214E3F]">Tumkur City Corporation</span> in making this initiative a reality."
            </p>
          </blockquote>

          {/* Removed "About Navajeevan Organisation" section entirely */}

          <div>
            <h3 className="text-2xl font-bold text-[#214E3F] mb-4">About <span className="text-[#C8553D]">NSKFDC</span></h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              The <span className="font-semibold text-[#214E3F]">National Safai Karamcharis Finance and Development Corporation (NSKFDC)</span>,
              a Government of India undertaking, works to empower <span className="font-semibold text-[#C8553D]">Safai Karamcharis</span>,
              manual scavengers, and their families nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;