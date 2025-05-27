import { motion } from 'framer-motion';
import heroWave from "../assets/hero-wave.svg";

const Clubs = () => {
  return (
    <div className="bg-[#88DADA]/20 min-h-screen">
      <div className="relative aspect-[16/4.5] w-full shadow-2xl mb-20 overflow-hidden">
        <img
          src="/Clubs/DSC00584.JPG"
          alt="Student Clubs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="py-6 px-4 w-full overflow-hidden bg-[#1F2647]/50 text-center -mb-7">
            <style>
              {`
                @keyframes slideInUp {
                  from {
                    transform: translateY(40px);
                    opacity: 0;
                  }
                  to {
                    transform: translateY(0);
                    opacity: 1;
                  }
                }
                .animate-slide-in-up {
                  animation: slideInUp 0.7s ease-out forwards;
                }
              `}
            </style>
            <h1 className="text-6xl font-bold text-[#FFFBFC] animate-fade-in-up">
              Student <span className="text-[#0D9488]">Clubs</span>
            </h1>
            <p className="mt-1 text-lg font-medium text-[#FFFBFC] tracking-wide animate-slide-in-up ">
              Connect. Collaborate. Create.
            </p>
          </div>
          <img
            src={heroWave}
            alt="wave"
            className="absolute bottom-0 left-0 w-full h-16 md:h-20 object-cover z-10"
          />
        </div>
      </div>
      <div className="min-h-screen ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Technology Club */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5"
            whileHover={{
              scale: 1.02, // Reduced scale
              boxShadow:
                "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)", //Subtler shadow
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full md:w-1/2">
              <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
                Technology Club
              </div>
              <p className="text-[#1F2647] leading-relaxed">
                The Technology Club serves as a hub for innovation and technological
                exploration. It encompasses subdivisions like Robotics, Google Developer
                Student Clubs (GDSC), E-Vision, and Semicolon—the official coding club.
                The club organizes workshops, hackathons,encouraging students to engage
                in hands-on projects and collaborative learning.
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <motion.img
                src="/Clubs/DSC07633.JPG"
                alt="photo"
                className="rounded-lg shadow-md object-cover w-full h-auto"
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
            </div>
          </motion.div>

          {/* Cultural Club and Soap Box */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5"
            whileHover={{
              scale: 1.02,  // Reduced scale
              boxShadow:
                "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",  // Subtler shadow
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <motion.img
                src="/Clubs/DSC_1227.JPG"
                alt="photo"
                className="rounded-lg shadow-md object-cover w-full h-auto"
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
                Cultural Club and Soap Box
              </div>
              <p className="text-[#1F2647] leading-relaxed">
                This club celebrates the rich cultural diversity of NIT Srinagar, providing
                a platform for students to express themselves through various art forms.
                It organizes events, debates, and discussions, fostering an environment
                of creativity and cultural exchange.{" "}
              </p>
            </div>
          </motion.div>

          {/* Movie Club */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5"
            whileHover={{
              scale: 1.02,  // Reduced scale
              boxShadow:
                "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",  // Subtler shadow
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full md:w-1/2">
              <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
                Movie Club
              </div>
              <p className="text-[#1F2647] leading-relaxed">
                The Movie Club offers a space for cinema enthusiasts to come together,
                watch, and discuss films. It serves as a medium for relaxation and
                cultural appreciation, often hosting screenings and discussions that
                delve into cinematic techniques and storytelling.{" "}
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <motion.img
                src="/Clubs/pexels-tima-miroshnichenko-7991158.jpg"
                alt="photo"
                className="rounded-lg shadow-md object-cover w-full h-auto"
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
            </div>
          </motion.div>

          {/* Sports Club */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5"
            whileHover={{
              scale: 1.02,  // Reduced scale
              boxShadow:
                "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",  // Subtler shadow
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <motion.img
                src="/Clubs/pexels-pixabay-248547.jpg"
                alt="photo"
                className="rounded-lg shadow-md object-cover w-full h-auto"
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
                Sports Club
              </div>
              <p className="text-[#1F2647] leading-relaxed">
                Promoting physical well-being and team spirit, the Sports Club organizes
                various athletic events and tournaments. It encourages students to
                participate in sports like basketball, football, and athletics,
                contributing to a balanced campus life.
              </p>
            </div>
          </motion.div>

          {/* Photography Club */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5"
            whileHover={{
              scale: 1.02,  // Reduced scale
              boxShadow:
                "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",  // Subtler shadow
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full md:w-1/2">
              <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
                Photography Club
              </div>
              <p className="text-[#1F2647] leading-relaxed">
                The Photography Club nurtures the artistic talents of students interested
                in capturing moments through the lens. It conducts workshops, photo
                walks, and exhibitions, allowing members to develop their skills and
                showcase their work.
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <motion.img
                src="/Clubs/pexels-asphotograpy-212372.jpg"
                alt="photo"
                className="rounded-lg shadow-md object-cover w-full h-auto"
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
            </div>
          </motion.div>

          {/* Rhetorica and Ecocult Club */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5"
            whileHover={{
              scale: 1.02,  // Reduced scale
              boxShadow:
                "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",  // Subtler shadow
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <motion.img
                src="/Clubs/pexels-mikhail-nilov-8847168.jpg"
                alt="photo"
                className="rounded-lg shadow-md object-cover w-full h-auto"
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
                Rhetorica and Ecocult Club
              </div>
              <p className="text-[#1F2647] leading-relaxed">
                This club combines the art of rhetoric with environmental consciousness.
                It organizes debates, public speaking events, and eco-friendly
                initiatives, aiming to develop communication skills while promoting
                sustainability.
              </p>
            </div>
          </motion.div>

          {/* Stargazing Club */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5"
            whileHover={{
              scale: 1.02,  // Reduced scale
              boxShadow:
                "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",  // Subtler shadow
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full md:w-1/2">
              <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
                Stargazing Club
              </div>
              <p className="text-[#1F2647] leading-relaxed">
                For astronomy enthusiasts, the Stargazing Club offers opportunities to
                explore the night sky. It arranges observation sessions, lectures, and
                discussions, fostering a community interested in celestial phenomena and
                space science.
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <motion.img
                src="/Clubs/pexels-lucaspezeta-2034892.jpg"
                alt="photo"
                className="rounded-lg shadow-md object-cover w-full h-auto "
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
            </div>
          </motion.div>

          {/* Sargam Club */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5"
            whileHover={{
              scale: 1.02,  // Reduced scale
              boxShadow:
                "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",  // Subtler shadow
              transition: { type: 'spring', stiffness: 300 },
            }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <motion.img
                src="/Clubs/pexels-warre-van-de-wouwer-400573496-32233892.jpg"
                alt="photo"
                className="rounded-lg shadow-md object-cover w-full h-auto"
                whileHover={{
                  scale: 1.06,
                  boxShadow:
                    "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
                Sargam Club
              </div>
              <p className="text-[#1F2647] leading-relaxed">
                Sargam Club is dedicated to music lovers, providing a platform for
                vocalists and instrumentalists to perform and collaborate. It organizes
                musical events, jam sessions, and competitions, enriching the campus's
                cultural tapestry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;