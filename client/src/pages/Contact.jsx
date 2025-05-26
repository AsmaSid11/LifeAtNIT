import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import userIcon from "/images/userIcon.png";
import heroWave from "../assets/hero-wave.svg";
import { useState } from "react";

const teamMembers = [
  {
    name: "Qazi Izma",
    role: "Web Developer",
    image: "/images/team/izma.jpg",
    funFact: "Loves code and caffeine ☕",
    email: "qaziizmaa@gmail.com ",
    enrollment: "2021BITE025",
    linkedin: "https://www.linkedin.com/in/qazi-izma-6ab544228/",
    github: "https://github.com/Enigma014",
  },
  {
    name: "Asma Siddiqui",
    role: "Web Developer",
    image: userIcon,
    funFact: "Bookmarks aren't just for browsers 🔖",
    email: "asmasiddiqui511@gmail.com",
    enrollment: "2023BCSE029",
    linkedin: "https://www.linkedin.com/in/asmasid11",
    github: "https://github.com/AsmaSid11",
  },
  {
    name: "Harshita",
    role: "Web Developer",
    image: "/images/team/harshita.jpg", 
    funFact: "Finds peace in coding and singing 🌼",
    email: "harshita2386@gmail.com",
    enrollment: "2023BCSE022",
    linkedin: "https://www.linkedin.com/in/harshita-dubey-bb9168286",
    github: "https://github.com/Hash-D25",
  },
  {
    name: "Ankita Kuntal",
    role: "Web Developer",
    image: "/images/team/ankita.jpg",
    funFact: "Can center divs but not her inner peace!✌",
    email: "2023nitsgr153@nitsri.ac.in",
    enrollment: "2023BITE007",
    linkedin:
      "https://www.linkedin.com/in/ankita-kuntal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Ankita-kuntal",
  },
];

