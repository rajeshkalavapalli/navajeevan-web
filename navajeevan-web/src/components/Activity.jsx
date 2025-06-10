import React from 'react';

function Activity() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-4xl">
        {/* Top Section with Enhanced Styling */}
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 py-8 px-8 sm:px-12">
          <h2 className="text-3xl font-extrabold text-indigo-800 mb-4 tracking-tight leading-tight">
            Fostering Progress: Tumkur's Collaborative Loan Initiative
          </h2>
          <p className="text-lg text-gray-700 mb-3">
            <span className="font-semibold text-blue-600">Tumkur, Karnataka</span> – A significant step towards community upliftment on January 30, 2023.
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Community Empowerment
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 ml-2">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-2m-8 5v-2m0-2v-2m0-2v-2" />
              </svg>
              Financial Support
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="py-8 px-8 sm:px-12">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Event Highlights</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            The <span className="font-semibold text-blue-700">Tumkur City Corporation</span>, in a commendable display of
            community focus, collaborated with the dedicated <span className="font-semibold text-indigo-700">Navajeevan Organisation</span>,
            the resourceful handholding agency of <span className="font-semibold text-green-700">NSKFDC</span>, to orchestrate a
            meaningful Loan Mela in Tumkur. This initiative marks a significant stride towards strengthening the socio-economic fabric
            of the region.
          </p>

          <h3 className="text-2xl font-semibold text-green-700 mb-4">Financial Empowerment Through SUY</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            With insightful clarity, <span className="font-semibold text-indigo-700">Mr. Sahadeviah</span> from Navajeevan Organisation
            expertly presented the <span className="font-semibold text-green-700">NSKFDC's Self-Employment Scheme for Urban Scavengers (SUY)</span>.
            This vital scheme is meticulously designed to provide crucial financial assistance and comprehensive guidance, empowering
            aspiring entrepreneurs within these communities to achieve sustainable economic independence and build brighter futures.
          </p>

          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Acknowledgement & Gratitude</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            <span className="font-semibold text-indigo-700">Navajeevan Organisation</span> warmly extends its sincere gratitude to the
            dedicated <span className="font-semibold text-green-700">NSKFDC team</span>, the supportive <span className="font-semibold text-blue-700">Directorate of Municipal
            Administration (DMA) of Karnataka State</span>, and the forward-thinking <span className="font-semibold text-blue-700">Commissioner of Tumkur City Corporation</span>.
            Their invaluable collaboration and unwavering commitment were pivotal in the successful execution of this impactful program.
          </p>

          <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-gray-700 my-8 bg-indigo-50 py-4 rounded-md">
            <p className="text-xl">
              <span className="font-semibold text-indigo-700">"This Loan Mela</span> represents a significant step in our collective
              journey towards empowering the resilient communities of Tumkur," affirmed <span className="font-semibold text-indigo-700">K. Sahadevaiah</span>,
              President of Navajeevan Organisation. "We deeply value the synergistic partnership with <span className="font-semibold text-green-700">NSKFDC</span>,
              <span className="font-semibold text-blue-700">DMA Karnataka</span>, and the <span className="font-semibold text-blue-700">Tumkur City Corporation</span> in
              making this empowering initiative a tangible reality."
            </p>
          </blockquote>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">About <span className="font-bold text-indigo-800">Navajeevan Organisation</span></h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <span className="font-semibold text-indigo-700">Navajeevan Organisation</span> is a committed handholding agency, proudly
              partnering with NSKFDC. Our core mission is to facilitate seamless access to vital financial and developmental schemes,
              thereby fostering the socio-economic advancement of <span className="font-semibold text-teal-700">Safai Karamcharis</span> and other
              deserving communities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">About <span className="font-bold text-green-800">NSKFDC</span></h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              The <span className="font-semibold text-green-700">National Safai Karamcharis Finance and Development Corporation (NSKFDC)</span>,
              a Government of India undertaking, is dedicated to promoting the socio-economic empowerment and overall well-being of
              <span className="font-semibold text-teal-700">Safai Karamcharis</span>, manual scavengers, and their families throughout the nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;