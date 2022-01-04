import React from "react";

import Avatar1 from "../../assets/Char/avatar-1.jpg";

function Notice() {
  return (
    <div className="wow fadeInUp absolute mdml-fit lgml-max ml-12 mt-90">
      <div className="bg-white shadow-lg rounded-2xl py-2 px-4 md:py-4 md:px-8">
        <h1 className="font-bold text-2xl mb-8 text-left">Notifications</h1>

        <div className="grid grid-cols-3 text-left items-center">
          <img src={Avatar1} className="h-16 w-16 flex" />
          <div className="col-span-2">
            <h1 className="font-bold">Uzumaki Mika</h1>
            <h1 className="block">just sent you a message</h1>
            <p className="text-xs text-slate-400">1 hours ago</p>
          </div>
        </div>

        <div className="grid grid-cols-3 text-left items-center mt-8 mb-3">
          <img src={Avatar1} className="h-16 w-16 flex" />
          <div className="col-span-2">
            <h1 className="font-bold">Kohaku Tora</h1>
            <h1 className="block">just sent you a message</h1>
            <p className="text-xs text-slate-400">3 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