const faqs = [
  {
    question: "Whom do I reach out to for Wi-Fi or internet issues",
    answer:
      "Visit the Amenities section for details on the IT Cell and network support team contacts.",
  },
  {
    question: "How do I apply for hostel accommodation",
    answer:
      "Hostel allotment is usually done through the Dean of Students' portal (if applied). Details will be provided via email or notice.",
  },
  {
    question: "Can I start a new club on campus?",
    answer:
      "Yes, with permission from the Dean of Students, a faculty coordinator and minimum required members.",
  },
  {
    question: "Is there a campus doctor or medical facility?",
    answer:
      "Yes, there are ambulances and a Medical Unit in the campus, For more details, visit the Health and Wellness section.",
  },
  {
    question:
      "I'm feeling homesick or stressed. Is there someone I can talk to?",
    answer:
      "Yes, the institute provides counseling services. Visit the wellness center or contact your faculty advisor.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log("Form submitted:", formData);
  //   // Reset form
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10">
      {/* Hero Section */}
      <div className="relative bg-dark text-snow py-12 sm:py-20 overflow-hidden">
        <img
          src={heroWave}
          alt="wave pattern"
          className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-30 object-cover animate-pulse"
          style={{ zIndex: 1 }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-snow drop-shadow-lg animate-fade-in-up mb-2 sm:mb-4 text-center">
            Get in Touch
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-yellow font-medium animate-fade-in-up delay-200 text-center px-2">
            We're here to make things easier—contact us anytime!
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-2 sm:mb-4 text-center">
          <span className="bg-dark bg-clip-text text-transparent">
            Our Team
          </span>
        </h2>
        <p className="text-center text-teal mb-1 sm:mb-2 font-medium text-base sm:text-lg">
          Meet the minds behind Life@NIT
        </p>
        <p className="text-center text-teal mb-8 sm:mb-12 text-sm sm:text-base">
          Built and maintained by the{" "}
          <span className="font-medium text-teal">Gaash Team</span>—student
          developers from NIT Srinagar.
        </p>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-snow rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-yellow/40 hover:border-yellow/80
                 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]
                 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25),0_1.5px_6px_rgba(255,215,0,0.15)] 
                 relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-yellow/10 before:to-lightblue/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              style={{ perspective: "800px" }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow to-yellow/70 rounded-full blur-sm opacity-50"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-yellow"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-dark">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-dark/70">
                        {member.role}
                      </p>
                      <p className="text-xs sm:text-sm text-teal italic mt-1">
                        {member.funFact}
                      </p>
                    </div>
                    <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4 mt-2 sm:mt-0">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal hover:text-lightblue transition-colors transform hover:scale-110 duration-200"
                      >
                        <FaLinkedin className="text-base sm:text-lg lg:text-xl" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal hover:text-lightblue transition-colors transform hover:scale-110 duration-200"
                      >
                        <FaGithub className="text-base sm:text-lg lg:text-xl" />
                      </a>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-dark/70 space-y-1">
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href={`mailto:${member.email}`}
                        className="text-teal hover:text-lightblue transition-colors break-all"
                      >
                        {member.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Enrollment:</span>{" "}
                      {member.enrollment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connect With Us Section */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-8 sm:mb-12 text-center">
          <span className="bg-dark bg-clip-text text-transparent">
            Connect With Us
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-snow rounded-xl shadow-lg p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Social & Community */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-dark mb-3 sm:mb-4">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
                    <a
                      href="https://www.instagram.com/nitsriofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lightblue/10 p-2 sm:p-3 rounded-full hover:bg-lightblue/20 transition-colors"
                    >
                      <FaInstagram className="text-teal text-lg sm:text-xl" />
                    </a>
                    <a
                      href="https://x.com/nitsriofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lightblue/10 p-2 sm:p-3 rounded-full hover:bg-lightblue/20 transition-colors"
                    >
                      <FaTwitter className="text-teal text-lg sm:text-xl" />
                    </a>
                    <a
                      href="https://www.facebook.com/nitsriofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lightblue/10 p-2 sm:p-3 rounded-full hover:bg-lightblue/20 transition-colors"
                    >
                      <FaFacebook className="text-teal text-lg sm:text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/school/nitsriofficial/?originalSubdomain=in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lightblue/10 p-2 sm:p-3 rounded-full hover:bg-lightblue/20 transition-colors"
                    >
                      <FaLinkedin className="text-teal text-lg sm:text-xl" />
                    </a>
                    <a
                      href="https://www.youtube.com/NITSrinagarOfficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lightblue/10 p-2 sm:p-3 rounded-full hover:bg-lightblue/20 transition-colors"
                    >
                      <FaYoutube className="text-teal text-lg sm:text-xl" />
                    </a>
                    <a
                      href="mailto:socialmedia@nitsri.ac.in"
                      className="bg-lightblue/10 p-2 sm:p-3 rounded-full hover:bg-lightblue/20 transition-colors"
                      title="Email our Social Media Team"
                    >
                      <FaEnvelope className="text-teal text-lg sm:text-xl" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-dark mb-3 sm:mb-4">
                    Quick Links
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <a
                      href="/events"
                      className="text-sm sm:text-base text-teal hover:text-lightblue transition-colors"
                    >
                      Events
                    </a>
                    <a
                      href="/clubs"
                      className="text-sm sm:text-base text-teal hover:text-lightblue transition-colors"
                    >
                      Clubs
                    </a>
                    <a
                      href="/resources"
                      className="text-sm sm:text-base text-teal hover:text-lightblue transition-colors"
                    >
                      Resources
                    </a>
                    <a
                      href="/calendar"
                      className="text-sm sm:text-base text-teal hover:text-lightblue transition-colors"
                    >
                      Calendar
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-dark mb-3 sm:mb-4">
                    Contact Info
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-3">
                      <FaMapMarkerAlt className="text-teal text-sm sm:text-base" />
                      <p className="text-sm sm:text-base text-dark/70">
                        NIT Srinagar, Hazratbal, J&K - 190006
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-teal text-sm sm:text-base" />
                      <p className="text-sm sm:text-base text-dark/70">
                        0194-242-2032
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="text-teal text-sm sm:text-base" />
                      <p className="text-sm sm:text-base text-dark/70">
                        info@nitsri.ac.in
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-dark mb-3 sm:mb-4">
                    Office Hours
                  </h3>
                  <p className="text-sm sm:text-base text-dark/70">
                    Mon-Fri: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-sm sm:text-base text-dark/70">
                    Sat: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 bg-lightblue/5">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-8 sm:mb-12 text-center">
          <span className="bg-dark bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-snow rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <FaQuestionCircle className="text-teal text-lg sm:text-xl flex-shrink-0" />
                    <h3 className="text-sm sm:text-lg font-semibold text-dark">
                      {faq.question}
                    </h3>
                  </div>
                  <FaChevronDown
                    className={`text-teal transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-dark/70">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
