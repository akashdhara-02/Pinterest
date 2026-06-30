import React from 'react';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Singup';
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About"
import Profile from './pages/profile';
import Dashboard from "./pages/Dashboard"
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}
export default App