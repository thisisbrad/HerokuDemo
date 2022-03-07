import React from 'react';
import PropTypes from 'prop-types';
import inputs from './inputs.module.css';

const Select = (props) => {
  let items = [];
  items = props.items;

  return (
    <div className={inputs.selectC}>
      <label for={'userSelect'}>{props.group}</label>
      <select className={inputs.select}>
        {items.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default Select;
Select.propTypes = {
  items: PropTypes.array,
  group: PropTypes.string,
};
Select.defaultProps = {
  items: ['CA', 'GA', 'OR', 'TX', 'WA'],
  group: 'State',
};
