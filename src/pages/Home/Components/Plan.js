import React from "react";

import { BiChevronRight } from "react-icons/bi";

import plan1 from "../../../assets/Plan/planning-pic-1.png";
import plan2 from "../../../assets/Plan/planning-pic-2.png";
import plan3 from "../../../assets/Plan/planning-pic-3.png";

function Plan() {
  return (
    <div className="wow fadeInUp grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-screen-xl mx-auto mb-20">
      <div className="lg:col-span-2 md:mt-20 mx-5 mb-5 md:ml-14">
        <h1 className="uppercase font-bold text-slate-500">Supercharge your planning powers</h1>
        <h1 className="text-slate-900 text-5xl font-bold mt-5">Travel to make memories all around the world</h1>
        <h1 className="text-slate-500 text-xl my-10">
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </h1>
        <div class="group mb-6 flex items-center border-2 w-64 py-1 rounded-full border-slate-700">
          <input
            class="focus:outline-none pl-5 w-52 rounded-full"
            type="text"
            placeholder="Enter your phone number"
          />
          <BiChevronRight className="text-white ml-4 appearance-none hover:border-transparent border-transparent cursor-pointer bg-blue-500 hover:bg-blue-700 transition duration-500 rounded-full text-2xl px-1" />
        </div>
      </div>
      <div className="lg:col-span-3 flex mx-auto relative">
        <img src={plan1} />
        <img src={plan2} className="absolute w-36 md:w-56 mt-64 md:pt-36 md:ml-5 md:mt-96" />
        <img src={plan3} className="absolute w-36 md:w-56 ml-56 mt-12 md:mt-48 md:pl-5 md:ml-96" />
      </div>
    </div>
  );
}

export default Plan;
