import React from "react";

import { IoIosArrowForward } from "react-icons/io";

function AddressBar() {
  return (
    <div className="wow fadeInUp max-w-screen-xl mx-auto">
      <div className="grid grid-cols-3 items-center">
        <div className="ml-10 xl:ml-0 col-span-2 xl:col-span-1 group">
          <button className="border-2 rounded-full font-bold px-3 py-1 flex items-center group-hover:bg-slate-800 group-hover:text-white transition duration-300">
            <IoIosArrowForward className="rotate-180 mr-1" />
            Go home
          </button>
        </div>
        <div className="hidden xl:block col-start-4">
          <div className="flex">
            <div className="flex items-center">
              <h1 className="mx-2 font-bold text-slate-500 hover:text-blue-500 cursor-pointer">
                Home
              </h1>
            </div>
            <div className="flex items-center">
              <IoIosArrowForward />
              <h1 className="mx-2 font-bold text-slate-300 cursor-pointer">
                List your properties
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressBar;
