import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home"; // Import the Home component
import About from "../pages/About/About"; // Import the About component
import Contact from "../pages/Contact/Contact"; // Import the Contact component
import Contributors from "../pages/Contributors/Contributors";
import Landing from "../pages/home";

const Router = () => {
  return (
    <Routes>
      {/* Redirect from root (/) to the home page */}
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contributors" element={<Contributors />} />
    </Routes>
  );
};

export default Router;
