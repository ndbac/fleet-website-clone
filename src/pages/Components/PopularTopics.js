import React from "react";
import Slider from "react-slick";

import PopularCard from "./PopularCard";

const data = [
  {
    name: "Refund timelines",
    description:
      "We realize ideas from simple to complex everything becomes easy to use and reach the most potential customers.",
  },
  {
    name: "Coronavirus disease",
    description:
      "We realize ideas from simple to complex everything becomes easy to use and reach the most potential customers.",
  },
  {
    name: "Use a Fleet coupon",
    description:
      "We realize ideas from simple to complex everything becomes easy to use and reach the most potential customers.",
  },
  {
    name: "Refund timelines",
    description:
      "We realize ideas from simple to complex everything becomes easy to use and reach the most potential customers.",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function PopularTopics() {
  return (
    <div className="wow fadeInUp pt-20">
      <div className="bg-slate-100">
        <div className="max-w-screen-xl mx-auto py-20">
          <div className="text-center max-w-screen-md mx-auto">
            <h1 className="uppercase font-bold">
              A creative agency that lead and inspire
            </h1>
            <h1 className="mt-2 font-bold text-5xl">Popular topics</h1>
            <button className="mt-5 px-5 py-3 font-bold rounded-full bg-blue-500 hover:bg-blue-700 transition duration-500 text-white">
              Send message
            </button>
          </div>

          <div className="mt-20">
            <Slider {...settings}>
              {data.map((e) => (
                <PopularCard data={e} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularTopics;
