import React from "react";
import FeatuedCard from "../../components/Customer/Cards/FeatuedCard";
import { featuredData } from "../../constants/landingPageData";

const Featured = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 mt-10 pb-10">
      <h2 className="text-[28px] sm:text-3xl capitalize text-center font-semibold mb-4">
        Featured products
      </h2>

      <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 gap-x-0 gap-y-5 lg:gap-y-0 lg:gap-x-4 xl:gap-x-3">
        {featuredData.map((item) => (
          <FeatuedCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            btn={item.btn}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
