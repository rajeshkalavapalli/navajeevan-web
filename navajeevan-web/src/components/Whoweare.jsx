import React, { useState } from 'react';
import headerBg from '../assets/images/head1.jpeg';
import DonateModal from '../components/DonateModal'; // Make sure this modal component exists and is styled

const Whoweare = () => {
    const [showModal, setShowModal] = useState(false);

    const handleJoinUsClick = (e) => {
        e.preventDefault();
        const joinSection = document.querySelector('#join-us');
        if (joinSection) {
            joinSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section aria-label="About Navajeevan Organisation" className="relative bg-white py-24 md:py-32 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.15] z-0"
                style={{ backgroundImage: `url(${headerBg})` }}
            ></div>

            <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12 px-6 md:px-20">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-8">
                    <span className="text-[#3498db]">30 Years</span> of Impact. <span className="font-light">Miles to Go.</span>
                </h2>
                <div className="w-32 h-0.5 bg-[#3498db] mx-auto mb-10"></div>
                <div className="max-w-3xl mx-auto space-y-8 text-justify">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        For over three decades, <span className="font-semibold text-[#2c3e50]">Navajeevan</span> has been a beacon of hope, empowering the most excluded communities—including tribals, bonded laborers, Safai Karamcharis, sex workers, and waste pickers. Our unwavering commitment has focused on securing land rights, fostering sustainable livelihoods, and championing human dignity.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        From liberating individuals from the shackles of enslavement to providing education for children in underserved urban communities and delivering crucial relief during the COVID-19 pandemic, our mission remains rooted in <span className="font-semibold text-[#2c3e50]">impactful inclusion</span>.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-10 md:p-16 mx-auto max-w-xl">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#2c3e50] text-center mb-6">Our Current Focus</h3>
                    <p className="text-base md:text-lg text-[#555] leading-relaxed text-center mb-8">
                        Today, we are reaching out to compassionate donors and dedicated changemakers to join us in a vital mission: bringing essential <span className="font-semibold text-[#27ae60]">education, healthcare, and clean water</span> to waste picker families in Nellore.
                    </p>
                    <p className="text-base md:text-lg text-[#555] leading-relaxed text-center">
                        Together, fueled by compassion and driven by action, we can transform lives and build a brighter future.
                    </p>
                </div>

                {/* Call to action */}
                <div className="mt-12 flex flex-col items-center space-y-6">
                    <p className="text-[#27ae60] text-xl font-semibold">
                        Ready to make a difference?{' '}
                        <a
                            href="#join-us"
                            onClick={handleJoinUsClick}
                            className="underline cursor-pointer hover:text-[#1e8449] transition-colors duration-300"
                        >
                            Be their hope. Join us.
                        </a>
                    </p>

                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#27ae60] hover:bg-[#1e8449] text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
                    >
                        Donate Now
                    </button>
                </div>
            </div>

            {/* Donate Modal */}
            <DonateModal show={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
};

export default Whoweare;
