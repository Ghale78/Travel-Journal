'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

const CustomNavbar =()=> {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        {/* <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>
      <NavbarContent className="flex sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            H
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            M
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            L
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link> 
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="register" variant="flat">
            Sign up 
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar> 
  );
}

export default CustomNavbar