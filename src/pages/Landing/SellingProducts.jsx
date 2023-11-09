import React, { useRef } from "react";
import { sellingProductsData } from "../../constants";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const SellingProductsNew = () => {
  const slideRef = useRef(null);

  const scrollLeft = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft += 430;
    }
  };

  const scrollRight = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft -= 430;
    }
  };

  return (
    <div className="relative">
      <h2 className="text-3xl capitalize text-center font-semibold mb-4 mt-10">
        best Selling products
      </h2>

      <div
        ref={slideRef}
        className="px-8 flex max-w-screen-xl mx-auto overflow-scroll scroll-smooth scrollbar-hide rounded-xl"
      >
        <button onClick={scrollLeft}>
          <FaChevronRight
            size={45}
            className="bg-black text-white top-[50%] right-[15%] p-2 rounded-full absolute cursor-pointer z-10 "
          />
        </button>

        {/* // index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground" */}
        <div className="flex gap-x-3 whitespace-nowrap">
          {sellingProductsData.map((product, key) => (
            <div key={key} className={``}>
              <Card isFooterBlurred className="w-[400px] h-[350px]">
                <Image
                  isZoomed
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover cursor-pointer"
                  src={product.image}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <h4 className="text-tiny text-white/60 capitalize font-bold">
                        {product.title}
                      </h4>
                      <p className="text-white/90 font-medium text-xl capitalize">
                        {product.desc}
                      </p>
                    </div>
                  </div>
                  <Button radius="full" color="primary" size="sm">
                    {product.price}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <button onClick={scrollRight}>
          <FaChevronLeft
            size={45}
            className="bg-black text-white top-[50%] left-[15%] p-2 rounded-full absolute cursor-pointer z-10"
          />
        </button>
      </div>
    </div>
  );
};

export default SellingProductsNew;
