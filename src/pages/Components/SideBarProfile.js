import React from "react";

import avatar from "../../assets/Profile/avatar.jpg";

import { AiFillStar, AiOutlineHome, AiOutlineStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { RiGlobalLine } from "react-icons/ri";
import { FiShare, FiTwitter, FiInstagram } from "react-icons/fi";
import { TiSocialFacebookCircular } from "react-icons/ti";

function SideBarProfile() {
  return (
    <div className="col-span-1 max-h-profile pb-10 bg-white border rounded-3xl mx-4 lg:ml-16 lg:mr-8 lg:mt-64 overflow-hidden text-center">
      <div className="mt-10">
        <img src={avatar} className="block w-7/12 mx-auto" />
      </div>
      <div className="mt-6 flex justify-center items-center">
        <h1 className="font-bold text-4xl mr-2">Zoe Towne</h1>
        <GoVerified className="text-green-500 text-2xl" />
      </div>
      <div className="flex justify-center items-center mt-2">
        <AiFillStar className="text-yellow-500" />
        <p className="text-slate-900 font-bold text-md ml-1">4.8</p>
        <p className="text-slate-500 text-md ml-3">(256 reviews)</p>
      </div>

      <div className="mt-5 flex items-center justify-center bg-slate-100 rounded-full px-2 py-1 mx-8">
        <AiOutlineHome className="text-slate-500" />
        <h1 className="text-slate-500 ml-2">Superhost</h1>
        <AiOutlineStar className="text-slate-500 ml-5" />
        <h1 className="text-slate-500 ml-2">256 reviews</h1>
      </div>

      <div className="flex justify-center mt-10">
        <button className="flex items-center justify-center text-slate-800 font-bold">
          <RiGlobalLine className="text-slate-500 text-xl mr-2" />
          www.dinhbac.com
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <button className="border-2 px-4 py-1 rounded-full mr-2 text-md font-bold text-slate-700 hover:bg-slate-700 hover:text-white transition duration:500">
          Contact
        </button>
        <button className="border-2 rounded-full py-2 px-2 text-slate-500 hover:bg-slate-700 hover:text-white transition duration:500">
          <FiShare className="text-xl" />
        </button>
      </div>

      <div className="flex justify-center items-center mt-7">
        <FiTwitter className="text-xl text-slate-500 mx-3" />
        <FiInstagram className="text-xl text-slate-500 mx-3" />
        <TiSocialFacebookCircular className="text-2xl text-slate-500 mx-3" />
      </div>

      <div className="border-t mt-12 mx-14 text-center">
        <p className="text-sm mt-10">Member since Mar 15, 2021</p>
        <div>
          <p className="text-sm cursor-pointer">Report this property</p>
        </div>
      </div>
    </div>
  );
}

export default SideBarProfile;
