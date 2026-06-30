import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white">

      {/* Top Navbar */}
      <div className="flex justify-between items-center h-16 px-4">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/pin.png"
            alt="logo"
            className="h-8 w-8 md:h-10 md:w-10"
          />

          <h1 className="ml-2 text-xl md:text-2xl font-bold text-red-500">
            Pinterest
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">

          <Link
            to="/about"
            className="font-bold hover:text-red-500"
          >
            About
          </Link>

          <Link
            to="/create"
            className="font-bold hover:text-red-500"
          >
            Create
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-xl bg-gray-600 text-white hover:bg-gray-700"
          >
            Sign up
          </Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white">

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="font-bold"
          >
            About
          </Link>

          <Link
            to="/create"
            onClick={() => setOpen(false)}
            className="font-bold"
          >
            Create
          </Link>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-xl bg-red-600 text-white text-center"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-xl bg-gray-600 text-white text-center"
          >
            Sign up
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;