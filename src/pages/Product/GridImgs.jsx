import React from "react";
import GridImgsCard from "../../components/Product/GridImgsCard";
import { gridImgsData } from "../../constants/productPageData";
import { useTheme } from "../../context/ThemeContext";

const GridImgs = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="max-w-screen-xl px-8 mx-auto">
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-4 lg:gap-6 xl:gap-6 xl:grid-cols-4">
        {gridImgsData.map((product, id) => (
          <div
            key={id}
            className={`max-w-[300px] cursor-pointer duration-150
                        ${
                          isDarkMode
                            ? "shadow shadow-white/30 hover:shadow-md hover:shadow-white/30"
                            : "shadow border hover:shadow-lg"
                        } 
                        flex justify-center`}
          >
            <GridImgsCard
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridImgs;
