import head1 from '../assets/gallary/8.jpeg';
import head2 from '../assets/gallary/16.jpeg';
import head3 from '../assets/gallary/12.jpeg';
import head4 from '../assets/images/11.jpeg';
import { useState, useEffect, useRef } from 'react';

const images = [head1, head2, head3, head4,];

function Headimages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    startSlider();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 700); // Duration of the fade out
    }, 5000); // Time visible before starting fade out
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-md shadow-md"
      style={{ height: '70vh', maxHeight: '750px' }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Image Overlay Gradient: Now using Grounded Growth colors */}
      {/* from-transparent: top is clear, via-[#214E3F]/30: middle has light forest green overlay, to-[#214E3F]/70: bottom has darker forest green overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#214E3F]/30 to-[#214E3F]/70 z-0"></div>
      
      <img
        src={images[currentImageIndex]}
        alt={`Scenic view ${currentImageIndex + 1}`}
        className={`block w-full h-full object-cover z-0 transition-opacity duration-700 ease-in-out ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
      />
      <div
        className="absolute bottom-8 left-4 right-4 sm:left-10 sm:right-auto md:bottom-16 md:left-16 lg:bottom-32 lg:left-20 text-center sm:text-left z-10"
      >
        {/* Text Container Background: Now using Forest Green with opacity */}
        <div className="bg-[#214E3F] bg-opacity-70 rounded-md py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-10">
          <h1 className="font-semibold text-white text-xl sm:text-2xl md:text-4xl lg:text-[52px] leading-tight">
            Welcome to Navajeevan Organisation
          </h1>
          {/* Removed animate-pulse for a more serene and grounded feel, relying on strong typography and color */}
          <h3 className="font-medium text-gray-300 text-base sm:text-lg md:text-xl lg:text-[30px] mt-3">
            The Hope Of New Life
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Headimages;