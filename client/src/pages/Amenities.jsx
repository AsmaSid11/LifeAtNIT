const Amenities = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Campus Amenities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Sports Facilities</h2>
            <p className="text-gray-600">
              Information about sports grounds, gymnasium, and other sports facilities.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Library</h2>
            <p className="text-gray-600">
              Details about the central library, digital resources, and study spaces.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Medical Facilities</h2>
            <p className="text-gray-600">
              Information about the health center and medical services available on campus.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Cafeteria</h2>
            <p className="text-gray-600">
              Details about food courts, canteens, and dining facilities.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">WiFi & IT</h2>
            <p className="text-gray-600">
              Information about campus-wide WiFi, computer labs, and IT infrastructure.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Transportation</h2>
            <p className="text-gray-600">
              Details about campus transportation and connectivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities; 