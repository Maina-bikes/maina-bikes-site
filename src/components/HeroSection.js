import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>MAINA BIKES AND SKATES</h1>
      <p style={styles.subtitle}>AFFORDABLE BIKES AND SKATES FOR HIRE</p>
    </section>
  );
};

const styles = {
  hero: {
    padding: '80px 20px',
    textAlign: 'center',
    backgroundColor: '#111',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    color: '#ff6600',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
  },
};

export default HeroSection;
