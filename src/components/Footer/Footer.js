import React from "react";

import Logo from "../../assets/Logo/logo-dark.svg";

function Footer() {
  return (
    <div className="flex justify-center border-t-2">
      <div className="w-10/12 md:w-9/12 lg:max-w-screen-xl md:mt-5 text-left">
        <div className="grid grid-cols-2 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <img src={Logo} className="mt-8 mr-5" />
          </div>

          <div className="col-span-1 mt-10 md:mt-5">
            <h1 className="font-bold text-slate-600 hover:text-slate-900 mb-3">
              Stays
            </h1>
            <h1 className="font-bold text-slate-600 hover:text-slate-900">
              Cars
            </h1>
          </div>

          <div className="col-span-1 mt-10 md:mt-5">
            <h1 className="font-bold text-slate-600 hover:text-slate-900 mb-3">
              Flight
            </h1>
            <h1 className="font-bold text-slate-600 hover:text-slate-900 mb-3">
              Things to do
            </h1>
          </div>

          <div className="col-span-2 md:col-span-1 md:mt-5">
            <h1 className="font-bold text-slate-600 hover:text-slate-900 mb-3">
              Support
            </h1>
          </div>

          <div className="col-span-2 md:col-span-1 mt-5 text-center">
            <h1 className="font-bold text-slate-900 mb-3 uppercase">
              Join your community!
            </h1>
            <input
              placeholder="Enter your email"
              className="border-2 py-2 pl-12 rounded-full md:py-0 md:px-2 lg:py-2 lg:px-3.5"
            />
          </div>
        </div>

        <h1 className="my-4 text-center text-xs text-slate-900">
          Copyright &copy; 2022 LeadMe LLC. All rights reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;
