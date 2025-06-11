import React from 'react';
import '../Carousel/carousel.css';
import './container.css'
import styles from './index.module.scss'
const Container = ({ children }) => (
  <div className={`my-custom-container w-100 ${styles.navbar}`}>
    {children}
  </div>
);

export default Container;
