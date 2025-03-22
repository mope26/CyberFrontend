/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sideimage from '../assets/images/Side Image.png';
import NavBar from "../component/nav";
import Footer from "../component/footer";
import axios from "axios";
function Login(){
  const [formData, setformData]= useState({
    loginIdentifier:"",
    password:"",
  })

  const handleubmit = async (e)=>{
    e.preventDefault();

    try{
        const response= await axios.post(
            "http://localhost:8080/Login",formData,
            {
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                },
            }
        )
    }catch(err){
        console.log(err);
    }

  }

    return(
        <>
        <NavBar/>
        <div className="py-8 h-[60rem] w-full flex  justify-center ">
            <div className="h-full w-[60%]">
                <img src={Sideimage} alt="" className="object-cover w-full h-4/5" />
            </div>
            <div className="w-[40%] flex items-center justify-center p-8">

                <form action=" " className="flex flex-col gap-4 w-[50%] pb-[16rem]">
                    <h1 className="text-4xl">Log in to Cyber</h1>
                    <p className="text-sm">Enter  your details below</p>
                    <input type="text"placeholder="Email or Phone Number" className="w-full border-b border-gray-300 outline-none p-2" name="loginIdentifier"/>
                    <input type="text"placeholder="Password" className="w-full border-b border-gray-300 outline-none p-2" name="password"/>
                    <div className="flex items-center justify-between">
                        <button className="p-2 bg-red-400 text-white rounded-md w-[40%]">Log in</button>
                        <p>Forgot Password?</p>
                    </div>
                </form>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}
export default Login