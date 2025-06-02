import { motion } from 'framer-motion';

import heroWave from "../assets/hero-wave.svg";

import { FaBrain, FaHandsHelping, FaLaughBeam } from "react-icons/fa";
import {
  Code,
  Mic,
  BrainCircuit,
  Presentation,
  Video,
  Trophy,
  ListChecks
} from "lucide-react"; // or swap with any icon set you like

const cardsData = [
  {
    title: "Coding Competitions",
    description: "Sharpen your programming skills through national-level hackathons and algorithmic challenges.",
    icon: <Code size={40} className="text-[#88DADA]" />,
     bgColor: "bg-snow",
  },
  {
    title: "Seminars",
    description: "Engage with experts and expand your knowledge on cutting-edge technologies and industry trends.",

    icon: <Presentation size={40} className="text-[#88DADA]" />,
     bgColor: "bg-snow"
  },
  {
    title: "Debates",
    description: "Build confidence, critical thinking, and public speaking through structured intellectual debates.",

    icon: <Mic size={40} className="text-[#88DADA]" />,
     bgColor: "bg-snow"
  },
  {
    title: "Technical Workshops",
    description: "Hands-on experience with tools and frameworks through focused learning sessions.",
    icon: <BrainCircuit size={40} className="text-[#88DADA]" />,
     bgColor: "bg-snow"
  },
  {
    title: "Movie Screenings",
    description: "Unwind with curated film screenings ranging from thought-provoking documentaries to popular blockbusters.",
    icon: <Video size={40} className="text-[#88DADA]" />,  // from lucide-react
     bgColor: "bg-snow"
  },
  {
    title: "Competitions",
    description: "Engage in friendly competition through coding contests, design battles, hackathons, and more.",
    icon: <Trophy size={40} className="text-[#88DADA]" />,  // from lucide-react
     bgColor: "bg-snow"
  },
  {
    title: "Quizzes",
    description: "Challenge your intellect with quizzes on tech, pop culture, general knowledge, and beyond.",
    icon: <ListChecks size={40} className="text-[#88DADA]" />,  // from lucide-react
     bgColor: "bg-snow"
  }
  
];

const cardData = [
  {
    icon: <FaBrain size={40} className="text-[#88DADA]" />,
    title: "Holistic Development",
    description:
      "Grow beyond academics through leadership roles, workshops, and interdisciplinary activities.",
      bgColor: '#FFFBFC',
  },
  {
    icon: <FaHandsHelping size={40} className="text-[#88DADA]" />,
    title: "Collaboration and Teamwork",
    description:
      "Work on group projects and events that foster cooperation, communication, and shared goals.",
    bgColor: '#FFFBFC',
  },
  {
    icon: <FaLaughBeam size={40} className="text-[#88DADA]" />,
    title: "Fun and Self Learning",
    description:
      "Participate in recreational clubs and self-paced learning initiatives to stay curious and inspired.",
    bgColor: '#FFFBFC',
  },
];

const InfoCards = ({ icon, title, description, bgColor }) => {
  return (
    <motion.div
    className="flex flex-col items-center text-center rounded-lg p-6 shadow-md m-4 h-[22rem] w-[20rem] border-t-8 border-[#0D9488] overflow-scroll"
    style={{ backgroundColor: bgColor }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 200 }}
  >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-[#1F2647] mb-2 font-serif">{title}</h3>
      <p className="text-[#1F2647] text-sm font-serif leading-relaxed p-[1rem]">{description}</p>
    </motion.div>
  );
};





