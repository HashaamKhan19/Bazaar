import React from "react";
import Logo from "../../assets/svg/logo.svg";
import { useTheme } from "../../context/ThemeContext";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import {
  FaSearch,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";
import { BiCategory, BiSun } from "react-icons/bi";
import { BsArrowRight, BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div>
      <div className="flex justify-between items-center bg-primary px-5 py-2">
        <div className="text-white flex items-center gap-x-3">
          <p className="text-xs font-semibold bg-red-600 rounded-full px-3 py-[.1rem]">
            SALE
          </p>
          <p>Free Shipping</p>
        </div>

        <div className="text-white flex gap-x-3 text-lg">
          <a href="#">
            <FaTwitter />
          </a>

          <a href="#">
            <FaFacebook />
          </a>

          <a href="#">
            <FaInstagram />
          </a>
        </div>

        <div className="text-white ">
          <a href="#">Contact Us</a>
        </div>
      </div>

      <Navbar maxWidth="xl" className="bg-transparent mt-4">
        <NavbarBrand>
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </NavbarBrand>

        <NavbarContent className="relative">
          <Input
            maxWidth="full"
            placeholder="Search for a product ...."
            radius="full"
            className={`bg-transparent rounded-full
                ${isDarkMode ? "" : "border border-gray-200"}
            `}
            startContent={
              <FaSearch size={18} className="mr-1" color="#8c8c8c" />
            }
          />

          <button className="absolute right-1 bg-primary p-2 rounded-full text-white">
            <BsArrowRight />
          </button>
        </NavbarContent>

        <NavbarContent justify="end">
          <Button radius="full" isIconOnly>
            <AiOutlineUser size={16} />
          </Button>

          <Button radius="full" isIconOnly>
            <BsHandbag size={16} />
          </Button>

          <Button radius="full" isIconOnly onClick={toggleTheme}>
            {isDarkMode ? <BiSun size={16} /> : <FiMoon size={16} />}
          </Button>
        </NavbarContent>
      </Navbar>

      <Navbar maxWidth="xl" className="bg-transparent">
        <NavbarBrand>
          <Button color="primary" variant="flat" className="">
            <BiCategory size={18} />
            Categories
            <p className="ml-14">
              <FaChevronRight />
            </p>
          </Button>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <Link size="sm" href="#">
              Home
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link size="sm" href="#" className="mx-3">
              Products
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link size="sm" href="#">
              Vendor
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Header;
