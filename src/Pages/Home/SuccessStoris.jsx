import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SuccessStoris = () => {
  return (
    <>
      <section className="success-stories py-16 bg-blue-50  dark:bg-gray-900 dark:text-white ">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Story number 01 */}
          <Fade direction="up" delay={1 * 200}>
            <div className="story-card bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/assets/storis/storis01.jpg"
                alt="Story 1"
                className="w-full h-56 object-fill"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Eco-Friendly Expansion Startup
                </h3>
                <p className="text-gray-700  dark:text-white text-sm line-clamp-2 mb-3">
                  Raised $1M to expand their eco-friendly product line.
                </p>
                <Link
                  to="/comingsoon"
                  className="block transition rounded-lg px-4 py-2   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </Fade>
          {/* Story 02 */}
          <Fade direction="up" delay={2 * 200}>
            <div className="story-card bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/assets/storis/storis02.jpg"
                alt="Story 2"
                className="w-full h-56 object-fill"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Tech Innovation Funded Project
                </h3>
                <p className="text-gray-700  dark:text-white text-sm line-clamp-2 mb-3">
                  Successfully launched a tech innovation with $500K funding.
                </p>
                <Link
                  to="/comingsoon"
                  className="block transition rounded-lg px-4 py-2   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </Fade>
          {/* Story 03 */}
          <Fade direction="up" delay={3 * 200}>
            <div className="story-card bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/assets/storis/storis03.jpg"
                alt="Story 3"
                className="w-full h-56 object-fill"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Education Goal Achieved Campaign
                </h3>
                <p className="text-gray-700  dark:text-white text-sm line-clamp-2 mb-3">
                  Reached their $750K goal to support community education.
                </p>
                <Link
                  to="/comingsoon"
                  className="block transition rounded-lg px-4 py-2   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default SuccessStoris;
