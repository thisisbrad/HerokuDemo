import React from 'react';
import PropTypes from 'prop-types';
import images from '../../images/images.module.css';
import cards from './cards.module.css';

const PchsdCard = (props) => {
  let item = {};
  item = props.item;

  const styles = {
    margin0: {
      margin: '0',
    },
  };

  return (
    <div className={cards.purchaseC}>
      <img src={item.image} alt={''} className={images.prchsd}/>
      <div className={cards.purchaseText}>
        <h2 style={styles.margin0} className={cards.purchaseH}>{item.name}</h2>
        <p style={styles.margin0} className={cards.text2}>{item.price}</p>
      </div>
    </div>
  );
};
export default PchsdCard;

PchsdCard.propTypes = {
  item: PropTypes.object,
};
PchsdCard.defaultProps = {
  item: {
    image: 'https://picsum.photos/60/60',
    name: 'Product Name',
    price: 3.95,
  },
};
