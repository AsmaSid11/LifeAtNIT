const Clubs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Clubs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Club cards will be added here */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Technical Clubs</h2>
            <p className="text-gray-600">
              Information about technical clubs and their activities will be displayed here.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Cultural Clubs</h2>
            <p className="text-gray-600">
              Information about cultural clubs and their activities will be displayed here.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Sports Clubs</h2>
            <p className="text-gray-600">
              Information about sports clubs and their activities will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs; 