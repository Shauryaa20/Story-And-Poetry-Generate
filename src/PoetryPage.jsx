
import './PoetryPage.css';
import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Poems from './components/Poems';
import Footer from './components/Footer';
import Form from './components/Form';

function PoetryGenerator() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Heading />
      <Poems />
      {/* <Footer /> */}
      {/* <Form /> */}
    </div>
  );
}

export default PoetryGenerator;