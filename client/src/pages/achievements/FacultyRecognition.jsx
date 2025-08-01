import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTrophy, FaAward, FaLightbulb, FaBook } from 'react-icons/fa';
import heroWave from '../../assets/hero-wave.svg';

const departments = [
  { name: 'ECE', color: 'bg-teal', patentUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oaoii&ItemID=ocgqi&nDeptID=ec', publicationUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oakgi&ItemID=kagie&nDeptID=ec' },
  { name: 'EE', color: 'bg-lightblue', patentUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oamgs&ItemID=occmm&nDeptID=g', publicationUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oakma&ItemID=oaqga&nDeptID=g' },
  { name: 'CSE', color: 'bg-dark', patentUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oascq&ItemID=ocmkc&nDeptID=cs', publicationUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oaoqs&ItemID=ocieg&nDeptID=cs' },
  { name: 'CIVIL', color: 'bg-yellow', patentUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oamkm&ItemID=oceca&nDeptID=c', publicationUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oakcg&ItemID=kaesi&nDeptID=c' },
  { name: 'MECHANICAL', color: 'bg-teal', patentUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oaoio&ItemID=ococe&nDeptID=e', publicationUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oaqak&ItemID=ococe&nDeptID=e' },
  { name: 'CHEMICAL', color: 'bg-lightblue', patentUrl: '', publicationUrl: 'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oakac&ItemID=kaeok&nDeptID=ea' },
  { name: 'PHYSICS', color: 'bg-dark', patentUrl: '', publicationUrl: 'https://nitsri.ac.in/Department/PHYSICS/Publications_Dept_of_Physics.pdf' },
  { name: 'CHEMISTRY', color: 'bg-yellow', patentUrl: '', publicationUrl: 'https://nitsri.ac.in/Department/CHEMISTRY/Last_3_years_publications_(2021-2023).pdf' },
];

