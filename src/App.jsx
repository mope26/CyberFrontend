/* eslint-disable no-unused-vars */
import React from "react";
import Contact from "./pages/contact";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
