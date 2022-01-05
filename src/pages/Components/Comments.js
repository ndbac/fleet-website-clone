import React, { useState } from "react";

import SingleComment from "./SingleComment";

import { FiChevronDown } from "react-icons/fi";

import avatar1 from "../../assets/ProfileCard/avatar-1.jpg";
import avatar2 from "../../assets/ProfileCard/avatar-2.jpg";
import avatar3 from "../../assets/ProfileCard/avatar-3.jpg";

const data = [
  {
    pic: avatar1,
    name: "Myrtie Runolfsson",
    description:
      "We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.",
    time: "about 1 hour ago",
  },
  {
    pic: avatar2,
    name: "Myrtie Runolfsson",
    description:
      "Stunning views of Queenstown. Very peaceful. Love it so much. Definitely gonna come back and visit.",
    time: "about 5 hour ago",
  },
  {
    pic: avatar3,
    name: "Myrtie Runolfsson",
    description: "Best place I stayed in all of NZ.",
    time: "1 day ago",
  },
];

function Comments() {
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    filter ? setFilter(false) : setFilter(true);
  };

  return (
    <div className="mr-4 lg:mr-0">
      <div className="grid mt-14">
        <h1 className="text-3xl font-bold">Add a review</h1>
        <div className="hidden lg:flex items-center mt-5">
          <p className="text-slate-500 text-lg mr-2">Be the first to review</p>
          <p className="font-bold text-lg">Spectacular views of Queenstown</p>
        </div>

        <input
          type="text"
          className="border-2 rounded-3xl px-5 py-5 text-xl mt-8"
          placeholder="Share your thoughts"
        />
        <div className="flex justify-end">
          <button className=" px-4 py-1 rounded-xl mt-2 font-bold text-white bg-blue-500 hover:bg-blue-700 transition duration:500">
            Send
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-5 items-center">
        <div>
          <h1 className="text-xl font-bold">3 comments</h1>
        </div>

        <div className="flex justify-end">
          <div className="">
            <button
              className="border-2 bg-white rounded-xl pl-5 pr-12 py-2 font-bold flex"
              onClick={handleFilter}
            >
              Newest
              {filter ? (
                <FiChevronDown className="rotate-180 transition duration-500 absolute mt-1 ml-20" />
              ) : (
                <FiChevronDown className="absolute mt-1 ml-20 transition duration-500" />
              )}
            </button>
            <div
              className={
                filter
                  ? "animate__animated animate__fadeIn container"
                  : "hidden"
              }
            >
              <div className="md:mt-2 absolute z-50 bg-white rounded-xl text-left cursor-pointer shadow-sm border">
                <h1 className="text-md pl-5 pr-12 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800 rounded-t-xl">
                  Newest
                </h1>
                <h1 className="text-md pl-5 pr-12 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800">
                  Popular
                </h1>
                <h1 className="text-md pl-5 pr-12 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800 rounded-b-xl">
                  All
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {data.map((e) => (
          <SingleComment data={e} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
