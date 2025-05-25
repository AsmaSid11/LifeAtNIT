import { useState, useEffect } from "react";
import heroWave from "../assets/hero-wave.svg";

const events = [
  {
    title: "Techvaganza",
    desc: "Techvaganza is our flagship event with coding marathons, tech talks, and exhibitions.",
    details: "Techvaganza is a vibrant celebration of technology, innovation, and youthful energy. The fest brings  together tech enthusiasts, gamers, entrepreneurs, and thinkers from across the region. With an engaging mix of technical workshops, spirited competitions, and inspiring talks, Techvaganza offers a platform for ideas to flourish and talents to shine.The event pulses with creativity and collaboration. ",
    images: ["/fest1.webp", "/club2.jpeg", "/club5.avif"],
  },
  {
    title: "TedX",
    desc: "TedX events bring thought leaders to our campus, sharing ideas worth spreading.",
    details: "TedX NIT Srinagar is a platform that ignites ideas and inspires change. Bringing together thought leaders, innovators, and changemakers from diverse fields, TedX sparks meaningful conversations and celebrates the power of storytelling. From cutting-edge technology to personal journeys of resilience, each talk is a window into ideas worth spreading. The event fosters curiosity, challenges perspectives, and encourages the campus community to think beyond boundaries.",
    images: ["/club5.avif", "/club2.jpeg", "/fest1.webp"],
  },
  {
    title: "Rang-e-chinar",
    desc: "A cultural fest celebrating drama, music, and dance with vibrant performances.",
    details: "Rang-e-Chinar is a vibrant celebration of culture and creativity at NIT Srinagar. This fest brings together the essence of Kashmir’s rich heritage through captivating performances, art displays, music, and storytelling. It is a space where tradition meets youthful expression, where colors, rhythms, and voices echo the spirit of the valley. Rang-e-Chinar offers students a soulful platform to embrace and showcase their cultural roots with pride and passion.",
    images: ["/club5.avif", "/fest1.webp", "/club2.jpeg"],
  },
  {
    title: "Extravaganza",
    desc: "From inter-departmental cricket to marathon races, it's all about the game!",
    details: "Extravaganza is the heartbeat of cultural celebration at NIT Srinagar. Blending music, dance, drama, and art, it showcases the vibrant talents of students and creates unforgettable moments of joy and unity. From electrifying performances to creative exhibitions, Extravaganza is where passion meets performance — a true celebration of expression, diversity, and the colorful spirit of campus life.",
    images: ["/club5.avif", "/club2.jpeg", "/fest1.webp"],
  },
  {
    title: "Techfusion",
    desc: "A fusion of art and tech with photography workshops and AI-generated galleries.",
    details:"Techfusion is where innovation meets imagination at NIT Srinagar. A celebration of emerging technologies and creative thinking, it brings together coders, developers, designers, and tech enthusiasts under one roof. With hands-on projects, interactive showcases, and problem-solving challenges, Techfusion serves as a dynamic platform for students to fuse their technical skills with artistic flair — driving the spirit of innovation forward on campus.",
    images: ["/fest1.webp", "/club5.avif", "/club2.jpeg"],
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
    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
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
    </div>
  );
};

const Fests = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="bg-[#FFFBFC] min-h-screen bg-[#88DADA]/20">
      <div className="relative aspect-[16/4.5] w-full shadow-2xl mb-20 overflow-hidden">
        <img src="/fest1.webp" alt="Student Clubs" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <div className="py-6 px-4 w-full overflow-hidden bg-[#1F2647]/60 text-center">
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
            <h1 className="text-6xl font-bold text-[#FFFBFC] animate-fade-in-up">Campus <span className="text-[#0D9488]">Fests</span></h1>
            <p className="mt-2 text-lg font-medium text-[#FFFBFC] tracking-wide animate-slide-in-up">
              Dive into the festive pulse
            </p>
          </div>
          <img src={heroWave} alt="wave" className="absolute bottom-0 left-0 w-full h-16 md:h-20 object-cover z-10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12 ">
        {events.map((event, i) => {
          const isEven = i % 2 === 0;
          const isExpanded = expandedIndex === i;

          return (
            <div key={i} className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl space-y-6 md:space-y-0">
              {isEven ? (
                <>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold font-serif text-[#1F2647]">{event.title}</h2>
                    <p className="text-[#1F2647] leading-relaxed">{isExpanded ? event.details : event.desc}</p>
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      className="text-sm text-teal-600 hover:underline"
                    >
                      {isExpanded ? "Show Description" : "Show More"}
                    </button>
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
                    <p className="text-[#1F2647] leading-relaxed pl-8">{isExpanded ? event.details : event.desc}</p>
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      className="text-sm text-teal-600 hover:underline pl-8"
                    >
                      {isExpanded ? "Show Description" : "Show More"}
                    </button>
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
