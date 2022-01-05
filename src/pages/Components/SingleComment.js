import React from "react";

import { AiFillStar } from "react-icons/ai";

function SingleComment({ data }) {
  return (
    <div className="grid grid-cols-6 mt-10">
      <div className="mx-auto min-w-20 mr-4">
        <img src={data.pic} className="w-20" />
      </div>
      <div className="col-span-5">
        <div className="justify-end">
          <h1 className="font-bold text-lg">{data.name}</h1>
          <div className="flex">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-slate-500" />
          </div>
        </div>
        <p className="mt-2">{data.description}</p>
        <div className="grid grid-cols-4 items-center mt-2">
          <h1 className="col-span-2 md:col-span-1 text-slate-500 text-md">{data.time}</h1>
          <div className="flex">
            <h1 className="cursor-pointer text-blue-500 font-bold mr-3">
              Like
            </h1>
            <h1 className="cursor-pointer text-blue-500 font-bold">Reply</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleComment;
