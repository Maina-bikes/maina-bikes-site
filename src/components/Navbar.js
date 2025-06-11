import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#111',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#FF7F00', margin: 0 }}>Maina Bikes & Skates</h2>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/bikes" style={linkStyle}>Bikes</Link>
        <Link to="/skates" style={linkStyle}>Skates</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'background 0.3s'
};

export default Navbar;
