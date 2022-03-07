import React from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import CtgContainer from './CtgContainer';
import styles from './containers.module.css';

const CtgCarousel = () => (
    <div className={styles.carousel}>
        <BsCaretLeftFill className={styles.iconSmall}/>
        <CtgContainer />
        <BsCaretRightFill className={styles.iconSmall}/>
    </div>
);
export default CtgCarousel;
