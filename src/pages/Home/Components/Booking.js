import React from "react";
import GLightbox from "glightbox";

import { GoPlay } from "react-icons/go";

import thumb from "../../../assets/Video/video-bg.jpg";

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
});

const introduction = GLightbox({
  elements: [
    {
      href: "https://www.youtube.com/watch?v=CDncVjJPnVc",
      type: "video",
      source: "youtube",
      width: 900,
    },
  ],
  autoplayVideos: true,
});

function Booking() {
  const handleClick = () => {
    introduction.open();
  };

  return (
    <div className="wow fadeInUp max-w-screen-xl mx-auto mb-28">
      <div className="grid grid-cols-3 mx-14 pt-8 mb-16">
        <div className="col-span-2 md:col-span-1">
          <h1 className="lowercase md:text-2xl text-slate-900">Feel travel ui kit</h1>
          <h1 className="text-2xl md:text-5xl font-bold text-slate-900">
            Book a ticket and just leave
          </h1>
        </div>
        <div className="col-span-2 md:col-span-1 md:col-start-3 mt-5 md:ml-20 lg:ml-40 xl:ml-64">
          <button className="px-4 py-2 rounded-full font-bold text-xl text-white bg-blue-500 hover:bg-blue-700 transition duration:500">
            Book now
          </button>
        </div>
      </div>
      <div className="group rounded md:rounded-3xl overflow-hidden bg-black">
        <a onClick={handleClick}>
          <GoPlay className="hidden xl:block text-white text-7xl absolute group-hover:scale-150 mt-80 ml-pic cursor-pointer"/>
          <img src={thumb} className="cursor-pointer hover:opacity-80" />
        </a>
      </div>
    </div>
  );
}

export default Booking;
