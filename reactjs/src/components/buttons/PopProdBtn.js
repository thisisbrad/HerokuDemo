import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart2, BsHeart } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import buttons from './buttons.module.css';

const PopProdButton = () => (
  <div>
    <Link to={'/cart'}>
      <Button className={buttons.circleBtn}>
        <BsCart2 className={buttons.icon}/>
      </Button>
    </Link>
    <Button className={buttons.circleBtn}>
      <BsHeart className={buttons.icon}/>
    </Button>
  </div>
);
export default PopProdButton;
