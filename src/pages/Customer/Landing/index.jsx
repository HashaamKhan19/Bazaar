import React from "react";
import Header from "../../../components/Customer/Layout/Header";
import HeroSection from "./HeroSection";
import Cta from "./Cta";
import Footer from "../../../components/Customer/Layout/Footer";
import BestSellingCategories from "./SellingCategories";
import BestSellingProducts from "./SellingProducts";
import Featured from "./Featured";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BestSellingCategories />
      <Featured />
      <BestSellingProducts />
      <Cta />
      <Footer />
    </>
  );
};

export default LandingPage;
