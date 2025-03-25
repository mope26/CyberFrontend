import React from "react";
import NavBar from "../component/nav";
import Footer from "../component/footer";
import AboutImage from "../assets/images/about image.png";
import Shopping from "../assets/images/Services.png";
import Money from "../assets/images/Asset 1.png";
import Bag from "../assets/images/Servicesw.png";
import Coin from "../assets/images/Services2.png";
import Twitter from '../assets/images/Twitter.png';
import Insta from '../assets/images/instagram.png';
import LinkedIn from '../assets/images/Linkedin.png';
import Man1 from "../assets/images/Frame 874.png";
import Woman from "../assets/images/Frame 875.png";
import Man2 from "../assets/images/Frame 876.png";
import Delivery from "../assets/images/delivery.png";
import Customer from "../assets/images/customer.png";
import Guarantee from "../assets/images/money.png"

function About(){
return(
<div>
    <NavBar/>
  
        <div className="flex flex-col md:flex-row gap-6  ">
            <div className=" p-10 gap-5  m-15  py-30 ">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <br/>
            <p className="text-base">Launched in 2015, Cyber is an Africa  premier online shopping
            <br/> 
            marketplace with an active presense in Nigeria. Supported <br/>
            by wide range of tailored marketing,data and service solutions,<br/>
            Cyber has 10,600 sellers and 300 brands and serves 3  millions customers 
            <br/>across the region.
            <br/>
            <br/>
            Cyber has more than 1 Million products to offer, growing at a 
            <br/>very fast. Cyber offers a diverse assotment in
            categories <br/>ranging  from consumer.</p>
                </div>
            
             <div className="w-[62%] h-full pb-15 ">
                <img src={AboutImage} alt=""className="object-cover w-full h-full"  />   
             </div>
        </div>

        <div className="flex flex-col p-10 gap-8 md:flex-row justify-center desc_icon">
  <div className="group border border-gray-300 p-6 flex flex-col items-center text-center w-60 transition-all duration-300 hover:bg-[#DB4444] hover:text-white">
    <img src={Shopping} alt="" className="mb-4 rounded-full border border-gray-400 p-1 bg-black transition-all duration-300 group-hover:invert" />
    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">10.5K</h3>
    <p className="text-sm group-hover:text-white">Sellers active on site</p>
  </div>

  <div className="group border border-gray-300 p-6 flex flex-col items-center text-center w-60 transition-all duration-300 hover:bg-[#DB4444] hover:text-white">
    <img src={Money} alt="" className="mb-3 rounded-full border border-gray-400 bg-black transition-all duration-300 group-hover:invert" />
    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">33K</h3>
    <p className="text-sm group-hover:text-white">Monthly Product Sale</p>
  </div>

  <div className="group border border-gray-300 p-6 flex flex-col items-center text-center w-60 transition-all duration-300 hover:bg-[#DB4444] hover:text-white">
    <img src={Bag} alt="" className="mb-3 rounded-full border border-gray-400 bg-black transition-all duration-300 group-hover:invert" />
    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">45.5K</h3>
    <p className="text-sm group-hover:text-white">Customers active on site</p>
  </div>

  <div className="group border border-gray-300 p-6 flex flex-col items-center text-center w-60 transition-all duration-300 hover:bg-[#DB4444] hover:text-white">
    <img src={Coin} alt="" className="mb-3 rounded-full border border-gray-400 bg-black transition-all duration-300 group-hover:invert" />
    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">25K</h3>
    <p className="text-sm group-hover:text-white">Annual gross sale on our site</p>
  </div>
</div>

            <div className="flex flex-col p-10 gap-6 md:flex-row  justify-center">
            <div className=" "> 
                <img src={Man1} alt="" />
                <h5 className="font-bold text-l">Tom Cruise</h5>
                <p>Founder & Chairman</p>
                <div className="flex  gap-3">
                          <img src={Twitter} alt="" />
                          <img src={Insta} alt="" />
                          <img src={LinkedIn} alt="" />
                </div>
            </div>
            <div>
                <img src={Woman} alt="" />
                <h5 className="font-bold text-l">Emma Watson</h5>
                <p>Managing Director</p>
                <div className="flex gap-3 ">
                          <img src={Twitter} alt="" />
                          <img src={Insta} alt="" />
                          <img src={LinkedIn} alt="" />
            </div>
            </div>
            <div>
                <img src={Man2} alt="" />
                <h5 className="font-bold text-l">Will Smith</h5>
                <p> Product Designer</p>
                <div className="flex  gap-3">
                          <img src={Twitter} alt="" />
                          <img src={Insta} alt="" />
                          <img src={LinkedIn} alt="" />
            </div>
            </div>
           
    </div>
    <div className="flex flex-col p-10 gap-10 md:flex-row  justify-center">
    
     <div className="flex flex-col items-center text-center">
        <img src={Delivery} alt="" className=""/>
        <h3 className="font-bold">FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
  </div>
        <div className="flex flex-col items-center text-center">
            <img src={Customer} alt=""/>
            <h3 className="font-bold">24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col items-center text-center"> 
          <img src={Guarantee} alt=""/>
            <h3 className="font-bold">MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>

        </div>
    </div>
    <Footer/>
</div>
   
)
}
export  default About;