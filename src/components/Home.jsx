import React from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Section from '../components/section/Section';
import "../App.css";
import FeaturedWedding from '../components/Featured-wedding/FeaturedWedding';
import FeaturedBabies from '../components/Featured-Babies/FeaturedBabies';
import FeaturedOccasion from '../components/Featured-Occasion/FeaturedOccasion';
import FeaturedFood from '../components/Featured-Food/FeaturedFood';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';
import FeaturedAround  from '../components/Featured-Around/FeaturedAround';


function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <FeaturedAround />
    <Section />
    <FeaturedWedding/>
    <FeaturedBabies />
    <FeaturedOccasion />
    <FeaturedFood/>
    <Testimonial/>
    <Footer/>
    </>
    
  );
}

export default App;