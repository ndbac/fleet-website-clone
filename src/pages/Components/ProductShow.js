import React from "react";
import GLightbox from "glightbox";

import { IoIosArrowForward } from "react-icons/io";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineClose,
} from "react-icons/ai";
import { FiFlag, FiUpload } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

import avatar1 from "../../assets/Product/avatar-1.jpg";
import photo1 from "../../assets/Product/photo-1.1.jpg";
import photo2 from "../../assets/Product/photo-1.2.jpg";
import photo3 from "../../assets/Product/photo-1.3.jpg";
import photo4 from "../../assets/Product/photo-1.4.jpg";

const introduction = GLightbox({
  elements: [
    {
      href: photo1,
      type: "image",
      alt: "Photo preview",
    },
    {
      href: photo2,
      type: "image",
      alt: "Photo preview",
    },
    {
      href: photo3,
      type: "image",
      alt: "Photo preview",
    },
    {
      href: photo4,
      type: "image",
      alt: "Photo preview",
    },
  ],
});

function ProductShow() {
  const handleClick = () => {
    introduction.open();
  };

  return (
    <div className="wow fadeInUp max-w-screen-xl mx-auto pb-20 mt-10 pt-10 border-t">
      <div className="grid grid-cols-3 items-center">
        <div className="ml-10 xl:ml-0 col-span-2 xl:col-span-1 group">
          <button className="border-2 rounded-full font-bold px-3 py-1 flex items-center group-hover:bg-slate-800 group-hover:text-white transition duration-300">
            <IoIosArrowForward className="rotate-180 mr-1" />
            Go home
          </button>
        </div>
        <div className="hidden xl:block col-start-3">
          <div className="flex">
            <div className="flex items-center">
              <h1 className="mx-2 font-bold text-slate-500 hover:text-blue-500 cursor-pointer">
                Home
              </h1>
            </div>

            <div className="flex items-center">
              <IoIosArrowForward className="" />
              <h1 className="mx-2 font-bold text-slate-500 hover:text-blue-500 cursor-pointer">
                Stays
              </h1>
            </div>

            <div className="flex items-center">
              <IoIosArrowForward />
              <h1 className="mx-2 font-bold text-slate-500 hover:text-blue-500 cursor-pointer">
                New Zealand
              </h1>
            </div>
            <div className="flex items-center">
              <IoIosArrowForward />
              <h1 className="mx-2 font-bold text-slate-300 cursor-pointer">
                South Island
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 lg:mx-10 xl:mx-0 grid grid-cols-3 grid-rows-2 mt-14">
        <div className="col-span-3 md:col-span-2">
          <div className="md:w-11/12 lg:w-9/12 mb-5">
            <h1 className="text-3xl md:text-5xl font-bold">
              Spectacular views of Queenstown
            </h1>
          </div>
        </div>

        <div className="flex md:justify-end col-span-3 md:col-span-1">
          <GoLocation className="text-slate-500 border-2 mx-1 text-4xl md:text-5xl rounded-full py-1.5 md:py-3 cursor-pointer hover:text-white hover:bg-slate-700" />
          <FiUpload className="text-slate-500 border-2 mx-1 text-4xl md:text-5xl rounded-full py-1.5 md:py-3 cursor-pointer hover:text-white hover:bg-slate-700" />
          <AiOutlineHeart className="text-slate-500 border-2 mx-1 text-4xl md:text-5xl rounded-full py-1.5 md:py-3 cursor-pointer hover:text-white hover:bg-slate-700" />
          <AiOutlineClose className="text-slate-500 border-2 mx-1 text-4xl md:text-5xl rounded-full py-1.5 md:py-3 cursor-pointer hover:text-white hover:bg-slate-700" />
        </div>

        <div className="hidden md:flex items-start mt-2 col-span-3">
          <img src={avatar1} className="w-8" />

          <div className="flex items-center ml-4">
            <AiFillStar className="text-yellow-500 mr-2" />
            <h1 className="text-lg text-slate-900 mr-3">4.8</h1>
            <h1 className="text-lg text-slate-500 mr-7">(256 reviews)</h1>
          </div>

          <div className="flex items-center">
            <AiOutlineHome className="text-slate-500 mr-2" />
            <h1 className="text-lg text-slate-500 mr-7">Superhost</h1>
          </div>

          <div className="flex items-center">
            <FiFlag className="text-slate-500 mr-2" />
            <h1 className="text-lg text-slate-500 mr-7">
              Queenstown, Otago, New Zealand
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-3 gap-3 mx-2 md:mx-10">
        <div className="row-span-3 col-span-3 overflow-hidden rounded-xl cursor-pointer">
          <button
            className="absolute z-10 rounded-full px-4 py-2 mt-5 font-bold ml-5 text-slate-500 bg-white"
            onClick={handleClick}
          >
            Show all photos
          </button>
          <img src={photo1} className="scale-150" onClick={handleClick} />
        </div>
        <img
          src={photo3}
          className="rounded-xl cursor-pointer"
          onClick={handleClick}
        />
        <img
          src={photo2}
          className="rounded-xl cursor-pointer"
          onClick={handleClick}
        />
        <img
          src={photo4}
          className="rounded-xl cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default ProductShow;
