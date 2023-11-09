import { React, useState } from 'react'
import Logo from '../../assets/svg/logo.svg'
import { useTheme } from "../../context/ThemeContext";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuItem, NavbarMenu, NavbarMenuToggle, Input, Button, Chip, Switch } from "@nextui-org/react"
import { FaSearch, FaInstagram, FaFacebook, FaTwitter, FaChevronRight } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { BsArrowRight, BsHandbag, BsMoon, BsSun } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";


const Header = () => {
    const { toggleTheme, isDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const menuItems = [
        { text: 'Home', icon: <AiOutlineHome size={20} /> },
        { text: 'Products', icon: <BsHandbag size={18} /> },
        { text: 'Vendor', icon: <AiOutlineUser size={18} /> },
        { text: 'Categories', icon: <BiCategory size={18} /> },
    ]


    return (
        <div className='mb-4 md:mb-0'>
            <div className='flex justify-between items-center bg-primary px-5 py-2'>
                <div className='text-white sm:flex items-center gap-x-3 hidden'>
                    <Chip size='sm' color='danger' className='text-xs'>
                        SALE
                    </Chip>
                    <p>
                        Free Shipping
                    </p>
                </div>


                <div className='text-white flex gap-x-3 text-lg'>
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


                <div className='text-white '>
                    <a href="#">Contact Us</a>
                </div>
            </div>

            <Navbar maxWidth='xl' onMenuOpenChange={setIsMenuOpen} className='bg-transparent mt-4'>
                <NavbarBrand>
                    <a href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                </NavbarBrand>

                {/* Input field */}
                <NavbarContent className='relative -mr-11 sm:-mr-0 hidden sm:flex'>
                    <Input
                        maxWidth='full'
                        placeholder='Search for a product ....'
                        radius='full'
                        className={`${isDarkMode ? 'border-none' : 'border-2'} bg-transparent rounded-full`}
                        startContent={<FaSearch size={18} className='mr-1' />}
                    />

                    <button className='absolute right-1 bg-primary p-2 rounded-full text-white'>
                        <BsArrowRight />
                    </button>
                </NavbarContent>

                {/* BTNs: User, Store, DarkMode */}
                <NavbarContent justify='end' className='hidden sm:flex'>
                    <Switch
                        onClick={toggleTheme}
                        startContent={<BsSun size={16} />}
                        endContent={<BsMoon size={16} />}
                    />

                    <button className={`cursor-pointer p-2 rounded-full -mr-6 -ml-4 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-primary-100'} `}>
                        <AiOutlineUser size={24} />
                    </button>

                    <button className={`cursor-pointer p-2 rounded-full  ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-primary-100'} bg`}>
                        <RiShoppingBagLine size={24} />
                    </button>
                </NavbarContent>


                {/* hamburger */}
                <NavbarContent justify='end' className='sm:hidden'>
                    {/* searchBar */}
                    <Button onPress={onOpen} isIconOnly className='rounded-full p-0 bg-transparent'>
                        <FiSearch size={22} />
                    </Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'
                        className={`${isDarkMode ? 'bg-[#0f0e18]' : 'bg-slate-200'} font-Poppins`}
                    >
                        <ModalContent>
                            {() => (
                                <div>
                                    <ModalHeader className="flex flex-col gap-1">
                                        {/* title goes here */}
                                    </ModalHeader>
                                    <ModalBody className='relative'>
                                        {/* Input field */}
                                        <Input
                                            maxWidth='full'
                                            placeholder='Search for a product ....'
                                            radius='full'
                                            className={`
                                                ${isDarkMode ? 'border-none' : 'border-2'}
                                                ${isDarkMode ? "dark" : "light"}
                                                h-full font-normal text-default-500
                                                text-sm
                                                rounded-full`}
                                            startContent={<FaSearch size={18} className='mr-1' />}
                                        />

                                        <button className={`${isDarkMode ? 'top-3' : 'top-[.9rem]'} ${isDarkMode ? 'right-7' : 'right-[1.80rem]'} absolute bg-primary p-2 rounded-full text-white`}>
                                            <BsArrowRight />
                                        </button>
                                    </ModalBody>
                                    <ModalFooter>

                                    </ModalFooter>
                                </div>
                            )}
                        </ModalContent>
                    </Modal>


                    {/* DarkMode Toggle */}
                    <Switch
                        onClick={toggleTheme}
                        startContent={<BsSun size={16} />}
                        endContent={<BsMoon size={16} />}
                        className='-mr-2 -ml-1'
                    />

                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />

                    <NavbarMenu className={`mt-16 ${isDarkMode ? 'bg-black' : ''}`}>

                        {/* links */}
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color='foreground'
                                    className={`
                                                ${isDarkMode ? 'bg-[#0f0e18]' : 'bg-primary-200'} 
                                                ${isDarkMode ? 'text-primary-200' : ''} 
                                                w-full mb-2 font-Poppins rounded pl-4 py-2 flex items-center gap-x-2
                                    `}
                                    href="#"
                                    size="lg"
                                >
                                    {item.icon}
                                    {item.text}
                                </Link>

                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </NavbarContent>
            </Navbar>

            <Navbar maxWidth='xl' className='bg-transparent hidden sm:flex'>
                <NavbarBrand>
                    <Button color='primary' variant='flat' className=''>
                        <BiCategory size={18} />
                        Categories
                        <p className='ml-14'>
                            <FaChevronRight />
                        </p>
                    </Button>
                </NavbarBrand>


                <NavbarContent justify='end'>
                    <NavbarItem>
                        <Link size='sm' href='#'>
                            Home
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link size='sm' href='#' className='mx-3'>
                            Products
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link size='sm' href='#'>
                            Vendor
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default Header