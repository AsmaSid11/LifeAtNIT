import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaChartLine,
  FaBuilding,
  FaLinkedin,
  FaGraduationCap,
  FaBriefcase,
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
import { motion } from "framer-motion";

const internshipStats = [
  { dept: "CHE", value: "97.5%" },
  { dept: "CIV", value: "98.1%" },
  { dept: "CSE", value: "97.5%" },
  { dept: "ELE", value: "98.1%" },
  { dept: "ECE", value: "96.1%" },
  { dept: "IT", value: "97.6%" },
  { dept: "MEC", value: "99.0%" },
  { dept: "MME", value: "92.6%" },
];

const placementStats = [
  { dept: "CSE", avg: "10 LPA", high: "39 LPA", med: "8 LPA" },
  { dept: "IT", avg: "9 LPA", high: "19.1 LPA", med: "10.6 LPA" },
  { dept: "ECE", avg: "8.5 LPA", high: "15.5 LPA", med: "8.9 LPA" },
  { dept: "ELE", avg: "8.61 LPA", high: "15.5 LPA", med: "7.5 LPA" },
  { dept: "MEC", avg: "8 LPA", high: "13.9 LPA", med: "8.5 LPA" },
  { dept: "CHE", avg: "8.5 LPA", high: "9.32 LPA", med: "8.5 LPA" },
  { dept: "CIV", avg: "7.92 LPA", high: "13.9 LPA", med: "7.6 LPA" },
  { dept: "MME", avg: "8 LPA", high: "16.6 LPA", med: "9.23 LPA" },
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
      <div className="relative aspect-[16/4.5] w-full shadow-2xl mb-20 overflow-hidden">
        <motion.img
          src="../../images/p.jpeg"
          alt="Student Clubs"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="py-6 px-4 w-full overflow-hidden bg-[#1F2647]/50 text-center">
            <h1 className="text-6xl font-bold text-[#FFFBFC] animate-fade-in">
              Student <span className="text-yellow">Placements</span>
            </h1>
            <p className="mt-1 text-lg font-medium text-[#FFFBFC] tracking-wide animate-fade-in-up">
              Connect. Collaborate. Create.
            </p>
          </div>
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
            <p className="text-3xl font-bold text-[#DDA853]">95%+</p>
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
            <p className="text-3xl font-bold text-[#DDA853]">10K+</p>
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
          <div
            className="elfsight-app-aac1a6f9-377a-4ba6-8bd2-e0625c1d8888"
            data-elfsight-app-lazy
          ></div>
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

          {/* Chart */}
          <div className="h-96 mb-8 bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] rounded-xl p-6 shadow-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={placementStats}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="avgGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#DDA853" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#DDA853" stopOpacity={0.6} />
                  </linearGradient>
                  <linearGradient id="highGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1F2647" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#1F2647" stopOpacity={0.6} />
                  </linearGradient>
                  <linearGradient id="medGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#88DADA" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#88DADA" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#E6D5B8"
                  vertical={false}
                />
                <XAxis
                  dataKey="dept"
                  stroke="#1F2647"
                  tick={{ fill: "#1F2647", fontSize: 12, fontWeight: 500 }}
                  axisLine={{ stroke: "#1F2647", strokeWidth: 1.5 }}
                />
                <YAxis
                  stroke="#1F2647"
                  tick={{ fill: "#1F2647", fontSize: 12, fontWeight: 500 }}
                  axisLine={{ stroke: "#1F2647", strokeWidth: 1.5 }}
                  tickFormatter={(value) => `${value} LPA`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 248, 231, 0.95)",
                    border: "1px solid #DDA853",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    color: "#1F2647",
                    backdropFilter: "blur(4px)",
                  }}
                  labelStyle={{ color: "#1F2647", fontWeight: "bold" }}
                  formatter={(value) => [`${value} LPA`, ""]}
                />
                <Legend
                  wrapperStyle={{
                    paddingTop: "20px",
                    fontSize: "12px",
                    color: "#1F2647",
                    fontWeight: 500,
                  }}
                />
                <Bar
                  dataKey="avg"
                  name="Average Package"
                  fill="url(#avgGradient)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
                <Bar
                  dataKey="high"
                  name="Highest Package"
                  fill="url(#highGradient)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
                <Bar
                  dataKey="med"
                  name="Median Package"
                  fill="url(#medGradient)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Table */}
          {/*<div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Package</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Highest Package</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Median Package</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {placementStats.map((stat) => (
                  <tr key={stat.dept} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1F2647]">{stat.dept}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.avg}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.high}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.med}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </section>

        {/* Past Recruiters */}
        <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
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
      </div>
    </div>
  );
};

export default Placements;
