/* eslint-disable react/prop-types */
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const BestSellingCategoriesCard = ({
  title,
  description,
  image,
  price,
  className,
  ...props
}) => {
  return (
    <div className="">
      <Card
        isFooterBlurred
        radius="none"
        className="embla__slide mx-3 h-[300px] lg:h-[270px] xl:h-[300px] w-[250px] min-[400px]:w-[320px] min-[360px]:w-[295px] min-[410px]:w-[320px] lg:w-[310px] xl:w-[310px] cursor-pointer rounded-md"
      >
        <Image
          isZoomed
          radius="none"
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover cursor-pointer rounded-md"
          src={image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10">
          <p className="text-center w-full text-white/60 capitalize">{price}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BestSellingCategoriesCard;
