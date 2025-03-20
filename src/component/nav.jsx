import React from "react";

function NavBar(){
    return(
    <div className="p-6 flex justify-center items-center gap-60 ">
        <div>
            <p className="font-bold text-xl">Cyber</p>
        </div>
        <div>
            <ul className="flex justify-center items-center gap-8">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>SignUp</li>
            </ul>
        </div>
        <div>
            <input type="text" className="bg-red-200"/>
        </div>
    </div>
    )
}
export default NavBar;