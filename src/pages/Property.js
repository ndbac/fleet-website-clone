import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import UpdateProperty from "./Components/UpdateProperty";
import AddressBar from "./Components/AddressBar";
import ProfileCard from "./Components/ProfileCard";

import photo from "../assets/ProfileCard/card-pic-1.jpg";

const data = {
  name: "Entire serviced classy moutain house",
  service: "Free wifi, breakfast included",
  prvPrice: "$567",
  price: "$234",
  total: "$256 total",
  rate: "4.8 (12 reviews)",
  pic: photo,
};

function Property() {
  return (
    <>
      <Header />

      <section className="home overflow-hidden mt-10">
        <AddressBar />
        <div className="max-w-screen-xl mx-auto grid grid-cols-3 mt-10">
          <div className="col-span-3 lg:col-span-2">
            <UpdateProperty />
          </div>
          <div className="hidden wow fadeInUp lg:block">
            <h1 className="text-3xl font-bold text-slate-900 mb-5 ml-12 pl-1">Preview</h1>
            <ProfileCard data={data} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Property;
