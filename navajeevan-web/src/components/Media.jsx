import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiPlay, FiMaximize2 } from 'react-icons/fi';
import { PageHero, Reveal } from './ui';

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

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]
  .map((src, i) => ({ id: i + 1, src, alt: `Navajeevan community work — photo ${i + 1}` }));

const videoGalleryData = [
  { id: 1, title: 'TDF Successful Story on Andhra Jyothi Sunday Magazine', url: 'https://www.youtube.com/embed/w4w7nBbE_9M', thumbnail: 'https://img.youtube.com/vi/w4w7nBbE_9M/hqdefault.jpg' },
  { id: 2, title: 'ETV2 - Maathota on 01-10-2012', url: 'https://www.youtube.com/embed/ylbBq23paak', thumbnail: 'https://img.youtube.com/vi/ylbBq23paak/hqdefault.jpg' },
  { id: 3, title: 'Navajeevan MACTS Story on ETV2', url: 'https://www.youtube.com/embed/__rYJ8Ji8Vs', thumbnail: 'https://img.youtube.com/vi/__rYJ8Ji8Vs/hqdefault.jpg' },
  { id: 4, title: 'ETV2 NABARD livelihood – UPNRM', url: 'https://www.youtube.com/embed/w4w7nBbE_9M', thumbnail: 'https://img.youtube.com/vi/w4w7nBbE_9M/hqdefault.jpg' },
  { id: 5, title: 'Maathota Relay – 16 June 2018', url: 'https://www.youtube.com/embed/rmNryw4f8qY', thumbnail: 'https://img.youtube.com/vi/rmNryw4f8qY/hqdefault.jpg' },
  { id: 6, title: 'Covid-19 Relief Program', url: 'https://www.youtube.com/embed/ZQYGu1v_Rag', thumbnail: 'https://img.youtube.com/vi/ZQYGu1v_Rag/hqdefault.jpg' },
  { id: 7, title: 'MAATHOTA Program 5 – 24 Mar 2017', url: 'https://www.youtube.com/embed/-qoWxcUrlVc', thumbnail: 'https://img.youtube.com/vi/-qoWxcUrlVc/hqdefault.jpg' },
  { id: 8, title: 'Maathota – 3 June 2014', url: 'https://www.youtube.com/embed/9X3WgxJonYQ', thumbnail: 'https://img.youtube.com/vi/9X3WgxJonYQ/hqdefault.jpg' },
  { id: 9, title: 'Success Story – NSKFDC', url: 'https://www.youtube.com/embed/SJApjnBCino', thumbnail: 'https://img.youtube.com/vi/SJApjnBCino/hqdefault.jpg' },
  { id: 10, title: 'Navajeevan MACTS on 26 Feb 2015', url: 'https://www.youtube.com/embed/__rYJ8Ji8Vs', thumbnail: 'https://img.youtube.com/vi/__rYJ8Ji8Vs/hqdefault.jpg' },
];

const Overlay = ({ onClose, children, label }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-label={label}
  >
    <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20" aria-label="Close">
      <FiX size={20} />
    </button>
    {children}
  </motion.div>
);

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const step = useCallback((dir) => {
    setSelectedIndex((i) => (i + dir + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setSelectedIndex(null); setSelectedVideo(null); }
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, step]);

  return (
    <>
      <PageHero
        eyebrow="Media"
        title={<>Moments that <em className="italic text-marigold-300">matter.</em></>}
        intro="Explore powerful moments from our community engagement — through photos from the field and stories featured on television."
        image={img16}
      />

      <section className="section bg-ivory">
        <div className="container-x">
          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-full border border-line bg-white p-1 shadow-soft">
              {[
                { id: 'photos', label: `Photos · ${galleryImages.length}` },
                { id: 'videos', label: `Videos · ${videoGalleryData.length}` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative rounded-full px-6 py-2.5 text-sm font-bold sm:px-8"
                >
                  {activeTab === tab.id && <motion.span layoutId="media-tab" className="absolute inset-0 rounded-full bg-ink-900" />}
                  <span className={`relative ${activeTab === tab.id ? 'text-white' : 'text-muted'}`}>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'photos' ? (
              <motion.div
                key="photos"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4"
              >
                {galleryImages.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedIndex(i)}
                    className="group relative mb-3 block w-full overflow-hidden rounded-2xl bg-sand sm:mb-4"
                    aria-label={`Open ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition group-hover:bg-ink-950/40">
                      <FiMaximize2 className="text-2xl text-white opacity-0 transition group-hover:opacity-100" />
                    </span>
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {videoGalleryData.map((video, i) => (
                  <Reveal key={video.id} delay={(i % 3) * 0.06}>
                    <button onClick={() => setSelectedVideo(video)} className="group block w-full text-left">
                      <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink-900">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                          loading="lazy"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lift transition duration-300 group-hover:scale-110 group-hover:bg-marigold-400">
                            <FiPlay className="ml-1 text-xl" />
                          </span>
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-lg leading-snug text-ink-900 transition group-hover:text-brand-600">{video.title}</h3>
                    </button>
                  </Reveal>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Overlay onClose={() => setSelectedIndex(null)} label="Photo viewer">
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6" aria-label="Previous photo">
              <FiChevronLeft size={22} />
            </button>
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />
            <button onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6" aria-label="Next photo">
              <FiChevronRight size={22} />
            </button>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/60">
              {selectedIndex + 1} / {galleryImages.length}
            </p>
          </Overlay>
        )}

        {selectedVideo && (
          <Overlay onClose={() => setSelectedVideo(null)} label={selectedVideo.title}>
            <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-lift">
                <iframe
                  src={`${selectedVideo.url}?autoplay=1`}
                  title={selectedVideo.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-center font-display text-lg text-white">{selectedVideo.title}</p>
            </div>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default MediaGallery;
