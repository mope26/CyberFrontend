import React from "react";
import Sideimage from '../assets/images/Side Image.png';
import NavBar from "../component/nav";
import Footer from "../component/footer";

function Signup(){
    return(
        <>
        <NavBar/>
        <div className="py-15 h-full w-full flex items-center justify-center">
            <div className="h-full w-[60%]">
                <img src={Sideimage} alt="" className="object-cover w-full h-4/5" />
            </div>
            <div className="w-[40%] flex items-center justify-center p-8">
                <form action=" " className="flex flex-col gap-4 w-[65%] pb-[16rem]">
                    <h1 className="text-4xl">Create an acount</h1>
                    <p className="text-sm">Enter  your details below</p>
                    <input type="text"placeholder="Name" className="w-full border-b border-gray-300 outline-none p-2" />
                    <input type="text"placeholder="Email" className="w-full border-b border-gray-300 outline-none p-2" />
                    <input type="text"placeholder="Phone Number" className="w-full border-b border-gray-300 outline-none p-2"/>
                    <input type="text"placeholder="Password" className="w-full border-b border-gray-300 outline-none p-2" />
                    <button className="p-2 bg-red-400 text-white rounded-md">Create Acount</button>
                    <p className="text-center text-xs">Already have account? <span>Log in</span></p>
                </form>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}
export  default Signup;