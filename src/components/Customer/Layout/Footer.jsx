import React from "react";
import logo from "../../../assets/svg/logo.svg";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { useTheme } from "../../../context/ThemeContext";

const Footer = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? "bg-[#0f0e18]" : "bg-slate-200"} mt-20 `}>
      <div className="max-w-screen-xl mx-auto px-10 pt-16 md:pt-20 pb-12">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <img src={logo} alt="logo" />

            <p
              className={`${
                isDarkMode ? "text-white/70" : "text-black/50"
              } text-sm mt-2 max-w-xs`}
            >
              Shop from us and revamp your wardrobe with trendy and stylish{" "}
              outfits. Choose from a wide range of dresses, tops, tees, <br />
              bottoms, and more.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-8 gap-y-5 flex-1 mt-10 lg:mt-0">
            <div>
              <h3 className="text-lg capitalize font-semibold mb-1">
                about us
              </h3>

              <li className="capitalize text-sm list-none mt-3">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  careers
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  our store
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  our cares
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  terms & conditions
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  privacy policy
                </a>
              </li>
            </div>

            <div>
              <h3 className="text-lg capitalize font-semibold mb-1">
                Help & Support
              </h3>

              <li className="capitalize text-sm list-none mt-3">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  help center
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  track your order
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  corporate
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  returns & refunds
                </a>
              </li>
            </div>

            <div>
              <h3 className="text-lg capitalize font-semibold mb-1">
                contact us
              </h3>

              <li className="capitalize text-sm list-none mt-3">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  70 Washington Square South, New York, NY 10012, United States
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  bazaar@gmail.com
                </a>
              </li>
              <li className="capitalize text-sm list-none mt-1">
                <a
                  className={`${
                    isDarkMode ? "text-white/70" : "text-black/50"
                  } hover:underline`}
                  href="#"
                >
                  Phone: +1 1123 456 780
                </a>
              </li>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-14">
          <p
            className={`${
              isDarkMode ? "text-white/70" : "text-black/50"
            } text-sm`}
          >
            © 2023 bazaar.dev. All rights reserved.
          </p>

          <div className="flex gap-x-4 text-lg ">
            <a className="hover:text-black/80" href="">
              <FaXTwitter />
            </a>

            <a className="hover:text-black/80" href="">
              <FaFacebook />
            </a>

            <a className="hover:text-black/80" href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
