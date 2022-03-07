import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../../images/images.module.css';
import style2 from './cards.module.css';

const CtgCard = (props) => (
  <div className={style2.ctgContainer}>
    <Link to={'/categories'} className={style2.textDecor}>
      <img src={props.src} alt={''} className={style.category} />
      <p className={style2.ctgText}>{props.ctgName}</p>
    </Link>
  </div>
);
export default CtgCard;

CtgCard.propTypes = {
  src: PropTypes.string,
  ctgName: PropTypes.string,
};

CtgCard.defaultProps = {
  src: 'https://picsum.photos/95/95',
  ctgName: 'Category',
};
