import React from "react";

import { BsFolder } from "react-icons/bs";

function PopularCard({ data }) {
  return (
    <div className="w-80 mb-7 mx-auto rounded-3xl bg-white">
      <div className="px-10 py-10">
        <BsFolder className="text-green-500 text-5xl" />
        <h1 className="mt-5 text-2xl font-bold">{data.name}</h1>
        <h1 className="text-slate-500 mt-5">{data.description}</h1>
      </div>
    </div>
  );
}

export default PopularCard;
