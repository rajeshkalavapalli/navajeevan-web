import head1 from '../assets/images/image-1.jpg';
import head2 from '../assets/images/image-2.jpg';
import { useState, useEffect } from 'react';

const images = [head1, head2]; // Array of your images

function Headimages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-auto block transition-opacity duration-500 ease-in-out"
          style={{ opacity: 1 }} // Ensure the current image is fully visible
        />
      </div>

      <div className="absolute bottom-8 sm:bottom-16 left-4 sm:left-8 md:left-16 lg:left-32 text-left">
        <h1 className="welcome-font font-semibold text-white text-xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
          Welcome to Navajeevan Organisation
        </h1>
        <h3 className="hope font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-[25px] animate-pulse mt-2 sm:mt-4">
          The Hope Of New Life
        </h3>
      </div>
    </div>
  );
}

export default Headimages;