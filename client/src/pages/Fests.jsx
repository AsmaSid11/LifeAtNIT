import { useState, useEffect } from "react";
import heroWave from "../assets/hero-wave.svg";
import { motion } from 'framer-motion';
const events = [
  {
    title: "Techvaganza",
    
    details: "Techvaganza is a vibrant celebration of technology, innovation, and youthful energy. The fest brings  together tech enthusiasts, gamers, entrepreneurs, and thinkers from across the region. With an engaging mix of technical workshops, spirited competitions, and inspiring talks, Techvaganza offers a platform for ideas to flourish and talents to shine.The event pulses with creativity and collaboration. ",
    images: ["/Clubs/DSC07966.webp", "/Clubs/DSC08125 (1).webp", "/Clubs/DSC02146.webp","/Clubs/DSC08048.webp","/Clubs/DSC08217.webp","/Clubs/DSC08217.webp"],
  },
  {
    title: "TedX",
    
    details: "TedX NIT Srinagar is a platform that ignites ideas and inspires change. Bringing together thought leaders, innovators, and changemakers from diverse fields, TedX sparks meaningful conversations and celebrates the power of storytelling. From cutting-edge technology to personal journeys of resilience, each talk is a window into ideas worth spreading. The event fosters curiosity, challenges perspectives, and encourages the campus community to think beyond boundaries.",
    images: ["/Clubs/DSC_0453.webp", "/Clubs/DSC_0529.webp", "/Clubs/DSC_0599 (1).webp","/Clubs/DSC_0569.webp","/Clubs/DSC_0538.webp","/Clubs/DSC_0586.webp"],
  },
  {
    title: "Rang-e-chinar",

    details: "Rang-e-Chinar is a vibrant celebration of culture and creativity at NIT Srinagar. This fest brings together the essence of Kashmir’s rich heritage through captivating performances, art displays, music, and storytelling. It is a space where tradition meets youthful expression, where colors, rhythms, and voices echo the spirit of the valley. Rang-e-Chinar offers students a soulful platform to embrace and showcase their cultural roots with pride and passion.",
    images: ["/Clubs/DSC_0960.webp", "/Clubs/DSC_1265.webp", "/Clubs/DSC02196 (1).webp"],
  },
  {
    title: "Extravaganza",

    details: "Extravaganza is the heartbeat of cultural celebration at NIT Srinagar. Blending music, dance, drama, and art, it showcases the vibrant talents of students and creates unforgettable moments of joy and unity. From electrifying performances to creative exhibitions, Extravaganza is where passion meets performance — a true celebration of expression, diversity, and the colorful spirit of campus life.",
    images: ["/Clubs/DSC_1260.webp", "/Clubs/DSC_1227.webp", "/Clubs/DSC_1265.webp","/Clubs/DSC_1205.webp","/Clubs/DSC_1248.webp","/Clubs/DSC_1026.webp"],
  },
  {
    title: "Techfusion",

    details:"Techfusion is where innovation meets imagination at NIT Srinagar. A celebration of emerging technologies and creative thinking, it brings together coders, developers, designers, and tech enthusiasts under one roof. With hands-on projects, interactive showcases, and problem-solving challenges, Techfusion serves as a dynamic platform for students to fuse their technical skills with artistic flair — driving the spirit of innovation forward on campus.",
    images: ["/Clubs/DSC00586.webp", "/Clubs/DSC00598.webp", "/Clubs/DSC00584.webp"],
  },
];

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, [images]);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <motion.div // Wrap the carousel with motion.div
      className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md"
      whileHover={{ // Add hover animation
        scale: 1.05,
        boxShadow: "0 8px 24px 0 rgba(13,148,136,0.25), 0 1.5px 8px 0 rgba(31,38,71,0.10)",
        transition: { type: 'spring', stiffness: 300 },
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <img
        src={images[index]}
        alt="event"
        className="w-full h-full object-cover transition-all duration-500"
      />
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white w-10 h-16 rounded-md flex items-center justify-center shadow-md"
      >
        &#10094;
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white w-10 h-16 rounded-md flex items-center justify-center shadow-md"
      >
        &#10095;
      </button>
    </motion.div>
  );
};

const Fests = () => {


  return (
    <div className="bg-[#88DADA]/20 min-h-screen">
      <div className="relative aspect-[16/4.5] w-full shadow-2xl mb-20 overflow-hidden">

        <motion.img src="/Clubs/DSC07608.JPG" alt="Student Clubs" className="w-full h-full object-cover" initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}/>

            {/* <img src="/Clubs/DSC07608.webp" alt="Student Clubs" className="w-full h-full object-cover" /> */}

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <div className="py-6 px-4 w-full overflow-hidden bg-[#1F2647]/50 text-center -mb-10">
          
            <h1 className="text-6xl font-bold text-[#0D9488] animate-fade-in">Fests</h1>
            <p className="mt-0 text-lg font-medium text-[#FFFBFC] tracking-wide animate-fade-in-up">
             <i>Dive into the festive pulse</i> 
            </p>
          </div>
          <img src={heroWave} alt="wave" className="absolute bottom-0 left-0 w-full h-16 md:h-20 object-cover z-10" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12 ">
        {events.map((event, i) => {
          const isEven = i % 2 === 0;


          return (
            <div key={i} className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl space-y-6 md:space-y-0 transition-transform hover:scale-[1.01] duration-300">
              {isEven ? (
                <>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold font-serif text-[#1F2647]">{event.title}</h2>
                    <p className="text-[#1F2647] leading-relaxed">{event.details} </p>
                    
                      
                  </div>
                  <div className="w-full md:w-1/2">
                    <Carousel images={event.images} />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-1/2">
                    <Carousel images={event.images} />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold font-serif text-[#1F2647] pl-8">{event.title}</h2>
                    <p className="text-[#1F2647] leading-relaxed pl-8"> {event.details}</p>
                    


                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fests;
