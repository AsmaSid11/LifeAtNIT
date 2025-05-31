import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useEffect } from 'react';

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

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.39, 0.575, 0.565, 1] } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const Accommodation = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBFC] to-[#88DADA]/20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[32vh] sm:h-[38vh] flex items-center justify-center overflow-hidden mb-8 sm:mb-12">
        <motion.img
          src={heroBg}
          alt="Guest House Hero"
          className="absolute inset-0 w-full h-full object-cover scale-105 brightness-90"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2647]/80 via-[#0D9488]/60 to-[#FFFBFC]/10" />
        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-4"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#DDA853] via-[#FFFBFC] to-[#88DADA] drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Welcome to NIT Guest Houses
          </motion.h1>
          <motion.p
            className="mt-3 sm:mt-4 text-sm xs:text-base sm:text-lg md:text-xl text-[#FFFBFC] max-w-md sm:max-w-2xl font-medium drop-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Experience a blend of classic charm and modern luxury.<br className="hidden xs:block" />
            Discover your perfect stay at our Old &amp; New Guest Houses.
          </motion.p>
        </motion.div>
        {/* Animated floating shapes */}
        <motion.div className="absolute left-4 top-4 sm:left-10 sm:top-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[#88DADA]/60 blur-2xl" animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} />
        <motion.div className="absolute right-8 bottom-4 sm:right-20 sm:bottom-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#DDA853]/40 blur-2xl" animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }} />
        <motion.div className="absolute left-1/2 top-1/2 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#1F2647]/40 blur-xl" animate={{ y: [0, 20, 0], x: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }} />
      </div>

      {/* Guest House Overview Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.03, rotateX: 4, boxShadow: '0 12px 40px 0 rgba(13,148,136,0.13)' }}
        className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-6 sm:p-10 mb-10 mt-8 text-[#1F2647] flex flex-col gap-4"
        style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D9488] mb-2">NIT Srinagar Guest House</h2>
        <p className="text-base sm:text-lg">National Institute of Technology, Srinagar is one of the thirty NITs in the Northern Regions of the country, established in 1960 as Regional Engineering College under Govt. of India during 2nd 5 year Plan. The Institute acquired the status of National Institute of Technology with deemed to be University status during August, 2003 and attained full academic autonomy. The Institute is situated at the banks of world-famous Dal Lake, with the far-famed Hazratbal Shrine on other side of the campus. NIT Srinagar is a residential Institute with accommodation facility in Hostels and Staff-Quarters. Facilities and amenities are available at the institution such as NSS, Bank, Shopping Complex, Recreational Centre, Dispensary with Ambulances, Guest House, Students Activity Centre, Gymnasium, Computer Centres, Generator, Bus Facility.</p>
      </motion.div>

      {/* Old & New Guest House Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-2 xs:px-4 sm:px-6 lg:px-8 mb-10">
        {/* Old Guest House */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.03, rotateY: 6, boxShadow: '0 16px 40px 0 rgba(13,148,136,0.13)' }}
          className="bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col gap-4"
          style={{ perspective: 800, transformStyle: 'preserve-3d' }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#0D9488] mb-2">Old Guest House</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
            {oldGuestHouseImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Old Guest House ${index + 1}`}
                className="w-full h-40 object-cover rounded-xl shadow"
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(13,148,136,0.18)' }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <ul className="space-y-2 text-base sm:text-lg mt-2">
            <li className="flex items-center gap-2"><span className="text-[#DDA853] text-xl">🏛️</span> Heritage architecture</li>
            <li className="flex items-center gap-2"><span className="text-[#0D9488] text-xl">🛏️</span> Spacious rooms with vintage charm</li>
            <li className="flex items-center gap-2"><span className="text-[#88DADA] text-xl">🌳</span> Beautiful garden views</li>
            <li className="flex items-center gap-2"><span className="text-[#1F2647] text-xl">🔒</span> 24/7 security</li>
          </ul>
        </motion.div>
        {/* New Guest House */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.03, rotateY: -6, boxShadow: '0 16px 40px 0 rgba(221,168,83,0.13)' }}
          className="bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col gap-4"
          style={{ perspective: 800, transformStyle: 'preserve-3d' }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#DDA853] mb-2">New Guest House</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
            {newGuestHouseImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`New Guest House ${index + 1}`}
                className="w-full h-40 object-cover rounded-xl shadow"
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(221,168,83,0.18)' }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <ul className="space-y-2 text-base sm:text-lg mt-2">
            <li className="flex items-center gap-2"><span className="text-[#DDA853] text-xl">✨</span> Contemporary design</li>
            <li className="flex items-center gap-2"><span className="text-[#0D9488] text-xl">❄️</span> Air-conditioned rooms</li>
            <li className="flex items-center gap-2"><span className="text-[#88DADA] text-xl">🍽️</span> Modern dining facility</li>
            <li className="flex items-center gap-2"><span className="text-[#1F2647] text-xl">📶</span> High-speed WiFi</li>
          </ul>
        </motion.div>
      </div>

      {/* Quick Info Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, rotateX: 3, boxShadow: '0 8px 32px 0 rgba(13,148,136,0.13)' }}
        className="max-w-4xl mx-auto bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-10 mb-10 flex flex-col gap-4"
        style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-[#0D9488] mb-2">Quick Info & Booking</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2"><span className="text-2xl">✉️</span> <span><b>Email Booking:</b> <a href="mailto:guesthouse@nitsri.ac.in" className="text-[#0D9488] underline">guesthouse@nitsri.ac.in</a></span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">📞</span> <span><b>Booking Phone:</b> <a href="tel:9419220542" className="text-[#0D9488] underline">Mr. Kuldeep 9419220542</a></span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">🍽️</span> <span><b>Food Queries:</b> <a href="tel:9596043085" className="text-[#0D9488] underline">Mr. Deepak 9596043085</a></span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">📄</span> <span><b>Room Tariff:</b> <a href="https://nitsri.ac.in/Centre/Guest%20House/Guest_House_guidelines.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline">Guidelines PDF</a></span></div>
            <div className="flex items-center gap-2"><span className="text-2xl">🌐</span> <span><b>Website:</b> <a href="https://nitsri.ac.in/Centre/Deptindex.aspx?page=a&ItemID=eaeqs&nCentreID=ci" target="_blank" rel="noopener noreferrer" className="text-[#0D9488] underline">Guest House Webpage</a></span></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2"><span className="text-2xl">📝</span> <span><b>Booking Instructions:</b> Please email for booking. Avoid calling unless you do not get a response within 2 working days. No calls or email responses on Saturdays and Sundays. Avoid calling before 10 am and after 5 pm, unless for food orders.</span></div>
            <div className="flex items-start gap-2"><span className="text-2xl">🍴</span> <span><b>Food Arrangements:</b> For breakfast, inform the night before. For lunch, confirm by 10 am. For dinner, confirm by 2:30 pm. For group/party (6+), inform at least 10 days in advance.</span></div>
            <div className="flex items-start gap-2"><span className="text-2xl">❗</span> <span><b>Complaints:</b> Write to Dr. Vivek (Dept. of Civil Engg.) at <a href="mailto:guesthouse@nitsri.ac.in" className="text-[#0D9488] underline">guesthouse@nitsri.ac.in</a></span></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Accommodation;