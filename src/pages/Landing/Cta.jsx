import React from "react";
import { winterCloths } from "../../assets/imgsData.js";
import GenericButton from "../../components/Customer/Button/GenericButton.jsx";

const Cta = () => {
  return (
    <div className="mt-20 mb-3 h-[370px] w-full relative">
      <img src={winterCloths} className="absolute h-full w-full object-cover" />

      <div className="absolute h-full w-full bg-black/60"></div>

      <div className="absolute text-white capitalize text-center flex flex-col justify-center  w-full h-full">
        <h3 className="text-2xl sm:text-3xl">
          Extra <span className="text-red-600">30% Off</span> Online
        </h3>

        <h2 className="text-4xl sm:text-5xl font-semibold">
          Summer Season Sale
        </h2>

        <p className="text-lg">Free shipping on orders over $99</p>

        <div>
          <GenericButton
            color={"primary"}
            className={"capitalize px-7 rounded mt-5"}
            text={"shop now"}
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
