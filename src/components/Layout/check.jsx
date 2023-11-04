import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { FiSearch, FiSun } from "react-icons/fi";

const Check = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} disableAnimation={true} isBordered className='bg-transparent'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Open menu" : "Close menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>


            <button>
                <FiSearch size={20} />
            </button>
            <NavbarMenu className=''>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color='primary'
                            className="w-full font-Poppins"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default Check