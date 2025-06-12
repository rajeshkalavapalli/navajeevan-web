import React, { useState, useRef, useEffect } from 'react';
import head1 from '../assets/images/education.jpeg';
import head2 from '../assets/images/health.jpeg';
import head3 from '../assets/images/housing.jpeg';
import head4 from '../assets/images/head4.jpeg';
import head5 from '../assets/images/head5.jpeg';
import head6 from '../assets/images/head6.jpeg';
import head7 from '../assets/images/head7.jpeg';
import head8 from '../assets/images/head8.jpeg';
import head9 from '../assets/images/head9.jpeg';
import head10 from '../assets/images/head10.jpeg';

const enduringCommitments = [
    // Added descriptions to match the text seen in image_c72cda.jpg
    { src: head1, title: "Education", description: "Empowering minds through accessible and quality education, fostering lifelong learning and development." },
    { src: head2, title: "Health", description: "Promoting holistic well-being and ensuring equitable access to essential healthcare services for all communities." },
    { src: head3, title: "Housing", description: "Building sustainable communities by providing safe, affordable, and dignified housing solutions for every family." },
    { src: head4, title: "Environment", description: "Protecting and preserving natural ecosystems, advocating for sustainable practices, and combating climate change." },
    { src: head5, title: "Agriculture", description: "Supporting sustainable farming methods, empowering local farmers, and enhancing food security for rural populations." },
    { src: head6, title: "Human Rights Protection", description: "Advocating for justice, equality, and the fundamental human dignities, ensuring rights are upheld globally." },
    { src: head7, title: "Horticulture", description: "Cultivating green spaces and promoting biodiversity, and enhancing urban and rural landscapes through sustainable horticulture." },
    { src: head8, title: "Disaster Mitigation", description: "Building resilient communities through proactive preparedness, rapid response, and effective recovery strategies for natural disasters." },
    { src: head9, title: "Livelihoods Promotion", description: "Creating diverse opportunities for sustainable income generation, economic empowerment, and self-sufficiency." },
    { src: head10, title: "Capacity Building & Governance", description: "Strengthening local institutions, empowering leadership, and promoting transparent and effective community governance." },
];

function Ensure() {
    const initialDisplayCount = 4; // Display 4 items initially
    // MODIFIED: Use a boolean `showAll` state to manage the display instead of `displayCount` directly
    const [showAll, setShowAll] = useState(false); 
    const [inView, setInView] = useState(false); // State to trigger section animations
    const sectionRef = useRef(null); // Ref to observe the section's visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Trigger once when section enters view
                }
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // NEW: Determine which commitments to display based on 'showAll' state
    const displayedCommitments = showAll ? enduringCommitments : enduringCommitments.slice(0, initialDisplayCount);

    // NEW: Function to toggle between showing all and showing initial count
    const handleToggleDisplay = () => {
        setShowAll(prev => !prev);
    };

    return (
        // Section background: Creamy white (#FDFDFD) for consistency with theme
        <section ref={sectionRef} className="bg-[#FDFDFD] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className={`text-center mb-16 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#214E3F] mb-4 leading-tight">
                    Our <span className="text-[#C8553D]">Enduring</span> Commitments
                </h2>
                <p className="text-lg md:text-xl text-[#333333] max-w-3xl mx-auto mb-8">
                    Dedicated to fostering profound and lasting change across vital areas of community development.
                </p>
                <div className="w-24 h-1.5 bg-[#C8553D] mx-auto rounded-full"></div>
            </div>

            {/* Grid for commitment tiles - maintains the standard grid as in your images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto perspective-1000">
                {displayedCommitments.map((item, index) => ( // Use displayedCommitments here
                    <div
                        key={item.title}
                        // Apply 'group' class for advanced hover effects on child elements
                        // Entry animation (pop-in with subtle rotation) and staggered delay
                        className={`group relative flex flex-col rounded-2xl overflow-hidden shadow-xl
                            transition-all duration-700 ease-out transform-gpu cursor-pointer
                            
                            ${inView ? `opacity-100 scale-100 rotate-x-0 rotate-y-0 delay-${index * 120}` : 'opacity-0 scale-80 rotate-x-10 rotate-y-10'}
                            
                            /* Advanced Hover Effects */
                            hover:scale-103 hover:shadow-2xl hover:ring-4 hover:ring-offset-4 hover:ring-[#DCCBA4] hover:ring-offset-[#FDFDFD] /* Stone Beige ring */
                            hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-2 /* Subtle 3D tilt and lift */
                        `}
                    >
                        {/* Image section with gradient overlay */}
                        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 group-hover:brightness-75" /* More pronounced zoom and subtle darkening on hover */
                            />
                            {/* Thematic gradient overlay on image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#214E3F] via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                        </div>

                        {/* Content section */}
                        <div className="flex flex-col flex-grow p-6 bg-[#214E3F] text-white"> {/* Forest Green background for text area */}
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-[#C8553D] transition-colors duration-300"> {/* Terracotta on hover */}
                                {item.title}
                            </h3>
                            {/* Short description for each commitment */}
                            <p className="text-sm opacity-80 leading-relaxed">
                                {item.description} {/* Displaying the description from the array */}
                            </p>
                        </div>

                        {/* Optional: Add a subtle overlay for extra dynamic effect on hover */}
                        <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#C8553D] transition-border duration-300 pointer-events-none rounded-2xl"></div>
                    </div>
                ))}
            </div>

            {/* "Load More / Show Less" button */}
            {/* The button is always shown if there are more items than `initialDisplayCount` */}
            {enduringCommitments.length > initialDisplayCount && (
                <div className="text-center mt-16">
                    <button
                        // MODIFIED: Call the new `handleToggleDisplay` function
                        onClick={handleToggleDisplay}
                        className="bg-[#C8553D] hover:bg-[#B34B30] text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {/* MODIFIED: Dynamic button text */}
                        {showAll ? 'Show Less Commitments' : 'Load More Commitments'}
                    </button>
                </div>
            )}
        </section>
    );
}

export default Ensure;