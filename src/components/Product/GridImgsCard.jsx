import { Button } from "@nextui-org/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import StarRatingComponent from "../Customer/Rating/StarRatingComponent";

// eslint-disable-next-line react/prop-types
const GridImgsCard = ({ image, title, desc, price, ...props }) => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="">
      <div className="h-[300px] w-full">
        <img
          src={image}
          alt="image"
          className={`${isDarkMode ? "bg-[#0f0e18]" : "bg-[#e3e9ef]"}
          ${isDarkMode ? "opacity-90" : "opacity-100"}
            w-full h-full object-cover cursor-pointer`}
        />
      </div>
      {/* for text  */}
      <div className="flex items-end justify-between text-left capitalize px-3 pt-3 py-5">
        <div>
          <h3
            className={`
          ${isDarkMode ? "text-white" : "text-black"}
          text-sm font-medium mb-1`}
          >
            {title}
          </h3>
          <div className="-ml-1">
            <StarRatingComponent iconsCount={5} size={20} transition={true} />
          </div>
          <p className="text-sm text-[#de4458] mt-2 font-medium">{price}</p>
        </div>

        <div className="mb-1">
          <Button
            isIconOnly
            variant="solid"
            color="primary"
            size="sm"
            radius="sm"
          >
            <FaPlus size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GridImgsCard;
