/* eslint-disable react/prop-types */
import React from "react";

const FeatuedCard = ({ image, title, description, btn, ...props }) => {
  return (
    <div className="relative flex h-[250px] w-[250px] min-[360px]:w-[295px] min-[410px]:w-[320px] md:w-full lg:w-[310px] lg:h-[220px] xl:w-[400px] cursor-pointer rounded-md overflow-hidden">
      <div className="">
        <img
          src={image}
          alt="image"
          className="absolute w-full h-full object-cover hover:scale-110 duration-300"
        />
      </div>

      <div className="relative z-10 top-[20%] left-10 h-fit text-white">
        <h3 className="capitalize text-2xl font-semibold">{title}</h3>
        <p className="capitalize text-sm">{description}</p>
        <div className="h-1 w-20 my-2 bg-white rounded-full"></div>
        <div>
          <button className="uppercase text-sm">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default FeatuedCard;
