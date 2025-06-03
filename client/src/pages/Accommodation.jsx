import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import heroWave from '../assets/hero-wave.svg'; // Adjust the path as necessary

const oldGuestHouseImages = [
  '/Amenities/old-guest-house1.webp',
  '/Amenities/new-guest-house2.webp',
  '/Amenities/old-guest-house3.webp',
];

const newGuestHouseImages = [
  '/Amenities/new-guest-house.webp',
  '/Amenities/old-guest-house4.webp',
];

const heroBg =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80';

const heroVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const Accommodation = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Carousel logic
  const [oldIndex, setOldIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(0);
  const oldTimeout = useRef();
  const newTimeout = useRef();

  useEffect(() => {
    oldTimeout.current = setTimeout(() => {
      setOldIndex((prev) => (prev + 1) % oldGuestHouseImages.length);
    }, 3000);
    return () => clearTimeout(oldTimeout.current);
  }, [oldIndex]);

  useEffect(() => {
    newTimeout.current = setTimeout(() => {
      setNewIndex((prev) => (prev + 1) % newGuestHouseImages.length);
    }, 3000);
    return () => clearTimeout(newTimeout.current);
  }, [newIndex]);

  const [isHoveredOld, setIsHoveredOld] = useState(false);
  const [isHoveredNew, setIsHoveredNew] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBFC] to-[#E0F7FA]/50 overflow-hidden">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-yellow-100/60 via-lightblue/30 to-snow/80 py-10 sm:py-14 md:py-16 mb-6 sm:mb-10 `}>
              {/* Animated wave SVG */}
              <img
                src={heroWave}
                alt="wave"
                className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 object-cover animate-pulse"
                style={{ zIndex: 1 }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center px-2">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark drop-shadow-lg animate-fade-in-up mb-2 sm:mb-4 text-center">
                  NIT Srinagar Guest Houses
                </h1>
                
                <p className="text-base xs:text-lg md:text-xl text-teal font-medium animate-fade-in-up delay-200 text-center px-2">
                  Comfortable and welcoming accommodation for guests and visitors at NIT Srinagar.
                </p>
              </div>
            </div>

      {/* Guest House Overview Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-5xl mx-auto bg-white/95 rounded-3xl shadow-2xl p-8 sm:p-12 mb-12 text-[#1F2647]"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D9488] mb-4 text-center">
          About NIT Srinagar Guest Houses
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-center">
          NIT Srinagar, established in 1960 on the banks of Dal Lake, is a fully residential institute offering a wide range of amenities including hostels, staff quarters, guest houses, and recreational facilities. The campus provides guest houses to ensure comfortable and convenient accommodation for official guests and visitors.
        </p>
      </motion.div>

      {/* Old & New Guest House Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 mb-16">
        {/* Old Guest House */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white/90 rounded-3xl shadow-xl p-8 flex flex-col gap-6"
          onHoverStart={() => setIsHoveredOld(true)}
          onHoverEnd={() => setIsHoveredOld(false)}
          style={{
            transformStyle: 'preserve-3d',
            transform: isHoveredOld ? 'rotateY(5deg)' : 'rotateY(0deg)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#0D9488] mb-4 text-center">Old Guest House</h3>
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full max-w-xl h-[340px] sm:h-[400px] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg bg-gray-100">
              {/* Prev Button */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0D9488] rounded-full shadow p-2 z-20 transition"
                onClick={() => setOldIndex((prev) => (prev - 1 + oldGuestHouseImages.length) % oldGuestHouseImages.length)}
                aria-label="Previous image"
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              {/* Images */}
              {oldGuestHouseImages.map((img, idx) => (
                <motion.img
                  key={img}
                  src={img}
                  alt={`Old Guest House ${idx + 1}`}
                  className={`absolute left-0 top-0 w-full h-full object-cover rounded-2xl transition-all duration-700 ${oldIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  animate={{}}
                  transition={{ duration: 0.7 }}
                />
              ))}
              {/* Next Button */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0D9488] rounded-full shadow p-2 z-20 transition"
                onClick={() => setOldIndex((prev) => (prev + 1) % oldGuestHouseImages.length)}
                aria-label="Next image"
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {oldGuestHouseImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${oldIndex === idx ? 'bg-[#0D9488]' : 'bg-gray-300'} border border-white`}
                    onClick={() => setOldIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <ul className="space-y-3 text-lg mt-4">
            <li className="flex items-center gap-3"><span className="text-[#DDA853] text-xl">🏛️</span> Heritage architecture</li>
            <li className="flex items-center gap-3"><span className="text-[#0D9488] text-xl">🛏️</span> Spacious rooms with vintage charm</li>
            <li className="flex items-center gap-3"><span className="text-[#88DADA] text-xl">🌳</span> Beautiful garden views</li>
            <li className="flex items-center gap-3"><span className="text-[#1F2647] text-xl">🔒</span> 24/7 security</li>
          </ul>
        </motion.div>

        {/* New Guest House */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white/90 rounded-3xl shadow-xl p-8 flex flex-col gap-6"
          onHoverStart={() => setIsHoveredNew(true)}
          onHoverEnd={() => setIsHoveredNew(false)}
          style={{
            transformStyle: 'preserve-3d',
            transform: isHoveredNew ? 'rotateY(-5deg)' : 'rotateY(0deg)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#DDA853] mb-4 text-center">New Guest House</h3>
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full max-w-xl h-[340px] sm:h-[400px] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg bg-gray-100">
              {/* Prev Button */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#DDA853] rounded-full shadow p-2 z-20 transition"
                onClick={() => setNewIndex((prev) => (prev - 1 + newGuestHouseImages.length) % newGuestHouseImages.length)}
                aria-label="Previous image"
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              {/* Images */}
              {newGuestHouseImages.map((img, idx) => (
                <motion.img
                  key={img}
                  src={img}
                  alt={`New Guest House ${idx + 1}`}
                  className={`absolute left-0 top-0 w-full h-full object-cover rounded-2xl transition-all duration-700 ${newIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  animate={{}}
                  transition={{ duration: 0.7 }}
                />
              ))}
              {/* Next Button */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#DDA853] rounded-full shadow p-2 z-20 transition"
                onClick={() => setNewIndex((prev) => (prev + 1) % newGuestHouseImages.length)}
                aria-label="Next image"
                tabIndex={0}
                style={{ outline: 'none' }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {newGuestHouseImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${newIndex === idx ? 'bg-[#DDA853]' : 'bg-gray-300'} border border-white`}
                    onClick={() => setNewIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <ul className="space-y-3 text-lg mt-4">
            <li className="flex items-center gap-3"><span className="text-[#DDA853] text-xl">✨</span> Contemporary design</li>
            <li className="flex items-center gap-3"><span className="text-[#0D9488] text-xl">❄️</span> Air-conditioned rooms</li>
            <li className="flex items-center gap-3"><span className="text-[#88DADA] text-xl">🍽️</span> Modern dining facility</li>
            <li className="flex items-center gap-3"><span className="text-[#1F2647] text-xl">📶</span> High-speed WiFi</li>
          </ul>
        </motion.div>
      </div>

      {/* Quick Info Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-5xl mx-auto bg-white/95 rounded-3xl shadow-2xl p-8 sm:p-12 mb-16"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0D9488] mb-6 text-center">Quick Info & Booking</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-lg">
              <span className="text-2xl">✉️</span>
              <span>
                <b>Email Booking:</b>{' '}
                <a href="mailto:guesthouse@nitsri.ac.in" className="text-[#0D9488] underline">
                  guesthouse@nitsri.ac.in
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-2xl">📞</span>
              <span>
                <b>Booking Phone:</b>{' '}
                <a href="tel:9419220542" className="text-[#0D9488] underline">
                  Mr. Kuldeep 9419220542
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-2xl">🍽️</span>
              <span>
                <b>Food Queries:</b>{' '}
                <a href="tel:9596043085" className="text-[#0D9488] underline">
                  Mr. Deepak 9596043085
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-2xl">📄</span>
              <span>
                <b>Room Tariff:</b>{' '}
                <a
                  href="https://nitsri.ac.in/Centre/Guest%20House/Guest_House_guidelines.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0D9488] underline"
                >
                  Guidelines PDF
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-2xl">🌐</span>
              <span>
                <b>Website:</b>{' '}
                <a
                  href="https://nitsri.ac.in/Centre/Deptindex.aspx?page=a&ItemID=eaeqs&nCentreID=ci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0D9488] underline"
                >
                  Guest House Webpage
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <span>
                <b>Booking Instructions:</b> Please email for booking. Avoid calling unless you do not get a response within 2 working days. No calls or email responses on Saturdays and Sundays. Avoid calling before 10 am and after 5 pm, unless for food orders.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🍴</span>
              <span>
                <b>Food Arrangements:</b> For breakfast, inform the night before. For lunch, confirm by 10 am. For dinner, confirm by 2:30 pm. For group/party (6+), inform at least 10 days in advance.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">❗</span>
              <span>
                <b>Complaints:</b> Write to Dr. Vivek (Dept. of Civil Engg.) at{' '}
                <a href="mailto:guesthouse@nitsri.ac.in" className="text-[#0D9488] underline">
                  guesthouse@nitsri.ac.in
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Accommodation;