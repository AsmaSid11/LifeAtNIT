import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

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

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

export default FAQ; 