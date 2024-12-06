import React from "react";

const SuccessStoris = () => {
  return (
    <>
      <section className="success-stories py-16 bg-blue-50  dark:bg-gray-900 dark:text-white ">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Story number 01 */}
          <div className="story-card bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/assets/storis/storis01.jpg"
              alt="Story 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Startup A</h3>
              <p className="text-gray-700  dark:text-white text-sm line-clamp-2 mb-3">
                Raised $1M to expand their eco-friendly product line.
              </p>
              <a
                href="#"
                className="block text-center text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg px-4 py-2"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Story 2 */}
          <div className="story-card bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/assets/storis/storis02.jpg"
              alt="Story 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project B</h3>
              <p className="text-gray-700  dark:text-white text-sm line-clamp-2 mb-3">
                Successfully launched a tech innovation with $500K funding.
              </p>
              <a
                href="#"
                className="block text-center text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg px-4 py-2"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Story 3 */}
          <div className="story-card bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/assets/storis/storis03.jpg"
              alt="Story 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Campaign C</h3>
              <p className="text-gray-700  dark:text-white text-sm line-clamp-2 mb-3">
                Reached their $750K goal to support community education.
              </p>
              <a
                href="#"
                className="block text-center text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg px-4 py-2"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStoris;
