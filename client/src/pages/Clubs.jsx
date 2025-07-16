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
    icon: <Code size={40} className="text-[#1F2647]" />,
     bgColor: "bg-snow",
  },
  {
    title: "Seminars",
    description: "Engage with experts and expand your knowledge on cutting-edge technologies and industry trends.",

    icon: <Presentation size={40} className="text-[#1F2647]" />,
     bgColor: "bg-snow"
  },
  {
    title: "Debates",
    description: "Build confidence, critical thinking, and public speaking through structured intellectual debates.",

    icon: <Mic size={40} className="text-[#1F2647]" />,
     bgColor: "bg-snow"
  },
  {
    title: "Technical Workshops",
    description: "Hands-on experience with tools and frameworks through focused learning sessions.",
    icon: <BrainCircuit size={40} className="text-[#1F2647]" />,
     bgColor: "bg-snow"
  },
  {
    title: "Movie Screenings",
    description: "Unwind with curated film screenings ranging from thought-provoking documentaries to popular blockbusters.",
    icon: <Video size={40} className="text-[#1F2647]" />,  // from lucide-react
     bgColor: "bg-snow"
  },
  {
    title: "Competitions",
    description: "Engage in friendly competition through coding contests, design battles, hackathons, and more.",
    icon: <Trophy size={40} className="text-[#1F2647]" />,  // from lucide-react
     bgColor: "bg-snow"
  },
  {
    title: "Quizzes",
    description: "Challenge your intellect with quizzes on tech, pop culture, general knowledge, and beyond.",
    icon: <ListChecks size={40} className="text-[#1F2647]" />,  // from lucide-react
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
    className="flex flex-col items-center text-center rounded-lg p-6 shadow-md m-4 h-[23rem] w-[22rem] border-t-8 border-[#0D9488] overflow-scroll"
    style={{ backgroundColor: bgColor }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    whileHover={{ scale: 1.05 }}
    viewport={{ once: true, amount: 0.3 }}
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
"The Technology Club at NIT Srinagar is a dynamic community dedicated to fostering a passion for technology and innovation among students. This club offers various activities and initiatives aimed at providing students with opportunities to explore, create, and learn together.",
    image: "/Clubs/DSC07633.webp",
    reverse: false,

  },
  {
    title: "Cultural Club and Soap Box",
    description:
"The Cultural Club at NIT Srinagar serves as a platform for students to explore and celebrate cultural diversity. Within this club, SOAPBox stands as a symbol of free expression, providing students with a forum to voice their opinions, ideas, and concerns openly and confidently.",
    image: "/Clubs/DSC_1227.webp",
    reverse: true,
  },
  {
    title: "Movie Club",
    description:
"In partnership with the Sports and Student Activities Department, the Movie Club offers students a cinematic escape on Friday and Saturday nights. Screening a variety of films in the common hall, the club provides a space for students to unwind, relax, and enjoy the magic of cinema with their peers.",
    image: "/Clubs/pexels-tima-miroshnichenko-7991158.webp",
    reverse: false,
  },
  {
    title: "Sports Club",
    description:
"Collaborating with the Sports and Student Activities Department of NIT Srinagar, the Sports Club organises a wide range of sporting events and activities throughout the academic year. From competitive cricket and football tournaments to strength-testing weightlifting competitions, the club fosters a spirit of athleticism and camaraderie among students.",
    image: "/Clubs/pexels-pixabay-248547.webp",
    reverse: true,
  },
  {
    title: "Photography Club",
    description:
"The Photography Club at NIT Srinagar is responsible for capturing the essence of campus life through the lens. Equipped with drones and high-resolution professional cameras, the club documents events, activities, and memorable moments, preserving the vibrant spirit of the college community.",
    image: "/Clubs/pexels-asphotograpy-212372.webp",
    reverse: false,
  },
  {
    title: "Rhetorica and Ecocult Club",
    description:
"Rhetorica and EcoCult Club at NIT Srinagar are committed to fostering intellectual discourse and environmental stewardship on campus. Rhetorica hosts engaging debates and discussions, encouraging critical thinking and communication skills. EcoCult organizes eco-treks, workshops, and initiatives to raise awareness about environmental issues and promote sustainable practices.",
    image: "/Clubs/pexels-mikhail-nilov-8847168.webp",
    reverse: true,
  },
  {
    title: "Stargazing Club",
    description:
"The Stargazing Club at NIT Srinagar provides opportunities for students to explore the wonders of the universe through stargazing sessions, workshops, and talks. Students can observe the night sky and contemplate the mysteries of the cosmos in a supportive and inclusive environment.",
    image: "/Clubs/pexels-lucaspezeta-2034892.webp",
    reverse: false,
  },
  {
    title: "Sargam Club",
    description:
"Sargam Club, the Official Music and Dance Club of NIT Srinagar, is dedicated to promoting musical and dance talents among students. Through workshops, rehearsals, and performances, the club provides a platform for students to showcase their creativity and passion for the arts.",
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
      <div className="bg-snow border-t-2 border-[#1F2647] text-[#1F2647] rounded-2xl md:w-3/4 mx-auto p-12 shadow-lg">
  <h2 className="text-2xl font-extrabold mb-3 pb-2 text-center font-serif">
    About NIT SGR Gymkhana
  </h2>
  <p className="text-sm md:text-base leading-loose italic">
    NIT Srinagar has launched the Student's Gymkhana, a student-led platform aimed at promoting holistic development, leadership, and active participation in co-curricular and extracurricular activities. It includes various clubs and societies spanning cultural, technical, sports, and social domains. Managed by students with faculty guidance, the Gymkhana enables students to explore interests, organize events, and build key skills beyond academics. This initiative reflects the institute’s dedication to fostering well-rounded individuals and enriching the overall campus experience.
  </p>
</div>

      {/* Clubs Section */}
      <div className="min-h-screen max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mb-[5rem]">
        {clubsData.map((club, index) => (
          <ClubCard key={index} {...club} />
        ))}
      </div>
    {/*What we do*/}
    {/* Wavy Top Border */}
    <div className="h-8" style={{ backgroundColor: '#88DADA' }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 32"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,16 600,24 900,8 C1000,4 1100,12 1200,32 L1200,0 L0,0 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    {/* Section Content */}
    <div className="py-12 sm:py-16 mb-[3rem]" style={{ backgroundColor: '#88DADA' }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
    <h1 className='font-bold font-serif text-4xl text-[#1F2647] justify-items-center text-center mb-[1rem]'>Activities</h1>
    <div className="overflow-x-auto py-8">
  <div className="flex gap-4 px-4">
    {cardsData.map((card, index) => (
      <motion.div
      key={index}
      className={`min-w-[300px] w-[22rem] h-[23rem] border-t-8 border-[#0D9488] flex-shrink-0 p-4 rounded-xl shadow-md ${card.bgColor} flex flex-col items-center text-center`}
      style={{ backgroundColor: card.bgColor }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.3 }}
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
    <div className="h-8 "style={{ backgroundColor: '#DDA853' }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 32"
          fill="none"
          preserveAspectRatio="none"
          viewport={{ once: true, amount: 0.3 }}
        >
          <path
            d="M0,0 C300,16 600,24 900,8 C1000,4 1100,12 1200,32 L1200,0 L0,0 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    {/* Section Content */}
    <div className="py-12 sm:py-16" style={{ backgroundColor: '#DDA853' }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center"></div>
    <h1 className='font-bold font-serif text-4xl text-[#1F2647] justify-items-center text-center mt-[2rem]'>Why join Clubs?</h1>
    <div className='min-h-screen max-w-6xl mx-auto py-8 px-6 flex flex-col sm:flex-row  justify-center -mb-[5rem] '>
  {cardData.map((card, index) => (
    <InfoCards key={index} {...card} />
  ))}
</div>
  </div>


    
    
</div>
  );
};





export default Clubs;


