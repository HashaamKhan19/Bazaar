import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import React from "react";


// eslint-disable-next-line react/prop-types
const SellingProductsCard = ({ image, title, desc, price, ...props }) => {
  return (
    <div>
      <Card
        isFooterBlurred
        className="embla__slide mx-3 h-[350px] w-[250px] xs:w-[300px] sm:w-[300px] md:w-[340px] lg:w-[286px]"
      >
        <Image
          isZoomed
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover cursor-pointer"
          src={image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <h4 className="text-tiny text-white/60 capitalize font-bold">
                {title}
              </h4>
              <p className="text-white/90 font-medium text-xl capitalize">
                {desc}
              </p>
            </div>
          </div>
          <Button radius="full" color="primary" size="sm">
            {price}
          </Button>
        </CardFooter>
      </Card>
      ;
    </div>
  );
};

export default SellingProductsCard;
