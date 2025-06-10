import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For navigation

// Our defined color palette
const Colors = {
  ForestGreen: '#214E3F',
  Terracotta: '#C8553D',
  StoneBeige: '#DCCBA4',
  CreamyWhite: '#FDFDFD',
  LightGray: '#F5F5F5',
  DarkText: '#333333',
};

// Placeholder data for achievements
// IMPORTANT: Replace image paths with your actual image paths
const achievementsData = [
  {
    id: 1,
    title: "Relief & Rehabilitation",
    text: "Awarded by NTR Trust for exceptional efforts during the Kurnool Floods, highlighting our critical role in providing timely and effective aid to affected communities.",
    image: "/images/achievements/achievement1.jpg", // REPLACE WITH YOUR ACTUAL IMAGE PATHS
    by: "NTR Trust",
    date: "Date not specified",
    tag: "Disaster Relief"
  },
  {
    id: 2,
    title: "Best Organization Award (2017)",
    text: "State Level Best Organization Award for providing vital services to female sex workers under the prevention of HIV/AIDS on the occasion of Aids day, showcasing our commitment to public health.",
    image: "/images/achievements/achievement2.jpg", // REPLACE WITH YOUR ACTUAL IMAGE PATHS
    by: "Govt of Andhra Pradesh",
    date: "December 1, 2017",
    tag: "Public Health"
  },
  {
    id: 3,
    title: "Best NGO Award (2015)",
    text: "District Level Best NGO Award, recognized on Independence Day for outstanding overall community service and dedication to upliftment.",
    image: "/images/achievements/achievement3.jpg", // REPLACE WITH YOUR ACTUAL IMAGE PATHS
    by: "Honorable Minister of Municipal Administration and District Collector",
    date: "August 15, 2015",
    tag: "Community Service"
  },
  {
    id: 4,
    title: "Indian Social Impact Awards",
    text: "Recognized by Brand Honchos as among the 'Top 20' organizations making significant social impact. We are grateful for the recognition.",
    image: "/images/achievements/achievement4.jpg", // REPLACE WITH YOUR ACTUAL IMAGE PATHS
    by: "Brand Honchos",
    date: "March 10, 2023",
    tag: "Social Impact"
  },
  {
    id: 5,
    title: "Certificate of Excellence",
    text: "Certificate of Excellence from District Probation Officer for outstanding performance in community development and social welfare initiatives.",
    image: "/images/achievements/achievement5.jpg", // REPLACE WITH YOUR ACTUAL IMAGE PATHS
    by: "District Probation Officer",
    date: "February 20, 2022",
    tag: "Community Development"
  },
  {
    id: 6,
    title: "Citation from District Magistrate Office",
    text: "Citation from District Magistrate Office, Delhi, acknowledging our dedicated efforts and support in various programs within the region.",
    image: "/images/achievements/achievement6.jpg", // REPLACE WITH YOUR ACTUAL IMAGE PATHS
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
    slideInterval.current = setInterval(goToNextSlide, 5000); // Slide every 5 seconds

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentIndex]); // Restart interval if currentIndex changes (e.g., manual navigation)

  return (
    <section className="py-16 md:py-24 bg-[${Colors.LightGray}] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-extrabold text-[${Colors.ForestGreen}] text-center mb-16 relative z-10`}>
          Other Notable Achievements
          <span className="block w-20 h-1 bg-[${Colors.Terracotta}] mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="relative w-full h-[280px] md:h-[220px] lg:h-[180px] overflow-hidden">
          {achievementsData.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`absolute top-0 left-0 w-full h-full
                flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden
                transform transition-transform duration-700 ease-in-out
                ${index === currentIndex ? 'translate-x-0 opacity-100 z-10' : 'opacity-0 z-0'}
                ${index < currentIndex ? '-translate-x-full' : (index > currentIndex ? 'translate-x-full' : '')}`}
              // Ensure consistent sizing for the cards within the carousel
              style={{
                width: '100%', // Take full width of its container
              }}
            >
              {/* Image Section - Fixed size and aspect ratio for consistency */}
              <div className="w-full md:w-56 flex-shrink-0"> {/* Adjusted width for image */}
                <img
                  src={achievement.image}
                  alt={`Achievement: ${achievement.title}`}
                  className="w-full h-40 md:h-full object-cover object-center" // Ensure image fits well
                />
              </div>

              {/* Text Content Section */}
              <div className="flex-grow p-5 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-bold mb-2 text-[${Colors.Terracotta}]`}>
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-3"> {/* Line-clamp for text overflow */}
                    {achievement.text}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    <span className="font-semibold">By:</span> {achievement.by} |{' '}
                    <span className="font-semibold">Date:</span> {achievement.date}
                  </p>
                  <span className={`inline-block bg-[${Colors.ForestGreen}] text-white text-xs font-semibold px-2 py-0.5 rounded-full`}>
                    {achievement.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 lg:-left-16 p-3 rounded-full bg-gray-700 bg-opacity-50 hover:bg-opacity-80 text-white transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}]"
            aria-label="Previous achievement"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 lg:-right-16 p-3 rounded-full bg-gray-700 bg-opacity-50 hover:bg-opacity-80 text-white transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-[${Colors.ForestGreen}]"
            aria-label="Next achievement"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="mt-12 flex justify-center space-x-2 relative z-10">
          {achievementsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex ? `bg-[${Colors.Terracotta}] scale-125` : `bg-gray-400 hover:bg-gray-600`}`}
              aria-label={`Go to achievement ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementCarousel;