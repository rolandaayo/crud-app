/* eslint-disable no-unused-vars */
import React from "react";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/Updateuser";
import Login from "./pages/Login";
import CreateNewAccout from "./pages/CreateNewAccout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/CreateNewAccount" element={<CreateNewAccout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}