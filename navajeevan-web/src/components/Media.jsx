import React, { useState } from 'react';
import { Colors } from '../utils/Colors.js';

// Import your gallery images
// Adjust the path if your assets/gallary folder is structured differently
import img1 from '../assets/gallary/1.jpeg';
import img2 from '../assets/gallary/2.jpeg';
import img3 from '../assets/gallary/3.jpeg';
import img4 from '../assets/gallary/4.jpeg';
import img5 from '../assets/gallary/5.jpeg';
import img6 from '../assets/gallary/6.jpeg';
import img7 from '../assets/gallary/7.jpeg';
import img8 from '../assets/gallary/8.jpeg';
import img9 from '../assets/gallary/9.jpeg';
import img10 from '../assets/gallary/10.jpeg';
import img11 from '../assets/gallary/11.jpeg';
import img12 from '../assets/gallary/12.jpeg';
import img13 from '../assets/gallary/13.jpeg';
import img14 from '../assets/gallary/14.jpeg';
import img15 from '../assets/gallary/15.jpeg';
import img16 from '../assets/gallary/16.jpeg';

// Create an array of image objects
const galleryImages = [
  { id: 1, src: img1, alt: 'Community work photo 1' },
  { id: 2, src: img2, alt: 'Community work photo 2' },
  { id: 3, src: img3, alt: 'Community work photo 3' },
  { id: 4, src: img4, alt: 'Community work photo 4' },
  { id: 5, src: img5, alt: 'Community work photo 5' },
  { id: 6, src: img6, alt: 'Community work photo 6' },
  { id: 7, src: img7, alt: 'Community work photo 7' },
  { id: 8, src: img8, alt: 'Community work photo 8' },
  { id: 9, src: img9, alt: 'Community work photo 9' },
  { id: 10, src: img10, alt: 'Community work photo 10' },
  { id: 11, src: img11, alt: 'Community work photo 11' },
  { id: 12, src: img12, alt: 'Community work photo 12' },
  { id: 13, src: img13, alt: 'Community work photo 13' },
  { id: 14, src: img14, alt: 'Community work photo 14' },
  { id: 15, src: img15, alt: 'Community work photo 15' },
  { id: 16, src: img16, alt: 'Community work photo 16' },
];

// Video data with CORRECTED YouTube embed URLs and thumbnail links.
// I've extracted the video IDs and used the proper embed and thumbnail formats.
// IMPORTANT: Double-check these IDs against your actual YouTube videos to ensure they are correct.
const videoGalleryData = [
  // Video 1: TDF Successful Story on Andhra Jyothi Sunday Magazine
  { id: 1, title: 'TDF Successful Story on Andhra Jyothi Sunday Magazine', url: 'https://www.youtube.com/embed/w4w7nBbE_9M', thumbnail: 'https://img.youtube.com/vi/w4w7nBbE_9M/hqdefault.jpg' },
  // Video 2: ETV2 - Maathota on 01-10-2012 (Original URL: https://www.youtube.com/watch?v=ylbBq23paak&t=48s -> ID: ylbBq23paak)
  { id: 2, title: 'ETV2 - Maathota on 01-10-2012', url: 'https://www.youtube.com/embed/ylbBq23paak', thumbnail: 'https://img.youtube.com/vi/ylbBq23paak/hqdefault.jpg' },
  // Video 3: Navajeevan MACTS Story on ETV2 (Original URL: https://www.youtube.com/watch?v=__rYJ8Ji8Vs -> ID: __rYJ8Ji8Vs)
  { id: 3, title: 'Navajeevan MACTS Story on ETV2', url: 'https://www.youtube.com/embed/__rYJ8Ji8Vs', thumbnail: 'https://img.youtube.com/vi/__rYJ8Ji8Vs/hqdefault.jpg' },
  // Video 4: ETV2 NABARD shown livelihood to agency Farmers – UPNRM on 29th August 2014 (Original URL: https://www.youtube.com/watch?v=w4w7nBbE_9M -> ID: w4w7nBbE_9M)
  { id: 4, title: 'ETV2 NABARD shown livelihood to agency Farmers – UPNRM on 29th August 2014', url: 'https://www.youtube.com/embed/w4w7nBbE_9M', thumbnail: 'https://img.youtube.com/vi/w4w7nBbE_9M/hqdefault.jpg' },
  // Video 5: ETV2 Maathota Relay on 16th June 2018 (Original URL: https://www.youtube.com/watch?v=rmNryw4f8qY -> ID: rmNryw4f8qY)
  { id: 5, title: 'ETV2 Maathota Relay on 16th June 2018', url: 'https://www.youtube.com/embed/rmNryw4f8qY', thumbnail: 'https://img.youtube.com/vi/rmNryw4f8qY/hqdefault.jpg' },
  // Video 6: Relief Program on Covid-19 response (Original URL: https://www.youtube.com/watch?v=ZQYGu1v_Rag -> ID: ZQYGu1v_Rag)
  { id: 6, title: 'Relief Program on Covid-19 response', url: 'https://www.youtube.com/embed/ZQYGu1v_Rag', thumbnail: 'https://img.youtube.com/vi/ZQYGu1v_Rag/hqdefault.jpg' },
  // Video 7: ETV2 MAATHOTA Program 5 – 24th Mar 2017 (Original URL: https://www.youtube.com/watch?v=-qoWxcUrlVc -> ID: -qoWxcUrlVc)
  { id: 7, title: 'ETV2 MAATHOTA Program 5 – 24th Mar 2017', url: 'https://www.youtube.com/embed/-qoWxcUrlVc', thumbnail: 'https://img.youtube.com/vi/-qoWxcUrlVc/hqdefault.jpg' },
  // Video 8: ETV2 Maathota – on 3rd June 2014 (Original URL: https://www.youtube.com/watch?v=9X3WgxJonYQ -> ID: 9X3WgxJonYQ)
  { id: 8, title: 'ETV2 Maathota – on 3rd June 2014', url: 'https://www.youtube.com/embed/9X3WgxJonYQ', thumbnail: 'https://img.youtube.com/vi/9X3WgxJonYQ/hqdefault.jpg' },
  // Video 9: Success Story of Safai Karamcharis families NSKFDC Navajeevan (Original URL: https://www.youtube.com/watch?v=SJApjnBCino -> ID: SJApjnBCino)
  { id: 9, title: 'Success Story of Safai Karamcharis families NSKFDC Navajeevan', url: 'https://www.youtube.com/embed/SJApjnBCino', thumbnail: 'https://img.youtube.com/vi/SJApjnBCino/hqdefault.jpg' },
  // Video 10: Navajeevan MACTS story on ETV2 on 26th Feb 2015 (Original URL: https://www.youtube.com/watch?v=__rYJ8Ji8Vs&t=54s -> ID: __rYJ8Ji8Vs)
  { id: 10, title: 'Navajeevan MACTS story on ETV2 on 26th Feb 2015', url: 'https://www.youtube.com/embed/__rYJ8Ji8Vs', thumbnail: 'https://img.youtube.com/vi/__rYJ8Ji8Vs/hqdefault.jpg' },
];


