import React from "react";

import travel1 from "../../../assets/Travel/travel-pic-1.jpg";
import appraisal1 from "../../../assets/Travel/appraisal-pic-1.png";

function Travel() {
  return (
    <div className="container max-w-screen-xl mt-48 mx-auto">
      <div className="wow fadeInUp text-center max-w-2xl mx-auto">
        <h1 className="font-bold text-5xl text-slate-900">
          Travel to make memories all around the world
        </h1>
        <h2 className="text-slate-500 text-2xl mt-2">
          Find trips that fit a flexible lifestyle
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="wow fadeInRight md:w-96 mx-4 md:ml-8 lg:ml-20 md:mt-10">
          <div>
            <h1 className="bg-blue-300 w-12 rounded-full text-center font-bold text-white mb-5">
              01
            </h1>
            <h1 className="font-bold text-2xl text-slate-900 mb-5">
              Find trips that fit a flexible lifestyle
            </h1>
            <p className="text-md text-gray-900 mb-10">
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
          <div>
            <h1 className="bg-indigo-300 w-12 rounded-full text-center font-bold text-white mb-5">
              02
            </h1>
            <h1 className="font-bold text-2xl text-slate-900 mb-5">
              Travel with more confidence
            </h1>
            <p className="text-md text-gray-900 mb-10">
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
          <div>
            <h1 className="bg-green-300 w-12 rounded-full text-center font-bold text-white mb-5">
              03
            </h1>
            <h1 className="font-bold text-2xl text-slate-900 mb-5">
              See what's really included
            </h1>
            <p className="text-md text-gray-900 mb-10">
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold mb-10 px-5 py-3 rounded-full transition ease-in-out duration-700">
            Start your search
          </button>
        </div>
        <div>
          <img
            src={appraisal1}
            className="wow fadeInLeft absolute w-5/12 mt-48 lg:w-64 md:ml-12 md:mt-64 lg:mt-48 rounded-full shadow-lg"
            data-wow-delay=".8s"
          />
          <img
            src={appraisal1}
            className="wow fadeInLeft absolute w-5/12 mt-96 ml-16 lg:w-64 lg:ml-36 rounded-full shadow-lg"
            data-wow-delay="1.6s"
          />
          <img
            src={appraisal1}
            className="wow fadeInRight absolute w-5/12 mt-72 ml-52 lg:w-64 md:ml-16 md:mt-28 lg:ml-64 rounded-full shadow-lg"
            data-wow-delay="1.2s"
          />
          <div className="wow fadeInLeft mx-4 md:mx-0 flex justify-center">
            <img
              src={travel1}
              className="float-right rounded-3xl lg:w-fit flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
