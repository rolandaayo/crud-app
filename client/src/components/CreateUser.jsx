/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Createuser() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-blue-600 border border-blue-100"
      >
        <span>←</span> Back to Home
      </button>
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white mb-8 rounded-xl text-center shadow-xl transform hover:scale-[1.02] transition-transform sticky top-0 z-50 flex items-center justify-center gap-3">
          Create Read Undo Delete <span className="animate-bounce">🤪</span>
        </h1>
        
        {/* Create Form */}
        <div className="mb-12 bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-8 text-blue-700 border-b-2 border-blue-200 pb-3 flex items-center gap-2">
            <span className="text-blue-500">✨</span> Add New User
          </h2>
          <form className="space-y-6">
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.01]">
              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 font-semibold"
            >
              <span>Add User</span>
              <span className="text-xl">➕</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}