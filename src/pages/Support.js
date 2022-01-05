import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Live from "./Components/Live";
import FaqComp from "./Components/FaqComp";

function Support() {
  return (
    <>
      <Header />

      <div className="support">
        <FaqComp />
        <Live />
      </div>

      <Footer />
    </>
  );
}

export default Support;
