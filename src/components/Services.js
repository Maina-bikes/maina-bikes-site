import React from 'react';

const Services = () => {
  return (
    <section style={styles.section} id="services">
      <h2 style={styles.heading}>Our Services</h2>
      <ul style={styles.list}>
        <li>🚲 Bikes for Hire</li>
        <li>🛼 Skates for Hire</li>
        <li>🔧 Repairs</li>
      </ul>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#222',
    padding: '40px 20px',
    color: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#ff6600',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.2rem',
    lineHeight: '2',
  },
};

export default Services;
