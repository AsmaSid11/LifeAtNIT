import React, { useEffect, useState } from "react";

const features = [
  {
    title: "Vibrant Student Life",
    desc: "Join a diverse range of clubs, fests, and activities that make every day exciting.",
    img: "/Clubs/DSC_1248.webp",
    link: "/clubs",
    icon: "🎭"
  },
  {
    title: "World-Class Amenities",
    desc: "Enjoy modern hostels, sports complexes, libraries, and more for a holistic experience.",
    img: "/Amenities/library2.webp",
    link: "/amenities",
    icon: "🏛️"
  },
  {
    title: "Unforgettable Fests",
    desc: "Experience the thrill of our cultural and technical fests, where talent meets celebration.",
    img: "/Clubs/DSC08125 (1).webp",
    link: "/fests",
    icon: "🎪"
  },
];

const heroTexts = [
  "National Institute of Technology Srinagar",
  "Life at NIT Srinagar",
  "Excellence Meets Innovation"
];

const achievements = [
  { label: "NIRF Ranking", value: "#79", subtitle: "Engineering" },
  { label: "Placement Rate", value: "94%", subtitle: "Last Year" },
  { label: "Students", value: "4000+", subtitle: "Active" },
  { label: "Alumni", value: "25K+", subtitle: "Worldwide" }
];

const testimonials = [
  {
    name: "Dayim Sajad",
    role: "B Tech (MECH) - 2025",
    text: "I am grateful to the Department of Training and Placement for their consistent support in facilitating my placement at Aditya Birla Group. Their dedication played an important role in this achievement.",
    image: "images/dayim_sajad.webp"
  },
  {
    name: "Palak Sharma",
    role: "B Tech (CSE) - 2025",
    text: "I'm happy to share that I've been placed at PwC. Many thanks to the Training and Placement Department and team for their clear communication, smooth coordination, and constant support throughout the placement process.",
    image: "images/palak_sharma.webp"
  },
  {
    name: "Sanjay",
    role: "B Tech (ELE) - 2025",
    text: "I'm thrilled to be placed at Tata Power DDL. Grateful to the Training and Placement Department for their support. Looking forward to contributing to urban power infrastructure and gaining valuable experience in this dynamic sector.",
    image: "images/sanjay.webp"
  }
];

