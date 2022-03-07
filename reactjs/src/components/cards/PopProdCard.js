import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PopProdButton from '../buttons/PopProdBtn';
import styles from './cards.module.css';
import images from '../../images/images.module.css';

const PopProdCard = (props) => {
  let item = {};
  item = props.item;

  return (
    <div className={styles.ppContainer}>
      <Link to={'/product'} className={styles.textDecor}>
      <img src={item.image} alt={''} className={images.popProd}/>
        <PopProdButton />
        <div>
          <p className={styles.heading}>{item.name}</p>
          <p className={styles.text}>{item.price}</p>
        </div>
      </Link>
    </div>
  );
};
export default PopProdCard;

PopProdCard.propTypes = {
  item: PropTypes.object,
};
PopProdCard.defaultProps = {
  item: {
    name: 'Product Name',
    price: 3.95,
    image: 'https://picsum.photos/160/200',
  },
};
