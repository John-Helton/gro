// src/pages/HomePage.js
import React from 'react';
import HomeHeader from '../components/home/HomeHeader';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import PopularDestination from '../components/home/PopularDestination';
import PopularTours from '../components/home/PopularTours';

function HomePage() {
  return (
    <div>
      <HomeHeader />
      <FeaturedDestinations />
      <PopularDestination />
      <PopularTours />
    
    </div>
  );
}

export default HomePage;
