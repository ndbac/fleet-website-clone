import React from "react";
import Slider from "react-slick";

import Author from "./Author";

import host1 from "../../assets/Rank/host-avatar-1.jpg";
import pic1 from "../../assets/Rank/host-pic-1@2x.jpg";
import host2 from "../../assets/Rank/host-avatar-2.jpg";
import pic2 from "../../assets/Rank/host-pic-2@2x.jpg";
import host3 from "../../assets/Rank/host-avatar-3.jpg";
import pic3 from "../../assets/Rank/host-pic-3@2x.jpg";
import host4 from "../../assets/Rank/host-avatar-4.jpg";
import pic4 from "../../assets/Rank/host-pic-4@2x.jpg";

const data = [
  {
    name: "Antone Heller",
    company: "Gaylordside",
    star: "4.9",
    host: host1,
    pic: pic1,
  },
  {
    name: "Antone Heller",
    company: "Gaylordside",
    star: "4.9",
    host: host2,
    pic: pic2,
  },
  {
    name: "Antone Heller",
    company: "Gaylordside",
    star: "4.9",
    host: host3,
    pic: pic3,
  },
  {
    name: "Antone Heller",
    company: "Gaylordside",
    star: "4.9",
    host: host4,
    pic: pic4,
  },
  {
    name: "Antone Heller",
    company: "Gaylordside",
    star: "4.9",
    host: host2,
    pic: pic2,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
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

function Rank() {
  return (
    <div className="wow fadeInUp max-w-screen-xl mx-auto mb-32 pt-16">
      <div className="flex mb-10 mx-10">
        <h1 className="font-bold text-5xl">
          Best hosts of the
          <p className="font-bold text-blue-500 text-5xl">Month</p>
        </h1>
      </div>
      <div className="mx-10">
        <Slider {...settings}>
          {data.map((data, index) => (
            <Author key={index} data={data} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Rank;
