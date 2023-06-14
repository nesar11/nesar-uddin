import React from 'react';

import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Projects from '../components/Projects';
import Services from './Services';
import About from './About';

const Home = () => {
  return (
    <React.Fragment>
      <Slider />
      <About />
      <Categories />
      <Services />
      <Projects />
    </React.Fragment>
  );
};

export default Home;
