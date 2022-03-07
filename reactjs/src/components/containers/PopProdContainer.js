import React from 'react';
import styles from './containers.module.css';
import PopProdCard from '../cards/PopProdCard';

const PopProdContainer = () => (
    <div className={styles.popProd}>
      <PopProdCard />
      <PopProdCard />
      <PopProdCard />
      <PopProdCard />
    </div>
);
export default PopProdContainer;
