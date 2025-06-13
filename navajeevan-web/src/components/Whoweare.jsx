import React, { useState, useRef, useEffect } from 'react'; // Import useRef and useEffect
import headerBg from '../assets/images/head1.jpeg';
// Removed: import DonateModal from '../components/DonateModal'; // DonateModal is now only managed by App.jsx
import { Colors } from '../utils/Colors.js'; // Import your Colors utility

// Whoweare component now accepts onDonateClick as a prop
const Whoweare = ({ onDonateClick }) => {
    // Removed: const [showModal, setShowModal] = useState(false); // No longer needed here
    const [inView, setInView] = useState(false); // State for scroll animation
    const sectionRef = useRef(null); // Ref for the section

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleJoinUsClick = (e) => {
        e.preventDefault();
        const joinSection = document.querySelector('#join-us');
        if (joinSection) {
            joinSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={sectionRef} aria-label="About Navajeevan Organisation" className="relative bg-creamy-white py-24 md:py-32 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.15] z-0"
                style={{ backgroundImage: `url(${headerBg})` }}
            ></div>

            <div className={`max-w-6xl mx-auto text-center relative z-10 space-y-12 px-6 md:px-20
                transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                <h2 className={`text-3xl md:text-4xl font-semibold text-forest-green mb-8
                    transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <span className="text-terracotta">30 Years</span> of Impact. <span className="font-light">Miles to Go.</span>
                </h2>

                <div className="w-32 h-0.5 bg-terracotta mx-auto mb-10"></div>

                <div className="max-w-3xl mx-auto space-y-8 text-justify">
                    <p className="text-base md:text-lg text-dark-text leading-relaxed">
                        For over three decades, <span className="font-semibold text-forest-green">Navajeevan</span> has been a beacon of hope, empowering the most excluded communities—including tribals, bonded laborers, Safai Karamcharis, sex workers, and waste pickers. Our unwavering commitment has focused on securing land rights, fostering sustainable livelihoods, and championing human dignity.
                    </p>
                    <p className="text-base md:text-lg text-dark-text leading-relaxed">
                        From liberating individuals from the shackles of enslavement to providing education for children in underserved urban communities and delivering crucial relief during the COVID-19 pandemic, our mission remains rooted in <span className="font-semibold text-forest-green">impactful inclusion</span>.
                    </p>
                </div>

                <div className={`bg-stone-beige font-bold rounded-lg shadow-md p-10 md:p-16 mx-auto max-w-xl
                    transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    hover:shadow-xl hover:border-b-4 hover:border-terracotta transition-all duration-300`}>
                    <h3 className="text-xl md:text-2xl font-bold text-terracotta text-center mb-6">Our Current Focus</h3>
                    <p className="text-base md:text-lg text-dark-text leading-relaxed text-center mb-8">
                        Today, we are reaching out to compassionate donors and dedicated changemakers to join us in a vital mission: bringing essential <span className="font-semibold text-terracotta">education, healthcare, and clean water</span> to waste picker families in Nellore.
                    </p>
                    <p className="text-base md:text-lg text-dark-text leading-relaxed text-center">
                        Together, fueled by compassion and driven by action, we can transform lives and build a brighter future.
                    </p>
                </div>

                {/* Call to action */}
                <div className={`mt-12 flex flex-col items-center space-y-6
                    transition-all duration-1000 ease-out delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-forest-green text-xl font-semibold">
                        Ready to make a difference?{' '}
                        <a
                            href="#join-us"
                            onClick={handleJoinUsClick}
                            className="underline cursor-pointer hover:text-[#1A4032] transition-colors duration-300"
                        >
                            Be their hope. Join us.
                        </a>
                    </p>

                    <button
                        // Now directly calling the onDonateClick prop from App.jsx
                        onClick={onDonateClick}
                        className="bg-terracotta hover:bg-[#B34B30] text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 hover:scale-105"
                    >
                        Donate Now
                    </button>
                </div>
            </div>

            {/* Removed: <DonateModal show={showModal} onClose={() => setShowModal(false)} /> */}
            {/* The DonateModal is now solely managed and rendered in App.jsx */}
        </section>
    );
};

export default Whoweare;
