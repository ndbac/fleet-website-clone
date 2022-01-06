import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Live from "./Components/Live";
import FaqComp from "./Components/FaqComp";
import SupportHero from "./Components/SupportHero";
import PopularTopics from "./Components/PopularTopics";

function Support() {
  return (
    <>
      <Header />

      <div className="support relative overflow-hidden">
        <SupportHero />
        <PopularTopics />
        <FaqComp />
        <Live />
      </div>

      <Footer />
    </>
  );
}

export default Support;
