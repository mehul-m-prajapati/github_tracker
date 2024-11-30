import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home"; // Import the Home (Dashboard) component
import About from "../pages/About/About"; // Import the About component
import Contact from "../pages/Contact/Contact"; // Import the Contact component
import Contributors from "../pages/Contributors/Contributors";
import Profile from "../pages/Profile/Profile";

const Router = () => {
  return (
    <Routes>
      {/* Redirect from root (/) to the dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/contributors" element={<Contributors />} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
};

export default Router;
