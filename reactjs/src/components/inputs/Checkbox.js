import React from 'react';
import PropTypes from 'prop-types';
import inputS from './inputs.module.css';

const styles = {
  container: {
    margin: '1rem',
  },
};

const Checkbox = (props) => (
  <div style={styles.container}>
    <input type={'checkbox'} name={'option'} value={props.value} />
    <label for={'option'} className={inputS.text}>{props.label}</label>
  </div>
);
export default Checkbox;

Checkbox.proptypes = {
  value: PropTypes.string,
  label: PropTypes.string,
};
Checkbox.defaultProps = {
  value: '',
  label: 'Label to the box',
};
