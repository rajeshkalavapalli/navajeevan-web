import React, { useRef, useEffect, useState } from "react"; // Import useRef and useState
import CountUp from "react-countup";
import {
    FaMapMarkedAlt, FaCity, FaHouseUser, FaHandsHelping, FaVenus, FaChild, FaUserFriends, FaRegSmile,
} from "react-icons/fa";

const stats = [
    { icon: <FaMapMarkedAlt size={36} />, value: 6318, label: "Villages & Urban Localities Reached" },
    { icon: <FaCity size={36} />, value: 270, label: "Districts Reached" },
    { icon: <FaHouseUser size={36} />, value: 60704, label: "Families Benefitted" },
    { icon: <FaHandsHelping size={36} />, value: 321083, label: "People Benefitted" },
    { icon: <FaVenus size={36} />, value: 1283607, label: "Women Benefitted" },
    { icon: <FaChild size={36} />, value: 130280, label: "Children Benefitted" },
    { icon: <FaUserFriends size={36} />, value: 800458, label: "People in Outreach" },
    { icon: <FaRegSmile size={36} />, value: 358058, label: "Children in Outreach" },
];

const ImpactSection = () => {
    // State to track if the section is in view for animations
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Disconnect after it comes into view once
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.2, // Trigger when 20% of the section is visible
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

    return (
        <section ref={sectionRef} className="bg-[#FDFDFD] py-16">
            {/* Heading can also have an entry animation */}
            <h2 className={`text-4xl font-bold text-center text-[#214E3F] mb-12
                transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                OUR IMPACT
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        // Add entry animation classes here, staggered by index
                        className={`relative rounded-full p-4 shadow-md transition-all duration-700 ease-out
                            hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-[#C8553D]
                            ${inView ? `opacity-100 translate-y-0 delay-${idx * 150}` : 'opacity-0 translate-y-10'}`} // Staggered entry
                        style={{ background: 'linear-gradient(135deg, #214E3F 0%, #2D6C5A 50%, #C8553D 100%)' }}
                    >
                        <div className="flex flex-col items-center justify-center bg-[#FDFDFD] rounded-full w-full h-full p-4">
                            <div className="text-[#214E3F] mb-3">{item.icon}</div>
                            <div className="text-xl font-bold text-[#333333]">
                                {/* CountUp starts when it's in view */}
                                {inView && <CountUp end={item.value} duration={2} separator="," />}
                            </div>
                            <div className="text-sm text-center text-[#333333] mt-2 leading-tight">
                                {item.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImpactSection;