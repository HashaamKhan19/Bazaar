import React from "react";
import LandingPage from "./pages/Landing/LandingPage";
import ProductPage from "./pages/Product/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Customer/Layout/Header";
import Footer from "./components/Customer/Layout/Footer";
import Vendor from "./pages/Vendor/Vendor";

const RoutesConf = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/vendor" element={<Vendor />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RoutesConf;
