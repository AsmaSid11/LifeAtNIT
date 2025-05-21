import React, { useState, useRef, useEffect } from "react";

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
];

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
		if (expanded !== null) {
			const photos = amenitiesData[expanded].photos;
			autoScrollRef.current = setInterval(() => {
				setCarouselIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
			}, 3000); // 3 seconds
		}
		return () => clearInterval(autoScrollRef.current);
	}, [expanded]);

	return (
		<div className="min-h-screen bg-gradient-to-br from-lightblue/10 to-teal/10 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-extrabold text-dark mb-12 text-center tracking-tight drop-shadow-lg">
					Campus Amenities
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{amenitiesData.map((amenity, idx) => (
						<div
							key={amenity.name}
							ref={(el) => (cardRefs.current[idx] = el)}
							onClick={() => handleExpand(idx)}
							className={`relative cursor-pointer group transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl rounded-3xl overflow-hidden bg-snow shadow-lg ${
								expanded === idx
									? "col-span-1 md:col-span-2 lg:col-span-3 z-20 scale-105 ring-4 ring-lightblue"
									: ""
							}`}
							style={{
								minHeight: expanded === idx ? 400 : 280,
								boxShadow:
									expanded === idx
										? "0 10px 40px 0 rgba(13, 148, 136, 0.15)"
										: "0 4px 20px 0 rgba(13, 148, 136, 0.08)",
							}}
						>
							{/* Expanded: Carousel left, details right */}
							{expanded === idx ? (
								<div
									className="flex flex-col md:flex-row w-full h-80 transition-all duration-500"
									style={{
										perspective: "1200px",
									}}
								>
									{/* Left: Carousel with 3D effect, no border */}
									<div
										className="flex-1 flex items-center justify-center relative h-80 bg-gradient-to-br from-lightblue/30 to-snow/80 rounded-3xl overflow-hidden p-4 shadow-2xl"
										style={{
											transform: "rotateY(-10deg) scale(1.04)",
											boxShadow: "0 16px 48px 0 rgba(13, 148, 136, 0.18), 0 2px 8px 0 rgba(0,0,0,0.10)",
											perspective: "1200px",
										}}
									>
										<button
											className="absolute left-4 top-1/2 -translate-y-1/2 bg-snow/90 rounded-full p-2 shadow-lg hover:bg-lightblue transition"
											onClick={(e) => {
												e.stopPropagation();
												handlePrev(amenity.photos);
											}}
											style={{ zIndex: 2 }}
										>
											<span className="text-2xl text-dark">&#8592;</span>
										</button>
										<img
											src={amenity.photos[carouselIdx]}
											alt={amenity.name}
											className="object-cover w-full h-full rounded-3xl transition-all duration-500 shadow-xl"
											style={{
												transform: "rotateY(8deg) scale(1.01)",
											}}
										/>
										<button
											className="absolute right-4 top-1/2 -translate-y-1/2 bg-snow/90 rounded-full p-2 shadow-lg hover:bg-lightblue transition"
											onClick={(e) => {
												e.stopPropagation();
												handleNext(amenity.photos);
											}}
											style={{ zIndex: 2 }}
										>
											<span className="text-2xl text-dark">&#8594;</span>
										</button>
										{/* Dots */}
										<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
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
										className="flex-1 p-8 flex flex-col justify-center bg-snow/90 rounded-2xl shadow-xl ml-0 md:ml-8 transition-all duration-500"
										style={{
											transform: "rotateY(6deg) scale(1.01)",
											boxShadow: "0 8px 32px 0 rgba(13, 148, 136, 0.13)",
										}}
									>
										<h2 className="text-3xl font-bold text-dark mb-2">{amenity.name}</h2>
										<p className="text-dark/70 text-base mb-4">{amenity.brief}</p>
										<p className="text-dark/80 text-base">{amenity.details}</p>
									</div>
								</div>
							) : (
								// Collapsed: Single image
								<>
									<div className="w-full h-48 overflow-hidden">
										<img
											src={amenity.image}
											alt={amenity.name}
											className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
											style={{
												filter:
													expanded === idx ? "brightness(0.7)" : "brightness(0.9)",
												transform: `scale(${expanded === idx ? 1.1 : 1})`,
											}}
										/>
									</div>
									<div className="p-6">
										<h2 className="text-2xl font-bold text-dark mb-2 flex items-center gap-2">
											{amenity.name}
											<span
												className={`ml-auto transition-transform duration-300 text-teal ${
													expanded === idx ? "rotate-180" : ""
												}`}
											>
												▼
											</span>
										</h2>
										<p className="text-dark/70 text-base">
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