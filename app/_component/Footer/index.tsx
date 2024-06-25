import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const imageStyles: React.CSSProperties = {
    pointerEvents: 'none',
  };

  return (
    <footer className={styles.footer}>
      <p>
        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        Cogwork
      </p>
      <img
        src='/images/roblogo.png'
        alt='logo robertwagar@gmail.com'
        style={imageStyles}
      />
    </footer>
  );
};

export default Footer;
