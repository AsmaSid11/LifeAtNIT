import React, { useEffect } from "react";

const features = [
  {
    title: "Vibrant Student Life",
    desc: "Join a diverse range of clubs, fests, and activities that make every day exciting.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "World-Class Amenities",
    desc: "Enjoy modern hostels, sports complexes, libraries, and more for a holistic experience.",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Unforgettable Fests",
    desc: "Experience the thrill of our cultural and technical fests, where talent meets celebration.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
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
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="bg-snow min-h-screen">
      {/* Parallax Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-teal/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-snow drop-shadow-lg tracking-tight animate-fade-in">
            Life at <span className="text-yellow">NIT</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-lightblue font-medium animate-fade-in-up">
            Discover, Connect, Celebrate.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center animate-fade-in">
          Why You'll Love It Here
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal opacity-0 transform transition duration-700"
              style={{ transitionDelay: `${i * 0.15 + 0.2}s` }}
            >
              <div className="bg-white rounded-3xl shadow-2xl hover:shadow-yellow/60 hover:scale-105 transition-all duration-500 cursor-pointer group perspective-800">
                <div className="relative overflow-hidden rounded-2xl group-hover:rotate-[-3deg] group-hover:scale-110 transition-all duration-500">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow mb-2 drop-shadow">{f.title}</h3>
                  <p className="text-dark/80">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto my-20 text-center reveal opacity-0 animate-delay-700">
        <h2 className="text-4xl font-extrabold text-dark mb-4 animate-fade-in-up">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-dark/70 mb-8 animate-fade-in-up">
          Explore our clubs, amenities, and fests to make the most of your NIT experience!
        </p>
        <a
          href="/clubs"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-tr from-yellow to-teal text-snow text-xl font-bold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-fade-in"
        >
          Explore Clubs
        </a>
      </div>
    </div>
  );
}