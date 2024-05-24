'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./Logo.jsx";

const CustomNavbar =()=> {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        {/* <Logo />
        <p className='logo'>Travel</p> */}
      </NavbarBrand>
      <NavbarContent className="flex sm:flex gap-4 ">
        <NavbarItem>
        <Link href="" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Explore
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="#" aria-current="page">
            Contribute
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link> 
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar> 
  );
}

export default CustomNavbar