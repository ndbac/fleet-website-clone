import React from "react";

function Travelers() {
  return (
    <div className="absolute w-72 container mt-8 py-1 rounded-2xl shadow-lg bg-white">
      <div className="text-left font-bold text-slate-500 mx-3 my-2">
        <h1 className="hover:text-slate-900 rounded-full pl-8 py-2 cursor-pointer">
          Stays
        </h1>
        <h1 className="text-white bg-slate-900 rounded-full pl-8 py-2 cursor-pointer">
          Flights
        </h1>
        <h1 className="hover:text-slate-900 rounded-full pl-8 py-2 cursor-pointer">
          Things to do
        </h1>
        <h1 className="hover:text-slate-900 rounded-full pl-8 py-2 cursor-pointer">
          Cars
        </h1>
      </div>
    </div>
  );
}

export default Travelers;
