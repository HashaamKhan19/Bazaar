import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { sellingProductsData } from "../../constants";
import { useTheme } from "../../context/ThemeContext";
import SellingProductsCard from "../../components/Cards/SellingProductsCard";

const CarouselSP = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, containScroll: "trimSnaps" },
    [Autoplay()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative max-w-screen-sm md:max-w-screen-xl mx-auto px-8 group">
      <h2 className="text-3xl capitalize text-center font-semibold mb-4 mt-10">
        Best Selling products
      </h2>

      <button className="embla__prev" onClick={scrollPrev}>
        <FaChevronLeft
          // size={40}
          className={`
          ${isDarkMode ? "bg-white/60" : "bg-black/60"}
          ${isDarkMode ? "text-black" : "text-white"}
          ${isDarkMode ? "group-hover:bg-white" : "group-hover:bg-black"}
           top-[55%] text-4xl p-2 left-[1%] rounded-full absolute cursor-pointer z-10 `}
        />
      </button>

      <div
        className="embla__viewport mx-auto overflow-scroll scrollbar-hide rounded-xl"
        ref={emblaRef}
      >
        <div className="embla__container flex whitespace-nowrap ">
          {sellingProductsData.map((product, key) => (
            <div key={key} className="w-[400px] h-[350px]">
              <SellingProductsCard
                image={product.image}
                title={product.title}
                desc={product.desc}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="embla__next" onClick={scrollNext}>
        <FaChevronRight
          // size={40}
          className={`
          ${isDarkMode ? "bg-white/60" : "bg-black/60"}
          ${isDarkMode ? "text-black" : "text-white"}
          ${isDarkMode ? "group-hover:bg-white" : "group-hover:bg-black"}
           top-[55%] text-4xl p-2 right-[1%] rounded-full absolute cursor-pointer z-10 `}
        />
      </button>
    </div>
  );
};

export default CarouselSP;
