import {
    FaGraduationCap, FaHandsHelping, FaFemale, FaMedkit, FaWater,
    FaSeedling, FaHome, FaUsers, FaChartLine, FaNetworkWired, FaCloudSun,
    FaChild, FaUserMd, FaFish, FaMale, FaWheelchair
} from 'react-icons/fa';
import { GiFarmTractor } from "react-icons/gi";

export const thematicProgramsData = [
    {
        id: 'waste-pickers',
        title: "Entrepreneurship & Livelihoods for Waste Pickers",
        icon: FaChartLine, // Storing component reference
        summary: "Empowering manual scavengers and waste pickers to achieve economic independence and social dignity.",
        points: [
            "772 Safai Karamcharis/manual scavengers/waste pickers empowered as entrepreneurs.",
            "Ensured ₹1.2 lakh/year income.",
            "Recognized twice by PM Narendra Modi for their inspiring transformation.",
            "Shifted from social rejection to respect and dignity."
        ]
    },
    {
        id: 'education',
        title: "Education & Child Rights",
        icon: FaGraduationCap,
        summary: "Providing access to education for marginalized children, fostering hope and future opportunities.",
        points: [
            "178 dropouts brought back through bridge courses; 967 migrant children continued education via seasonal hostels.",
            "Distributed 1,000 school kits and operated learning centres in urban slums and dump yards.",
            "Focused education for waste picker and Safai Karamcharis children and joined them in regular schools.",
            "Nurtured dreams with books, uniforms, nutrition, and love."
        ]
    },
    {
        id: 'women-empowerment',
        title: "Women Empowerment & Skill Development",
        icon: FaFemale,
        summary: "Training rural and waste picker women in various skills to ensure alternate income and economic freedom.",
        points: [
            "150 rural women trained in fabric painting and embroidery.",
            "52 waste picker women trained in tailoring; 19 youth in driving.",
            "Enabled alternate income and economic freedom for women in poverty.",
            "Skill turned into confidence—and confidence into independence."
        ]
    },
    {
        id: 'health',
        title: "Health & Well-being for the Marginalized",
        icon: FaMedkit,
        summary: "Delivering essential healthcare services and awareness to the most vulnerable communities.",
        points: [
            "Mobile medical care reached 5,000 rural families.",
            "2,500 sex workers & IDUs receiving STI/HIV/AIDS services & awareness.",
            "Regular health services & camps for safai karamcaris and waste pickers.",
            "Brought compassion, care, and dignity to the most excluded."
        ]
    },
    {
        id: 'disaster-relief',
        title: "Disaster Response & Housing",
        icon: FaHandsHelping,
        summary: "Providing critical support and rehabilitation to families affected by natural calamities and crises.",
        points: [
            "Supported 11,983+ families during floods, cyclones, and COVID-19.",
            "Distributed family survival kits, hygiene essentials, school & kitchen materials.",
            "Fed 10,000 migrant workers during lockdown.",
            "500 families rehabilitated after devastating fire in Nellore."
        ]
    },
    {
        id: 'community-empowerment',
        title: "Community Empowerment & Rights Restoration",
        icon: FaUsers,
        summary: "Mobilizing communities and restoring land ownership, dignity, and food security.",
        points: [
            "Mobilized 6,500 rural families for rights and development.",
            "Formed 1,000 SSS groups and Navajeevan MACTS with 25,010 women.",
            "Provided sustainable training and leadership to grassroots collectives.",
            "Empowered voices that were once silenced by poverty and caste.",
            "Secured 587.67 acres under RoFR for 371 tribal families.",
            "Provided borewells to 124 families in 7 tribal villages.",
            "Restored land ownership, dignity, and food security."
        ]
    },
    {
        id: 'sustainable-agriculture',
        title: "Sustainable Agriculture & Land Development",
        icon: FaSeedling,
        summary: "Transforming barren lands into productive farms and supporting sustainable agricultural practices.",
        points: [
            "Converted 500 acres of tribal wasteland into farms.",
            "Supported 750 families with mixed horticulture under MAATHOTA.",
            "Enhanced nutrition, income, and environmental health."
        ]
    },
    {
        id: 'safe-water',
        title: "Safe Drinking Water & Sanitation",
        icon: FaWater,
        summary: "Ensuring access to safe drinking water, reducing waterborne diseases and health costs.",
        points: [
            "Provided safe drinking water to 20,000 families via RO plants.",
            "Reduced waterborne diseases and health costs.",
            "Ensured access to clean, reliable water in rural & urban areas."
        ]
    },
    {
        id: 'climate-change',
        title: "Environmental Awareness & Climate Change",
        icon: FaCloudSun,
        summary: "Promoting eco-friendly practices and empowering communities to combat climate risks.",
        points: [
            "Converted 500 acres to green farms—natural carbon sinks.",
            "Developed mangrove restoration with 760 coastal and tribal families.",
            "Promoted eco-friendly vehicles, clean water, and resilient housing.",
            "Empowered communities to become climate-resilient and aware.",
            "Addressed sanitation, water, and health to combat climate risks."
        ]
    },
];