const ClubCard = ({ title, description, image, reverse }) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center border-t-8 border-[#1F2647] bg-snow p-8 shadow-lg rounded-xl mb-5 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 12px 30px 0 rgba(13,148,136,0.20), 0 1px 6px 0 rgba(31,38,71,0.08)",
        transition: { type: 'spring', stiffness: 300 },
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
        <motion.img
          src={image}
          alt={title}
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
        <div className="font-bold font-serif text-3xl text-[#DDA853] mb-4">{title}</div>
        <p className="text-[#1F2647] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};





const clubsData = [
  {
    title: "Technology Club",
    description:
      "The Technology Club serves as a hub for innovation and technological exploration. It encompasses subdivisions like Robotics, Google Developer Student Clubs (GDSC), E-Vision, and Semicolon—the official coding club. The club organizes workshops, hackathons, encouraging students to engage in hands-on projects and collaborative learning.",
    image: "/Clubs/DSC07633.webp",
    reverse: false,

  },
  {
    title: "Cultural Club and Soap Box",
    description:
      "This club celebrates the rich cultural diversity of NIT Srinagar, providing a platform for students to express themselves through various art forms. It organizes events, debates, and discussions, fostering an environment of creativity and cultural exchange.",
    image: "/Clubs/DSC_1227.webp",
    reverse: true,
  },
  {
    title: "Movie Club",
    description:
      "The Movie Club offers a space for cinema enthusiasts to come together, watch, and discuss films. It serves as a medium for relaxation and cultural appreciation, often hosting screenings and discussions that delve into cinematic techniques and storytelling.",
    image: "/Clubs/pexels-tima-miroshnichenko-7991158.webp",
    reverse: false,
  },
  {
    title: "Sports Club",
    description:
      "Promoting physical well-being and team spirit, the Sports Club organizes various athletic events and tournaments. It encourages students to participate in sports like basketball, football, and athletics, contributing to a balanced campus life.",
    image: "/Clubs/pexels-pixabay-248547.webp",
    reverse: true,
  },
  {
    title: "Photography Club",
    description:
      "The Photography Club nurtures the artistic talents of students interested in capturing moments through the lens. It conducts workshops, photo walks, and exhibitions, allowing members to develop their skills and showcase their work.",
    image: "/Clubs/pexels-asphotograpy-212372.webp",
    reverse: false,
  },
  {
    title: "Rhetorica and Ecocult Club",
    description:
      "This club combines the art of rhetoric with environmental consciousness. It organizes debates, public speaking events, and eco-friendly initiatives, aiming to develop communication skills while promoting sustainability.",
    image: "/Clubs/pexels-mikhail-nilov-8847168.webp",
    reverse: true,
  },
  {
    title: "Stargazing Club",
    description:
      "For astronomy enthusiasts, the Stargazing Club offers opportunities to explore the night sky. It arranges observation sessions, lectures, and discussions, fostering a community interested in celestial phenomena and space science.",
    image: "/Clubs/pexels-lucaspezeta-2034892.webp",
    reverse: false,
  },
  {
    title: "Sargam Club",
    description:
      "Sargam Club is dedicated to music lovers, providing a platform for vocalists and instrumentalists to perform and collaborate. It organizes musical events, jam sessions, and competitions, enriching the campus's cultural tapestry.",
    image: "/Clubs/pexels-warre-van-de-wouwer-400573496-32233892.webp",
    reverse: true,
  },
  
];

const Clubs = () => {
  return (
    <div className="bg-[#88DADA]/20 min-h-screen">
      {/* Hero Section */}
      <div className="relative aspect-[16/4.5] w-full shadow-2xl mb-20 overflow-hidden">
        <motion.img
          src="/Clubs/DSC00584.JPG"
          alt="Student Clubs"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="py-6 px-4 w-full overflow-hidden bg-[#1F2647]/50 text-center -mb-7">
            <h1 className="text-6xl font-bold text-[#FFFBFC] animate-fade-in">
              Student <span className="text-[#0D9488]">Clubs</span>
            </h1>
            <p className="mt-1 text-lg font-medium text-[#FFFBFC] tracking-wide animate-fade-in-up">
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

      {/* Clubs Section */}
      <div className="min-h-screen max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mb-[5rem]">
        {clubsData.map((club, index) => (
          <ClubCard key={index} {...club} />
        ))}
      </div>
    {/*What we do*/}
    {/* Wavy Top Border */}
<div className="h-8 bg-[#f8fafc]">
  <svg
    className="w-full h-full"
    viewBox="0 0 1200 32"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0 C300,16 600,24 900,8 C1000,4 1100,12 1200,32 L1200,0 L0,0 Z"
      fill="#88DADA"  // This should match the section background below
    />
  </svg>
</div>

{/* Section Below with Matching Color */}
<div className="py-12 sm:py-16" style={{ backgroundColor: '#1F2647' }}>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
    {/* Section Content */}
    <h1 className='font-bold font-serif text-4xl text-[snow] justify-items-center text-center mb-[1rem]'>Activities</h1>
    <div className="overflow-x-auto ml-[12rem] py-8">
  <div className="flex gap-4 px-4">
    {cardsData.map((card, index) => (
      <motion.div
      key={index}
      className={`min-w-[300px] w-[20rem] h-[23rem] border-t-8 border-[#0D9488] flex-shrink-0 p-4 rounded-xl shadow-md ${card.bgColor} flex flex-col items-center text-center`}
      style={{ backgroundColor: card.bgColor }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <div className="flex justify-center items-center text-5xl">
        {card.icon}
      </div>
      <h3 className="text-2xl font-bold mt-4 font-serif text-[#DDA853]">{card.title}</h3>
      <p className="text-sm font-serif leading-relaxed p-[1rem]" style={{ color: "#1F2647" }}>
        {card.description}
      </p>
    </motion.div>
    
    ))}
  </div>
</div>
  </div>
</div>

    


    

    {/*Why join us */}

    {/* Wavy Top Border */}
<div className="h-5 bg-[#DDA853] mt-[3rem]">
  <svg
    className="w-full h-full"
    viewBox="0 0 1200 32"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0 C300,16 600,24 900,8 C1000,4 1100,12 1200,32 L1200,0 L0,0 Z"
      fill="#88DADA"  // This should match the section background below
    />
  </svg>
</div>

{/* Section Below with Matching Color */}
<div className="py-10 sm:py-16 mb-[10rem]"  style={{ backgroundColor: '#DDA853' }}>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
    {/* Section Content */}
    <h1 className='font-bold font-serif text-4xl text-snow justify-items-center text-center mt-[2rem]'>Why join Clubs?</h1>
    <div className='min-h-screen max-w-6xl mx-auto py-8 px-6 flex flex-row justify-center -mb-[5rem]'>
  {cardData.map((card, index) => (
    <InfoCards key={index} {...card} />
  ))}
</div>
  </div>
</div>

    
    
    </div>
  );
};




export default Clubs;


