import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-[90vh] px-6 py-8">

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Create the life you love on Pinterest
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Join Pinterest for Free
          </button>

          <Link
            to="/login"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-center"
          >
            I Already Have an Account
          </Link>

        </div>

      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">

        <img
          src="./right.png"
          alt="Pinterest"
          className="w-full max-w-md lg:max-w-lg h-auto"
        />

      </div>

    </div>
  );
};

export default Body;