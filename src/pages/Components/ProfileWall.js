import React from "react";
import Slider from "react-slick";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDirectionsWalk, MdOutlineSpeakerNotes } from "react-icons/md";

import ProfileCard from "./ProfileCard";
import Comments from "./Comments";

import photo1 from "../../assets/ProfileCard/card-pic-1.jpg";
import photo2 from "../../assets/ProfileCard/card-pic-2.jpg";
import photo3 from "../../assets/ProfileCard/card-pic-3.jpg";
import photo4 from "../../assets/ProfileCard/card-pic-4.jpg";

const data = [
  {
    name: "Entire serviced classy moutain house",
    service: "Free wifi, breakfast included",
    prvPrice: "$567",
    price: "$234",
    total: "$256 total",
    rate: "4.8 (12 reviews)",
    pic: photo1,
  },
  {
    name: "Entire serviced classy moutain house",
    service: "Free wifi, breakfast included",
    prvPrice: "$567",
    price: "$234",
    total: "$256 total",
    rate: "4.8 (12 reviews)",
    pic: photo2,
  },
  {
    name: "Entire serviced classy moutain house",
    service: "Free wifi, breakfast included",
    prvPrice: "$567",
    price: "$234",
    total: "$256 total",
    rate: "4.8 (12 reviews)",
    pic: photo3,
  },
  {
    name: "Entire serviced classy moutain house",
    service: "Free wifi, breakfast included",
    prvPrice: "$567",
    price: "$234",
    total: "$256 total",
    rate: "4.8 (12 reviews)",
    pic: photo4,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function ProfileWall() {
    
  return (
    <div className="col-span-2 lg:mt-96 lg:mr-14">
      <div className="mt-16 mx-4 lg:ml-5">
        <h1 className="font-bold text-3xl text-slate-900">About Zoe Towne</h1>
        <p className="text-slate-500 mt-8">
          Described by Queenstown House & Garden magazine as having 'one of the
          best views we've ever seen' you will love relaxing in this newly built
        </p>
      </div>

      <div>
        <div className="grid grid-cols-4 ml-5 mt-10">
          <div className="flex items-center">
            <AiOutlineHome className="text-slate-500 mr-2 text-2xl" />
            <h1 className="text-slate-500">Lives in</h1>
          </div>
          <h1 className="col-span-3 ml-4 font-bold text-gray-700">Auckland, New Zealand</h1>
        </div>

        <div className="grid grid-cols-4 ml-5 mt-5">
          <div className="flex items-center">
            <MdOutlineDirectionsWalk className="text-slate-500 mr-2 text-2xl" />
            <h1 className="text-slate-500">Date:</h1>
          </div>
          <h1 className="col-span-3 ml-4 font-bold text-blue-600 cursor-pointer">
            Get direction
          </h1>
        </div>

        <div className="grid grid-cols-4 ml-5 mt-5">
          <div className="flex items-center">
            <MdOutlineSpeakerNotes className="text-slate-500 mr-2 text-2xl" />
            <h1 className="text-slate-500">Speak:</h1>
          </div>
          <h1 className="col-span-3 ml-4 font-bold text-gray-700">English, Vietnamese</h1>
        </div>
      </div>

      <div className="mt-16 ml-5">
        <h1 className="mb-6 font-bold text-3xl text-slate-900">
          Zoe Towne's listing
        </h1>

        <div>
          <button className="bg-slate-700 text-white font-bold rounded-full px-4 py-1">
            Stays
          </button>
          <button className="ml-5 border rounded-full font-bold px-4 py-1">
            Experiences
          </button>
        </div>

        <div className="mt-10 mb-5">
          <Slider {...settings}>
            {data.map((e) => (
              <ProfileCard data={e} />
            ))}
          </Slider>
        </div>

        <div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default ProfileWall;
