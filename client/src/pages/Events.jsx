import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedClub, setSelectedClub] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch events data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/data/events.json');
        const data = await response.json();
        setEvents(data.events);
        setFilteredEvents(data.events);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };
    fetchEvents();
  }, []);

  // Get unique clubs for filter
  const clubs = ["All", ...new Set(events.map(event => event.clubName))];

  // Filter events based on club and search term
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
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 h-full"
                style={{ borderTopColor: getClubColor(event.clubName) }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Event Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span 
                      className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: getClubColor(event.clubName) }}
                    >
                      {event.clubName}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-semibold" style={{ color: '#1F2647' }}>
                        {event.date}
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatDate(event.dates)}
                      </div>
                    </div>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-xl font-bold mb-3 flex-shrink-0" style={{ color: '#1F2647' }}>
                    {event.eventName}
                  </h3>

                  {/* Event Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                    {event.description}
                  </p>

                  {/* Event Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                        style={{ backgroundColor: getClubColor(event.clubName) }}
                      >
                        📅
                      </div>
                      <span className="ml-2 text-sm font-medium" style={{ color: '#1F2647' }}>
                        Don't miss out!
                      </span>
                    </div>
                    <button 
                      className="text-sm font-medium px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-gray-100"
                      style={{ color: getClubColor(event.clubName) }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;