// Achievements: Only major faculty/departmental recognitions, research, and institutional milestones
const achievements = [
  { text: <> <span className="font-semibold text-teal">3 NIT Srinagar faculty</span> among <span className="font-semibold">world's top 2% scientists</span>. </> },
  { text: <> <span className="font-semibold text-teal">Dr. Fatima Jalid</span> (Chemical Engineering) featured in <span className="font-semibold">“She Is – Women in Chemistry”</span> book celebrating trailblazing women. </> },
  { text: <> <span className="font-semibold text-teal">Dr. Majid Hussain</span> (Civil Engineering) received funding from <span className="font-semibold">ISRO</span> for research under its prestigious <span className="font-semibold">RESPOND Programme</span>. </> },
];

const achievementsLink = "https://nitsri.ac.in/Pages/DisplayPages.aspx?page=caaqq&ItemID=eaeqa";
const awardsLink = "https://nitsri.ac.in/Pages/DisplayPages.aspx?page=es&ItemID=cacok";

// Awards: Only individual awards, honors, and best paper recognitions
const awards = [
  { text: <> <span className="font-semibold text-teal">Rajiv Gandhi Excellence Award</span> to director, NIT Srinagar - Indian Solidarity Council. </> },
  { text: <> <span className="font-semibold text-teal">Best Educationist Award</span> to director, NIT Srinagar - International Institute of Education and Management, Delhi. </> },
  { text: <> <span className="font-semibold text-teal">Dr. M. A. Rather:</span> Senior Researcher Award, <span className="font-semibold">ICEE-2021</span>. </> },
  { text: <> <span className="font-semibold text-teal">Dr. Kurella Swamy:</span> 2nd Best Paper Award, <span className="font-semibold">ATIPC-2020</span>. </> },
  { text: <> <span className="font-semibold text-teal">Dr. Farhad Ilahi Bakhsh:</span> Best Paper Award Int. Conf. on Renewable Power (<span className="font-semibold">2020</span>), 10 for 10 Typhoon HIL Award (<span className="font-semibold">2019</span>). </> },
  { text: <> <span className="font-semibold text-teal">Prof. (Dr.) Bashir Ahmed Mir:</span> Design Patent (<span className="font-semibold">2024</span>), Gantantra Diwas Puraskar (<span className="font-semibold">2025</span>), International Research Excellence Award (<span className="font-semibold">2023</span>), Keynote Paper Award GEOMATE (<span className="font-semibold">2022</span>), Distinguished Researcher Venus International Foundation (<span className="font-semibold">2021</span>), Indo Asian Distinguished Professor Award (<span className="font-semibold">2021</span>), Wall of Fame Top 20 Civil Engineering Faculties (<span className="font-semibold">2020-21</span>), Best Paper Award ACMM (<span className="font-semibold">2021</span>), Outstanding Scientist Award (<span className="font-semibold">2020</span>), Fellowship Open Association of Research Society (<span className="font-semibold">2019</span>). </> },
  { text: <> <span className="font-semibold text-teal">Outstanding Engineering Institute (North)</span>, ABP News (<span className="font-semibold">2014</span>). </> },
  { text: <> <span className="font-semibold text-teal">Rajiv Gandhi Education Excellence Award:</span> Prof. Rajat Gupta, Indian Solidarity Council. </> },
  { text: <> <span className="font-semibold text-teal">Best Educationist Award:</span> Prof. Rajat Gupta, Int. Inst. of Education & Management Delhi. </> },
];

const FacultyRecognition = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Filter departments for patents (only those with a patentUrl)
  const patentDepartments = departments.filter(dept => dept.patentUrl);

  // Add shimmer animation to hero section
  const shimmerBg = 'bg-[linear-gradient(110deg,_#e0f7fa_0%,_#f0fdfa_50%,_#e0f7fa_100%)] animate-shimmer';

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10 text-dark">
      {/* Hero Section with Parallax */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-yellow-100/60 via-lightblue/30 to-snow/80 py-10 sm:py-14 md:py-16 mb-6 sm:mb-10 `}>
        {/* Animated wave SVG */}
        <img
          src={heroWave}
          alt="wave"
          className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 object-cover animate-pulse"
          style={{ zIndex: 1 }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center px-2">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark drop-shadow-lg animate-fade-in-up mb-2 sm:mb-4 text-center">
            Faculty Recognition
          </h1>
          
          <p className="text-base xs:text-lg md:text-xl text-teal font-medium animate-fade-in-up delay-200 text-center px-2">
            Celebrating Excellence in Research and Innovation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Achievements Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <FaTrophy className="text-4xl text-yellow transition-transform duration-300 group-hover:scale-110 group-hover:text-teal hover:animate-bounce" />
              <h2 className="text-4xl font-bold text-dark">Achievements</h2>
            </div>
            <div className="w-48 h-1 bg-gradient-to-r from-teal via-yellow to-lightblue rounded-full animate-pulse" />
          </div>
          <div className="bg-white/80 rounded-xl p-8 backdrop-blur-sm shadow-lg">
            <ul className="space-y-4">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-yellow">•</span>
                  <p className="text-dark">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <a
                href={achievementsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal font-semibold underline hover:text-yellow transition-colors"
              >
                Show more achievements &rarr;
              </a>
            </div>
          </div>
        </motion.section>

        {/* Awards Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <FaAward className="text-4xl text-yellow transition-transform duration-300 group-hover:scale-110 group-hover:text-teal hover:animate-bounce" />
              <h2 className="text-4xl font-bold text-dark">Awards</h2>
            </div>
            <div className="w-48 h-1 bg-gradient-to-r from-teal via-yellow to-lightblue rounded-full animate-pulse" />
          </div>
          <div className="bg-white/80 rounded-xl p-8 backdrop-blur-sm shadow-lg">
            <ul className="space-y-4">
              {awards.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-yellow">•</span>
                  <p className="text-dark">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <a
                href={awardsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal font-semibold underline hover:text-yellow transition-colors"
              >
                Show more awards &rarr;
              </a>
            </div>
          </div>
        </motion.section>

        {/* Patents Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <FaLightbulb className="text-4xl text-yellow transition-transform duration-300 group-hover:scale-110 group-hover:text-teal hover:animate-bounce" />
              <h2 className="text-4xl font-bold text-dark">Patents</h2>
            </div>
            <div className="w-48 h-1 bg-gradient-to-r from-teal via-yellow to-lightblue rounded-full animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {patentDepartments.map((dept, idx) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className={`${dept.color} rounded-xl p-6 cursor-pointer shadow-2xl transition-all duration-300 hover:shadow-yellow/60 hover:scale-105 text-snow group`}
                style={{ color: '#FFFBFC', textShadow: '0 1px 8px rgba(0,0,0,0.18)' }}
                onClick={() => dept.patentUrl && window.open(dept.patentUrl, '_blank')}
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow transition-colors duration-300" style={{ color: '#FFFBFC', textShadow: '0 1px 8px rgba(0,0,0,0.18)' }}>{dept.name}</h3>
                <p className="text-sm opacity-90" style={{ color: '#FFFBFC', textShadow: '0 1px 8px rgba(0,0,0,0.18)' }}>{dept.patentUrl ? 'View Department Patents' : 'No Patents Available'}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Publications Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <FaBook className="text-4xl text-yellow transition-transform duration-200 group-hover:scale-110 group-hover:text-teal hover:animate-bounce" />
              <h2 className="text-4xl font-bold text-dark">Publications</h2>
            </div>
            <div className="w-48 h-1 bg-gradient-to-r from-teal via-yellow to-lightblue rounded-full animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className={`${dept.color} rounded-xl p-6 cursor-pointer shadow-2xl transition-all duration-300 hover:shadow-yellow/60 hover:scale-105 text-snow group`}
                style={{ color: '#FFFBFC', textShadow: '0 1px 8px rgba(0,0,0,0.18)' }}
                onClick={() => window.open(dept.publicationUrl, '_blank')}
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow transition-colors duration-300" style={{ color: '#FFFBFC', textShadow: '0 1px 8px rgba(0,0,0,0.18)' }}>{dept.name}</h3>
                <p className="text-sm opacity-90" style={{ color: '#FFFBFC', textShadow: '0 1px 8px rgba(0,0,0,0.18)' }}>View Department Publications</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FacultyRecognition;