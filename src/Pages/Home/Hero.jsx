import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide className="flex justify-center items-center bg-[url('/assets/bannerImage/winter-1.jpg')] bg-cover bg-center ">
          <div className="text-white font-montserrat text-center h-full p-5 bg-black/60 rounded-lg">
            <div className="flex justify-center items-center pt-4 md:pt-24">
              <div>
                <h2 className="font-bold mb-5 text-3xl">
                  Winter Clothing Drive
                </h2>
                <p className="mb-5 text-lg">
                  Help us provide warmth to the underprivileged during this
                  winter season.
                </p>
                <button className="btn btn-wide py-3 px-14 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded-3xl font-extrabold">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="flex justify-center items-center bg-[url('/assets/bannerImage/winter-2.jpg')] bg-cover bg-center">
          <div className="text-white font-montserrat  h-full text-center p-5 bg-black/60 rounded-lg">
            <div className="flex justify-center items-center pt-4 md:pt-24">
              <div>
                <h2 className="font-bold mb-5 text-3xl">
                  Support Local Communities
                </h2>
                <p className="mb-5 text-lg">
                  Your contributions can make a difference in the lives of many
                  this winter.
                </p>
                <button className="btn btn-wide py-3 px-14 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded-3xl font-extrabold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="flex justify-center items-center bg-[url('/assets/bannerImage/winter-3.jpg')] bg-cover bg-center">
          <div className="text-white font-montserrat  h-full text-center p-5 bg-black/60 rounded-lg">
            <div className="flex justify-center items-center pt-4 md:pt-24">
              <div>
                <h2 className="font-bold mb-5 text-3xl">Donate Warm Clothes</h2>
                <p className="mb-5 text-lg">
                  Let’s spread warmth and kindness to those in need this winter.
                </p>
                <button className="btn btn-wide py-3 px-14 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded-3xl font-extrabold">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
