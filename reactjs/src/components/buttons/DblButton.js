import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styles from './buttons.module.css';

const MainBtn = () => (
  <div className={styles.container}>
    <Link to={'/cart'}>
      <Button className={styles.leftBtn}>Cancel</Button>
    </Link>
    <Link to={'/purchased'} >
      <Button className={styles.rightBtn}>Purchase</Button>
    </Link>
  </div>
);
export default MainBtn;
