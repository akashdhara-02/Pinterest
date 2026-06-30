import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from 'react-icons/rx';
const About = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-md rounded-xl p-8 text-center">

        {/* Close Button */}
        <Link to="/" className="absolute top-4 right-4">   <RxCross2 size={24} /></Link>


        <h1 className="text-4xl font-bold text-red-600 mb-4">
          About Pinterest
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Pinterest is a visual discovery platform where ideas come to life.
          Users explore inspiration across design, fashion, technology,
          lifestyle, and more. It helps people save and organize ideas into
          collections called boards.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Our mission is to help you discover what you love and inspire you
          to create a life you enjoy.
        </p>

      </div>

    </div>
  );
};

export default About;