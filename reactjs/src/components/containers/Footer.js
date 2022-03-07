import React from 'react';
import List from './List';
import styles from './containers.module.css';

const items = ['Home', 'Baked Goods', 'Categories', 'About', 'Contact'];
const social = ['Facebook', 'Twitter', 'Instagram', 'Snapchat'];

const Footer = () => (
    <div className={styles.footer}>
      <List listItems={items}/>
      <List listItems={social} />
    </div>
);
export default Footer;
