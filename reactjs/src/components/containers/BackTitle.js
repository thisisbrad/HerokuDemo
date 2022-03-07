import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';
import BackBtn from '../buttons/BackBtn';
import styles from './containers.module.css';

const BackTitle = (props) => (
  <div className={styles.backTitle}>
    <BackBtn />
    <PageTitle value={props.value}/>
  </div>
);
export default BackTitle;

BackTitle.proptypes = {
  value: PropTypes.string,
};
BackTitle.defaultProps = {
  value: 'Page Title',
};
