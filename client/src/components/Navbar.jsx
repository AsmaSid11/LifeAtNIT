import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [gymkhanaOpen, setGymkhanaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const navRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 110);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setAccommodationOpen(false);
        setAchievementsOpen(false);
        setGymkhanaOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
  const closeAllDropdowns = () => {
    setAccommodationOpen(false);
    setAchievementsOpen(false);
    setGymkhanaOpen(false);
  };

  
  const toggleDropdown = (dropdownName) => {
    closeAllDropdowns();
    
    switch(dropdownName) {
      case 'accommodation':
        setAccommodationOpen(true);
        break;
      case 'achievements':
        setAchievementsOpen(true);
        break;
      case 'gymkhana':
        setGymkhanaOpen(true);
        break;
      default:
        break;
    }
  };

  const navLinks = [
    { name: "Alumni", path: "/alumni" },
    { name: "Amenities", path: "/amenities" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const getDropdownBgColor = () => {
    if (isHomePage && !isScrolled) {
      return 'bg-black/95';
    }
    return 'bg-dark/95';
  };

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? "bg-black text-snow"
          : "bg-dark/95 shadow-lg backdrop-blur-sm text-snow"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="https://nitsri.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <img
                src="/images/logo-white.webp"
                alt="NIT Srinagar Logo"
                className="h-6 w-6 sm:h-8 sm:w-8 mr-2 group-hover:scale-110 transition-all duration-300"
              />
              <div className="flex flex-col relative">
                <span className="md:block text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-snow to-snow/80 bg-clip-text text-transparent group-hover:from-yellow group-hover:to-lightblue transition-all duration-300 whitespace-nowrap font-sans tracking-wide">
                  Life@NIT
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow to-lightblue group-hover:w-full transition-all duration-500"></div>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-sm font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 relative group"
              onClick={closeAllDropdowns}
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
            </Link>

            {/* Gymkhana Dropdown */}
            {/* <div
              className="relative"
              onMouseEnter={() => setGymkhanaOpen(true)}
              onMouseLeave={() => setGymkhanaOpen(false)}
            >
              <button
                onClick={() => gymkhanaOpen ? closeAllDropdowns() : toggleDropdown('gymkhana')}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center gap-1 relative group"
              >
                <span className="relative z-10">Gymkhana</span>

                <svg className={`w-4 h-4 relative z-10 transition-transform duration-300 ${gymkhanaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
              </button>

              {gymkhanaOpen && (
                <div className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg ${getDropdownBgColor()} backdrop-blur-sm ring-1 ring-lightblue/20 focus:outline-none z-50`}>
                  <div className="py-1">
                    <Link
                      to="/clubs"
                      className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      Clubs
                    </Link>
                    <Link
                      to="/fests"
                      className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      Fests
                    </Link>
                  </div>
                </div>
              )}
            </div> */}
            <div
              className="relative"
              onMouseEnter={() => setGymkhanaOpen(true)}
              onMouseLeave={() => setGymkhanaOpen(false)}
            >
              <button
                onClick={() => setGymkhanaOpen((prev) => !prev)}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center gap-1 relative group"
              >
                <span className="relative z-10">Gymkhana</span>
                <svg
                  className={`w-4 h-4 relative z-10 transition-transform duration-300 ${
                    gymkhanaOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-dark/95 backdrop-blur-sm ring-1 ring-lightblue/20 focus:outline-none z-50 transition-all duration-300 ${
                  gymkhanaOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-1">
                  <Link
                    to="/clubs"
                    className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => setGymkhanaOpen(false)}
                  >
                    Clubs
                  </Link>
                  <Link
                    to="/fests"
                    className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => setGymkhanaOpen(false)}
                  >
                    Fests
                  </Link>
                </div>
              </div>
            </div>

            {/* Achievements Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAchievementsOpen(true)}
              onMouseLeave={() => setAchievementsOpen(false)}
            >
              <button
                onClick={() => achievementsOpen ? closeAllDropdowns() : toggleDropdown('achievements')}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center gap-1 relative group"
              >
                <span className="relative z-10">Achievements</span>

                <svg className={`w-4 h-4 relative z-10 transition-transform duration-300 ${achievementsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />

                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
              </button>


              {achievementsOpen && (
                <div className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg ${getDropdownBgColor()} backdrop-blur-sm ring-1 ring-lightblue/20 focus:outline-none z-50`}>
                  <div className="py-1">
                    <Link
                      to="/achievements/student"
                      className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      Student Achievements
                    </Link>
                    <Link
                      to="/achievements/faculty"
                      className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      Faculty Recognition
                    </Link>
                    <Link
                      to="/achievements/placements"
                      className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      Placements
                    </Link>
                    <Link
                      to="/achievements/startups"
                      className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      Startups
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Accommodation Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAccommodationOpen(true)}
              onMouseLeave={() => setAccommodationOpen(false)}
            >
              <button
                onClick={() => accommodationOpen ? closeAllDropdowns() : toggleDropdown('accommodation')}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center gap-1 relative group"
              >
                <span className="relative z-10">Accommodation</span>

                <svg className={`w-4 h-4 relative z-10 transition-transform duration-300 ${accommodationOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />

                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
              </button>


              {accommodationOpen && (
                <div className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg ${getDropdownBgColor()} backdrop-blur-sm ring-1 ring-lightblue/20 focus:outline-none z-50`}>
                  <div className="py-1">
                    <Link
                      to="/accommodation"
                      className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      Guest House
                    </Link>
                    <a
                      href="https://hostel-page-module-nit-sgr.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={closeAllDropdowns}
                    >
                      Hostel
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 relative group"
                onClick={closeAllDropdowns}
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                closeAllDropdowns();
              }}
              className="inline-flex items-center justify-center p-2 rounded-lg hover:text-yellow hover:bg-lightblue/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow transition-all duration-300"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-sm border-t border-lightblue/20 text-snow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
              onClick={() => {
                setIsOpen(false);
                closeAllDropdowns();
              }}
            >
              Home
            </Link>

            {/* Mobile Gymkhana */}
            <div className="relative">
              <button
                onClick={() => gymkhanaOpen ? closeAllDropdowns() : toggleDropdown('gymkhana')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center justify-between"
              >
                Gymkhana

                <svg className={`w-4 h-4 transition-transform duration-300 ${gymkhanaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {gymkhanaOpen && (
                <div className="pl-4">
                  <Link
                    to="/clubs"
                    className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Clubs
                  </Link>
                  <Link
                    to="/fests"
                    className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Fests
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Achievements */}
            <div className="relative">
              <button
                onClick={() => achievementsOpen ? closeAllDropdowns() : toggleDropdown('achievements')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center justify-between"
              >
                Achievements

                <svg className={`w-4 h-4 transition-transform duration-300 ${achievementsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {achievementsOpen && (
                <div className="pl-4">
                  <Link
                    to="/achievements/student"
                    className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Student Achievements
                  </Link>
                  <Link
                    to="/achievements/faculty"
                    className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Faculty Recognition
                  </Link>
                  <Link
                    to="/achievements/placements"
                    className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Placements
                  </Link>
                  <Link
                    to="/achievements/startups"
                    className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Startups
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Accommodation */}
            <div className="relative">
              <button
                onClick={() => accommodationOpen ? closeAllDropdowns() : toggleDropdown('accommodation')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center justify-between"
              >
                Accommodation

                <svg className={`w-4 h-4 transition-transform duration-300 ${accommodationOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />

                </svg>
              </button>

              {accommodationOpen && (
                <div className="pl-4">
                  <Link
                    to="/accommodation"
                    className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Guest House
                  </Link>
                  <a
                    href="https://hostel-page-module-nit-sgr.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    Hostel
                  </a>
                </div>
              )}
            </div>

            {/* Mobile other links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-lg text-base font-medium hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                onClick={() => {
                  setIsOpen(false);
                  closeAllDropdowns();
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
