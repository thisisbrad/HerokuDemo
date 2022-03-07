import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import MainBtn from '../components/buttons/MainBtn';
import BackTitle from '../components/containers/BackTitle';
import Muffin from '../images/muffin.jpeg';
import styles from './routes.module.css';
import ProdCard from '../components/cards/ProdCard';
import ReviewCard from '../components/cards/ReviewCard';

const item = {
  name: 'Blueberry Muffins',
  price: 4.95,
  image: Muffin,
  description: 'Luxurious blueberry muffins with a lemon sugar on top.',
  baking: 'Bake at 350 degrees farenheit for 30 minutes. Put a knife into the muffin. If it comes out clean they are done.',
  reviews: [
    {
      user: 'Username',
      rating: 3,
      date: '02/02/2022',
      content: 'This is content. Are you content with this content? You can change this content if you are not content with this content.',
    },
  ],
};

const Product = () => (
  <div>
    <Header />
    <BackTitle value={item.name}/>
    <div className={styles.container}>
      <img src={item.image} alt={item.name} className={styles.prodImage} />
    </div>
    <ProdCard item={item}/>
    <div className={styles.linkContainer}>
      <Link to={'/cart'} className={styles.textDecor}>
        <MainBtn btnText={'Add to Cart'}/>
      </Link>
    </div>
    <div className={styles.prodInfo}>
      <div className={styles.titleText}>
        <h1 className={styles.heading}>Description</h1>
        <p className={styles.textAlign}>{item.description}</p>
      </div>
      <div className={styles.titleText}>
        <h1 className={styles.heading}>Baking</h1>
        <p className={styles.textAlign}>{item.baking}</p>
      </div>
      <h1 className={styles.heading}>Reviews</h1>
      {item.reviews.map((review) => (
        <ReviewCard review={review}/>
      ))}
    </div>
    <Footer />
  </div>
);
export default Product;
