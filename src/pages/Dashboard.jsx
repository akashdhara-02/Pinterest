import React from "react";
import { FaUser, FaHeart, FaEye, FaChartLine } from "react-icons/fa";

import { RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";

const Dashboard = () => {
  const cards = [
    { title: "Users", value: "1,240", icon: <FaUser />, color: "text-blue-600" },
    { title: "Likes", value: "8,560", icon: <FaHeart />, color: "text-red-600" },
    { title: "Views", value: "32,100", icon: <FaEye />, color: "text-green-600" },
    { title: "Growth", value: "+12.5%", icon: <FaChartLine />, color: "text-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
        
        {/* Close Button */}
        <Link to="/home" className="absolute top-4 right-4">   <RxCross2 size={24} /></Link>

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5 hidden md:block">
        <h1 className="text-xl font-bold text-red-600 mb-6">
          Dashboard
        </h1>

        <ul className="space-y-4 text-gray-600">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Analytics</li>
          <li className="hover:text-red-600 cursor-pointer">Users</li>
          <li className="hover:text-red-600 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Overview
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <div className={`text-2xl mb-2 ${card.color}`}>
                {card.icon}
              </div>
              <h3 className="text-gray-500 text-sm">{card.title}</h3>
              <p className="text-xl font-bold text-gray-800">
                {card.value}
              </p>
            </div>
          ))}

        </div>

        {/* Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-700 font-semibold mb-4">
            Performance Chart
          </h3>

          <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
            Chart Area (connect Chart.js or Recharts here)
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;