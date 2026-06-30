import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {







  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
 
    if (!name || !email || !password || !confirmPass) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPass) {
      alert("Passwords do not match.");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful 🎉");

    navigate("/");
  };











  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Create your account
          </h2>
          <p className="text-sm text-gray-500">
            Join to discover ideas that inspire you
          </p>
        </div>


        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">


          {/* Inputs */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) =>setConfirmPass(e.target.value)}
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
            Sign Up
          </button>
          
        </form>

      </div>
    </div>
  );
};

export default Signup;