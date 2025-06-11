import React from 'react';

const Bikes = () => {
  const bikes = [
    { name: "Mountain Bike", price: "100 bob/hr" },
    { name: "BMX", price: "80 bob/hr" },
    { name: "Hybrid Bike", price: "120 bob/hr" }
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Available Bikes for Booking</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {bikes.map((bike, index) => (
          <div key={index} style={{
            backgroundColor: '#FF7F00',
            color: '#fff',
            padding: '1rem',
            borderRadius: '12px',
            width: '250px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}>
            <h3>{bike.name}</h3>
            <p>{bike.price}</p>
            <button style={{
              backgroundColor: '#fff',
              color: '#FF7F00',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
