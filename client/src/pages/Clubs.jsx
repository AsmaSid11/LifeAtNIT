import heroWave from "../assets/hero-wave.svg"; // Make sure this SVG exists
const Clubs = () => {
  return (
    <div className="bg-[#88DADA]/20 min-h-screen">

      {/* ✅ Hero Section */}
      <div className="relative aspect-[16/4.5] w-full shadow-2xl mb-20 overflow-hidden">
        <img
          src="/club5.avif"
          alt="Student Clubs"
          className="w-full h-full object-cover"

        />
        
         
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="py-6 px-4 w-full overflow-hidden bg-[#1F2647]/50 text-center mb-[7rem]">
          <style>
        {`
        @keyframes slideInUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.7s ease-out forwards;
        }
      `}
      </style>
          <h1 className="text-6xl font-bold text-[#FFFBFC] animate-fade-in-up">Student <span className="text-[#0D9488]">Clubs</span></h1>

          <p className="mt-2 text-lg font-medium text-[#FFFBFC] tracking-wide animate-slide-in-up ">
            Connect. Collaborate. Create.
          </p>
          
        </div>
        <img
      src={heroWave} // make sure this path is correct
      alt="wave"
      className="absolute bottom-0 left-0 w-full h-16 md:h-20 object-cover z-10"
    />
          
        </div>


       
      </div>
      <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* ✅ CLUB 1: Technology Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5">
      <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Technology Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">The Technology Club serves as a hub for innovation and technological exploration. It encompasses subdivisions like Robotics, Google Developer Student Clubs (GDSC), E-Vision, and Semicolon—the official coding club. The club organizes workshops, hackathons,encouraging students to engage in hands-on projects and collaborative learning.</p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        
      </div>

      {/* ✅ CLUB 2: Cultural Club and Soap Box */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Cultural Club and Soap Box
          </div>
          <p className="text-[#1F2647] leading-relaxed">This club celebrates the rich cultural diversity of NIT Srinagar, providing a platform for students to express themselves through various art forms. It organizes events, debates, and discussions, fostering an environment of creativity and cultural exchange. </p>
        </div>
      </div>

      {/* ✅ CLUB 3: Movie Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5">
      <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Movie Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">The Movie Club offers a space for cinema enthusiasts to come together, watch, and discuss films. It serves as a medium for relaxation and cultural appreciation, often hosting screenings and discussions that delve into cinematic techniques and storytelling. </p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
       
      </div>

      {/* ✅ CLUB 4: Sports Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Sports Club 
          </div>
          <p className="text-[#1F2647] leading-relaxed">Promoting physical well-being and team spirit, the Sports Club organizes various athletic events and tournaments. It encourages students to participate in sports like basketball, football, and athletics, contributing to a balanced campus life.</p>
        </div>
      </div>

      {/* ✅ CLUB 5: Photography Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5">
      <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Photography Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">The Photography Club nurtures the artistic talents of students interested in capturing moments through the lens. It conducts workshops, photo walks, and exhibitions, allowing members to develop their skills and showcase their work.</p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        
      </div>

      {/* ✅ CLUB 6: Rhetorica and Ecocult Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Rhetorica and Ecocult Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">This club combines the art of rhetoric with environmental consciousness. It organizes debates, public speaking events, and eco-friendly initiatives, aiming to develop communication skills while promoting sustainability.</p>
        </div>
      </div>

      {/* ✅ CLUB 7: Stargazing Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5">
      <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Stargazing Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">For astronomy enthusiasts, the Stargazing Club offers opportunities to explore the night sky. It arranges observation sessions, lectures, and discussions, fostering a community interested in celestial phenomena and space science.</p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        
      </div>

      {/* ✅ CLUB 8: Sargam Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-5">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Sargam Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">Sargam Club is dedicated to music lovers, providing a platform for vocalists and instrumentalists to perform and collaborate. It organizes musical events, jam sessions, and competitions, enriching the campus's cultural tapestry.</p>
        </div>
      </div>
</div>
</div>
    </div>
  );
};

export default Clubs; 