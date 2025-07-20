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
  "description": "Indian engineer, innovator and education reformist; inventor of the Ice Stupa",
  "linkedin": "https://www.linkedin.com/in/wangchuksworld/",
  "twitter": "https://twitter.com/Wangchuk66",
  "website": "https://icestupa.org/",
  
},

	{
  "id": 2,
  "name": "S. S. Bajaj",
  "batch": "Unknown",
  "branch": "Mechanical/Chemical Engineering",
  "position": "Chairman (former)",
  "company": "Atomic Energy Regulatory Board (AERB)",
  "location": "Mumbai, India",
  "description": "Former Chairman of the Atomic Energy Regulatory Board, Nuclear-safety regulator under the Dept. of Atomic Energy.",
  "linkedin": "",
  "twitter": "",
  "website": "https://www.aerb.gov.in/",
  "achievements": [
    "Led AERB during post-Fukushima safety reviews (2010–2015)",
    "Advocated regulatory independence from DAE",
    "Oversaw safety clearance for Kudankulam reactors",
    "Authorized web-based tracking of radiation sources",
    "Facilitated IAEA review recommending statutory backing for AERB"
  ]
}
,
	{
  "id": 3,
  "name": "Davoud Danesh-Jafari",
  "batch": "Unknown",
  "branch": "Civil Engineering",
  "position": "Minister of Economic Affairs and Finance (2005–2008)",
  "company": "Government of Iran",
  "location": "Tehran, Iran",
  "description": "Former Minister of Economic Affairs and Finance of Iran (2005–2008), member of Iran’s Expediency Discernment Council, alumnus of NIT Srinagar",
  "linkedin": "",
  "twitter": "",
  "website": ""
}
,
	{
  "id": 4,
  "name": "R. K. Wanchoo",
  "batch": "Unknown",
  "branch": "Chemical Engineering",
  "position": "Executive Director",
  "company": "Bharat Heavy Electricals Limited (BHEL)",
  "location": "Hyderabad, India",
  "description": "Executive Director at BHEL; former Director of NIT Srinagar",
  "linkedin": "",
  "twitter": "",
  "website": "https://www.bhel.com/"
}
,
	{
  "id": 5,
  "name": "Anjum Ahmad Gilani",
  "batch": "Unknown",
  "branch": "Chemical Engineering",
  "position": "Chief Manager – Engineering & OHS",
  "company": "Hindustan Petroleum Corporation Limited (HPCL)",
  "location": "Mumbai, Maharashtra, India",
  "description": "Engineering & OHS professional with over 20 years in oil & gas operations at HPCL",
  "linkedin": "",
  "twitter": "",
  "website": "https://www.hindustanpetroleum.com/"
}
,
	{
  "id": 6,
  "name": "Prof. I. K. Bhat",
  "batch": "Unknown",
  "branch": "Mechanical Engineering",
  "position": "Vice Chancellor",
  "company": "Manav Rachna University",
  "location": "Faridabad, Haryana, India",
  "description": "Vice Chancellor of Manav Rachna University; former Director of MNIT Jaipur, NIT Hamirpur, NIT Delhi, and NIT Jalandhar.",
  "linkedin": "",
  "twitter": "",
  "website": "https://mru.edu.in/"
}
,
	{
  "id": 7,
  "name": "Shafat Sultan",
  "batch": "Unknown",
  "branch": "Unknown",
  "position": "Managing Director",
  "company": "Jammu & Kashmir Financial Corporation (JKFC)",
  "location": "Jammu & Kashmir, India",
  "description": "Posted as Managing Director of J&K Financial Corporation in an administrative reshuffle; previously held various roles in J&K government service.",
  "linkedin": "",
  "twitter": "",
  "website": ""
}
,
	{
  "id": 8,
  "name": "Romesh Kaul",
  "batch": "Unknown",
  "branch": "Mechanical Engineering",
  "position": "Executive Director (former)",
  "company": "Mahindra CIE Automotive Ltd.",
  "location": "Mumbai, Maharashtra, India",
  "description": "Served as Executive Director & CEO for Forgings, Stampings & Composites divisions at Mahindra CIE; ",
  "linkedin": "",
  "twitter": "",
  "website": "https://www.mahindra.com/"
}
,
	{
  "id": 9,
  "name": "Vijay Vaishnavi",
  "batch": "1964",
  "branch": "Electrical Engineering",
  "position": "Professor Emeritus",
  "company": "Georgia State University",
  "location": "Atlanta, Georgia, USA",
  "description": "Noted researcher and scholar in Computer Information Systems; major contributions in design science, software engineering and data structures; Professor Emeritus at GSU",
  "linkedin": "",
  "twitter": "",
  "website": "https://vijayvaishnavi.wordpress.com",
  "achievements": [
    "IEEE Fellow (2002)",
    "Fulbright Scholar (2004, 2010)",
    "Lifetime Achievement Award at DESRIST (2007)"
  ]
},

	{
  "id": 10,
  "name": "Rakesh Misri",
  "batch": "Unknown",
  "branch": "Civil Engineering",
  "position": "Director – Marketing (former)",
  "company": "Hindustan Petroleum Corporation Limited (HPCL)",
  "location": "Mumbai, Maharashtra, India",
  "description": "Gold‑medalist engineer with 36+ years at HPCL; held top marketing, HR, retail, corporate strategy and LPG leadership roles.",
  "linkedin": "",
  "twitter": "",
  "website": "https://www.hindustanpetroleum.com/"
}
,
	{
  "id": 11,
  "name": "Sameer Khera",
  "batch": "1985",
  "branch": "Electrical/Computer Engineering",
  "position": "Chief Information Officer",
  "company": "NortonLifeLock (formerly Symantec & its IT arm)",
  "location": "Pleasant Hill, California, USA",
  "description": "Global IT leader with 39 years of experience; CIO at NortonLifeLock since July 2019; ex‑Senior Director at Cisco.com.",
  "linkedin": "https://www.linkedin.com/in/sameer-khera-544b055",
  "twitter": "https://twitter.com/skhera",
  "website": ""
},
	{
  "id": 12,
  "name": "Chewang Phunsog",
  "batch": "1968",
  "branch": "Mechanical Engineering",
  "position": "Chairman",
  "company": "Public Enterprises Selection Board (PESB), Government of India",
  "location": "New Delhi, India",
  "description": "Padma Shri‑awardee IAS officer; former Chief Secretary of Jammu & Kashmir; Chairman of the Public Enterprises Selection Board",
  "linkedin": "",
  "twitter": "",
  "website": ""
},
	{
  "id": 13,
  "name": "Sanjay Purohit",
  "batch": "2000",
  "branch": "Mechanical Engineering",
  "position": "Chief Strategy Officer / Chair – Infosys Consulting (former)",
  "company": "Centre for Exponential Change (CEO & Chief Curator)",
  "location": "India/Global",
  "description": "Global strategy and digital platforms leader; former EVP Corporate Strategy, Founder‑CEO EdgeVerve, and Chair & MD Infosys Consulting; now building Societal Platform thinking.",
  "linkedin": "",
  "twitter": "",
  "website": ""
},
];

