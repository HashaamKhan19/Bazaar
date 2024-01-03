import { React, useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import { useTheme } from "../../context/ThemeContext";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
  Chip,
} from "@nextui-org/react";
import {
  FaSearch,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaChevronRight,
  FaUser,
} from "react-icons/fa";
import { BiCategory, BiSun } from "react-icons/bi";
import { BsArrowRight, BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";

const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Products", "Vendor"];

  return (
    <div className="mb-4 md:mb-0">
      <div className="flex justify-between items-center bg-primary px-5 py-2">
        <div className="text-white sm:flex items-center gap-x-3 hidden">
          <Chip size="sm" color="danger" className="text-xs">
            SALE
          </Chip>
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

      <Navbar
        maxWidth="xl"
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent mt-4"
      >
        <NavbarBrand>
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </NavbarBrand>

        <NavbarContent className="relative -mr-11 sm:-mr-0 hidden xs:flex">
          <Input
            maxWidth="full"
            placeholder="Search for a product ...."
            radius="full"
            className={`bg-transparent rounded-full
            ${isDarkMode ? "" : "border-1"}
            `}
            startContent={
              <FaSearch size={18} className="mr-1" color="#8e8e8e" />
            }
          />

          <button className="absolute right-1 bg-primary p-2 rounded-full text-white">
            <BsArrowRight />
          </button>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex">
          <Button radius="full" isIconOnly>
            <AiOutlineUser size={16} />
          </Button>

          <Button radius="full" isIconOnly>
            <BsHandbag size={16} />
          </Button>

          <Button radius="full" isIconOnly onClick={toggleTheme}>
            {!isDarkMode ? <FiMoon size={16} /> : <BiSun size={16} />}
          </Button>
        </NavbarContent>

        <NavbarContent justify="end" className="sm:hidden">
          {/* hamburger */}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarMenu className="mt-16">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link color="foreground" className="w-full" href="#" size="lg">
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarContent>
      </Navbar>

      <Navbar maxWidth="xl" className="bg-transparent hidden sm:flex">
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
