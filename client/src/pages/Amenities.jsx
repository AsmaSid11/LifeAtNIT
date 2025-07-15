import React, { useState, useRef, useEffect } from "react";
import heroWave from "../assets/hero-wave.svg"; // Make sure this SVG exists

const amenitiesData = [
  {
    name: "Sports Facilities",
    image: "/Amenities/track2.webp",
    photos: [
      "/Amenities/track3.webp",
      "/Amenities/playground.webp",
      "/Amenities/track.webp",
      "/Amenities/track2.webp",
      "/Amenities/track4.webp",
      "/Amenities/track5.webp",
      "/Amenities/tennis-court1.webp",
      "/Amenities/tennis-court2.webp",
      "/Amenities/tennis-court4.webp",
      "/Amenities/cricket.webp",
      "/Amenities/gymkhana.webp",
      "/Amenities/football6.webp",
      "/Amenities/football5.webp",
      "/Amenities/tennis-court5.webp",
      "/Amenities/football7.webp",
      "/Amenities/basketball-court.webp",
      "/Amenities/tennis-court3.webp",
      "/Amenities/football3.webp",
      "/Amenities/basketball-court3.webp",
      "/Amenities/basketball-court4.webp",
      "/Amenities/cricket2.webp",
      "/Amenities/cricket3.webp",
      "/Amenities/football.webp",
      "/Amenities/basketball-court2.webp",
      "/Amenities/football2.webp",
      "/Amenities/football4.webp",
    ],
    brief:
      "Information about sports grounds, gymnasium, and other sports facilities.",
    details:
      "“Our motto is “Sports for all and all for Sports” and mission is  “Fit students- Fit Nation”. To achieve this, Institute always encourage the students to take part in games & sports to keep themselves fit and inculcate a spirit of sportsmanship amongst themselves. Also, encourage the students participation in Inter-NIT and other open competition in the country",
    incharges: [
      "Dr. Manoj Kumar (Faculty Incharge SAS Centre)",
      "Ms. Kowsar Ali Mir (SAS Officer)",
    ],
    contactInfo: ["Email: manojkumar@nitsri.ac.in"],
    websiteLink:
      "https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oaocc&ItemID=oceqq&nDeptID=ia",
  },
  {
    name: "Library",
    image: "/Amenities/library.webp",
    photos: [
      "/Amenities/library.webp",
      "/Amenities/library2.webp",
      "/Amenities/library3.webp",
      "/Amenities/library4.webp",
      "/Amenities/library5.webp",
    ],
    brief:
      "Details about the central library, digital resources, and study spaces.",
    details:
      " Established in 1960, the NIT Srinagar Library supports teaching, research, and learning with a rich collection of 74,769+ documents. It includes books, journals, theses, CDs, and learning resources across various disciplines. It uses Koha software, RFID technology, and provides Remote Access Facility (RAF) for e-resources.",
    incharges: [
      "Mrs. Asmat Ali (Deputy Librarian) \n Email: deputylibrarian@nitsri.ac.net\nMobile: 9797847219",
      "Mr. Showkat Ahmad Wani (Assistant Librarian) \n Email: assistantlibrarian@nitsri.ac.net\nMobile: 9149507396",
    ],
    contactInfo: [
      "Email: office_library@nitsri.net",
    ],
    websiteLink:
      "https://nitsri.ac.in/Department/Deptindex.aspx?page=a&ItemID=io&nDeptID=ck",
  },
  {
    name: "Medical Facilities",
    image: "/Amenities/medical.webp",
    photos: [
      "/Amenities/medical.webp",
      "/Amenities/medical2.webp",
      "/Amenities/medical3.webp",
    ],
    brief:
      "Information about the health center and medical services available on campus.",
    details:
      "Led by Dr. Gowhar Nabi, the Medical Unit at NIT Srinagar ensures holistic and compassionate healthcare. Services include routine check-ups, diagnostics, and emergency care with a patient-centric approach.",
    incharges: ["Dr. Gowhar Nabi (Medical Officer, MBBS, MD)"],
    contactInfo: [
      "Email: medicalunit@nitsri.net",
      "Email: doctor@nitsri.ac.in",
    ],
    websiteLink:
      "https://nitsri.ac.in/Centre/Deptindex.aspx?page=a&ItemID=eagei&nCentreID=cm",
  },
  {
    name: "Cafeteria",
    image: "/Amenities/cafeteria.webp",
    photos: [
      "/Amenities/cafeteria.webp",
      "/Amenities/cafeteria2.webp",
      "/Amenities/cafeteria3.webp",
      "/Amenities/canteen.webp",
      "/Amenities/canteen2.webp",
      "/Amenities/canteen3.webp",
    ],
    brief: "Details about food courts, canteens, and dining facilities.",
    details:
      "Multiple cafeterias and food courts serve a variety of cuisines at affordable prices. Hygienic and comfortable dining spaces are available for all.",
    incharges: [],
    contactInfo: [],
    websiteLink: "",
  },
  {
    name: "WiFi & IT",
    image: "/Amenities/wifi&it.webp",
    photos: [
      "/Amenities/wifi&it.webp",
      "/Amenities/CSC.webp",
      "/Amenities/CSC2.webp",
    ],
    brief:
      "Information about campus-wide WiFi, computer labs, and IT infrastructure.",
    details:
      "CSC is the tech hub of NIT Srinagar offering support in maintenance, networking, software, and system troubleshooting. It promotes a secure and innovative tech environment.",
    incharges: ["Dr. Farida Khursheed (Chairperson)"],
    contactInfo: [
      "Email: mustafa@nitsri.ac.in",
      "Email: kaleem@nitsri.ac.in",
      "Email: aamir@nitsri.ac.in",
      "Email: mshabir@nitsri.ac.in",
    ],
    websiteLink:
      "https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oasao&ItemID=ocmgo&nDeptID=ic",
  },
  {
    name: "Transportation",
    image: "/Amenities/transportation.webp",
    photos: [
      "/Amenities/transportation.webp",
      "/Amenities/transportation2.webp",
      "/Amenities/transportation1.webp",
    ],
    brief: "Details about campus transportation and connectivity.",
    details:
      "Campus buses and shuttles connect all major locations. Easy access to public transport ensures smooth connectivity to the city.",
    incharges: [],
    contactInfo: [],
    websiteLink: "",
  },
  {
    name: "Counselling Cell",
    image: "/Amenities/counselling.webp",
    photos: [
      "/Amenities/counselling.webp",
      "/Amenities/counselling2.webp",
      "/Amenities/counselling3.webp",
    ],
    brief: "Support for mental health, stress, and personal counseling.",
    details:
      "The Counselling Cell offers confidential support for students facing stress, anxiety, homesickness, or any personal issues. Professional counselors are available for one-on-one sessions, workshops, and group discussions to promote mental well-being.",
    incharges: [],
    contactInfo: [],
    websiteLink: "",
  },
  {
    name: "Banking",
    image: "/Amenities/bank.webp",
    photos: [
      "/Amenities/bank.webp",
      "/Amenities/bank1.webp",
      "/Amenities/bank3.webp",
      "/Amenities/bank2.webp",
    ],
    brief: "Information about banking facilities and ATMs on campus.",
    details:
      "A branch of a nationalized bank and multiple ATMs are available on campus for students' convenience. Banking services include account opening, deposits, withdrawals, and other financial services.",
    incharges: [],
    contactInfo: [],
    websiteLink: "",
  },
];

