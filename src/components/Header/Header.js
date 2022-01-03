import React, { useState } from "react";

import Travelers from "./Travelers";
import Language from "./Language";
import Notice from "./Notice";
import DropDown from "./DropDown";

import Logo from "../../assets/Logo/logo-dark.svg";
import Avatar2 from "../../assets/Char/avatar-2.jpg";

function Header() {
  const [traveler, setTraveler] = useState(false);
  const handleTraveler = () => {
    traveler ? setTraveler(false) : setTraveler(true);
  };

  const [language, setLanguage] = useState(false);
  const handleLanguage = () => {
    language ? setLanguage(false) : setLanguage(true);
  };

  const [notice, setNotice] = useState(false);
  const handleNotice = () => {
    notice ? setNotice(false) : setNotice(true);
  };

  const [dropdown, setDropdown] = useState(false);
  const handleDropDown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  return (
    <div className="flex md:py-6 py-4 justify-center text-lg">
      <div className="mr-6 md:ml-20 md:mr-4">
        <img
          src={Logo}
          className="mt-1 md:pr-10 md:border-r-2 cursor-pointer"
        />
      </div>

      <div className="hidden md:flex mr-10">
        <h1
          className={
            traveler
              ? "text-left font-bold mt-2 text-slate-900 cursor-pointer pr-48 pl-12"
              : "text-left font-bold mt-2 text-slate-500 hover:text-slate-900 cursor-pointer pr-48 pl-12"
          }
          onClick={handleTraveler}
        >
          Travelers
        </h1>
        {traveler && <Travelers />}
      </div>

      <div className="hidden md:flex mr-10">
        <h1 className="font-bold mt-2 text-slate-500 hover:text-slate-900 cursor-pointer">
          Support
        </h1>
      </div>

      <div className="hidden md:flex mr-10">
        <h1
          className={
            language
              ? "font-bold mt-2 text-slate-900 cursor-pointer"
              : "font-bold mt-2 text-slate-500 hover:text-slate-900 cursor-pointer"
          }
          onClick={handleLanguage}
        >
          Language
        </h1>
      </div>
      {language && <Language />}

      <div className="hidden md:flex mr-10">
        <button className="font-bold text-slate-500 border hover:bg-slate-800 hover:text-white rounded-full py-2 px-4">
          List your property
        </button>
      </div>

      <div className={dropdown ? "invisible ml-12 mr-5 md:mr-5" : "ml-12 mr-5 md:mr-5"}>
        <i
          className="far fa-bell fa-lg mt-3 cursor-pointer icon-base"
          onClick={handleNotice}
        >
          <span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 mb-2"></span>
          </span>
        </i>
      </div>

      {notice && <Notice />}

      <div className={dropdown ? "invisible md:mr-10 mr-1" : "md:mr-10 mr-1"}>
        <img src={Avatar2} className="mt-1 h-10 w-10 cursor-pointer" />
      </div>

      <div className="md:hidden flex items-center ml-4">
        <button
          className="outline-none mobile-menu-button"
          onClick={handleDropDown}
        >
          <svg
            className="w-12 h-12"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {dropdown && <DropDown />}
    </div>
  );
}

export default Header;
