import React from "react";

import { AiOutlineMessage } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FaRegWindowMaximize } from "react-icons/fa";

function Travelers() {
  return (
    <div className="wow fadeInUp absolute w-72 container mt-8 py-1 rounded-2xl shadow-lg bg-white">
      <div className="text-left font-bold text-slate-500 mx-3 my-2">
        <h1 className="text-white bg-slate-800 rounded-full pl-8 py-2 cursor-pointer">
          <AiOutlineMessage className="inline w-6 h-6 mr-2" />
          Stays
        </h1>
        <h1 className="hover:text-slate-900 rounded-full pl-8 py-2 cursor-pointer">
          <FiMail className="inline w-6 h-6 mr-2" />
          Flights
        </h1>
        <h1 className="hover:text-slate-900 rounded-full pl-8 py-2 cursor-pointer">
          <FiHome className="inline w-6 h-6 mr-2" />
          Things to do
        </h1>
        <h1 className="hover:text-slate-900 rounded-full pl-8 py-2 cursor-pointer">
          <FaRegWindowMaximize className="inline w-6 h-6 mr-2" />
          Cars
        </h1>
      </div>
    </div>
  );
}

export default Travelers;
