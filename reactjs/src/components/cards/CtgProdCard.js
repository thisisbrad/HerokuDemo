import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainBtnSml from '../buttons/MainBtnSml';
import CtgQty from '../counters/CtgQty';
import Rating from '../inputs/Rating';
import cardStyle from './cards.module.css';
import imgStyle from '../../images/images.module.css';

const CtgProdCard = (props) => {
  let item = {};
  item = props.item;

  const styles = {
    margin0: {
      margin: '0',
    },
  };

  return (
    <div className={cardStyle.ctgProdCard}>
      <Link to={'/product'} className={cardStyle.ctgText}>
        <div className={cardStyle.textCont}>
          <h2 style={styles.margin0} className={cardStyle.heading}>{item.name}</h2>
          <p style={styles.margin0} className={cardStyle.text}>{item.price}</p>
        </div>
        <div className={cardStyle.textCont}>
          <img src={item.image} alt={'Cookie'} className={imgStyle.prodCard} />
          <div className={cardStyle.rating}>
            <Rating userRating={2}/>
            <div className={cardStyle.counterBtn}>
                <CtgQty />
                <Link to={'/cart'} className={cardStyle.textDecor}>
                  <MainBtnSml btnText={'Add'} />
                </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CtgProdCard;

CtgProdCard.propTypes = {
  item: PropTypes.object,
};

CtgProdCard.defaultProps = {
  item: {
    image: 'https://picsum.photos/115/115',
    name: 'Product Name',
    price: 3.95,
  },
};
