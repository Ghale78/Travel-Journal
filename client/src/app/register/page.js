'use client'
// import CustomNavbar from "@/components/navbar/page";
import {Button,Input} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

Link
const Register = () => {
  const variants = ["underlined"];
  return (
    // <div>
    // <CustomNavbar/>
    <div className="flex justify-center">
    <div className='m-5 w-100 p-5 '>
        <Input type="text"   variant={"underlined"} label="Full Name" /> <br/>
        {/* <Input type="number"  variant={"underlined"} label="PhoneNumber"/> <br/> */}
        <Input type="email"  variant={"underlined"} label="Email" /> <br/>
        <Input type="Password" variant={"underlined"} label="Password" /> <br/>
        <Input type="text" variant={"underlined"} label="Country"/><br/>

        <Button  className="justify-center" color="success" variant="shadow">
         Register
        </Button><br/>  
    Already have account ?? <Link href='login'>login</Link>
    </div>
    </div>
    // </div>
  )
}
export default Register