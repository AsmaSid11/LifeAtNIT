import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaChartLine,
  FaBuilding,
  FaLinkedin,
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import heroWave from "../../assets/hero-wave.svg";

const internshipStats = [
  { dept: "CHE", value: "81.6%" },
  { dept: "CIV", value: "91.8%" },
  { dept: "CSE", value: "98.7%" },
  { dept: "ELE", value: "95.2%" },
  { dept: "ECE", value: "96.9%" },
  { dept: "ITE", value: "100%" },
  { dept: "MEC", value: "89.7%" },
  { dept: "MME", value: "98.8%" },
];

const placementStats = [
  { dept: "CSE", avg: "11 LPA", high: "19.2 LPA", med: "11 LPA" },
  { dept: "IT", avg: "10.4 LPA", high: "35.5 LPA", med: "8 LPA" },
  { dept: "ECE", avg: "8.6 LPA", high: "19.2 LPA", med: "8 LPA" },
  { dept: "ELE", avg: "8 LPA", high: "18 LPA", med: "6.5 LPA" },
  { dept: "MEC", avg: "8.6 LPA", high: "18 LPA", med: "7 LPA" },
  { dept: "CHE", avg: "8.4 LPA", high: "14 LPA", med: "6 LPA" },
  { dept: "CIV", avg: "8 LPA", high: "20.3 LPA", med: "6.5 LPA" },
  { dept: "MME", avg: "8 LPA", high: "14 LPA", med: "6.5 LPA" },
];

