import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Section from './components/section/Section';
import "../src/App.css";
import FeaturedWedding from './components/Featured-wedding/FeaturedWedding';
import FeaturedBabies from './components/Featured-Babies/FeaturedBabies';


function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Section />
    <FeaturedWedding/>
    <FeaturedBabies />
    </>
  );
}

export default App;
