// src/pages/HomePage.js
import React from 'react';
import HomeHeader from '../components/home/HomeHeader';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import Testimonials from '../components/common/Testimonials';

function HomePage() {
  return (
    <div>
      <HomeHeader />
      <FeaturedDestinations />
      
      <Testimonials />
      {/* Otros componentes de la página de inicio */}
    </div>
  );
}

export default HomePage;