function renderWithLineBreaks(text) {
  return text.split('\n').map((str, idx, arr) =>
    idx < arr.length - 1 ? (
      <React.Fragment key={idx}>
        {str}
        <br />
      </React.Fragment>
    ) : (
      <React.Fragment key={idx}>{str}</React.Fragment>
    )
  );
}

const Amenities = () => {
  const [expanded, setExpanded] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const cardRefs = useRef([]);
  const autoScrollRef = useRef();

  const handleExpand = (idx) => {
    setExpanded(expanded === idx ? null : idx);
    setCarouselIdx(0);
    setTimeout(() => {
      if (cardRefs.current[idx]) {
        cardRefs.current[idx].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 300);
  };

  const handlePrev = (photos) => {
    setCarouselIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = (photos) => {
    setCarouselIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll carousel when expanded
  useEffect(() => {
    let intervalId; // Store the interval ID

    if (expanded !== null) {
      const photos = amenitiesData[expanded].photos;
      intervalId = setInterval(() => {
        setCarouselIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
      }, 3000); // 3 seconds
    }

    // Clear the interval in the cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [expanded]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10">
      {/* Animated Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-100/60 via-lightblue/30 to-snow/80 py-10 sm:py-14 md:py-16 mb-6 sm:mb-10">
        {/* Animated wave SVG */}
        <img
          src={heroWave}
          alt="wave"
          className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 object-cover animate-pulse"
          style={{ zIndex: 1 }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center px-2">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark drop-shadow-lg animate-fade-in-up mb-2 sm:mb-4 text-center">
            Campus Amenities
          </h1>
          <p className="text-base xs:text-lg md:text-xl text-teal font-medium animate-fade-in-up delay-200 text-center px-2">
            Explore the best facilities and support at NIT Srinagar
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {amenitiesData.map((amenity, idx) => (
            <div
              key={amenity.name}
              ref={(el) => (cardRefs.current[idx] = el)}
              onClick={() => handleExpand(idx)}
              className={
                "group cursor-pointer bg-white rounded-3xl shadow-2xl transition-all duration-500 " +
                "hover:shadow-yellow/60 hover:scale-105 perspective-800 " +
                (expanded === idx
                  ? "col-span-1 sm:col-span-2 lg:col-span-3 z-20 scale-105 ring-4 ring-lightblue px-2 xs:px-4 md:px-0 py-2 xs:py-4 md:py-0 mx-2 xs:mx-4 md:mx-0"
                  : "")
              }
              style={{
                minHeight: expanded === idx ? 400 : 220,
                boxShadow:
                  expanded === idx
                    ? "0 10px 40px 0 rgba(13, 148, 136, 0.15)"
                    : "0 4px 20px 0 rgba(13, 148, 136, 0.08)",
                perspective: "800px",
                maxWidth: expanded === idx ? '100%' : undefined,
                margin: expanded === idx ? 'auto' : undefined,
              }}
            >
              {/* Expanded: Carousel left, details right */}
              {expanded === idx ? (
                // Responsive wrapper for expanded card
                <div className="w-full flex justify-center">
                  <div
                    className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl bg-white rounded-3xl shadow-2xl p-2 xs:p-4 md:p-6 mx-2 xs:mx-4 my-4 transition-all duration-500"
                    style={{
                      boxShadow: "0 10px 40px 0 rgba(13, 148, 136, 0.15)",
                      margin: "auto",
                    }}
                  >
                    <div
                      className="flex flex-col md:flex-row w-full h-auto transition-all duration-500 gap-4 md:gap-0"
                      style={{
                        perspective: "1200px",
                      }}
                    >
                      {/* Carousel */}
                      <div
                        className="flex items-center justify-center relative bg-gradient-to-br from-lightblue/30 to-snow/80 rounded-3xl overflow-hidden p-2 xs:p-4 shadow-2xl mx-auto w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm min-w-0"
                        style={{
                          width: "100%",
                          maxWidth: "350px",
                          minWidth: "180px",
                          height: "auto",
                          minHeight: "180px",
                          maxHeight: "320px",
                          margin: "0 auto",
                          transform: "rotateY(-10deg) scale(1.04)",
                          boxShadow:
                            "0 16px 48px 0 rgba(13, 148, 136, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
                          perspective: "1200px",
                        }}
                      >
                        <button
                          className="absolute left-2 xs:left-4 top-1/2 -translate-y-1/2 bg-snow/90 rounded-full p-1 xs:p-2 shadow-lg hover:bg-lightblue transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrev(amenity.photos);
                          }}
                          style={{ zIndex: 2 }}
                        >
                          <span className="text-xl xs:text-2xl text-dark">
                            &#8592;
                          </span>
                        </button>
                        <img
                          src={amenity.photos[carouselIdx]}
                          alt={amenity.name}
                          className="w-full h-full object-cover rounded-3xl transition-all duration-500 shadow-xl"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            minWidth: "0",
                            minHeight: "0",
                            transform: "rotateY(8deg) scale(1.01)",
                            display: "block",
                          }}
                        />
                        <button
                          className="absolute right-2 xs:right-4 top-1/2 -translate-y-1/2 bg-snow/90 rounded-full p-1 xs:p-2 shadow-lg hover:bg-lightblue transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNext(amenity.photos);
                          }}
                          style={{ zIndex: 2 }}
                        >
                          <span className="text-xl xs:text-2xl text-dark">
                            &#8594;
                          </span>
                        </button>
                        {/* Dots */}
                        <div className="absolute bottom-2 xs:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 xs:gap-2">
                          {amenity.photos.map((_, i) => (
                            <span
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i === carouselIdx ? "bg-teal" : "bg-dark/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      {/* Right: Details with 3D pop, no border */}
                      <div
                        className="flex-1 p-3 xs:p-4 md:p-8 flex flex-col justify-center bg-snow/90 rounded-2xl shadow-xl ml-0 md:ml-8 mt-4 md:mt-0 transition-all duration-500 overflow-y-auto w-full"
                        style={{
                          transform: "rotateY(6deg) scale(1.01)",
                          boxShadow: "0 8px 32px 0 rgba(13, 148, 136, 0.13)",
                          maxHeight: "80vh",
                        }}
                      >
                        <button
                          className="absolute top-2 right-2 bg-snow/90 rounded-full p-1 shadow-lg hover:bg-gray-200 transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExpand(idx);
                          }}
                          style={{ zIndex: 3 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold text-dark mb-4">
                          {amenity.name}
                        </h2>

                        {/* Introduction */}
                        <div className="mb-4">
                        
                          <p className="text-dark/80 text-sm xs:text-base">
                            {amenity.details}
                          </p>
                        </div>

                        {/* Important People */}
                        {amenity.incharges.length > 0 && (
                          <div className="mb-4">
                            <ul className="list-disc list-inside text-dark/80 text-sm xs:text-base">
                              {amenity.incharges.map((person, index) => (
                                <li key={index}>{renderWithLineBreaks(person)}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Contact Details */}
                        {amenity.contactInfo.length > 0 && (
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-teal mb-2">
                              Contact Details
                            </h3>
                            <ul className="list-disc list-inside text-dark/80 text-sm xs:text-base">
                              {amenity.contactInfo.map((contact, index) => (
                                <li key={index}>{contact}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Show More / Website Link */}
                        {amenity.websiteLink && (
                          <div className="mt-auto pt-4">
                            <a
                              href={amenity.websiteLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-teal hover:text-teal/80 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="text-sm xs:text-base font-medium">
                                Show More
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Collapsed: Home-style card
                <>
                  <div className="relative overflow-hidden rounded-2xl group-hover:rotate-[-3deg] group-hover:scale-110 transition-all duration-500">
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-full h-40 md:h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500" />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-yellow mb-2 drop-shadow flex items-center gap-2">
                      {amenity.name}
                      <span
                        className={`ml-auto transition-transform duration-300 text-teal ${expanded === idx ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    </h2>
                    <p className="text-dark/80 text-base mb-2">{amenity.brief}</p>
                    {/* Show website link if exists */}
                    {amenity.websiteLink && (
                      <a
                        href={amenity.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal hover:text-teal/80 transition-colors text-sm font-medium mb-2"
                        onClick={e => e.stopPropagation()}
                      >
                        Website Link
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Parallax background effect */}
      <div
        className="fixed top-0 left-0 w-full h-96 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(13,148,136,0.05) 0%, rgba(236, 254, 255, 0.05) 100%)",
        }}
      ></div>
    </div>
  );
};

export default Amenities;
