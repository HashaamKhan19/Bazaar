import React from "react";
import ProductListingsCard from "../../components/Product/ProductListingsCard";
import { gridImgsData } from "../../constants/productPageData";
import { useTheme } from "../../context/ThemeContext";
import { Pagination } from "@nextui-org/react";

const ProductListings = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="max-w-screen-xl mx-auto flex-[3]">
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-6 sm:gap-4 md:gap-6 lg:gap-6">
        {gridImgsData.map((product, id) => (
          <div
            key={id}
            className={`cursor-pointer duration-150
                        ${
                          isDarkMode
                            ? "shadow shadow-white/30 hover:shadow-md hover:shadow-white/30"
                            : "shadow border hover:shadow-lg"
                        } 
                        flex justify-center`}
          >
            <ProductListingsCard
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center lg:justify-end mt-6">
        <Pagination
          showShadow
          showControls
          total={3}
          initialPage={1}
          radius="lg"
          size="md"
          variant="flat"
        />
      </div>
    </div>
  );
};

export default ProductListings;
