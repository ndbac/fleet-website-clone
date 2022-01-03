import React from "react";

import work1 from "../../../assets/Work/work-pic-1.png";
import work2 from "../../../assets/Work/work-pic-2.png";
import work3 from "../../../assets/Work/work-pic-3.png";

function Work() {
  return (
    <div className="container max-w-screen-xl mx-auto mt-48">
      <div className="text-center">
        <h1 className="font-bold text-slate-900 text-5xl">How it work</h1>
        <h2 className="text-slate-500 text-xl mt-2">Keep calm & travel on</h2>
      </div>
      <div className="max-w-screen-lg mx-auto mt-20">
        <svg
          width="839"
          height="137"
          viewBox="0 0 839 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-50 ml-24 mt-20"
        >
          <path
            d="M838 4.83887C823.237 25.0088 713.617 137.14 601.48 135.889C497.352 134.728 454.07 -36.7167 262.536 60.1723C94.2489 145.302 53.9174 52.5844 1.07634 1.99272"
            stroke="#E6E8EC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 12"
          ></path>
        </svg>

        <div className="flex">
          <div className="w-64 mr-32 text-center">
            <img src={work1} />
            <h1 className="font-bold text-slate-900 text-2xl">Book & relax</h1>
            <p className="text-slate-500 mt-2">
              We realize ideas from simple to complex, everything becomes easy
              to use.
            </p>
          </div>
          <div className="w-64 mr-32 text-center">
            <img src={work2} className="mr-32" />
            <h1 className="font-bold text-slate-900 text-2xl">
              Smart checklist
            </h1>
            <p className="text-slate-500 mt-2">
              We realize ideas from simple to complex, everything becomes easy
              to use.
            </p>
          </div>
          <div className="w-64 text-center">
            <img src={work3} />
            <h1 className="font-bold text-slate-900 text-2xl">Save more</h1>
            <p className="text-slate-500 mt-2">
              We realize ideas from simple to complex, everything becomes easy
              to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
