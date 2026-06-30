import React, { useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">

      {/* Close Button */}
      <Link to="/home" className="absolute top-4 right-4">   <RxCross2 size={24} /></Link>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Settings
        </h1>

        {/* Profile Section */}
        <div className="border-b pb-4 mb-4">

          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            Account
          </h2>

          <div className="flex flex-col gap-3">

            <input
              type="text"
              placeholder="Username"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

          </div>
        </div>

        {/* Preferences */}
        <div className="border-b pb-4 mb-4">

          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            Preferences
          </h2>

          {/* Dark Mode */}
          <div className="flex justify-between items-center mb-3">

            <span className="text-gray-600">Dark Mode</span>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-1 rounded-full text-sm transition ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200"
                }`}
            >
              {darkMode ? "ON" : "OFF"}
            </button>

          </div>

          {/* Notifications */}
          <div className="flex justify-between items-center">

            <span className="text-gray-600">Notifications</span>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`px-4 py-1 rounded-full text-sm transition ${notifications ? "bg-red-600 text-white" : "bg-gray-200"
                }`}
            >
              {notifications ? "Enabled" : "Disabled"}
            </button>

          </div>

        </div>

        {/* Security */}
        <div className="mb-4">

          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            Security
          </h2>

          <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
            Change Password
          </button>

        </div>

        {/* Save */}
        <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition">
          Save Changes
        </button>

      </div>

    </div>
  );
};

export default Settings;