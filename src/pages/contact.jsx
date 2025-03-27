import React from "react";
import Footer from "../component/footer";
import Phone from "../assets/images/icons-phone.png";
import NavBar from "../component/nav";
import Email from "../assets/images/icons-mail.png";
function Contact(){
return(
    <div>
         <NavBar/>
        <div className="p-5 px-60  flex flex-col md:flex-row gap-5 py-32">
		<div className="bg-white shadow-md  p-5 flex flex-col  gap-5 max-w-xl mx-auto w-fit">
		<div className="flex gap-5  md:flex-row mb-3 ">
            <img src={Phone} alt="" />
            <h2 className="font-bold text-lg">Call To Us</h2>
			</div> 
            <p className="text-sm">We are available 24/7, 7 days a week.
			<br/>
			<br/> 
                Phone: +8801611112222</p>
				<hr className="my-4 border-gray-300 w-1/2 mx-auto" />

            <div className="flex gap-5  md:flex-row mb-3 ">
            <img src={Email} alt="" />
            <h2 className="font-bold text-lg">Write To Us</h2>
			</div> 
			
            <p  className="text-sm">Fill out our form and we will contact you 
				<br/>within 24 hours.
				<br/> 
				<br/> 
				Emails: customer@exclusive.com
				<br/> 
				<br/> 
				Emails: support@exclusive.com</p>
		</div>
		<div className="bg-white shadow-md  p-5 flex flex-col  gap-5 mx-mx-auto w-3/4">
		<form className="max-w-full  space-y-4 ">
			<div className="grid grid-cols-3 gap-4">
			<input type="text" placeholder="Your Name*" required className="w-full p-3 bg-gray-100 focus:outline-none "/>
			<input type="text" placeholder="Your Email*" required className="w-full p-3 bg-gray-100 focus:outline-none "/>

			<input type="text" placeholder=" Your Phone*"  className="w-full p-3 bg-gray-100 focus:outline-none " required/>
			</div>
			<textarea placeholder="Your Message" className="w-full h-50 p-3 bg-gray-100 border-gray-300 focus:outline-none resize-none"></textarea>
			<div className="flex justify-end">
			<button className=" w-[40%] text-white h-10 rounded" style={{ backgroundColor: "rgba(219, 68, 68, 1)" }} >Send Message</button>

			</div>
		</form>
			
			</div>  
        </div>
       
        <Footer/>
    </div>
)

}
export default Contact