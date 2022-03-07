import React from 'react';
import Header from '../components/containers/Header';
import CtgCarousel from '../components/containers/CtgCarousel';
import Footer from '../components/containers/Footer';
import MainBtn from '../components/buttons/MainBtn';
import style from '../images/images.module.css';
import '../App.css';
import styles from './routes.module.css';
import PopProdContainer from '../components/containers/PopProdContainer';
import containers from '../components/containers/containers.module.css';

const Home = () => (
  <div className={'container'}>
    <Header />
    <div className={style.hero}></div>
    <CtgCarousel />
    <div className={containers.divContainer}>
     <h1 className={styles.heading}>Popular Products</h1>
    </div>
    <PopProdContainer />
    <div className={containers.divContainer}>
      <h1 className={styles.heading}>Sign up for sweet deals!</h1>
    </div>
    <MainBtn btnText={'Join Now'} />
    <Footer />
  </div>
);
export default Home;
