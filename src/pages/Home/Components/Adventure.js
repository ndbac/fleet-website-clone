import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";

import Slider from "./Slider";

SwiperCore.use([Pagination, Navigation]);

function Adventure() {
  return (
    <div className="wow fadeInUp container max-w-screen-xl mx-auto">
      <div className="md:mt-48 mt-16">
        <h1 className="font-bold text-5xl text-center text-slate-900">
          Let's go on an adventure
        </h1>
        <h2 className="text-xl pt-3 text-center text-slate-400">
          Find and book a great experience.
        </h2>
      </div>

      <Slider />
    </div>
  );
}

export default Adventure;
