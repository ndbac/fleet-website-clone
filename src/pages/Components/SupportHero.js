import React from "react";

import { GoSearch } from "react-icons/go";

import pic1 from "../../assets/Support/support-pic-1@2x.png";
import pic2 from "../../assets/Support/support-pic-2@2x.png";
import pic3 from "../../assets/Support/support-pic-3@2x.png";
import pic4 from "../../assets/Support/support-pic-4@2x.png";

function SupportHero() {
  return (
    <div className="lg:max-w-screen-xl mx-auto mt-20 md:mt-10 mb-36 md:mb-72">
      <div className="wow fadeIn grid grid-cols-2 max-w-screen-xl absolute -z-10">
        <img src={pic1} className="scale-90" />
        <img src={pic2} className="ml-12" />
        <img src={pic4} className="absolute mt-80 md:mt-96 pt-24 scale-50" />
        <img src={pic3} className="absolute ml-96 pl-72 scale-50 mt-24" />
      </div>

      <div className="wow fadeInDown max-w-screen-sm mx-auto text-center" data-wow-delay="0.5s">
        <h1 className="text-6xl md:text-8xl font-bold text-slate-900 pt-40 md:pt-64">Support</h1>
        <p className="max-w-lg mx-auto text-lg mt-4 text-slate-500">
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </p>
        <div className="flex justify-center">
          <div className="mt-8 flex justify-end items-center">
            <input
              className="shadow-sm md:shadow-xl text-xl w-max border rounded-full pl-10 pr-20 py-2 md:py-5 focus:outline-slate-500 transition duration-800"
              type="text"
              placeholder="Search anything!"
            />
            <div className="absolute p-2 md:p-4 mr-1 rounded-full bg-blue-500 hover:bg-blue-700 transition duration-700 cursor-pointer">
              <GoSearch className="text-2xl md:text-3xl rounded-full text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportHero;
