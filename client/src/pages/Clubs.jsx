const Clubs = () => {
  return (
    <div className="bg-[#183B4E] min-h-screen">

      {/* ✅ Hero Section */}
      <div className="relative h-[40rem] shadow-2xl overflow-hidden">
        <img
          src="/club3.avif"
          alt="Student Clubs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-[#F3F3E0]">Student Clubs</h1>
          <p className="mt-2 text-lg font-medium text-[#FFF2DB] tracking-wide animate-fade-in">
            Connect. Collaborate. Create.
          </p>
        </div>
        {/* ✅ Decorative SVG Transition */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill="#183B4E"
            d="M0,0L60,10C120,20,240,40,360,45.3C480,51,600,37,720,37.3C840,37,960,51,1080,58.7C1200,67,1320,61,1380,58.7L1440,56V100H0Z"
          />
        </svg>
      </div>

      {/* ✅ CLUB 1: Technology Club */}
      <div className="flex justify-center ml-[-20rem] py-12 px-5">
        <div className="flex bg-[#27548A] rounded-xl border-4 border-[#183B4E] shadow-lg overflow-hidden max-w-5xl w-full gap-10 p-8">
          <div className="w-1/2 overflow-hidden rounded-l-xl">
            <img src="club3.avif" alt="Technology Club" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center text-[#F3F3E0]">
            <h2 className="text-3xl font-bold mb-4">Technology Club</h2>
            <p className="text-lg leading-relaxed">
              Encouraging innovation, programming, robotics, and hands-on tech experiences.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ CLUB 2: Cultural Club and Soap Box */}
      <div className="flex justify-center mr-[-18rem] py-12 px-5">
        <div className="flex bg-[#27548A] rounded-xl border-4 border-[#183B4E] shadow-lg overflow-hidden max-w-5xl w-full gap-10 p-8">
          <div className="w-1/2 overflow-hidden rounded-l-xl">
            <img src="club3.avif" alt="Cultural Club and Soap Box" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center text-[#F3F3E0]">
            <h2 className="text-3xl font-bold mb-4">Cultural Club and Soap Box</h2>
            <p className="text-lg leading-relaxed">
              Platform for artistic expression, debates, poetry slams, and cultural showcases.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ CLUB 3: Movie Club */}
      <div className="flex justify-center ml-[-20rem] py-12 px-5">
        <div className="flex bg-[#27548A] rounded-xl border-4 border-[#183B4E] shadow-lg overflow-hidden max-w-5xl w-full gap-10 p-8">
          <div className="w-1/2 overflow-hidden rounded-l-xl">
            <img src="club3.avif" alt="Movie Club" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center text-[#F3F3E0]">
            <h2 className="text-3xl font-bold mb-4">Movie Club</h2>
            <p className="text-lg leading-relaxed">
              Screening iconic films and discussing cinema’s impact on society and art.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ CLUB 4: Sports Club */}
      <div className="flex justify-center mr-[-18rem] py-12 px-5">
        <div className="flex bg-[#27548A] rounded-xl border-4 border-[#183B4E] shadow-lg overflow-hidden max-w-5xl w-full gap-10 p-8">
          <div className="w-1/2 overflow-hidden rounded-l-xl">
            <img src="club3.avif" alt="Sports Club" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center text-[#F3F3E0]">
            <h2 className="text-3xl font-bold mb-4">Sports Club</h2>
            <p className="text-lg leading-relaxed">
              Promoting physical fitness through tournaments, events, and inter-college games.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ CLUB 5: Science Club */}
      <div className="flex justify-center ml-[-20rem] py-12 px-5">
        <div className="flex bg-[#27548A] rounded-xl border-4 border-[#183B4E] shadow-lg overflow-hidden max-w-5xl w-full gap-10 p-8">
          <div className="w-1/2 overflow-hidden rounded-l-xl">
            <img src="club3.avif" alt="Science Club" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center text-[#F3F3E0]">
            <h2 className="text-3xl font-bold mb-4">Science Club</h2>
            <p className="text-lg leading-relaxed">
              Exploring science through experiments, quizzes, and hands-on activities.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ CLUB 6: Literary Club */}
      <div className="flex justify-center mr-[-18rem] py-12 px-5">
        <div className="flex bg-[#27548A] rounded-xl border-4 border-[#183B4E] shadow-lg overflow-hidden max-w-5xl w-full gap-10 p-8">
          <div className="w-1/2 overflow-hidden rounded-l-xl">
            <img src="club3.avif" alt="Literary Club" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center text-[#F3F3E0]">
            <h2 className="text-3xl font-bold mb-4">Literary Club</h2>
            <p className="text-lg leading-relaxed">
              Celebrating literature through book readings, writing contests, and storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ CLUB 7: Entrepreneurship Club */}
      <div className="flex justify-center ml-[-20rem] py-12 px-5">
        <div className="flex bg-[#27548A] rounded-xl border-4 border-[#183B4E] shadow-lg overflow-hidden max-w-5xl w-full gap-10 p-8">
          <div className="w-1/2 overflow-hidden rounded-l-xl">
            <img src="club3.avif" alt="Entrepreneurship Club" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center text-[#F3F3E0]">
            <h2 className="text-3xl font-bold mb-4">Entrepreneurship Club</h2>
            <p className="text-lg leading-relaxed">
              Inspiring young entrepreneurs through startup talks, pitch sessions, and workshops.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ CLUB 8: Photography Club */}
      <div className="flex justify-center mr-[-18rem] py-12 px-5">
        <div className="flex bg-[#27548A] rounded-xl border-4 border-[#183B4E] shadow-lg overflow-hidden max-w-5xl w-full gap-10 p-8">
          <div className="w-1/2 overflow-hidden rounded-l-xl">
            <img src="club3.avif" alt="Photography Club" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col justify-center text-[#F3F3E0]">
            <h2 className="text-3xl font-bold mb-4">Photography Club</h2>
            <p className="text-lg leading-relaxed">
              Capturing campus life and telling stories through lenses and light.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Clubs; 