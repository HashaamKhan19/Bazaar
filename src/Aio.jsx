import React from "react";
import LandingPage from "./pages/Landing/LandingPage";
import Product from "./pages/Product/Product";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Customer/Layout/Header";
import Footer from "./components/Customer/Layout/Footer";
import Vendor from "./pages/Vendor/Vendor";

const Aio = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/vendor" element={<Vendor />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Aio;
