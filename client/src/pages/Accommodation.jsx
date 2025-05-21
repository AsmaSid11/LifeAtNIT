import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const oldGuestHouseImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&w=800&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&w=800&q=80',
  'https://images.unsplash.com/photo-1542928658-22251e208ac1?ixlib=rb-4.0.3&w=800&q=80',
];

const newGuestHouseImages = [
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&w=800&q=80',
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&w=800&q=80',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&w=800&q=80',
];

const heroBg =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80';

const heroVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const Accommodation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBFC] to-[#88DADA]/20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mb-12">
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
          className="relative z-10 flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#DDA853] via-[#FFFBFC] to-[#88DADA] drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Welcome to NIT Guest Houses
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-[#FFFBFC] max-w-2xl font-medium drop-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Experience a blend of classic charm and modern luxury.
            <br />
            Discover your perfect stay at our Old &amp; New Guest Houses.
          </motion.p>
          <motion.div
            className="mt-10 flex gap-6 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            
          </motion.div>
        </motion.div>
        {/* Animated floating shapes */}
        <motion.div
          className="absolute left-10 top-10 w-16 h-16 rounded-full bg-[#88DADA]/60 blur-2xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-20 bottom-10 w-24 h-24 rounded-full bg-[#DDA853]/40 blur-2xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 w-10 h-10 rounded-full bg-[#1F2647]/40 blur-xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >

        {/* Old Guest House Section */}
        <Parallax speed={-10}>
          <section className="mb-32" id="old-guest-house">
            <motion.h2
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              className="text-3xl font-bold text-[#1F2647] mb-8"
            >
              Old Guest House
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gallery with 3D effect */}
              <div className="grid grid-cols-2 gap-8">
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
                      className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
                      style={{
                        boxShadow: "0 8px 24px 0 rgba(13,148,136,0.10)",
                        transition: "box-shadow 0.3s, transform 0.3s",
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1F2647]/10 to-[#88DADA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-4 left-4 bg-[#FFFBFC]/80 px-4 py-2 rounded-xl shadow text-[#1F2647] font-semibold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
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
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl text-[#1F2647] shadow-2xl border border-[#88DADA]/20 flex flex-col justify-center"
                style={{
                  perspective: 800,
                  transformStyle: "preserve-3d",
                }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#0D9488] drop-shadow">Classic Comfort</h3>
                <ul className="space-y-4 text-lg">
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
          <section className="mb-32" id="new-guest-house">
            <motion.h2
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              className="text-3xl font-bold text-[#1F2647] mb-8 text-right"
            >
              New Guest House
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 6,
                  boxShadow: "0 16px 40px 0 rgba(221,168,83,0.18), 0 1.5px 8px 0 rgba(31,38,71,0.10)",
                  transition: { type: 'spring', stiffness: 200 },
                }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl text-[#1F2647] shadow-2xl border border-[#88DADA]/20 order-2 lg:order-1 flex flex-col justify-center"
                style={{
                  perspective: 800,
                  transformStyle: "preserve-3d",
                }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#DDA853] drop-shadow">Modern Luxury</h3>
                <ul className="space-y-4 text-lg">
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
              <div className="grid grid-cols-2 gap-8 order-1 lg:order-2">
                {newGuestHouseImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-visible rounded-2xl shadow-2xl bg-white/60 backdrop-blur-md"
                    whileHover={{
                      scale: 1.08,
                      rotateY: -10,
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
                      alt={`New Guest House ${index + 1}`}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
                      style={{
                        boxShadow: "0 8px 24px 0 rgba(13,148,136,0.10)",
                        transition: "box-shadow 0.3s, transform 0.3s",
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1F2647]/10 to-[#88DADA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-4 left-4 bg-[#FFFBFC]/80 px-4 py-2 rounded-xl shadow text-[#1F2647] font-semibold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </Parallax>
      </motion.div>
    </div>
  );
};

export default Accommodation;