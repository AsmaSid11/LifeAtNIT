const Fests = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">College Fests</h1>
        <div className="space-y-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Fest</h2>
            <p className="text-gray-600 mb-4">
              Information about technical fests, competitions, and workshops will be displayed here.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cultural Fest</h2>
            <p className="text-gray-600 mb-4">
              Information about cultural fests, performances, and events will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fests; 