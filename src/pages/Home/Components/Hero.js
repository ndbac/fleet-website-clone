import React from "react";

import mainPic1 from "../../../assets/Background/main-pic-1.jpg";
import mainPicMobile1 from "../../../assets/Background/main-pic-mobile-1.jpg";

function Hero() {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto md:mt-5">
        <div className="flex justify-center">
          <img
            src={mainPic1}
            className="wow fadeInUp lg:max-w-7xl w-11/12 absolute lg:mx-0 rounded-2xl -z-10 hidden md:block"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={mainPicMobile1}
            className="wow fadeInUp absolute -z-10 rounded-t-3xl px-2 md:hidden max-h-mobile"
          />
        </div>

        <div className="wow fadeInRight" data-wow-delay=".8s">
          <h1 className="font-bold text-6xl text-center mt-2 pt-28 lg:text-8xl md:text-left md:pt-16 lg:pt-40 md:pl-20 text-slate-800">
            Air, sleep,
            <br /> dream
          </h1>
          <h2 className="text-center md:text-left md:pl-20 pt-5 md:pt-2 lg:pt-5 text-xl md:text-lg lg:text-2xl mb-8 text-slate-800">
            Find and book a great experience.
          </h2>
          <div className="text-center md:text-left">
            <button className="bg-blue-500 px-6 py-3 md:ml-20 rounded-full cursor-pointer font-bold text-white hover:shadow-lg hover:bg-blue-700 transition ease-in-out duration-700">
              Start your search
            </button>
          </div>
        </div>

        <div className="wow fadeInDown container max-w-fit md:w-10/12 lg:w-full lg:max-w-6xl bg-gradient-to-r from-white to-slate-200 mx-auto md:mt-8 lg:mt-36 mt-80 shadow-lg rounded-2xl">
          <div className="px-3 md:px-10">
            <div className="flex pt-4 md:pt-5 lg:pt-8">
              <h1 className="font-bold mr-8 md:mr-10 text-slate-900 cursor-pointer border-b-2 border-black pb-2">
                Stays
              </h1>
              <h1 className="font-bold mr-8 md:mr-10 text-slate-400 hover:text-slate-900 cursor-pointer pb-2">
                Flights
              </h1>
              <h1 className="font-bold mr-8 md:mr-10 text-slate-400 hover:text-slate-900 cursor-pointer pb-2">
                Cars
              </h1>
              <h1 className="font-bold md:mr-10 text-slate-400 hover:text-slate-900 cursor-pointer pb-2">
                Things to do
              </h1>
            </div>
            <div className="max-w-screen-xl bg-gradient-to-r from-slate-200 to-white pt-025"></div>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 pb-4 lg:pb-10">
            <div className="col-span-2 md:col-span-1">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl pl-10 lg:pt-10 pt-3 cursor-pointer">
                Location
              </h1>
              <p className="pl-10 lg:text-lg text-slate-600 cursor-pointer">
                Where are you going?
              </p>
            </div>
            <div>
              <h1 className="font-bold text-2xl lg:text-3xl pl-10 lg:pl-20 lg:pt-10 pt-3 cursor-pointer">
                Check in
              </h1>
              <p className="pl-10 lg:pl-20 lg:text-lg text-slate-600 cursor-pointer">
                Add date
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl pl-10 lg:pl-20 lg:pt-10 pt-3 cursor-pointer">
                Check out
              </h1>
              <p className="pl-10 lg:pl-20 lg:text-lg text-slate-600 cursor-pointer">
                Add date
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl pl-10 lg:pl-20 pt-3 lg:pt-10 cursor-pointer">
                Travelers
              </h1>
              <p className="pl-10 lg:pl-20 lg:text-lg text-slate-600 cursor-pointer">
                Travelers
              </p>
            </div>
            <div className="mt-5">
              <div className="lg:mt-5 md:ml-12 md:mr-28 md:pr-8 md:pl-2 md:py-2 lg:px-5 lg:py-5 mt-1 mx-16 py-2 bg-blue-700 rounded-full cursor-pointer hover:bg-blue-800 transition ease-in-out duration-700">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  role="img"
                  className="w-6 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#e2e8f0"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
