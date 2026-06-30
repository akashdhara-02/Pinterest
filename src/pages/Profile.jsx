import React from "react";

import { RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Section */}
      <div className="bg-white shadow-sm">
        
        {/* Close Button */}
        <Link to="/home" className="absolute top-4 right-4">   <RxCross2 size={24} /></Link>

        <div className="max-w-4xl mx-auto p-6 flex flex-col items-center">

          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
            A
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold mt-3 text-gray-800">
            User Name
          </h1>

          {/* Email / Bio */}
          <p className="text-gray-500 text-sm">
            user@example.com
          </p>

          <p className="text-center text-gray-600 mt-2 max-w-md">
            Creative thinker • Explorer • Building ideas one pin at a time
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-5">

            <div className="text-center">
              <h2 className="font-bold text-lg">24</h2>
              <p className="text-sm text-gray-500">Pins</p>
            </div>

            <div className="text-center">
              <h2 className="font-bold text-lg">120</h2>
              <p className="text-sm text-gray-500">Followers</p>
            </div>

            <div className="text-center">
              <h2 className="font-bold text-lg">80</h2>
              <p className="text-sm text-gray-500">Following</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">

            <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
              Edit Profile
            </button>

            <button className="border px-5 py-2 rounded-full hover:bg-gray-50 transition">
              Share
            </button>

          </div>

        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-6">

        <h2 className="text-lg font-semibold mb-4">Your Pins</h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-40 bg-white rounded-xl shadow hover:shadow-md transition"
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default Profile;