/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Createuser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    axios
      .post("https://crud-backend-nrbo.onrender.com/CreateUser", {
        name,
        email,
        phone,
        address,
      })
      .then((res) => {
        console.log(res.data);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/users");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false);
      });
  };

  const handleNavigate = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate("/users");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce z-50">
          <div className="flex items-center gap-2">
            <span className="text-xl">✅</span>
            <p>User added successfully!</p>
          </div>
        </div>
      )}
      <button
        onClick={handleNavigate}
        disabled={isNavigating}
        className="fixed top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl flex items-center gap-2 font-semibold"
      >
        {isNavigating ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </span>
        ) : (
          <span>← Back Home</span>
        )}
      </button>

      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white mb-8 rounded-xl text-center shadow-xl transform hover:scale-[1.02] transition-transform sticky top-0 z-50 flex items-center justify-center gap-3">
          Create New User<span className="animate-bounce">🏋🏽‍♀️</span>
        </h1>

        {/* Create Form */}
        <div className="mb-12 bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 font-semibold"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Adding User...
                </span>
              ) : (
                <>
                  <span>Add User</span>
                  <span className="text-xl">➕</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
