import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import {
  mensFashion,
  womensFashion,
  gadjets,
  cosmetics,
} from "../../assets/imgsData.js";
import SellingCategoriesCard from "../../components/Card/SellingCategoriesCard.jsx";

const BestSellingCategories = () => {
  const categoriesData = [
    {
      id: 1,
      title: "Men Fashion",
      description: "Always dress well, keep it simple but significant",
      image: mensFashion,
      price: "starting at $29",
    },
    {
      id: 2,
      title: "Women Fashion",
      description:
        "If shopping doesn't make you happy, then you're in the wrong shop",
      image: womensFashion,
      price: "25% off on first two products",
    },
    {
      id: 3,
      title: "Gadjets",
      description: "dreams about the future are always filled with the gadjets",
      image: gadjets,
      price: "Warrenty confirmed",
    },
    {
      id: 4,
      title: "Cosmetics",
      description: "Women!, Escape the reality",
      image: cosmetics,
      price: "Buy one get one free",
    },
  ];

  return (
    <div className="pb-10">
      <h2 className="text-3xl capitalize text-center font-semibold mb-4">
        best selling categories
      </h2>
      <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-6 sm:gap-x-6 max-w-screen-xl mx-auto">
        {categoriesData.map((item) => (
          <SellingCategoriesCard
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
