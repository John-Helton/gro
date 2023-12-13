// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import NotFound from "./components/partials/NotFound";
/*

import DestinationPage from './pages/DestinationPage';
import TourPage from './pages/TourPage';
import ContactPage from './pages/ContactPage';*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
