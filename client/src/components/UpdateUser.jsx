/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://crud-backend-nrbo.onrender.com/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name || "");
        setEmail(result.data.email || "");
        setPhone(result.data.phone || "");
        setAddress(result.data.address || "");
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("https://crud-backend-nrbo.onrender.com/updateUser/" + id, {
        name,
        email,
        phone,
        address,
      })
      .then(() => {
        const popup = document.createElement("div");
        popup.className =
          "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl z-50 animate-bounce";
        popup.innerHTML = `
          <div class="text-center">
            <div class="text-5xl mb-4">✅</div>
            <h3 class="text-xl font-bold text-green-600 mb-2">Success!</h3>
            <p class="text-gray-600">User updated successfully</p>
          </div>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
          popup.classList.add(
            "opacity-0",
            "transition-opacity",
            "duration-500"
          );
          setTimeout(() => {
            document.body.removeChild(popup);
            navigate("/users");
          }, 500);
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 flex items-center justify-center md:block">
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-blue-600 border border-blue-100"
      >
        <span>←</span> Back to Home
      </button>

      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
        {/* Create Form */}

        <div className="mb-12 bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-8 text-blue-700 border-b-2 border-blue-200 pb-3 flex items-center gap-2">
            <span className="text-blue-500">⬆️</span> Update User
          </h2>

          <form onSubmit={Update} className="space-y-6">
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <button
              to={`/`}
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 font-semibold"
            >
              <span>Update User</span>
              <span className="text-xl">➕</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
