/* eslint-disable react/prop-types */
import { Checkbox } from "@nextui-org/react";
import React from "react";

const FilterSection = ({ title, options, isDarkMode }) => {
  return (
    <div>
      <h2 className="mb-2">{title}</h2>
      <div className="flex flex-col gap-y-2">
        {options.map((option, index) => (
          <Checkbox key={index} defaultSelected size="sm">
            <span
              className={`${isDarkMode ? "text-white" : "text-black"} ${
                isDarkMode ? "text-white/60" : "text-black/50"
              }`}
            >
              {option}
            </span>
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
