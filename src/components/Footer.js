import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Maina Bikes and Skates. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '40px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#1e1e1e',
    color: '#aaa',
    borderTop: '2px solid #ff6600'
  }
};

export default Footer;