const Placements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const filteredRecruiters = [
    "Google",
    "Amazon",
    "Microsoft",
    "NVIDIA",
    "Samsung",
    "Deloitte",
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "DE Shaw",
    "C-DOT",
    "NTPC",
    "ONGC",
    "Reliance",
    "L&T",
    "Vedanta",
    "ICICI Bank",
    "Optum",
    "Maruti Suzuki",
    "Ashok Leyland",
    "HP",
    "IndianOil",
    "BHEL",
    "JSW Steel",
    "Jio",
    "Sigmoid",
    "Chegg",
    "Publicis Sapient",
    "Vedantu",
    "Winjit",
    "Leena AI",
    "Innominds",
    "Clicklabs",
    "Subex",
    "XenonStack",
    "FourKites",
    "Karza",
    "Think Gas",
    "Halliburton",
    "HDFC Bank",
    "Capgemini",
    "Runaya",
    "Alstom",
    "Vivo",
    "Tekion",
    "Jungleworks",
    "Newzera",
  ].filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase()));

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
            Internships & Placements
          </h1>

          <p className="text-base xs:text-lg md:text-xl text-teal font-medium animate-fade-in-up delay-200 text-center px-2">
            Guiding students to success with our committed Training and
            Placement Cell.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaChartLine className="text-3xl text-[#1F2647] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Placement Rate
            </h3>
            <p className="text-3xl font-bold text-[#DDA853]">94%+</p>
            <p className="text-sm text-gray-500">
              Average placement rate across departments
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaBuilding className="text-3xl text-[#1F2647] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Top Recruiters
            </h3>
            <p className="text-3xl font-bold text-[#DDA853]">50+</p>
            <p className="text-sm text-gray-500">
              Leading companies visit our campus
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaLinkedin className="text-3xl text-[#1F2647] mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Alumni Network
            </h3>
            <p className="text-3xl font-bold text-[#DDA853]">25K+</p>
            <p className="text-sm text-gray-500">
              Strong alumni network worldwide
            </p>
          </div>
        </div>

        {/* LinkedIn Feed Embed */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#1F2647] mb-6 flex items-center">
            <FaLinkedin className="mr-2 text-[#DDA853]" /> Live LinkedIn Updates
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with placement and internship announcements from our
            T&P Cell:
          </p>
          <div className="relative overflow-hidden" style={{ height: "400px" }}>
            {" "}
            {/* Adjust height as needed */}
            <div
              className="elfsight-app-aac1a6f9-377a-4ba6-8bd2-e0625c1d8888"
              data-elfsight-app-lazy
            ></div>
          </div>
        </section>

        {/* Internship Statistics */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#1F2647] mb-6 flex items-center">
            <FaChartLine className="mr-2 text-[#DDA853]" /> Internship
            Statistics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {internshipStats.map((item) => (
              <div
                key={item.dept}
                className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 hover:border-[#DDA853] transition-all duration-300 hover:shadow-md"
              >
                <div className="text-2xl font-bold text-[#1F2647] mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {item.dept}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Placement Statistics */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#1F2647] mb-6 flex items-center">
            <FaChartLine className="mr-2 text-[#DDA853]" /> Placement Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:border-[#DDA853] transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaGraduationCap className="text-[#1F2647] text-xl" />
                  <span className="text-lg font-bold  bg-blue-50 px-3 py-1 rounded-full">
                    {stat.dept}
                  </span>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <span className="bg-amber-0 px-3 py-2 rounded-lg text-base font-medium text-amber-700 flex items-center justify-center">
                    <FaChartLine className="mr-2 text-[#DDA853]" /> Avg: {stat.avg}
                  </span>
                  <span className="bg-amber-50 px-3 py-2 rounded-lg text-base font-medium text-amber-800 flex items-center justify-center">
                    <FaClock className="mr-2 text-[#DDA853]" /> Med: {stat.med}
                  </span>
                  <span className="bg-amber-100 px-3 py-2 rounded-lg text-base font-medium text-amber-900 flex items-center justify-center">
                    <FaBriefcase className="mr-2 text-[#DDA853]" /> High:{" "}
                    {stat.high}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Recruiters */}
        <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-[#1F2647] mb-6 flex items-center">
            <FaBuilding className="mr-2 text-[#DDA853]" /> Past Recruiters
          </h2>
          <p className="text-gray-600 mb-6">
            Some of the esteemed organizations that have hired from our campus:
          </p>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search recruiters..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DDA853] focus:border-[#DDA853] transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredRecruiters.map((name) => (
              <div
                key={name}
                className="bg-gray-50 rounded-xl p-3 text-center text-sm text-gray-700 border border-gray-100 hover:border-[#DDA853] transition-all duration-300 cursor-pointer hover:shadow-md"
              >
                {name}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-20 mb-16 px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto py-10 px-4 sm:px-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-1 text-center">
              Training and Placement Cell - NIT Srinagar
            </h2>
            <div className="text-2xl md:text-3xl font-semibold text-yellow mb-8 text-center">
              Contact Us
            </div>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {/* Email */}
              <div className="flex-1 p-6 flex flex-col items-center mb-6 md:mb-0">
                <FaEnvelope className="text-[#DDA853] text-2xl mb-2" />
                <p className="text-sm text-gray-500 mb-2">Email</p>
                <p className="text-base font-medium break-all">
                  <a
                    href="mailto:internships@nitsri.ac.in"
                    className="hover:underline"
                  >
                    internships@nitsri.ac.in
                  </a>
                </p>
                <p className="text-base font-medium break-all">
                  <a
                    href="mailto:placementStats@nitsri.ac.in"
                    className="hover:underline"
                  >
                    placementStats@nitsri.ac.in
                  </a>
                </p>
                <p className="text-base font-medium break-all">
                  <a
                    href="mailto:hodtandp@nitsri.ac.in"
                    className="hover:underline"
                  >
                    hodtandp@nitsri.ac.in
                  </a>
                </p>
              </div>
              {/* Phone */}
              <div className="flex-1 p-6 flex flex-col items-center">
                <FaPhone className="text-[#DDA853] text-2xl mb-2" />
                <p className="text-sm text-gray-500 mb-2">Phone</p>
                <p className="text-base font-medium break-all">
                  +91- 94192 26538
                </p>
                <p className="text-base font-medium break-all">
                  +91- 94192 26574
                </p>
                <p className="text-base font-medium break-all">
                  0194 - 2424809
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Placements;
