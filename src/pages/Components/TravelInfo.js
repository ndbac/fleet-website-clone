import React, { useState } from "react";

import Card from "./Card";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import place1 from "../../assets/Places/catalog-pic-1@2x.jpg";
import place2 from "../../assets/Places/catalog-pic-2@2x.jpg";
import place3 from "../../assets/Places/catalog-pic-3@2x.jpg";
import place4 from "../../assets/Places/catalog-pic-4@2x.jpg";
import place5 from "../../assets/Places/catalog-pic-5@2x.jpg";
import place6 from "../../assets/Places/catalog-pic-6@2x.jpg";
import place7 from "../../assets/Places/catalog-pic-7@2x.jpg";
import place8 from "../../assets/Places/catalog-pic-1@2x.jpg";

const locations = [
  {
    picture: place1,
    title: "The grand resort",
    author: "Karineside",
    prvPrice: "$356",
    price: "$267",
    date: "Tue, Jul 20 - Fri, Jul 23",
    star: "4.9",
  },
  {
    picture: place2,
    title: "The grand resort",
    author: "Karineside",
    prvPrice: "$356",
    price: "$267",
    date: "Tue, Jul 20 - Fri, Jul 23",
    star: "4.9",
  },
  {
    picture: place3,
    title: "The grand resort",
    author: "Karineside",
    prvPrice: "$356",
    price: "$267",
    date: "Tue, Jul 20 - Fri, Jul 23",
    star: "4.9",
  },
  {
    picture: place4,
    title: "The grand resort",
    author: "Karineside",
    prvPrice: "$356",
    price: "$267",
    date: "Tue, Jul 20 - Fri, Jul 23",
    star: "4.9",
  },
  {
    picture: place5,
    title: "The grand resort",
    author: "Karineside",
    prvPrice: "$356",
    price: "$267",
    date: "Tue, Jul 20 - Fri, Jul 23",
    star: "4.9",
  },
  {
    picture: place6,
    title: "The grand resort",
    author: "Karineside",
    prvPrice: "$356",
    price: "$267",
    date: "Tue, Jul 20 - Fri, Jul 23",
    star: "4.9",
  },
  {
    picture: place7,
    title: "The grand resort",
    author: "Karineside",
    prvPrice: "$356",
    price: "$267",
    date: "Tue, Jul 20 - Fri, Jul 23",
    star: "4.9",
  },
  {
    picture: place8,
    title: "The grand resort",
    author: "Karineside",
    prvPrice: "$356",
    price: "$267",
    date: "Tue, Jul 20 - Fri, Jul 23",
    star: "4.9",
  },
];

function TravelInfo() {
  const [sort, setSort] = useState(false);
  const handleSort = () => {
    sort ? setSort(false) : setSort(true);
  };

  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    filter ? setFilter(false) : setFilter(true);
  };

  return (
    <div className="wow fadeInUp mb-20 md:mb-40 max-w-screen-xl mx-auto bg-gray-50 rounded-3xl">
      <div className="text-center lg:text-left max-w-screen-xl mx-16 pt-20">
        <h1 className="text-5xl font-bold text-slate-900">Go somewhere</h1>
        <p className="text-2xl text-slate-500">Let's go on an adventure</p>
      </div>
      <div>
        <div className="grid grid-cols-8 max-w-screen-xl lg:mx-16 my-7 items-center">
          <div className="col-span-4 hidden lg:block">
            <button className="bg-slate-700 text-white font-bold px-4 py-1 mr-5 rounded-full">
              Featured
            </button>
            <button className="text-slate-500 font-bold rounded-full px-4 py-1 mr-4">
              Family-friendly
            </button>
            <button className="text-slate-500 font-bold rounded-full px-4 py-1 mr-4">
              On sale
            </button>
            <button className="text-slate-500 font-bold rounded-full px-4 py-1">
              Sub nav
            </button>
          </div>

          <div className="col-span-8 md:col-span-4 lg:hidden">
            <button
              className="border-2 bg-white rounded-xl pl-8 pr-21 mb-3 md:mb-0 py-2 font-bold flex lg:ml-80 ml-5"
              onClick={handleFilter}
            >
              Featured
              {filter ? (
                <FiChevronDown className="rotate-180 transition duration-500 absolute mt-1 ml-32" />
              ) : (
                <FiChevronDown className="absolute mt-1 ml-32" />
              )}
            </button>
            <div
              className={
                filter
                  ? "animate__animated animate__fadeIn container lg:ml-80 ml-5"
                  : "hidden"
              }
            >
              <div className="md:mt-2 absolute z-50 bg-white rounded-xl text-left cursor-pointer shadow-sm border">
                <h1 className="text-md pl-5 pr-12 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800 rounded-t-xl">
                  Featured
                </h1>
                <h1 className="text-md pl-5 pr-12 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800">
                  Family-friendly
                </h1>
                <h1 className="text-md pl-5 pr-12 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800">
                  On sale
                </h1>
                <h1 className="text-md pl-5 pr-12 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800 rounded-b-xl">
                  Sub nav
                </h1>
              </div>
            </div>
          </div>

          <div className="col-span-8 md:col-span-4 md:ml-2">
            <button
              className="border-2 bg-white rounded-xl px-8 lg:px-14 py-2 font-bold flex lg:ml-80 ml-5"
              onClick={handleSort}
            >
              Recently added
              {sort ? (
                <FiChevronDown className="rotate-180 transition duration-500 absolute mt-1 ml-32 lg:ml-36" />
              ) : (
                <FiChevronDown className="absolute mt-1 ml-32 lg:ml-36" />
              )}
            </button>
            <div
              className={
                sort
                  ? "animate__animated animate__fadeIn container lg:ml-80 ml-5"
                  : "hidden"
              }
            >
              <div className="mt-2 absolute z-50 bg-white rounded-xl text-left lg:text-right cursor-pointer shadow-sm border">
                <h1 className="text-md pl-5 pr-12 lg:pl-24 lg:pr-4 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800 rounded-t-xl">
                  Recently added
                </h1>
                <h1 className="text-md pl-5 pr-12 lg:pl-24 lg:pr-4 py-2 font-bold hover:bg-slate-100 hover:text-indigo-800 rounded-b-xl">
                  Long added
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 max-w-screen-xl lg:mx-16 gap-5 pb-20">
          {locations.map((e, index) => (
            <Card key={index} data={e} />
          ))}
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <button className="text-md font-bold border-2 px-4 py-1 rounded-full hover:bg-slate-700 hover:text-slate-200 transition ease-in-out duration-700">
          View all
        </button>
      </div>
    </div>
  );
}

export default TravelInfo;
