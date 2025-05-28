import { FaQuestionCircle, FaChevronDown, FaSearch } from "react-icons/fa";
import { useState, useMemo } from "react";
import faqHero from "../assets/faq-hero.svg";

const faqs = [
  {
    category: "Campus Life",
    questions: [
      {
        question: "Can I start a new club on campus?",
        answer:
          "Yes, with permission from the Dean of Students, a faculty coordinator and minimum required members.",
      },
      {
        question: "I'm feeling homesick or stressed. Is there someone I can talk to?",
        answer:
          "Yes, the institute provides counseling services. Visit the wellness center or contact your faculty advisor.",
      },
    ],
  },
  {
    category: "Facilities",
    questions: [
      {
        question: "Whom do I reach out to for Wi-Fi or internet issues",
        answer:
          "Visit the Amenities section for details on the IT Cell and network support team contacts.",
      },
      {
        question: "Is there a campus doctor or medical facility?",
        answer:
          "Yes, there are ambulances and a Medical Unit in the campus, For more details, visit the Health and Wellness section.",
      },
    ],
  },
  {
    category: "Accommodation",
    questions: [
      {
        question: "How do I apply for hostel accommodation",
        answer:
          "Hostel allotment is usually done through the Dean of Students' portal (if applied). Details will be provided via email or notice.",
      },
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
      .filter((faq) => activeCategory === "All" || faq.category === activeCategory)
      .map((faq) => ({
        ...faq,
        questions: faq.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
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