import { Route, Routes } from "react-router-dom";

//page

import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default AppRoutes;
