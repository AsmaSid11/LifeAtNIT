const Clubs = () => {
  return (
    <div className="bg-[#FFFBFC] min-h-screen">

      {/* ✅ Hero Section */}
      <div className="relative aspect-[16/9] w-full shadow-2xl mb-20 overflow-hidden">
        <img
          src="/club5.avif"
          alt="Student Clubs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-[#FFFBFC]">Student Clubs</h1>
          <p className="mt-2 text-lg font-medium text-[#FFFBFC] tracking-wide animate-fade-in">
            Connect. Collaborate. Create.
          </p>
        </div>
        {/* ✅ Decorative SVG Transition */}
       
      </div>
      <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* ✅ CLUB 1: Technology Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl">
      <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Technology Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos officiis doloribus cum enim, nam corrupti. Odio nam qui delectus adipisci culpa possimus sit. Quisquam maiores ex quam hic facere.</p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        
      </div>

      {/* ✅ CLUB 2: Cultural Club and Soap Box */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Cultural Club and Soap Box
          </div>
          <p className="text-[#1F2647] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos officiis doloribus cum enim, nam corrupti. Odio nam qui delectus adipisci culpa possimus sit. Quisquam maiores ex quam hic facere.</p>
        </div>
      </div>

      {/* ✅ CLUB 3: Movie Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl">
      <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Movie Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos officiis doloribus cum enim, nam corrupti. Odio nam qui delectus adipisci culpa possimus sit. Quisquam maiores ex quam hic facere.</p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
       
      </div>

      {/* ✅ CLUB 4: Sports Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Sports Club 
          </div>
          <p className="text-[#1F2647] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos officiis doloribus cum enim, nam corrupti. Odio nam qui delectus adipisci culpa possimus sit. Quisquam maiores ex quam hic facere.</p>
        </div>
      </div>

      {/* ✅ CLUB 5: Science Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl">
      <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Science Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos officiis doloribus cum enim, nam corrupti. Odio nam qui delectus adipisci culpa possimus sit. Quisquam maiores ex quam hic facere.</p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        
      </div>

      {/* ✅ CLUB 6: Literary Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Literary Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos officiis doloribus cum enim, nam corrupti. Odio nam qui delectus adipisci culpa possimus sit. Quisquam maiores ex quam hic facere.</p>
        </div>
      </div>

      {/* ✅ CLUB 7: Entrepreneurship Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl">
      <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Entrepreneurship Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos officiis doloribus cum enim, nam corrupti. Odio nam qui delectus adipisci culpa possimus sit. Quisquam maiores ex quam hic facere.</p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        
      </div>

      {/* ✅ CLUB 8: Photography Club */}
      <div className="flex flex-col md:flex-row items-center bg-snow p-8 shadow-lg rounded-xl mb-[10rem]">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img src="club2.jpeg" alt="photo" className="rounded-lg shadow-md object-cover w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="font-bold font-serif text-3xl text-[#1F2647] mb-4">
          Photography Club
          </div>
          <p className="text-[#1F2647] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eos officiis doloribus cum enim, nam corrupti. Odio nam qui delectus adipisci culpa possimus sit. Quisquam maiores ex quam hic facere.</p>
        </div>
      </div>
</div>
</div>
    </div>
  );
};

export default Clubs; 