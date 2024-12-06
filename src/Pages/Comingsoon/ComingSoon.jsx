import React from "react";

const ComingSoon = () => {
  return (
    <section className="coming-soon-section py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6">Coming Soon</h1>
        <p className="text-lg text-gray-300 mb-12">
          We're working on something exciting! Stay tuned for the launch of our
          new feature.
        </p>

        {/* Countdown Timer */}
        <div className="countdown-timer flex justify-center gap-8 text-4xl font-bold mb-12">
          <div className="countdown-item">
            <div className="time bg-gray-700 rounded-lg px-3 md:px-6 py-4">
              12
            </div>
            <span className="text-sm text-gray-400">Days</span>
          </div>
          <div className="countdown-item">
            <div className="time bg-gray-700 rounded-lg px-3 md:px-6 py-4">
              08
            </div>
            <span className="text-sm text-gray-400">Hours</span>
          </div>
          <div className="countdown-item">
            <div className="time bg-gray-700 rounded-lg px-3 md:px-6 py-4">
              45
            </div>
            <span className="text-sm text-gray-400">Minutes</span>
          </div>
          <div className="countdown-item">
            <div className="time bg-gray-700 rounded-lg px-3 md:px-6 py-4">
              20
            </div>
            <span className="text-sm text-gray-400">Seconds</span>
          </div>
        </div>

        {/* Email Subscription Form */}
        <div className="subscription-form max-w-md mx-auto">
          <p className="text-lg mb-4">
            Be the first to know! Subscribe to updates:
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-gray-800 bg-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="transition rounded-lg px-4 py-2   bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white  text-center font-extrabold whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Placeholder Image or Illustration */}
        <div className="mt-12">
          <img
            src="/assets/otherImage/comingSoon.jpg"
            alt="Coming Soon Illustration"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
