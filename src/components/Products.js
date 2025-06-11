import React from 'react';
import { FaBiking, FaSkating, FaShoppingCart } from 'react-icons/fa';

const cardStyle = {
  width: '300px',
  margin: '1rem',
  padding: '1.5rem',
  borderRadius: '16px',
  backgroundColor: '#FF7F00',
  color: '#fff',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s, background-color 0.3s',
  cursor: 'pointer'
};

const hoverStyle = {
  backgroundColor: '#e66900',
  transform: 'scale(1.05)'
};

const Products = () => {
  return (
    <section className="products" style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Services</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card icon={<FaSkating size={40} />} title="Skates for Hire" text="Only 100 bob per hour" />
        <Card icon={<FaBiking size={40} />} title="Mountain Bikes for Hire" text="Also 100 bob per hour" />
        <Card icon={<FaShoppingCart size={40} />} title="Bikes and Skates for Sale" text="Affordable prices. Come check them out!" />
      </div>
    </section>
  );
};

// Separate card as a reusable component with hover
const Card = ({ icon, title, text }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{ ...cardStyle, ...(hover ? hoverStyle : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ marginBottom: '0.5rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Products;
