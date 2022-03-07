import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import MainBtn from '../components/buttons/MainBtn';
import PchsdCard from '../components/cards/PchsdCard';
import Muffin from '../images/muffin.jpeg';
import Cookie from '../images/mm-cookies.jpeg';
import routes from './routes.module.css';

const purchased = {
  orderNum: '#01923465',
  subtotal: 15.85,
  items: [
    {
      name: 'Blueberry Muffins',
      price: 4.95,
      qty: 2,
      image: Muffin,
    },
    {
      name: 'Candy Chip Cookies',
      price: 6.95,
      qty: 1,
      image: Cookie,
    },
  ],
};

const Purchased = () => (
  <div>
    <Header />
    <h1 className={routes.heading}>Purchase Complete</h1>
    <div className={routes.flex}>
      <p className={routes.text}>Order Number: {purchased.orderNum}</p>
      <p className={routes.text}>{purchased.subtotal}</p>
    </div>
    {purchased.items.map((item) => (
        <PchsdCard item={item} />
    ))}
    <PchsdCard />
    <div className={routes.linkContainer}>
      <Link to={'/'} className={routes.textDecor}>
        <MainBtn btnText='Back to Home'/>
      </Link>
    </div>

    <Footer />
  </div>
);
export default Purchased;
