import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";

import Camping from "./Camping";

import Advanture1 from "../../../assets/Advantures/adventure-pic-1.svg";
import Advanture2 from "../../../assets/Advantures/adventure-pic-2.svg";
import Advanture3 from "../../../assets/Advantures/adventure-pic-3.svg";

SwiperCore.use([Pagination, Navigation]);

function Adventure() {
  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="md:mt-48 mt-16">
        <h1 className="font-bold text-5xl text-center text-slate-900">
          Let's go on an adventure
        </h1>
        <h2 className="text-xl pt-3 text-center text-slate-400">
          Find and book a great experience.
        </h2>
      </div>

      <div className="container max-w-screen-xl mt-20 mx-auto md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-80">
              <Camping
                picture={Advanture1}
                description="Luxury resort at the sea"
                places="12,326 places"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80">
              <Camping
                picture={Advanture2}
                description="Camping amidst the wild"
                places="5,326 places"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80">
              <Camping
                picture={Advanture3}
                description="Luxury resort the the forest"
                places="9,326 places"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container max-w-screen-xl mt-20 mx-auto hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-80">
              <Camping
                picture={Advanture1}
                description="Luxury resort at the sea"
                places="12,326 places"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80">
              <Camping
                picture={Advanture2}
                description="Camping amidst the wild"
                places="5,326 places"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-80">
              <Camping
                picture={Advanture3}
                description="Luxury resort the the forest"
                places="9,326 places"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Adventure;
