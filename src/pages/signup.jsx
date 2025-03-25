import React, { useState } from "react";
import Sideimage from "../assets/images/Side Image.png";
import NavBar from "../component/nav";
import Footer from "../component/footer";
import back from "../assets/images/back.png";
import Loader from "./loader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [message, setMessage] = useState("");
  const [isLoading, SetIsLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value && index < otp.length - 1) {
      e.target.nextSibling?.focus();
    }

    if (e.key === "Backspace" && index > 0 && !value) {
      e.target.previousSibling?.focus();
    }
  };

  const sendOTP = async (e) => {
    e.preventDefault();
    SetIsLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8080/verifyOTP",
        formData
      );
      const data = response.data;
      console.log("Response: ", data);

      if (data.message !== "OTP Sent") {
        setMessage(data.message);
      } else {
        setContent("otp");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      SetIsLoading(false);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    SetIsLoading(true);
    setMessage("");
    const otpCode = otp.join("");

    const finalFormData = {
      ...formData,
      otp: otpCode,
    };
    console.log(finalFormData);

    try {
      const response = await axios.post(
        "http://localhost:8080/SignUp",
        finalFormData
      );
      const data = response.data;
      console.log(response.data);
      if (data.message !== "200 OK") {
        setMessage(data.message);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      SetIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <NavBar />
      <div className="py-8 h-full w-full flex items-center justify-center">
        <div className="h-full w-[60%]">
          <img
            src={Sideimage}
            alt="Side"
            className="object-cover w-full h-4/5"
          />
        </div>
        <div className="w-[40%] flex items-center justify-center p-8">
          {content === null ? (
            <div className="flex flex-col gap-4 w-[65%] pb-[16rem]">
              <h1 className="text-4xl">Create an account</h1>
              <p className="text-sm">Enter your details below</p>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 outline-none p-2"
                name="name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 outline-none p-2"
                name="email"
                onChange={handleChange}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 outline-none p-2"
                name="password"
                onChange={handleChange}
                required
              />
              <div className="text-sm text-red-800 text-center">
                {message && <p>{message}</p>}
              </div>
              <button
                className="p-2 bg-red-400 text-white rounded-md"
                onClick={sendOTP}
              >
                Create Account
              </button>

              <p className="text-center text-xs">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          ) : content === "otp" ? (
            <div className="flex flex-col gap-4 w-[65%] pb-[16rem]">
              <p
                onClick={() => setContent(null)}
                className="cursor-pointer text-blue-500"
              >
                <img src={back} alt="" />
              </p>
              <h2 className="text-lg">Enter the OTP sent to your mail</h2>
              <div className="flex gap-2">
                {otp.map((data, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleOtpChange(e, i)}
                    className="w-10 h-10 text-center border border-gray-300"
                  />
                ))}
              </div>
              <div className="text-sm text-red-800 text-center">
                {message && <p>{message}</p>}
              </div>
              <button
                className="p-2 bg-green-400 text-white rounded-md"
                onClick={signup}
              >
                Send OTP
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
