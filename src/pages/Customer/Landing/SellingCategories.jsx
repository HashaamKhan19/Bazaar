import React from "react";
import { categoriesData } from "../../../constants";
import BestSellingCategoriesCard from "../../../components/Customer/Cards/BestSellingCategoriesCard";

const BestSellingCategories = () => {
  return (
    <div className="pb-10">
      <h2 className="text-3xl capitalize text-center font-semibold mb-4">
        Best selling categories
      </h2>
      <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-6 sm:gap-x-6 max-w-screen-xl mx-auto">
        {categoriesData.map((item) => (
          <BestSellingCategoriesCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellingCategories;
