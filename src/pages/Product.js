import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ProductShow from "./Components/ProductShow";
import ProductDescription from "./Components/ProductDescription";
import ProfileXComment from "./Components/ProfileXComment";

function Product() {
  return (
    <>
      <Header />

      <section className="home overflow-hidden">
        <ProductShow />
        <ProductDescription />
        <ProfileXComment />
      </section>

      <Footer />
    </>
  );
}

export default Product;
