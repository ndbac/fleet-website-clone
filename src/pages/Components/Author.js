import React from "react";
import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

function Author({ data }) {
  return (
    <div className="mx-5">
      <div className="group w-64 rounded-3xl overflow-hidden border">
        <div className="flex">
          <div className="max-h-48 overflow-hidden cursor-pointer">
            <img
              src={data.pic}
              className="group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
            />
          </div>
          <div className="absolute mt-5 ml-5 bg-white px-4 py-1 rounded-full">
            <div className="flex text-center items-center">
              <AiFillStar className="text-yellow-500" />
              <h1 className="text-sm font-bold ml-0.5">{data.star}</h1>
            </div>
          </div>
          <div className="absolute ml-16 mt-36">
            <img
              src={data.host}
              className="rounded-full w-32 border-4 border-white"
            />
          </div>
        </div>
        <div className="mt-24 mb-10 text-center">
          <Link to="/profile">
            <h1 className="text-3xl font-bold group-hover:text-indigo-800 cursor-pointer">
              {data.name}
            </h1>
          </Link>
          <p>{data.company}</p>
        </div>
      </div>
    </div>
  );
}

export default Author;
