// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import AboutPage from './pages/AboutPage';
import PagesPage from './pages/PagesPage';
import DestinationPage from './pages/DestinationPage';
import TourPage from './pages/TourPage';
import BlogPage from './pages/BlogPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/pages" element={<PagesPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
