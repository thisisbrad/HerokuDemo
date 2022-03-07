import React from 'react';
import PropTypes from 'prop-types';
import styles from './cards.module.css';
import Rating from '../inputs/Rating';
import CtgQty from '../counters/CtgQty';

const ProdCard = (props) => {
  let item = {};
  item = props.item;

  return (
    <div className={styles.basicInfo}>
      <div className={styles.block}>
        <div className={styles.textInfo}>
          <p className={styles.heading}>{item.name}</p>
          <p className={styles.text}>{item.price}</p>
        </div>
        <div className={styles.prodCard}>
          <Rating />
          <CtgQty />
        </div>
      </div>
    </div>
  );
};
export default ProdCard;

ProdCard.propTypes = {
  item: PropTypes.object,
};
ProdCard.defaultProps = {
  item: {
    name: 'Product Name',
    price: 3.95,
    image: 'https://picsum.photos/160/200',
  },
};
