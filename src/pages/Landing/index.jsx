import React from "react";
import HeroSection from "./HeroSection";
import Cta from "./Cta";
import BestSellingCategories from "./SellingCategories";
import BestSellingProducts from "./SellingProducts";
import Featured from "./Featured";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <BestSellingCategories />
      <Featured />
      <BestSellingProducts />
      <Cta />
    </>
  );
};

export default LandingPage;
