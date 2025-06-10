import head1 from '../assets/images/head3.jpeg';
import head2 from '../assets/images/image-2.jpg';
import { useState, useEffect, useRef } from 'react';

const images = [head1, head2];

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
      }, 700);
    }, 5000);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-md shadow-md"
      style={{ height: '70vh', maxHeight: '750px' }}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 z-0"></div>
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
        <div className="bg-black bg-opacity-60 rounded-md py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-10">
          <h1 className="font-semibold text-white text-xl sm:text-2xl md:text-4xl lg:text-[52px] leading-tight">
            Welcome to Navajeevan Organisation
          </h1>
          <h3 className="font-medium text-gray-300 text-base sm:text-lg md:text-xl lg:text-[30px] mt-3 animate-pulse">
            The Hope Of New Life
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Headimages;
