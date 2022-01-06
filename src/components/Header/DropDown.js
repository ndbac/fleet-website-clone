import React from "react";
import { Link } from "react-router-dom";

function DropDown() {
  return (
    <div className="wow fadeInLeft z-50 absolute mt-max min-h-fit pb-20 container bg-white md:hidden rounded-b-2xl shadow-lg">
      <div>
        <div className="border-l-4 border-blue-900 py-3 mt-10">
          <h1 className="font-bold text-2xl ml-12 text-slate-900">Stays</h1>
        </div>

        <div className="hover:border-l-4 hover:border-blue-900 py-3">
          <h1 className="font-bold text-2xl ml-12 text-slate-400 hover:text-slate-900">
            Flights
          </h1>
        </div>

        <div className="hover:border-l-4 hover:border-blue-900 py-3">
          <h1 className="font-bold text-2xl ml-12 text-slate-400 hover:text-slate-900">
            Things to do
          </h1>
        </div>

        <div className="hover:border-l-4 hover:border-blue-900 py-3">
          <h1 className="font-bold text-2xl ml-12 text-slate-400 hover:text-slate-900">
            Cars
          </h1>
        </div>

        <div className="hover:border-l-4 hover:border-blue-900 py-3">
          <Link to="/support">
            <h1 className="font-bold text-2xl ml-12 text-slate-400 hover:text-slate-900">
              Support
            </h1>
          </Link>
        </div>
      </div>
      <div className="container text-center mt-20">
        <button className="mx-4 text-xl font-bold text-slate-900 border-2 hover:bg-slate-800 hover:text-white rounded-full py-4 px-12">
          List your property
        </button>
      </div>
    </div>
  );
}

export default DropDown;
