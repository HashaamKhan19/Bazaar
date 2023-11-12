/* eslint-disable react/prop-types */
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

const SellingCategoriesCard = ({
  title,
  description,
  image,
  price,
  ...props
}) => {
  return (
    <Card
      isFooterBlurred
      className="xl:h-[400px] h-[350px] lg:max-w-sm max-w-lg"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white/90 font-medium text-xl">{title}</h4>
        <p className="text-tiny text-white/60 capitalize font-bold">
          {description}
        </p>
      </CardHeader>
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
            <p className="text-base text-white/60 capitalize">{price}</p>
          </div>
        </div>
        <Button radius="full" size="sm" className="bg-primary-600 text-white">
          Shop Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SellingCategoriesCard;
