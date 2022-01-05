import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import SideBarProfile from "./Components/SideBarProfile";
import ProfileWall from "./Components/ProfileWall";

import background from "../assets/Profile/bg-profile-host.jpg";

function Profile() {
  return (
    <>
      <Header />

      <div className="wow fadeInUp profile mb-28 mt-5 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto">
          <div className="hidden lg:block">
            <img src={background} className="absolute -z-10 rounded-3xl" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <SideBarProfile />
            <ProfileWall />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
