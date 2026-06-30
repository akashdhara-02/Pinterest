import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from "react-router-dom";



const Login = () => {














  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handlelogin = (e) => {
    e.preventDefault();


    if(!email || !password){
      alert("PLease Fill ")
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("NO Account Found")
      return;
    }
    if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Success!")
      navigate("/home");
    } else {
      alert("invalid Inputs.")
    }
  };

















  return (
    <form onSubmit={handlelogin}>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">


        <div className="bg-white p-8 rounded-xl shadow-lg w-96 relative">

          {/* Close Button */}
          <Link to="/" className="absolute top-4 right-4">   <RxCross2 size={24} /></Link>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-6">
            Welcome to Pinterest
          </h1>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-4">
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgotten your password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-red-500 hover:bg-red-700 text-white py-3 rounded-lg transition-all duration-300">
            Log In
          </button>
        </div>

      </div>
    </form>

  );
};

export default Login;