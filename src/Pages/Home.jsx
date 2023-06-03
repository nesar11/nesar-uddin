import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Services from './Services';
import About from './About';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Categories />
      <Services />
      <Projects />

      <Footer />
    </div>
  );
};

export default Home;
