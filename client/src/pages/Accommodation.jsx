import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useEffect } from 'react';

const oldGuestHouseImages = [
  '/Amenities/old-guest-house.jpg',
  '/Amenities/old-guest-house2.jpg',
  '/Amenities/old-guest-house.jpg',
];

const newGuestHouseImages = [
  '/Amenities/old-guest-house.jpg',
  '/Amenities/old-guest-house2.jpg',
  '/Amenities/old-guest-house.jpg',
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
            Experience a blend of classic charm and modern luxury.
            <br className="hidden xs:block" />
            Discover your perfect stay at our Old &amp; New Guest Houses.
          </motion.p>
        </motion.div>
        {/* Animated floating shapes */}
        <motion.div
          className="absolute left-4 top-4 sm:left-10 sm:top-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[#88DADA]/60 blur-2xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-8 bottom-4 sm:right-20 sm:bottom-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#DDA853]/40 blur-2xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#1F2647]/40 blur-xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto py-8 sm:py-12 px-2 xs:px-4 sm:px-6 lg:px-8"
      >

        {/* Old Guest House Section */}
        <Parallax speed={-10}>
          <section className="mb-20 sm:mb-32" id="old-guest-house">
            <motion.h2
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              className="text-2xl sm:text-3xl font-bold text-[#1F2647] mb-6 sm:mb-8"
            >
              Old Guest House
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Gallery with 3D effect */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-8">
                {oldGuestHouseImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-visible rounded-2xl shadow-2xl bg-white/60 backdrop-blur-md"
                    whileHover={{
                      scale: 1.08,
                      rotateY: 10,
                      boxShadow: "0 16px 40px 0 rgba(13,148,136,0.25), 0 1.5px 8px 0 rgba(31,38,71,0.10)",
                      zIndex: 30,
                      transition: { type: 'spring', stiffness: 300 },
                    }}
                    style={{
                      perspective: 1000,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Old Guest House ${index + 1}`}
                      className="w-full h-44 xs:h-56 sm:h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
                      style={{
                        boxShadow: "0 8px 24px 0 rgba(13,148,136,0.10)",
                        transition: "box-shadow 0.3s, transform 0.3s",
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1F2647]/10 to-[#88DADA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-[#FFFBFC]/80 px-2 py-1 sm:px-4 sm:py-2 rounded-xl shadow text-[#1F2647] font-semibold text-sm sm:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Card with glassmorphism and 3D hover */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 6,
                  boxShadow: "0 16px 40px 0 rgba(221,168,83,0.18), 0 1.5px 8px 0 rgba(31,38,71,0.10)",
                  transition: { type: 'spring', stiffness: 200 },
                }}
                className="bg-white/70 backdrop-blur-xl p-4 sm:p-8 rounded-2xl text-[#1F2647] shadow-2xl border border-[#88DADA]/20 flex flex-col justify-center mt-4 xs:mt-0"
                style={{
                  perspective: 800,
                  transformStyle: "preserve-3d",
                }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#0D9488] drop-shadow">Classic Comfort</h3>
                <ul className="space-y-2 sm:space-y-4 text-base sm:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-[#DDA853] text-xl">🏛️</span> Heritage architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] text-xl">🛏️</span> Spacious rooms with vintage charm
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#88DADA] text-xl">🌳</span> Beautiful garden views
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1F2647] text-xl">🔒</span> 24/7 security
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>
        </Parallax>

        {/* New Guest House Section */}
        <Parallax speed={10}>
          <section className="mb-20 sm:mb-32" id="new-guest-house">
            <motion.h2
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              className="text-2xl sm:text-3xl font-bold text-[#1F2647] mb-6 sm:mb-8 text-right"
            >
              New Guest House
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 6,
                  boxShadow: "0 16px 40px 0 rgba(221,168,83,0.18), 0 1.5px 8px 0 rgba(31,38,71,0.10)",
                  transition: { type: 'spring', stiffness: 200 },
                }}
                className="bg-white/70 backdrop-blur-xl p-4 sm:p-8 rounded-2xl text-[#1F2647] shadow-2xl border border-[#88DADA]/20 order-2 lg:order-1 flex flex-col justify-center mt-4 xs:mt-0"
                style={{
                  perspective: 800,
                  transformStyle: "preserve-3d",
                }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#DDA853] drop-shadow">Modern Luxury</h3>
                <ul className="space-y-2 sm:space-y-4 text-base sm:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-[#DDA853] text-xl">✨</span> Contemporary design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] text-xl">❄️</span> Air-conditioned rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#88DADA] text-xl">🍽️</span> Modern dining facility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1F2647] text-xl">📶</span> High-speed WiFi
                  </li>
                </ul>
              </motion.div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-8 order-1 lg:order-2">
                {newGuestHouseImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-visible rounded-2xl shadow-2xl bg-white/60 backdrop-blur-md"
                    whileHover={{
                      scale: 1.06,    // Reduced scale
                      rotateY: -8,   // Reduced rotation
                      boxShadow: "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)", // Subtler shadow
                      zIndex: 30,
                      transition: { type: 'spring', stiffness: 280 }, // Adjusted transition
                    }}
                    style={{
                      perspective: 1000,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      src={img}
                      alt={`New Guest House ${index + 1}`}
                      className="w-full h-44 xs:h-56 sm:h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
                      style={{
                        boxShadow: "0 8px 24px 0 rgba(13,148,136,0.10)",
                        transition: "box-shadow 0.3s, transform 0.3s",
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1F2647]/10 to-[#88DADA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-[#FFFBFC]/80 px-2 py-1 sm:px-4 sm:py-2 rounded-xl shadow text-[#1F2647] font-semibold text-sm sm:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </Parallax>
      </motion.div>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.39, 0.575, 0.565, 1] }}
        className="py-10 sm:py-16 px-2 xs:px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4 sm:mb-6">Book Your Stay</h2>
          <p className="text-base sm:text-lg text-dark/80 mb-6 sm:mb-8">
            For reservations and inquiries, reach out to us directly:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="tel:+911234567890"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 32px 0 rgba(13,148,136,0.25), 0 1.5px 8px 0 rgba(31,38,71,0.10)",
                y: -6,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center gap-3 bg-gradient-to-r from-[#0D9488] to-[#88DADA] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-[#0D9488]/90 hover:to-[#88DADA]/90 transition-all duration-300 text-lg sm:text-xl border-2 border-transparent hover:border-[#0D9488]"
              style={{ textDecoration: "none", perspective: "600px", transformStyle: "preserve-3d" }}
            >
              <span className="text-2xl drop-shadow">📞</span> Call Now
            </motion.a>
            <motion.a
              href="mailto:guesthouse@nit.edu.in"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 8px 32px 0 rgba(31,38,71,0.18), 0 1.5px 8px 0 rgba(13,148,136,0.10)",
                y: -6,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center gap-3 bg-gradient-to-r from-[#1F2647] to-[#0D9488] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-[#1F2647]/90 hover:to-[#0D9488]/90 transition-all duration-300 text-lg sm:text-xl border-2 border-transparent hover:border-[#1F2647]"
              style={{ textDecoration: "none", perspective: "600px", transformStyle: "preserve-3d" }}
            >
              <span className="text-2xl drop-shadow">✉️</span> Email Us
            </motion.a>
          </div>
          <div className="mt-5 text-xs text-dark/60">
            <span>Phone: +91 12345 67890</span> &nbsp;|&nbsp; <span>Email: guesthouse@nit.edu.in</span>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Accommodation;