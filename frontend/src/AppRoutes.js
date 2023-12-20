// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import NotFound from "./components/partials/NotFound";
import DestinationPage from "./pages/Destination/DestinationPage";
import ToursPage from "./pages/Tours/ToursPage";
import ToursAllPage from "./pages/Tours/ToursAllPage";
import PopularDestination from "./components/home/PopularDestination";
import Dashboard from "./pages/admin/dashboard";
/*

import DestinationPage from './pages/DestinationPage';
import TourPage from './pages/TourPage';
import ContactPage from './pages/ContactPage';*/

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
      <Route path="/destination" element={<PopularDestination />} />
      <Route path="/destination/:id" element={<DestinationPage />} />
      <Route path="/tour" element={<ToursAllPage />} />
      <Route path="/tours/:id" element={<ToursPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
