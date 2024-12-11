/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      alert("email or password is empty");
      setIsLoading(false);
      return;
    }
    try {
      const signupreq = await fetch(
        "https://crud-backend-nrbo.onrender.com/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            name,
          }),
        }
      );
      const data = await signupreq.json();
      console.log(data);
      alert(data.message);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      navigator("/");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-800 font-['Google_Sans'] tracking-tight">
            Creat Account in Crud App ✍🏽
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 font-['Roboto']">
            Welcome
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700 font-['Google_Sans']"
            >
              Full Name
            </label>
            <input
              id="full name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 font-['Roboto']"
            />
          </div>
          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700 font-['Google_Sans']"
            >
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 font-['Roboto']"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 font-['Google_Sans']"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 font-['Roboto']"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            onClick={handleSignup}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-['Google_Sans'] transition-all duration-200"
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
            ) : null}
            {isLoading ? "Creating..." : "Create Account"}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600 font-['Roboto']">
              Already have an account?
            </p>

            <Link
              to={"/login"}
              hrefLang="/login"
              className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 font-['Google_Sans'] transition-all duration-200"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