const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('photos'); // 'photos' or 'videos'
  const [selectedImage, setSelectedImage] = useState(null); // State for image modal
  const [selectedVideo, setSelectedVideo] = useState(null); // State for video modal

  // Function to open the image modal
  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the image modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Function to open the video modal
  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  // Function to close the video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className={`bg-[${Colors.LightSectionBg}] py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-extrabold text-[${Colors.PrimaryDarkGreen}] text-center mb-4 leading-tight`}>
          Our Media Gallery
        </h2>
        <p className={`text-lg text-center mb-12 max-w-2xl mx-auto opacity-90 text-[${Colors.BodyTextDark}]`}>
          Explore moments from our impactful work and community engagement, through photos and videos.
        </p>
        <div className={`w-32 h-0.5 bg-[${Colors.AccentOrange}] mx-auto mb-10`}></div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300
                         ${activeTab === 'photos'
                           ? `bg-[${Colors.PrimaryDarkGreen}] text-[${Colors.CreamyWhite}] shadow-lg`
                           : `bg-[${Colors.LightGray}] text-[${Colors.BodyTextDark}] hover:bg-gray-200`
                         }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300
                         ${activeTab === 'videos'
                           ? `bg-[${Colors.PrimaryDarkGreen}] text-[${Colors.CreamyWhite}] shadow-lg`
                           : `bg-[${Colors.LightGray}] text-[${Colors.BodyTextDark}] hover:bg-gray-200`
                         }`}
          >
            Videos
          </button>
        </div>

        {/* Conditional Content Rendering */}
        {activeTab === 'photos' && (
          // Photo Grid
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer
                           transform hover:scale-[1.03] transition-all duration-300 ease-out group
                           border border-transparent hover:border-accent-orange" /* Changed hover border color */
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:brightness-75 group-hover:scale-105 transition-all duration-300" /* Added scale on hover */
                  loading="lazy"
                />
                {/* Enhanced hover overlay with distinct color and animation */}
                <div className={`absolute inset-0 bg-[${Colors.PrimaryDarkGreen}] bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="sr-only">View Photo</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          // Video Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videoGalleryData.map((video) => (
              <div
                key={video.id}
                className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer
                           transform hover:scale-[1.03] transition-transform duration-300 ease-out group
                           border border-transparent hover:border-gray-300"
                onClick={() => openVideoModal(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span className="sr-only">Play Video</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white text-sm font-semibold truncate">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Image Modal (Lightbox) */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={closeImageModal}
          >
            <div
              className="relative max-w-4xl max-h-full rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2
                           hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
              />
              <p className="text-white text-center text-sm md:text-base mt-2">{selectedImage.alt}</p>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={closeVideoModal}
          >
            <div
              className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2
                           hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                className="w-full h-full"
                src={selectedVideo.url}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="text-white text-center text-sm md:text-base mt-2">{selectedVideo.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;

