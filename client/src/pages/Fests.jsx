import { useState } from "react";

const events = [
  {
    title: "Techvaganza",
    desc: "The Technology Club serves as a hub for innovation and technological exploration...",
    images: ["/fest1.webp", "/club2.jpeg", "/club5.avif"],
  },
  {
    title: "TedX",
    desc: "This club celebrates the rich cultural diversity of NIT Srinagar...",
    images: ["/club5.avif", "/club2.jpeg", "/fest1.webp"],
  },
  {
    title: "Rang-e-chinar",
    desc: "The Movie Club offers a space for cinema enthusiasts to come together...",
    images: ["/club5.avif", "/fest1.webp", "/club2.jpeg"],
  },
  {
    title: "Extravaganza",
    desc: "Promoting physical well-being and team spirit, the Sports Club organizes...",
    images: ["/club5.avif", "/club2.jpeg", "/fest1.webp"],
  },
  {
    title: "Techfusion",
    desc: "The Photography Club nurtures the artistic talents of students...",
    images: ["/fest1.webp", "/club5.avif", "/club2.jpeg"],
  },
];

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
      {/* ✅ Image */}
      <img
        src={images[index]}
        alt="event"
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* ✅ Controls */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-gray-300 hover:text-white w-10 h-16 rounded-md flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
      >
         &#10094;
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-gray-300 hover:text-white w-10 h-16 rounded-md flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
      >
         &#10095;
      </button>
    </div>
  );
};

const Fests = () => {
  return (
    <div className="bg-[#FFFBFC] min-h-screen">
      {/* ✅ Hero Section */}
      <div className="relative aspect-[16/4.5] w-full shadow-2xl mb-20 overflow-hidden">
        <img
          src="/fest1.webp"
          alt="Student Clubs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <div className="py-6 px-4 w-full overflow-hidden bg-[#1F2647]/60 text-center">
            <h1 className="text-6xl font-bold text-[#FFFBFC] ">Fests</h1>
          </div>
        </div>
      </div>

      {/* ✅ Main Section */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {events.map((event, i) => {
  const isEven = i % 2 === 0;
  return (
    <div
      key={i}
      className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl space-y-6 md:space-y-0"
    >
      {isEven ? (
        <>
          {/* 🧠 Text First if odd */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="font-bold font-serif text-3xl text-[#1F2647]">
              {event.title}
            </div>
            <p className="text-[#1F2647] leading-relaxed">{event.desc}</p>
          </div>
          <div className="w-full md:w-1/2">
            <Carousel images={event.images} />
          </div>
        </>
      ) : (
        <>
        {/* 🧠 Carousel First if even */}
        <div className="w-full md:w-1/2 ">
            <Carousel images={event.images} />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="font-bold font-serif text-3xl text-[#1F2647] pl-8">
              {event.title}
            </div>
            <p className="text-[#1F2647] leading-relaxed pl-8">{event.desc}</p>
          </div>
          
        </>
      )}
    </div>
  );
})}

        </div>
      </div>
    </div>
  );
};

export default Fests;
