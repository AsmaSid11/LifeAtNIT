import { useState, useEffect } from "react";
import heroWave from "../assets/hero-wave.svg";
import { motion } from 'framer-motion';
const events = [
  {
    title: "Techvaganza",
    
    details:"Techvaganza is a national level technical festival held anually at National Institute of Technology Srinagar. It is the first Techno-Management festival in the region. With the initiation of Techvaganza in 2009, it has emerged as one of the biggest technical carnival among all. The main aim is to uplift the technical level of the region and provide a platform for technical tender buds to innovate and gain experience in the field of technology and management. Students showcase their technical prowess through robotics challenges, coding competitions, workshops, and guest lectures. It's a platform for budding engineers to network, learn, and push the boundaries of technology.",
    images: ["/Clubs/DSC07966.webp", "/Clubs/DSC08125 (1).webp", "/Clubs/DSC02146.webp","/Clubs/DSC08048.webp","/Clubs/DSC08217.webp","/Clubs/DSC08217.webp"],
  },
  {
    title: "TedX",
    
    details:"TEDxNITSrinagar isn't your typical college event. It's a vibrant platform that ignites minds and fosters innovation within the walls of NIT Srinagar and beyond. Modeled after the globally renowned TED Talks, TEDxNITSrinagar brings together a diverse range of inspiring speakers. From pioneering scientists and innovative entrepreneurs to passionate artists and dedicated social activists, these indivisuals take the stage to share their unique ideas and experiences. In the heart of Kashmir, TEDxNITSrinagar stands as a beacon of intellectual curiousity and progress of ideas to bridge divides, inspire action, and shape a brighter future.",
    images: ["/Clubs/DSC_0453.webp", "/Clubs/DSC_0529.webp", "/Clubs/DSC_0599 (1).webp","/Clubs/DSC_0569.webp","/Clubs/DSC_0538.webp","/Clubs/DSC_0586.webp"],
  },
  {
    title: "Rang-e-chinar",

  details:"Rang-e-Chinar is a two-day annual cultural festival organized by the National Institute of Technology Srinagar. The festival is a celebration of Indian culture that showcases student activity and talent through art exhibitions, installations and performances. It also aims to inspire culinary experiences that reflect India's diversity. This vibrant cultural festival celebrates the rich tapestry of Kashmiri heritage and Indian diversity. It features music,dance,drama,literary events, and a platform for students to express their creativity and cultural identities.",
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
            <div key={i} className="flex flex-col border-t-8 border-[#1F2647] md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl space-y-6 md:space-y-0 transition-transform hover:scale-[1.01] duration-300">
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
