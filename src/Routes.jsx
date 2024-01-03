import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Customer/Layout/Footer";
import Header from "./components/Customer/Layout/Header";
import LandingPage from "./pages/Landing/index";
import ProductPage from "./pages/Product/index";
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
