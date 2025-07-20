import { FaQuestionCircle, FaChevronDown, FaSearch } from "react-icons/fa";
import { useState, useMemo } from "react";
import faqHero from "../assets/faq-hero.svg";

const faqs = [
	{
		category: "Campus Life",
		questions: [
			{
				question: "I'm feeling homesick or stressed. Is there someone I can talk to?",
				answer:
					"Yes, NIT Srinagar has a Counseling Cell located near the Health Centre. You can also speak to your faculty advisor or hostel warden.",
			},
			{
				question: "Are there events or festivals organized on campus?",
				answer: (
					<>
						Yes, view details of annual{" "}
						<a
							href="/fests"
							className="text-teal underline hover:text-teal-700"
						>
							events and festivals
						</a>{" "}
						here.
					</>
				),
			},
			{
				question: "Is there a student body or council?",
				answer: (
					<>
						Yes, NIT Srinagar has Student Gymkhana and departmental societies. View{" "}
						<a
							href="/clubs"
							className="text-teal underline hover:text-teal-700"
						>
							clubs and societies
						</a>{" "}
						here.
					</>
				),
			},
			{
				question: "Can I start a new club on campus?",
				answer:
					"Yes, with prior approval from the Dean of Students Welfare (DSW) and a faculty advisor. You'll also need a core team and a proposal.",
			},
			{
				question: "Is there a dress code on campus?",
				answer: "There is no strict dress code, but students are expected to dress decently and appropriately for academic and official events.",
			},
		],
	},
	{
		category: "Facilities",
		questions: [
			{
				question: "Whom do I reach out to for Wi-Fi or internet issues?",
				answer: (
					<>
						You can contact the Computer Services Centre (CSC).{" "}
						<a
							href="https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oasao&ItemID=ocmgo&nDeptID=ic"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal underline hover:text-teal-700"
						>
							View more info
						</a>
					</>
				),
			},
			{
				question: "Is there a campus doctor or medical facility?",
				answer: (
					<>
						Yes, a fully functional Medical Unit exists in the campus.{" "}
						<a
							href="https://nitsri.ac.in/Centre/Deptindex.aspx?page=a&ItemID=eagei&nCentreID=cm"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal underline hover:text-teal-700"
						>
							View more info
						</a>
					</>
				),
			},
			{
				question: "Are printing and photocopy services available?",
				answer:
					"Yes, you can access printing and photocopy facilities in the campus.",
			},
			{
				question: "Is there a library and how do I use it?",
				answer: (
					<>
						Yes, the Central Library is well-equipped. Use your institute ID to issue books. Timings and rules are displayed on the notice board.{" "}
						<a
							href="https://nitsri.ac.in/CentralLibrary/Deptindex.aspx?page=a&ItemID=eagei&nDeptID=cl"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal underline hover:text-teal-700"
						>
							View more info
						</a>
						.
					</>
				),
			},
		],
	},
	{
		category: "Accommodation",
		questions: [
			{
				question: "How do I apply for hostel accommodation?",
				answer: (
					<>
					New students are allotted hostels automatically. Continuing students apply through the hostel portal shared by the DSW office.{" "}
					<a
						href="https://hostel-page-module-nit-sgr.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-teal underline hover:text-teal-700"
					>
						View hostel website
					</a>
					.
				</>
				),
			},
			{
				question: "Can I get a single room?",
				answer: (
					<>
					Single rooms are usually given to final-year or postgraduate students, based on availability and merit.{" "}
					<a
						href="https://hostel-page-module-nit-sgr.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-teal underline hover:text-teal-700"
					>
						View hostel website
					</a>
					.
				</>
				),
			},
			{
				question: "Are visitors allowed in hostels?",
				answer: (
					<>
					Yes, but only during designated hours with entry in the hostel register. Overnight stays are not allowed for visitors.{" "}
					<a
						href="https://hostel-page-module-nit-sgr.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-teal underline hover:text-teal-700"
					>
						View hostel website
					</a>
					.
				</>
				),
			},
			{
				question: "How are hostel rooms furnished?",
				answer: (
					<>
					Each room comes with a bed, mattress, study table, chair, and almirah. You must bring your own bedding and toiletries.{" "}
					<a
						href="https://hostel-page-module-nit-sgr.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-teal underline hover:text-teal-700"
					>
						View hostel website
					</a>
					.
				</>
				),
			},
		],
	},
	{
		category: "Academics",
		questions: [
			{
				question: "What if I miss a class or exam due to illness?",
				answer:
					"Inform the faculty and submit a medical certificate to the Academic Section. Makeup exams are subject to approval.",
			},
			{
				question: "Where can I check my academic calendar?",
				answer: (
					<>
						The academic calendar is available on the official NIT Srinagar website under the 'Academics' section.{" "}
						<a
							href="https://nitsri.ac.in/Pages/DisplayPages.aspx?page=caaso&ItemID=eq"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal underline hover:text-teal-700"
						>
							View academic calendar
						</a>
						.
					</>
				),
			},
			{
				question: "Are there mentorship programs?",
				answer:
					"Yes, each student is assigned a faculty mentor. You can discuss academic or personal concerns with them anytime.",
			},
		],
	},
	{
		category: "Transport",
		questions: [
			{
				question: "How do I reach NIT Srinagar?",
				answer: (
					<>
						You can find detailed directions and travel options in our <a href="/getting-here" className="text-teal underline hover:text-teal-700">Getting Here</a> section.
					</>
				),
			},
			{
				question: "Is there any transport facility for students?",
				answer:
					"Yes, NIT Srinagar provides institute buses for official travel. For day-to-day travel, local autos and cabs are available.",
			},
			{
				question: "How do I reach NIT Srinagar from the railway station or airport?",
				answer:
					"From Srinagar Airport, you can take a taxi to Hazratbal (approx. 45 mins). From Nowgam Railway Station, auto-rickshaws or shared cabs are available.",
			},
			{
				question: "Can I bring my own vehicle to campus?",
				answer: "Yes, students can bring their own vehicles, but must register them with the security office and follow campus traffic rules.",
			},
		],
	},
	{
		category: "Food and Mess",
		questions: [
			{
				question: "Is the food in the mess hygienic?",
				answer:
					"Yes, hygiene is maintained and menus are regularly updated by the Mess Committee. Suggestions can be submitted to the warden.",
			},
			{
				question: "Are there vegetarian options?",
				answer:
					"Yes, every mess provides both vegetarian and non-vegetarian meals with proper segregation.",
			},
			// {
			//   question: "Can I skip meals and get a refund?",
			//   answer:
			//     "No refunds are provided for skipped meals, but you can opt out of the mess in special cases like internships or medical reasons.",
			// },
		],
	},
];

