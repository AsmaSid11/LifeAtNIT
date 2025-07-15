import { FaLinkedin, FaTwitter, FaGlobe, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { useState } from "react";

const alumni = [
	{
		id: 1,
		name: "Sonam Wangchuk",
		batch: "1987",
		branch: "Mechanical Engineering",
		position: "Senior Software Architect",
		company: "Google",
		location: "California, USA",
		image: "data:image/jpeg;base64,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",
		description: "Engineer, Innovator and an Education Reformist, Inventor of the Ice Stupa ",
		linkedin: "https://linkedin.com/in/rajesh-sharma",
		twitter: "https://twitter.com/rajesh_sharma",
		website: "https://rajesh-sharma.dev",
		achievements: ["Published 16+ research papers", "Google AI Excellence Award 2023", "TEDx Speaker"]
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