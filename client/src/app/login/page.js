'use client'
import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, user} from "@nextui-org/react";
import { useFormik } from 'formik';
// import toast from "react-hot-toast";

const login =()=> {
  const [selected, setSelected] = React.useState("login");
  const formik = useFormik({
    initialValues: {
      Name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      registerUser(values)
    },
  });
  const registerUser = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:4000/register', requestOptions);
    }
    
  return (
    <div className=" flex justify-center p-20 px" >
      <Card className=" flex self-center max-w-full w-[340px] ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            >
            <Tab key="login" title="Login">
              <form className="flex flex-col  gap-4 " >
                <Input isRequired
                 label="Email"
                 onChange={formik.handleChange}
                 value={formik.values.Email}
                  placeholder="Enter your Email" type="email" />
                  
                <Input
                  isRequired
                  onChange={formik.handleChange}
                 value={formik.values.Password}
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button  type="submit" fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
 
            <Tab key="sign-up" title="Sign up">
              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 ">
              
              <Input
                 name="Name"
                 onChange={formik.handleChange}
                 value={formik.values.Name}
                  isRequired label="Name" 
                  placeholder="Enter your Name " />
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                isRequired label="Email" placeholder=" Enter your Email" type="email" />
               <Input
                   name="password"
                   onChange={formik.handleChange}
                   value={formik.values.password}
                  isRequired
                  label="Password"
                  placeholder="Enter your Password "
                  type="password"
                />
              <Input
               name="Country"
               onChange={formik.handleChange}
               value={formik.values.country}
              isRequired label="Country" placeholder=" Enter your Country"  />

                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
            
                  <Button type="submit" fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
export default login