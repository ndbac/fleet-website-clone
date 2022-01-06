import React from "react";
import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

function ProfileCard({ data }) {
  console.log(data);
  return (
    <div className="w-80 mx-auto">
      <div className="mx-5 lg:mx-0 rounded-2xl overflow-hidden bg-white group border hover:border-2">
        <div className="h-54 overflow-hidden cursor-pointer">
          <img
            src={data.pic}
            className="group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
          />
        </div>
        <div className="w-10/12 mx-auto mt-5 flex">
          <div>
            <Link to="/product">
              <h1 className="font-bold text-lg group-hover:text-indigo-900 cursor-pointer">
                {data.name}
              </h1>
            </Link>
            <p className="text-sm cursor-pointer">{data.service}</p>
          </div>
          <div className="ml-4">
            <h1 className="line-through font-bold text-red-500">
              {data.prvPrice}
            </h1>
            <h1 className="font-bold text-green-500">{data.price}</h1>
          </div>
        </div>
        <div className="flex mt-3 pb-5 w-10/12 mx-auto items-center">
          <h1 className="text-sm text-slate-500">{data.total}</h1>
          <div className="flex items-center">
            <AiFillStar className="ml-4 text-yellow-500" />
            <h1 className="text-sm font-bold ml-0.5">{data.rate}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
