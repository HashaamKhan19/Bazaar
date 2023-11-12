import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { shoes, bag } from "../../assets/imgsData.js";
import { FaMoneyBill, FaTruckFast } from "react-icons/fa6";
import { BiTimer } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Button } from "@nextui-org/react";

const HeroSection = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="">
      <div
        className={`${
          isDarkMode ? "bg-[#0f0e18]" : "bg-slate-200"
        }  md:h-[50%] h-[70%]`}
      >
        <div className="max-w-screen-xl mx-auto px-8 flex items-center flex-col md:flex-row h-full">
          {/* TEXT-SECTION */}
          <div className="flex-1 text-center md:text-left mt-10 md:-mt-10">
            <h1 className="capitalize sm:text-5xl text-4xl font-semibold">
              Fashionable <br /> collection
            </h1>

            <p className="capitalize my-2 sm:my-4 text-xs sm:text-base">
              get free shipping on all <br className="md:hidden" /> orders over
              $88.00.
            </p>

            <Button color="primary" className="px-7 rounded">
              Shop Now
            </Button>
          </div>

          {/* IMG-SECTION */}
          <div className="flex-1 flex justify-end">
            <img src={bag} alt="ShoesImg" className="" />
          </div>
        </div>
      </div>

      {/* ADVANTAGES */}
      <div className="max-w-screen-xl mx-auto px-8 my-16">
        <div
          className={`${
            isDarkMode ? "bg-[#0f0e18]" : "bg-slate-200"
          } cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 py-6 px-14 border border-primary-300 duration-300 shadow-md shadow-primary-300 hover:shadow-lg hover:shadow-primary-400 rounded`}
        >
          <div className="flex lg:justify-center items-center gap-x-2 w-full ">
            <FaTruckFast size={30} />
            <div>
              <h2 className="capitalize">fast delivery</h2>
              <p className="text-xs -mt-1 text-slate-500">Start from $10</p>
            </div>
          </div>

          <div className="flex lg:justify-center items-center gap-x-2 w-full mt-4 sm:mt-0 lg:mt-0">
            <FaMoneyBill size={30} />
            <div>
              <h2 className="capitalize">Money Guarantee</h2>
              <p className="text-xs -mt-1 text-slate-500">7 Days Back</p>
            </div>
          </div>

          <div className="flex lg:justify-center items-center gap-x-2 w-full mt-4 lg:mt-0">
            <BiTimer size={30} />
            <div>
              <h2 className="capitalize">365 Days</h2>
              <p className="text-xs -mt-1 text-slate-500">For free return</p>
            </div>
          </div>

          <div className="flex lg:justify-center items-center gap-x-2 w-full mt-4 lg:mt-0">
            <RiSecurePaymentFill size={30} />
            <div>
              <h2 className="capitalize">Payment</h2>
              <p className="text-xs -mt-1 text-slate-500">Secure system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
