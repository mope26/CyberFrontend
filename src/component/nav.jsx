import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/images/Cart1.png";
import profile from "../assets/images/profile.png";
import wishlist from "../assets/images/Wishlist.png";

function NavBar() {
  return (
    <div className="p-6 flex justify-center items-center gap-60 border-b border-gray-300">
      <div>
        <p className="font-bold text-xl">Cyber</p>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-10">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link to="/">SignUp</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-5 nav_function">
        <input type="text" className="bg-red-200" />
        <img src={wishlist} alt="" />
        <img src={cart} alt="" />
        <img src={profile} alt="" />
      </div>
    </div>
  );
}
export default NavBar;
