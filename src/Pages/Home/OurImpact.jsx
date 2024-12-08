import React from "react";

const OurImpact = () => {
  return (
    <>
      {" "}
      <section className="our-impact py-16 bg-slate-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Impact Card 1 */}
            <div className="impact-card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <div className="icon mb-4 text-blue-600 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v8m0 0v-8m0 0l3 3m-3-3l-3 3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                1000+ Lives Impacted
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We have successfully funded projects that made a significant
                impact on communities across the country.
              </p>
            </div>
            {/* Impact Card 2 */}
            <div className="impact-card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <div className="icon mb-4 text-green-600 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v8m0 0l3-3m-3 3l-3-3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                500+ Volunteers
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our dedicated volunteers work tirelessly to ensure each campaign
                meets its goals.
              </p>
            </div>
            {/* Impact Card 3 */}
            <div className="impact-card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <div className="icon mb-4 text-yellow-600 dark:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v8m0 0l3-3m-3 3l-3-3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                $2M+ Funds Raised
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Together, we’ve raised significant funding to support impactful
                projects, empowering communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurImpact;
