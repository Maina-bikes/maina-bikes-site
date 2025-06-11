import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import Bikes from './components/Bikes';
import Skates from './components/Skates';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Products />
          </>
        } />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/skates" element={<Skates />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
