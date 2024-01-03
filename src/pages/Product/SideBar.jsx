import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import FilterSection from "./FilterSection";
import { useTheme } from "../../context/ThemeContext";
import XlSideBar from "./XlSideBar";

const Sidebar = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);

  const categories = ["Eye Makeup", "Fragrance", "Hair Preparations"];
  const brands = ["Mac", "Karts", "Baals", "Bukks", "Luasis"];
  const priceRanges = [
    "All",
    "20k - 40k",
    "60k - 80k",
    "90k - 100k",
    "200k - 300k",
  ];

  return (
    <>
      <ToggleButton
        onClick={() => setShowSidebar(!showSidebar)}
        isSidebarVisible={showSidebar}
      />

      <div
        className={`
        ${isDarkMode ? "bg-[#0f0e18]" : "bg-[#e2e8f0]"}
        ${
          isDarkMode
            ? "shadow shadow-white/30 hover:shadow-md hover:shadow-white/30"
            : "shadow border hover:shadow-lg"
        } 
          ${showSidebar ? "translate-x-0 " : "translate-x-full"}
          absolute top-0 right-0 w-[75%] sm:w-[45%] min-[960px]:w-[35%] px-8 py-[60px] z-40 min-h-screen xl:hidden flex flex-col gap-y-10 ease-in-out duration-300
        `}
      >
        {/* Categories */}
        <FilterSection
          title="Categories"
          options={categories}
          isDarkMode={isDarkMode}
        />

        {/* Brands */}
        <FilterSection
          title="Brands"
          options={brands}
          isDarkMode={isDarkMode}
        />

        {/* Price */}
        <FilterSection
          title="Price"
          options={priceRanges}
          isDarkMode={isDarkMode}
        />

        {/* Other Filters */}
        <FilterSection
          title="Other Filters"
          options={["On Sale", "In Stock", "Featured"]}
          isDarkMode={isDarkMode}
        />
      </div>

      <XlSideBar />
    </>
  );
};

export default Sidebar;
