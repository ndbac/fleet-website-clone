import React, { useState } from "react";

import Travelers from "./Travelers";
import Language from "./Language";
import Notice from "./Notice";
import DropDown from "./DropDown";

import { BiBell } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";

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
    <div
      className="grid grid-cols-5 md:grid-cols-10 py-4 md:mt-5 items-center max-w-screen-lg mx-auto"
    >
      <div className="col-span-2">
        <img
          src={Logo}
          className="h-10 pr-10 ml-5 lg:border-r-2 cursor-pointer"
        />
      </div>

      <div className="col-span-2 hidden md:block">
        <h1
          className={
            traveler
              ? "text-left ml-5 font-bold text-slate-900 cursor-pointer"
              : "text-left ml-5 font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
          }
          onClick={handleTraveler}
        >
          Travelers
        </h1>
        {traveler && <Travelers />}
      </div>

      <div className="hidden md:block">
        <h1 className="font-bold text-slate-500 hover:text-slate-900 cursor-pointer">
          Support
        </h1>
      </div>

      <div className="hidden md:block">
        <h1
          className={
            language
              ? "font-bold text-slate-900 cursor-pointer"
              : "font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
          }
          onClick={handleLanguage}
        >
          Language
        </h1>
      </div>
      {language && <Language />}

      <div className="hidden col-span-2 md:block ml-4">
        <button className="lg:px-4 lg:py-2 px-1 py-1 font-bold text-slate-500 border hover:bg-slate-800 hover:text-white rounded-full">
          List your property
        </button>
      </div>

      <div className={dropdown ? "invisible" : "ml-12"}>
        <span>
          <span className="rounded-full h-3 w-3 bg-green-500 ml-6 mt-1 absolute"></span>
        </span>
        <BiBell
          onClick={handleNotice}
          className="cursor-pointer w-8 h-8 mt-2 text-slate-500"
        />
      </div>

      {notice && <Notice />}

      <div className={dropdown ? "invisible" : "ml-4"}>
        <img src={Avatar2} className="h-10 w-10 ml-5 md:ml-0 cursor-pointer" />
      </div>

      <div className="md:hidden flex items-center ml-4">
        <button
          className="outline-none mobile-menu-button"
          onClick={handleDropDown}
        >
          {dropdown ? (
            <IoMdClose className="w-10 h-10" />
          ) : (
            <FaBars className="w-8 h-8" />
          )}
        </button>
      </div>

      {dropdown && <DropDown />}
    </div>
  );
}

export default Header;