const campusHighlights = [
  { title: "Smart Classrooms", count: "60+", icon: "📚" },
  { title: "Research Labs", count: "25+", icon: "🔬" },
  { title: "Sports Facilities", count: "15+", icon: "⚽" },
  { title: "Cultural Clubs", count: "30+", icon: "🎨" }
];

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero text sliding animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial sliding animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate sections on scroll
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("animate-fade-in-up", "opacity-100");
        }
      });
    };

    const handleScroll = () => {
      reveal();
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    reveal();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.querySelector('.features-section').scrollIntoView({ behavior: 'smooth' });
  };

  // Function to handle feature card click and navigate
  const handleFeatureClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Hero Section - Made Responsive */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={e => { e.target.currentTime = 0; e.target.play(); }}
        >
          <source src="/videos/hero4.mp4" type="video/mp4" />
          {/* Fallback image in case video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
            alt="Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6">
          {/* Clean Hero Text - Responsive sizing with single line fix */}

          <div className="relative h-20 sm:h-24 md:h-32 mb-2 sm:mb-4 flex items-center justify-center">
            {heroTexts.map((text, index) => (
              <h1
                key={index}
                className={`absolute text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-1000 transform px-2 text-center whitespace-nowrap ${index === currentSlide
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                  }`}
              >
                <span className="text-white drop-shadow-lg">{text}</span>
              </h1>
            ))}
          </div>


          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-small mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm px-4">
            Discover excellence in education and innovation in the heart of Kashmir
          </p>

          {/* Enhanced Achievement Stats - Fixed box sizes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-12">
            {achievements.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group h-24 sm:h-28 md:h-32 flex flex-col justify-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: '#DDA853' }}>
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-xs sm:text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-300 text-xs">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator - Positioned better for mobile */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={scrollToFeatures}>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center group-hover:border-white transition-colors duration-300" >
            <div className="w-1 h-3 rounded-full mt-2 group-hover:bg-white transition-colors duration-300" style={{ backgroundColor: 'white' }} />
          </div>
        </div>
      </div>



      {/* Refined Features Section - Already responsive */}
      <div className="features-section bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#DDA853', color: '#1F2647' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#1F2647' }}></span>
              Why Choose Us?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F2647' }}>
              Your Gateway to Success
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-1xl mx-auto px-4">
              Discover what makes NIT Srinagar the premier destination for academic and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="reveal opacity-0 group h-full"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Made the entire card clickable */}
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 flex flex-col h-full cursor-pointer"
                  style={{ borderTopColor: '#DDA853' }}
                  onClick={() => handleFeatureClick(feature.link)} // Added onClick handler
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={feature.img} // Now correctly points to the public folder
                      alt={feature.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(221, 168, 83, 0.9)' }}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content area updated */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2647' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                      {feature.desc}
                    </p>

                    {/* This "Explore More" div itself now triggers the click as the parent div is clickable */}
                    <div className="flex items-center group/link mt-auto">
                      <span className="font-medium mr-2 transition-colors duration-300" style={{ color: '#0D9488' }}>
                        Explore More
                      </span>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-1" style={{ backgroundColor: '#0D9488' }}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End content area */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Connecting Bridge */}
      <div className="h-8" style={{ backgroundColor: '#88DADA' }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 32"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,16 600,24 900,8 C1000,4 1100,12 1200,32 L1200,0 L0,0 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* Refined Testimonials Section - Made responsive */}
      <div className="py-12 sm:py-16" style={{ backgroundColor: '#88DADA' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#1F2647', color: '#DDA853' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#DDA853' }}></span>
              Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F2647' }}>
              Voices of Excellence
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto px-4" style={{ color: '#1F2647' }}>
              Hear from our accomplished alumni who are making their mark globally
            </p>
          </div>

          <div className="relative">
            {/* Added pt-4 for padding top */}
            <div className="bg-white rounded-2xl shadow-lg pt-4 pb-6 sm:p-8 max-w-3xl mx-auto border-t-4" style={{ borderTopColor: '#DDA853' }}>
              <div className="relative h-56 sm:h-48 flex items-center justify-center flex-col">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${index === currentTestimonial
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                      } flex flex-col items-center justify-center px-4`}
                  >
                    <div className="relative mb-1"> {/* Reduced mb from mb-4 to mb-1 for tighter spacing */}
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full shadow-md border-3"
                        style={{ borderColor: '#DDA853' }}
                      />
                    </div>
                    {/* Adjusted text size and removed vertical margin to align */}
                    <div className="text-center"> {/* Removed my-1 from here */}
                      <div className="text-base sm:text-lg font-bold" style={{ color: '#1F2647' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm" style={{ color: '#0D9488' }}>
                        {testimonial.role}
                      </div>
                    </div>
                    {/* Made testimonial text smaller */}
                    <blockquote className="text-sm sm:text-base font-medium italic mt-2 mb-4 max-w-2xl leading-relaxed" style={{ color: '#1F2647' }}> {/* Added mt-2 for slight separation from role */}
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'scale-125' : 'hover:scale-110'
                    }`}
                  style={{
                    backgroundColor: index === currentTestimonial ? '#1F2647' : 'rgba(31, 38, 71, 0.3)'
                  }}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Refined Campus Highlights Section - Made responsive */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#1F2647', color: '#DDA853' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#DDA853' }}></span>
              Campus Overview
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F2647' }}>
              Excellence in Every Corner
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              State-of-the-art facilities designed to nurture innovation and academic excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {campusHighlights.map((item, index) => (
              <div
                key={item.title}
                className="group text-center p-4 sm:p-6 rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 bg-white hover:bg-blue-50 cursor-pointer reveal opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 transition-colors duration-300" style={{ color: '#1F2647' }}>
                  {item.count}
                </div>
                <div className="text-sm sm:font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* Connecting Bridge */}
      <div className="h-12 bg-yellow">
        <svg
          className="w-full h-full scale-x-[-1]"
          viewBox="0 0 1200 32"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,16 600,24 900,8 C1000,4 1100,12 1200,32 L1200,0 L0,0 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>


      {/* Refined Call to Action - Made responsive */}
      <div className="py-12 sm:py-16 bg-yellow" >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#1F2647', color: '#88DADA' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#88DADA' }}></span>
              Take Action
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark px-4">
              Your Future Starts Here
            </h2>
            <p className="text-sm sm:text-base max-w-1xl mx-auto mb-8 sm:mb-10 px-4" style={{ color: 'white' }}>
              Join thousands of successful alumni who began their journey at NIT Srinagar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button className="group px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              style={{ backgroundColor: ' #1F2647', color: '#DDA853' }}>
              <span>Explore Student Life</span>
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="group px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 flex items-center justify-center hover:bg-white hover:text-gray-800"
              style={{
                backgroundColor: 'transparent',
                color: '#1F2647',
                borderColor: '#1F2647'
              }}
              onClick={() => window.open('http://www.youtube.com/watch?v=xEkUrqU3yCs', '_blank')} // Corrected URL
            >
              <span>Campus Tour</span>
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            {[
              { icon: "🎓", title: "Academic Excellence", desc: "Top-tier education standards" },
              { icon: "🚀", title: "Innovation Hub", desc: "Cutting-edge research facilities" },
              { icon: "🌐", title: "Global Network", desc: "Worldwide alumni connections" }
            ].map((item, index) => (
              <div key={item.title} className="text-center group">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="font-bold text-sm sm:text-base mb-1 sm:mb-2" >
                  {item.title}
                </div>
                <div className="text-xs sm:text-sm" style={{ color: '#ffffff' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Professional spacing consistency */
        .section-padding {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        /* Subtle hover effects */
        .hover\\:shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </div>
  );
}