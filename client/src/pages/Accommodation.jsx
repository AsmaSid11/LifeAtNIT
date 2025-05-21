import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { useEffect } from 'react';

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
    <div className="min-h-screen bg-gradient-to-b from-snow to-lightblue/10 scroll-smooth">
      {/* Hero Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
        strength={350}
        className="h-[60vh]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative h-full flex items-center justify-center"
        >
          {/* Gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-transparent z-0" />
          {/* Glassmorphism heading */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31,38,47,0.37)" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative z-10 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/30 mx-auto px-8 py-6 w-full max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.39, 0.575, 0.565, 1] }}
              className="text-5xl font-bold text-snow text-center drop-shadow-2xl tracking-tight w-full"
            >
              Guest House Accommodations
            </motion.h1>
          </motion.div>
        </motion.div>
      </Parallax>

      {/* Old Guest House Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl font-bold text-dark">Old Guest House</h2>
              <p className="text-lg text-dark/80">
                Our traditional guest house offers a blend of comfort and heritage.
                Experience the charm of our well-maintained facilities with modern amenities.
              </p>
              <ul className="space-y-3 text-dark/80">
                <motion.li variants={fadeInUp} className="flex items-center">
                  <svg className="h-6 w-6 text-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Room Service
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center">
                  <svg className="h-6 w-6 text-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Free Wi-Fi
                </motion.li>
                {/* Add more amenities */}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                initial={{ rotate: 3 }}
                animate={{ rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="transition-transform"
              >
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
                  alt="Old Guest House"
                  className="rounded-lg shadow-xl object-cover h-64 w-full"
                />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                initial={{ rotate: -3 }}
                animate={{ rotate: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="transition-transform"
              >
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80"
                  alt="Old Guest House Interior"
                  className="rounded-lg shadow-xl object-cover h-64 w-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* New Guest House Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-lightblue/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="grid grid-cols-2 gap-4 order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                initial={{ rotate: 3 }}
                animate={{ rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="transition-transform"
              >
                <img
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80"
                  alt="New Guest House"
                  className="rounded-lg shadow-xl object-cover h-64 w-full"
                />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                initial={{ rotate: -3 }}
                animate={{ rotate: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="transition-transform"
              >
                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80"
                  alt="New Guest House Interior"
                  className="rounded-lg shadow-xl object-cover h-64 w-full"
                />
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-dark">New Guest House</h2>
              <p className="text-lg text-dark/80">
                Our modern guest house features contemporary design and state-of-the-art facilities.
                Enjoy luxury accommodations with premium amenities.
              </p>
              <ul className="space-y-3 text-dark/80">
                <motion.li variants={fadeInUp} className="flex items-center">
                  <svg className="h-6 w-6 text-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Modern Conference Facilities
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-center">
                  <svg className="h-6 w-6 text-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Restaurant & Cafe
                </motion.li>
                {/* Add more amenities */}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.39, 0.575, 0.565, 1] }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark mb-8">Book Your Stay</h2>
          <p className="text-lg text-dark/80 mb-8">
            For reservations and inquiries, please contact us:
          </p>
          <div className="inline-flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="bg-teal text-snow px-8 py-3 rounded-lg font-medium hover:bg-teal/90 transition-colors"
            >
              Call Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="bg-dark text-snow px-8 py-3 rounded-lg font-medium hover:bg-dark/90 transition-colors"
            >
              Email Us
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Accommodation;