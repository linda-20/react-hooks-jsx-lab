// Home.js

import React from 'react';
import { name, city } from '../data/data'; // Adjust the path as needed

const Home = () => {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
};

export default Home;
