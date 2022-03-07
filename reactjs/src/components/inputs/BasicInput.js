import React from 'react';
import PropTypes from 'prop-types';
import inputs from './inputs.module.css';

const BasicInput = (props) => (
  <div>
    <input type={props.type} placeholder={props.placeholder} aria-label={`${props.placeholder} input`}
    className={inputs.basicLrg} />
  </div>
);
export default BasicInput;
BasicInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
BasicInput.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
};
