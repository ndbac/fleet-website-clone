import React from "react";

import { AiFillStar } from "react-icons/ai";

function Card(props) {
  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-1 max-w-fit mx-auto">
      <div className="mx-5 lg:mx-0 rounded-2xl overflow-hidden bg-white shadow-sm group">
        <div className="h-54 overflow-hidden cursor-pointer">
          <img
            src={props.data.picture}
            className="group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
          />
        </div>
        <div className="w-10/12 mx-auto mt-5 flex">
          <div>
            <h1 className="font-bold text-lg group-hover:text-indigo-900 cursor-pointer">
              {props.data.title}
            </h1>
            <p className="text-sm cursor-pointer">{props.data.author}</p>
          </div>
          <div className="ml-4">
            <h1 className="line-through font-bold text-red-500">
              {props.data.prvPrice}
            </h1>
            <h1 className="font-bold text-green-500">{props.data.price}</h1>
          </div>
        </div>
        <div className="flex mt-3 pb-5 w-10/12 mx-auto items-center">
          <h1 className="text-sm text-slate-500">{props.data.date}</h1>
          <div className="flex items-center">
            <AiFillStar className="ml-4 text-yellow-500" />
            <h1 className="text-sm font-bold ml-0.5">{props.data.star}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