const FAQ = () => {
	const [openFaq, setOpenFaq] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	const categories = ["All", ...faqs.map((faq) => faq.category)];

	const filteredFaqs = useMemo(() => {
		return faqs
			.filter(
				(faq) =>
					activeCategory === "All" || faq.category === activeCategory
			)
			.map((faq) => ({
				...faq,
				questions: faq.questions.filter(
					(q) =>
						q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
						(typeof q.answer === "string"
							? q.answer.toLowerCase().includes(searchQuery.toLowerCase())
							: JSON.stringify(q.answer)
									.toLowerCase()
									.includes(searchQuery.toLowerCase()))
				),
			}))
			.filter((faq) => faq.questions.length > 0);
	}, [searchQuery, activeCategory]);

	return (
		<div className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10">
			{/* Hero Section */}
			<div className="relative bg-dark text-snow py-12 sm:py-20 overflow-hidden">
				<img
					src={faqHero}
					alt="FAQ animation"
					className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-30 object-cover animate-pulse"
					style={{ zIndex: 1 }}
				/>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-snow drop-shadow-lg animate-fade-in-up mb-2 sm:mb-4 text-center">
						Frequently Asked Questions
					</h1>
					<p className="text-sm xs:text-base sm:text-lg md:text-xl text-yellow font-medium animate-fade-in-up delay-200 text-center px-2">
						Find answers to common questions about life at NIT Srinagar
					</p>
				</div>
			</div>

			{/* Search and Filter Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10">
				<div className="bg-snow rounded-xl shadow-xl p-4 sm:p-6">
					<div className="max-w-3xl mx-auto">
						{/* Search Bar */}
						<div className="relative mb-4">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<FaSearch className="text-teal" />
							</div>
							<input
								type="text"
								placeholder="Search questions..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="block w-full pl-10 pr-3 py-2 border border-teal/20 rounded-lg bg-snow focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-transparent transition-all duration-300"
							/>
						</div>

						{/* Category Filter */}
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
										activeCategory === category
											? "bg-teal text-snow"
											: "bg-lightblue/10 text-dark hover:bg-lightblue/20"
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* FAQ Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
				<div className="max-w-3xl mx-auto space-y-8">
					{filteredFaqs.map((category, categoryIndex) => (
						<div key={category.category} className="space-y-4">
							<h2 className="text-xl sm:text-2xl font-bold text-dark mb-4">
								{category.category}
							</h2>
							{category.questions.map((faq, index) => {
								const globalIndex = `${categoryIndex}-${index}`;
								return (
									<div
										key={globalIndex}
										className="bg-snow rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
									>
										<button
											onClick={() => toggleFaq(globalIndex)}
											className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left focus:outline-none"
										>
											<div className="flex items-center justify-between">
												<div className="flex items-center space-x-3 sm:space-x-4">
													<div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
														<FaQuestionCircle className="text-teal text-lg" />
													</div>
													<h3 className="text-sm sm:text-lg font-semibold text-dark">
														{faq.question}
													</h3>
												</div>
												<FaChevronDown
													className={`text-teal transform transition-transform duration-300 ${
														openFaq === globalIndex ? "rotate-180" : ""
													}`}
												/>
											</div>
										</button>
										<div
											className={`overflow-hidden transition-all duration-300 ${
												openFaq === globalIndex ? "max-h-96" : "max-h-0"
											}`}
										>
											<div className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-dark/70">
												{faq.answer}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					))}

					{filteredFaqs.length === 0 && (
						<div className="text-center py-12">
							<p className="text-dark/70 text-lg">
								No questions found matching your search criteria.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FAQ;