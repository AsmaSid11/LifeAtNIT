import { FaLinkedin, FaTwitter, FaGlobe, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { useState } from "react";

const alumni = [
	{
		id: 1,
		name: "Dr. Rajesh Kumar Sharma",
		batch: "2008",
		branch: "Computer Science",
		position: "Senior Software Architect",
		company: "Google",
		location: "California, USA",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
		description: "Leading AI research initiatives at Google with focus on machine learning algorithms.",
		linkedin: "https://linkedin.com/in/rajesh-sharma",
		twitter: "https://twitter.com/rajesh_sharma",
		website: "https://rajesh-sharma.dev",
		achievements: ["Published 15+ research papers", "Google AI Excellence Award 2023", "TEDx Speaker"]
	},
	{
		id: 2,
		name: "Priya Malhotra",
		batch: "2010",
		branch: "Electronics & Communication",
		position: "VP of Engineering",
		company: "Microsoft",
		location: "Seattle, USA",
		image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
		description: "Pioneering cloud infrastructure solutions and leading diverse engineering teams.",
		linkedin: "https://linkedin.com/in/priya-malhotra",
		achievements: ["Microsoft Excellence Award", "Women in Tech Leader 2022", "40 Under 40 Technology"]
	},
	{
		id: 3,
		name: "Arjun Singh Thakur",
		batch: "2009",
		branch: "Mechanical Engineering",
		position: "Chief Technology Officer",
		company: "Tesla",
		location: "Austin, USA",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
		description: "Revolutionizing automotive technology with sustainable engineering solutions.",
		linkedin: "https://linkedin.com/in/arjun-thakur",
		website: "https://arjun-thakur.com",
		achievements: ["Tesla Innovation Award", "Automotive Engineer of the Year", "15+ Patents in EV Technology"]
	},
	{
		id: 4,
		name: "Dr. Sneha Agarwal",
		batch: "2007",
		branch: "Chemical Engineering",
		position: "Research Director",
		company: "Johnson & Johnson",
		location: "New Jersey, USA",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
		description: "Leading pharmaceutical research in drug discovery and development.",
		linkedin: "https://linkedin.com/in/sneha-agarwal",
		achievements: ["FDA Drug Approval Lead", "Nature Publication Author", "Pharmaceutical Innovation Award"]
	},
	{
		id: 5,
		name: "Vikram Chauhan",
		batch: "2011",
		branch: "Civil Engineering",
		position: "Partner",
		company: "McKinsey & Company",
		location: "London, UK",
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
		description: "Strategic consulting for infrastructure and urban development projects.",
		linkedin: "https://linkedin.com/in/vikram-chauhan",
		achievements: ["McKinsey Excellence Award", "Infrastructure Consultant of the Year", "Smart Cities Initiative Lead"]
	},
	{
		id: 6,
		name: "Ananya Reddy",
		batch: "2012",
		branch: "Information Technology",
		position: "Founder & CEO",
		company: "TechNova Solutions",
		location: "Bangalore, India",
		image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
		description: "Building next-generation fintech solutions and empowering startups.",
		linkedin: "https://linkedin.com/in/ananya-reddy",
		website: "https://technova.in",
		achievements: ["Forbes 30 Under 30", "Startup India Recognition", "Women Entrepreneur Award"]
	},
	{
		id: 7,
		name: "Rohit Verma",
		batch: "2006",
		branch: "Electrical Engineering",
		position: "Principal Engineer",
		company: "SpaceX",
		location: "California, USA",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
		description: "Developing advanced propulsion systems and satellite technology.",
		linkedin: "https://linkedin.com/in/rohit-verma",
		achievements: ["SpaceX Mission Success Award", "Aerospace Engineer of Excellence", "NASA Collaboration Lead"]
	},
	{
		id: 8,
		name: "Dr. Kavya Nair",
		batch: "2013",
		branch: "Biotechnology",
		position: "Senior Research Scientist",
		company: "Pfizer",
		location: "Cambridge, UK",
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
		description: "Pioneering gene therapy research and developing breakthrough treatments.",
		linkedin: "https://linkedin.com/in/kavya-nair",
		achievements: ["Breakthrough Research Award", "Gene Therapy Pioneer", "10+ International Publications"]
	},
	{
		id: 9,
		name: "Aditya Gupta",
		batch: "2014",
		branch: "Computer Science",
		position: "Tech Lead",
		company: "Meta",
		location: "Menlo Park, USA",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
		description: "Leading virtual reality development and metaverse infrastructure projects.",
		linkedin: "https://linkedin.com/in/aditya-gupta",
		twitter: "https://twitter.com/aditya_codes",
		achievements: ["Meta Innovation Award", "VR/AR Technology Lead", "Open Source Contributor"]
	},
	{
		id: 10,
		name: "Ishita Sharma",
		batch: "2015",
		branch: "Mathematics & Computing",
		position: "Quantitative Analyst",
		company: "Goldman Sachs",
		location: "New York, USA",
		image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
		description: "Developing algorithmic trading strategies and risk management systems.",
		linkedin: "https://linkedin.com/in/ishita-sharma",
		achievements: ["Goldman Sachs Excellence Award", "Quantitative Finance Expert", "Risk Management Innovation"]
	},
	{
		id: 11,
		name: "Karan Malhotra",
		batch: "2005",
		branch: "Mechanical Engineering",
		position: "Director of Operations",
		company: "Boeing",
		location: "Chicago, USA",
		image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
		description: "Overseeing aircraft manufacturing processes and implementing lean manufacturing.",
		linkedin: "https://linkedin.com/in/karan-malhotra",
		achievements: ["Boeing Leadership Excellence", "Lean Manufacturing Champion", "Aerospace Innovation Award"]
	},
	{
		id: 12,
		name: "Deepika Rajput",
		batch: "2016",
		branch: "Electronics & Communication",
		position: "Product Manager",
		company: "Apple",
		location: "Cupertino, USA",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
		description: "Leading product development for next-generation consumer electronics.",
		linkedin: "https://linkedin.com/in/deepika-rajput",
		achievements: ["Apple Product Excellence", "Consumer Tech Innovation", "Design Thinking Leader"]
	},
	{
		id: 13,
		name: "Amit Singh",
		batch: "2017",
		branch: "Computer Science",
		position: "Senior Data Scientist",
		company: "Netflix",
		location: "Los Angeles, USA",
		image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
		description: "Building recommendation algorithms and content optimization systems.",
		linkedin: "https://linkedin.com/in/amit-singh",
		achievements: ["Netflix Innovation Award", "ML Engineering Excellence", "Data Science Pioneer"]
	},
	{
		id: 14,
		name: "Neha Patel",
		batch: "2018",
		branch: "Civil Engineering",
		position: "Project Manager",
		company: "Bechtel Corporation",
		location: "Dubai, UAE",
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
		description: "Managing large-scale infrastructure projects across the Middle East.",
		linkedin: "https://linkedin.com/in/neha-patel",
		achievements: ["Project Excellence Award", "Infrastructure Innovation", "Women in Engineering Leader"]
	},
	{
		id: 15,
		name: "Rahul Joshi",
		batch: "2019",
		branch: "Electronics & Communication",
		position: "Hardware Engineer",
		company: "Qualcomm",
		location: "San Diego, USA",
		image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
		description: "Developing next-generation 5G and wireless communication technologies.",
		linkedin: "https://linkedin.com/in/rahul-joshi",
		achievements: ["5G Innovation Award", "Wireless Technology Pioneer", "Patent Holder"]
	},
	{
		id: 16,
		name: "Pooja Kumari",
		batch: "2020",
		branch: "Information Technology",
		position: "Cloud Architect",
		company: "Amazon Web Services",
		location: "Virginia, USA",
		image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
		description: "Designing scalable cloud solutions for enterprise clients.",
		linkedin: "https://linkedin.com/in/pooja-kumari",
		achievements: ["AWS Certified Solutions Architect", "Cloud Innovation Award", "Tech Excellence"]
	},
	{
		id: 17,
		name: "Suresh Kumar",
		batch: "2004",
		branch: "Mechanical Engineering",
		position: "Vice President",
		company: "General Electric",
		location: "Boston, USA",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
		description: "Leading renewable energy initiatives and sustainable manufacturing.",
		linkedin: "https://linkedin.com/in/suresh-kumar",
		achievements: ["GE Leadership Award", "Renewable Energy Pioneer", "Sustainability Champion"]
	},
	{
		id: 18,
		name: "Maya Gupta",
		batch: "2021",
		branch: "Chemical Engineering",
		position: "Process Engineer",
		company: "ExxonMobil",
		location: "Houston, USA",
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
		description: "Optimizing petrochemical processes and developing green technologies.",
		linkedin: "https://linkedin.com/in/maya-gupta",
		achievements: ["Process Optimization Award", "Green Chemistry Innovation", "Young Engineer Excellence"]
	},
	{
		id: 19,
		name: "Sanjay Rao",
		batch: "2003",
		branch: "Electrical Engineering",
		position: "Chief Engineer",
		company: "Siemens",
		location: "Munich, Germany",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
		description: "Leading automation and digitalization projects in manufacturing.",
		linkedin: "https://linkedin.com/in/sanjay-rao",
		achievements: ["Siemens Excellence Award", "Automation Pioneer", "Industry 4.0 Leader"]
	},
	{
		id: 20,
		name: "Ritika Sharma",
		batch: "2022",
		branch: "Biotechnology",
		position: "Research Associate",
		company: "Moderna",
		location: "Cambridge, USA",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
		description: "Contributing to mRNA technology development and vaccine research.",
		linkedin: "https://linkedin.com/in/ritika-sharma",
		achievements: ["mRNA Research Excellence", "Biotech Innovation", "Rising Star Award"]
	},
	{
		id: 21,
		name: "Manish Agarwal",
		batch: "2002",
		branch: "Computer Science",
		position: "Founder & CTO",
		company: "Zomato",
		location: "Gurgaon, India",
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
		description: "Building India's largest food delivery and restaurant discovery platform.",
		linkedin: "https://linkedin.com/in/manish-agarwal",
		twitter: "https://twitter.com/manish_zomato",
		achievements: ["Entrepreneur of the Year", "Food Tech Pioneer", "Unicorn Startup Founder"]
	}
];

const Alumni = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	return (
		<div className="min-h-screen ">
			{/* Hero Section */}
			<div className="relative  text-gray-800 py-20 overflow-hidden">
				<div className="absolute inset-0 bg-white/30"></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="inline-flex items-center justify-center p-2 bg-white/60 backdrop-blur-sm rounded-full mb-6">
						<FaGraduationCap className="text-3xl text-orange-500 mr-3" />
						<span className="text-orange-600 font-semibold">Alumni Network</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-sky-700 bg-clip-text text-transparent">
						Our Distinguished Alumni
					</h1>
					<p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto mb-8">
						Celebrating the remarkable achievements of NIT Srinagar graduates who are shaping the future across the globe
					</p>
					<div className="flex justify-center space-x-8 text-center">
						<div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
							<div className="text-2xl font-bold text-orange-600">500+</div>
							<div className="text-sm text-gray-600">Global Alumni</div>
						</div>
						<div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
							<div className="text-2xl font-bold text-orange-600">25+</div>
							<div className="text-sm text-gray-600">Countries</div>
						</div>
						<div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
							<div className="text-2xl font-bold text-orange-600">100+</div>
							<div className="text-sm text-gray-600">Top Companies</div>
						</div>
					</div>
				</div>
			</div>

			{/* Featured Alumni Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center p-2 bg-sky-100 rounded-full mb-4">
						<FaStar className="text-sky-600 mr-2" />
						<span className="text-sky-700 font-semibold">Featured Achievers</span>
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
										<FaGraduationCap className="text-orange-500 text-sm" />
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
												<span className="text-sm text-orange-600 font-medium bg-orange-50 px-3 py-1 rounded-full">
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