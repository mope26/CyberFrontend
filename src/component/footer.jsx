import React from "react";
import QrCode from '../assets/images/Qr Code.png'
import Appstore from '../assets/images/AppStore.png'
import Googleplay from '../assets/images/GooglePlay.png'
import Fb from '../assets/images/Icon-Facebook.png'
import X from '../assets/images/Icon-Twitter.png'
import Ig from '../assets/images/icon-instagram.png'
import LinkedIn from '../assets/images/Icon-Linkedin.png';
 

 function Footer(){

    return(
        <div className="w-full bg-gray-900 flex items-start justify-center text-white p-15 gap-25 footer">
            <div className="flex flex-col gap-2">
                <p className="text-lg leading-loose ">Cyber</p>
                <p className="text-base ">Subscribe</p>
                <p className="text-sm " >Get 10% off your first order</p>
                <input type="text" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg leading-loose " >Support</p>
                <p className="text-sm w-41 ">111 Bijoy sarani, Dhaka, DH 1515,Bangladesh.</p>
                <p className="text-sm ">exclusive@gmail.com</p>
                <p className="text-sm ">+88015-88888-9999</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg leading-loose">Account</p>
                <p className="text-sm ">My Account</p>
                <p className="text-sm ">Login/Register</p>
                <p className="text-sm ">Carts</p>
                <p className="text-sm ">Wishlist</p>
                <p className="text-sm ">Shop</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg leading-loose"> Quick Link</p>
                <p className="text-sm ">Privacy Policy </p>
                <p className="text-sm ">Terms of Use</p>
                <p className="text-sm ">FAQ</p>
                <p className="text-sm ">Contact</p>
                
            </div>
            <div className="flex flex-col gap-2">
            <p className="text-lg leading-loose">Download App</p>
            <p className="text-xs ">Save $3 with App New User Only</p>
            <div className="flex justify-between">
                <img src={QrCode} alt=""className="w-18 h-18 object-cover" />
                <div className="w-24">
                    <img src={Appstore} alt="" />
                    <img src={Googleplay} alt="" />
                </div>
                
            </div>
            <div className="flex justify-around">
                    <img src={Fb} alt="" />
                    <img src={X} alt="" />
                    <img src={Ig} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
            </div>
        </div>
    )
 }
 export default Footer;