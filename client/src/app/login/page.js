'use client'
import React from "react";
import Link from 'next/link';
import {Button,} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import sidebar from "@/component/sidebar/page";


const login =()=> {
  const variants = ["underlined"];

  return (
    <div className="flex justify-center"> 
    <div>
      {variants.map((variant) => (
          <div className='   w-72 p-4  '>
          <Input type="email" variant={"underlined"} label="Email"/><br/>
          <Input type="password" variant={"underlined"} label="Password"/><br/>
          <Button color="success">
        Login
      </Button> <br/>
      Don't have account ? <Link href='register'>register</Link> 
        </div> 
      ))}  
    </div>

    </div>  
  );
}
export default login  
 