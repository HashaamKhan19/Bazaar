import React from "react";
import { useTheme } from "../../../context/ThemeContext";

// eslint-disable-next-line react/prop-types
const BestSellingProductsCard = ({ image, title, desc, price, ...props }) => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="">
      <div className="embla__slide mx-3 h-[300px] w-[290px]">
        <img
          src={image}
          alt="image"
          className={`${isDarkMode ? "bg-[#0f0e18]" : "bg-[#e3e9ef]"}
          ${isDarkMode ? "opacity-90" : "opacity-100"}
            w-full h-full object-cover cursor-pointer`}
        />
      </div>

      {/* for text  */}
      <div className="flex flex-col text-center capitalize mt-2 ">
        <h3 className="text-black/40 text-sm">{title}</h3>
        <p className="font-semibold">{desc}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default BestSellingProductsCard;
