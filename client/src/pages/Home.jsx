const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to Life at NIT
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Discover the vibrant campus life, state-of-the-art facilities, and endless opportunities at NIT.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards will go here */}
        </div>
      </div>
    </div>
  );
};

export default Home; 