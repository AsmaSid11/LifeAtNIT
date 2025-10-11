import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedClub, setSelectedClub] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  // Helper function to parse date and get latest date for sorting
  const getEventDate = (dates) => {
    if (!dates || dates.length === 0) return new Date();
    
    // Get the latest date from the dates array for sorting
    const latestDate = dates[dates.length - 1];
    const [day, month, year] = latestDate.split('-');
    return new Date(year, month - 1, day);
  };

  // Helper function to check if event is past
  const isEventPast = (dates) => {
    if (!dates || dates.length === 0) return false;
    
    const eventDate = getEventDate(dates);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for accurate date comparison
    
    return eventDate < today;
  };

  // Fetch events data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/data/events.json');
        const data = await response.json();
        
        // Sort events by date (earliest first)
        const sortedEvents = data.events.sort((a, b) => {
          const dateA = getEventDate(a.dates);
          const dateB = getEventDate(b.dates);
          return dateA - dateB;
        });
        
        setEvents(sortedEvents);
        setFilteredEvents(sortedEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };
    fetchEvents();
  }, []);

  // Get unique clubs for filter
  const clubs = ["All", ...new Set(events.map(event => event.clubName))];

  // Filter events and separate into past and upcoming
  useEffect(() => {
    let filtered = events;
    
    if (selectedClub !== "All") {
      filtered = filtered.filter(event => event.clubName === selectedClub);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.clubName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Separate into past and upcoming events
    const upcoming = filtered.filter(event => !isEventPast(event.dates));
    const past = filtered.filter(event => isEventPast(event.dates));
    
    setUpcomingEvents(upcoming);
    setPastEvents(past.reverse()); // Show most recent past events first
    setFilteredEvents(filtered);
  }, [selectedClub, searchTerm, events]);

  const formatDate = (dates) => {
    if (!dates || dates.length === 0) return 'Date TBD';
    
    if (dates.length === 1) {
      const [day, month, year] = dates[0].split('-');
      const date = new Date(year, month - 1, day);
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } else {
      const [startDay, startMonth, startYear] = dates[0].split('-');
      const [endDay, endMonth, endYear] = dates[dates.length - 1].split('-');
      const startDate = new Date(startYear, startMonth - 1, startDay);
      const endDate = new Date(endYear, endMonth - 1, endDay);
      return `${startDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })} - ${endDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      })}`;
    }
  };

  const getClubColor = (clubName) => {
    const colors = {
      "Technology Club": "#0D9488",
      "Sargam Club": "#8B5CF6",
      "Rhetorica Club": "#EF4444",
      "Cultural Club & Soap-box": "#F59E0B",
      "Movie Club": "#06B6D4",
      "Photography Club": "#10B981",
      "Rhetorica and eco club": "#F97316"
    };
    return colors[clubName] || "#6B7280";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-100/60 via-lightblue/30 to-snow/80 py-16 sm:py-20 mb-8">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
            style={{ color: '#1F2647' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Campus Events
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover exciting events, workshops, and activities happening across our vibrant campus
          </motion.p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4" style={{ borderTopColor: '#DDA853' }}>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-grow w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Club Filter */}
            <div className="w-full lg:w-auto">
              <select
                value={selectedClub}
                onChange={(e) => setSelectedClub(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {clubs.map(club => (
                  <option key={club} value={club}>{club}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 whitespace-nowrap">
              {upcomingEvents.length} upcoming • {pastEvents.length} past events
            </div>
          </div>
        </div>
      </div>

      {/* Events Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <>
            {/* Upcoming Events Section */}
            {upcomingEvents.length > 0 ? (
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#0D9488' }}></div>
                    <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1F2647' }}>
                      Upcoming Events
                    </h2>
                  </div>
                  <div className="flex-grow ml-4 h-px bg-gradient-to-r from-teal-300 to-transparent"></div>
                  <span className="ml-4 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {upcomingEvents.length} events
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      index={index} 
                      getClubColor={getClubColor}
                      formatDate={formatDate}
                      isPast={false}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#0D9488' }}></div>
                    <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1F2647' }}>
                      Upcoming Events
                    </h2>
                  </div>
                  <div className="flex-grow ml-4 h-px bg-gradient-to-r from-teal-300 to-transparent"></div>
                </div>
                
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg border-t-4" style={{ borderTopColor: '#0D9488' }}>
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F2647' }}>No Upcoming Events</h3>
                  <p className="text-gray-600 mb-6">All events have concluded. Check back soon for new exciting events!</p>
                  <div className="text-sm text-gray-500">
                    Stay tuned to our social media for updates on future events
                  </div>
                </div>
              </div>
            )}

            {/* Past Events Section */}
            {pastEvents.length > 0 && (
              <div>
                <div className="flex items-center mb-8">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#6B7280' }}></div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-600">
                      Past Events
                    </h2>
                  </div>
                  <div className="flex-grow ml-4 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  <span className="ml-4 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {pastEvents.length} events
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event, index) => (
                    <EventCard 
                      key={event.id} 
                      event={event} 
                      index={index} 
                      getClubColor={getClubColor}
                      formatDate={formatDate}
                      isPast={true}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// Separate EventCard component for reusability
const EventCard = ({ event, index, getClubColor, formatDate, isPast }) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 h-full ${isPast ? 'opacity-75' : ''}`}
      style={{ borderTopColor: getClubColor(event.clubName) }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isPast ? 0.75 : 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, opacity: 1 }}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Event Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <span 
              className="text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: getClubColor(event.clubName) }}
            >
              {event.clubName}
            </span>
            {isPast && (
              <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                Past
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">
              {formatDate(event.dates)}
            </div>
          </div>
        </div>

        {/* Event Title */}
        <h3 className="text-xl font-bold mb-3 flex-shrink-0" style={{ color: isPast ? '#6B7280' : '#1F2647' }}>
          {event.eventName}
        </h3>

        {/* Event Description */}
        <p className={`text-sm leading-relaxed flex-grow mb-4 ${isPast ? 'text-gray-500' : 'text-gray-600'}`}>
          {event.description}
        </p>

        {/* Event Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
              style={{ backgroundColor: isPast ? '#6B7280' : getClubColor(event.clubName) }}
            >
              📅
            </div>
            <span className={`ml-2 text-sm font-medium ${isPast ? 'text-gray-500' : ''}`} style={{ color: isPast ? '#6B7280' : '#1F2647' }}>
              {isPast ? 'Event completed' : "Don't miss out!"}
            </span>
          </div>
          <button 
            className={`text-sm font-medium px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-gray-100 ${isPast ? 'text-gray-500' : ''}`}
            style={{ color: isPast ? '#6B7280' : getClubColor(event.clubName) }}
          >
            {isPast ? 'View Details' : 'Learn More'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Events;