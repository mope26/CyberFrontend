import React, { useState } from "react";
import Sideimage from '../assets/images/Side Image.png';
import NavBar from "../component/nav";
import Footer from "../component/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){
    const [message, setMessage] = useState("")
    const [formData, setformData]= useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: ""
      })
      const navigate = useNavigate();
      const handleChange= (e) =>{
        const handleUpdate={...formData,[e.target.name]: e.target.value};
        setformData(handleUpdate)
      }
      const handlesubmit =  async (e) =>{
        e.preventDefault()

        try{
            const response = await axios.post(
                "http://localhost:8080/SignUp",formData,
                
                {
                    headers : {
                        "content-type":"application/json",
                        Accept:"application/json"
                    }
                }
            )

            const data = response.data
            if(data.message === "Email already in use"){
                setMessage(data.message)
            }else{
                navigate("/login")
            }

        }catch(err){
            console.log(err)
        }
      }
      
    return(
        <>
        <NavBar/>
        <div className="py-15 h-full w-full flex items-center justify-center">
            <div className="h-full w-[60%]">
                <img src={Sideimage} alt="" className="object-cover w-full h-4/5" />
            </div>
            <div className="w-[40%] flex items-center justify-center p-8">
                <form action=""  className="flex flex-col gap-4 w-[65%] pb-[16rem]">
                    <h1 className="text-4xl">Create an acount</h1>
                    <p className="text-sm">Enter  your details below</p>
                    <input type="text"placeholder="Name" className="w-full border-b border-gray-300 outline-none p-2"name="name"  id="name" onChange={handleChange}/>
                    <input type="text"placeholder="Email" className="w-full border-b border-gray-300 outline-none p-2" name="email"  onChange={handleChange}/>
                    <input type="text"placeholder="Phone Number" className="w-full border-b border-gray-300 outline-none p-2" name="phoneNumber" onChange={handleChange}/>
                    <input type="text"placeholder="Password" className="w-full border-b border-gray-300 outline-none p-2" name="password" onChange={handleChange} />
                    <button className="p-2 bg-red-400 text-white rounded-md" onClick={handlesubmit} >Create Acount</button>
                    <p className="text-sm text-red-800 text-center">
                        {message && message}
                    </p>
                    <p className="text-center text-xs">Already have account? <span>Log in</span></p>
                </form>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}
export  default Signup;