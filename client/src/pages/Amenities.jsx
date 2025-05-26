import React, { useState, useRef, useEffect } from "react";
import heroWave from "../assets/hero-wave.svg"; // Make sure this SVG exists

const amenitiesData = [
	{
		name: "Sports Facilities",
		image: "/Amenities/sports.jpg",
		photos: [
			"/Amenities/sports.jpg",
			"/Amenities/sports2.jpg",
			"/Amenities/sports3.jpg",
		],
		brief: "Information about sports grounds, gymnasium, and other sports facilities.",
		details:
			"Our campus offers a wide range of sports facilities including cricket and football grounds, indoor badminton courts, a modern gymnasium, and regular sports events to keep students active and healthy.",
	},
	{
		name: "Library",
		image: "/Amenities/library.jpg",
		photos: [
			"/Amenities/library.jpg",
			"/Amenities/library2.jpg",
			"/Amenities/library3.jpg",
		],
		brief: "Details about the central library, digital resources, and study spaces.",
		details:
			"The central library houses thousands of books, journals, and digital resources. Quiet study areas and group discussion rooms are available for all students.",
	},
	{
		name: "Medical Facilities",
		image: "/Amenities/medical.jpg",
		photos: [
			"/Amenities/medical.jpg",
			"/Amenities/medical2.jpg",
			"/Amenities/medical3.jpg",
		],
		brief: "Information about the health center and medical services available on campus.",
		details:
			"A fully equipped health center with qualified doctors and nurses is available 24/7. Emergency services and regular health checkups are provided.",
	},
	{
		name: "Cafeteria",
		image: "/Amenities/cafeteria.jpg",
		photos: [
			"/Amenities/cafeteria.jpg",
			"/Amenities/cafeteria2.jpg",
			"/Amenities/cafeteria3.jpg",
		],
		brief: "Details about food courts, canteens, and dining facilities.",
		details:
			"Multiple cafeterias and food courts serve a variety of cuisines at affordable prices. Hygienic and comfortable dining spaces are available for all.",
	},
	{
		name: "WiFi & IT",
		image: "/Amenities/wifi&it.jpg",
		photos: [
			"/Amenities/wifi&it.jpg",
			"/Amenities/wifi&it2.jpg",
			"/Amenities/wifi&it3.jpg",
		],
		brief: "Information about campus-wide WiFi, computer labs, and IT infrastructure.",
		details:
			"High-speed WiFi covers the entire campus. State-of-the-art computer labs and IT support are accessible to all students and staff.",
	},
	{
		name: "Transportation",
		image: "/Amenities/transportation.jpg",
		photos: [
			"/Amenities/transportation.jpg",
			"/Amenities/transportation2.jpg",
			"/Amenities/transportation3.jpg",
		],
		brief: "Details about campus transportation and connectivity.",
		details:
			"Campus buses and shuttles connect all major locations. Easy access to public transport ensures smooth connectivity to the city.",
	},
	{
		name: "Counselling Cell",
		image: "/Amenities/counselling.jpg",
		photos: [
			"/Amenities/counselling.jpg",
			"/Amenities/counselling2.jpg",
			"/Amenities/counselling3.jpg",
		],
		brief: "Support for mental health, stress, and personal counseling.",
		details:
			"The Counselling Cell offers confidential support for students facing stress, anxiety, homesickness, or any personal issues. Professional counselors are available for one-on-one sessions, workshops, and group discussions to promote mental well-being.",
	},
	{
		name: "Banking",
		image: "/Amenities/banking.jpg",
		photos: [
			"/Amenities/banking.jpg",
			"/Amenities/banking2.jpg",
			"/Amenities/banking3.jpg",
		],
		brief: "Information about banking facilities and ATMs on campus.",
		details:
			"A branch of a nationalized bank and multiple ATMs are available on campus for students' convenience. Banking services include account opening, deposits, withdrawals, and other financial services.",
	},
];

const Amenities = () => {
	const [expanded, setExpanded] = useState(null);
	const [carouselIdx, setCarouselIdx] = useState(0);
	const cardRefs = useRef([]);
	// const autoScrollRef = useRef();

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
	// useEffect(() => {
	// 	if (expanded !== null) {
	// 		const photos = amenitiesData[expanded].photos;
	// 		autoScrollRef.current = setInterval(() => {
	// 			setCarouselIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
	// 		}, 3000); // 3 seconds
	// 	}
	// 	return () => clearInterval(autoScrollRef.current);
	// }, [expanded]);

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
									? "col-span-1 sm:col-span-2 lg:col-span-3 z-20 scale-105 ring-4 ring-lightblue"
									: "")
							}
							style={{
								minHeight: expanded === idx ? 400 : 220,
								boxShadow:
									expanded === idx
										? "0 10px 40px 0 rgba(13, 148, 136, 0.15)"
										: "0 4px 20px 0 rgba(13, 148, 136, 0.08)",
								perspective: "800px",
							}}
						>
							{/* Expanded: Carousel left, details right */}
							{expanded === idx ? (
								<div
									className="flex flex-col md:flex-row w-full h-auto md:h-80 transition-all duration-500"
									style={{
										perspective: "1200px",
									}}
								>
									{/* Carousel */}
									<div
										className="flex items-center justify-center relative bg-gradient-to-br from-lightblue/30 to-snow/80 rounded-3xl overflow-hidden p-2 xs:p-4 shadow-2xl"
										style={{
											width: "100%",
											maxWidth: "350px", // fixed max width for mobile
											minWidth: "220px",
											height: "220px",    // fixed height for mobile
											minHeight: "220px",
											maxHeight: "320px",
											margin: "0 auto",
											transform: "rotateY(-10deg) scale(1.04)",
											boxShadow: "0 16px 48px 0 rgba(13, 148, 136, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
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
											<span className="text-xl xs:text-2xl text-dark">&#8592;</span>
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
											<span className="text-xl xs:text-2xl text-dark">&#8594;</span>
										</button>
										{/* Dots */}
										<div className="absolute bottom-2 xs:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 xs:gap-2">
											{amenity.photos.map((_, i) => (
												<span
													key={i}
													className={`w-2 h-2 rounded-full ${i === carouselIdx ? "bg-teal" : "bg-dark/30"}`}
												/>
											))}
										</div>
									</div>
									{/* Right: Details with 3D pop, no border */}
									<div
										className="flex-1 p-3 xs:p-6 md:p-8 flex flex-col justify-center bg-snow/90 rounded-2xl shadow-xl ml-0 md:ml-8 mt-4 md:mt-0 transition-all duration-500"
										style={{
											transform: "rotateY(6deg) scale(1.01)",
											boxShadow: "0 8px 32px 0 rgba(13, 148, 136, 0.13)",
										}}
									>
										<h2 className="text-xl xs:text-2xl md:text-3xl font-bold text-dark mb-2">{amenity.name}</h2>
										<p className="text-dark/70 text-sm xs:text-base mb-2 xs:mb-4">{amenity.brief}</p>
										<p className="text-dark/80 text-sm xs:text-base">{amenity.details}</p>
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
									<div className="p-6">
										<h2 className="text-2xl font-bold text-yellow mb-2 drop-shadow flex items-center gap-2">
											{amenity.name}
											<span
												className={`ml-auto transition-transform duration-300 text-teal ${
													expanded === idx ? "rotate-180" : ""
												}`}
											>
												▼
											</span>
										</h2>
										<p className="text-dark/80 text-base">
											{amenity.brief}
										</p>
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