import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import styles from './buttons.module.css';
import containers from '../containers/containers.module.css';

const MainBtn = (props) => (
  <div className={containers.divContainer}>
    <Button className={styles.mainBtn}>{props.btnText}</Button>
  </div>
);
export default MainBtn;

MainBtn.propTypes = {
  btnText: PropTypes.string,
};
MainBtn.defaultProps = {
  btnText: 'Add to Cart',
};
