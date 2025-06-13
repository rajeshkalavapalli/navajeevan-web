import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For navigation

// Import all specific achievement images from your assets/awards folder
// PLEASE ENSURE THESE FILENAMES MATCH YOUR ACTUAL FILES EXACTLY (case-sensitive)
import achievementImg1 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.10 PM.jpeg';
import achievementImg2 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.03 PM.jpeg';
import achievementImg3 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.06 PM.jpeg';
import achievementImg4 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.11 PM.jpeg';
// import achievementImg5 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.35.12 PM.jpeg';
import achievementImg6 from '../assets/awards/WhatsApp Image 2025-06-10 at 10.36.06 PM.jpeg';


// Our defined color palette (for reference)
// Direct Tailwind classes are now used in JSX for better compatibility
const Colors = {
  ForestGreen: '#214E3F',
  Terracotta: '#C8553D',
  StoneBeige: '#DCCBA4',
  CreamyWhite: '#FDFDFD',
  LightGray: '#F5F5F5',
  DarkText: '#333333',
};

// Data for achievements with actual image imports
const achievementsData = [
  {
    id: 1,
    title: "Relief & Rehabilitation Excellence Award",
    text: "Awarded by NTR Trust for exceptional and swift efforts during the devastating Kurnool Floods. This recognition highlights our critical role in providing timely, compassionate, and effective aid to affected communities, rebuilding lives and homes with dedication.",
    image: achievementImg1,
    by: "NTR Trust",
    date: "Date not specified", // You might want to update this specific date if available
    tag: "Disaster Relief"
  },
  {
    id: 2,
    title: "State Level Best Organization Award (2017)",
    text: "Received the State Level Best Organization Award for providing vital and transformative services to female sex workers under HIV/AIDS prevention programs. This showcases our unwavering commitment to public health, dignity, and empowering marginalized individuals to lead healthier lives.",
    image: achievementImg2,
    by: "Govt of Andhra Pradesh",
    date: "December 1, 2017",
    tag: "Public Health"
  },
  {
    id: 3,
    title: "District Level Best NGO Award (2015)",
    text: "Honored with the District Level Best NGO Award on Independence Day, recognizing our outstanding overall community service and dedication to upliftment. This award celebrates our holistic approach to social welfare and sustainable development.",
    image: achievementImg3,
    by: "Honorable Minister of Municipal Administration and District Collector",
    date: "August 15, 2015",
    tag: "Community Service"
  },
  {
    id: 4,
    title: "Indian Social Impact Awards: Top 20 Recognition",
    text: "Recognized by Brand Honchos as among the 'Top 20' organizations making significant and lasting social impact across India. We are profoundly grateful for this national recognition of our innovative and far-reaching initiatives.",
    image: achievementImg4,
    by: "Brand Honchos",
    date: "March 10, 2023",
    tag: "Social Impact"
  },
  // {
  //   id: 5,
  //   title: "Certificate of Excellence in Community Development",
  //   text: "Awarded a prestigious Certificate of Excellence from the District Probation Officer for our outstanding performance in driving community development and implementing impactful social welfare initiatives. This honor reflects our consistent commitment to positive change.",
  //   image: achievement5, // Placeholder for the actual image, ensure it is imported or replaced
  //   by: "District Probation Officer",
  //   date: "February 20, 2022",
  //   tag: "Community Development"
  // },
  {
    id: 6,
    title: "Citation from Delhi District Magistrate Office",
    text: "Received a distinguished Citation from the District Magistrate Office, Delhi, acknowledging our dedicated efforts and invaluable support in various crucial programs and initiatives within the region. This validates our commitment to collaborative public service.",
    image: achievementImg6,
    by: "Delhi District Magistrate",
    date: "October 11, 2021",
    tag: "Public Service"
  },
];

const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === achievementsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? achievementsData.length - 1 : prevIndex - 1
    );
  };

  // Auto-sliding effect
  useEffect(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(goToNextSlide, 7000); // Increased interval for better readability of content

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentIndex]); // Restart interval if currentIndex changes (e.g., manual navigation)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-light-gray to-creamy-white relative overflow-hidden">
      {/* Subtle background texture for a premium feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-forest-green text-center mb-16 relative z-10">
          Our Valued Recognitions & Achievements
          <span className="block w-24 h-1.5 bg-terracotta mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Main carousel container, centered with responsive max-width */}
          <div className="relative mx-auto max-w-4xl lg:max-w-5xl h-[400px] md:h-[350px] lg:h-[300px] flex items-center justify-center">
            {achievementsData.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`absolute w-full h-full p-4 md:p-6
                  bg-white rounded-2xl shadow-2xl border-2 border-stone-beige
                  flex flex-col md:flex-row items-center justify-center gap-6
                  transform transition-all duration-700 ease-in-out
                  ${index === currentIndex ? 'translate-x-0 opacity-100 scale-100 z-10' : 'opacity-0 z-0'}
                  ${index < currentIndex ? '-translate-x-full' : (index > currentIndex ? 'translate-x-full' : '')}`}
              >
                {/* Image Section - More prominent, slightly offset, with enhanced shadow */}
                <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-full relative transform -translate-y-6 md:translate-y-0 md:-translate-x-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-beige to-terracotta rounded-lg shadow-xl transform rotate-3 scale-95 opacity-80"></div>
                  <img
                    src={achievement.image}
                    alt={`Achievement: ${achievement.title}`}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-2xl transform rotate-0 hover:rotate-1 transition-transform duration-300"
                  />
                </div>

                {/* Text Content Section - Generous padding, improved typography */}
                <div className="flex-grow text-center md:text-left p-2 md:p-4 pt-0 md:pt-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-forest-green mb-3 leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 line-clamp-4">
                    {achievement.text}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
                    <p className="text-sm font-medium text-gray-600">
                      <span className="font-semibold text-dark-text">By:</span> {achievement.by}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      <span className="font-semibold text-dark-text">Date:</span> {achievement.date}
                    </p>
                    <span className="inline-block bg-terracotta text-creamy-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                      {achievement.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Larger, more prominent, outside carousel */}
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-16 p-4 rounded-full bg-forest-green text-creamy-white shadow-xl hover:bg-opacity-90 transition-all duration-300 z-20 focus:outline-none focus:ring-4 focus:ring-terracotta"
            aria-label="Previous achievement"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-8 md:-right-16 p-4 rounded-full bg-forest-green text-creamy-white shadow-xl hover:bg-opacity-90 transition-all duration-300 z-20 focus:outline-none focus:ring-4 focus:ring-terracotta"
            aria-label="Next achievement"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Navigation Dots - Still centered, slightly larger */}
        <div className="mt-16 flex justify-center space-x-3 relative z-10">
          {achievementsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border-2 border-terracotta
                ${index === currentIndex ? `bg-terracotta scale-125 shadow-md` : `bg-gray-300 hover:bg-gray-400`}`}
              aria-label={`Go to achievement ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementCarousel;
