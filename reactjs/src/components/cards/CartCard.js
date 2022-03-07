import React from 'react';
import PropTypes from 'prop-types';
import { BsXCircle } from 'react-icons/bs';
import CartQty from '../counters/CartQty';
import cardStyle from './cards.module.css';
import imgStyle from '../../images/images.module.css';

const CartCard = (props) => {
  let item = {};
  item = props.item;

  const styles = {
    margin0: {
      margin: '0',
    },
  };

  return (
    <div className={cardStyle.container}>
      <img src={item.image} alt={''} className={imgStyle.cartImg}/>
      <div className={cardStyle.innerContainer}>
          <h1 style={styles.margin0} className={cardStyle.heading}>{item.name}</h1>
          <CartQty value={item.qty}/>
          <p style={styles.margin0} className={cardStyle.text}>{item.price}</p>
      </div>
      <BsXCircle className={cardStyle.icon}/>
    </div>
  );
};
export default CartCard;

CartCard.propTypes = {
  item: PropTypes.object,
};
CartCard.defaultProps = {
  item: {
    image: 'https://picsum.photos/100/100',
    name: 'Product Name',
    price: 3.95,
  },
};
