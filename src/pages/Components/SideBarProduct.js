import React from "react";

import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { BiSpreadsheet } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";

import avatar from "../../assets/Product/avatar.jpg";

function SideBarProduct() {
  return (
    <div className="border-2 rounded-3xl mt-14 md:mx-4 lg:mt-0 lg:mx-0 lg:ml-8">
      <div className="grid grid-cols-2 py-6 px-6">
        <div>
          <div className="flex items-end">
            <h1 className="text-3xl font-bold line-through text-slate-500">
              $199
            </h1>
            <h1 className="text-3xl font-bold ml-3">$109</h1>
            <h1 className="text-xl text-slate-500 ml-1">/night</h1>
          </div>
          <div className="flex items-center mt-1">
            <AiFillStar className="text-yellow-500 mr-1" />
            <h1 className="font-bold text-slate-900 mr-2">4.8</h1>
            <h1 className="text-slate-500 mr-7">(256 reviews)</h1>
          </div>
        </div>

        <div className="flex justify-end">
          <img src={avatar} className="w-16 h-16" />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 px-6 bg-gray-50 mx-5 rounded-2xl">
        <div className="flex items-center mb-3 mt-5">
          <BiSpreadsheet className="text-3xl text-slate-500" />
          <div className="ml-3">
            <h1 className="text-slate-500">Check-in</h1>
            <h1 className="font-bold">May 15, 2021</h1>
          </div>
        </div>

        <div className="flex items-center mb-3 mt-5">
          <HiOutlineDocumentText className="text-3xl text-slate-500" />
          <div className="ml-3">
            <h1 className="text-slate-500">Check-out</h1>
            <h1 className="font-bold">May 22, 2021</h1>
          </div>
        </div>

        <div className="flex items-center my-5">
          <AiOutlineUser className="text-3xl text-slate-500" />
          <div className="ml-3">
            <h1 className="text-slate-500">Guest</h1>
            <h1 className="font-bold">2 guests</h1>
          </div>
        </div>
      </div>

      <div className="mb-20 mx-5 mt-8">
        <button className="font-bold border-2 rounded-full px-6 py-3 mr-4 hover:bg-slate-800 hover:text-white transition duration-500">
          Save +
        </button>
        <button className="font-bold rounded-full px-16 md:px-60 lg:px-24 xl:px-28 py-3 bg-blue-500 hover:bg-blue-700 transition duration-500 text-white">
          Reserve
        </button>
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-5 mx-5 items-center px-3">
          <h1 className="col-span-3 text-slate-500 mb-5">$119 x 7 nights</h1>
          <h1 className="col-start-5 font-bold text-right mb-5">$833</h1>
        </div>

        <div className="grid grid-cols-5 mx-5 items-center px-3">
          <h1 className="col-span-3 text-slate-500 mb-5">
            10% campaign discount
          </h1>
          <h1 className="col-start-5 font-bold text-right mb-5">-$125</h1>
        </div>

        <div className="grid grid-cols-5 mx-5 items-center px-3">
          <h1 className="col-span-3 text-slate-500 mb-5">Service fee</h1>
          <h1 className="col-start-5 font-bold text-right mb-5">$103</h1>
        </div>

        <div className="grid grid-cols-5 mx-5 items-center bg-gray-50 rounded-lg py-2 px-3">
          <h1 className="col-span-3 text-slate-90 font-bold">Total</h1>
          <h1 className="col-start-5 font-bold text-right">$833</h1>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5 cursor-pointer">
        <FiFlag />
        <p className="text-center ml-2">Report this property</p>
      </div>
    </div>
  );
}

export default SideBarProduct;
