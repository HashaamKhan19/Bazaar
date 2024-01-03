import React from "react";
import { useTheme } from "../../context/ThemeContext";
import FilterSection from "./FilterSection";

const XlSideBar = () => {
  const { toggleTheme, isDarkMode } = useTheme();
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
    <div
      className={`
            ${isDarkMode ? "bg-[#0f0e18]" : "bg-[#e2e8f0]"}
            ${
              isDarkMode
                ? "shadow shadow-white/30 hover:shadow-md hover:shadow-white/30"
                : "shadow border hover:shadow-lg"
            } 
             rounded px-4 py-4 xl:flex hidden flex-col gap-y-10 h-full duration-150 lg:w-[270px] 
           `}
    >
      {/* Categories */}
      <FilterSection
        title="Categories"
        options={categories}
        isDarkMode={isDarkMode}
      />

      {/* Brands */}
      <FilterSection title="Brands" options={brands} isDarkMode={isDarkMode} />

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
  );
};

export default XlSideBar;
