import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Hero from "./Components/Hero";
import Adventure from "./Components/Adventure";
import Travel from "./Components/Travel";
import Work from "./Components/Work";
import Live from "./Components/Live";
import TravelInfo from "./Components/TravelInfo";

function Home() {
  return (
    <>
      <Header />

      <section className="home">
        <Hero />
        <Adventure />
        <Travel />
        <Work />
        <Live />
        <TravelInfo />
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Home;