export const targetAudiencesData = [
    { name: "Small & Marginalized Farmers", icon: GiFarmTractor },
    { name: "Tribal & Dalit Communities", icon: FaUsers },
    { name: "Fisher Folk", icon: FaFish },
    { name: "Female Sex Workers & IDUs", icon: FaUserMd },
    { name: "Migrant Children", icon: FaChild },
    { name: "Women", icon: FaFemale },
    { name: "Youth & Children", icon: FaChild },
    { name: "Safai Karamcharis", icon: FaMale },
    { name: "Differently Abled Persons", icon: FaWheelchair },
];

export const ongoingProjectsData = [
    {
        name: "Farmer Producer Company Promotion",
        beneficiaries: "5,000 families",
        supportedBy: "NABARD",
        link: "#"
    },
    {
        name: "Hatching Hope Accelerating Income",
        beneficiaries: "10,000 farmers",
        supportedBy: "HEIFER International",
        link: "#"
    },
    {
        name: "Safe Drinking Water & Sanitation",
        beneficiaries: "5,000 families",
        supportedBy: "TATA Community Trust",
        link: "#"
    },
    {
        name: "Improving Livelihood & Education for Safai Karamcharis",
        beneficiaries: "5 states / Nellore Municipal Corporation",
        supportedBy: "NSKFDC / APF",
        link: "#"
    },
    {
        name: "Promotion & Strengthening of Farmer's Clubs",
        beneficiaries: "1250 Small & Marginal Farmers",
        supportedBy: "NABARD",
        link: "#"
    },
    {
        name: "Empowerment of Rural Poor",
        beneficiaries: "1500 Rural poor communities",
        supportedBy: "SRUTI",
        link: "#"
    },
    {
        name: "Strengthening of SSS Groups",
        beneficiaries: "1000 groups",
        supportedBy: "Rural Dept - Govt of AP",
        link: "#"
    },
    {
        name: "Prevention of HIV/AIDS",
        beneficiaries: "1293 Female Sex Workers",
        supportedBy: "APSACS-Govt. of AP",
        link: "#"
    },
    {
        name: "Prevention of IDUs",
        beneficiaries: "1000 IDU's",
        supportedBy: "APSACS-Govt. of AP",
        link: "#"
    },
    {
        name: "Promotion of Horticulture & Vegetable Farmer Producer Organization",
        beneficiaries: "5000 Horticulture & Vegetable Farmers",
        supportedBy: "NABARD",
        link: "#"
    },
    {
        name: "Conservation of Water, Minimizing Wastage & Ensuring Equitable Distribution through Integrated Water Resources Development and Management under NWM in Chittoor District",
        beneficiaries: "2330 12 Mandals of Chittoor districts",
        supportedBy: "NWM/TISS",
        link: "#"
    },
    {
        name: "South India Handholding Agency",
        beneficiaries: "5 states",
        supportedBy: "NSKFDC",
        link: "#"
    },
    {
        name: "MAA THOTA (TDF)",
        beneficiaries: "750 families (TRIBALS)",
        supportedBy: "NABARD",
        link: "#"
    },
    {
        name: "Umbrella Programme for Natural Resource Management (UPNRM)",
        beneficiaries: "150 Small & Marginal Farmers",
        supportedBy: "NABARD",
        link: "#"
    },
    {
        name: "Strengthening of Navajeevan Mutually Aided Co-operative Society",
        beneficiaries: "10000 families",
        supportedBy: "NABFINS",
        link: "#"
    },
    {
        name: "Skill Development",
        beneficiaries: "1000 women (Rural Women)",
        supportedBy: "NABARD/APF",
        link: "#"
    },
];

export const completedProjectsData = [
    {
        name: "Mobile Medical Unit",
        beneficiaries: "5000 families",
        supportedBy: "Govt of India & TATA Trust",
        period: "2007-2011",
        link: "#"
    },
    {
        name: "Mangrove Restoration Project",
        beneficiaries: "760 families",
        supportedBy: "CRiNIEO/BFN/GNF",
        period: "2010-12",
        link: "#"
    },
    {
        name: "Education to Migrant Children",
        beneficiaries: "967 migrant children's",
        supportedBy: "SSA & Aided et Action",
        period: "2012-13",
        link: "#"
    },
    {
        name: "Education to Dropout and Never School Enrolled Tribal Children",
        beneficiaries: "50 tribal children",
        supportedBy: "Navajeevan Organization",
        period: "2023-2024",
        link: "#"
    },
];
