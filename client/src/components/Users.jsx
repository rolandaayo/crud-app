/* eslint-disable no-unused-vars */
import React from 'react'

export default function Users() {
  
  const [users, setUsers] = React.useState([{
    Name: 'John Doe', Email: 'john@example.com', Phone: '123-456-7890', Address: '123 Main St, City, Country',
  }]);

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white mb-8 rounded-lg text-center shadow-lg transform hover:scale-[1.02] transition-transform">Mern Stack | Crud App 👨🏽‍💻</h1>
        
        {/* Create Form */}
        <div className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 border-b-2 border-blue-200 pb-2">Add New User</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}