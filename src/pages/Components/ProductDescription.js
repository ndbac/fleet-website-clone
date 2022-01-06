import React from "react";

import { AiOutlineHome, AiOutlineWifi } from "react-icons/ai";
import { RiHotelBedLine, RiFirstAidKitLine } from "react-icons/ri";
import { BiBath } from "react-icons/bi";
import {
  MdComputer,
  MdOutlineCleaningServices,
  MdOutlineFastfood,
  MdLocalAtm,
} from "react-icons/md";
import { BsBuilding } from "react-icons/bs";

import SideBarProduct from "./SideBarProduct";

import avatar from "../../assets/Product/avatar.jpg";

function ProductDescription() {
  return (
    <div className="wow fadeInUp max-w-screen-xl mx-auto mb-20">
      <div className="grid grid-cols-2 xl:grid-cols-5 mx-2 lg:mx-10">
        <div className="col-span-2 lg:col-span-1 xl:col-span-3 mx-5 lg:mx-0">
          <h1 className="text-3xl font-bold text-slate-900">
            Private room in house
          </h1>
          <div className="flex items-center mt-3">
            <h1 className="mr-3 text-slate-500">Hosted by</h1>
            <img src={avatar} className="w-8 mr-3" />
            <h1 className="font-bold text-slate-900">Zoe Towne</h1>
          </div>

          <div className="md:flex items-center mt-10 text-slate-500">
            <div className="flex mb-3 md:mb-0">
              <AiOutlineHome className="text-xl" />
              <h1 className="ml-2 mr-4">2 guests</h1>
            </div>

            <div className="flex mb-3 md:mb-0">
              <RiHotelBedLine className="text-xl" />
              <h1 className="ml-2 mr-4">1 bedroom</h1>
            </div>

            <div className="flex">
              <BiBath className="text-xl" />
              <h1 className="ml-2 mr-4">1 private bath</h1>
            </div>
          </div>

          <div className="text-slate-500 mt-10 text-lg border-t">
            <h1 className="mt-5">
              Described by Queenstown House & Garden magazine as having 'one of
              the best views we've ever seen' you will love relaxing in this
              newly built, architectural house sitting proudly on Queenstown
              Hill.
              <br />
              <br />
              Enjoy breathtaking 180' views of Lake Wakatipu from your well
              appointed & privately accessed bedroom with modern en suite and
              floor-to-ceiling windows.
              <br />
              <br />
              Your private patio takes in the afternoon sun, letting you soak up
              unparalleled lake and mountain views by day and the stars & city
              lights by night.
            </h1>
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-3xl text-slate-900">Amenities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 text-slate-500">
              <div>
                <div className="flex mb-4">
                  <AiOutlineWifi className="text-xl" />
                  <h1 className="ml-3 ">Free wifi 24/7</h1>
                </div>

                <div className="flex mb-4">
                  <MdComputer className="text-xl" />
                  <h1 className="ml-3 ">Free computer</h1>
                </div>

                <div className="flex mb-4">
                  <RiFirstAidKitLine className="text-xl" />
                  <h1 className="ml-3 ">Aid 24/7</h1>
                </div>

                <div className="flex mb-4">
                  <AiOutlineWifi className="text-xl" />
                  <h1 className="ml-3 ">Free wifi 24/7</h1>
                </div>
              </div>

              <div>
                <div className="flex mb-4">
                  <MdOutlineCleaningServices className="text-xl" />
                  <h1 className="ml-3 ">Free clean bathroom</h1>
                </div>

                <div className="flex mb-4">
                  <MdOutlineFastfood className="text-xl" />
                  <h1 className="ml-3 ">Breakfast included</h1>
                </div>

                <div className="flex mb-4">
                  <MdLocalAtm className="text-xl" />
                  <h1 className="ml-3 ">ATM</h1>
                </div>

                <div className="flex mb-4">
                  <BsBuilding className="text-xl" />
                  <h1 className="ml-3 ">Nearby City</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button className="border-2 rounded-full text-md py-1 px-3 hover:bg-slate-700 hover:text-white">
              More detail
            </button>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 xl:col-span-2">
          <SideBarProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
