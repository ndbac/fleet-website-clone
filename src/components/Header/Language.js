import React from "react";

function Language() {
  return (
    <div className="wow fadeInUp absolute w-72 container mt-56 md:ml-80 lg:ml-96 py-2 rounded-2xl shadow-lg bg-white">
      <div className="grid grid-cols-2 mx-3 my-1 text-left font-bold text-slate-700">
        <h1 className="py-1 pr-1 pl-4 bg-slate-100 rounded-lg mx-1 my-1 cursor-pointer">
          English
          <p className="text-sm font-thin">United States</p>
        </h1>
        <h1 className="py-1 pr-1 pl-4 mx-1 my-1 hover:bg-slate-100 rounded-lg cursor-pointer">
          Vietnamese
          <p className="text-sm font-thin">Vietnam</p>
        </h1>
        <h1 className="py-1 pr-1 pl-4 mx-1 my-1 hover:bg-slate-100 rounded-lg cursor-pointer">
          Chinese
          <p className="text-sm font-thin">China</p>
        </h1>
        <h1 className="py-1 pr-1 pl-4 mx-1 my-1 hover:bg-slate-100 rounded-lg cursor-pointer">
          Janpanese
          <p className="text-sm font-thin">Japan</p>
        </h1>
      </div>
    </div>
  );
}

export default Language;
