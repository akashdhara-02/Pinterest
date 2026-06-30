import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHome, FaPlus, FaUserCircle } from "react-icons/fa";
import { MdSettings, MdNotifications, MdDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "56495438-9484d9948d849567db0093b96";

  // Auth guard
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/");
    }
  }, [navigate]);

  // Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://pixabay.com/api/", {
          params: {
            key: API_KEY,
            q: search || "nature",
            image_type: "photo",
            per_page: 50,
          },
        });

        setImages(res.data.hits || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchImages, 400); // simple debounce
    return () => clearTimeout(delay);
  }, [search]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex">

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-20 md:flex md:flex-col md:items-center md:gap-8 md:bg-gray-100 md:shadow-md md:py-6 z-50">

        <img src="/pin.png" alt="logo" className="w-10 h-10" />

        <Link to="/home"><FaHome size={24} /></Link>
        <Link to="/create"><FaPlus size={24} /></Link>
        <Link to="/dashboard"><MdDashboard size={24} /></Link>
        <Link to="/notifications"><MdNotifications size={24} /></Link>

        <div className="mt-auto">
          <Link to="/settings"><MdSettings size={24} /></Link>
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 md:ml-20">

        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-white shadow-sm flex items-center gap-3 p-3">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search images..."
            className="flex-1 bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Title */}
        <div className="px-5 pt-4">
          <h1 className="text-xl md:text-3xl font-bold capitalize">
            {search || "Nature"} Images
          </h1>
        </div>

        {/* Content Grid */}
        <div className="p-5 columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4">

          {loading ? (
            <p className="text-gray-500">Loading images...</p>
          ) : images.length > 0 ? (
            images.map((img) => (
              <img
                key={img.id}
                src={img.webformatURL}
                alt={img.tags}
                className="mb-4 w-full rounded-xl shadow hover:scale-[1.03] transition duration-300"
              />
            ))
          ) : (
            <p className="text-gray-500">No images found.</p>
          )}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 bg-gray-200 shadow-lg rounded-2xl flex justify-around items-center w-[92%] py-2 z-50">

        <Link to="/home"><FaHome size={26} /></Link>
        <Link to="/create"><FaPlus size={26} /></Link>
        <Link to="/notifications"><MdNotifications size={26} /></Link>
        <Link to="/settings"><MdSettings size={26} /></Link>
        <Link to="/profile"><FaUserCircle size={26} /></Link>

      </div>

    </div>
  );
};

export default Home;