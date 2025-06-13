import React from 'react';
import '../Carousel/carousel.css';
import './container.css'
import styles from './index.module.scss'
const Container = ({ children }) => (
  <div className={`${styles.navbar} `}>
    {children}
  </div>
);

export default Container;
