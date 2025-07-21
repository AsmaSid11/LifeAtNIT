import { FaLinkedin, FaTwitter, FaGlobe, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import heroWave from "../assets/hero-wave.svg";
import { useState } from "react";

const alumni = [
    {
        "id": 1,
        "name": "Sonam Wangchuk",
        "batch": "1987",
        "branch": "Mechanical Engineering",
        "position": "Engineer, Innovator & Education Reformist",
        "company": "SECMOL & HIAL (founder/director)",
        "location": "Ladakh, India",
        "description": "Award-winning Indian engineer, innovator, and education reformist; inventor of the Ice Stupa technique.", // Condensed
        "linkedin": "https://www.linkedin.com/in/wangchuksworld/",
        "twitter": "https://twitter.com/Wangchuk66",
        "website": "https://icestupa.org/",
        "image": "/alumni-images/sonam-wangchuk.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 2,
        "name": "Davoud Danesh-Jafari",
        "batch": "1992",
        "branch": "Civil Engineering",
        "position": "Former Minister of Economic Affairs and Finance",
        "company": "Government of Iran",
        "location": "Tehran, Iran",
        "description": "Former Iranian Minister of Economic Affairs and Finance; member of Iran’s Expediency Discernment Council.", // Condensed
        "linkedin": "",
        "twitter": "",
        "website": "https://en.wikipedia.org/wiki/Davoud_Danesh-Jafarie",
        "image": "/alumni-images/davoud-danesh-jafari.webp" 
    },
    {
        "id": 3,
        "name": "Sanjay Purohit",
        "batch": "2000",
        "branch": "Mechanical Engineering",
        "position": "CEO & Chief Curator",
        "company": "Centre for Exponential Change",
        "location": "India/Global",
        "description": "Global strategy and digital transformation leader; former Infosys Consulting Chair and EVP Corporate Strategy.", // Condensed
        "linkedin": "https://www.linkedin.com/in/sanjay-purohit-3b40026/",
        "twitter": "",
        "website": "https://sanjaypurohit.com/",
        "image": "/alumni-images/sanjay-purohit.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 4,
        "name": "Hitesh Agarwal",
        "batch": "2011",
        "branch": "CSE",
        "position": "Director",
        "company": "Morgan Stanley",
        "location": "Mumbai, India",
        "description": "Currently a Director at Morgan Stanley. Hitesh Agarwal brings experience from previous roles at Accolite, Wipro Limited and National Institute of Technology, Srinagar.", // Condensed
        "linkedin": "https://www.linkedin.com/in/hitesh-agarwal-nitsri/?originalSubdomain=in",
        "twitter": "",
        "website": "",
        "image": "/alumni-images/hitesh-agarwal.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 5,
        "name": "Rakesh Misri",
        "batch": "1978",
        "branch": "Civil Engineering",
        "position": "Retired Director – Marketing",
        "company": "Hindustan Petroleum Corporation Limited (HPCL)",
        "location": "Mumbai, Maharashtra, India",
        "description": "Gold-medalist engineer with 36+ years at HPCL; held top marketing, HR, and retail leadership roles.", // Condensed
        "linkedin": "https://www.linkedin.com/in/rakesh-misri-13149554/?originalSubdomain=in",
        "twitter": "",
        "website": "https://www.hindustanpetroleum.com/",
        "image": "/alumni-images/rakesh-misri.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 6,
        "name": "Romesh Kaul",
        "batch": "1973",
        "branch": "Mechanical Engineering",
        "position": "Former Executive Director & CEO",
        "company": "Mahindra CIE Automotive Ltd.",
        "location": "Mumbai, Maharashtra, India",
        "description": "Formerly Executive Director & CEO for Forgings, Stampings & Composites divisions at Mahindra CIE.", // Condensed
        "linkedin": "https://www.linkedin.com/in/romeshkaul/?originalSubdomain=in",
        "twitter": "",
        "website": "https://www.mamahindracie.com/",
        "image": "/alumni-images/romesh-kaul.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 7,
        "name": "Supriya Sood",
        "batch": "2007",
        "branch": "Civil Engineering",
        "position": "Senior Risk Specialist",
        "company": "Shell",
        "location": "Houston, Texas, USA",
        "description": "Risk management professional; Senior Risk Specialist at Shell with prior experience at Deloitte and L&T.", // Condensed
        "linkedin": "https://www.linkedin.com/in/supriya-sood-0806abb4/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        "twitter": "",
        "website": "",
        "image": "/alumni-images/supriya-sood.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 8,
        "name": "Anubhav Guleria",
        "batch": "2009",
        "branch": "IT",
        "position": "Senior Software Engineer",
        "company": "Microsoft",
        "location": "Hyderabad, India",
        "description": "Senior Software Engineer at Microsoft, contributing to software development and innovation.", // Condensed
        "linkedin": "https://www.linkedin.com/in/anubhav-guleria/?originalSubdomain=in",
        "twitter": "",
        "website": "",
        "image": "/alumni-images/anubhav-guleria.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 9,
        "name": "Vimarsh Aryan",
        "batch": "2004",
        "branch": "Mechanincal Engineering",
        "position": "Deputy High Commissioner",
        "company": "Government of India (GOI)",
        "location": "Mauritius",
        "description": "Distinguished diplomat serving as Deputy High Commissioner for the Government of India.", // Condensed
        "linkedin": "https://www.linkedin.com/in/vimarsh-aryan-37153470/?originalSubdomain=mu",
        "twitter": "https://twitter.com/VimarshAryan",
        "website": "",
        "image": "/alumni-images/vimarsh-aryan.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 10,
        "name": "Sanjay Mujoo",
        "batch": "1987",
        "branch": "Electronics & Communications",
        "position": "VP, Worldwide Technical Support & Engineering", // Condensed position title
        "company": "Hewlett Pckard Enterprise",
        "location": "Bengaluru",
        "description": "Seasoned executive leading global technical support and engineering operations.", // Condensed
        "linkedin": "https://www.linkedin.com/in/sanjaymujoo/?originalSubdomain=in",
        "twitter": "",
        "website": "",
        "image": "/alumni-images/sanjay-mujoo.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 11,
        "name": "Raminder Bhrara",
        "batch": "1985",
        "branch": "Mechanical Engineering",
        "position": "Chief Engineer",
        "company": "Australian Department of Defence",
        "location": "Canberra, Australia",
        "description": "Key engineering leader serving as Chief Engineer at the Australian Department of Defence.", // Condensed
        "linkedin": "https://www.linkedin.com/in/raminder-bhrara/?originalSubdomain=au",
        "twitter": "",
        "website": "",
        "image": "/alumni-images/raminder-bhrara.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 12,
        "name": "Sanjay Khazanchi",
        "batch": "1980",
        "branch": "Mechanical Engineering",
        "position": "VP - Energy Access",
        "company": "Institute of Transformation Technologies",
        "location": "Gurgaon",
        "description": "Vice President specializing in energy access initiatives at the Institute of Transformation Technologies.", // Condensed
        "linkedin": "https://www.linkedin.com/in/sanjaykhazanchi/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        "twitter": "",
        "website": "",
        "image": "/alumni-images/sanjay-khazanchi.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 13,
        "name": "Vijay Vaishnavi",
        "batch": "1964",
        "branch": "Electrical Engineering",
        "position": "Professor Emeritus",
        "company": "Georgia State University",
        "location": "Atlanta, Georgia, USA",
        "description": "Noted researcher and scholar in Computer Information Systems; Professor Emeritus at Georgia State University and IEEE Fellow.", // Condensed
        "linkedin": "https://www.linkedin.com/in/vijay-vaishnavi-70346339/",
        "twitter": "",
        "website": "https://vijayvaishnavi.wordpress.com",
        "achievements": [
            "IEEE Fellow (2002)",
            "Fulbright Scholar (2004, 2010)",
            "Lifetime Achievement Award at DESRIST (2007)"
        ],
        "image": "/alumni-images/vijay-vaishnavi.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 14,
        "name": "Sameer Khera",
        "batch": "1985",
        "branch": "Electrical/Computer Engineering",
        "position": "Chief Information Officer",
        "company": "NortonLifeLock",
        "location": "Pleasant Hill, California, USA",
        "description": "Global IT leader with 39 years of experience; CIO at NortonLifeLock since July 2019; ex‑Senior Director at Cisco.com.", // Retained, already concise
        "linkedin": "https://www.linkedin.com/in/sameer-khera-544b055",
        "twitter": "https://twitter.com/skhera",
        "website": "",
        "image": "/alumni-images/sameer-khera.webp" // Placeholder, ensure actual image is here
    },
    {
        "id": 15,
        "name": "R.K. Wanchoo",
        "batch": "Unknown",
        "branch": "Chemical Engineering",
        "position": "Former Executive Director",
        "company": "Bharat Heavy Electricals Limited (BHEL)",
        "location": "Hyderabad, India",
        "description": "Experienced executive at BHEL; former Director of NIT Srinagar.", // Condensed
        "linkedin": "",
        "twitter": "",
        "website": "https://www.bhel.com/",
        "image": "/alumni-images/rk-wanchoo.webp" // Placeholder, ensure actual image is here
    },
    
];

const Alumni = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10 ">
            {/* Hero Section */}
            <div className="relative text-gray-800 py-20 overflow-hidden ">
                {/* Animated wave SVG */}
                        <img
                            src={heroWave}
                            alt="wave"
                            className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 object-cover animate-pulse"
                            style={{ zIndex: 1 }}
                        />
                <div className="absolute inset-0 bg-white/30"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Alumni Network Container with lighter sky blue border */}
                    <div className="inline-flex items-center justify-center p-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-blue-100">
                        <FaGraduationCap className="text-3xl text-yellow mr-3" />
                        <span className="text-yellow font-semibold">Alumni Network</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark">
                        Our Distinguished Alumni
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto mb-8">
                        Celebrating the remarkable achievements of NIT Srinagar graduates who are shaping the future across the globe
                    </p>
                    <div className="flex justify-center space-x-8 text-center">
                        {/* Statistic boxes with lighter sky blue borders */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100">
                            <div className="text-2xl font-bold text-yellow">500+</div>
                            <div className="text-sm text-gray-600">Global Alumni</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100">
                            <div className="text-2xl font-bold text-yellow">25+</div>
                            <div className="text-sm text-gray-600">Countries</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100">
                            <div className="text-2xl font-bold text-yellow">100+</div>
                            <div className="text-sm text-gray-600">Top Companies</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Alumni Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-2 bg-dark rounded-full mb-4">
                        <FaStar className="text-snow mr-2" />
                        <span className="text-snow font-semibold">Featured Achievers</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 ">
                        Making Their Mark Worldwide
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our alumni are leaders, innovators, and changemakers in their respective fields
                    </p>
                </div>

                {/* Alumni Grid Cards */}
                {/* Applied more specific max-width and adjusted layout for consistency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {alumni.map((alum) => (
                        <div
                            key={alum.id}
                            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col items-center p-6 text-center"
                            style={{ maxWidth: '380px', margin: '0 auto' }} // Enforce max-width and center each card
                            onMouseEnter={() => setHoveredCard(alum.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Profile Image */}
                            <div className="relative flex-shrink-0 mb-4">
                                <img
                                    src={alum.image}
                                    alt={alum.name}
                                    className="w-24 h-24 rounded-full border-3 border-white object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute -bottom-1 -right-1 bg-orange-100 rounded-full p-1">
                                    <FaGraduationCap className="text-yellow text-sm" />
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-grow min-w-0 w-full">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300 mb-2">
                                    {alum.name}
                                </h3>
                                {/* Branch and Batch tags */}
                                <div className="flex flex-wrap justify-center items-center gap-2 mb-3">
                                    {alum.branch && (
                                      <span className="text-xs text-sky-600 font-medium bg-sky-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                                          {alum.branch}
                                      </span>
                                    )}
                                    {alum.batch && (
                                      <span className="text-xs text-yellow font-medium bg-orange-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                                          Batch {alum.batch}
                                      </span>
                                    )}
                                </div>
                                
                                {/* Position and company */}
                                <div className="text-sm text-gray-700 mb-2">
                                    <FaBriefcase className="inline-block mr-1 text-sky-500" />
                                    <span className="font-medium">{alum.position}</span>
                                    {alum.company && (
                                      <>
                                        <span className="mx-1 text-gray-400">at</span>
                                        <span className="font-semibold text-gray-800">{alum.company}</span>
                                      </>
                                    )}
                                </div>
                                {/* Location */}
                                {alum.location && (
                                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                                      <FaMapMarkerAlt className="mr-1 text-orange-400" />
                                      <span>{alum.location}</span>
                                  </div>
                                )}

                                {/* Description */}
                                {alum.description && (
                                  <div className="mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-sky-200 text-left">
                                      <p className="text-xs text-gray-700 leading-relaxed">
                                          {alum.description}
                                      </p>
                                  </div>
                                )}

                                {/* Social Links */}
                                <div className="flex items-center space-x-3 justify-center">
                                    {alum.linkedin && (
                                        <a
                                            href={alum.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors duration-300 group"
                                        >
                                            <FaLinkedin className="group-hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    )}
                                    {alum.twitter && (
                                        <a
                                            href={alum.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300 group"
                                        >
                                            <FaTwitter className="group-hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    )}
                                    {alum.website && (
                                        <a
                                            href={alum.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors duration-300 group"
                                        >
                                            <FaGlobe className="group-hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alumni;