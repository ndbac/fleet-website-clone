import React from "react";

import live1 from "../../../assets/Live/live-pic-1.png";
import live2 from "../../../assets/Live/live-pic-2.png";
import live3 from "../../../assets/Live/live-pic-3.png";

function Live() {
  return (
    <div className="wow fadeInUp container max-w-screen-xl mx-auto mt-48 mb-20">
      <div className="text-center">
        <h1 className="font-bold text-slate-900 text-5xl">Live anywhere</h1>
        <h2 className="text-slate-500 text-xl mt-2">Keep calm & travel on</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 text-center">
        <div className="group text-center cursor-pointer mb-10">
          <div className="rounded-3xl overflow-hidden w-fit mx-auto">
            <img
              src={live1}
              className="group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
            />
          </div>
          <h1 className="font-bold mt-6 text-slate-900 text-lg group-hover:text-indigo-800">
            Enjoy the great cold
          </h1>
          <p className="mt-2 text-slate-500">6,879 properties</p>
        </div>

        <div className="group text-center cursor-pointer mb-10">
          <div className="rounded-3xl overflow-hidden w-fit mx-auto">
            <img
              src={live2}
              className="group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
            />
          </div>
          <h1 className="font-bold mt-6 text-slate-900 text-lg group-hover:text-indigo-800">
            Pick up the earliest sunrise
          </h1>
          <p className="mt-2 text-slate-500">9,879 properties</p>
        </div>

        <div className="group text-center cursor-pointer mb-10">
          <div className="rounded-3xl overflow-hidden w-fit mx-auto">
            <img
              src={live3}
              className="group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
            />
          </div>
          <h1 className="font-bold mt-6 text-slate-900 text-lg group-hover:text-indigo-800">
            Unique stay
          </h1>
          <p className="mt-2 text-slate-500">12,879 properties</p>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-4 text-center">
        <button
          type="button"
          className="group border inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-full text-white hover:bg-slate-700 transition ease-in-out duration-700"
          disabled=""
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900 group-hover:text-slate-100 transition ease-in-out duration-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <h1 className="text-slate-900 group-hover:text-slate-100 transition ease-in-out duration-700">Loading...</h1>
        </button>
      </div>
    </div>
  );
}

export default Live;
