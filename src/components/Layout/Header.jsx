import React from 'react'
import Logo from '../../assets/svg/logo.svg'
import { useTheme } from "../../context/ThemeContext";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react"
import { FaSearch, FaChevronDown, FaStore, FaUser } from 'react-icons/fa';
import { GiMoon ,GiSun} from "react-icons/gi";


const Header = () => {
    const { toggleTheme } = useTheme();


    return (
        <Navbar maxWidth='xl' className=''>
            <NavbarBrand>
                <img src={Logo} alt="logo" />
            </NavbarBrand>

            <NavbarContent>
                <Input
                    maxWidth='full'
                    placeholder='Searching for ....'
                    radius='full'
                    className='bg-transparent rounded-full -mr-10'
                    startContent={<FaSearch className='mr-1' />}
                />
            </NavbarContent>


            <NavbarContent justify='end'>
                <Button radius='full' isIconOnly>
                    <FaUser />
                </Button>

                <Button radius='full' isIconOnly>
                    <FaStore />
                </Button>


                <Button radius='full' isIconOnly onClick={toggleTheme}>
                    <GiMoon />
                </Button>
            </NavbarContent>
        </Navbar>
    )
}

export default Header