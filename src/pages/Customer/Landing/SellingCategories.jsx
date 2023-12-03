import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import BestSellingCategoriesCard from "../../../components/Customer/Cards/BestSellingCategoriesCard";
import { categoriesData } from "../../../constants";

const BestSellingCategories = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="embla pb-10 max-w-screen-xl mx-auto px-8">
      <h2 className="text-3xl capitalize text-center font-semibold mb-4">
        Best selling categories
      </h2>
      <div
        className="embla__viewport mx-auto overflow-scroll scrollbar-hide rounded-md"
        ref={emblaRef}
      >
        <div className="embla__container flex whitespace-nowrap">
          {categoriesData.map((item, key) => (
            <BestSellingCategoriesCard
              key={key}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingCategories;
