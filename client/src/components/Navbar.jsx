import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);

  const navLinks = [
    { name: 'Clubs', path: '/clubs' },
    { name: 'Fests', path: '/fests' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-dark shadow-lg border-b border-lightblue/20 backdrop-blur-sm bg-opacity-95 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="https://nitsri.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <img src="/images/logo-white.png" alt="NIT Srinagar Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-2 group-hover:scale-110 transition-all duration-300" />
              <div className="flex flex-col relative">
                <span className="hidden md:block text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-snow to-snow/80 bg-clip-text text-transparent group-hover:from-yellow group-hover:to-lightblue transition-all duration-300 whitespace-nowrap">
                  National Institute of Technology
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-yellow to-lightblue bg-clip-text text-transparent md:bg-none md:text-snow md:group-hover:text-yellow md:transition-colors md:duration-300 md:text-lightblue/90 md:font-medium">
                    Life @ NIT Srinagar
                  </span>
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow to-lightblue group-hover:w-full transition-all duration-500"></div>
              </div>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home link */}
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 relative group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
            </Link>

            {/* Accommodation Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccommodationOpen(!accommodationOpen)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center gap-1 relative group"
              >
                <span className="relative z-10">Accommodation</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
              </button>
              
              {accommodationOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-dark/95 backdrop-blur-sm ring-1 ring-lightblue/20 focus:outline-none z-50 transform origin-top transition-all duration-200">
                  <div className="py-1">
                    <Link
                      to="/accommodation"
                      className="block px-4 py-2 text-sm text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={() => setAccommodationOpen(false)}
                    >
                      Guest House
                    </Link>
                    <a
                      href="https://hostel-page-module-nit-sgr.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                      onClick={() => setAccommodationOpen(false)}
                    >
                      Hostel
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Other navigation links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 rounded-lg text-sm font-medium text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow/0 to-lightblue/0 group-hover:from-yellow/5 group-hover:to-lightblue/5 rounded-lg transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-snow/80 hover:text-yellow hover:bg-lightblue/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-sm border-t border-lightblue/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Home link for mobile */}
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Accommodation Dropdown for mobile */}
            <div className="relative">
              <button
                onClick={() => setAccommodationOpen(!accommodationOpen)}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300 flex items-center justify-between"
              >
                Accommodation
                <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {accommodationOpen && (
                <div className="pl-4">
                  <Link
                    to="/accommodation"
                    className="block px-3 py-2 rounded-lg text-base font-medium text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setAccommodationOpen(false);
                    }}
                  >
                    Guest House
                  </Link>
                  <a
                    href="https://hostel-page-module-nit-sgr.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-lg text-base font-medium text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setAccommodationOpen(false);
                    }}
                  >
                    Hostel
                  </a>
                </div>
              )}
            </div>

            {/* Other navigation links for mobile */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-lg text-base font-medium text-snow/80 hover:text-yellow hover:bg-lightblue/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
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