const Alumni = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	return (
		<div className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10 ">
			{/* Hero Section */}
			<div className="relative  text-gray-800 py-20 overflow-hidden ">
				{/* Animated wave SVG */}
						<img
						  src={heroWave}
						  alt="wave"
						  className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 object-cover animate-pulse"
						  style={{ zIndex: 1 }}
						/>
				<div className="absolute inset-0 bg-white/30"></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="inline-flex items-center justify-center p-2 bg-white/60 backdrop-blur-sm rounded-full mb-6">
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
						<div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
							<div className="text-2xl font-bold text-yellow">500+</div>
							<div className="text-sm text-gray-600">Global Alumni</div>
						</div>
						<div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
							<div className="text-2xl font-bold text-yellow">25+</div>
							<div className="text-sm text-gray-600">Countries</div>
						</div>
						<div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
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

				{/* Alumni Horizontal Cards */}
				<div className="space-y-4">
					{alumni.map((alum) => (
						<div
							key={alum.id}
							className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
							onMouseEnter={() => setHoveredCard(alum.id)}
							onMouseLeave={() => setHoveredCard(null)}
						>
							<div className="flex items-center p-6">
								{/* Profile Image */}
								<div className="relative flex-shrink-0 mr-8">
									<img
										src={alum.image}
										alt={alum.name}
										className="w-20 h-20 rounded-full border-3 border-white object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute -bottom-1 -right-1 bg-orange-100 rounded-full p-1">
										<FaGraduationCap className="text-yellow text-sm" />
									</div>
								</div>

								{/* Main Content */}
								<div className="flex-grow min-w-0">
									<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
										{/* Left Section - Main Info */}
										<div className="flex-grow">
											<h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300 mb-2">
												{alum.name}
											</h3>
											<div className="flex flex-wrap items-center gap-2 mb-3">
												<span className="text-sm text-sky-600 font-medium bg-sky-50 px-3 py-1 rounded-full">
													{alum.branch}
												</span>
												<span className="text-sm text-yellow font-medium bg-orange-50 px-3 py-1 rounded-full">
													Batch {alum.batch}
												</span>
											</div>
											
											<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
												<div className="flex items-center text-sm text-gray-700">
													<FaBriefcase className="mr-2 text-sky-500" />
													<span className="font-medium">{alum.position}</span>
													<span className="mx-2 text-gray-400">at</span>
													<span className="font-semibold text-gray-800">{alum.company}</span>
												</div>
												<div className="flex items-center text-sm text-gray-500">
													<FaMapMarkerAlt className="mr-1 text-orange-400" />
													<span>{alum.location}</span>
												</div>
											</div>
										</div>

										{/* Right Section - Description & Social Links */}
										<div className="lg:w-80 flex-shrink-0">
											{/* Description */}
											<div className="mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-sky-200">
												<p className="text-sm text-gray-700 leading-relaxed">
													{alum.description}
												</p>
											</div>

											{/* Social Links */}
											<div className="flex items-center space-x-3 justify-end">
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