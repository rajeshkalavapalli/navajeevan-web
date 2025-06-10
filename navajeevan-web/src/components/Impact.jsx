import React from "react";
import CountUp from "react-countup";
import {
    FaMapMarkedAlt,
    FaCity,
    FaHouseUser,
    FaHandsHelping,
    FaVenus,
    FaChild,
    FaUserFriends,
    FaRegSmile,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaMapMarkedAlt size={36} />,
        value: 6318,
        label: "Villages & Urban Localities Reached",
    },
    {
        icon: <FaCity size={36} />,
        value: 270,
        label: "Districts Reached",
    },
    {
        icon: <FaHouseUser size={36} />,
        value: 60704,
        label: "Families Benefitted",
    },
    {
        icon: <FaHandsHelping size={36} />,
        value: 321083,
        label: "People Benefitted",
    },
    {
        icon: <FaVenus size={36} />,
        value: 1283607,
        label: "Women Benefitted",
    },
    {
        icon: <FaChild size={36} />,
        value: 130280,
        label: "Children Benefitted",
    },
    {
        icon: <FaUserFriends size={36} />,
        value: 800458,
        label: "People in Outreach",
    },
    {
        icon: <FaRegSmile size={36} />,
        value: 358058,
        label: "Children in Outreach",
    },
];

const ImpactSection = () => {
    return (
        <section className="bg-[#f0f4f8] text-[#333] py-16">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">OUR IMPACT</h2>

            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-full p-4 shadow-md transition-transform duration-300 hover:scale-105"
                        style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #f97316 100%)' }}
                    >
                        <div className="flex flex-col items-center justify-center bg-white rounded-full w-full h-full p-4">
                            <div className="text-[#1e3a8a] mb-3">{item.icon}</div>
                            <div className="text-xl font-bold text-[#2e2e2e]">
                                <CountUp end={item.value} duration={2} separator="," />
                            </div>
                            <div className="text-sm text-center text-[#525252] mt-2 leading-tight">
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