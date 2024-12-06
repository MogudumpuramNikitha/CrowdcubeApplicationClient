import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const RightPlace = () => {
  const videoRef = useRef(null); // Reference to the video element

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
    }
  };

  return (
    <>
      <section className="right-place-section py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto px-4 text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
            You’re in the Right Place
          </h2>

          {/* Video Placeholder */}
          <div className="video-wrapper mb-12">
            <div className="relative w-full max-w-4xl mx-auto aspect-w-16 aspect-h-9">
              <video
                ref={videoRef}
                className="w-full h-full rounded-lg shadow-lg"
                poster="https://images.pexels.com/photos/6994806/pexels-photo-6994806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <source
                  src="https://videos.pexels.com/video-files/6894109/6894109-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="bg-white rounded-full p-4 shadow-md hover:shadow-lg transition"
                  aria-label="Play Video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 text-gray-600"
                  >
                    <path d="M10 8.64l6.56 3.36L10 15.36V8.64zm12-8.64v24H0V0h24zm-1 1H1v22h22V1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Steps Flow */}
          <div className="steps-flow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 01 */}
            <Fade direction="down" delay={1 * 200}>
              <div className="step-card text-center bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-lg p-6">
                <div className="step-number text-2xl font-bold text-white-600mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Create Your Project
                </h3>
                <p className="text-gray-600 dark:text-white">
                  Set up your project, tell your story, and set your target.
                </p>
              </div>
            </Fade>
            {/* Step 02 */}
            <Fade direction="up" delay={2 * 200}>
              <div className="step-card text-center bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-lg p-6">
                <div className="step-number text-2xl font-bold text-white-600 mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Collect Donations
                </h3>
                <p className="text-gray-600 dark:text-white">
                  Receive donations or offer rewards for crowdfunding support.
                </p>
              </div>
            </Fade>
            {/* Step 03 */}
            <Fade direction="down" delay={3 * 200}>
              <div className="step-card text-center bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-lg p-6">
                <div className="step-number text-2xl font-bold text-white-600mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
                <p className="text-gray-600 dark:text-white">
                  Share your project to reach potential backers and supporters.
                </p>
              </div>
            </Fade>
            {/* Step 04 */}
            <Fade direction="up" delay={4 * 200}>
              <div className="step-card text-center bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-lg p-6">
                <div className="step-number text-2xl font-bold text-white-600mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Apply for Match Funding
                </h3>
                <p className="text-gray-600 dark:text-white">
                  Boost your total with grants and extra funding opportunities.
                </p>
              </div>
            </Fade>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Link to="/comingsoon">
              <button className="transition rounded-lg px-8 py-3   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold">
                Get Started →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightPlace;
